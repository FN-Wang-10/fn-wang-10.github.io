"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[15789],{74685:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453);const i={},o=void 0,c={id:"Es6/\u9762\u5411\u5bf9\u8c61\u548cclass",title:"\u9762\u5411\u5bf9\u8c61\u548cclass",description:"\u524d\u8a00",source:"@site/docs/Es6/\u9762\u5411\u5bf9\u8c61\u548cclass.md",sourceDirName:"Es6",slug:"/Es6/\u9762\u5411\u5bf9\u8c61\u548cclass",permalink:"/docs/Es6/\u9762\u5411\u5bf9\u8c61\u548cclass",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"es6Sidebar",previous:{title:"\u7bad\u5934\u51fd\u6570",permalink:"/docs/Es6/\u7bad\u5934\u51fd\u6570"}},l={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"1.\u6784\u9020\u51fd\u6570+\u539f\u578b",id:"1\u6784\u9020\u51fd\u6570\u539f\u578b",level:2},{value:"prototype",id:"prototype",level:3},{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe",level:3}];function a(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(e.p,{children:"\u9762\u5411\u5bf9\u8c61\u7684\u4e8c\u79cd\u5199\u6cd5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u6784\u9020\u51fd\u6570+\u539f\u578b(\u4f5c\u8005\u901a\u8fc7\u6b64\u65b9\u5f0f\u5b9e\u73b0\u7c7b\u548c\u5bf9\u8c61\u7684)"}),"\n",(0,r.jsx)(e.li,{children:"class \u5199\u6cd5 - \u8bed\u6cd5\u7cd6 - \u66f4\u9002\u5408\u5f00\u53d1"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"1\u6784\u9020\u51fd\u6570\u539f\u578b",children:"1.\u6784\u9020\u51fd\u6570+\u539f\u578b"}),"\n",(0,r.jsx)(e.p,{children:"(\u4f5c\u8005\u901a\u8fc7\u6b64\u65b9\u5f0f\u5b9e\u73b0\u7c7b\u548c\u5bf9\u8c61\u7684)"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u6784\u9020\u51fd\u6570+\u539f\u578b"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"function Abc() {\r\n  //\u79c1\u6709\u7684\r\n  this.a = 1; //this \u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\r\n  this.b = 2;\r\n}\r\nAbc.prototype.init = function () {\r\n  //\u516c\u6709\r\n  return this.a; //this \u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\r\n};\r\nnew Abc().init();\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"class \u5199\u6cd5 - \u8bed\u6cd5\u7cd6 - \u66f4\u9002\u5408\u5f00\u53d1"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:"class Abc {\r\n  constructor() {\r\n    // \u6784\u9020\u51fd\u6570\r\n    this.a = 1; // this \u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\r\n    this.b = 2;\r\n  }\r\n  init() {\r\n    //\u65b9\u6cd5\uff0c\u7c7b\u4f3c\u539f\u578b\r\n  }\r\n}\r\nnew Abc().init();\n"})}),"\n",(0,r.jsx)(e.h3,{id:"prototype",children:"prototype"}),"\n",(0,r.jsx)(e.p,{children:"ES \u89c4\u5b9a\uff0c\u6bcf\u4e00\u4e2a\u51fd\u6570\u90fd\u6709\u4e00\u4e2a prototype\uff08\u6784\u9020\u5668\u7684\u539f\u578b\uff09\uff0c\u6307\u5411\u53e6\u4e00\u4e2a\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(e.p,{children:"prototype \u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u4f1a\u88ab\u6784\u9020\u51fd\u6570\u7684\u5b9e\u4f8b\u7ee7\u627f,\u6211\u4eec\u53ef\u4ee5\u628a\u90a3\u4e9b\u4e0d\u53d8(\u516c\u7528)\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u76f4\u63a5\u5b9a\u4e49\u5728 prototype \u5bf9\u8c61\u5c5e\u6027\u4e0a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"prototype \u91cc\u9762\u7684 this \u4f9d\u7136\u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\u3002 \u6784\u9020\u51fd\u6570\u91cc\u9762 this \u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u539f\u578b\u94fe",children:"\u539f\u578b\u94fe"}),"\n",(0,r.jsxs)(e.p,{children:["\u6982\u5ff5\uff1a\u5b9e\u4f8b\u5bf9\u8c61\u4e0e\u539f\u578b(prototype)\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u53eb\u505a\u539f\u578b\u94fe\uff0c\u539f\u578b\u94fe\u4f9d\u9760",(0,r.jsx)(e.code,{children:"**proto**"}),"(\u65b0\u7248\u6d4f\u89c8\u5668\u4e2d\u91c7\u7528",(0,r.jsx)(e.code,{children:"[[Prototype]]"}),")\u8fdb\u884c\u8fde\u63a5\u3002\r\n\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a",(0,r.jsx)(e.code,{children:"**proto**"}),"\uff08\u5185\u90e8\u539f\u578b\uff09\u5c5e\u6027,\u539f\u578b\u94fe\u4e0a\u7684\u5bf9\u8c61\u6b63\u662f\u4f9d\u9760\u8fd9\u4e2a\u5c5e\u6027\u8fde\u7ed3\u5728\u4e00\u8d77."]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);