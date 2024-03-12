import { http } from '@/utils/http.js'

/**
 * 收货地址列表
 */
export const addressListApi = () => {
  return http.get('/patient/order/address')
}
