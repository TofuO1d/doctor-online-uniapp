"use strict";
const common_vendor = require("../../common/vendor.js");
const services_patient = require("../../services/patient.js");
require("../../utils/http.js");
require("../../stores/user.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_scroll_page2 = common_vendor.resolveComponent("scroll-page");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2 + _easycom_scroll_page2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_scroll_page = () => "../../components/scroll-page/scroll-page.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_forms + _easycom_scroll_page)();
}
const _sfc_main = {
  __name: "index",
  props: { id: String },
  setup(__props) {
    const props = __props;
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      name: "",
      idCard: "",
      gender: 1,
      defaultFlag: 0
    });
    const formRules = {
      name: {
        rules: [
          { required: true, errorMessage: "请填写患者姓名" },
          {
            pattern: "^[一-龥]{2,5}$",
            errorMessage: "患者姓名为2-5位中文"
          }
        ]
      },
      idCard: {
        rules: [
          { required: true, errorMessage: "请输入身份证号" },
          {
            pattern: "^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[\\dXx]$",
            errorMessage: "身份证号格式不正确"
          }
        ]
      },
      gender: {
        rules: [
          { required: true, errorMessage: "请勾选患者姓名" },
          {
            validateFunction(rule, value, data, callback) {
              if (data.idCard.slice(16, 17) % 2 !== value) {
                callback("选择的性别与身份号中性别不一致");
              }
              return true;
            }
          }
        ]
      }
    };
    async function onFormSubmit() {
      try {
        const formData2 = await formRef.value.validate();
        props.id ? updatePatient() : addPatient();
      } catch (error) {
        console.log(error);
      }
    }
    function onSwitchChange(ev) {
      formData.value.defaultFlag = ev.detail.value ? 1 : 0;
    }
    async function addPatient() {
      const { code, message } = await services_patient.addPatientApi(formData.value);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      common_vendor.index.navigateBack();
    }
    async function updatePatient() {
      const { code, message } = await services_patient.updatePatientApi(formData.value);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      common_vendor.index.navigateBack();
    }
    async function getPatientDetail() {
      if (!props.id)
        return;
      common_vendor.index.setNavigationBarTitle({ title: "编辑患者" });
      const {
        code,
        data: { genderValue, age, ...rest }
      } = await services_patient.patientDetailApi(props.id);
      formData.value = rest;
    }
    getPatientDetail();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => formData.value.name = $event),
        b: common_vendor.p({
          ["placeholder-style"]: "color: #C3C3C5; font-size: 32rpx",
          styles: {
            color: "#121826"
          },
          ["input-border"]: false,
          clearable: false,
          placeholder: "请填写真实姓名",
          modelValue: formData.value.name
        }),
        c: common_vendor.p({
          label: "患者姓名",
          name: "name"
        }),
        d: common_vendor.o(($event) => formData.value.idCard = $event),
        e: common_vendor.p({
          ["placeholder-style"]: "color: #C3C3C5; font-size: 32rpx",
          styles: {
            color: "#121826"
          },
          ["input-border"]: false,
          clearable: false,
          placeholder: "请填写身份证号",
          modelValue: formData.value.idCard
        }),
        f: common_vendor.p({
          label: "患者身份证号",
          name: "idCard"
        }),
        g: common_vendor.o(($event) => formData.value.gender = $event),
        h: common_vendor.p({
          selectedColor: "#16C2A3",
          localdata: [{
            text: "男",
            value: 1
          }, {
            text: "女",
            value: 0
          }],
          modelValue: formData.value.gender
        }),
        i: common_vendor.p({
          label: "患者性别",
          name: "gender"
        }),
        j: common_vendor.o(onSwitchChange),
        k: formData.value.defaultFlag === 1,
        l: common_vendor.p({
          label: "默认就诊人"
        }),
        m: common_vendor.o(onFormSubmit),
        n: common_vendor.sr(formRef, "d324b002-1,d324b002-0", {
          "k": "formRef"
        }),
        o: common_vendor.p({
          border: true,
          ["label-width"]: "220rpx",
          model: formData.value,
          rules: formRules
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_archive/form/index.vue"]]);
wx.createPage(MiniProgramPage);
