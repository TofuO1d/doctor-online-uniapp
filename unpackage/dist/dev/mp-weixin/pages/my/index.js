"use strict";
const common_vendor = require("../../common/vendor.js");
const services_user = require("../../services/user.js");
const stores_user = require("../../stores/user.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_custom_section2 = common_vendor.resolveComponent("custom-section");
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_custom_section2 + _easycom_uni_badge2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_scroll_page2)();
}
const _easycom_custom_section = () => "../../components/custom-section/custom-section.js";
const _easycom_uni_badge = () => "../../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_custom_section + _easycom_uni_badge + _easycom_uni_list_item + _easycom_uni_list + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    const userInfo = common_vendor.ref({});
    function onLogoutClick() {
      userStore.token = "";
      userStore.openType = "switchTab";
      userStore.redirectURL = "/pages/index/index";
      common_vendor.index.reLaunch({ url: "/pages/login/index" });
    }
    async function getUserInfo() {
      const { code, data, message } = await services_user.userInfoApi();
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      userInfo.value = data;
    }
    getUserInfo();
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avatar,
        b: common_vendor.t(userInfo.value.account),
        c: common_vendor.t(userInfo.value.collectionNumber),
        d: common_vendor.t(userInfo.value.likeNumber),
        e: common_vendor.t(userInfo.value.score),
        f: common_vendor.t(userInfo.value.couponNumber),
        g: common_vendor.p({
          ["custom-style"]: {
            paddingBottom: "20rpx"
          },
          title: "问诊中"
        }),
        h: common_vendor.p({
          text: 0,
          offset: [3, 3],
          absolute: "rightTop"
        }),
        i: common_vendor.p({
          text: "2",
          offset: [3, 3],
          absolute: "rightTop"
        }),
        j: common_vendor.p({
          text: 0,
          offset: [3, 3],
          absolute: "rightTop"
        }),
        k: common_vendor.p({
          text: 0,
          offset: [3, 3],
          absolute: "rightTop"
        }),
        l: common_vendor.p({
          ["show-arrow"]: true,
          title: "药品订单"
        }),
        m: common_vendor.p({
          border: false,
          title: "我的问诊",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          to: "/subpkg_consult/order_list/index",
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-01"
          }
        }),
        n: common_vendor.p({
          border: false,
          title: "我的处方",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-02"
          }
        }),
        o: common_vendor.p({
          border: false,
          title: "家庭档案",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          to: "/subpkg_archive/list/index",
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-03"
          }
        }),
        p: common_vendor.p({
          border: false,
          title: "地址管理",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-04"
          }
        }),
        q: common_vendor.p({
          border: false,
          title: "我的评价",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-05"
          }
        }),
        r: common_vendor.p({
          border: false,
          title: "官方客服",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-06"
          }
        }),
        s: common_vendor.p({
          border: false,
          title: "设置",
          ["show-arrow"]: true,
          ["show-extra-icon"]: true,
          ["extra-icon"]: {
            customPrefix: "icon-symbol",
            type: "icon-symbol-tool-07"
          }
        }),
        t: common_vendor.p({
          border: false
        }),
        v: common_vendor.p({
          title: "快捷工具"
        }),
        w: common_vendor.o(onLogoutClick),
        x: common_vendor.p({
          ["background-color"]: "#F6F7F9"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
