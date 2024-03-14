"use strict";
const common_vendor = require("../common/vendor.js");
const useCounterStore = common_vendor.defineStore(
  "counter",
  () => {
    const count = common_vendor.ref(0);
    const double = common_vendor.computed(() => count.value * 2);
    function increment() {
      count.value++;
    }
    function decrement() {
      count.value--;
    }
    return { count, double, increment, decrement };
  },
  {
    persist: {
      paths: ["count"]
    }
  }
);
exports.useCounterStore = useCounterStore;
