<script setup>
  import { ref } from 'vue'

  // 弹层组件实例
  const paymentPopup = ref()

  // 自定义两个属性接收外部传处的数据
  const paymentProps = defineProps({
    orderId: String,
    amount: {
      type: [Number, String],
      default: 0,
    },
  })

  // 组件自定义事件，目的是将组件内的执行结果传给组件外部
  const paymentEmits = defineEmits(['change', 'close', 'confirm'])

  // 选中支付方法的索引值
  const channelIndex = ref(1)

  // 支付渠道（方式）
  const paymentChannel = [
    {
      title: '微信支付',
      thumb: '/static/images/wechatpay-icon.png',
    },
    {
      title: '支付宝支付',
      thumb: '/static/images/alipay-icon.png',
    },
  ]

  function open() {
    // 打开弹层
    paymentPopup.value.open()
  }

  function close() {
    // 关闭弹层
    paymentPopup.value.close()
  }

  // 切换支付方式
  function onChannelChange(index) {
    channelIndex.value = index
    // 触发自定义事件 change
    paymentEmits('change', { index })
  }

  // 一个组件可以向外开放一些方法，供组件外部调用
  // 使用 defineExpose 语法实现
  // defineExpose({
  //   '外部调用的方法名': '组件内部真实的函数(方法)'
  // })

  // 向组件外部暴露两个方法
  defineExpose({ open, close })

  // function showPopup() {
  //   paymentPopup.value.open()
  // }

  // function onMaskClick() {
  //   console.log('蒙层被点击了')
  // }
</script>

<template>
  <uni-popup ref="paymentPopup" :is-mask-click="false" type="bottom">
    <view class="payment-container">
      <view class="payment-header">
        <text class="title">选择支付方式</text>
        <uni-icons
          @click="$emit('close')"
          class="uni-icons-close"
          size="18"
          color="#333"
          type="closeempty"
        />
      </view>
      <view class="order-amount">¥ {{ paymentProps.amount }}元</view>
      <uni-list :border="false">
        <uni-list-item
          v-for="(channel, index) in paymentChannel"
          @click="onChannelChange(index)"
          clickable
          :key="channel.title"
          :title="channel.title"
          :thumb="channel.thumb"
        >
          <template #footer>
            <uni-icons
              v-if="channelIndex === index"
              size="26"
              color="#16C2A3"
              type="checkbox-filled"
            />
            <uni-icons v-else size="26" color="#d1d1d1" type="circle" />
          </template>
        </uni-list-item>
      </uni-list>
      <button @click="$emit('confirm', { index: channelIndex })" class="uni-button">
        立即支付
      </button>
    </view>
  </uni-popup>

  <!-- <button @click="showPopup" type="primary">显示弹层</button> -->
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>

<style lang="scss">
  .payment-container {
    min-height: 400rpx;
    border-radius: 30rpx 30rpx 0 0;
    background-color: #fff;
    padding: 10rpx 30rpx 40rpx;

    .payment-header {
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      margin-bottom: 20rpx;
      font-size: 32rpx;
      color: #333;
      position: relative;
    }

    .uni-icons-close {
      position: absolute;
      top: 2rpx;
      right: 0;
    }

    .order-amount {
      padding: 10rpx 0 10rpx;
      text-align: center;
      font-size: 40rpx;
      color: #333;
    }

    :deep(.uni-list-item__container) {
      padding: 40rpx 0 !important;
    }

    :deep(.uni-list-item--hover) {
      background-color: #fff !important;
    }

    :deep(.uni-list-item__icon) {
      margin-right: 0;
    }

    .uni-button {
      margin-top: 40rpx;
    }
  }
</style>
