<script setup>
  import { ref } from 'vue'
  import { createOrderApi, preOrderApi } from '@/services/consult'
  // import { storeToRefs } from 'pinia'
  import { useConsultStore } from '@/stores/consult'
  import { patientDetailApi } from '@/services/patient'
  import { orderPayApi } from '@/services/payment'

  // 解构数据，获取问诊类型
  // const { type } = storeToRefs(useConsultStore())
  const { type, patientId, illnessInfo, illnessType, depId } = useConsultStore()

  // 预付订单信息
  const preOrderInfo = ref({})
  // 患者数据
  const patientDetail = ref({})
  // 订单ID
  const orderId = ref('')

  // 支付组件实例
  const paymentRef = ref()

  // 创建订单（待付款）
  function onPaymentButtonClick() {
    createOrder()
  }

  // 用户关闭支付组件
  async function onPaymentClose() {
    const { confirm } = await uni.showModal({
      title: '关闭支付',
      content: '取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？',
      cancelText: '仍要关闭',
      cancelColor: '#848484',
      confirmText: '继续支付',
      confirmColor: '#16C2A3',
    })

    if (!confirm) paymentRef.value.close()
  }

  // 用户点击确认支付
  async function onPaymentConfirm({ index }) {
    if (index === 0) return uni.utils.toast('暂不支持微信支付!')

    // 调用支付接口
    const { code, data, message } = await orderPayApi({
      paymentMethod: index,
      orderId: orderId.value,
      payCallback: 'http://localhost:5173/#/subpkg_consult/room/index',
    })

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // #ifdef H5
    // 引导用户支付（地址跳转方式）
    window.location.href = data.payUrl
    // #endif

    // #ifdef MP-WEIXIN
    // 引导用户支付（wx.requestPayment 小程序）
    wx.requestPayment({
      // 4 个参数
    })
    // #endif

    // App SDK
  }

  // 生成预付订单
  async function createPreOrder() {
    // 调用接口
    const { code, data, message } = await preOrderApi(type)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染订单数据
    preOrderInfo.value = data
  }

  // 生成待付订单
  async function createOrder() {
    if (orderId.value !== '') return uni.utils.toast('订单不能重复创建!')

    // 处理上传的图片，要求包含 ID 和 url （接口规订的）
    // 订单只能提交一次！！！
    illnessInfo.pictures = illnessInfo.pictures.map(({ url, uuid }) => {
      return { url, id: uuid }
    })

    // 调用接口
    const { code, data, message } = await createOrderApi({
      type,
      patientId,
      illnessType,
      depId,
      ...illnessInfo,
    })

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收订单ID
    orderId.value = data.id

    // 将 Pinia 中缓存的数据清空掉（订单已创建完成）
    const consultStore = useConsultStore()
    // 病情描述
    consultStore.illnessInfo = consultStore.initalValue
    consultStore.type = ''
    consultStore.illnessType = ''
    consultStore.depId = ''
    consultStore.patientId = ''

    // 打开支付组件
    paymentRef.value.open()
  }

  // 患者详情
  async function getPatientDetail() {
    // 调用接口
    const { code, data, message } = await patientDetailApi(patientId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收并渲染数据
    patientDetail.value = data
  }

  // 生成预付订单
  createPreOrder()
  // 获取患者信息
  getPatientDetail()
</script>

<template>
  <scroll-page>
    <view class="payment-page">
      <uni-section
        title-font-size="32rpx"
        title-color="#121826"
        padding="30rpx"
        :title="`图文问诊 ${preOrderInfo.payment}元`"
      >
        <uni-list :border="false">
          <uni-list-item
            title="极速问诊"
            note="自动分配医生"
            thumb="/static/uploads/doctor-avatar.jpg"
            thumb-size="lg"
          />
          <uni-list-item
            title="优惠券"
            show-arrow
            :right-text="`-¥${preOrderInfo.couponDeduction}`"
          />
          <uni-list-item title="积分抵扣">
            <template #footer>
              <view class="uni-list-text-red">-¥{{ preOrderInfo.pointDeduction }}</view>
            </template>
          </uni-list-item>
          <uni-list-item title="实付款">
            <template #footer>
              <view class="uni-list-text-red">¥{{ preOrderInfo.actualPayment }}</view>
            </template>
          </uni-list-item>
        </uni-list>
      </uni-section>

      <view class="dividing-line"></view>

      <uni-section
        title-font-size="32rpx"
        title-color="#121826"
        padding="30rpx"
        title="患者资料"
      >
        <uni-list :border="false">
          <uni-list-item title="患者信息">
            <template #footer>
              <view class="uni-list-text-gray">
                {{ patientDetail.name }} | {{ patientDetail.genderValue }} |
                {{ patientDetail.age }}岁
              </view>
            </template>
          </uni-list-item>
          <uni-list-item border title="病情描述" :note="illnessInfo.illnessDesc" />
        </uni-list>
      </uni-section>

      <!-- <view class="payment-agreement">
        <radio color="#20c6b2" value="1" />
        我已同意<text style="color: #20c6b2">支付协议</text>
      </view> -->
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <view class="total-amount"> 合计: <text class="number">¥39.00</text> </view>
      <button @click="onPaymentButtonClick" class="uni-button">立即支付</button>
    </view>
  </scroll-page>

  <!-- 加载（应用）支付组件 -->
  <custom-payment
    ref="paymentRef"
    @close="onPaymentClose"
    @confirm="onPaymentConfirm"
    :orderId="orderId"
    :amount="preOrderInfo.actualPayment"
  />
</template>

<style lang="scss">
  @import './index.scss';
</style>
