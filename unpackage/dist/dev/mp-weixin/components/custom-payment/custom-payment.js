"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_popup)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "custom-payment",
  props: {
    // 待支付订单ID
    orderId: String,
    // 待支付金额
    amount: {
      type: [String, Number],
      default: 0
    }
  },
  emits: ["confirm", "change", "close"],
  setup(__props, { expose, emit: paymentEmits }) {
    const paymentProps = __props;
    const paymentPopup = common_vendor.ref();
    const channelIndex = common_vendor.ref(0);
    const paymentChannel = [
      {
        title: "微信支付",
        thumb: "/static/images/wechatpay-icon.png"
      },
      {
        title: "支付宝支付",
        thumb: "/static/images/alipay-icon.png"
      }
    ];
    function onChannelChange(index) {
      channelIndex.value = index;
      paymentEmits("change", { index });
    }
    function open() {
      paymentPopup.value.open();
    }
    function close() {
      paymentPopup.value.close();
    }
    expose({ open, close });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => _ctx.$emit("close")),
        b: common_vendor.p({
          size: "18",
          color: "#333",
          type: "closeempty"
        }),
        c: common_vendor.t(paymentProps.amount),
        d: common_vendor.f(paymentChannel, (channel, index, i0) => {
          return common_vendor.e({
            a: channelIndex.value === index
          }, channelIndex.value === index ? {
            b: "11d38e24-4-" + i0 + "," + ("11d38e24-3-" + i0),
            c: common_vendor.p({
              size: "26",
              color: "#16C2A3",
              type: "checkbox-filled"
            })
          } : {
            d: "11d38e24-5-" + i0 + "," + ("11d38e24-3-" + i0),
            e: common_vendor.p({
              size: "26",
              color: "#d1d1d1",
              type: "circle"
            })
          }, {
            f: channel.title,
            g: common_vendor.o(($event) => onChannelChange(index), channel.title),
            h: "11d38e24-3-" + i0 + ",11d38e24-2",
            i: common_vendor.p({
              title: channel.title,
              thumb: channel.thumb,
              clickable: true
            })
          });
        }),
        e: common_vendor.p({
          border: false
        }),
        f: common_vendor.o(($event) => _ctx.$emit("confirm", {
          index: channelIndex.value
        })),
        g: common_vendor.sr(paymentPopup, "11d38e24-0", {
          "k": "paymentPopup"
        }),
        h: common_vendor.o(($event) => _ctx.$emit("close")),
        i: common_vendor.p({
          ["is-mask-click"]: false,
          type: "bottom"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/components/custom-payment/custom-payment.vue"]]);
wx.createComponent(Component);
