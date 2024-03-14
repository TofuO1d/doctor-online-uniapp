<script setup>
  import { ref, computed, reactive } from 'vue'
  import { doctorListApi, feedListApi } from '@/services/doctor'
  // 获取安全区域数据
  const { safeAreaInsets } = uni.getSystemInfoSync()

  // 各类别知识列表组件
  import feedList from './components/feed-list.vue'
  // 医生列表组件
  import doctorList from './components/doctor-list.vue'

  // 标签页索引值
  const tabIndex = ref(0)

  // 构造标签页相关数据
  const feedTabs = reactive([
    {
      label: '推荐',
      type: 'recommend',
      current: 1,
      list: [],
      hasMore: true,
      rendered: true,
    },
    {
      label: '关注',
      type: 'like',
      current: 1,
      list: [],
      hasMore: true,
      rendered: false,
    },
    {
      label: '减脂',
      type: 'fatReduction',
      current: 1,
      list: [],
      hasMore: true,
      rendered: false,
    },
    {
      label: '饮食',
      type: 'food',
      current: 1,
      list: [],
      hasMore: true,
      rendered: false,
    },
  ])

  // 标签页对应的类型 type
  const feedType = computed(() => feedTabs[tabIndex.value].type)
  // 标签页对应的页码 current
  const feedCurrent = computed(() => feedTabs[tabIndex.value].current)
  // 每次请求多少条数据
  const feedPageSize = ref(5)

  // 医生列表
  const doctorItems = ref([])

  // 切换标签页
  function onFeedTabChange({ index }) {
    // 标识当前选中的标签页
    tabIndex.value = index
    // 获取标签页数据
    if (!feedTabs[index].rendered) getFeedList()
    // 每个标签页只被初始一次
    feedTabs[index].rendered = true
  }

  // 滚动加载更多数据
  function onScrollToLower() {
    if (feedTabs[tabIndex.value].hasMore) getFeedList()
  }

  // 获取知识列表
  async function getFeedList() {
    // 调用接口获取知识列表
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

    // 列表中原来的数据
    const list = feedTabs[tabIndex.value].list
    // 追加方式渲染新请求来的数据
    feedTabs[tabIndex.value].list = [...list, ...data.rows]

    // 列表数据的页码
    const current = feedTabs[tabIndex.value].current
    // 更新标签页码
    feedTabs[tabIndex.value].current = current + 1
    // 判断是否有更多数据
    feedTabs[tabIndex.value].hasMore = current + 1 <= data.pageTotal
  }

  // 获取推荐医生列表
  async function getDoctorList() {
    // 医生列表接口
    const { code, data, message } = await doctorListApi()
    //检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染数据
    doctorItems.value = data.rows
  }

  // 渲染默认标签页数据
  getFeedList()
  // 医生列表
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
        <navigator hover-class="none" class="quick-entry-item">
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
        <navigator hover-class="none" class="quick-entry-item">
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
      <view
        class="doctor-feeds"
        :style="{ marginTop: -safeAreaInsets.top + 'px' }"
      >
        <custom-sticky :offset-top="safeAreaInsets.top + 'px'">
          <custom-tabs @click="onFeedTabChange" :list="feedTabs" />
        </custom-sticky>
      </view>

      <!-- 医生列表 -->
      <doctor-list :list="doctorItems" v-show="feedType === 'recommend'" />

      <!-- 关注知识列表 -->
      <view
        v-for="(feed, index) in feedTabs"
        :key="feed.type"
        v-show="tabIndex === index"
      >
        <feed-list :list="feed.list" v-if="feed.rendered" />
      </view>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
