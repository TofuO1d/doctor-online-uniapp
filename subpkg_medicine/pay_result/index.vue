<script setup>
  import { ref } from 'vue'
  import { orderDetailApi } from '@/services/medicine'

  // 获取地址的参数
  const props = defineProps({
    orderId: String,
  })

  // 药品订单详情
  const orderDetail = ref({})

  // 查询订单详情
  async function getOrderDetail(orderId) {
    // 订单详情接口
    const { code, data, message } = await orderDetailApi(props.orderId)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染订单数据
    orderDetail.value = data
  }

  // 查询药品订单详情
  getOrderDetail()
</script>
<template>
  <view class="pay-result-page">
    <view class="result">
      <uni-icons size="70" color="#20c6b2" type="checkbox-filled" />
      <view class="amount">¥ {{ orderDetail.actualPayment }}</view>
      <view class="label">支付成功</view>
      <view class="tips">订单支付成功，已通知药房尽快发出，请耐心等待~</view>
    </view>

    <view class="buttons">
      <navigator
        hover-class="none"
        :url="`/subpkg_medicine/order_detail/index?id=${orderDetail.id}`"
        class="uni-button"
      >
        查看订单
      </navigator>
      <navigator
        hover-class="none"
        :url="`/subpkg_consult/room/index?orderId=${orderDetail.roomId}`"
        open-type="redirect"
        class="uni-button plain"
      >
        返回诊室
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
