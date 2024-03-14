"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "notify-info",
  props: {
    type: {
      type: Number,
      default: 31
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.type === 32
      }, props.type === 32 ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/notify-info.vue"]]);
wx.createComponent(Component);
