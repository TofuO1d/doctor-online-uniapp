"use strict";
const utils_http = require("../utils/http.js");
const preOrderApi = (prescriptionId) => {
  return utils_http.http.get("/patient/medicine/order/pre", { params: { prescriptionId } });
};
const createOrderApi = (id, addressId) => {
  return utils_http.http.post("/patient/medicine/order", { id, addressId });
};
const orderDetailApi = (id) => {
  return utils_http.http.get(`/patient/medicine/order/detail/${id}`);
};
const orderListApi = (status = 10, current = 1, pageSize = 10) => {
  return utils_http.http.get("/patient/medicine/order/mylist", {
    params: { status, current, pageSize }
  });
};
const logisticsApi = (id) => {
  return utils_http.http.get(`/patient/order/${id}/logistics`);
};
exports.createOrderApi = createOrderApi;
exports.logisticsApi = logisticsApi;
exports.orderDetailApi = orderDetailApi;
exports.orderListApi = orderListApi;
exports.preOrderApi = preOrderApi;
