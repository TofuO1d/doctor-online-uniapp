"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "scroll-page",
  props: {
    borderStyle: {
      type: [String, Boolean],
      default: false
    },
    refresherEnabled: {
      type: Boolean,
      default: false
    },
    refresherTriggered: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  emits: ["refresherrefresh", "scrolltolower"],
  setup(__props) {
    const scrollPageProps = __props;
    const { windowHeight } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(windowHeight) + "px",
        b: scrollPageProps.borderStyle,
        c: scrollPageProps.backgroundColor,
        d: scrollPageProps.refresherEnabled,
        e: scrollPageProps.refresherTriggered,
        f: common_vendor.o(($event) => _ctx.$emit("refresherrefresh", $event)),
        g: common_vendor.o(($event) => _ctx.$emit("scrolltolower", $event))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/components/scroll-page/scroll-page.vue"]]);
wx.createComponent(Component);
