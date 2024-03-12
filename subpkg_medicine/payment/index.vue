<script setup>
  import { ref } from 'vue'
  import { addressListApi } from '@/services/address'
  import { createOrderApi, preOrderApi } from '@/services/medicine'
  import { orderPayApi } from '@/services/payment'

  // 支付组件引用
  const paymentRef = ref()

  // 获取地址中的参数
  const props = defineProps({
    id: String,
  })

  // 地址列表
  const addressInfo = ref([])
  // 预付订单信息
  const preOrderInfo = ref({})
  // 订单ID
  const orderId = ref('')

  // 关闭支付组件
  function onPaymentClose() {
    // 可以自行组用户一个确认框
    // uni.showModal({})
    paymentRef.value.close()
  }

  // 确认支付
  async function onPaymentConfirm({ index }) {
    if (index === 0) return uni.utils.toast('暂不支付微信支付!')
    // 调用后端接口进行支付
    const { code, data, message } = await orderPayApi({
      paymentMethod: index,
      orderId: orderId.value,
      payCallback: 'http://localhost:5173/#/subpkg_medicine/pay_result/index',
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // #ifdef H5
    window.location.href = data.payUrl
    // #endif
  }

  // 生成待付款订单
  async function onPaymentButtonClick() {
    // 调用接口
    const { code, data, message } = await createOrderApi(
      props.id,
      addressInfo.value.id
    )
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 接收待付款订单ID
    orderId.value = data.id
    // 展示支付渠道
    paymentRef.value.open()
  }

  // 获取地址列表
  async function getAddressList() {
    // 调用接口
    const { code, data, message } = await addressListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收返回的地址列表
    addressInfo.value = data[0]
  }

  // 生成预付订单
  async function createPreOrder() {
    // 调用接口
    const { code, data, message } = await preOrderApi(props.id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收返回的数据
    preOrderInfo.value = data
  }

  // 预付订单信息
  createPreOrder()
  // 药品收货地址
  getAddressList()
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
        <view class="medicine-list-item">
          <image
            class="medicine-cover"
            src="/static/uploads/medicine-1.jpg"
            mode="aspectFill"
          />
          <view class="medicine-info">
            <text class="name">瑞巴派特片</text>
            <text class="unit symbol">24片</text>
            <text class="price">¥25.00</text>
          </view>
          <view class="quantity">x1</view>
          <view class="guide">用法用量：口服，每次1袋，每天3次，用药3天</view>
        </view>
        <view
          v-for="medicine in preOrderInfo.medicines"
          :key="medicine.id"
          class="medicine-list-item"
        >
          <image
            class="medicine-cover"
            :src="medicine.avatar"
            mode="aspectFill"
          />
          <view class="medicine-info">
            <text class="name">{{ medicine.name }}</text>
            <text
              :class="{ symbol: medicine.prescriptionFlag === 1 }"
              class="unit"
            >
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
          <uni-list-item
            title="药品金额"
            :right-text="'¥' + preOrderInfo.payment"
          />
          <uni-list-item
            title="运费"
            :right-text="'¥' + preOrderInfo.expressFee"
          />
          <uni-list-item
            title="优惠券"
            show-arrow
            :right-text="'-¥' + preOrderInfo.couponDeduction"
          />
          <uni-list-item
            title="实付款"
            :right-text="'¥' + preOrderInfo.actualPayment"
          />
        </uni-list>
      </view>

      <!-- 底部 -->
      <view class="toolbar">
        <view class="total-amount">
          需付款: <text class="number">¥{{ preOrderInfo.actualPayment }}</text>
        </view>
        <view class="buttons">
          <button @click="onPaymentButtonClick" class="uni-button">
            立即支付
          </button>
        </view>
      </view>
    </view>
  </scroll-page>

  <!-- 支付组件 -->
  <custom-payment
    @close="onPaymentClose"
    @confirm="onPaymentConfirm"
    ref="paymentRef"
    order-id="3123123"
    :amount="preOrderInfo.actualPayment"
  />
</template>

<style lang="scss">
  @import './index.scss';
</style>
