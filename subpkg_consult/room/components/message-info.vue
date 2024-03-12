<script setup>
  import dayjs from 'dayjs'
  import { useUserStore } from '@/stores/user.js'

  // 获取用户ID
  const { userId } = useUserStore()

  // 接收外部传入的数据
  const props = defineProps({
    info: {
      type: Object,
      default: {},
    },
    type: {
      type: Number,
      default: 1,
    },
  })

  // 格式化显示时间
  function dateFormat(date) {
    return dayjs(date).format('hh:mm:ss')
  }
</script>

<template>
  <!-- 文字/图片消息 -->
  <view :class="{ reverse: props.info.from === userId }" class="message-item">
    <image class="room-avatar" :src="props.info.fromAvatar" />
    <view class="room-message">
      <view class="time">{{ dateFormat(props.info.createTime) }}</view>
      <view v-if="props.type === 1" class="text">
        {{ props.info.msg.content }}
      </view>
      <image
        v-if="props.type === 4"
        class="image"
        :src="props.info.msg.picture.url"
        mode="widthFix"
      />
    </view>
  </view>
</template>

<style lang="scss">
  .message-item {
    display: flex;
    align-self: flex-start;
    margin-top: 60rpx;

    .room-avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }

    .room-message {
      margin-left: 20rpx;
    }

    .time {
      font-size: 26rpx;
      color: #979797;
    }

    .image {
      max-width: 420rpx;
      margin-top: 10rpx;
    }

    .text {
      max-width: 420rpx;
      line-height: 1.75;
      padding: 30rpx 40rpx;
      margin-top: 16rpx;
      border-radius: 20rpx;
      font-size: 30rpx;
      color: #3c3e42;
      background-color: #fff;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -25rpx;
        width: 26rpx;
        height: 52rpx;
        background-image: url(https://consult-patient.oss-cn-hangzhou.aliyuncs.com/static/images/im-arrow-1.png);
        background-size: contain;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
      align-self: flex-end;

      .room-message {
        margin-left: 0;
        margin-right: 20rpx;
      }

      .time {
        text-align: right;
      }

      .text {
        background-color: #16c2a3;
        color: #fff;

        &::after {
          left: auto;
          right: -25rpx;
          background-image: url(https://consult-patient.oss-cn-hangzhou.aliyuncs.com/static/images/im-arrow-2.png);
        }
      }
    }
  }
</style>
