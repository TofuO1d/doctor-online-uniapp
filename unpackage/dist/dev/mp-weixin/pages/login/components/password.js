"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_user = require("../../../services/user.js");
const stores_user = require("../../../stores/user.js");
require("../../../utils/http.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const __default__ = {
  options: {
    styleIsolation: "shared"
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "password",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    const isAgree = common_vendor.ref(false);
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      mobile: "",
      password: ""
    });
    const formRules = {
      mobile: {
        rules: [
          { required: true, errorMessage: "请填写手机号码" },
          { pattern: "^1\\d{10}$", errorMessage: "手机号码格式不正确" }
        ]
      },
      password: {
        rules: [
          { required: true, errorMessage: "请输入验证码" },
          { pattern: "^[a-zA-Z0-9]{8}$", errorMessage: "密码格式不正确" }
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
        const { code, data, message } = await services_user.loginByPassword(formData2);
        if (code !== 1e4)
          return common_vendor.index.utils.toast(message);
        userStore.token = data.token;
        common_vendor.index[userStore.openType]({
          url: userStore.redirectURL
        });
      } catch (error) {
        console.log(error);
      }
    }
    return (_ctx, _cache) => {
      return {
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
        d: common_vendor.o(($event) => formData.value.password = $event),
        e: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          ["input-border"]: false,
          ["placeholder-style"]: "color: #C3C3C5",
          modelValue: formData.value.password
        }),
        f: common_vendor.p({
          name: "password"
        }),
        g: common_vendor.o(onAgreeClick),
        h: isAgree.value,
        i: common_vendor.o(onFormSubmit),
        j: common_vendor.sr(formRef, "e20f1b0a-0", {
          "k": "formRef"
        }),
        k: common_vendor.p({
          model: formData.value,
          rules: formRules
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/login/components/password.vue"]]);
wx.createComponent(Component);
