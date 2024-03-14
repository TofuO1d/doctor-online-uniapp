<script setup>
  // 接收组件外部传入的数据
  const props = defineProps({
    status: Number,
    statusValue: String,
    countdown: Number,
  })
</script>

<template>
  <!-- 咨询室状态 -->
  <view class="room-status">
    <!-- 待接诊(status: 2) -->
    <view v-if="props.status === 2" class="status waiting">
      <text class="label">{{ props.statusValue }}</text>
    </view>

    <!-- 咨询中(status: 3) -->
    <view class="status countdown" v-if="props.status === 3">
      <text class="label">{{ props.statusValue }}</text>
      <view class="time">
        剩余时间:
        <uni-countdown
          color="#3c3e42"
          :font-size="14"
          :show-day="false"
          :second="props.countdown"
        />
      </view>
    </view>

    <!-- 已完成(status: 4) -->
    <view v-if="props.status === 4" class="status">
      <uni-icons size="20" color="#121826" type="checkbox-filled" />
      {{ props.statusValue }}
    </view>
  </view>
</template>

<style lang="scss">
  .room-status {
    font-size: 26rpx;
    position: sticky;
    top: 0;
    z-index: 99;

    .status {
      display: flex;
      padding: 30rpx;
      background-color: #fff;
    }

    .waiting {
      color: #16c2a3;
      background-color: #eaf8f6;
    }

    .countdown {
      justify-content: space-between;
    }

    .label {
      color: #16c2a3;
    }

    .icon-done {
      color: #121826;
      font-size: 28rpx;
      margin-right: 5rpx;
    }

    .time {
      display: flex;
      color: #3c3e42;
    }

    :deep(.uni-countdown) {
      margin-left: 6rpx;
    }
  }
</style>
