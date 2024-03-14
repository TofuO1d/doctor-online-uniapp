"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore(
  "user",
  () => {
    const token = common_vendor.ref("");
    const redirectURL = common_vendor.ref("/pages/index/index");
    const openType = common_vendor.ref("switchTab");
    const userId = common_vendor.ref("");
    return { token, userId, redirectURL, openType };
  },
  {
    persist: {
      paths: ["token", "userId", "redirectURL", "openType"]
    }
  }
);
exports.useUserStore = useUserStore;
