"use strict";const e=require("../common/vendor.js"),t=require("../stores/user.js"),n=["pages/index/index","pages/wiki/index","pages/notify/index","pages/my/index"],r=new e.Request({baseURL:"https://consult-api.itheima.net/",custom:{loading:!0}});r.interceptors.request.use((function(n){n.custom.loading&&e.index.showLoading({title:"正在加载...",mask:!0});const r=t.useUserStore(),i={};return r.token&&(i.Authorization="Bearer "+r.token),n.header={...i,...n.header},n}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function({statusCode:t,data:n,config:r}){return e.index.hideLoading(),n}),(function(r){return e.index.hideLoading(),401===r.statusCode&&function(){const r=getCurrentPages(),i=r[r.length-1],s=i.$page.fullPath,o=n.includes(i.route)?"switchTab":"redirectTo",u=t.useUserStore();u.redirectURL=s,u.openType=o,e.index.redirectTo({url:"/pages/login/index"})}(),Promise.reject(r)})),exports.http=r;
