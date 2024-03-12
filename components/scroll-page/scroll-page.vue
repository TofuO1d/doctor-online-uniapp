<script setup>
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
  defineEmits(['scrolltolower', 'refresherrefresh'])

  // 读取页面视口的高度
  const { windowHeight } = uni.getSystemInfoSync()

  // function test() {
  //   console.log('快到底了...')
  // }
</script>
<template>
  <scroll-view
    :refresherEnabled="scrollPageProps.refresherEnabled"
    :refresherTriggered="scrollPageProps.refresherTriggered"
    @refresherrefresh="$emit('refresherrefresh', $event)"
    @scrolltolower="$emit('scrolltolower', $event)"
    scroll-y
    :style="{
      height: windowHeight + 'px',
      borderBottom: scrollPageProps.borderStyle,
      backgroundColor: scrollPageProps.backgroundColor,
      boxSizing: 'border-box',
    }"
  >
    <view class="scroll-page-content">
      <slot></slot>
    </view>
  </scroll-view>
</template>

<style lang="scss">
  .scroll-page-content {
    // height: 1000px;
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
