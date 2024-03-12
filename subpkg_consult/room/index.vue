<script setup>
  import { ref } from 'vue'
  import { io } from 'socket.io-client'
  import dayjs from 'dayjs'
  import { orderDetailApi } from '@/services/consult'
  import { useUserStore } from '@/stores/user.js'

  // 导入消息组件
  import patientInfo from './components/patient-info.vue'
  import notifyInfo from './components/notify-info.vue'
  import messageInfo from './components/message-info.vue'
  import prescriptionInfo from './components/prescription-info.vue'
  import rateInfo from './components/rate-info.vue'
  import roomStatus from './components/room-status.vue'

  // 不具备响应式
  const { token, userId } = useUserStore()

  // 获取地址参数
  const props = defineProps({
    orderId: String,
  })

  // 消息列表
  const messageList = ref([])
  // 订单详情
  const orderDetail = ref({})
  // 文字消息
  const textMessage = ref('')
  // 下拉交互状态
  const refreshTrigger = ref(false)
  // 上次获取历史消息节点
  const lastTime = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))

  // 建立 socket 连接
  const socket = io('https://consult-api.itheima.net', {
    auth: { token: 'Bearer ' + token },
    query: { orderId: props.orderId },
    transports: ['websocket', 'polling'],
    timeout: 5000,
  })

  // 接收服务传过来的数据（消息列表）
  socket.on('chatMsgList', ({ code, data }) => {
    // 关闭下拉动画
    refreshTrigger.value = false

    if (code !== 10000) return

    // 临时数组
    const tempList = []
    // 提取列表数据
    data.forEach(({ createTime, items }, index) => {
      // 更新下一次取数据的时间点（相当于页码）
      if (index === 0) lastTime.value = createTime

      // 追加到消息列表中
      tempList.push(
        // 构造一条数据，显示时间节点
        {
          msgType: 31,
          msg: { content: createTime },
          id: createTime,
        },
        ...items
      )
    })

    // 没有更多消息了
    if (tempList.length === 0) return uni.utils.toast('没有更多历史消息了...')

    // 追加到消息列表中
    messageList.value.unshift(...tempList)
  })

  // 接收医生单条消息
  socket.on('receiveChatMsg', (message) => {
    // 修改消息为已读
    socket.emit('updateMsgStatus', message.id)
    // 追加消息
    messageList.value.push(message)
  })

  // 监听订单状态变化
  socket.on('statusChange', getOrderDetail)

  // 发送文字消息
  function onInputConfirm() {
    // 发送消息
    socket.emit('sendChatMsg', {
      // 当前登录用户的ID
      from: userId,
      to: orderDetail.value?.docInfo?.id,
      msgType: 1,
      msg: {
        content: textMessage.value,
      },
    })

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
      extension: ['.jpg', '.png', '.gif'],
      success: ({ tempFiles }) => {
        // 上传成功的图片
        const picture = {
          id: tempFiles[0].lastModified,
          url: tempFiles[0].url,
        }

        // 发送图片消息
        socket.emit('sendChatMsg', {
          from: userId,
          to: orderDetail.value.docInfo?.id,
          msgType: 4,
          msg: { picture },
        })
      },
    })
  }

  // 下拉交互
  function onPullDownRefresh() {
    // 当前开启下拉动画
    refreshTrigger.value = true
    // 获取历史消息
    socket.emit('getChatMsgList', 20, lastTime.value, props.orderId)
  }

  // 订单的详情
  async function getOrderDetail() {
    // 调用接口
    const { code, data, message } = await orderDetailApi(props.orderId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收数据
    orderDetail.value = data
  }

  // 获取订单详情
  getOrderDetail()
</script>

<template>
  <view class="room-page">
    <!-- 问诊订单状态 -->
    <room-status
      :status="orderDetail.status"
      :statusValue="orderDetail.statusValue"
      :countdown="orderDetail.countdown"
    />

    <scroll-view
      refresher-enabled
      @refresherrefresh="onPullDownRefresh"
      :refresher-triggered="refreshTrigger"
      refresher-background="#f2f2f2"
      scroll-y
      style="flex: 1; overflow: hidden"
    >
      <view class="message-container">
        <template v-for="message in messageList" :key="message.id">
          <!-- 患者信息（21） -->
          <patient-info
            v-if="message.msgType === 21"
            :info="message.msg.consultRecord"
          />

          <!-- 通知消息（31、32、33） -->
          <notify-info v-if="message.msgType >= 31" :type="message.msgType">
            {{ message.msg.content }}
          </notify-info>

          <!-- 文字/图片消息 -->
          <message-info
            v-if="message.msgType <= 4"
            :type="message.msgType"
            :info="message"
          />

          <!-- 处方消息（22） -->
          <prescription-info
            v-if="message.msgType === 22"
            :info="message.msg.prescription"
          />

          <!-- 医生评价（23） -->
          <rate-info
            :hasEvaluate="false"
            :order-id="props.orderId"
            :doctor-id="orderDetail.docInfo?.id"
            v-if="message.msgType === 23"
          />

          <!-- 医生评价（24） -->
          <rate-info
            v-if="message.msgType === 24"
            :evaluateDoc="message.msg.evaluateDoc"
            :hasEvaluate="true"
          />
        </template>

        <!-- 此处将来填充更多代码... -->
      </view>
    </scroll-view>

    <!-- 发送消息 -->
    <view class="message-bar">
      <template v-if="true">
        <uni-easyinput
          :disabled="orderDetail.status !== 3"
          v-model="textMessage"
          @confirm="onInputConfirm"
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
