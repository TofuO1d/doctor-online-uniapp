"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + customPassword + customMobile)();
}
const customPassword = () => "./components/password.js";
const customMobile = () => "./components/mobile.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tabMetas = [
      { title: "密码登录", subTitle: "验证码登录" },
      { title: "验证码登录", subTitle: "密码登录" }
    ];
    const tabIndex = common_vendor.ref(1);
    const tabMeta = common_vendor.computed(() => {
      return tabMetas[tabIndex.value];
    });
    function onSubTitleClick() {
      tabIndex.value = Math.abs(tabIndex.value - 1);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(tabMeta).title),
        b: common_vendor.t(common_vendor.unref(tabMeta).subTitle),
        c: common_vendor.o(onSubTitleClick),
        d: common_vendor.p({
          color: "#3c3e42",
          type: "forward"
        }),
        e: tabIndex.value === 0
      }, tabIndex.value === 0 ? {} : {}, {
        f: tabIndex.value === 1
      }, tabIndex.value === 1 ? {} : {}, {
        g: common_vendor.p({
          color: "#00b0fb",
          size: "30",
          type: "qq"
        }),
        h: common_vendor.p({
          color: "#fb6622",
          size: "30",
          type: "weibo"
        }),
        i: common_vendor.p({
          color: "#07C160",
          size: "30",
          type: "weixin"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
