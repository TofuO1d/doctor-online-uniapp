"use strict";const e=require("../../common/vendor.js"),t=require("../../stores/consult.js"),n=require("../../services/consult.js"),o=require("../../services/patient.js"),i=require("../../services/payment.js");if(require("../../utils/http.js"),require("../../stores/user.js"),!Array){(e.resolveComponent("uni-list-item")+e.resolveComponent("uni-list")+e.resolveComponent("uni-section")+e.resolveComponent("scroll-page")+e.resolveComponent("custom-payment"))()}Math||((()=>"../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js")+(()=>"../../uni_modules/uni-list/components/uni-list/uni-list.js")+(()=>"../../uni_modules/uni-section/components/uni-section/uni-section.js")+(()=>"../../components/scroll-page/scroll-page.js")+(()=>"../../components/custom-payment/custom-payment.js"))();const s={__name:"index",setup(s){const{type:a,illnessType:l,patientId:r,illnessInfo:u,depId:c}=t.useConsultStore(),p=e.ref({}),d=e.ref({}),m=e.ref(""),v=e.ref();async function f(){const{code:t,data:o,message:i}=await n.createOrderApi({type:a,illnessType:l,depId:c,patientId:r,...u});if(1e4!==t)return e.index.utils.toast(i);m.value=o.id,v.value.open()}async function y(){const{confirm:t}=await e.index.showModal({title:"关闭支付",content:"取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",cancelText:"仍要关闭",cancelColor:"#848484",confirmText:"继续支付",confirmColor:"#16C2A3"});t||v.value.close()}async function g({index:t}){if(0===t)return e.index.utils.toast("暂不支持微信支付!");const{code:n,data:o,message:s}=await i.paymentApi({orderId:m.value,paymentMethod:t,payCallback:"http://localhost:5173/#/subpkg_consult/room/index"});if(1e4!==n)return e.index.utils.toast(s);window.location.href=o.payUrl}return e.ref(),async function(){const{code:t,data:o,message:i}=await n.preOrderApi(a,{illnessType:l});if(1e4!==t)return e.index.utils.toast(i);p.value=o}(),async function(){const{code:t,data:n,message:i}=await o.patientDetailApi(r);if(1e4!==t)return e.index.utils.toast(i);d.value=n}(),(t,n)=>({a:e.p({title:"极速问诊",note:"自动分配医生",thumb:"/static/uploads/doctor-avatar.jpg","thumb-size":"lg"}),b:e.p({title:"优惠券","show-arrow":!0,"right-text":`-¥${p.value.couponDeduction}`}),c:e.t(p.value.pointDeduction),d:e.p({title:"积分抵扣"}),e:e.t(p.value.actualPayment),f:e.p({title:"实付款"}),g:e.p({border:!1}),h:e.p({"title-font-size":"32rpx","title-color":"#121826",padding:"30rpx",title:`图文问诊 ${p.value.payment}元`}),i:e.t(d.value.name),j:e.t(d.value.genderValue),k:e.t(d.value.age),l:e.p({title:"患者信息"}),m:e.p({border:!0,title:"病情描述",note:e.unref(u).illnessDesc}),n:e.p({border:!1}),o:e.p({"title-font-size":"32rpx","title-color":"#121826",padding:"30rpx",title:"患者资料"}),p:e.t(p.value.actualPayment),q:e.o(f),r:e.sr(v,"1ab5412b-11",{k:"paymentRef"}),s:e.o(y),t:e.o(g),v:e.p({amount:p.value.actualPayment,"order-id":m.value})})}};wx.createPage(s);