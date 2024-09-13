"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[70772],{7180:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(74848),c=n(28453);const r={},i=void 0,o={id:"JavaScript/\u5176\u5b83/fetch\u548caxios\u533a\u522b",title:"fetch\u548caxios\u533a\u522b",description:"fetch() \u2014\u2014 h5 \u81ea\u5e26\u7684\uff0c\u53ea\u80fd\u7528\u5728\u6d4f\u89c8\u5668 4kb",source:"@site/docs/JavaScript/\u5176\u5b83/fetch\u548caxios\u533a\u522b.md",sourceDirName:"JavaScript/\u5176\u5b83",slug:"/JavaScript/\u5176\u5b83/fetch\u548caxios\u533a\u522b",permalink:"/docs/JavaScript/\u5176\u5b83/fetch\u548caxios\u533a\u522b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"fetch",permalink:"/docs/JavaScript/\u5176\u5b83/fetch"},next:{title:"js\u5ef6\u8fdf\u52a0\u8f7d",permalink:"/docs/JavaScript/\u5176\u5b83/js\u5ef6\u8fdf\u52a0\u8f7d"}},a={},h=[];function l(t){const e={br:"br",li:"li",ol:"ol",p:"p",...(0,c.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["fetch() \u2014\u2014 h5 \u81ea\u5e26\u7684\uff0c\u53ea\u80fd\u7528\u5728\u6d4f\u89c8\u5668 4kb",(0,s.jsx)(e.br,{}),"\n","axios \u2014\u2014 \u662f\u7b2c\u4e09\u65b9\u7684\u63d2\u4ef6\uff0c\u5305\u4f53\u79ef\u5927\u4e00\u70b9\uff0c14kb"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"axios \u771f\u6b63\u597d\u7684\u4e00\u70b9\u662f\u5728\u4e8e\u5c01\u88c5\u65b9\u4fbf"}),"\n",(0,s.jsx)(e.li,{children:"fetch \u5c01\u88c5\u7684\u65f6\u5019\u53ea\u80fd\u5728\u540e\u9762\u62fc\u63a5\uff0cfetch \u5c01\u88c5\u7684\u65f6\u5019\u8981\u5148\u628a\u5bf9\u8c61\u88c5\u6362\u6210\u5b57\u7b26\u4e32\u8fdb\u884c\u62fc\u63a5"}),"\n",(0,s.jsx)(e.li,{children:"axios \u53ef\u4ee5\u76f4\u63a5\u4f20\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\uff0c\u4e0d\u7528\u8f6c\u6362"}),"\n",(0,s.jsx)(e.li,{children:"axios \u6bd4 fetch \u5c11\u4e00\u4e00\u6b65\u64cd\u4f5c\uff0cfetch \u9700\u8981\u4e24\u4e2a.then()\uff0c\u7b2c\u4e00\u4e2a.then()\u91cc\u9762\u9700\u8981\u8f6c json\uff0c\u7b2c\u4e8c\u4e2a.then()\u91cc\u9762\u53ef\u4ee5\u62ff\u5230\u8f6c\u6362\u683c\u5f0f\u540e\u7684\u6570\u636e\uff0caxios \u5c31\u4e0d\u9700\u8981\u4e86\uff0c\u53ea\u9700\u8981\u4e00\u4e2a.then()"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["promise \u7684.then()\u4e2d\uff0c\u524d\u4e00\u4e2a.then()\u7684\u8fd4\u56de\u503c\u4f1a\u4f5c\u4e3a\u4e0b\u4e00\u4e2a .then()\u7684\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570",(0,s.jsx)(e.br,{}),"\n","\u5982\u679c\u6570\u636e\u8bf7\u6c42\u662f\u5728\u5916\u9762\u5c01\u88c5\u7684\uff0c\u7ec4\u4ef6\u4e2d useEffect \u8981\u4f7f\u7528\uff0c\u9700\u8981\u5199\u6210\u81ea\u6267\u884c\u51fd\u6570\uff0c\u56e0\u4e3a\u5c01\u88c5\u7684\u8bf7\u6c42\u81ea\u5e26\u4e00\u4e2a return\uff0c\u76f8\u5f53\u4e8e\u5378\u8f7d\u9636\u6bb5\u4e86",(0,s.jsx)(e.br,{}),"\n",".catch()\u91cc\u9762\u53ef\u4ee5\u505a\u8f7b\u63d0\u793a\uff08\u914d\u5408 UI \u7ec4\u4ef6\u5e93\uff09",(0,s.jsx)(e.br,{}),"\n","\u5c01\u88c5\u91cc\u9762\u7684.catch()\u7684\u7ed3\u679c\u4e5f\u4f1a\u5230\u7ec4\u4ef6\u4e2d\u8c03\u7528\u7684\u90a3\u8fb9\u53bb",(0,s.jsx)(e.br,{}),"\n","\u539f\u56e0\uff1apromise.then.catch,\u8fdb\u884c\u4e2d\u5230\u6210\u529f\u6216\u8005\u5931\u8d25\uff0c\u4e0d\u7ba1\u662f\u6210\u529f\u6216\u8005\u5931\u8d25\uff0c\u90fd\u4f1a\u628a\u7ed3\u679c\u8d4b\u503c\u7ed9 res"]})]})}function f(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>o});var s=n(96540);const c={},r=s.createContext(c);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);