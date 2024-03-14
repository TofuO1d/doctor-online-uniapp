import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 1. 选项式 Store
// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return {
//       count: 0,
//     }
//   },
//   getters: {
//     double: (state) => {
//       return state.count * 2
//     },
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     },
//   },
// })

// 2. 组合式 Store
export const useCounterStore = defineStore(
  'counter',
  () => {
    // 定义 state
    const count = ref(0)
    // 定义 getters
    const double = computed(() => count.value * 2)
    // 定义 actions
    function increment() {
      count.value++
    }
    function decrement() {
      count.value--
    }

    // 千万不要忘记这里要 return
    return { count, double, increment, decrement }
  },
  {
    persist: {
      paths: ['count'],
    },
  }
)
