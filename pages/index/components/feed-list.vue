<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    console.log('mounted...')
  })

  // 接收组件外部传入的数据
  const props = defineProps({
    list: Array,
  })
</script>

<template>
  <view class="feed-list">
    <view v-for="item in props.list" :key="item.id" class="feed-list-item">
      <view class="feed-meta">
        <image class="doctor-avatar" src="/static/uploads/doctor-avatar.jpg" />
        <view class="doctor-info">
          <text class="name">{{ item.creatorName }}</text>
          <text class="desc">
            {{ item.creatorHospatalName }}
            {{ item.creatorDep }}
            {{ item.creatorTitles }}
          </text>
        </view>
        <button v-if="item.likeFlag === 1" class="doctor-button" plain>
          已关注
        </button>
        <button v-else class="doctor-button" plain>+ 关注</button>
      </view>
      <view class="feed-topic">{{ item.title }}</view>
      <view class="feed-relation"># {{ item.topic }}</view>
      <view class="feed-content">
        <view class="text">
          {{ item.content }}
        </view>
        <view class="picture">
          <image
            v-for="picture in item.coverUrl"
            mode="aspectFill"
            class="uni-image"
            :src="picture"
          />
        </view>
      </view>
      <view class="feed-extra">
        <text>12 收藏</text>
        <text>120 评论</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .feed-list-item {
    padding: 40rpx 0;
    margin: 0 30rpx;
    border-bottom: 1rpx solid #ededed;

    &:last-child {
      border-bottom: none;
    }
  }

  .feed-meta {
    display: flex;
    height: 80rpx;
    position: relative;
  }

  .doctor-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .doctor-info {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding-left: 20rpx;

    .name {
      font-size: 28rpx;
      color: #3c3e42;
    }

    .desc {
      font-size: 24rpx;
      color: #c3c3c5;

      @include text-overflow(1);
    }
  }

  .doctor-button {
    width: 140rpx;
    height: 56rpx;
    line-height: 56rpx;
    font-size: 24rpx;
    color: #2cb5a5 !important;
    border: 2rpx solid #2cb5a5 !important;
    border-radius: 60rpx;
  }

  .feed-topic {
    line-height: 1;
    margin: 30rpx 0 24rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #121826;
  }

  .feed-relation {
    line-height: 1;
    margin: 24rpx 0 20rpx;
    font-size: 24rpx;
    color: #2cb5a5;
  }

  .feed-content {
    font-size: 28rpx;
    color: #6f6f6f;

    .text {
      @include text-overflow(3);
    }

    .picture {
      display: flex;
      justify-content: space-between;
      padding: 20rpx 0;
    }

    .uni-image {
      width: 212rpx;
      height: 212rpx;
      border-radius: 20rpx;
    }
  }

  .feed-extra {
    font-size: 24rpx;
    color: #c3c3c5;
  }
</style>
