// 导入封装好的网络请求模块
import { http } from '@/utils/http'

/**
 * 三方支付（暂时只支持支付宝支付）
 */
export const orderPayApi = (data) => {
  return http.post('/patient/consult/pay', data)
}
