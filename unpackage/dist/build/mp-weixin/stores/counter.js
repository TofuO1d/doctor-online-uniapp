"use strict";const e=require("../common/vendor.js"),t=e.defineStore("counter",(()=>{const t=e.ref(0),n=e.computed((()=>2*t.value));return{count:t,double:n,increment:function(){t.value++},decrement:function(){t.value--}}}),{persist:{paths:["count"]}});exports.useCounterStore=t;