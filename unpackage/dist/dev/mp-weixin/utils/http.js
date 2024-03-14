"use strict";
const common_vendor = require("../common/vendor.js");
const stores_user = require("../stores/user.js");
const tabBarList = [
  "pages/index/index",
  "pages/wiki/index",
  "pages/notify/index",
  "pages/my/index"
];
const http = new common_vendor.Request({
  // 接口基地址
  baseURL: "https://consult-api.itheima.net/",
  custom: {
    loading: true
  }
});
http.interceptors.request.use(
  function(config) {
    if (config.custom.loading) {
      common_vendor.index.showLoading({ title: "正在加载...", mask: true });
    }
    const userStore = stores_user.useUserStore();
    const defaultHeader = {};
    if (userStore.token) {
      defaultHeader.Authorization = "Bearer " + userStore.token;
    }
    config.header = {
      ...defaultHeader,
      ...config.header
    };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  function({ statusCode, data, config }) {
    common_vendor.index.hideLoading();
    return data;
  },
  function(error) {
    common_vendor.index.hideLoading();
    if (error.statusCode === 401)
      reLogin();
    return Promise.reject(error);
  }
);
function reLogin() {
  const pageStack = getCurrentPages();
  const currentPage = pageStack[pageStack.length - 1];
  const redirectURL = currentPage.$page.fullPath;
  const openType = tabBarList.includes(currentPage.route) ? "switchTab" : "redirectTo";
  const userStore = stores_user.useUserStore();
  userStore.redirectURL = redirectURL;
  userStore.openType = openType;
  common_vendor.index.redirectTo({ url: `/pages/login/index` });
}
exports.http = http;
