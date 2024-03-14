"use strict";
const utils_http = require("../utils/http.js");
const departmentListApi = () => {
  return utils_http.http.get("/dep/all");
};
const preOrderApi = (type, options = {}) => {
  return utils_http.http.get("/patient/consult/order/pre", {
    params: {
      type,
      ...options
    }
  });
};
const createOrderApi = (data) => {
  return utils_http.http.post("/patient/consult/order", data);
};
const orderDetailApi = (orderId) => {
  return utils_http.http.get("/patient/consult/order/detail", { params: { orderId } });
};
const orderListApi = (data) => {
  return utils_http.http.get("/patient/consult/order/list", { params: data });
};
exports.createOrderApi = createOrderApi;
exports.departmentListApi = departmentListApi;
exports.orderDetailApi = orderDetailApi;
exports.orderListApi = orderListApi;
exports.preOrderApi = preOrderApi;
