"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
const stores_counter = require("../../stores/counter.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_popup2 + _easycom_scroll_page2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const counterStore = stores_counter.useCounterStore();
    console.log(counterStore.count);
    console.log(counterStore.double);
    const { count, double } = common_vendor.storeToRefs(counterStore);
    let _count = 0;
    function increment() {
      counterStore.$patch({
        count: ++_count
      });
    }
    function decrement() {
      counterStore.$patch({
        count: --_count
      });
    }
    async function onButtonClick() {
      const result = await utils_http.http.request({
        url: "/echo",
        method: "get",
        custom: {
          abc: 123
          // loading: false,
        },
        header: {
          customHeader: "11111111"
        }
      });
      common_vendor.index.utils.toast("测试轻提示");
      console.log(result);
    }
    function test() {
      console.log(111);
    }
    const popupRef = common_vendor.ref();
    function onMaskClick() {
      console.log("蒙层点击了...");
    }
    function openPopup() {
      popupRef.value.open();
    }
    function closePopup() {
      popupRef.value.close();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onButtonClick),
        b: common_vendor.o((...args) => common_vendor.unref(counterStore).decrement && common_vendor.unref(counterStore).decrement(...args)),
        c: common_vendor.unref(counterStore).count,
        d: common_vendor.o((...args) => common_vendor.unref(counterStore).increment && common_vendor.unref(counterStore).increment(...args)),
        e: common_vendor.o(decrement),
        f: common_vendor.unref(count),
        g: common_vendor.o(increment),
        h: common_vendor.t(common_vendor.unref(count)),
        i: common_vendor.t(common_vendor.unref(double)),
        j: common_vendor.o(openPopup),
        k: common_vendor.o(closePopup),
        l: common_vendor.sr(popupRef, "212ae690-1,212ae690-0", {
          "k": "popupRef"
        }),
        m: common_vendor.o(onMaskClick),
        n: common_vendor.p({
          ["is-mask-click"]: false,
          type: "bottom"
        }),
        o: common_vendor.o(test),
        p: common_vendor.o(test),
        q: common_vendor.p({
          ["background-color"]: "#f6f6f6",
          ["refresher-enabled"]: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/test/index.vue"]]);
wx.createPage(MiniProgramPage);
