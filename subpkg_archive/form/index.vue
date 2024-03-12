<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import {
    addPatientApi,
    patientDetailApi,
    updatePatientApi,
  } from '@/services/patient'

  // 表单数据
  const formData = ref({
    name: '',
    idCard: '',
    gender: 1,
    defaultFlag: 0,
  })

  // 表单组件
  const formRef = ref()

  // 表单验证规则
  const formRules = {
    name: {
      rules: [
        { required: true, errorMessage: '请填写患者姓名' },
        {
          pattern: '^[\u4e00-\u9fa5]{2,5}$',
          errorMessage: '患者姓名为2-5位中文',
        },
      ],
    },
    idCard: {
      rules: [
        { required: true, errorMessage: '请输入身份证号' },
        {
          pattern:
            '^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[\\dXx]$',
          errorMessage: '身份证号格式不正确',
        },
      ],
    },
    gender: {
      rules: [
        { required: true, errorMessage: '请勾选患者性别' },
        {
          validateFunction(rule, value, data, callback) {
            123456
            // 检测身份证号第17位是否为偶数
            if (data.idCard.slice(16, 17) % 2 !== value) {
              callback('选择的性别与身份号中性别不一致')
            }
            return true
          },
        },
      ],
    },
  }

  // 1. 生命周期中获取地址参数
  // onLoad((query) => {
  //   console.log(query)
  // })

  // 2. 地址参数也可以在页面中定义 defineProps
  const props = defineProps({
    // 地址参数名： 类型
    id: String,
  })

  console.log(props.id)

  // 监听switch切换
  function onSwitchChange(ev) {
    // 是否设置为默认就诊患人
    formData.value.defaultFlag = ev.detail.value ? 1 : 0
  }

  // 提交表单数据
  async function onFormSubmit() {
    try {
      // 表单验证
      await formRef.value.validate()

      // 区分到底是添加还是修改
      props.id ? updatePatient() : addPatient()
    } catch (e) {
      //TODO handle the exception
    }
  }

  // 修改患者
  async function updatePatient() {
    // 调用接口
    const { code, message } = await updatePatientApi(formData.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 返加上一页（患者列表）
    uni.navigateBack()
  }

  // 添加患者
  async function addPatient() {
    // 调用接口
    const { code, message } = await addPatientApi(formData.value)
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 返加上一页（患者列表）
    uni.navigateBack()
  }

  // 获取患者的信息（详情）
  async function getPatientDetail() {
    // 根据ID区分当前页面是添加患者
    // 还是修改患者
    if (!props.id) return
    // 动态修改导航栏标题文字
    uni.setNavigationBarTitle({ title: '编辑患者' })

    // 调用接口
    const {
      code,
      data: { genderValue, age, ...rest },
      message,
    } = await patientDetailApi(props.id)

    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    // 回显患者信息
    formData.value = rest
  }

  getPatientDetail()
</script>

<template>
  <scroll-page>
    <view class="archive-page">
      <uni-forms
        border
        :model="formData"
        :rules="formRules"
        ref="formRef"
        label-width="220rpx"
      >
        <uni-forms-item label="患者姓名" name="name">
          <uni-easyinput
            v-model="formData.name"
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            :input-border="false"
            :clearable="false"
            placeholder="请填写真实姓名"
          />
        </uni-forms-item>
        <uni-forms-item label="患者身份证号" name="idCard">
          <uni-easyinput
            v-model="formData.idCard"
            placeholder-style="color: #C3C3C5; font-size: 32rpx"
            :styles="{ color: '#121826' }"
            :input-border="false"
            :clearable="false"
            placeholder="请填写身份证号"
          />
        </uni-forms-item>
        <uni-forms-item label="患者性别" name="gender">
          <uni-data-checkbox
            selectedColor="#16C2A3"
            v-model="formData.gender"
            :localdata="[
              { text: '男', value: 1 },
              { text: '女', value: 0 },
            ]"
          />
        </uni-forms-item>
        <uni-forms-item label="默认就诊人">
          <view class="uni-switch">
            <switch
              @change="onSwitchChange"
              :checked="formData.defaultFlag === 1"
              color="#20c6b2"
              style="transform: scale(0.7)"
            />
          </view>
        </uni-forms-item>
        <button @click="onFormSubmit" class="uni-button">保存</button>
      </uni-forms>
    </view>
  </scroll-page>
</template>

<style lang="scss">
  @import './index.scss';
</style>
