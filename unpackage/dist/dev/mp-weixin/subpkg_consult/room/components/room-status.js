"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_countdown2 + _easycom_uni_icons2)();
}
const _easycom_uni_countdown = () => "../../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "room-status",
  props: {
    status: Number,
    statusValue: String,
    countdown: Number
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.status === 2
      }, props.status === 2 ? {
        b: common_vendor.t(props.statusValue)
      } : {}, {
        c: props.status === 3
      }, props.status === 3 ? {
        d: common_vendor.t(props.statusValue),
        e: common_vendor.p({
          color: "#3c3e42",
          ["font-size"]: 14,
          ["show-day"]: false,
          second: props.countdown
        })
      } : {}, {
        f: props.status === 4
      }, props.status === 4 ? {
        g: common_vendor.p({
          size: "20",
          color: "#121826",
          type: "checkbox-filled"
        }),
        h: common_vendor.t(props.statusValue)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/room-status.vue"]]);
wx.createComponent(Component);
