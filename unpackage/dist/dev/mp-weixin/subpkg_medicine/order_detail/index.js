"use strict";
const common_vendor = require("../../common/vendor.js");
const services_medicine = require("../../services/medicine.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_notice_bar2 + _easycom_scroll_page2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_notice_bar + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const orderDetail = common_vendor.ref({});
    const paymentMethods = ["微信支付", "支付宝支付"];
    const orderStatus = common_vendor.ref({
      10: "待支付",
      11: "待发货",
      12: "待收货",
      13: "已完成",
      14: "已取消"
    });
    async function getOrderDetail() {
      const { code, data, message } = await services_medicine.orderDetailApi(props.id);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderDetail.value = data;
    }
    getOrderDetail();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(orderDetail.value.payment),
        b: common_vendor.t(orderStatus.value[orderDetail.value.status]),
        c: orderDetail.value.status === 11
      }, orderDetail.value.status === 11 ? {
        d: common_vendor.t(orderDetail.value.addressInfo.province),
        e: common_vendor.t(orderDetail.value.addressInfo.city),
        f: common_vendor.t(orderDetail.value.addressInfo.county),
        g: common_vendor.t(orderDetail.value.addressInfo.addressDetail),
        h: common_vendor.t(orderDetail.value.addressInfo.receiver),
        i: common_vendor.t(orderDetail.value.addressInfo.mobile)
      } : {}, {
        j: orderDetail.value.status === 12
      }, orderDetail.value.status === 12 ? {
        k: common_vendor.t(orderDetail.value.expressInfo.content),
        l: common_vendor.t(orderDetail.value.expressInfo.time),
        m: common_vendor.p({
          size: "18",
          color: "#C3C3C5",
          type: "forward"
        }),
        n: `/subpkg_medicine/timeline/index?id=${orderDetail.value.id}`
      } : {}, {
        o: common_vendor.f(orderDetail.value.medicines, (medicine, k0, i0) => {
          return {
            a: medicine.avatar,
            b: common_vendor.t(medicine.name),
            c: common_vendor.t(medicine.amount),
            d: common_vendor.t(medicine.quantity),
            e: common_vendor.t(medicine.usageDosag),
            f: medicine.id
          };
        }),
        p: common_vendor.p({
          title: "药品金额",
          ["right-text"]: "¥" + orderDetail.value.payment
        }),
        q: common_vendor.p({
          title: "运费",
          ["right-text"]: "¥" + orderDetail.value.expressFee
        }),
        r: common_vendor.p({
          title: "优惠券",
          ["show-arrow"]: true,
          ["right-text"]: "-¥" + orderDetail.value.couponDeduction
        }),
        s: common_vendor.p({
          title: "实付款",
          ["right-text"]: "¥" + orderDetail.value.actualPayment
        }),
        t: common_vendor.p({
          title: "订单编号",
          ["right-text"]: orderDetail.value.orderNo
        }),
        v: common_vendor.p({
          title: "创建时间",
          ["right-text"]: orderDetail.value.createTime
        }),
        w: common_vendor.p({
          title: "支付方式",
          ["right-text"]: paymentMethods[orderDetail.value.paymentMethod]
        }),
        x: common_vendor.p({
          border: false
        }),
        y: common_vendor.p({
          text: "请在 00:14:59 内完成支付，超时订单将取消"
        })
      }, {
        z: common_vendor.p({
          size: "24",
          color: "#848484",
          type: "trash"
        })
      }, {
        A: common_vendor.p({
          ["background-color"]: "#f6f6f6"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_medicine/order_detail/index.vue"]]);
wx.createPage(MiniProgramPage);
