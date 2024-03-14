<script setup>
  import { ref, computed } from 'vue'
  import { onShow } from '@dcloudio/uni-app'
  import { patientListApi } from '@/services/patient'
  import { useConsultStore } from '@/stores/consult'

  // 患者相关的数据
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

  // 患者列表
  const patientList = ref([])
  // 是否显示页面内容
  const pageShow = ref(false)
  // 患者卡片索引值
  const patientCardIndex = ref(0)

  // 所选患者的ID
  const patientId = computed(() => {
    return patientList.value[patientCardIndex.value].id
  })

  // 页面加载生命周期
  onShow(() => {
    // 获取患者列表
    getPatientList()
  })

  function onPatientCardClick(index) {
    // 患者的索引值
    patientCardIndex.value = index
  }

  // 下一步操作
  function onNextStepClick() {
    // 将选中的患者ID记录到 Pinia 中
    consultStore.patientId = patientId.value
    // 下一步操作
    uni.navigateTo({ url: '/subpkg_consult/payment/index' })
  }

  // 家庭档案（患者）列表
  async function getPatientList() {
    // 患者列表接口
    const { code, data } = await patientListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.showToast('列表获取失败，稍后重试!')
    // 渲染接口数据
    patientList.value = data
    // 展示页面内容
    pageShow.value = true
  }
</script>

<template>
  <scroll-page>
    <view class="patient-page" v-if="pageShow">
      <view class="page-header">
        <view class="patient-title"> 请选择患者信息 </view>
        <view class="patient-tips">
          以便医生给出更准确的治疗，信息仅医生可见
        </view>
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
              class="edit-link"
              :url="`/subpkg_archive/form/index?id=${patient.id}`"
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
        <navigator
          class="add-link"
          hover-class="none"
          url="/subpkg_archive/form/index"
        >
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
