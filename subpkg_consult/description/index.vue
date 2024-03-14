<script setup>
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useConsultStore } from '@/stores/consult'

  // 病情相关的数据
  const { illnessInfo, initalValue } = storeToRefs(useConsultStore())

  // 接收地址的参数
  const props = defineProps({
    type: String,
    illnessType: String,
    depId: String,
  })

  // 患病时长
  const illnessTimes = [
    { value: 1, text: '一周内' },
    { value: 2, text: '一月内' },
    { value: 3, text: '半年内' },
    { value: 4, text: '半年以上' },
  ]
  // 是否就诊过
  const consultFlags = [
    { value: 1, text: '就诊过' },
    { value: 0, text: '没有就诊过' },
  ]

  // 是否允许下一步操作
  const nextStepEnable = computed(() => {
    // 验证必要数据是否填写（接口中只要求病情描述必填）
    return (
      illnessInfo.value.illnessDesc !== '' &&
      illnessInfo.value.illnessTime !== '' &&
      illnessInfo.value.consultFlag !== ''
    )
  })

  // 选择患病时长
  function onTimeTagClick(value) {
    // 记录用户选择的数据
    illnessInfo.value.illnessTime = value
  }

  function onFlagTagClick(value) {
    // 记录用户选择的数据
    illnessInfo.value.consultFlag = value
  }

  // 下一步选择患者
  function onNextStepClick() {
    // 问诊相关数据
    const consultStore = useConsultStore()
    // 缓存地址参数
    consultStore.type = props.type
    consultStore.illnessType = props.illnessType
    consultStore.depId = props.depId

    // 跳转到选择患者页面
    uni.navigateTo({ url: '/subpkg_consult/patient/index' })
  }

  // 提示用户是否恢复之前填写的病情数据
  if (illnessInfo.value.illnessDesc) {
    uni.showModal({
      title: '温馨提示',
      content: '是否恢复之前填写的病情信息？',
      confirmText: '确认',
      confirmColor: '#16C2A3',
      cancelColor: '#848484',
      success({ confirm }) {
        // 清空 Pinia 中记录的数据
        if (!confirm) illnessInfo.value = initalValue.value
      },
    })
  }
</script>

<template>
  <scroll-page>
    <view class="description-page">
      <!-- 在线医生 -->
      <view class="doctor-online">
        <image src="/static/uploads/doctor-avatar-2.png" class="doctor-avatar" />
        <view class="doctor-info">
          <view class="name">在线医生</view>
          <view class="message">
            请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助
          </view>
          <view class="tips">
            <text class="iconfont icon-shield"></text>
            内容仅医生可见
          </view>
        </view>
      </view>
      <!-- 患者信息 -->
      <view class="patient-info">
        <view class="description">
          <uni-easyinput
            v-model="illnessInfo.illnessDesc"
            type="textarea"
            :styles="{ backgroundColor: '#f6f6f6' }"
            :input-border="false"
            placeholder-style="font-size: 30rpx; color: #979797"
            placeholder="请详细描述您的病情,病情描述不能为空"
          />
        </view>

        <view class="title">本次患病多久了？</view>
        <view class="tags">
          <text
            v-for="illnessTime in illnessTimes"
            :key="illnessTime.value"
            @click="onTimeTagClick(illnessTime.value)"
            :class="{ active: illnessTime.value === illnessInfo.illnessTime }"
            class="tag"
          >
            {{ illnessTime.text }}
          </text>
        </view>

        <view class="title">此次病情是否去医院就诊过？</view>
        <view class="tags">
          <text
            v-for="consultFlag in consultFlags"
            :key="consultFlag.value"
            @click="onFlagTagClick(consultFlag.value)"
            :class="{ active: consultFlag.value === illnessInfo.consultFlag }"
            class="tag"
          >
            {{ consultFlag.text }}
          </text>
        </view>
      </view>
      <!-- 上传图片 -->
      <view class="patient-picture">
        <uni-file-picker
          title="上传病情相关图片 (仅医生可见)"
          v-model="illnessInfo.pictures"
          limit="8"
          :image-styles="{ width: '160rpx', height: '160rpx' }"
          file-extname="png,jpg,gif,webp"
        />
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button @click="onNextStepClick" :disabled="!nextStepEnable" class="uni-button">
        下一步
      </button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
