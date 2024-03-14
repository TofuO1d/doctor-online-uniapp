"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_consult = require("../../stores/consult.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_easyinput2 + _easycom_uni_file_picker2 + _easycom_scroll_page2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_file_picker + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  props: {
    type: String,
    illnessType: String,
    depId: String
  },
  setup(__props) {
    const props = __props;
    const { illnessInfo, initalValue } = common_vendor.storeToRefs(stores_consult.useConsultStore());
    const illnessTimes = [
      { value: 1, text: "一周内" },
      { value: 2, text: "一月内" },
      { value: 3, text: "半年内" },
      { value: 4, text: "半年以上" }
    ];
    const consultFlags = [
      { value: 1, text: "就诊过" },
      { value: 0, text: "没有就诊过" }
    ];
    const nextStepEnable = common_vendor.computed(() => {
      return illnessInfo.value.illnessDesc !== "" && illnessInfo.value.illnessTime !== "" && illnessInfo.value.consultFlag !== "";
    });
    function onTimeTagClick(value) {
      illnessInfo.value.illnessTime = value;
    }
    function onFlagTagClick(value) {
      illnessInfo.value.consultFlag = value;
    }
    function onNextStepClick() {
      const consultStore = stores_consult.useConsultStore();
      consultStore.type = props.type;
      consultStore.illnessType = props.illnessType;
      consultStore.depId = props.depId;
      const pictures = illnessInfo.value.pictures;
      consultStore.illnessInfo.pictures = pictures.map(({ url, uuid }) => {
        return { id: uuid, url };
      });
      common_vendor.index.navigateTo({ url: "/subpkg_consult/patient/index" });
    }
    if (illnessInfo.value.illnessDesc) {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "是否恢复之前填写的病情信息？",
        confirmText: "确认",
        confirmColor: "#16C2A3",
        cancelColor: "#848484",
        success({ confirm }) {
          if (!confirm)
            illnessInfo.value = initalValue.value;
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(illnessInfo).illnessDesc = $event),
        b: common_vendor.p({
          type: "textarea",
          styles: {
            backgroundColor: "#f6f6f6"
          },
          ["input-border"]: false,
          ["placeholder-style"]: "font-size: 30rpx; color: #979797",
          placeholder: "请详细描述您的病情,病情描述不能为空",
          modelValue: common_vendor.unref(illnessInfo).illnessDesc
        }),
        c: common_vendor.f(illnessTimes, (illnessTime, k0, i0) => {
          return {
            a: common_vendor.t(illnessTime.text),
            b: illnessTime.value,
            c: common_vendor.o(($event) => onTimeTagClick(illnessTime.value), illnessTime.value),
            d: illnessTime.value === common_vendor.unref(illnessInfo).illnessTime ? 1 : ""
          };
        }),
        d: common_vendor.f(consultFlags, (consultFlag, k0, i0) => {
          return {
            a: common_vendor.t(consultFlag.text),
            b: consultFlag.value,
            c: common_vendor.o(($event) => onFlagTagClick(consultFlag.value), consultFlag.value),
            d: consultFlag.value === common_vendor.unref(illnessInfo).consultFlag ? 1 : ""
          };
        }),
        e: common_vendor.o(($event) => common_vendor.unref(illnessInfo).pictures = $event),
        f: common_vendor.p({
          title: "上传病情相关图片 (仅医生可见)",
          limit: "8",
          ["image-styles"]: {
            width: "160rpx",
            height: "160rpx"
          },
          ["file-extname"]: "png,jpg,gif,webp",
          modelValue: common_vendor.unref(illnessInfo).pictures
        }),
        g: common_vendor.o(onNextStepClick),
        h: !common_vendor.unref(nextStepEnable)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/description/index.vue"]]);
wx.createPage(MiniProgramPage);
