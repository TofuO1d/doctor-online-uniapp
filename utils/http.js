import Request from 'luch-request'
import { useUserStore } from '@/stores/user.js'

// tabBar页面路径
const tabBarList = [
  'pages/index/index',
  'pages/wiki/index',
  'pages/notify/index',
  'pages/my/index',
]

// 接口白名单
const whiteList = ['/code', '/login', '/login/password']

// 实例化网络请求模块
const http = new Request({
  // 配置接口的基地址
  baseURL: 'https://consult-api.itheima.net',
  custom: {
    loading: true,
  },
})

// 配置请求拦截器
http.interceptors.request.use((config) => {
  // config 即为请求时的参数，包含了请求头等

  if (config.custom.loading) {
    // 显示加载提示
    uni.showLoading({
      title: '正在加载...',
      mask: true,
    })
  }

  // 获取 token
  const userStore = useUserStore()

  // 默认的请求头
  const defaultHeader = {}
  // 判断是否存在 token 并且不在接口白单当中
  if (userStore.token && !whiteList.includes(config.url)) {
    defaultHeader.Authorization = 'Bearer ' + userStore.token
  }

  // 让局的头信息覆盖掉全局的头信息
  config.header = {
    ...defaultHeader,
    ...config.header,
  }

  return config
})

// 响应拦截器
http.interceptors.response.use(
  function ({ data, statusCode }) {
    // 关闭加载提示
    uni.hideLoading()

    // 将接口返回的数据返回
    return data
  },
  function (error) {
    // 关闭加载提示
    uni.hideLoading()

    // 重新进行登录
    if (error.statusCode === 401) reLogin()

    return Promise.reject(error)
  }
)

// 重新登录
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

  // 跳转页面的地址
  userStore.recirectURL = redirectURL
  // 跳转页打开方式
  userStore.openType = openType

  uni.redirectTo({
    url: '/pages/login/index',
  })
}

export { http }
