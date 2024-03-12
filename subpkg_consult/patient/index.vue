<script setup>
  import { computed, ref } from 'vue'
  import { patientListApi } from '@/services/patient'
  import { useConsultStore } from '@/stores/consult'

  // 就诊数据
  const consultStore = useConsultStore()

  // 侧滑按钮配置
  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])

  // 患者列表数据
  const patientList = ref([])
  // 高亮显示患者的索引值
  const patientCardIndex = ref(0)

  // 患者的ID
  const patientId = computed(() => {
    return patientList.value[patientCardIndex.value]?.id
  })

  // 切换选择患者
  function onPatientCardClick(index) {
    // 切换高亮状态
    patientCardIndex.value = index
  }

  // 下一步操作
  function onNextStepClick() {
    // 记录患者ID到 Pinia 中，需要跨页面读取
    consultStore.patientId = patientId.value
    // 跳转到预付订单页面
    uni.navigateTo({ url: '/subpkg_consult/payment/index' })
  }

  // 患者列表数据
  async function getPatientList() {
    // 调用接口
    const { code, data, message } = await patientListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收并渲染患者数据
    patientList.value = data
  }

  // 获取患者列表
  getPatientList()
</script>
<template>
  <scroll-page>
    <view class="patient-page">
      <view class="page-header">
        <view class="patient-title">请选择患者信息</view>
        <view class="patient-tips">以便医生给出更准确的治疗，信息仅医生可见</view>
      </view>
      <uni-swipe-action>
        <uni-swipe-action-item
          v-for="(patient, index) in patientList"
          :key="patient.id"
          :right-options="swipeOptions"
        >
          <view
            @click="onPatientCardClick(index)"
            :class="{ active: patientCardIndex === index }"
            class="archive-card"
          >
            <view class="archive-info">
              <text class="name">{{ patient.name }}</text>
              <text class="id-card">
                {{ patient.idCard.replace(/^(.{6}).+(.{4})$/, '$1********$2') }}
              </text>
              <text v-if="patient.defaultFlag === 1" class="default">默认</text>
            </view>
            <view class="archive-info">
              <text class="gender">{{ patient.genderValue }}</text>
              <text class="age">{{ patient.age }}岁</text>
            </view>
            <navigator
              hover-class="none"
              class="edit-link"
              :url="`/subpkg_archive/add/index?id=${patient.id}`"
            >
              <uni-icons
                type="icon-edit"
                size="20"
                color="#16C2A3"
                custom-prefix="iconfont"
              />
            </navigator>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>

      <!-- 添加按钮 -->
      <view v-if="patientList.length < 6" class="archive-card">
        <navigator class="add-link" hover-class="none" url="/subpkg_archive/form/index">
          <uni-icons color="#16C2A3" size="24" type="plusempty" />
          <text class="label">添加患者</text>
        </navigator>
      </view>
    </view>
    <!-- 下一步操作 -->
    <view class="next-step">
      <button @click="onNextStepClick" class="uni-button">下一步</button>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
