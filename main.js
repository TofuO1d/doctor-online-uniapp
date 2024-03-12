import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App'
import '@/utils/utils.js'

export function createApp() {
  // 创建 Pinia 实例
  const pinia = createPinia()
  const app = createSSRApp(App)
  // 安装 Pinia 插件
  // pinia.use(piniaPluginPersistedstate)

  // 进阶用法
  pinia.use(
    createPersistedState({
      // 用来定义本地存储
      storage: {
        // 用获取本地存储
        getItem(key) {
          // 使用 uni-app 的 API
          return uni.getStorageSync(key)
        },
        // 用来存本地存储
        setItem(key, value) {
          // 使用 uni-app 的 API
          uni.setStorageSync(key, value)
        },
      },
    })
  )

  // 安装 Pinia
  app.use(pinia)

  return {
    app,
  }
}
