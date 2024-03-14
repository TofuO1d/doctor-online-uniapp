"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_doctor = require("../../../services/doctor.js");
require("../../../utils/http.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "doctor-list",
  props: {
    list: Array
  },
  setup(__props) {
    async function onFollowButtonClick(doctor) {
      const { code, data, message } = await services_doctor.followDoctorApi(doctor.id);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      doctor.likeFlag = 1;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "#c3c3c5",
          type: "forward"
        }),
        b: common_vendor.f(__props.list, (item, index, i0) => {
          return common_vendor.e({
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.hospitalName),
            d: common_vendor.t(item.depName),
            e: common_vendor.t(item.positionalTitles),
            f: item.likeFlag === 1
          }, item.likeFlag === 1 ? {} : {
            g: common_vendor.o(($event) => onFollowButtonClick(item), item.id)
          }, {
            h: item.id
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/index/components/doctor-list.vue"]]);
wx.createComponent(Component);
