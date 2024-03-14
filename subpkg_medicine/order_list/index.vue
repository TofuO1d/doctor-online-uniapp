<script setup>
  import { ref } from 'vue'
  import { orderListApi } from '@/services/medicine'

  // 标签页数据
  const feedTabs = ref([
    { label: '待支付', status: 10, rendered: false },
    { label: '待发货', status: 11, rendered: false },
    { label: '待收货', status: 12, rendered: false },
    { label: '已完成', status: 13, rendered: false },
    { label: '已取消', status: 14, rendered: true },
  ])

  // 加载状态
  const loading = ref(true)
  // 列表是否为空
  const isEmpty = ref(false)

  // 订单列表
  const orderList = ref([])

  // 标签页切换
  function onTabClick({ index, status }) {
    // 获取订单列表
    getOrderList(status)
  }

  // 药品订单列表
  async function getOrderList(status) {
    // 显示加载状态
    loading.value = true
    // 列表是否为空
    isEmpty.value = false

    // 订单列表接口
    const { code, data, message } = await orderListApi(status)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染列表数据
    orderList.value = data.rows

    // 关闭加载状态
    loading.value = false
    // 列表是是否为空
    isEmpty.value = orderList.value.length === 0
  }

  // 获取药品订单列表
  getOrderList()
</script>

<template>
  <view class="medicine-page">
    <view class="order-status-tabs">
      <custom-tabs @click="onTabClick" :list="feedTabs"></custom-tabs>
    </view>
    <scroll-view
      refresher-enabled
      refresher-background="#f6f6f6"
      class="uni-scroll-view"
      scroll-y
    >
      <view class="order-list">
        <view
          v-for="order in orderList"
          :key="order.id"
          class="order-list-item"
        >
          <view class="order-header">
            <text class="number">订单编号: {{ order.id }}</text>
            <text class="status">待支付</text>
          </view>
          <navigator
            :url="`/subpkg_medicine/order_detail/index?id=${order.id}`"
            hover-class="none"
            class="order-body"
          >
            <view
              v-for="medicine in order.medicines"
              :key="medicine.id"
              class="medicine"
            >
              <image
                class="medicine-cover"
                :src="medicine.avatar"
                mode="aspectFill"
              />
              <view class="medicine-info">
                <text class="name">{{ medicine.name }}</text>
                <text
                  :class="{ symbol: medicine.prescriptionFlag === 1 }"
                  class="unit"
                >
                  {{ medicine.specs }}
                </text>
                <text class="price">¥{{ medicine.amount }}</text>
              </view>
              <view class="quantity">x{{ medicine.quantity }}</view>
            </view>
          </navigator>
          <view class="order-footer">
            <view class="total">
              共2件商品 合计：¥{{ order.actualPayment }}（运费¥0.00）
            </view>
            <view class="buttons">
              <button class="uni-button minor">取消订单</button>
              <button class="uni-button">继续支付</button>
            </view>
          </view>
        </view>

        <!-- 列表数据为空 -->
        <view v-if="isEmpty" class="empty-tips">没有更多数据了</view>

        <!-- 加载状态 -->
        <uni-load-more
          v-show="loading"
          status="loading"
          color="#C3C3C5"
          :icon-size="16"
          :content-text="{
            contentdown: '上拉显示更多',
            contentrefresh: '数据正在加载中',
            contentnomore: '没有更多数据了',
          }"
        />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
