// 导入封装好的网络请求模块
import { http } from '@/utils/http'

/**
 * 三方支付（微信支付、支付宝支付、云闪付）
 */
export const paymentApi = (data) => {
  return http.post('/patient/consult/pay', data)
}
