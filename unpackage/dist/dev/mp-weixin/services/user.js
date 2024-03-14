"use strict";
const utils_http = require("../utils/http.js");
const verifyCodeApi = (data) => {
  return utils_http.http.get("/code", { params: data });
};
const loginByMobileApi = (data) => {
  return utils_http.http.post("/login", data);
};
const loginByPassword = (data) => {
  return utils_http.http.post("/login/password", data);
};
const userInfoApi = () => {
  return utils_http.http.get("/patient/myUser");
};
exports.loginByMobileApi = loginByMobileApi;
exports.loginByPassword = loginByPassword;
exports.userInfoApi = userInfoApi;
exports.verifyCodeApi = verifyCodeApi;
