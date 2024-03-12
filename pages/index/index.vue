<script setup>
  import { ref, computed } from 'vue'
  import { doctorListApi, feedListApi } from '@/services/doctor'

  // 导入列表组件
  import feedList from './components/feed-list.vue'
  // 导入医生组件
  import doctorList from './components/doctor-list.vue'

  // 获取安全区域数据
  const { safeAreaInsets } = uni.getSystemInfoSync()

  // 标签页索引值
  const tabIndex = ref(0)
  // 标签页数据
  const feedTabs = ref([
    {
      label: '推荐',
      type: 'recommend',
      current: 1,
      hasMore: true,
      list: [],
      rendered: true,
    },
    {
      label: '关注',
      type: 'like',
      current: 1,
      hasMore: true,
      list: [],
      rendered: false,
    },
    {
      label: '减脂',
      type: 'fatReduction',
      current: 1,
      hasMore: true,
      list: [],
      rendered: false,
    },
    {
      label: '饮食',
      type: 'food',
      current: 1,
      hasMore: true,
      list: [],
      rendered: false,
    },
  ])

  // 医生列表
  const doctorItems = ref([])

  // 类型数据
  const feedType = computed(() => feedTabs.value[tabIndex.value].type)
  // 页码数据
  const feedCurrent = computed(() => feedTabs.value[tabIndex.value].current)
  // 每页数据条数
  const feedPageSize = ref(5)

  // 切换标签页
  function onFeedTabChange({ index }) {
    tabIndex.value = index

    // 只有组件未被加载时才去请求数据（保证只有1次）
    if (!feedTabs.value[tabIndex.value].rendered) getFeedList()

    // 标记组件是否为渲染过
    feedTabs.value[tabIndex.value].rendered = true
  }

  // 监听页面滚动
  function onScrollToLower() {
    // 没有更多数据时就事必发请求了
    if (feedTabs.value[tabIndex.value].hasMore) getFeedList()
  }

  // 首页文章列表数据
  async function getFeedList() {
    // 调用接口
    const { code, data, message } = await feedListApi({
      type: feedType.value,
      current: feedCurrent.value,
      pageSize: feedPageSize.value,
    })

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 过滤掉 html 标签
    data.rows.forEach((row) => {
      row.content = row.content.replace(/<[^>]+>/g, '')
    })

    // 列表数据的页码
    const current = feedTabs.value[tabIndex.value].current

    // 将调用接口获取的数据放到不同的 list 当中
    // 根据索引值来区分放到哪个 list 中

    // list 为上一次列表中的数据
    // data.rows 为新请求来的数据
    const list = feedTabs.value[tabIndex.value].list
    feedTabs.value[tabIndex.value].list = [...list, ...data.rows]

    // 让页码加1，保证下一页的请求
    feedTabs.value[tabIndex.value].current++
    // 判断是否有更多数据
    feedTabs.value[tabIndex.value].hasMore = current + 1 <= data.pageTotal
  }

  // 获取医生列表数据
  async function getDoctorList() {
    // 调用接口
    const { code, data, message } = await doctorListApi()
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 接收列表数据
    doctorItems.value = data.rows
  }

  // 获取首页列表数据
  getFeedList()
  // 获取医生列表
  getDoctorList()
</script>

<template>
  <scroll-page @scrolltolower="onScrollToLower">
    <view
      class="index-page"
      :style="{ backgroundPositionY: -48 + safeAreaInsets.top + 'px' }"
    >
      <!-- 页面导航 -->
      <view
        :style="{ paddingTop: safeAreaInsets.top + 'px' }"
        class="page-navbar"
      >
        优医
      </view>
      <!-- 搜索栏 -->
      <view class="search-bar">
        <input
          placeholder-class="input-placeholder"
          placeholder="搜一搜: 疾病/症状/医生/健康知识"
          class="input"
          type="text"
        />
        <view class="icon-search">
          <uni-icons size="22" color="#C3C3C5" type="search" />
        </view>
      </view>
      <!-- 快速入口 -->
      <view class="quick-entry">
        <navigator
          hover-class="none"
          url="/subpkg_consult/quickly/index?type=1"
          class="quick-entry-item"
        >
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-1.png"
          />
          <text class="label">问医生</text>
          <text class="small">按科室查问医生</text>
        </navigator>
        <navigator
          hover-class="none"
          class="quick-entry-item"
          url="/subpkg_consult/quickly/index?type=2"
        >
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-2.png"
          />
          <text class="label">极速问诊</text>
          <text class="small">20s医生极速回复</text>
        </navigator>
        <navigator
          hover-class="none"
          url="/subpkg_consult/quickly/index?type=3s"
          class="quick-entry-item"
        >
          <image
            class="quick-entry-icon"
            src="/static/images/quick-entry-3.png"
          />
          <text class="label">开药门诊</text>
          <text class="small">线上买药更方便</text>
        </navigator>
      </view>
      <!-- 快速查看 -->
      <view class="quick-view">
        <navigator
          hover-class="none"
          class="quick-view-item"
          url="/subpkg_medicine/order_list/index"
        >
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-1.png"
          />
          <text class="label">药品订单</text>
        </navigator>
        <navigator
          hover-class="none"
          class="quick-view-item"
          url="/subpkg_archive/list/index"
        >
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-2.png"
          />
          <text class="label">健康档案</text>
        </navigator>
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-3.png"
          />
          <text class="label">我的处方</text>
        </navigator>
        <navigator hover-class="none" class="quick-view-item">
          <image
            class="quick-view-icon"
            src="/static/images/quick-view-4.png"
          />
          <text class="label">疾病查询</text>
        </navigator>
      </view>
      <!-- 广告位 -->
      <view class="banner-placeholder">
        <swiper
          class="uni-swiper"
          indicator-dots
          indicator-color="#ffffff99"
          indicator-active-color="#fff"
          circular
        >
          <swiper-item>
            <navigator hover-class="none" class="navigator" url=" ">
              <image class="banner-image" src="/static/images/banner-1.png" />
            </navigator>
          </swiper-item>
          <swiper-item>
            <navigator hover-class="none" class="navigator" url=" ">
              <image
                class="banner-image"
                src="/static/images/banner-1.png"
                mode="aspectFill"
              />
            </navigator>
          </swiper-item>
        </swiper>
      </view>

      <!-- 首页列表 -->
      <view
        class="doctor-feeds"
        :style="{ marginTop: -safeAreaInsets.top + 'px' }"
      >
        <!-- 标签切换 + 吸顶交互 -->
        <custom-sticky :offset-top="safeAreaInsets.top + 'px'">
          <custom-tabs @click="onFeedTabChange" :list="feedTabs" />
        </custom-sticky>

        <!-- 该组件一定要放到与吸顶组件平级 -->
        <view
          v-for="(feed, index) in feedTabs"
          :key="feed.type"
          v-show="tabIndex === index"
        >
          <!-- 医生列表 -->
          <doctor-list :list="doctorItems" v-show="feedType === 'recommend'" />
          <!-- 医生文章列表 -->
          <feed-list :list="feed.list" v-if="feed.rendered" />
        </view>
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
