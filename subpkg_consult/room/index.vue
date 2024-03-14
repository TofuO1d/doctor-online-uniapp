<script setup>
  import { ref } from 'vue'
  import { io } from 'socket.io-client'
  import { useUserStore } from '@/stores/user'
  import { orderDetailApi } from '@/services/consult'
  import dayjs from 'dayjs'

  import roomStatus from './components/room-status.vue'
  import patientInfo from './components/patient-info.vue'
  import notifyInfo from './components/notify-info.vue'
  import messageInfo from './components/message-info.vue'
  import prescriptionInfo from './components/prescription-info.vue'
  import rateInfo from './components/rate-info.vue'

  // 用户登录信息（不具有响应式）
  const { token, userId } = useUserStore()

  // 消息列表
  const messageList = ref([])
  // 问诊订单详情
  const orderDetail = ref({})
  // 文字消息
  const textMessage = ref('')
  // 关闭下拉动画交互
  const refreshTrigger = ref(false)
  // 上次获取历史消息节点
  const lastTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

  // 获取地址中的参数
  const props = defineProps({
    orderId: String,
  })

  // 建立 socket 连接
  const socket = io('https://consult-api.itheima.net', {
    auth: { token: 'Bearer ' + token },
    query: { orderId: props.orderId },
    transports: ['websocket', 'polling'],
    timeout: 5000,
  })

  // 接收消息列表
  socket.on('chatMsgList', ({ code, data }) => {
    // 关闭下拉交互动画
    refreshTrigger.value = false

    // 没有返回数据
    if (code !== 10000) return
    // 提取列表数据
    const tempList = []
    data.forEach(({ createTime, items }, index) => {
      // 获取消息的时间节点
      if (index === 0) lastTime.value = createTime

      // 追加到消息列表中
      tempList.push(
        {
          msgType: 31,
          msg: { content: createTime },
          id: createTime,
        },
        ...items
      )
    })

    // 是否获取到新数据
    if (tempList.length === 0) return uni.utils.toast('没有更多聊天记录了')

    // 追加到消息列表中
    messageList.value.unshift(...tempList)
  })

  // 接收消息
  socket.on('receiveChatMsg', (message) => {
    // 修改消息为已读
    socket.emit('updateMsgStatus', message.id)
    // 接收到的消息追加到消息列表中
    messageList.value.push(message)
  })

  // 监听订单状态变化
  socket.on('statusChange', getOrderDetail)

  // 下拉获取历史消息
  function onPullDownRefresh() {
    // 开启下拉交互动画
    refreshTrigger.value = true
    // 获取更多消息
    socket.emit('getChatMsgList', 20, lastTime.value, props.orderId)
  }

  // 发送文字消息
  function onInputConfirm() {
    // 发送消息
    socket.emit('sendChatMsg', {
      from: userId,
      to: orderDetail.value?.docInfo?.id,
      msgType: 1,
      msg: {
        content: textMessage.value,
      },
    })
    // 清空表单
    textMessage.value = ''
  }

  // 发送图片消息
  function onImageButtonClick() {
    // 是否在问诊状态中...
    if (orderDetail.value.status !== 3) {
      return uni.utils.toast('医生当前不在线!')
    }

    // 上传图片到 uniCloud
    uniCloud.chooseAndUploadFile({
      type: 'image',
      count: 1,
      extension: ['.jpg', '.png', 'gif'],
      success: ({ tempFiles }) => {
        // 上传成功的图片
        const picture = {
          id: tempFiles[0].lastModified,
          url: tempFiles[0].url,
        }
        // 发送消息
        socket.emit('sendChatMsg', {
          from: userId,
          to: orderDetail.value?.docInfo?.id,
          msgType: 4,
          msg: { picture },
        })
      },
    })
  }

  // 获取问诊订单详情
  async function getOrderDetail() {
    // 调用接口
    const { code, data, message } = await orderDetailApi(props.orderId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染问诊订单数据
    orderDetail.value = data
  }

  // 格式化显示时间
  function dateFormat(date) {
    return dayjs(date).format('hh:mm:ss')
  }

  // 获取问诊订单详情
  getOrderDetail()
</script>

<template>
  <view class="room-page">
    <!-- 问诊订单状态 -->
    <room-status
      :status-value="orderDetail.statusValue"
      :countdown="orderDetail.countdown"
      :status="orderDetail.status"
    />

    <scroll-view
      @refresherrefresh="onPullDownRefresh"
      refresher-enabled
      :refresher-triggered="refreshTrigger"
      refresher-background="#f2f2f2"
      scroll-y
      style="flex: 1; overflow: hidden; padding-top: 30rpx"
    >
      <!-- 消息列表 -->
      <view class="message-container">
        <template v-for="message in messageList" :key="message.id">
          <!-- 患者信息（21） -->
          <patient-info
            v-if="message.msgType === 21"
            :info="message.msg.consultRecord"
          />

          <!-- 消息通知 -->
          <notify-info v-if="message.msgType >= 31" :type="message.msgType">
            {{ message.msg.content }}
          </notify-info>

          <!-- 文字图片消息 -->
          <message-info
            v-if="message.msgType <= 4"
            :info="message"
            :type="message.msgType"
          />

          <!-- 电子处方 -->
          <prescription-info
            v-if="message.msgType === 22"
            :info="message.msg.prescription"
          />

          <!-- 医生评价（未评价） -->
          <rate-info
            :order-id="props.orderId"
            :doctor-id="orderDetail.docInfo?.id"
            v-if="message.msgType === 23"
          />

          <!-- 医生评价（已评价） -->
          <rate-info
            :evaluateDoc="message.msg.evaluateDoc"
            has-evaluate
            v-if="message.msgType === 24"
          />
        </template>
      </view>
    </scroll-view>

    <!-- 发送消息 -->
    <view class="message-bar">
      <template v-if="true">
        <uni-easyinput
          v-model="textMessage"
          @confirm="onInputConfirm"
          :disabled="orderDetail.status !== 3"
          :clearable="false"
          :input-border="false"
          placeholder-style="font-size: 32rpx; color: #c3c3c5;"
          placeholder="问医生"
        />
        <view @click="onImageButtonClick" class="image-button">
          <uni-icons size="40" color="#979797" type="image"></uni-icons>
        </view>
      </template>
      <button v-else class="uni-button">咨询其它医生</button>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
