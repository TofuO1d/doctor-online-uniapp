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
    id: String
  },
  setup(__props) {
    const props = __props;
    const polyline = common_vendor.ref([]);
    const logisticsInfo = common_vendor.ref({});
    let top = 0;
    const menuButton = common_vendor.index.getMenuButtonBoundingClientRect();
    top = menuButton.top - (50 - menuButton.height) / 2 + "px";
    async function getLogistics() {
      const { code, data, message } = await services_medicine.logisticsApi(props.id);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      logisticsInfo.value = data;
    }
    function onBackClick() {
      common_vendor.index.navigateBack({ delta: 1 });
    }
    getLogistics();
    return (_ctx, _cache) => {
      return {
        a: polyline.value,
        b: common_vendor.o(onBackClick),
        c: common_vendor.t(logisticsInfo.value.statusValue),
        d: common_vendor.unref(top),
        e: common_vendor.t(logisticsInfo.value.statusValue),
        f: common_vendor.t(logisticsInfo.value.estimatedTime),
        g: common_vendor.t(logisticsInfo.value.name),
        h: common_vendor.t(logisticsInfo.value.awbNo),
        i: common_vendor.f(logisticsInfo.value.list, (item, k0, i0) => {
          return common_vendor.e({
            a: item.status <= 3
          }, item.status <= 3 ? {} : {}, {
            b: item.status === 4
          }, item.status === 4 ? {
            c: "8731c084-0-" + i0,
            d: common_vendor.p({
              color: "#2cb5a5",
              ["custom-prefix"]: "iconfont",
              type: "icon-truck"
            })
          } : {}, {
            e: item.status === 5
          }, item.status === 5 ? {
            f: "8731c084-1-" + i0,
            g: common_vendor.p({
              color: "#2cb5a5",
              ["custom-prefix"]: "iconfont",
              type: "icon-checked"
            })
          } : {}, {
            h: common_vendor.t(item.statusValue),
            i: common_vendor.t(item.content),
            j: common_vendor.t(item.createTime),
            k: item.id
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_medicine/timeline/index.vue"]]);
wx.createPage(MiniProgramPage);
