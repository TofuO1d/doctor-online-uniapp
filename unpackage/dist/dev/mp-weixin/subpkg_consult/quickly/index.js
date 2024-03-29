"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_scroll_page2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  props: {
    type: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "三甲图文问诊",
          note: "三甲主治及以上级别医生",
          ["show-arrow"]: true,
          to: `/subpkg_consult/department/index?type=${props.type}&illnessType=1`,
          thumb: "/static/images/consult-type-1.png",
          ["thumb-size"]: "lg"
        }),
        b: common_vendor.p({
          border: false
        }),
        c: common_vendor.p({
          title: "普通图文问诊",
          note: "二甲主治及以上级别医生",
          ["show-arrow"]: true,
          to: `/subpkg_consult/department/index?type=${__props.type}&illnessType=0`,
          thumb: "/static/images/consult-type-2.png",
          ["thumb-size"]: "lg"
        }),
        d: common_vendor.p({
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/quickly/index.vue"]]);
wx.createPage(MiniProgramPage);
