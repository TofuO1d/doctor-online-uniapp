"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_user = require("../../../services/user.js");
const stores_user = require("../../../stores/user.js");
require("../../../utils/http.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_custom_countdown2 = common_vendor.resolveComponent("custom-countdown");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_custom_countdown2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_custom_countdown = () => "../../../components/custom-countdown/custom-countdown.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_custom_countdown + _easycom_uni_forms)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "mobile",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    const isAgree = common_vendor.ref(false);
    const showCountdown = common_vendor.ref(false);
    const buttonText = common_vendor.ref("获取验证码");
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      mobile: "",
      code: ""
    });
    const formRules = {
      mobile: {
        rules: [
          { required: true, errorMessage: "请填写手机号码" },
          { pattern: "^1\\d{10}$", errorMessage: "手机号码格式不正确" }
        ]
      },
      code: {
        rules: [
          { required: true, errorMessage: "请输入验证码" },
          { pattern: "^\\d{6}$", errorMessage: "验证码格式不正确" }
        ]
      }
    };
    function onAgreeClick() {
      isAgree.value = !isAgree.value;
    }
    async function onFormSubmit() {
      if (!isAgree.value)
        return common_vendor.index.utils.toast("请先同意协议!");
      try {
        const formData2 = await formRef.value.validate();
        const { code, data, message } = await services_user.loginByMobileApi(formData2);
        if (code !== 1e4)
          return common_vendor.index.utils.toast(message);
        userStore.token = data.token;
        userStore.userId = data.id;
        common_vendor.index[userStore.openType]({
          url: userStore.redirectURL
        });
      } catch (error) {
        console.log(error);
      }
    }
    function onCountdownTimeup() {
      buttonText.value = "重新获取验证码";
      showCountdown.value = false;
    }
    async function onTextButtonClick() {
      try {
        await formRef.value.validateField(["mobile"]);
        const { code, message } = await services_user.verifyCodeApi({
          mobile: formData.value.mobile,
          type: "login"
        });
        if (code !== 1e4)
          return common_vendor.index.utils.toast(message);
        common_vendor.index.utils.toast("验证码已发送，请查收!");
        showCountdown.value = true;
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => formData.value.mobile = $event),
        b: common_vendor.p({
          ["input-border"]: false,
          clearable: false,
          placeholder: "请输入手机号",
          ["placeholder-style"]: "color: #C3C3C5",
          modelValue: formData.value.mobile
        }),
        c: common_vendor.p({
          name: "mobile"
        }),
        d: common_vendor.o(($event) => formData.value.code = $event),
        e: common_vendor.p({
          ["input-border"]: false,
          clearable: false,
          placeholder: "请输入验证码",
          ["placeholder-style"]: "color: #C3C3C5",
          modelValue: formData.value.code
        }),
        f: showCountdown.value
      }, showCountdown.value ? {
        g: common_vendor.o(onCountdownTimeup),
        h: common_vendor.p({
          second: 59,
          ["show-day"]: false,
          ["show-hour"]: false,
          ["show-miniute"]: false,
          color: "#16C2A3"
        })
      } : {
        i: common_vendor.t(buttonText.value),
        j: common_vendor.o(onTextButtonClick)
      }, {
        k: common_vendor.p({
          name: "code"
        }),
        l: common_vendor.o(onAgreeClick),
        m: isAgree.value,
        n: common_vendor.o(onFormSubmit),
        o: common_vendor.sr(formRef, "6b84ff02-0", {
          "k": "formRef"
        }),
        p: common_vendor.p({
          model: formData.value,
          rules: formRules
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/login/components/mobile.vue"]]);
wx.createComponent(Component);
