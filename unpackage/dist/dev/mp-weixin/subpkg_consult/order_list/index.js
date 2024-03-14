"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  _easycom_custom_tabs2();
}
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
if (!Math) {
  (_easycom_custom_tabs + orderList)();
}
const orderList = () => "./components/order-list.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabIndex = common_vendor.ref(0);
    const orderTabs = common_vendor.reactive([
      { label: "问医生", type: 1, rendered: true },
      { label: "极速问诊", type: 2, rendered: false },
      { label: "开药问诊", type: 3, rendered: false }
    ]);
    function onOrderTabChange({ index }) {
      tabIndex.value = index;
      orderTabs[index].rendered = true;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onOrderTabChange),
        b: common_vendor.p({
          list: orderTabs
        }),
        c: common_vendor.f(orderTabs, (order, index, i0) => {
          return common_vendor.e({
            a: order.rendered
          }, order.rendered ? {
            b: "52ff2100-1-" + i0,
            c: common_vendor.p({
              type: order.type
            })
          } : {}, {
            d: order.type,
            e: tabIndex.value === index
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/order_list/index.vue"]]);
wx.createPage(MiniProgramPage);
