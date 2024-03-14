<script setup>
  import { ref } from 'vue'
  import { loginByPassword } from '@/services/user'
  import { useUserStore } from '@/stores/user'

  // 用户相关的数据
  const userStore = useUserStore()

  // 是否同意协议
  const isAgree = ref(false)
  // 获取表单组件
  const formRef = ref()

  // 表单数据
  const formData = ref({
    mobile: '',
    password: '',
  })

  // 验证表单数据的规则
  const formRules = {
    mobile: {
      rules: [
        { required: true, errorMessage: '请填写手机号码' },
        { pattern: '^1\\d{10}$', errorMessage: '手机号码格式不正确' },
      ],
    },
    password: {
      rules: [
        { required: true, errorMessage: '请输入验证码' },
        { pattern: '^[a-zA-Z0-9]{8}$', errorMessage: '密码格式不正确' },
      ],
    },
  }

  // 是否同意协议
  function onAgreeClick() {
    isAgree.value = !isAgree.value
  }

  // 提交表单数据
  async function onFormSubmit() {
    // 判断是否勾选协议
    if (!isAgree.value) return uni.utils.toast('请先同意协议!')

    // 调用 uniForms 组件验证数据的方法
    try {
      // 验证通过后会返回表单的数据
      const formData = await formRef.value.validate()
      // 提交表单数据
      const { code, data, message } = await loginByPassword(formData)
      // 检测接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 持久化存储 token
      userStore.token = data.token
      // 存储登录用户的 ID
      userStore.userId = data.id

      // 地址重定向或switchTab
      if (userStore.openType === 'switchTab') {
        uni.switchTab({ url: userStore.redirectURL })
      } else {
        uni.redirectTo({ url: userStore.redirectURL })
      }

      // 跳转到登录前的页面
      // uni[userStore.openType]({
      //   url: userStore.redirectURL,
      // })
    } catch (error) {
      console.log(error)
    }
  }
</script>

<template>
  <uni-forms
    class="login-form"
    :model="formData"
    :rules="formRules"
    ref="formRef"
  >
    <uni-forms-item name="mobile">
      <uni-easyinput
        v-model="formData.mobile"
        :input-border="false"
        :clearable="false"
        placeholder="请输入手机号"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="password">
      <uni-easyinput
        v-model="formData.password"
        type="password"
        placeholder="请输入密码"
        :input-border="false"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <view class="agreement">
      <radio @click="onAgreeClick" :checked="isAgree" color="#16C2A3" />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button @click="onFormSubmit" class="uni-button">登 录</button>
    <navigator hover-class="none" class="uni-navigator" url=" ">
      忘记密码？
    </navigator>
  </uni-forms>
</template>

<script>
  export default {
    options: {
      styleIsolation: 'shared',
    },
  }
</script>

<style lang="scss">
  @import './styles.scss';
</style>
