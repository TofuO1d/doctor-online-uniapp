"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_user = require("../../../stores/user.js");
const _sfc_main = {
  __name: "message-info",
  props: {
    info: {
      type: Object,
      default: {}
    },
    type: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const props = __props;
    const { userId } = stores_user.useUserStore();
    function dateFormat(date) {
      return common_vendor.dayjs(date).format("hh:mm:ss");
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.info.fromAvatar,
        b: common_vendor.t(dateFormat(props.info.createTime)),
        c: props.type === 1
      }, props.type === 1 ? {
        d: common_vendor.t(props.info.msg.content)
      } : {}, {
        e: props.type === 4
      }, props.type === 4 ? {
        f: props.info.msg.picture.url
      } : {}, {
        g: props.info.from === common_vendor.unref(userId) ? 1 : ""
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/message-info.vue"]]);
wx.createComponent(Component);
