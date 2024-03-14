import{q as e,o as t,a,w as s,f as l,g as i,t as u,d as r,F as o,A as n,e as d,j as c,i as f,l as m,m as _,k as p,h as v}from"./index-0333b418.js";import{_ as g}from"./uni-icons.306a74c1.js";import{r as x}from"./uni-app.es.6fb9258e.js";import{a as h,b as y}from"./uni-list.cc31cbe4.js";import{_ as b}from"./uni-notice-bar.6a9569e4.js";import{_ as j}from"./scroll-page.1487e938.js";import{o as I}from"./medicine.0c3b3592.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";import"./http.dd4042ae.js";const w=k({__name:"index",props:{id:String},setup(k){const w=k,q=e({}),C=["微信支付","支付宝支付"],D=e({10:"待支付",11:"待发货",12:"待收货",13:"已完成",14:"已取消"});return async function(){const{code:e,data:t,message:a}=await I(w.id);if(1e4!==e)return uni.utils.toast(a);q.value=t}(),(e,I)=>{const k=c,w=f,F=x(m("uni-icons"),g),z=_,A=v,J=x(m("uni-list-item"),h),K=x(m("uni-list"),y),M=x(m("uni-notice-bar"),b),N=p,P=x(m("scroll-page"),j);return t(),a(P,{"background-color":"#f6f6f6"},{default:s((()=>[l(w,{class:"medicine-page"},{default:s((()=>[l(w,{class:"page-header"},{default:s((()=>[l(w,{class:"order-status"},{default:s((()=>[l(k,{class:"label"},{default:s((()=>[i("药品订单 "+u(q.value.payment)+"元",1)])),_:1}),l(k,{class:"status"},{default:s((()=>[i(u(D.value[q.value.status]),1)])),_:1})])),_:1}),l(w,{class:"order-shippment"},{default:s((()=>[11===q.value.status?(t(),r(o,{key:0},[l(w,{class:"region"},{default:s((()=>[l(k,{class:"iconfont icon-location"}),i(" "+u(q.value.addressInfo.province)+" "+u(q.value.addressInfo.city)+" "+u(q.value.addressInfo.county),1)])),_:1}),l(w,{class:"detail"},{default:s((()=>[i(u(q.value.addressInfo.addressDetail),1)])),_:1}),l(w,{class:"receiver"},{default:s((()=>[i(u(q.value.addressInfo.receiver)+" "+u(q.value.addressInfo.mobile),1)])),_:1})],64)):n("",!0),12===q.value.status?(t(),a(z,{key:1,"hover-class":"none",url:`/subpkg_medicine/timeline/index?id=${q.value.id}`},{default:s((()=>[l(w,{class:"marker"},{default:s((()=>[i(u(q.value.expressInfo.content),1)])),_:1}),l(w,{class:"datetime"},{default:s((()=>[i(u(q.value.expressInfo.time),1)])),_:1}),l(w,{class:"arrow"},{default:s((()=>[l(F,{size:"18",color:"#C3C3C5",type:"forward"})])),_:1})])),_:1},8,["url"])):n("",!0)])),_:1})])),_:1}),l(w,{class:"order-shop"},{default:s((()=>[i(" 优医药房 "),l(k,{class:"alt"},{default:s((()=>[i("优医质保 假一赔十")])),_:1})])),_:1}),l(w,{class:"medicine-list"},{default:s((()=>[(t(!0),r(o,null,d(q.value.medicines,(e=>(t(),a(w,{key:e.id,class:"medicine-list-item"},{default:s((()=>[l(A,{class:"medicine-cover",src:e.avatar,mode:"aspectFill"},null,8,["src"]),l(w,{class:"medicine-info"},{default:s((()=>[l(k,{class:"name"},{default:s((()=>[i(u(e.name),1)])),_:2},1024),l(k,{class:"unit symbol"},{default:s((()=>[i("24片")])),_:1}),l(k,{class:"price"},{default:s((()=>[i("¥"+u(e.amount),1)])),_:2},1024)])),_:2},1024),l(w,{class:"quantity"},{default:s((()=>[i("x"+u(e.quantity),1)])),_:2},1024),l(w,{class:"guide"},{default:s((()=>[i("用法用量："+u(e.usageDosag),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),l(w,{class:"order-info"},{default:s((()=>[l(K,{border:!1},{default:s((()=>[l(J,{title:"药品金额","right-text":"¥"+q.value.payment},null,8,["right-text"]),l(J,{title:"运费","right-text":"¥"+q.value.expressFee},null,8,["right-text"]),l(J,{title:"优惠券","show-arrow":"","right-text":"-¥"+q.value.couponDeduction},null,8,["right-text"]),l(J,{title:"实付款","right-text":"¥"+q.value.actualPayment},null,8,["right-text"]),l(J,{title:"订单编号","right-text":q.value.orderNo},null,8,["right-text"]),l(J,{title:"创建时间","right-text":q.value.createTime},null,8,["right-text"]),l(J,{title:"支付方式","right-text":C[q.value.paymentMethod]},null,8,["right-text"])])),_:1})])),_:1}),l(w,{class:"notice-bar"},{default:s((()=>[l(M,{text:"请在 00:14:59 内完成支付，超时订单将取消"})])),_:1}),l(w,{class:"toolbar"},{default:s((()=>[(t(),a(w,{key:1,class:"buttons"},{default:s((()=>[l(w,{class:"delete-botton"},{default:s((()=>[l(F,{size:"24",color:"#848484",type:"trash"}),l(k,null,{default:s((()=>[i("删除订单")])),_:1})])),_:1}),l(N,{class:"uni-button"},{default:s((()=>[i("再次购买")])),_:1})])),_:1}))])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-6af3e974"]]);export{w as default};