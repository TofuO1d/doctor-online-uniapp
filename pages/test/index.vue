<script setup>
  import { ref } from 'vue'
  import { http } from '@/utils/http.js'
  import { storeToRefs } from 'pinia'
  // 导入定义好的 Store
  import { useCounterStore } from '@/stores/counter.js'
  // 创建 Store 实例
  const counterStore = useCounterStore()

  // 像普通过 reactive 包装数据一样来访问
  console.log(counterStore.count)
  // getters 可以可采用相同的方式来访问
  console.log(counterStore.double)

  // 直接解构是错误的用法
  // const { count, double } = counterStore
  // 正确的解构方法
  const { count, double } = storeToRefs(counterStore)

  let _count = 0
  // 更新 state
  function increment() {
    // 直接等号赋值
    // counterStore.count++
    // 调用 $patch 方法
    counterStore.$patch({
      count: ++_count,
    })
  }
  // 更新 state
  function decrement() {
    // 直接等号赋值
    // counterStore.count--
    // 调用 $patch 方法
    counterStore.$patch({
      count: --_count,
    })
  }

  // 测试网络请求
  async function onButtonClick() {
    // 1. 普通用法
    const result = await http.request({
      url: '/echo',
      method: 'get',
      custom: {
        abc: 123,
        // loading: false,
      },
      header: {
        customHeader: '11111111',
      },
    })

    uni.utils.toast('测试轻提示')
    console.log(result)
  }

  function test() {
    console.log(111)
  }

  // 弹层的引用
  const popupRef = ref()

  // 点击蒙层
  function onMaskClick() {
    console.log('蒙层点击了...')
  }

  // 打开弹层
  function openPopup() {
    popupRef.value.open()
  }

  // 关闭弹层
  function closePopup() {
    popupRef.value.close()
  }
</script>

<template>
  <scroll-page
    background-color="#f6f6f6"
    refresher-enabled
    @scrolltolower="test"
    @refresherrefresh="test"
  >
    <view class="content">
      <view class="custom-icons">
        <text class="iconfont icon-done"></text>
        <text class="icon-symbol icon-symbol-tool-01"></text>
      </view>
      <button @click="onButtonClick" type="primary">luch-request 测试</button>

      <view class="counter">
        <button @click="counterStore.decrement" class="button" type="primary">
          -
        </button>
        <input class="input" :value="counterStore.count" type="text" />
        <button @click="counterStore.increment" class="button" type="primary">
          +
        </button>
      </view>
      <view class="counter">
        <button @click="decrement" class="button" type="primary">-</button>
        <input class="input" :value="count" type="text" />
        <button @click="increment" class="button" type="primary">+</button>
      </view>

      <view class="state">
        <text class="text">count: {{ count }}</text>
        <text class="text">double: {{ double }}</text>
      </view>

      <view class="popup-demo">
        <button @click="openPopup" class="button" type="primary">
          打开弹层
        </button>
        <button @click="closePopup" class="button" type="primary">
          关闭弹层
        </button>
      </view>

      <uni-popup
        ref="popupRef"
        @maskClick="onMaskClick"
        :is-mask-click="false"
        type="bottom"
      >
        <view class="popup-container"></view>
      </uni-popup>

      <!-- <view class="blank"></view> -->
    </view>
  </scroll-page>
</template>

<style lang="scss">
  .content {
    padding: 30rpx 30rpx 0;
    overflow: hidden;
  }

  .custom-icons {
    display: flex;
    align-items: center;
    margin-bottom: 30rpx;
  }

  .iconfont {
    font-size: 60rpx;
  }

  .icon-symbol {
    width: 60rpx;
    height: 60rpx;
  }

  .counter {
    display: flex;
    margin-top: 30rpx;

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
  }

  .state {
    margin-top: 30rpx;

    .text {
      margin-right: 20rpx;
    }
  }

  .popup-demo {
    display: flex;
    justify-content: space-between;
    margin: 30rpx 0;

    .button {
      width: 300rpx;
      margin: 0;
    }
  }

  .popup-container {
    height: 400rpx;
    background-color: #fff;
  }

  .blank {
    height: 800px;
    background-color: pink;
  }
</style>
