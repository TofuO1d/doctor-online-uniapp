<script setup>
  import { ref } from 'vue'

  import { http } from '@/utils/http.js'

  // 导入定义的 Store
  import { useCounterStore } from '@/stores/counter.js'
  const store = useCounterStore()

  // 点击事件测试请求封培训
  async function onButtonClick() {
    const resulst = await http.request({
      url: '/echo',
      header: {
        Authorization: 2222222,
        abc: 456,
      },
      custom: {
        abc: 123,
      },
    })

    // 全局使用方法
    uni.utils.toast('测试')

    console.log(resulst)
  }

  // 支付组件实例
  const paymentRef = ref()

  function onPaymentChange(ev) {
    console.log(ev)
  }

  function onPaymentClose() {
    console.log('关闭弹层')
  }

  function onPaymentConfirm() {
    console.log('点击确认')
  }
</script>

<template>
  <view class="content">
    <button @click="onButtonClick" type="primary">测试请求</button>
    <view>{{ store.name }} - {{ store.double }}</view>
    <view class="counter">
      <button @click="store.decrement()" class="button" type="primary">-</button>
      <input class="input" :value="store.count" type="text" />
      <button @click="store.increment()" class="button" type="primary">+</button>
    </view>

    <button @click="paymentRef.open()" type="primary">组件外部打开弹层</button>

    <custom-payment
      @change="onPaymentChange"
      @close="onPaymentClose"
      @confirm="onPaymentConfirm"
      orderId="43423634545345"
      amount="39.9"
      ref="paymentRef"
    ></custom-payment>
  </view>
</template>

<style lang="scss">
  .content {
    padding: 30rpx;
  }

  .counter {
    display: flex;
    margin-top: 30rpx;
  }

  .input {
    flex: 1;
    height: 96rpx;
    text-align: center;
    border: 2rpx solid #eee;
    box-sizing: border-box;
  }

  .button {
    width: 100rpx;
    margin: 0;

    &:first-child {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }
    &:last-child {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  }
</style>
