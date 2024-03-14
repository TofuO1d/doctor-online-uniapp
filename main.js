import { createSSRApp } from 'vue'
// 导入 Pinia
import { createPinia } from 'pinia'
// Pinia 持久化插件
import { createPersistedState } from 'pinia-plugin-persistedstate'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App'
import '@/utils/utils'

export function createApp() {
  const app = createSSRApp(App)

  // 创建 Pinia 实例
  const pinia = createPinia()

  // 应用 Pinia 插件
  // pinia.use(piniaPluginPersistedstate)

  pinia.use(
    createPersistedState({
      key: (id) => `__persisted__${id}`,
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    })
  )

  app.use(pinia)

  return {
    app,
  }
}
