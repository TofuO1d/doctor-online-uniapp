<script setup>
  import { ref, onMounted, getCurrentInstance, computed } from 'vue'

  // 接收组件外部传入的数据
  const customTabsProps = defineProps({
    list: {
      type: Array,
      default: [],
    },
  })

  // 自定义事件
  const customTabsEmit = defineEmits(['click'])

  // 初始默认第一个 tab 高亮
  const tabIndex = ref(0)
  // 记录节点信息，宽度和位置
  const tabBarRect = ref([])

  // 生命周期
  onMounted(() => {
    // 在组件中应用，获取组件内部节点信息时需要调用 in 方法
    // 传入当页面实例，通过 getCurrentInstance 获取，相当于选项 API 中的 this
    const selectorQuery = uni.createSelectorQuery().in(getCurrentInstance())

    // 查找【所有节点】信息，用 selectAll 方法
    selectorQuery
      .selectAll('.custom-tabs, .tabbar-text')
      .boundingClientRect(([parent, ...data]) => {
        // 记录每个 tab 文字宽度和位置
        tabBarRect.value = data.map(({ width, left }) => {
          return { left: left - parent.left, width }
        })
      })

    // 执行节点查询
    selectorQuery.exec()
  })

  // 计算游标的位置
  const cursorPosition = computed(() => {
    if (tabBarRect.value.length === 0) return
    const { width, left } = tabBarRect.value[tabIndex.value]
    return left + (width - 20) / 2
  })

  // 用户点击 tab
  function onTabChange(index, tab) {
    // 显示/隐藏组件
    tabIndex.value = index
    // 触发自定义事件
    customTabsEmit('click', { index, ...tab })
  }
</script>

<template>
  <view class="custom-tabs">
    <view
      v-for="(tab, index) in customTabsProps.list"
      :key="tab.label"
      @click="onTabChange(index, tab)"
      :class="{ active: tabIndex === index }"
      class="custom-tabs-bar"
    >
      <text class="tabbar-text">{{ tab.label }}</text>
    </view>
    <view
      class="custom-tabs-cursor"
      :style="{ left: cursorPosition + 'px' }"
    ></view>
  </view>
</template>

<style lang="scss">
  // 自定义tabbar
  .custom-tabs {
    display: flex;
    position: relative;
    padding: 0 30rpx;
  }

  .custom-tabs-bar {
    height: 80rpx;
    line-height: 80rpx;
    color: #979797;
    padding-right: 30rpx;
    position: relative;

    &.active {
      color: #121826;
      font-weight: 500;
    }
  }

  .tabbar-text {
    font-size: 30rpx;
  }

  .custom-tabs-cursor {
    position: absolute;
    bottom: 3px;
    left: 20px;

    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: #2cb5a5;
    transition: all 0.3s ease-out;
  }
</style>
