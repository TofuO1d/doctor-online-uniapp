// 导入封装好的网络请求模块
import { http } from '@/utils/http'

/**
 * 发送验证码
 */
export const verifyCodeApi = (data) => {
  return http.get('/code', { params: data })
}

/**
 * 用户登录接口（短信验证码方式）
 */
export const loginByMobileApi = (data) => {
  return http.post('/login', data)
}

/**
 * 用户登录接口（密码方式）
 */
export const loginByPassword = (data) => {
  return http.post('/login/password', data)
}

/**
 * 获取用户信息
 */
export const userInfoApi = () => {
  return http.get('/patient/myUser')
}

/**
 * QQ登录
 */
export const QQLoginApi = (data) => {
  return http.post('/login/thirdparty', data)
}

/**
 * 绑定手机号
 */
export const bindingMobileApi = (data) => {
  return http.post('/login/binding', data)
}
