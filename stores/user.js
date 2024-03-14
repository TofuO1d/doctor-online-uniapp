import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    // 记录用户登录状态
    const token = ref('')
    // 记录登录成功后要路转的地址（默认值为首页）
    const redirectURL = ref('/pages/index/index')
    // 跳转地址时采用的 API 名称
    const openType = ref('switchTab')

    // 用户ID
    const userId = ref('')

    return { token, userId, redirectURL, openType }
  },
  {
    persist: {
      paths: ['token', 'userId', 'redirectURL', 'openType'],
    },
  }
)
