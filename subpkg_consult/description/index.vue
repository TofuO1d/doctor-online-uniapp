<script setup>
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useConsultStore } from '@/stores/consult.js'

  // 获取地址参数
  const props = defineProps({
    type: String,
    illnessType: String,
    depId: String,
  })

  // 是可解构的，但 illnessInfo 和 initalValue 不再是响应式
  // const { illnessInfo, initalValue } = useConsultStore()

  // 这种方式 illnessInfo 和 initalValue 是响应式数据
  const { illnessInfo, initalValue } = storeToRefs(useConsultStore())

  if (illnessInfo.value.illnessDesc) {
    uni.showModal({
      title: '温馨提示',
      content: '是否恢复之前填写的病情信息？',
      confirmText: '确认',
      confirmColor: '#16C2A3',
      cancelColor: '#848484',
      success({ confirm }) {
        // 清空 Pinia 中记录的数据
        if (!confirm) illnessInfo.value = { ...initalValue.value }
      },
    })
  }

  // 病情数据
  // const illnessInfo = ref({
  //   // 病情文字描述
  //   illnessDesc: '',
  //   // 患病时长
  //   illnessTime: '',
  //   // 是否就诊过
  //   consultFlag: '',
  //   // 病情图片介绍
  //   pictures: [],
  // })

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

  // 数据验证，是否允许下一步操作
  const nextStepEnable = computed(() => {
    return (
      illnessInfo.value.illnessDesc !== '' &&
      illnessInfo.value.illnessTime !== '' &&
      illnessInfo.value.consultFlag !== ''
    )
  })

  // 切换患病时长
  function onTimeTagClick(value) {
    illnessInfo.value.illnessTime = value
  }

  // 切换是否就诊过
  function onFlagTagClick(value) {
    // 记录用户选择的数据
    illnessInfo.value.consultFlag = value
  }

  // 下一步操作
  function onNextStepClick() {
    // 将地址中的参数存入 Pinia
    const consultStore = useConsultStore()
    // 存储地址参数
    consultStore.type = props.type
    consultStore.illnessType = props.illnessType
    consultStore.depId = props.depId

    // 跳转到下一页
    uni.navigateTo({ url: '/subpkg_consult/patient/index' })
  }

  // 如果 文字描述、患病时长、是否就诊 三个值不为空时
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
            type="textarea"
            v-model="illnessInfo.illnessDesc"
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
            :class="{ active: illnessTime.value === illnessInfo.illnessTime }"
            @click="onTimeTagClick(illnessTime.value)"
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
          v-model="illnessInfo.pictures"
          title="上传病情相关图片 (仅医生可见)"
          limit="8"
          :image-styles="{ width: '160rpx', height: '160rpx' }"
          file-extname="png,jpg,gif,webp"
        />
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button :disabled="!nextStepEnable" @click="onNextStepClick" class="uni-button">
        下一步
      </button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
