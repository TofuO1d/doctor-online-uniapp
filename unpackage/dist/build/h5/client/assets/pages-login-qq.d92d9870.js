import{q as e,K as a,o as s,a as l,w as o,A as t,i as u,f as n,g as i,t as r,h as c,j as d,l as m,k as f}from"./index-0333b418.js";import{_ as p}from"./uni-easyinput.f5dc7f12.js";import{r as _}from"./uni-app.es.6fb9258e.js";import{_ as v,a as b}from"./uni-forms.a2627eed.js";import{_ as k}from"./uni-icons.306a74c1.js";import{Q as y,v as h,b as C}from"./user.b6661fd7.js";import{u as g}from"./http.dd4042ae.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const q=j({__name:"qq",setup(j){const q=g(),x=e({}),V=e({mobile:"13212345678",code:""}),w=e(!0);async function I(){const{code:e,message:a}=await h({mobile:V.value.mobile,type:"bindMobile"});if(1e4!==e)return uni.utils.toast(a);uni.utils.toast("验证码已发送，请查收!")}async function Q(){const{code:e,data:a,message:s}=await C({...V.value,openId:x.value.openId});if(1e4!==e)return uni.utils.toast(s);q.token=a.token,q.userId=a.id}return a.callFunction({name:"qq-openid",data:{access_token:location.hash.slice(14,46)},async success({result:e}){x.value=e;const{code:a,data:s,message:l}=await y({source:"qq",...x.value});if(10001===a)return w.value=!1},fail(e){console.log(e)}}),(e,a)=>{const y=c,h=d,C=u,g=_(m("uni-easyinput"),p),j=_(m("uni-forms-item"),v),q=_(m("uni-icons"),k),z=f,A=_(m("uni-forms"),b);return w.value?t("",!0):(s(),l(C,{key:0,class:"user-login"},{default:o((()=>[n(C,{class:"welcome"},{default:o((()=>[n(y,{class:"avatar",src:x.value.avatar},null,8,["src"]),n(h,{class:"nickname"},{default:o((()=>[i(" Hi，"+r(x.value.nickname)+" 欢迎来优医咨询，完成绑定后可以QQ账号一键登录哦~ ",1)])),_:1})])),_:1}),n(A,{class:"login-form",ref:"form"},{default:o((()=>[n(j,{name:"mobile"},{default:o((()=>[n(g,{modelValue:V.value.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value.mobile=e),"input-border":!1,clearable:!1,placeholder:"请输入手机号","placeholder-style":"color: #C3C3C5"},null,8,["modelValue"])])),_:1}),n(j,{name:"code"},{default:o((()=>[n(g,{modelValue:V.value.code,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value.code=e),"input-border":!1,clearable:!1,placeholder:"请输入验证码","placeholder-style":"color: #C3C3C5"},null,8,["modelValue"]),n(h,{onClick:I,class:"text-button"},{default:o((()=>[i("获取验证码")])),_:1})])),_:1}),n(C,{class:"agreement"},{default:o((()=>[(s(),l(q,{key:0,size:"18",color:"#16C2A3",type:"checkbox-filled"})),i(" 我已同意 "),n(h,{class:"link"},{default:o((()=>[i("用户协议")])),_:1}),i(" 及 "),n(h,{class:"link"},{default:o((()=>[i("隐私协议")])),_:1})])),_:1}),n(z,{onClick:Q,class:"uni-button"},{default:o((()=>[i(" 绑定手机号 ")])),_:1})])),_:1},512)])),_:1}))}}},[["__scopeId","data-v-f4d0897f"]]);export{q as default};