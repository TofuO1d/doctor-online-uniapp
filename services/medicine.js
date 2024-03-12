import { http } from '@/utils/http.js'

/**
 * 药品预付订单
 */
export const preOrderApi = (prescriptionId) => {
  return http.get('/patient/medicine/order/pre', { params: { prescriptionId } })
}

export const createOrderApi = (id, addressId) => {
  return http.post('/patient/medicine/order', { id, addressId })
}

/**
 * 药品订单详情
 */
export const orderDetailApi = (id) => {
  return http.get(`/patient/medicine/order/detail/${id}`)
}

// 查看物流信息
export const logisticsApi = (id) => {
  return http.get(`/patient/order/${id}/logistics`)
}
