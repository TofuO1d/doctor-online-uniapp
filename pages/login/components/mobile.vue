<script setup>
  import { ref } from 'vue'
  import { loginByMobileApi, verifyCodeApi } from '@/services/user'
  import { useUserStore } from '@/stores/user.js'

  // 用户相关的数据
  const userStore = useUserStore()

  // 控制是否显示倒计时组件
  const showCountdown = ref(false)
  // 按钮文字
  const buttonText = ref('获取验证码')

  // 记录是否同意协议
  const isAgree = ref(false)

  // 获取组件实例
  const formRef = ref()

  // 表单数据
  const formData = ref({
    mobile: '',
    code: '',
  })

  // 验证表单数据的规则
  const formRules = {
    mobile: {
      rules: [
        { required: true, errorMessage: '请填写手机号码' },
        { pattern: '^1\\d{10}$', errorMessage: '手机号码格式不正确' },
      ],
    },
    code: {
      rules: [
        { required: true, errorMessage: '请输入验证码' },
        { pattern: '^\\d{6}$', errorMessage: '验证码格式不正确' },
      ],
    },
  }

  // 倒计时
  async function onTextButtonClick() {
    try {
      // 验证手机号是否合法
      await formRef.value.validateField(['mobile'])

      // 调用接口获取验证码
      const { code, data, message } = await verifyCodeApi({
        mobile: formData.value.mobile,
        type: 'login',
      })

      // 验证接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 开始倒计时
      showCountdown.value = true
    } catch (e) {
      //TODO handle the exception
    }
  }

  // 倒计时结束
  function onCountdownTimeup() {
    showCountdown.value = false
    buttonText.value = '再次获取验证码'
  }

  // 提交表单
  async function onFormSubmit() {
    // 验证是否同意协议
    if (!isAgree.value) return uni.utils.toast('请勾选协议!')

    try {
      const result = await formRef.value.validate()
      // 调用接口
      const { code, data, message } = await loginByMobileApi(result)
      // 检测接口是否调用成功
      if (code !== 10000) return uni.utils.toast(message)

      // 将数据存入 Pinia
      userStore.token = data.token
      userStore.userId = data.id

      // 跳转页面
      uni[userStore.openType]({ url: userStore.recirectURL })
    } catch (error) {
      console.log(error)
    }
  }

  // 切换同意协议
  function onAgreeClick() {
    isAgree.value = !isAgree.value
  }
</script>

<template>
  <uni-forms
    class="login-form"
    :rules="formRules"
    :model="formData"
    ref="formRef"
  >
    <uni-forms-item name="mobile">
      <uni-easyinput
        :input-border="false"
        :clearable="false"
        v-model="formData.mobile"
        placeholder="请输入手机号"
        placeholder-style="color: #C3C3C5"
      />
    </uni-forms-item>
    <uni-forms-item name="code">
      <uni-easyinput
        :input-border="false"
        :clearable="false"
        v-model="formData.code"
        placeholder="请输入验证码"
        placeholder-style="color: #C3C3C5"
      />
      <view v-if="showCountdown" class="text-button">
        <custom-countdown
          :showHour="false"
          :showMiniute="false"
          :showDay="false"
          :second="10"
          color="#16C2A3"
          @timeup="onCountdownTimeup"
        ></custom-countdown>
        秒后重新获取
      </view>
      <text v-else @click="onTextButtonClick" class="text-button">
        {{ buttonText }}
      </text>
    </uni-forms-item>

    <view class="agreement">
      <radio @click="onAgreeClick" :checked="isAgree" color="#16C2A3" />
      我已同意
      <text class="link">用户协议</text>
      及
      <text class="link">隐私协议</text>
    </view>

    <button @click="onFormSubmit" class="uni-button">登 录</button>
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
