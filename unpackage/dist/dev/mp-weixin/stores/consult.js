"use strict";
const common_vendor = require("../common/vendor.js");
const useConsultStore = common_vendor.defineStore(
  "consult",
  () => {
    const initalValue = common_vendor.ref({
      illnessDesc: "",
      illnessTime: "",
      consultFlag: "",
      pictures: []
    });
    const illnessInfo = common_vendor.ref({ ...initalValue.value });
    const type = common_vendor.ref("");
    const illnessType = common_vendor.ref("");
    const depId = common_vendor.ref("");
    const patientId = common_vendor.ref("");
    return { illnessInfo, initalValue, type, illnessType, depId, patientId };
  },
  {
    persist: {
      paths: ["illnessInfo", "type", "illnessType", "depId", "patientId"]
    }
  }
);
exports.useConsultStore = useConsultStore;
