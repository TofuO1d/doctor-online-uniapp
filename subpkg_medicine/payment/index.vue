<script setup>
  import { ref } from 'vue'
  import { createOrderApi, preOrderApi } from '@/services/medicine'
  import { addressListApi } from '@/services/address'
  import { paymentApi } from '@/services/payment'

  // 获取地址中的参数
  const props = defineProps({
    id: String,
  })

  // 预付订单信息
  const preOrderInfo = ref({})
  // 收货地址信息
  const addressInfo = ref({})
  // 待支付订单ID
  const orderId = ref('')
  // 支付渠道组件实例
  const paymentRef = ref()

  // 关闭支付渠道弹层
  function onPaymentClose() {}

  // 支付渠道确认支付
  async function onPaymentConfirm({ index }) {
    if (index === 0) return uni.utils.toast('暂不支持微信支付!')
    // 调用后端提供的支付接口
    const { code, data, message } = await paymentApi({
      orderId: orderId.value,
      paymentMethod: index,
      payCallback: 'http://localhost/subpkg_medicine/pay_result/index',
    })

    // 接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 支付宝支付页面
    window.location.href = data.payUrl
  }

  // 选择支付渠道
  async function onPaymentButtonClick() {
    // 生成订单接口
    const { code, data, message } = await createOrderApi(props.id, addressInfo.value.id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 传递订单ID
    orderId.value = data.id
    // 打开支付渠道
    paymentRef.value.open()
  }

  // 用户收货地址
  async function getAddressList() {
    // 地址列表接口
    const { code, data, message } = await addressListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染地址列表数据
    addressInfo.value = data[0]
  }

  // 药品预付订单
  async function createPreOrder() {
    if (!props.id) return
    // 预付订单接口
    const { code, data, message } = await preOrderApi(props.id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染预付订单信息
    preOrderInfo.value = data
  }

  // 获取收货地址列表
  getAddressList()
  // 生成预付订单
  createPreOrder()
</script>

<template>
  <scroll-page background-color="#f6f6f6">
    <view class="medicine-page">
      <view class="page-header">
        <view class="order-shippment">
          <view class="region">
            <uni-icons size="16" color="#FF7702" type="location-filled" />
            {{ addressInfo.city }} {{ addressInfo.county }}
          </view>
          <view class="detail">{{ addressInfo.addressDetail }}</view>
          <view class="receiver">
            {{ addressInfo.receiver }} {{ addressInfo.mobile }}
          </view>
        </view>
      </view>

      <view class="order-shop">
        优医药房
        <text class="alt">优医质保 假一赔十</text>
      </view>
      <!-- 药品列表 -->
      <view class="medicine-list">
        <view
          v-for="medicine in preOrderInfo.medicines"
          :key="medicine.id"
          class="medicine-list-item"
        >
          <image class="medicine-cover" :src="medicine.avatar" mode="aspectFill" />
          <view class="medicine-info">
            <text class="name">{{ medicine.name }}</text>
            <text :class="{ symbol: medicine.prescriptionFlag === 1 }" class="symbol">
              {{ medicine.specs }}
            </text>
            <text class="price">¥{{ medicine.amount }}</text>
          </view>
          <view class="quantity">x{{ medicine.quantity }}</view>
          <view class="guide">用法用量：{{ medicine.usageDosag }}</view>
        </view>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <uni-list :border="false">
          <uni-list-item title="药品金额" :right-text="'¥' + preOrderInfo.payment" />
          <uni-list-item title="运费" :right-text="'¥' + preOrderInfo.expressFee" />
          <uni-list-item
            title="优惠券"
            show-arrow
            :right-text="'-¥' + preOrderInfo.couponDeduction"
          />
          <uni-list-item title="实付款" :right-text="'¥' + preOrderInfo.actualPayment" />
        </uni-list>
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <view class="total-amount">
          需付款: <text class="number">¥{{ preOrderInfo.actualPayment }}</text>
        </view>
        <view class="buttons">
          <button @click="onPaymentButtonClick" class="uni-button">立即支付</button>
        </view>
      </view>
    </view>
  </scroll-page>

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
