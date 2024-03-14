"use strict";
const common_vendor = require("../../common/vendor.js");
const services_doctor = require("../../services/doctor.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_custom_tabs2 = common_vendor.resolveComponent("custom-tabs");
  const _easycom_custom_sticky2 = common_vendor.resolveComponent("custom-sticky");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_custom_tabs2 + _easycom_custom_sticky2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_custom_tabs = () => "../../components/custom-tabs/custom-tabs.js";
const _easycom_custom_sticky = () => "../../components/custom-sticky/custom-sticky.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_custom_tabs + _easycom_custom_sticky + doctorList + feedList + _easycom_scroll_page)();
}
const feedList = () => "./components/feed-list.js";
const doctorList = () => "./components/doctor-list.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const tabIndex = common_vendor.ref(0);
    const feedTabs = common_vendor.reactive([
      {
        label: "推荐",
        type: "recommend",
        current: 1,
        list: [],
        hasMore: true,
        rendered: true
      },
      {
        label: "关注",
        type: "like",
        current: 1,
        list: [],
        hasMore: true,
        rendered: false
      },
      {
        label: "减脂",
        type: "fatReduction",
        current: 1,
        list: [],
        hasMore: true,
        rendered: false
      },
      {
        label: "饮食",
        type: "food",
        current: 1,
        list: [],
        hasMore: true,
        rendered: false
      }
    ]);
    const feedType = common_vendor.computed(() => feedTabs[tabIndex.value].type);
    const feedCurrent = common_vendor.computed(() => feedTabs[tabIndex.value].current);
    const feedPageSize = common_vendor.ref(5);
    const doctorItems = common_vendor.ref([]);
    function onFeedTabChange({ index }) {
      tabIndex.value = index;
      if (!feedTabs[index].rendered)
        getFeedList();
      feedTabs[index].rendered = true;
    }
    function onScrollToLower() {
      if (feedTabs[tabIndex.value].hasMore)
        getFeedList();
    }
    async function getFeedList() {
      const { code, data, message } = await services_doctor.feedListApi({
        type: feedType.value,
        current: feedCurrent.value,
        pageSize: feedPageSize.value
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      data.rows.forEach((row) => {
        row.content = row.content.replace(/<[^>]+>/g, "");
      });
      const list = feedTabs[tabIndex.value].list;
      feedTabs[tabIndex.value].list = [...list, ...data.rows];
      const current = feedTabs[tabIndex.value].current;
      feedTabs[tabIndex.value].current = current + 1;
      feedTabs[tabIndex.value].hasMore = current + 1 <= data.pageTotal;
    }
    async function getDoctorList() {
      const { code, data, message } = await services_doctor.doctorListApi();
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      doctorItems.value = data.rows;
    }
    getFeedList();
    getDoctorList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(safeAreaInsets).top + "px",
        b: common_vendor.p({
          size: "22",
          color: "#C3C3C5",
          type: "search"
        }),
        c: common_vendor.o(onFeedTabChange),
        d: common_vendor.p({
          list: feedTabs
        }),
        e: common_vendor.p({
          ["offset-top"]: common_vendor.unref(safeAreaInsets).top + "px"
        }),
        f: -common_vendor.unref(safeAreaInsets).top + "px",
        g: common_vendor.unref(feedType) === "recommend",
        h: common_vendor.p({
          list: doctorItems.value
        }),
        i: common_vendor.f(feedTabs, (feed, index, i0) => {
          return common_vendor.e({
            a: feed.rendered
          }, feed.rendered ? {
            b: "cc4f997c-5-" + i0 + ",cc4f997c-0",
            c: common_vendor.p({
              list: feed.list
            })
          } : {}, {
            d: feed.type,
            e: tabIndex.value === index
          });
        }),
        j: -48 + common_vendor.unref(safeAreaInsets).top + "px",
        k: common_vendor.o(onScrollToLower)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
