"use strict";
const common_vendor = require("../../common/vendor.js");
const services_patient = require("../../services/patient.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pageShow = common_vendor.ref(false);
    const patinetList = common_vendor.ref([]);
    const swipeOptions = common_vendor.ref([
      {
        text: "删除",
        style: {
          backgroundColor: "#dd524d"
        }
      }
    ]);
    common_vendor.onShow(() => {
      getPatientList();
    });
    async function onSwipeActionClick(id, index) {
      const { code, message } = await services_patient.removePatientApi(id);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      patinetList.value.splice(index, 1);
    }
    async function getPatientList() {
      const { code, data } = await services_patient.patientListApi();
      if (code !== 1e4)
        return common_vendor.index.utils.showToast("列表获取失败，稍后重试!");
      patinetList.value = data;
      pageShow.value = true;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: pageShow.value
      }, pageShow.value ? common_vendor.e({
        b: common_vendor.f(patinetList.value, (patient, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(patient.name),
            b: common_vendor.t(patient.idCard.replace(/^(.{6}).+(.{4})$/, "$1********$2")),
            c: patient.defaultFlag === 1
          }, patient.defaultFlag === 1 ? {} : {}, {
            d: common_vendor.t(patient.genderValue),
            e: common_vendor.t(patient.age),
            f: "6480c359-3-" + i0 + "," + ("6480c359-2-" + i0),
            g: `/subpkg_archive/form/index?id=${patient.id}`,
            h: patient.defaultFlag === 1 ? 1 : "",
            i: patient.id,
            j: common_vendor.o(($event) => onSwipeActionClick(patient.id, index), patient.id),
            k: "6480c359-2-" + i0 + ",6480c359-1"
          });
        }),
        c: common_vendor.p({
          type: "icon-edit",
          size: "20",
          color: "#16C2A3",
          ["custom-prefix"]: "iconfont"
        }),
        d: common_vendor.p({
          ["right-options"]: swipeOptions.value
        })
      }, {
        e: common_vendor.p({
          color: "#16C2A3",
          size: "24",
          type: "plusempty"
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_archive/list/index.vue"]]);
wx.createPage(MiniProgramPage);
