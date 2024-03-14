<script setup>
  // 接收外部传入的数据
  const props = defineProps({
    type: {
      type: Number,
      default: 31,
    },
  })
</script>

<template>
  <view class="message-tips">
    <!-- 温馨提示（32） -->
    <view class="wrapper">
      <text v-if="props.type === 32" class="label">温馨提示: </text>
      <slot />
    </view>
  </view>
</template>

<style lang="scss">
  .message-tips {
    display: flex;
    justify-content: center;
    margin-top: 60rpx;

    &:first-child {
      margin-top: 30rpx;
    }
  }

  .wrapper {
    line-height: 1;
    text-align: center;
    padding: 20rpx 30rpx;
    // margin-top: 60rpx;
    font-size: 24rpx;
    border-radius: 70rpx;
    color: #848484;
    background-color: #fff;

    .label {
      color: #16c2a3;
    }
  }
</style>
