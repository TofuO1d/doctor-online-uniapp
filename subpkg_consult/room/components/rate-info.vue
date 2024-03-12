<script setup>
  import { ref, computed } from 'vue'
  import { evaluateDoctorApi } from '@/services/doctor'

  // 接收组件外部的数据
  const props = defineProps({
    orderId: String,
    doctorId: String,
    // 是否评价过
    hasEvaluate: {
      type: Boolean,
      default: false,
    },
    // 评价的内容
    evaluateDoc: {
      type: Object,
      default: {},
    },
  })

  // 评价相关数据
  const formData = ref({
    score: props.evaluateDoc.score || 0,
    content: props.evaluateDoc.content || '',
    anonymousFlag: 1,
  })

  // 是否已经评价过
  const hasEvaluate = ref(props.hasEvaluate)

  // 字数统计
  const wordCount = computed(() => {
    return formData.value.content?.length || 0
  })

  // 是否允许按钮点击
  const buttonEnable = computed(() => {
    return formData.value.score > 0
  })

  // 切换是否匿名
  function onAnonymousClick() {
    // 0 和 1 之间切换
    formData.value.anonymousFlag = Math.abs(formData.value.anonymousFlag - 1)
  }

  // 提交医生评价
  async function onFormSubmit() {
    // 调用接口
    const { code, data, message } = await evaluateDoctorApi({
      ...formData.value,
      docId: props.doctorId,
      orderId: props.orderId,
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 提示文字
    uni.utils.toast('感谢您的评价!')
    // 变更评价状态
    hasEvaluate.value = true
  }
</script>
<template>
  <!-- 医生评价 -->
  <view class="doctor-rating">
    <view class="title">医生服务评价</view>
    <view class="subtitle">本次在线问诊服务您还满意吗？</view>
    <view class="rating">
      <uni-rate v-model="formData.score" :size="28" margin="12" />
    </view>
    <view class="text">
      <uni-easyinput
        v-model="formData.content"
        type="textarea"
        maxlength="150"
        :input-border="false"
        :styles="{ backgroundColor: '#f6f6f6' }"
        placeholder-style="font-size: 28rpx; color: #979797"
        placeholder="请描述您对医生的评价或是在医生看诊过程中遇到的问题"
      />
      <text class="word-count">{{ wordCount }}/150</text>
    </view>
    <view v-if="!hasEvaluate" @click="onAnonymousClick" class="anonymous">
      <uni-icons
        v-if="formData.anonymousFlag === 1"
        size="16"
        color="#16C2A3"
        type="checkbox-filled"
      />
      <uni-icons v-else size="16" color="#d1d1d1" type="circle" />
      <text class="label">匿名评价</text>
    </view>
    <button
      v-if="!hasEvaluate"
      :disabled="!buttonEnable"
      @click="onFormSubmit"
      class="uni-button"
    >
      提交
    </button>
  </view>
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>
<style lang="scss">
  .doctor-rating {
    padding: 30rpx 30rpx 40rpx;
    border-radius: 20rpx;
    background-color: #fff;
    margin-top: 60rpx;

    .title {
      text-align: center;
      font-size: 30rpx;
      color: #121826;
    }

    .subtitle {
      text-align: center;
      font-size: 24rpx;
      color: #6f6f6f;
      margin: 10rpx 0 20rpx;
    }

    .rating {
      display: flex;
      justify-content: center;
    }

    .text {
      padding: 20rpx 30rpx;
      margin-top: 20rpx;
      background-color: #f6f6f6;
      border-radius: 20rpx;
      position: relative;
    }

    :deep(.uni-easyinput__content-textarea) {
      font-size: 28rpx;
    }

    .word-count {
      position: absolute;
      bottom: 20rpx;
      right: 30rpx;
      line-height: 1;
      font-size: 24rpx;
      color: #6f6f6f;
    }

    .anonymous {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30rpx 0;
      color: #6f6f6f;
      font-size: 24rpx;

      .label {
        margin-left: 6rpx;
      }
    }

    .uni-button[disabled] {
      color: #a6dbd5;
      background-color: #eaf8f6;
    }
  }
</style>
