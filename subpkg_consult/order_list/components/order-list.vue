<script setup>
  import { ref } from 'vue'
  import { debounce } from '@/utils'
  import { orderListApi } from '@/services/consult.js'

  // 接收组件外部传入的数据
  const props = defineProps({
    type: {
      type: Number,
      default: 1,
    },
  })

  // 分页页码
  const current = ref(1)
  // 每页数据条数
  const pageSize = 5
  // 订单列表
  const orderList = ref([])
  // 加载状态提示
  const loadingStatus = ref('loading')
  // 是否还有更多数据
  const hasMore = ref(true)
  // 是否关闭下拉刷新交互
  const refresherTriggered = ref(false)

  // 分页请求更多数据
  const onScrollToLower = debounce(() => {
    if (hasMore.value) getOrderList()
  }, 400)

  // 下拉刷新
  async function onScrollRefresh() {
    // 重置页码的数据
    current.value = 1
    // 重置列表数据
    orderList.value = []

    // 开启下拉动画
    refresherTriggered.value = true
    // 重新请求数据
    await getOrderList()
    // 关闭下拉动画
    refresherTriggered.value = false
  }

  // 获取知识列表
  async function getOrderList() {
    // 正在加载
    loadingStatus.value = 'loading'

    // 调用接口获取知识列表
    const { code, data, message } = await orderListApi({
      type: props.type,
      current: current.value,
      pageSize,
    })

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 追加方式渲染新请求来的数据
    orderList.value = [...orderList.value, ...data.rows]

    // 页码加 1
    current.value++
    // 是否还有更多的数据
    hasMore.value = current.value <= data.pageTotal
    // 没有更多数据
    loadingStatus.value = hasMore.value ? 'more' : 'noMore'
  }

  // 渲染默认标签页数据
  getOrderList()
</script>

<template>
  <scroll-view
    refresher-enabled
    :refresher-triggered="refresherTriggered"
    @refresherrefresh="onScrollRefresh"
    @scrolltolower="onScrollToLower"
    refresher-background="#f6f6f6"
    class="uni-scroll-view"
    scroll-y
  >
    <view class="consult-list">
      <view
        v-for="order in orderList"
        :key="order.id"
        class="consult-list-item"
      >
        <view class="consult-header">
          <view class="label">
            <image class="doctor-avatar" :src="order.docInfo.avatar" />
            <text>{{ order.typeValue }}（自动分配医生）</text>
          </view>
          <text v-if="order.status === 1" class="status color-1">待支付</text>
          <text v-if="order.status === 2" class="status color-2">待接诊</text>
          <text v-if="order.status === 3" class="status color-2">咨询中</text>
          <text v-if="order.status === 4" class="status color-3">已完成</text>
          <text v-if="order.status === 5" class="status color-3">已取消</text>
        </view>

        <navigator
          class="consult-body"
          hover-class="none"
          :url="`/subpkg_consult/order_detail/index?id=${order.id}`"
        >
          <uni-list :border="false">
            <uni-list-item
              :border="false"
              title="病情描述"
              :right-text="order.illnessDesc"
            />
            <uni-list-item
              :border="false"
              title="价格"
              :right-text="'¥' + order.payment"
            />
            <uni-list-item
              :border="false"
              title="创建时间"
              :right-text="order.createTime"
            />
          </uni-list>
        </navigator>

        <view v-if="order.status === 1" class="consult-footer">
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">去支付</button>
        </view>

        <view v-if="order.status === 2" class="consult-footer">
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">继续咨询</button>
        </view>

        <view v-if="order.status === 3" class="consult-footer">
          <button class="uni-button">继续咨询</button>
        </view>

        <view v-if="order.status === 4" class="consult-footer">
          <button class="uni-button minor">问诊记录</button>
          <button v-if="order.evaluateId" class="uni-button minor">
            查看评价
          </button>
          <button v-else class="uni-button">去评价</button>
        </view>

        <view v-if="order.status === 5" class="consult-footer">
          <button class="uni-button minor">删除订单</button>
          <button class="uni-button">咨询其它医生</button>
        </view>
      </view>

      <!-- 加载状态 -->
      <uni-load-more
        :status="loadingStatus"
        color="#C3C3C5"
        :icon-size="16"
        :content-text="{
          contentdown: '上拉显示更多',
          contentrefresh: '数据正在加载中...',
          contentnomore: '没有更多数据了',
        }"
      />
    </view>
  </scroll-view>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
