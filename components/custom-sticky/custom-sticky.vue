<script setup>
  import { computed } from 'vue'

  // 接收组件外部传入的数据
  const stickyProps = defineProps({
    offsetTop: {
      type: [String, Number],
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  })

  // 组件样式
  const stickStyle = computed(() => {
    return {
      paddingTop: stickyProps.offsetTop,
      backgroundColor: stickyProps.backgroundColor,
    }
  })
</script>

<template>
  <view :style="stickStyle" class="custom-sticky">
    <slot></slot>
  </view>
</template>

<style lang="scss">
  .custom-sticky {
    position: sticky;
    z-index: 100;
    top: 0;
  }
</style>
