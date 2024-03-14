<script setup>
  // 读取页面视口的高度
  const { windowHeight } = uni.getSystemInfoSync()

  // 自定义组件属性
  const scrollPageProps = defineProps({
    borderStyle: {
      type: [String, Boolean],
      default: false,
    },
    refresherEnabled: {
      type: Boolean,
      default: false,
    },
    refresherTriggered: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  })

  // 自定义事件
  defineEmits(['refresherrefresh', 'scrolltolower'])
</script>

<template>
  <scroll-view
    :style="{
      height: windowHeight + 'px',
      boxSizing: 'border-box',
      borderBottom: scrollPageProps.borderStyle,
      backgroundColor: scrollPageProps.backgroundColor,
    }"
    scroll-y
    :refresherEnabled="scrollPageProps.refresherEnabled"
    :refresherTriggered="scrollPageProps.refresherTriggered"
    @refresherrefresh="$emit('refresherrefresh', $event)"
    @scrolltolower="$emit('scrolltolower', $event)"
  >
    <view class="scroll-page-content">
      <slot></slot>
    </view>
  </scroll-view>
</template>

<style lang="scss">
  .scroll-page-content {
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
