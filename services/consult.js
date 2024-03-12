import { http } from '@/utils/http.js'

export const departmentListApi = () => {
  return http.get('/dep/all')
}

export const preOrderApi = (type, options = {}) => {
  return http.get('/patient/consult/order/pre', {
    params: { type, ...options },
  })
}

export const createOrderApi = (data) => {
  return http.post('/patient/consult/order', data)
}

export const orderDetailApi = (orderId) => {
  return http.get('/patient/consult/order/detail', { params: { orderId } })
}

export const orderListApi = (data) => {
  return http.get('/patient/consult/order/list', { params: data })
}
