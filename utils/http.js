// 导入模块
import Request from 'luch-request'
import { useUserStore } from '@/stores/user.js'

// tabBar页面路径
const tabBarList = [
  'pages/index/index',
  'pages/wiki/index',
  'pages/notify/index',
  'pages/my/index',
]

// 实例化网络请求
const http = new Request({
  // 接口基地址
  baseURL: 'https://consult-api.itheima.net/',
  custom: {
    loading: true,
  },
})

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // 显示加载状态提示
    if (config.custom.loading) {
      uni.showLoading({ title: '正在加载...', mask: true })
    }

    // 用户相关的数据
    const userStore = useUserStore()

    // 全局默认的头信息（方便以后扩展）
    const defaultHeader = {}

    // 存在 token 时才有必要添加
    if (userStore.token) {
      // 用户的登录状态
      defaultHeader.Authorization = 'Bearer ' + userStore.token
    }
    // 合并全局头信息和局部头信息（局部优先级高全局）
    config.header = {
      ...defaultHeader,
      ...config.header,
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  function ({ statusCode, data, config }) {
    // 隐藏加载状态提示
    uni.hideLoading()

    // 解构出响应主体
    return data
  },
  function (error) {
    // 隐藏加载状态提示
    uni.hideLoading()

    // 后端约定 token 过期（失效）时，状态码值为 401
    if (error.statusCode === 401) reLogin()

    return Promise.reject(error)
  }
)

// 引导用户重新登录
function reLogin() {
  // 动态读取当前页面的路径
  const pageStack = getCurrentPages()
  const currentPage = pageStack[pageStack.length - 1]
  // 完整的路由（包含地址中的参数）
  const redirectURL = currentPage.$page.fullPath

  // 是否为 tabBar 中定义的路径
  const openType = tabBarList.includes(currentPage.route)
    ? 'switchTab'
    : 'redirectTo'

  // 用户相关数据
  const userStore = useUserStore()

  // 将来再跳转回这个页面
  userStore.redirectURL = redirectURL
  userStore.openType = openType

  // 跳转到登录页面
  uni.redirectTo({ url: `/pages/login/index` })
}

// 导出配置好的模网络模块
export { http }
