import{a5 as e,l as t,o,a as i,w as n,A as a,f as l,L as s,n as r,g as c,t as u,j as h,i as d}from"./index-0333b418.js";import{_ as m}from"./uni-icons.306a74c1.js";import{r as p}from"./uni-app.es.6fb9258e.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const b=y({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),computed:{isShowGetMore(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose(){return!(!0!==this.showClose&&"true"!==this.showClose||!1!==this.showGetMore&&"false"!==this.showGetMore)}},mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let t=[],o=new Promise(((t,o)=>{e().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.textWidth=e[0].width,t()}))})),i=new Promise(((t,o)=>{e().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((e=>{this.boxWidth=e[0].width,t()}))}));t.push(o),t.push(i),Promise.all(t).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(e,y,b,f,w,_){const S=p(t("uni-icons"),m),g=h,x=d;return w.show?(o(),i(x,{key:0,class:"uni-noticebar",style:r({backgroundColor:b.backgroundColor}),onClick:_.onClick},{default:n((()=>[!0===b.showIcon||"true"===b.showIcon?(o(),i(S,{key:0,class:"uni-noticebar-icon",type:"sound",color:b.color,size:1.5*b.fontSize},null,8,["color","size"])):a("",!0),l(x,{ref:"textBox",class:s(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":b.scrollable,"uni-noticebar__content-wrapper--single":!b.scrollable&&(b.single||b.moreText)}]),style:r({height:b.scrollable?1.5*b.fontSize+"px":"auto"})},{default:n((()=>[l(x,{id:w.elIdBox,class:s(["uni-noticebar__content",{"uni-noticebar__content--scrollable":b.scrollable,"uni-noticebar__content--single":!b.scrollable&&(b.single||b.moreText)}])},{default:n((()=>[l(g,{id:w.elId,ref:"animationEle",class:s(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":b.scrollable,"uni-noticebar__content-text--single":!b.scrollable&&(b.single||b.showGetMore)}]),style:r({color:b.color,fontSize:b.fontSize+"px",lineHeight:1.5*b.fontSize+"px",width:w.wrapWidth+"px",animationDuration:w.animationDuration,"-webkit-animationDuration":w.animationDuration,animationPlayState:w.webviewHide?"paused":w.animationPlayState,"-webkit-animationPlayState":w.webviewHide?"paused":w.animationPlayState,animationDelay:w.animationDelay,"-webkit-animationDelay":w.animationDelay})},{default:n((()=>[c(u(b.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class","style"]),_.isShowGetMore?(o(),i(x,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:_.clickMore},{default:n((()=>[b.moreText.length>0?(o(),i(g,{key:0,style:r({color:b.moreColor,fontSize:b.fontSize+"px"})},{default:n((()=>[c(u(b.moreText),1)])),_:1},8,["style"])):(o(),i(S,{key:1,type:"right",color:b.moreColor,size:1.1*b.fontSize},null,8,["color","size"]))])),_:1},8,["onClick"])):a("",!0),_.isShowClose?(o(),i(x,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:n((()=>[l(S,{type:"closeempty",color:b.color,size:1.1*b.fontSize,onClick:_.close},null,8,["color","size","onClick"])])),_:1})):a("",!0)])),_:1},8,["style","onClick"])):a("",!0)}],["__scopeId","data-v-69ae3424"]]);export{b as _};
