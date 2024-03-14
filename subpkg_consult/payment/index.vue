<script setup>
  import { ref } from 'vue'
  import { useConsultStore } from '@/stores/consult'
  import { preOrderApi, createOrderApi } from '@/services/consult'
  import { patientDetailApi } from '@/services/patient'
  import { paymentApi } from '@/services/payment'

  // 患者相关的数据（不具有响应性）
  const { type, illnessType, patientId, illnessInfo, depId } = useConsultStore()

  // 预付订单信息
  const preOrderInfo = ref({})
  // 就诊患者信息
  const patientDetail = ref({})
  // 待支付订单ID
  const orderId = ref('')

  // 支付组件引用
  const paymentRef = ref()
  const uniPayRef = ref()

  // 立即支付（生成待支付订单）
  async function onPaymentButtonClick() {
    if (orderId.value !== '') return uni.utils.toast('不能重复创建订单!')

    // 处理病情相关图片数据（过滤多余的数据）
    illnessInfo.pictures = illnessInfo.pictures.map(({ url, uuid }) => {
      return { id: uuid, url }
    })

    // 生成订单接口
    const { code, data, message } = await createOrderApi({
      type,
      illnessType,
      depId,
      patientId,
      ...illnessInfo,
    })

    // 检测接口是否计用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 获取待支付订单ID
    orderId.value = data.id

    // 选择支付渠道
    paymentRef.value.open()

    // uniPayRef.value.open({
    //   total_fee: 1, // 支付金额，单位分 100 = 1元
    //   order_no: data.id, // 业务系统订单号（即你自己业务系统的订单表的订单号）
    //   description: '问诊订单', // 支付描述
    //   type: 'consult', // 支付回调类型，可自定义,
    // })
  }

  // 当支付弹层关闭时
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

  // 支付渠道确认支付
  async function onPaymentConfirm({ index }) {
    if (index === 0) return uni.utils.toast('暂不支持微信支付!')

    // 调用后端提供的支付接口
    const { code, data, message } = await paymentApi({
      orderId: orderId.value,
      paymentMethod: index,
      payCallback: 'http://localhost/subpkg_consult/room/index',
    })

    // 接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // #ifdef H5
    // 支付宝支付页面
    window.location.href = data.payUrl
    // #endif
  }

  // 生成预付订单
  async function createPreOrder() {
    // 预付订单信息
    const { code, data, message } = await preOrderApi(type, {
      illnessType,
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 渲染订单数据
    preOrderInfo.value = data
  }

  // 获取患者信息
  async function getPatientDetail() {
    // 患者详情接口
    const { code, data, message } = await patientDetailApi(patientId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染患者数据
    patientDetail.value = data
  }

  // 生成预支付订单
  createPreOrder()
  // 获取就诊患者信息
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
              <view class="uni-list-text-red"> -¥{{ preOrderInfo.pointDeduction }} </view>
            </template>
          </uni-list-item>
          <uni-list-item title="实付款">
            <template #footer>
              <view class="uni-list-text-red"> ¥{{ preOrderInfo.actualPayment }} </view>
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
      <view class="total-amount">
        合计: <text class="number">¥{{ preOrderInfo.actualPayment }}</text>
      </view>
      <button @click="onPaymentButtonClick" class="uni-button">立即支付</button>
    </view>
  </scroll-page>

  <!-- 统一支付 uni-pay -->
  <!-- <uni-pay ref="uniPayRef"></uni-pay> -->

  <!-- 支付渠道 -->
  <custom-payment
    @close="onPaymentClose"
    @confirm="onPaymentConfirm"
    :amount="preOrderInfo.actualPayment"
    :order-id="orderId"
    ref="paymentRef"
  />
</template>

<style lang="scss">
  @import './index.scss';
</style>
