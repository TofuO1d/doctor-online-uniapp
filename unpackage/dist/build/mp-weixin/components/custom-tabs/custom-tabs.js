"use strict";const e=require("../../common/vendor.js"),t={__name:"custom-tabs",props:{list:{type:Array,default:[]}},emits:["click"],setup(t,{emit:n}){const l=t,c=e.ref(0),r=e.ref([]);e.onMounted((()=>{const t=e.index.createSelectorQuery().in(e.getCurrentInstance());t.selectAll(".custom-tabs, .tabbar-text").boundingClientRect((([e,...t])=>{r.value=t.map((({width:t,left:n})=>({left:n-e.left,width:t})))})),t.exec()}));const a=e.computed((()=>{if(0===r.value.length)return;const{width:e,left:t}=r.value[c.value];return t+(e-20)/2}));return(t,r)=>({a:e.f(l.list,((t,l,r)=>({a:e.t(t.label),b:t.label,c:e.o((e=>function(e,t){c.value=e,n("click",{index:e,...t})}(l,t)),t.label),d:c.value===l?1:""}))),b:e.unref(a)+"px"})}};wx.createComponent(t);