<script setup>
  // 接收组件外部的数据
  const props = defineProps({
    info: {
      type: Object,
      default: {},
    },
  })

  // 患病时长
  const illnessTimes = {
    1: '一周内',
    2: '一个月内',
    3: '半年内',
    4: '半年以上',
  }
  // 是否就诊过
  const consultFlags = {
    1: '就诊过',
    0: '没有就诊过',
  }

  // 以大图方式查看
  function onPreviewClick(urls) {
    uni.previewImage({
      urls: urls.map(({ url }) => url),
    })
  }
</script>
<template>
  <!-- 患者信息（21） -->
  <view class="patient-info">
    <view class="header">
      <view class="title">
        {{ props.info.patientInfo.name }}
        {{ props.info.patientInfo.genderValue }}
        {{ props.info.patientInfo.age }}岁
      </view>
      <view class="note">
        {{ illnessTimes[props.info.illnessTime] }}
        |
        {{ consultFlags[props.info.consultFlag] }}
      </view>
    </view>
    <view class="content">
      <view class="list-item">
        <text class="label">病情描述</text>
        <text class="note">{{ props.info.illnessDesc }}</text>
      </view>
      <view class="list-item">
        <text class="label">图片</text>
        <text
          @click="onPreviewClick(props.info.pictures)"
          v-if="props.info.pictures.length > 0"
          class="note"
          >点击查看</text
        >
        <text v-else class="note">暂无图片</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  .patient-info {
    padding: 30rpx;
    margin-top: 60rpx;
    border-radius: 20rpx;
    box-sizing: border-box;
    background-color: #fff;

    .header {
      padding-bottom: 20rpx;
      border-bottom: 1rpx solid #ededed;

      .title {
        font-size: 32rpx;
        color: #121826;
        margin-bottom: 10rpx;
      }

      .note {
        font-size: 26rpx;
        color: #848484;
      }
    }

    .content {
      margin-top: 20rpx;
      font-size: 26rpx;

      .list-item {
        display: flex;
        margin-top: 10rpx;
      }

      .label {
        width: 130rpx;
        color: #3c3e42;
      }

      .note {
        flex: 1;
        line-height: 1.4;
        color: #848484;
      }
    }
  }
</style>
