import{p as e,o as r,a as o,w as s,f as t,r as l,n as a,u as d,i as f,S as n}from"./index-0333b418.js";import{_ as i}from"./_plugin-vue_export-helper.1b428a4d.js";const g=i({__name:"scroll-page",props:{borderStyle:{type:[String,Boolean],default:!1},refresherEnabled:{type:Boolean,default:!1},refresherTriggered:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fff"}},emits:["refresherrefresh","scrolltolower"],setup(i){const g=i,{windowHeight:h}=e();return(e,i)=>{const p=f,u=n;return r(),o(u,{style:a({height:d(h)+"px",boxSizing:"border-box",borderBottom:g.borderStyle,backgroundColor:g.backgroundColor}),"scroll-y":"",refresherEnabled:g.refresherEnabled,refresherTriggered:g.refresherTriggered,onRefresherrefresh:i[0]||(i[0]=r=>e.$emit("refresherrefresh",r)),onScrolltolower:i[1]||(i[1]=r=>e.$emit("scrolltolower",r))},{default:s((()=>[t(p,{class:"scroll-page-content"},{default:s((()=>[l(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style","refresherEnabled","refresherTriggered"])}}},[["__scopeId","data-v-f4d4274a"]]);export{g as _};
