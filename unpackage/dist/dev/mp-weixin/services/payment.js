"use strict";
const utils_http = require("../utils/http.js");
const paymentApi = (data) => {
  return utils_http.http.post("/patient/consult/pay", data);
};
exports.paymentApi = paymentApi;
