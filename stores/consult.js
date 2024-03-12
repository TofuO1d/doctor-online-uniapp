import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConsultStore = defineStore(
  'consult',
  () => {
    // 定义数据

    // 1. 患者病情初始数据
    const initalValue = ref({
      illnessDesc: '',
      illnessTime: '',
      consultFlag: '',
      pictures: [],
    })

    // 2. 存储患者病情数据
    const illnessInfo = ref({ ...initalValue.value })

    // 定义地址相关参数据
    const type = ref('')
    const illnessType = ref('')
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
