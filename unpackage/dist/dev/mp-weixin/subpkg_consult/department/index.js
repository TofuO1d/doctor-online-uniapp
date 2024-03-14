"use strict";
const common_vendor = require("../../common/vendor.js");
const services_consult = require("../../services/consult.js");
require("../../utils/http.js");
require("../../stores/user.js");
const _sfc_main = {
  __name: "index",
  props: {
    type: String,
    illnessType: String
  },
  setup(__props) {
    const props = __props;
    const departmentList = common_vendor.ref([]);
    const tabIndex = common_vendor.ref(0);
    const childDepartmentList = common_vendor.computed(() => {
      var _a;
      return (_a = departmentList.value[tabIndex.value]) == null ? void 0 : _a.child;
    });
    async function getDepartmentList() {
      const { code, data, message } = await services_consult.departmentListApi();
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      departmentList.value = data;
    }
    function onTopDeparmentClick(index) {
      tabIndex.value = index;
    }
    getDepartmentList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(departmentList.value, (department, index, i0) => {
          return {
            a: common_vendor.t(department.name),
            b: department.id,
            c: common_vendor.o(($event) => onTopDeparmentClick(index), department.id),
            d: tabIndex.value === index ? 1 : ""
          };
        }),
        b: common_vendor.f(common_vendor.unref(childDepartmentList), (childDepartment, k0, i0) => {
          return {
            a: common_vendor.t(childDepartment.name),
            b: childDepartment.id,
            c: `/subpkg_consult/description/index?type=${props.type}&illnessType=${props.illnessType}&depId=${childDepartment.id}`
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/department/index.vue"]]);
wx.createPage(MiniProgramPage);
