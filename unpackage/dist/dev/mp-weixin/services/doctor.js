"use strict";
const utils_http = require("../utils/http.js");
const feedListApi = (data) => {
  return utils_http.http.get("/patient/home/knowledge", { params: data });
};
const doctorListApi = (current = 1, pageSize = 5) => {
  return utils_http.http.get("/home/page/doc", { params: { current, pageSize } });
};
const followDoctorApi = (id, type = "doc") => {
  return utils_http.http.post("/like", { id, type });
};
const evaluateDoctorApi = (data) => {
  return utils_http.http.post("/patient/order/evaluate", data);
};
exports.doctorListApi = doctorListApi;
exports.evaluateDoctorApi = evaluateDoctorApi;
exports.feedListApi = feedListApi;
exports.followDoctorApi = followDoctorApi;
