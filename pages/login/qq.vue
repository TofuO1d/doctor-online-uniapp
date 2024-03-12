<script setup>
  import { ref } from 'vue'
  import { QQLoginApi, verifyCodeApi } from '@/services/user'

  // 是否绑定手机
  const bindingFlag = ref(true)

  // QQ用户信息
  const userInfo = ref({})
  // 调用云函数获取用户
  uniCloud.callFunction({
    name: 'qq-connect',
    data: { access_token: location.hash.slice(14, 46) },
    async success({ result }) {
      // QQ 用户资料
      userInfo.value = result

      // 调用 QQ 登录的接口，检测是否绑定过手机号
      const { code, data, message } = await QQLoginApi({
        ...userInfo.value,
        source: 'qq',
      })

      // 是否绑定手机号
      if (code === 10001) bindingFlag.value = data.bindingFlag
    },
    fail(error) {
      console.log(error)
    },
  })
</script>
<template>
  <view class="user-login" v-if="!bindingFlag">
    <view class="welcome">
      <image class="avatar" :src="userInfo.avatar" />
      <text class="nickname">
        Hi，{{ userInfo.nickname }}
        欢迎来优医咨询，完成绑定后可以QQ账号一键登录哦~
      </text>
    </view>

    <uni-forms class="login-form" ref="form">
      <uni-forms-item name="name">
        <uni-easyinput
          :input-border="false"
          :clearable="false"
          placeholder="请输入手机号"
          placeholder-style="color: #C3C3C5"
        />
      </uni-forms-item>
      <uni-forms-item name="name">
        <uni-easyinput
          :input-border="false"
          :clearable="false"
          placeholder="请输入验证码"
          placeholder-style="color: #C3C3C5"
        />
        <text class="text-button">获取验证码</text>
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

      <button class="uni-button">绑定手机号</button>
      <!-- <button class="uni-button secondary">暂不绑定</button> -->
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
