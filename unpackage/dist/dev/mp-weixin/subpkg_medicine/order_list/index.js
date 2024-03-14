"use strict";
const common_vendor = require("../../common/vendor.js");
const services_medicine = require("../../services/medicine.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_custom_tabs2 + _easycom_uni_load_more2)();
}
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_custom_tabs + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const feedTabs = common_vendor.ref([
      { label: "待支付", status: 10, rendered: false },
      { label: "待发货", status: 11, rendered: false },
      { label: "待收货", status: 12, rendered: false },
      { label: "已完成", status: 13, rendered: false },
      { label: "已取消", status: 14, rendered: true }
    ]);
    const loading = common_vendor.ref(true);
    const isEmpty = common_vendor.ref(false);
    const orderList = common_vendor.ref([]);
    function onTabClick({ index, status }) {
      getOrderList(status);
    }
    async function getOrderList(status) {
      loading.value = true;
      isEmpty.value = false;
      const { code, data, message } = await services_medicine.orderListApi(status);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderList.value = data.rows;
      loading.value = false;
      isEmpty.value = orderList.value.length === 0;
    }
    getOrderList();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onTabClick),
        b: common_vendor.p({
          list: feedTabs.value
        }),
        c: common_vendor.f(orderList.value, (order, k0, i0) => {
          return {
            a: common_vendor.t(order.id),
            b: common_vendor.f(order.medicines, (medicine, k1, i1) => {
              return {
                a: medicine.avatar,
                b: common_vendor.t(medicine.name),
                c: common_vendor.t(medicine.specs),
                d: medicine.prescriptionFlag === 1 ? 1 : "",
                e: common_vendor.t(medicine.amount),
                f: common_vendor.t(medicine.quantity),
                g: medicine.id
              };
            }),
            c: `/subpkg_medicine/order_detail/index?id=${order.id}`,
            d: common_vendor.t(order.actualPayment),
            e: order.id
          };
        }),
        d: isEmpty.value
      }, isEmpty.value ? {} : {}, {
        e: loading.value,
        f: common_vendor.p({
          status: "loading",
          color: "#C3C3C5",
          ["icon-size"]: 16,
          ["content-text"]: {
            contentdown: "上拉显示更多",
            contentrefresh: "数据正在加载中",
            contentnomore: "没有更多数据了"
          }
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_medicine/order_list/index.vue"]]);
wx.createPage(MiniProgramPage);
