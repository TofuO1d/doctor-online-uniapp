<script setup>
  import { ref } from 'vue'
  import { bindingMobileApi, QQLoginApi, verifyCodeApi } from '@/services/user'
  import { useUserStore } from '@/stores/user'

  // QQ用户信息
  const userInfo = ref({})
  // 表单数据
  const formData = ref({
    mobile: '13212345678',
    code: '',
  })

  // 是否绑定手机
  const bindingFlag = ref(true)

  // 调用云函数获取用户信息
  uniCloud.callFunction({
    name: 'qq-connect',
    data: { access_token: location.hash.slice(14, 46) },
    async success({ result }) {
      // QQ 用户数据
      userInfo.value = result
      // 调用接口
      const { code, data, message } = await QQLoginApi({
        source: 'qq',
        ...userInfo.value,
      })

      // 登录成功后跳转
      if (code === 10000) return jumpRoute(data)
      // 是否绑定手机号
      if (code === 10001) bindingFlag.value = data.bindingFlag
    },
    fail(error) {
      console.log(error)
    },
  })

  // 获取验证码
  async function onTextButtonClick() {
    // 将来这里调用接口，发送短信...
    const { code, message } = await verifyCodeApi({
      mobile: formData.value.mobile,
      type: 'bindMobile',
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    uni.utils.toast('验证码已发送，请查收!')
  }

  // 绑定手机号
  async function onBindingButtonClick() {
    // 调用接口
    const { code, data, message } = await bindingMobileApi({
      ...formData.value,
      openId: userInfo.value.openId,
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 登录成功后跳转
    jumpRoute(data)
  }

  // 跳转跳由
  function jumpRoute(data) {
    // Pinia 用户数据
    const userStore = useUserStore()
    // 记录登录状态
    userStore.token = data.token
    // 用户ID
    userStore.userId = data.id
    // 地址重定向或switchTab
    if (userStore.openType === 'switchTab') {
      uni.switchTab({ url: userStore.redirectURL })
    } else {
      uni.redirectTo({ url: userStore.redirectURL })
    }
  }
</script>

<template>
  <view class="user-login" v-if="!bindingFlag">
    <view class="welcome">
      <image class="avatar" :src="userInfo.avatar"></image>
      <text class="nickname">
        Hi，{{ userInfo.nickname }}
        欢迎来优医咨询，完成绑定后可以QQ账号一键登录哦~
      </text>
    </view>

    <uni-forms class="login-form" ref="form">
      <uni-forms-item name="mobile">
        <uni-easyinput
          v-model="formData.mobile"
          :input-border="false"
          :clearable="false"
          placeholder="请输入手机号"
          placeholder-style="color: #C3C3C5"
        />
      </uni-forms-item>
      <uni-forms-item name="code">
        <uni-easyinput
          v-model="formData.code"
          :input-border="false"
          :clearable="false"
          placeholder="请输入验证码"
          placeholder-style="color: #C3C3C5"
        />

        <text @click="onTextButtonClick" class="text-button">获取验证码</text>
      </uni-forms-item>

      <view class="agreement">
        <uni-icons
          v-if="true"
          size="18"
          color="#16C2A3"
          type="checkbox-filled"
        />
        <uni-icons v-else size="18" color="#d1d1d1" type="circle" />
        我已同意
        <text class="link">用户协议</text>
        及
        <text class="link">隐私协议</text>
      </view>

      <button @click="onBindingButtonClick" class="uni-button">
        绑定手机号
      </button>
    </uni-forms>
  </view>
</template>

<style lang="scss">
  .user-login {
    padding: 120rpx 60rpx 0;
  }

  .welcome {
    display: flex;
    align-items: center;
    margin-bottom: 60rpx;

    .avatar {
      width: 100rpx;
      height: 100rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
    }

    .nickname {
      flex: 1;
      font-size: 28rpx;
      color: #3c3e42;
    }
  }

  .uni-forms-item {
    height: 80rpx;
    margin-bottom: 30rpx !important;
    border-bottom: 1rpx solid #ededed;
    box-sizing: border-box;
    position: relative;
  }

  .agreement {
    font-size: 26rpx;
    color: #3c3e42;
    display: flex;
    align-items: center;
    margin-top: 50rpx;
    margin-left: -10rpx;

    .link {
      color: #16c2a3;
    }
  }

  :deep(.uni-forms-item__content) {
    display: flex;
    align-items: center;
  }

  :deep(.uni-forms-item__error) {
    width: 100%;
    padding-top: 10rpx;
    padding-left: 10rpx;
    border-top: 2rpx solid #eb5757;
    color: #eb5757;
    font-size: 24rpx;
    transition: none;
  }

  .text-button {
    display: flex;
    justify-content: flex-end;
    width: 240rpx;
    padding-left: 10rpx;
    font-size: 28rpx;
    color: #16c2a3;
    border-left: 2rpx solid #eee;
  }

  .uni-button {
    margin-top: 50rpx;

    &.secondary {
      background-color: #50c8fd;
    }

    &[disabled] {
      background-color: #fafafa;
      color: #d9dbde;
    }
  }

  .uni-navigator {
    margin-top: 30rpx;
    text-align: center;
    color: #848484;
    font-size: 28rpx;
  }
</style>
