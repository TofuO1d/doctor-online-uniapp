<script setup>
  import { ref, computed } from 'vue'

  // 开发测试解除手机号绑定
  import { http } from '@/utils/http.js'
  http.put(`/unbound/13212345678`)

  // 导入组件
  import customPassword from './components/password.vue'
  import customMobile from './components/mobile.vue'

  // 标签页要展示的内容
  const tabMetas = [
    { title: '密码登录', subTitle: '验证码登录' },
    { title: '验证码登录', subTitle: '密码登录' },
  ]
  // 标签页的索引值
  const tabIndex = ref(1)
  //  根据索引值决定当前标签展示的内容
  const tabMeta = computed(() => {
    return tabMetas[tabIndex.value]
  })

  // 切换标签页的索引值
  function onSubTitleClick() {
    // 0 和 1 互换的简单算法
    tabIndex.value = Math.abs(tabIndex.value - 1)
  }

  // QQ登录（仅支持H5端）
  // #ifdef H5
  function onQQButtonClick() {
    window.location.href = `https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=102015968&redirect_uri=http://consult-patients.itheima.net/pages/login/qq`
  }
  // #endif

  // 一键登录（仅支持App）
  // #ifdef APP
  function onWeiboButtonClick() {
    uni.login({
      provider: 'univerify',
      univerifyStyle: {
        fullScreen: true,
        icon: {
          path: 'static/logo.png', // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo
        },
        authButton: {
          normalColor: '#16c2a3', // 授权按钮正常状态背景颜色 默认值：#3479f5
          highlightColor: '#16c2a3', // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）
        },
        privacyTerms: {
          defaultCheckBoxState: false,
          uncheckedImage: 'static/images/uncheckedImage.png',
          checkedImage: 'static/images/checkedImage.png',
          termsColor: '#16c2a3',
        },
      },
      success() {
        uniCloud.callFunction({
          name: 'uni-login',
          success({ result }) {
            console.log(result)
            //
          },
        })
      },
    })
  }
  // #endif
</script>

<template>
  <view class="user-login">
    <view class="login-type">
      <view class="title">{{ tabMeta.title }}</view>
      <view class="type">
        <text @click="onSubTitleClick">{{ tabMeta.subTitle }}</text>
        <uni-icons color="#3c3e42" type="forward" />
      </view>
    </view>
    <!-- 用户名&密码方式 -->
    <custom-password v-if="tabIndex === 0" />
    <!-- 短信验证码方式 -->
    <custom-mobile v-if="tabIndex === 1" />
  </view>
  <!-- 社交账号登录 -->
  <view class="social-login">
    <view class="legend">
      <text class="text">其它方式登录</text>
    </view>
    <view class="social-account">
      <!-- #ifdef H5 -->
      <view @click="onQQButtonClick" class="icon">
        <uni-icons color="#00b0fb" size="30" type="qq" />
      </view>
      <!-- #endif -->

      <!-- #ifdef APP -->
      <view @click="onWeiboButtonClick" class="icon">
        <uni-icons color="#fb6622" size="30" type="weibo" />
      </view>
      <!-- #endif -->
      <view class="icon">
        <uni-icons color="#07C160" size="30" type="weixin" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
