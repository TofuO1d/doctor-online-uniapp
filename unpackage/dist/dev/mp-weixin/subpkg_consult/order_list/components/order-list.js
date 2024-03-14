"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_index = require("../../../utils/index.js");
const services_consult = require("../../../services/consult.js");
require("../../../utils/http.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "order-list",
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const props = __props;
    const current = common_vendor.ref(1);
    const pageSize = 5;
    const orderList = common_vendor.ref([]);
    const loadingStatus = common_vendor.ref("loading");
    const hasMore = common_vendor.ref(true);
    const refresherTriggered = common_vendor.ref(false);
    const onScrollToLower = utils_index.debounce(() => {
      if (hasMore.value)
        getOrderList();
    }, 400);
    async function onScrollRefresh() {
      current.value = 1;
      orderList.value = [];
      refresherTriggered.value = true;
      await getOrderList();
      refresherTriggered.value = false;
    }
    async function getOrderList() {
      loadingStatus.value = "loading";
      const { code, data, message } = await services_consult.orderListApi({
        type: props.type,
        current: current.value,
        pageSize
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderList.value = [...orderList.value, ...data.rows];
      current.value++;
      hasMore.value = current.value <= data.pageTotal;
      loadingStatus.value = hasMore.value ? "more" : "noMore";
    }
    getOrderList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(orderList.value, (order, k0, i0) => {
          return common_vendor.e({
            a: order.docInfo.avatar,
            b: common_vendor.t(order.typeValue),
            c: order.status === 1
          }, order.status === 1 ? {} : {}, {
            d: order.status === 2
          }, order.status === 2 ? {} : {}, {
            e: order.status === 3
          }, order.status === 3 ? {} : {}, {
            f: order.status === 4
          }, order.status === 4 ? {} : {}, {
            g: order.status === 5
          }, order.status === 5 ? {} : {}, {
            h: "239b4904-1-" + i0 + "," + ("239b4904-0-" + i0),
            i: common_vendor.p({
              border: false,
              title: "病情描述",
              ["right-text"]: order.illnessDesc
            }),
            j: "239b4904-2-" + i0 + "," + ("239b4904-0-" + i0),
            k: common_vendor.p({
              border: false,
              title: "价格",
              ["right-text"]: "¥" + order.payment
            }),
            l: "239b4904-3-" + i0 + "," + ("239b4904-0-" + i0),
            m: common_vendor.p({
              border: false,
              title: "创建时间",
              ["right-text"]: order.createTime
            }),
            n: "239b4904-0-" + i0,
            o: `/subpkg_consult/order_detail/index?id=${order.id}`,
            p: order.status === 1
          }, order.status === 1 ? {} : {}, {
            q: order.status === 2
          }, order.status === 2 ? {} : {}, {
            r: order.status === 3
          }, order.status === 3 ? {} : {}, {
            s: order.status === 4
          }, order.status === 4 ? common_vendor.e({
            t: order.evaluateId
          }, order.evaluateId ? {} : {}) : {}, {
            v: order.status === 5
          }, order.status === 5 ? {} : {}, {
            w: order.id
          });
        }),
        b: common_vendor.p({
          border: false
        }),
        c: common_vendor.p({
          status: loadingStatus.value,
          color: "#C3C3C5",
          ["icon-size"]: 16,
          ["content-text"]: {
            contentdown: "上拉显示更多",
            contentrefresh: "数据正在加载中...",
            contentnomore: "没有更多数据了"
          }
        }),
        d: refresherTriggered.value,
        e: common_vendor.o(onScrollRefresh),
        f: common_vendor.o((...args) => common_vendor.unref(onScrollToLower) && common_vendor.unref(onScrollToLower)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/order_list/components/order-list.vue"]]);
wx.createComponent(Component);
