import { http } from '@/utils/http.js'

export const feedListApi = (data) => {
  return http.get('/patient/home/knowledge', { params: data })
}

export const doctorListApi = (current = 1, pageSize = 5) => {
  return http.get('/home/page/doc', { params: { current, pageSize } })
}

export const followDoctorApi = (id, type = 'doc') => {
  return http.post('/like', { id, type })
}

export const evaluateDoctorApi = (data) => {
  return http.post('/patient/order/evaluate', data)
}
