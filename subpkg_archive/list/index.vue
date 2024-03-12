<script setup>
  import { ref } from 'vue'
  import { onShow } from '@dcloudio/uni-app'
  import { patientListApi, removePatientApi } from '@/services/patient'

  // 患者列表数据
  const patientList = ref([])
  const pageShow = ref(false)

  // 侧滑按钮
  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])

  // 生命周期
  onShow(() => {
    getPatientList()
  })

  // 点击删除按钮
  async function onSwipeActionClick(id, index) {
    // 调用接口
    const { code, message } = await removePatientApi(id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 删除Vue实例中的数据
    patientList.value.splice(index, 1)
  }

  // 获取患者列表
  async function getPatientList() {
    // 调用API
    const { code, data, message } = await patientListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染数据
    patientList.value = data
    // 显示页面
    pageShow.value = true
  }
</script>

<template>
  <scroll-page>
    <view class="archive-page" v-if="pageShow">
      <view class="archive-tips">最多可添加6人</view>

      <uni-swipe-action>
        <uni-swipe-action-item
          v-for="(patient, index) in patientList"
          :key="patient.id"
          :right-options="swipeOptions"
          @click="onSwipeActionClick(patient.id, index)"
        >
          <view
            :class="{ active: patient.defaultFlag === 1 }"
            class="archive-card"
          >
            <view class="archive-info">
              <text class="name">{{ patient.name }}</text>
              <text class="id-card">321***********6164</text>
              <text v-if="patient.defaultFlag === 1" class="default">默认</text>
            </view>
            <view class="archive-info">
              <text class="gender">{{ patient.genderValue }}</text>
              <text class="age">{{ patient.age }}岁</text>
            </view>
            <navigator
              hover-class="none"
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
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
