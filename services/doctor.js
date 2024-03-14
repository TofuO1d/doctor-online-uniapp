// 导入封装好的网络请求模块
import { http } from '@/utils/http'

/**
 * 首页知识列表
 */
export const feedListApi = (data) => {
  return http.get('/patient/home/knowledge', { params: data })
}

/**
 * 推荐医生列表
 */
export const doctorListApi = (current = 1, pageSize = 5) => {
  return http.get('/home/page/doc', { params: { current, pageSize } })
}

/**
 * 关注医生
 */
export const followDoctorApi = (id, type = 'doc') => {
  return http.post('/like', { id, type })
}

/**
 * 评价医生
 */
export const evaluateDoctorApi = (data) => {
  return http.post('/patient/order/evaluate', data)
}
