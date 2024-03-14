import{l as s,o as t,a,w as e,f as o,g as l,t as r,r as c,A as u,n as i,i as d,q as n,B as f,h as _,j as m,m as p,y as b,z as h}from"./index-0333b418.js";import{_ as x}from"./uni-icons.306a74c1.js";import{r as y}from"./uni-app.es.6fb9258e.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as w,a as v,b as k}from"./uni-list.cc31cbe4.js";import{_ as j}from"./scroll-page.1487e938.js";import{_ as P}from"./doctor-avatar.3b2a5d36.js";import{u as T}from"./user.b6661fd7.js";import{u as A}from"./http.dd4042ae.js";const F=g({__name:"custom-section",props:{title:{type:String,default:""},showArrow:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},setup(n){const f=n;return(n,_)=>{const m=d,p=y(s("uni-icons"),x);return t(),a(m,{class:"custom-section",style:i({...f.customStyle})},{default:e((()=>[o(m,{class:"custom-section-header"},{default:e((()=>[o(m,{class:"section-header-title"},{default:e((()=>[l(r(f.title),1)])),_:1}),o(m,{class:"section-header-right"},{default:e((()=>[c(n.$slots,"right",{},void 0,!0),f.showArrow?(t(),a(p,{key:0,color:"#c3c3c5",size:"16",type:"forward"})):u("",!0)])),_:3})])),_:3}),c(n.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}},[["__scopeId","data-v-fd83d0bf"]]),B=g({__name:"index",setup(c){const u=A(),i=n({});function x(){u.token="",u.openType="switchTab",u.redirectURL="/pages/index/index",f({url:"/pages/login/index"})}return async function(){const{code:s,data:t,message:a}=await T();if(1e4!==s)return uni.utils.toast(a);i.value=t}(),(c,u)=>{const n=_,f=m,g=d,T=p,A=b,B=h,z=y(s("custom-section"),F),N=y(s("uni-badge"),w),S=y(s("uni-list-item"),v),q=y(s("uni-list"),k),C=y(s("scroll-page"),j);return t(),a(C,{"background-color":"#F6F7F9"},{default:e((()=>[o(g,{class:"my-page"},{default:e((()=>[o(g,{class:"user-profile"},{default:e((()=>[o(n,{class:"user-avatar",src:i.value.avatar},null,8,["src"]),o(g,{class:"user-info"},{default:e((()=>[o(f,{class:"nickname"},{default:e((()=>[l(r(i.value.account),1)])),_:1}),o(f,{class:"iconfont icon-edit"})])),_:1})])),_:1}),o(g,{class:"user-data"},{default:e((()=>[o(T,{"hover-class":"none",url:" "},{default:e((()=>[o(f,{class:"data-number"},{default:e((()=>[l(r(i.value.collectionNumber),1)])),_:1}),o(f,{class:"data-label"},{default:e((()=>[l("收藏")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:e((()=>[o(f,{class:"data-number"},{default:e((()=>[l(r(i.value.likeNumber),1)])),_:1}),o(f,{class:"data-label"},{default:e((()=>[l("关注")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:e((()=>[o(f,{class:"data-number"},{default:e((()=>[l(r(i.value.score),1)])),_:1}),o(f,{class:"data-label"},{default:e((()=>[l("积分")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:e((()=>[o(f,{class:"data-number"},{default:e((()=>[l(r(i.value.couponNumber),1)])),_:1}),o(f,{class:"data-label"},{default:e((()=>[l("优惠券")])),_:1})])),_:1})])),_:1}),o(z,{"custom-style":{paddingBottom:"20rpx"},title:"问诊中"},{default:e((()=>[o(B,{class:"uni-swiper","indicator-active-color":"#2CB5A5","indicator-color":"#EAF8F6","indicator-dots":""},{default:e((()=>[o(A,null,{default:e((()=>[o(g,{class:"doctor-brief"},{default:e((()=>[o(n,{class:"doctor-avatar",src:P}),o(g,{class:"doctor-info"},{default:e((()=>[o(g,{class:"meta"},{default:e((()=>[o(f,{class:"name"},{default:e((()=>[l("王医生")])),_:1}),o(f,{class:"title"},{default:e((()=>[l("内分泌科 | 主任医师")])),_:1})])),_:1}),o(g,{class:"meta"},{default:e((()=>[o(f,{class:"tag"},{default:e((()=>[l("三甲")])),_:1}),o(f,{class:"hospital"},{default:e((()=>[l("积水潭医院")])),_:1})])),_:1})])),_:1}),o(T,{class:"doctor-contcat","hover-class":"none",url:" "},{default:e((()=>[l(" 进入咨询 ")])),_:1})])),_:1})])),_:1}),o(A,null,{default:e((()=>[o(g,{class:"doctor-brief"},{default:e((()=>[o(n,{class:"doctor-avatar",src:P}),o(g,{class:"doctor-info"},{default:e((()=>[o(g,{class:"meta"},{default:e((()=>[o(f,{class:"name"},{default:e((()=>[l("王医生")])),_:1}),o(f,{class:"title"},{default:e((()=>[l("内分泌科 | 主任医师")])),_:1})])),_:1}),o(g,{class:"meta"},{default:e((()=>[o(f,{class:"tag"},{default:e((()=>[l("三甲")])),_:1}),o(f,{class:"hospital"},{default:e((()=>[l("积水潭医院")])),_:1})])),_:1})])),_:1}),o(T,{class:"doctor-contcat","hover-class":"none",url:" "},{default:e((()=>[l(" 进入咨询 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(z,{"show-arrow":"",title:"药品订单"},{right:e((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:e((()=>[l("全部订单")])),_:1})])),default:e((()=>[o(g,{class:"drug-order"},{default:e((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:e((()=>[o(N,{text:0,offset:[3,3],absolute:"rightTop"},{default:e((()=>[o(n,{src:"/assets/order-status-1-c9967ee4.png",class:"status-icon"})])),_:1}),o(f,{class:"status-label"},{default:e((()=>[l("待付款")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:e((()=>[o(N,{text:"2",offset:[3,3],absolute:"rightTop"},{default:e((()=>[o(n,{src:"/assets/order-status-2-00b988d5.png",class:"status-icon"})])),_:1}),o(f,{class:"status-label"},{default:e((()=>[l("待付款")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:e((()=>[o(N,{text:0,offset:[3,3],absolute:"rightTop"},{default:e((()=>[o(n,{src:"/assets/order-status-3-f1f138df.png",class:"status-icon"})])),_:1}),o(f,{class:"status-label"},{default:e((()=>[l("待付款")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:e((()=>[o(N,{text:0,offset:[3,3],absolute:"rightTop"},{default:e((()=>[o(n,{src:"/assets/order-status-4-7f74255d.png",class:"status-icon"})])),_:1}),o(f,{class:"status-label"},{default:e((()=>[l("待付款")])),_:1})])),_:1})])),_:1})])),_:1}),o(z,{title:"快捷工具"},{default:e((()=>[o(q,{border:!1},{default:e((()=>[o(S,{border:!1,title:"我的问诊","show-arrow":"","show-extra-icon":"",to:"/subpkg_consult/order_list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-01"}}),o(S,{border:!1,title:"我的处方","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-02"}}),o(S,{border:!1,title:"家庭档案","show-arrow":"","show-extra-icon":"",to:"/subpkg_archive/list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-03"}}),o(S,{border:!1,title:"地址管理","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-04"}}),o(S,{border:!1,title:"我的评价","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-05"}}),o(S,{border:!1,title:"官方客服","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-06"}}),o(S,{border:!1,title:"设置","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-07"}})])),_:1})])),_:1}),o(g,{onClick:x,class:"logout-button"},{default:e((()=>[l("退出登录")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-ca0a0185"]]);export{B as default};