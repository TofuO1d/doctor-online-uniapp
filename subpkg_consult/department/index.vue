<script setup>
  import { ref, computed } from 'vue'
  import { departmentListApi } from '@/services/consult'

  // 接收地址中的参数
  const props = defineProps({
    type: String,
    illnessType: String,
  })

  // 科室列表
  const departmentList = ref([])
  // 一级科室的索引值
  const tabIndex = ref(0)

  // 二级科室的数据
  const childDepartmentList = computed(() => {
    return departmentList.value[tabIndex.value]?.child
  })

  // 科室列表
  async function getDepartmentList() {
    // 科室列表接口
    const { code, data, message } = await departmentListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染列表数据
    departmentList.value = data
  }

  // 切换选择二级科室
  function onTopDeparmentClick(index) {
    tabIndex.value = index
  }

  // 获取科室列表
  getDepartmentList()
</script>

<template>
  <view class="department-page">
    <scroll-view scroll-y class="department-primary">
      <view
        v-for="(department, index) in departmentList"
        :key="department.id"
        @click="onTopDeparmentClick(index)"
        :class="{ active: tabIndex === index }"
        class="department-item"
      >
        {{ department.name }}
      </view>
      <view class="department-item"></view>
    </scroll-view>
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
