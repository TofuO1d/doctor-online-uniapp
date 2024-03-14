<script setup>
  import { ref, computed, reactive } from 'vue'
  import { orderListApi } from '@/services/consult.js'

  // 订单列表组件
  import orderList from './components/order-list.vue'

  // 标签索引值
  const tabIndex = ref(0)
  // 标签页数据
  const orderTabs = reactive([
    { label: '问医生', type: 1, rendered: true },
    { label: '极速问诊', type: 2, rendered: false },
    { label: '开药问诊', type: 3, rendered: false },
  ])

  // 切换标签页
  function onOrderTabChange({ index }) {
    // 标识当前选中的标签页
    tabIndex.value = index
    // 每个标签页只被初始一次
    orderTabs[index].rendered = true
  }
</script>

<template>
  <view class="consult-page">
    <view class="consult-status-tabs">
      <custom-tabs @click="onOrderTabChange" :list="orderTabs"></custom-tabs>
    </view>
    <!-- 订单列表 -->
    <view
      v-for="(order, index) in orderTabs"
      :key="order.type"
      v-show="tabIndex === index"
    >
      <order-list :type="order.type" v-if="order.rendered" />
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>