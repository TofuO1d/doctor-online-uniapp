<script setup>
  import { computed, ref } from 'vue'

  // 导入组件
  import customPassowrd from './components/password.vue'
  import customMobile from './components/mobile.vue'

  // 标签页要展示的内容
  const tabMetas = [
    { title: '密码登录', subTitle: '验证码登录' },
    { title: '验证码登录', subTitle: '密码登录' },
  ]

  // 记录索引值
  const tabIndex = ref(1)
  // 计算属性获取文字内容
  const tabMeta = computed(() => {
    return tabMetas[tabIndex.value]
  })

  // 事件回调
  function onSubTitleClick() {
    // 切换 0 和 1
    tabIndex.value = Math.abs(tabIndex.value - 1)
  }

  // qq登录
  function onQQButtonClick() {
    window.location.href = `https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=102015968&redirect_uri=http://consult-patients.itheima.net/pages/login/qq`
  }
</script>
<template>
  <view class="user-login">
    <view class="login-type">
      <view class="title">{{ tabMeta.title }}</view>
      <view @click="onSubTitleClick" class="type">
        <text>{{ tabMeta.subTitle }}</text>
        <uni-icons color="#3c3e42" type="forward" />
      </view>
    </view>

    <!-- 切换显示组件 -->
    <custom-passowrd v-if="tabIndex === 0"></custom-passowrd>
    <custom-mobile v-if="tabIndex === 1"></custom-mobile>
  </view>

  <!-- 社交账号登录 -->
  <view class="social-login">
    <view class="legend">
      <text class="text">其它方式登录</text>
    </view>
    <view class="social-account">
      <view @click="onQQButtonClick" class="icon">
        <uni-icons color="#00b0fb" size="30" type="qq" />
      </view>
      <view class="icon">
        <uni-icons color="#fb6622" size="30" type="weibo" />
      </view>
      <view class="icon">
        <uni-icons color="#07C160" size="30" type="weixin" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
