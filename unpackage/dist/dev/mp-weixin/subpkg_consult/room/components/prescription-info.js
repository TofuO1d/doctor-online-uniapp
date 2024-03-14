"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "prescription-info",
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "16",
          color: "#848484",
          type: "right"
        }),
        b: common_vendor.t(props.info.name),
        c: common_vendor.t(props.info.genderValue),
        d: common_vendor.t(props.info.age),
        e: common_vendor.t(props.info.diagnosis),
        f: common_vendor.t(props.info.createTime),
        g: common_vendor.f(props.info.medicines, (medicine, k0, i0) => {
          return {
            a: common_vendor.t(medicine.name),
            b: common_vendor.t(medicine.quantity),
            c: common_vendor.t(medicine.usageDosag),
            d: medicine.id
          };
        }),
        h: `/subpkg_medicine/payment/index?id=${props.info.id}`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/prescription-info.vue"]]);
wx.createComponent(Component);
