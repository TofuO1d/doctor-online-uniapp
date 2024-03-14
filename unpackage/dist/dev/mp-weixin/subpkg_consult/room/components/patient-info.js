"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "patient-info",
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const illnessTimes = {
      1: "一周内",
      2: "一个月内",
      3: "半年内",
      4: "半年以上"
    };
    const consultFlags = {
      1: "就诊过",
      0: "没有就诊过"
    };
    async function onPreviewClick(urls) {
      common_vendor.index.previewImage({
        urls: urls.map((item) => item.url)
      });
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.t(props.info.patientInfo.name),
        b: common_vendor.t(props.info.patientInfo.genderValue),
        c: common_vendor.t(props.info.patientInfo.age),
        d: common_vendor.t(illnessTimes[props.info.illnessTime]),
        e: common_vendor.t(consultFlags[props.info.illnessType]),
        f: common_vendor.t(props.info.illnessDesc),
        g: (_a = props.info.pictures) == null ? void 0 : _a.length
      }, ((_b = props.info.pictures) == null ? void 0 : _b.length) ? {
        h: common_vendor.o(($event) => onPreviewClick(props.info.pictures))
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/patient-info.vue"]]);
wx.createComponent(Component);
