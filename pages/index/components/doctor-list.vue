<script setup>
  import { ref } from 'vue'
  import { followDoctorApi } from '@/services/doctor'

  // 接收组件外部的数据
  const props = defineProps({
    list: Array,
  })

  // 关注医生
  async function onFollowButtonClick(doctor) {
    // 关注医生接口
    const { code, data, message } = await followDoctorApi(doctor.id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 关注成功
    doctor.likeFlag = 1
  }
</script>

<template>
  <view class="doctor-list">
    <view class="doctor-list-header">
      <text class="title">推荐关注</text>
      <navigator hover-class="none" url=" " class="more">查看更多</navigator>
      <uni-icons color="#c3c3c5" type="forward" />
    </view>
    <scroll-view scroll-x :show-scrollbar="false">
      <view class="doctor-list-wrapper">
        <view
          v-for="(item, index) in list"
          :key="item.id"
          class="doctor-list-item"
        >
          <image class="doctor-avatar" :src="item.avatar" />
          <view class="name">{{ item.name }}</view>
          <view class="unit"> {{ item.hospitalName }} {{ item.depName }} </view>
          <view class="level">{{ item.positionalTitles }}</view>
          <button v-if="item.likeFlag === 1" class="follow">已关注</button>
          <button v-else @click="onFollowButtonClick(item)" class="follow">
            + 关注
          </button>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  .doctor-list {
    height: 480rpx;
    padding-top: 20rpx;
    background-color: #f6f7f9;
  }

  .doctor-list-header {
    display: flex;
    align-items: center;
    height: 60rpx;
    padding: 0 15rpx 0 30rpx;
    margin-bottom: 10rpx;
    font-size: 28rpx;

    .title {
      color: #121826;
      flex: 1;
    }

    .more {
      color: #c3c3c5;
    }
  }

  .doctor-list-wrapper {
    display: flex;
    width: 1500rpx;
    padding-right: 30rpx;
  }

  .doctor-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270rpx;
    height: 380rpx;
    padding: 30rpx;
    margin-left: 30rpx;
    box-sizing: border-box;
    border-radius: 20rpx;
    background-color: #fff;

    .doctor-avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      margin-bottom: 20rpx;
    }

    .name {
      font-size: 26rpx;
      color: #121826;
    }

    .unit,
    .level {
      width: 100%;
      font-size: 24rpx;
      text-align: center;
      color: #c3c3c5;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .follow {
      width: 150rpx;
      height: 58rpx;
      text-align: center;
      line-height: 58rpx;
      margin-top: 20rpx;
      font-size: 24rpx;
      border-radius: 60rpx;
      color: #fff;
      background-color: #16c2a3;
    }
  }
</style>
