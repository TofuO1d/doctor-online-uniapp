"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_doctor = require("../../../services/doctor.js");
require("../../../utils/http.js");
require("../../../stores/user.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_rate2 + _easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_easyinput + _easycom_uni_icons)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "rate-info",
  props: {
    orderId: String,
    doctorId: String,
    // 是否已评价过
    hasEvaluate: {
      type: Boolean,
      default: false
    },
    // 评价的内容
    evaluateDoc: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const formData = common_vendor.ref({
      score: props.evaluateDoc.score,
      content: props.evaluateDoc.content,
      anonymousFlag: props.evaluateDoc.anonymousFlag || 0
    });
    const hasEvaluate = common_vendor.ref(props.hasEvaluate);
    const wordCount = common_vendor.computed(() => {
      var _a;
      return ((_a = formData.value.content) == null ? void 0 : _a.length) || 0;
    });
    const buttonEnable = common_vendor.computed(() => {
      return formData.value.score;
    });
    async function onFormSubmit() {
      const { code, data, message } = await services_doctor.evaluateDoctorApi({
        docId: props.doctorId,
        orderId: props.orderId,
        ...formData.value
      });
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      common_vendor.index.utils.toast("感谢您的评价！");
      hasEvaluate.value = true;
    }
    function onAnonymousClick() {
      console.log(1111);
      formData.value.anonymousFlag = Math.abs(formData.value.anonymousFlag - 1);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => formData.value.score = $event),
        b: common_vendor.p({
          size: 28,
          margin: "12",
          modelValue: formData.value.score
        }),
        c: common_vendor.o(($event) => formData.value.content = $event),
        d: common_vendor.p({
          type: "textarea",
          maxlength: "150",
          ["input-border"]: false,
          styles: {
            backgroundColor: "#f6f6f6"
          },
          ["placeholder-style"]: "font-size: 28rpx; color: #979797",
          placeholder: "请描述您对医生的评价或是在医生看诊过程中遇到的问题",
          modelValue: formData.value.content
        }),
        e: common_vendor.t(common_vendor.unref(wordCount)),
        f: !hasEvaluate.value
      }, !hasEvaluate.value ? common_vendor.e({
        g: formData.value.anonymousFlag
      }, formData.value.anonymousFlag ? {
        h: common_vendor.p({
          size: "16",
          color: "#16C2A3",
          type: "checkbox-filled"
        })
      } : {
        i: common_vendor.p({
          size: "16",
          color: "#d1d1d1",
          type: "circle"
        })
      }, {
        j: common_vendor.o(onAnonymousClick)
      }) : {}, {
        k: !hasEvaluate.value
      }, !hasEvaluate.value ? {
        l: !common_vendor.unref(buttonEnable),
        m: common_vendor.o(onFormSubmit)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/components/rate-info.vue"]]);
wx.createComponent(Component);
