"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[90336],{11134:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const c={},i=void 0,a={id:"JavaScript/defer\u548casync\u7684\u533a\u522b",title:"defer\u548casync\u7684\u533a\u522b",description:"defer \u548c async \u662f script \u6807\u7b7e\u7684\u4e24\u4e2a\u5c5e\u6027\uff0c\u7528\u4e8e\u5728\u4e0d\u963b\u585e\u9875\u9762\u6587\u6863\u89e3\u6790\u7684\u524d\u63d0\u4e0b\uff0c\u63a7\u5236\u811a\u672c\u7684\u4e0b\u8f7d\u548c\u6267\u884c\u3002",source:"@site/docs/JavaScript/defer\u548casync\u7684\u533a\u522b.md",sourceDirName:"JavaScript",slug:"/JavaScript/defer\u548casync\u7684\u533a\u522b",permalink:"/docs/JavaScript/defer\u548casync\u7684\u533a\u522b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"JavaScript",permalink:"/docs/JavaScript/"},next:{title:"href\u548csrc\u7684\u533a\u522b",permalink:"/docs/JavaScript/href\u548csrc\u7684\u533a\u522b"}},o={},d=[];function l(n){const e={br:"br",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["defer \u548c async \u662f script \u6807\u7b7e\u7684\u4e24\u4e2a\u5c5e\u6027\uff0c",(0,s.jsx)(e.strong,{children:"\u7528\u4e8e\u5728\u4e0d\u963b\u585e\u9875\u9762\u6587\u6863\u89e3\u6790\u7684\u524d\u63d0\u4e0b\uff0c\u63a7\u5236\u811a\u672c\u7684\u4e0b\u8f7d\u548c\u6267\u884c"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4ecb\u7ecd\u4ed6\u4eec\u4e4b\u524d\uff0c\u6211\u4eec\u6709\u5fc5\u8981\u5148\u4e86\u89e3\u4e00\u4e0b\u9875\u9762\u7684\u52a0\u8f7d\u548c\u6e32\u67d3\u8fc7\u7a0b\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u6d4f\u89c8\u5668\u901a\u8fc7 HTTP \u534f\u8bae\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u83b7\u53d6 HMTL \u6587\u6863\u5e76\u5f00\u59cb\u4ece\u4e0a\u5230\u4e0b\u89e3\u6790\uff0c\u6784\u5efa DOM\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u6784\u5efa DOM \u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u9047\u5230\u5916\u8054\u7684\u6837\u5f0f\u58f0\u660e\u548c\u811a\u672c\u58f0\u660e\uff0c\u5219\u6682\u505c\u6587\u6863\u89e3\u6790\uff0c\u521b\u5efa\u65b0\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u5e76\u5f00\u59cb\u4e0b\u8f7d\u6837\u5f0f\u6587\u4ef6\u548c\u811a\u672c\u6587\u4ef6\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u6837\u5f0f\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u6784\u5efa CSSDOM\uff1b\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u89e3\u91ca\u5e76\u6267\u884c\uff0c\u7136\u540e\u7ee7\u7eed\u89e3\u6790\u6587\u6863\u6784\u5efa DOM"}),"\n",(0,s.jsx)(e.li,{children:"\u5b8c\u6210\u6587\u6863\u89e3\u6790\u540e\uff0c\u5c06 DOM \u548c CSSDOM \u8fdb\u884c\u5173\u8054\u548c\u6620\u5c04\uff0c\u6700\u540e\u5c06\u89c6\u56fe\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u7a97\u53e3"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u811a\u672c\u6587\u4ef6\u7684\u4e0b\u8f7d\u548c\u6267\u884c\u662f\u4e0e\u6587\u6863\u89e3\u6790\u540c\u6b65\u8fdb\u884c\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4f1a\u963b\u585e\u6587\u6863\u7684\u89e3\u6790\uff0c\u5982\u679c\u63a7\u5236\u5f97\u4e0d\u597d\uff0c\u5728\u7528\u6237\u4f53\u9a8c\u4e0a\u5c31\u4f1a\u9020\u6210\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5f71\u54cd\u3002",(0,s.jsx)(e.br,{}),"\n","\u6240\u4ee5\u6211\u4eec\u9700\u8981\u6e05\u695a\u7684\u4e86\u89e3\u548c\u4f7f\u7528 defer \u548c async \u6765\u63a7\u5236\u5916\u90e8\u811a\u672c\u7684\u6267\u884c\u3002",(0,s.jsx)(e.br,{}),"\n","\u5728\u5f00\u53d1\u4e2d\u6211\u4eec\u53ef\u4ee5\u5728 script \u4e2d\u58f0\u660e\u4e24\u4e2a\u4e0d\u592a\u5e38\u89c1\u7684\u5c5e\u6027\uff1adefer \u548c async\uff0c\u4e0b\u9762\u5206\u522b\u89e3\u91ca\u4e86\u4ed6\u4eec\u7684\u7528\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(e.p,{children:["defer\uff1a\u7528\u4e8e",(0,s.jsx)(e.strong,{children:"\u5f00\u542f\u65b0\u7684\u7ebf\u7a0b\u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\uff0c\u5e76\u4f7f\u811a\u672c\u5728\u6587\u6863\u89e3\u6790\u5b8c\u6210\u540e\u6267\u884c"}),"\u3002",(0,s.jsx)(e.br,{}),"\n","async\uff1aHTML5 \u65b0\u589e\u5c5e\u6027\uff0c\u7528\u4e8e",(0,s.jsx)(e.strong,{children:"\u5f02\u6b65\u4e0b\u8f7d\u811a\u672c\u6587\u4ef6\uff0c\u4e0b\u8f7d\u5b8c\u6bd5\u7acb\u5373\u89e3\u91ca\u6267\u884c\u4ee3\u7801"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["defer \u5c5e\u6027\u544a\u8bc9\u6d4f\u89c8\u5668",(0,s.jsx)(e.strong,{children:"\u7acb\u5373\u4e0b\u8f7d\u811a\u672c\uff0c\u4f46\u5ef6\u8fdf\u6267\u884c\uff0c\u7b49\u5230\u6587\u6863\u52a0\u8f7d\u5b8c\u6210\u540e\u518d\u6309\u7167\u5b83\u4eec\u5728\u9875\u9762\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c"}),"\u3002\u8fd9\u610f\u5473\u7740\u811a\u672c\u4e0d\u4f1a\u963b\u6b62\u6587\u6863\u7684\u89e3\u6790\u548c\u6e32\u67d3\uff0c\u5e76\u4e14\u5b83\u4eec\u4e5f\u4e0d\u4f1a\u963b\u6b62\u5176\u4ed6\u811a\u672c\u7684\u6267\u884c\u3002\u5982\u679c\u591a\u4e2a\u811a\u672c\u90fd\u4f7f\u7528 defer \u5c5e\u6027\uff0c\u5219\u5b83\u4eec\u5c06\u6309\u7167\u5b83\u4eec\u5728\u9875\u9762\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["async \u5c5e\u6027\u544a\u8bc9\u6d4f\u89c8\u5668",(0,s.jsx)(e.strong,{children:"\u7acb\u5373\u4e0b\u8f7d\u811a\u672c"}),"\uff0c\u4f46\u5b83\u4eec\u4e0d\u4e00\u5b9a\u6309\u7167\u5b83\u4eec\u5728\u9875\u9762\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u6267\u884c\u3002\u5b83\u4eec\u5c06\u5728",(0,s.jsx)(e.strong,{children:"\u4e0b\u8f7d\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c"}),"\u3002\u8fd9\u610f\u5473\u7740\u811a\u672c\u4e0d\u4f1a\u963b\u6b62\u6587\u6863\u7684\u89e3\u6790\u548c\u6e32\u67d3\uff0c\u4f46\u53ef\u80fd\u4f1a\u963b\u6b62\u5176\u4ed6\u811a\u672c\u7684\u6267\u884c\u3002\u5982\u679c\u591a\u4e2a\u811a\u672c\u90fd\u4f7f\u7528 async \u5c5e\u6027\uff0c\u5219\u5b83\u4eec\u5c06\u6309\u7167\u5b83\u4eec\u4e0b\u8f7d\u5b8c\u6210\u7684\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>a});var s=r(96540);const t={},c=s.createContext(t);function i(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);