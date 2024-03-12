<script setup>
  import { ref, computed } from 'vue'
  import { departmentListApi } from '@/services/consult'

  // 获取地址参数
  const props = defineProps({
    type: String,
    illnessType: String,
  })

  // 科室列表数据
  const departmentList = ref([])
  // 高亮状态科室的索引
  const tabIndex = ref(0)

  // 二级科室数据
  const childDepartmentList = computed(() => {
    return departmentList.value[tabIndex.value]?.child
  })

  // 切换高亮状态
  function onTopDeparmentClick(index) {
    tabIndex.value = index
  }

  // 科室列表
  async function getDepartmentList() {
    // 调用接口
    const { code, data, message } = await departmentListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收数据并渲染
    departmentList.value = data
  }

  // 获取科室列表数据
  getDepartmentList()
</script>

<template>
  <view class="department-page">
    <scroll-view scroll-y class="department-primary">
      <!-- <view class="department-item active">内科</view> -->
      <view
        v-for="(department, index) in departmentList"
        :key="department.id"
        :class="{ active: tabIndex === index }"
        @click="onTopDeparmentClick(index)"
        class="department-item"
      >
        {{ department.name }}
      </view>
      <view class="department-item"></view>
    </scroll-view>
    <!-- 二级科室 -->
    <scroll-view class="department-secondary">
      <navigator
        v-for="childDepartment in childDepartmentList"
        :key="childDepartment.id"
        hover-class="none"
        :url="`/subpkg_consult/description/index?type=${props.type}&illnessType=${props.illnessType}&depId=${childDepartment.id}`"
        class="department-item"
      >
        {{ childDepartment.name }}
      </navigator>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
