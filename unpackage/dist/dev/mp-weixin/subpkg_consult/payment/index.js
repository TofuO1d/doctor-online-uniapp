"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_consult = require("../../stores/consult.js");
const services_consult = require("../../services/consult.js");
const services_patient = require("../../services/patient.js");
const services_payment = require("../../services/payment.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  const _easycom_custom_payment2 = common_vendor.resolveComponent("custom-payment");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2 + _easycom_scroll_page2 + _easycom_custom_payment2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
const _easycom_custom_payment = () => "../../components/custom-payment/custom-payment.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section + _easycom_scroll_page + _easycom_custom_payment)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { type, illnessType, patientId, illnessInfo, depId } = stores_consult.useConsultStore();
    const preOrderInfo = common_vendor.ref({});
    const patientDetail = common_vendor.ref({});
    const orderId = common_vendor.ref("");
    const paymentRef = common_vendor.ref();
    common_vendor.ref();
    async function onPaymentButtonClick() {
      const { code, data, message } = await services_consult.createOrderApi({
        type,
        illnessType,
        depId,
        patientId,
        ...illnessInfo
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderId.value = data.id;
      paymentRef.value.open();
    }
    async function onPaymentClose() {
      const { confirm } = await common_vendor.index.showModal({
        title: "关闭支付",
        content: "取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",
        cancelText: "仍要关闭",
        cancelColor: "#848484",
        confirmText: "继续支付",
        confirmColor: "#16C2A3"
      });
      if (!confirm)
        paymentRef.value.close();
    }
    async function onPaymentConfirm({ index }) {
      if (index === 0)
        return common_vendor.index.utils.toast("暂不支持微信支付!");
      const { code, data, message } = await services_payment.paymentApi({
        orderId: orderId.value,
        paymentMethod: index,
        payCallback: "http://localhost:5173/#/subpkg_consult/room/index"
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      window.location.href = data.payUrl;
    }
    async function createPreOrder() {
      const { code, data, message } = await services_consult.preOrderApi(type, {
        illnessType
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      preOrderInfo.value = data;
    }
    async function getPatientDetail() {
      const { code, data, message } = await services_patient.patientDetailApi(patientId);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      patientDetail.value = data;
    }
    createPreOrder();
    getPatientDetail();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "极速问诊",
          note: "自动分配医生",
          thumb: "/static/uploads/doctor-avatar.jpg",
          ["thumb-size"]: "lg"
        }),
        b: common_vendor.p({
          title: "优惠券",
          ["show-arrow"]: true,
          ["right-text"]: `-¥${preOrderInfo.value.couponDeduction}`
        }),
        c: common_vendor.t(preOrderInfo.value.pointDeduction),
        d: common_vendor.p({
          title: "积分抵扣"
        }),
        e: common_vendor.t(preOrderInfo.value.actualPayment),
        f: common_vendor.p({
          title: "实付款"
        }),
        g: common_vendor.p({
          border: false
        }),
        h: common_vendor.p({
          ["title-font-size"]: "32rpx",
          ["title-color"]: "#121826",
          padding: "30rpx",
          title: `图文问诊 ${preOrderInfo.value.payment}元`
        }),
        i: common_vendor.t(patientDetail.value.name),
        j: common_vendor.t(patientDetail.value.genderValue),
        k: common_vendor.t(patientDetail.value.age),
        l: common_vendor.p({
          title: "患者信息"
        }),
        m: common_vendor.p({
          border: true,
          title: "病情描述",
          note: common_vendor.unref(illnessInfo).illnessDesc
        }),
        n: common_vendor.p({
          border: false
        }),
        o: common_vendor.p({
          ["title-font-size"]: "32rpx",
          ["title-color"]: "#121826",
          padding: "30rpx",
          title: "患者资料"
        }),
        p: common_vendor.t(preOrderInfo.value.actualPayment),
        q: common_vendor.o(onPaymentButtonClick),
        r: common_vendor.sr(paymentRef, "1ab5412b-11", {
          "k": "paymentRef"
        }),
        s: common_vendor.o(onPaymentClose),
        t: common_vendor.o(onPaymentConfirm),
        v: common_vendor.p({
          amount: preOrderInfo.value.actualPayment,
          ["order-id"]: orderId.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/payment/index.vue"]]);
wx.createPage(MiniProgramPage);
