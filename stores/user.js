import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    // 存用户登录状态
    const token = ref('')

    // 默认跳转到首页面
    const recirectURL = ref('/pages/index/index')

    // 跳转页面的方式
    const openType = ref('switchTab')

    // 记录用户的ID
    const userId = ref('')

    return { token, userId, recirectURL, openType }
  },
  {
    persist: {
      paths: ['token', 'userId', 'recirectURL', 'openType'],
    },
  }
)
