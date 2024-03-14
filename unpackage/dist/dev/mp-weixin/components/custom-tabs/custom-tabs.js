"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "custom-tabs",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  emits: ["click"],
  setup(__props, { emit: customTabsEmit }) {
    const customTabsProps = __props;
    const tabIndex = common_vendor.ref(0);
    const tabBarRect = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      const selectorQuery = common_vendor.index.createSelectorQuery().in(common_vendor.getCurrentInstance());
      selectorQuery.selectAll(".custom-tabs, .tabbar-text").boundingClientRect(([parent, ...data]) => {
        tabBarRect.value = data.map(({ width, left }) => {
          return { left: left - parent.left, width };
        });
      });
      selectorQuery.exec();
    });
    const cursorPosition = common_vendor.computed(() => {
      if (tabBarRect.value.length === 0)
        return;
      const { width, left } = tabBarRect.value[tabIndex.value];
      return left + (width - 20) / 2;
    });
    function onTabChange(index, tab) {
      tabIndex.value = index;
      customTabsEmit("click", { index, ...tab });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(customTabsProps.list, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab.label),
            b: tab.label,
            c: common_vendor.o(($event) => onTabChange(index, tab), tab.label),
            d: tabIndex.value === index ? 1 : ""
          };
        }),
        b: common_vendor.unref(cursorPosition) + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/components/custom-tabs/custom-tabs.vue"]]);
wx.createComponent(Component);
