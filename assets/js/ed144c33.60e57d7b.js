"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[59180],{74629:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(85893),s=n(11151);const o={},c=void 0,i={id:"Es6/promise/race\u65b9\u6cd5",title:"race\u65b9\u6cd5",description:"Promse.race \u7279\u6027\u5c31\u662f\u8d5b\u8dd1\u7684\u610f\u601d\uff0c\u610f\u601d\u5c31\u662f\u8bf4\uff0cPromise.race([p1, p2, p3])\u91cc\u9762\u54ea\u4e2a\u7ed3\u679c\u83b7\u5f97\u7684\u5feb\uff0c\u5c31\u8fd4\u56de\u90a3\u4e2a\u7ed3\u679c\uff0c\u4e0d\u7ba1\u7ed3\u679c\u672c\u8eab\u662f\u6210\u529f\u72b6\u6001\u8fd8\u662f\u5931\u8d25\u72b6\u6001\u3002",source:"@site/docs/Es6/promise/race\u65b9\u6cd5.md",sourceDirName:"Es6/promise",slug:"/Es6/promise/race\u65b9\u6cd5",permalink:"/docs/Es6/promise/race\u65b9\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"es6Sidebar",previous:{title:"promsie",permalink:"/docs/Es6/promise/promsie"},next:{title:"try....catch...finally \u5bb9\u9519\u5904\u7406\uff1a\u53ef\u4ee5\u505a\u517c\u5bb9\u5904\u7406",permalink:"/docs/Es6/promise/try....catch...finally \u5bb9\u9519\u5904\u7406\uff1a\u53ef\u4ee5\u505a\u517c\u5bb9\u5904\u7406"}},a={},p=[];function l(e){const r={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Promse.race \u7279\u6027\u5c31\u662f\u8d5b\u8dd1\u7684\u610f\u601d\uff0c\u610f\u601d\u5c31\u662f\u8bf4\uff0cPromise.race([p1, p2, p3])\u91cc\u9762\u54ea\u4e2a\u7ed3\u679c\u83b7\u5f97\u7684\u5feb\uff0c\u5c31\u8fd4\u56de\u90a3\u4e2a\u7ed3\u679c\uff0c\u4e0d\u7ba1\u7ed3\u679c\u672c\u8eab\u662f\u6210\u529f\u72b6\u6001\u8fd8\u662f\u5931\u8d25\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'let p1 = new Promise((resolve, reject) => {\r\n  setTimeout(() => {\r\n    resolve("success");\r\n  }, 1000);\r\n});\r\n\r\nlet p2 = new Promise((resolve, reject) => {\r\n  setTimeout(() => {\r\n    reject("failed");\r\n  }, 500);\r\n});\r\n\r\nPromise.race([p1, p2])\r\n  .then((result) => {\r\n    console.log(result);\r\n  })\r\n  .catch((error) => {\r\n    console.log(error); // \u6253\u5f00\u7684\u662f \'failed\'\r\n  });\n'})})]})}function m(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(67294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);