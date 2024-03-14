"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./utils/utils.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/index.js";
  "./pages/notify/index.js";
  "./pages/wiki/index.js";
  "./pages/test/index.js";
  "./pages/login/index.js";
  "./subpkg_archive/form/index.js";
  "./subpkg_archive/list/index.js";
  "./subpkg_consult/quickly/index.js";
  "./subpkg_consult/department/index.js";
  "./subpkg_consult/description/index.js";
  "./subpkg_consult/patient/index.js";
  "./subpkg_consult/payment/index.js";
  "./subpkg_consult/room/index.js";
  "./subpkg_consult/order_list/index.js";
  "./subpkg_consult/order_detail/index.js";
  "./uni_modules/uni-pay/pages/success/success.js";
  "./uni_modules/uni-pay/pages/ad-interactive-webview/ad-interactive-webview.js";
  "./subpkg_medicine/payment/index.js";
  "./subpkg_medicine/pay_result/index.js";
  "./subpkg_medicine/order_detail/index.js";
  "./subpkg_medicine/order_list/index.js";
  "./subpkg_medicine/timeline/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const pinia = common_vendor.createPinia();
  pinia.use(
    common_vendor.createPersistedState({
      key: (id) => `__persisted__${id}`,
      storage: {
        setItem(key, value) {
          common_vendor.index.setStorageSync(key, value);
        },
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        }
      }
    })
  );
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
