<script setup>
  import { ref } from 'vue'
  import { onShow } from '@dcloudio/uni-app'
  import { patientListApi, removePatientApi } from '@/services/patient'

  // 是否显示页面内容
  const pageShow = ref(false)
  // 患者列表
  const patinetList = ref([])

  // 侧滑按钮配置
  const swipeOptions = ref([
    {
      text: '删除',
      style: {
        backgroundColor: '#dd524d',
      },
    },
  ])

  // 生命周期（页面显示）
  onShow(() => {
    getPatientList()
  })

  // 滑动操作点击
  async function onSwipeActionClick(id, index) {
    // 删除患者接口
    const { code, message } = await removePatientApi(id)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // Vue 实例中的数据也要同步删除
    patinetList.value.splice(index, 1)
  }

  // 家庭档案（患者）列表
  async function getPatientList() {
    // 患者列表接口
    const { code, data } = await patientListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.showToast('列表获取失败，稍后重试!')
    // 渲染接口数据
    patinetList.value = data
    // 展示页面内容
    pageShow.value = true
  }
</script>

<template>
  <scroll-page>
    <view class="archive-page" v-if="pageShow">
      <view class="archive-tips">最多可添加6人</view>
      <uni-swipe-action>
        <uni-swipe-action-item
          v-for="(patient, index) in patinetList"
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
      <view v-if="true" class="archive-card">
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
