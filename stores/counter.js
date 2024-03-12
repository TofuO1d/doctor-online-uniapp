import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Store 用来管理数据
// defineStore('名称', () => {})
// defineStore('名称', {})

// 组合式（Setup）语法
export const useCounterStore = defineStore('counter', () => {
  // 可以写任意组合式 api
  const count = ref(0)
  const name = ref('小明')

  // 计算属性
  const double = computed(() => {
    return count.value * 2
  })

  // 使用 ref 定义的数据相当于 Vuex 中的 state
  // state 的数据是可以渲染到页面中的

  // 加数字
  function increment() {
    count.value += 1
  }

  // 减数字
  function decrement() {
    count.value -= 1
  }

  return { count, name, increment, decrement, double }
})

// 选项式（Options）语法
// export const useCounterStore = defineStore('counter', {
//   state() {
//     return {
//       count: 10,
//       name: '小明',
//     }
//   },

//   getters: {
//     double() {
//       return this.count * 2
//     },
//   },

//   actions: {
//     // 定义函数（方法）
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     },
//   },
// })
