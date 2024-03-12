import { http } from '@/utils/http.js'

export const verifyCodeApi = (data) => {
  return http.get('/code', { params: data })
}

export const loginByMobileApi = (data) => {
  return http.post('/login', data)
}

export const userInfoApi = () => {
  return http.get('/patient/myUser')
}

export const QQLoginApi = (data) => {
  return http.post('/login/thirdparty', data)
}
