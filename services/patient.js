import { http } from '@/utils/http.js'

export const addPatientApi = (data) => {
  return http.post('/patient/add', data)
}

export const patientListApi = () => {
  return http.get('/patient/mylist')
}

export const removePatientApi = (id) => {
  return http.delete(`/patient/del/${id}`)
}

export const patientDetailApi = (id) => {
  return http.get(`/patient/info/${id}`)
}

export const updatePatientApi = (data) => {
  return http.put('/patient/update', data)
}
