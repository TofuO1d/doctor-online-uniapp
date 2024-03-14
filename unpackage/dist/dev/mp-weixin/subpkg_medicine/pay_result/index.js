"use strict";
const common_vendor = require("../../common/vendor.js");
const services_medicine = require("../../services/medicine.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "index",
  props: {
    orderId: String
  },
  setup(__props) {
    const props = __props;
    const orderDetail = common_vendor.ref({});
    async function getOrderDetail(orderId) {
      const { code, data, message } = await services_medicine.orderDetailApi(props.orderId);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderDetail.value = data;
    }
    getOrderDetail();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "70",
          color: "#20c6b2",
          type: "checkbox-filled"
        }),
        b: common_vendor.t(orderDetail.value.actualPayment),
        c: `/subpkg_medicine/order_detail/index?id=${orderDetail.value.id}`,
        d: `/subpkg_consult/room/index?orderId=${orderDetail.value.roomId}`
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_medicine/pay_result/index.vue"]]);
wx.createPage(MiniProgramPage);
