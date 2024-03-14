import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConsultStore = defineStore(
  'consult',
  () => {
    // 患者病情初始数据
    const initalValue = ref({
      illnessDesc: '',
      illnessTime: '',
      consultFlag: '',
      pictures: [],
    })

    // 患者病情数据
    const illnessInfo = ref({ ...initalValue.value })

    // 极速问诊
    const type = ref('')
    // 问诊类型
    const illnessType = ref('')
    // 科室ID
    const depId = ref('')
    // 患者ID
    const patientId = ref('')

    return { illnessInfo, initalValue, type, illnessType, depId, patientId }
  },
  {
    persist: {
      paths: ['illnessInfo', 'type', 'illnessType', 'depId', 'patientId'],
    },
  }
)
