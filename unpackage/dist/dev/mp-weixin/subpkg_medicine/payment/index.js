"use strict";
const common_vendor = require("../../common/vendor.js");
const services_medicine = require("../../services/medicine.js");
const services_address = require("../../services/address.js");
const services_payment = require("../../services/payment.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  const _easycom_custom_payment2 = common_vendor.resolveComponent("custom-payment");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_scroll_page2 + _easycom_custom_payment2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
const _easycom_custom_payment = () => "../../components/custom-payment/custom-payment.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list + _easycom_scroll_page + _easycom_custom_payment)();
}
const _sfc_main = {
  __name: "index",
  props: {
    id: String
  },
  setup(__props) {
    const props = __props;
    const preOrderInfo = common_vendor.ref({});
    const addressInfo = common_vendor.ref({});
    const orderId = common_vendor.ref("");
    const paymentRef = common_vendor.ref();
    function onPaymentClose() {
    }
    async function onPaymentConfirm({ index }) {
      if (index === 0)
        return common_vendor.index.utils.toast("暂不支持微信支付!");
      const { code, data, message } = await services_payment.paymentApi({
        orderId: orderId.value,
        paymentMethod: index,
        payCallback: "http://localhost:5173/#/subpkg_medicine/pay_result/index"
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      window.location.href = data.payUrl;
    }
    async function onPaymentButtonClick() {
      const { code, data, message } = await services_medicine.createOrderApi(
        props.id,
        addressInfo.value.id
      );
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderId.value = data.id;
      paymentRef.value.open();
    }
    async function getAddressList() {
      const { code, data, message } = await services_address.addressListApi();
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      addressInfo.value = data[0];
    }
    async function createPreOrder() {
      if (!props.id)
        return;
      const { code, data, message } = await services_medicine.preOrderApi(props.id);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      preOrderInfo.value = data;
    }
    getAddressList();
    createPreOrder();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "16",
          color: "#FF7702",
          type: "location-filled"
        }),
        b: common_vendor.t(addressInfo.value.city),
        c: common_vendor.t(addressInfo.value.county),
        d: common_vendor.t(addressInfo.value.addressDetail),
        e: common_vendor.t(addressInfo.value.receiver),
        f: common_vendor.t(addressInfo.value.mobile),
        g: common_vendor.f(preOrderInfo.value.medicines, (medicine, k0, i0) => {
          return {
            a: medicine.avatar,
            b: common_vendor.t(medicine.name),
            c: common_vendor.t(medicine.specs),
            d: medicine.prescriptionFlag === 1 ? 1 : "",
            e: common_vendor.t(medicine.amount),
            f: common_vendor.t(medicine.quantity),
            g: common_vendor.t(medicine.usageDosag),
            h: medicine.id
          };
        }),
        h: common_vendor.p({
          title: "药品金额",
          ["right-text"]: "¥" + preOrderInfo.value.payment
        }),
        i: common_vendor.p({
          title: "运费",
          ["right-text"]: "¥" + preOrderInfo.value.expressFee
        }),
        j: common_vendor.p({
          title: "优惠券",
          ["show-arrow"]: true,
          ["right-text"]: "-¥" + preOrderInfo.value.couponDeduction
        }),
        k: common_vendor.p({
          title: "实付款",
          ["right-text"]: "¥" + preOrderInfo.value.actualPayment
        }),
        l: common_vendor.p({
          border: false
        }),
        m: common_vendor.t(preOrderInfo.value.actualPayment),
        n: common_vendor.o(onPaymentButtonClick),
        o: common_vendor.p({
          ["background-color"]: "#f6f6f6"
        }),
        p: common_vendor.sr(paymentRef, "7f73e882-7", {
          "k": "paymentRef"
        }),
        q: common_vendor.o(onPaymentClose),
        r: common_vendor.o(onPaymentConfirm),
        s: common_vendor.p({
          amount: preOrderInfo.value.actualPayment,
          ["order-id"]: orderId.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_medicine/payment/index.vue"]]);
wx.createPage(MiniProgramPage);
