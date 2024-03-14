import { http } from '@/utils/http'

/**
 * 医生科室列表
 */
export const departmentListApi = () => {
  return http.get('/dep/all')
}

/**
 * 生成预支付订单
 */
export const preOrderApi = (type, options = {}) => {
  return http.get('/patient/consult/order/pre', {
    params: {
      type,
      ...options,
    },
  })
}

/**
 * 生成待支付订单
 */
export const createOrderApi = (data) => {
  return http.post('/patient/consult/order', data)
}

/**
 * 问诊订单详情
 */
export const orderDetailApi = (orderId) => {
  return http.get('/patient/consult/order/detail', { params: { orderId } })
}

/**
 * 医生问诊列表
 */
export const orderListApi = (data) => {
  return http.get('/patient/consult/order/list', { params: data })
}
