"use strict";
const utils_http = require("../utils/http.js");
const addressListApi = () => {
  return utils_http.http.get("/patient/order/address");
};
exports.addressListApi = addressListApi;
