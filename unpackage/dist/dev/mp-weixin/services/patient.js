"use strict";
const utils_http = require("../utils/http.js");
const addPatientApi = (data) => {
  return utils_http.http.post("/patient/add", data);
};
const patientListApi = (data) => {
  return utils_http.http.get("/patient/mylist");
};
const removePatientApi = (id) => {
  return utils_http.http.delete(`/patient/del/${id}`);
};
const patientDetailApi = (id) => {
  return utils_http.http.get(`/patient/info/${id}`);
};
const updatePatientApi = (data) => {
  return utils_http.http.put(`/patient/update`, data);
};
exports.addPatientApi = addPatientApi;
exports.patientDetailApi = patientDetailApi;
exports.patientListApi = patientListApi;
exports.removePatientApi = removePatientApi;
exports.updatePatientApi = updatePatientApi;
