"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[39572],{89851:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=r(74848),s=r(28453);const t={},i=void 0,l={id:"JavaScript/\u573a\u666f/\u5982\u4f55\u5224\u8bfb\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49",title:"\u5982\u4f55\u5224\u8bfb\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49",description:"1. \u4f7f\u7528 === \u64cd\u4f5c\u7b26",source:"@site/docs/JavaScript/\u573a\u666f/\u5982\u4f55\u5224\u8bfb\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49.md",sourceDirName:"JavaScript/\u573a\u666f",slug:"/JavaScript/\u573a\u666f/\u5982\u4f55\u5224\u8bfb\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49",permalink:"/docs/JavaScript/\u573a\u666f/\u5982\u4f55\u5224\u8bfb\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u53ef\u89c6\u533a\u57df\u4e2d",permalink:"/docs/JavaScript/\u573a\u666f/\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u53ef\u89c6\u533a\u57df\u4e2d"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u4e0a\u62c9\u52a0\u8f7d\uff0c\u4e0b\u62c9\u5237\u65b0",permalink:"/docs/JavaScript/\u573a\u666f/\u5982\u4f55\u5b9e\u73b0\u4e0a\u62c9\u52a0\u8f7d\uff0c\u4e0b\u62c9\u5237\u65b0"}},c={},a=[{value:"1. \u4f7f\u7528 === \u64cd\u4f5c\u7b26",id:"1-\u4f7f\u7528--\u64cd\u4f5c\u7b26",level:2},{value:"2. \u4f7f\u7528 JSON.stringify() \u65b9\u6cd5",id:"2-\u4f7f\u7528-jsonstringify-\u65b9\u6cd5",level:2},{value:"3. \u9012\u5f52\u6bd4\u8f83\u5bf9\u8c61\u7684\u5c5e\u6027",id:"3-\u9012\u5f52\u6bd4\u8f83\u5bf9\u8c61\u7684\u5c5e\u6027",level:2},{value:"4. \u4f7f\u7528 Lodash \u5e93",id:"4-\u4f7f\u7528-lodash-\u5e93",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"1-\u4f7f\u7528--\u64cd\u4f5c\u7b26",children:"1. \u4f7f\u7528 === \u64cd\u4f5c\u7b26"}),"\n",(0,o.jsx)(e.p,{children:"\u5728 JavaScript \u4e2d\uff0c=== \u64cd\u4f5c\u7b26\u7528\u4e8e\u4e25\u683c\u6bd4\u8f83\u4e24\u4e2a\u503c\uff0c\u5305\u62ec\u5bf9\u8c61\u3002\u5bf9\u4e8e\u5bf9\u8c61\uff0c=== \u6bd4\u8f83\u7684\u662f\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u800c\u4e0d\u662f\u5bf9\u8c61\u7684\u5185\u5bb9\u3002\u8fd9\u610f\u5473\u7740\u53ea\u6709\u5f53\u4e24\u4e2a\u5bf9\u8c61\u6307\u5411\u540c\u4e00\u5185\u5b58\u4f4d\u7f6e\u65f6\uff0c\u5b83\u4eec\u624d\u4f1a\u88ab\u8ba4\u4e3a\u662f\u76f8\u7b49\u7684\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"const obj1 = { name: 'Alice' };\r\nconst obj2 = { name: 'Alice' };\r\nconst obj3 = obj1;\r\n\r\nconsole.log(obj1 === obj2); // false\uff0c\u56e0\u4e3a obj1 \u548c obj2 \u662f\u4e0d\u540c\u7684\u5f15\u7528\r\nconsole.log(obj1 === obj3); // true\uff0c\u56e0\u4e3a obj1 \u548c obj3 \u662f\u540c\u4e00\u4e2a\u5f15\u7528\n"})}),"\n",(0,o.jsx)(e.h2,{id:"2-\u4f7f\u7528-jsonstringify-\u65b9\u6cd5",children:"2. \u4f7f\u7528 JSON.stringify() \u65b9\u6cd5"}),"\n",(0,o.jsx)(e.p,{children:"JSON.stringify() \u65b9\u6cd5\u5c06\u5bf9\u8c61\u8f6c\u6362\u4e3a JSON \u5b57\u7b26\u4e32\uff0c\u5e76\u53ef\u4ee5\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u5bf9\u8c61\u7684\u5185\u5bb9\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u4e00\u4e9b\u9650\u5236\uff0c\u4f8b\u5982\u65e0\u6cd5\u5904\u7406\u51fd\u6570\u3001undefined\u3001Symbol\u3001\u4ee5\u53ca\u5faa\u73af\u5f15\u7528\u7b49\u590d\u6742\u60c5\u51b5\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"const obj1 = { name: 'Alice', age: 25 };\r\nconst obj2 = { name: 'Alice', age: 25 };\r\n\r\nconsole.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6ce8\u610f: JSON.stringify() \u4e0d\u80fd\u6b63\u786e\u5904\u7406\u5bf9\u8c61\u4e2d\u7684\u51fd\u6570\u3001undefined\u3001Symbol \u548c Date \u7b49\u7279\u6b8a\u7c7b\u578b\u3002\u5982\u679c\u5bf9\u8c61\u7684\u5c5e\u6027\u987a\u5e8f\u4e0d\u540c\uff0c\u7ed3\u679c\u4e5f\u53ef\u80fd\u4e0d\u51c6\u786e\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"3-\u9012\u5f52\u6bd4\u8f83\u5bf9\u8c61\u7684\u5c5e\u6027",children:"3. \u9012\u5f52\u6bd4\u8f83\u5bf9\u8c61\u7684\u5c5e\u6027"}),"\n",(0,o.jsx)(e.p,{children:"\u5bf9\u4e8e\u6df1\u5ea6\u6bd4\u8f83\uff0c\u53ef\u4ee5\u9012\u5f52\u5730\u6bd4\u8f83\u5bf9\u8c61\u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\u3002\u8fd9\u901a\u5e38\u9700\u8981\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u6765\u904d\u5386\u5bf9\u8c61\u7684\u5c5e\u6027\u5e76\u6bd4\u8f83\u5b83\u4eec\u3002\r\n\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"function deepEqual(obj1, obj2) {\r\n  if (obj1 === obj2) return true; // \u540c\u4e00\u5f15\u7528\u6216\u90fd\u4e3a null/undefined\r\n\r\n  if (\r\n    obj1 === null ||\r\n    obj2 === null ||\r\n    typeof obj1 !== 'object' ||\r\n    typeof obj2 !== 'object'\r\n  ) {\r\n    return false;\r\n  }\r\n\r\n  const keys1 = Object.keys(obj1);\r\n  const keys2 = Object.keys(obj2);\r\n\r\n  if (keys1.length !== keys2.length) return false;\r\n\r\n  for (const key of keys1) {\r\n    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  return true;\r\n}\r\n\r\nconst obj1 = { name: 'Alice', age: 25 };\r\nconst obj2 = { name: 'Alice', age: 25 };\r\n\r\nconsole.log(deepEqual(obj1, obj2)); // true\n"})}),"\n",(0,o.jsx)(e.h2,{id:"4-\u4f7f\u7528-lodash-\u5e93",children:"4. \u4f7f\u7528 Lodash \u5e93"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 Lodash \u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u4fbf\u7684 isEqual \u65b9\u6cd5\u6765\u8fdb\u884c\u6df1\u5ea6\u6bd4\u8f83\u3002\r\n\u793a\u4f8b\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"// \u4f7f\u7528 Lodash\r\nconst _ = require('lodash');\r\n\r\nconst obj1 = { name: 'Alice', age: 25 };\r\nconst obj2 = { name: 'Alice', age: 25 };\r\n\r\nconsole.log(_.isEqual(obj1, obj2)); // true\n"})}),"\n",(0,o.jsx)(e.p,{children:"Lodash \u7684 isEqual \u65b9\u6cd5\u5904\u7406\u4e86\u5404\u79cd\u590d\u6742\u7684\u60c5\u51b5\uff0c\u5982\u5faa\u73af\u5f15\u7528\u548c\u7279\u6b8a\u5bf9\u8c61\u7c7b\u578b\uff0c\u56e0\u6b64\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u975e\u5e38\u6709\u7528\u3002 5. \u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\r\n\u9664\u4e86 Lodash\uff0c\u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u5e93\u548c\u5de5\u5177\u53ef\u4ee5\u7528\u4e8e\u5bf9\u8c61\u7684\u6df1\u5ea6\u6bd4\u8f83\u3002\u4f8b\u5982\uff1a"}),"\n",(0,o.jsx)(e.p,{children:"Deep-Equal\uff1a\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u6df1\u5ea6\u6bd4\u8f83\u5e93\u3002\r\nfast-deep-equal\uff1a\u4e00\u4e2a\u5feb\u901f\u7684\u6df1\u5ea6\u6bd4\u8f83\u5e93\uff0c\u6027\u80fd\u8f83\u4f18\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u793a\u4f8b\u4ee3\u7801\uff08\u4f7f\u7528 deep-equal \u5e93\uff09\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"const deepEqual = require('deep-equal');\r\n\r\nconst obj1 = { name: 'Alice', age: 25 };\r\nconst obj2 = { name: 'Alice', age: 25 };\r\n\r\nconsole.log(deepEqual(obj1, obj2)); // true\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,o.jsx)(e.p,{children:"\u5224\u65ad\u4e24\u4e2a\u5bf9\u8c61\u662f\u5426\u76f8\u7b49\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u51e0\u79cd\u4e3b\u8981\u65b9\u5f0f\uff1a"}),"\n",(0,o.jsx)(e.p,{children:"\u5f15\u7528\u6bd4\u8f83\uff1a\u4f7f\u7528 === \u64cd\u4f5c\u7b26\uff0c\u4ec5\u9002\u7528\u4e8e\u6bd4\u8f83\u5bf9\u8c61\u5f15\u7528\u3002\r\nJSON \u5b57\u7b26\u4e32\u5316\uff1a\u901a\u8fc7 JSON.stringify() \u65b9\u6cd5\u6bd4\u8f83\u5bf9\u8c61\u7684\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u9002\u7528\u4e8e\u7b80\u5355\u5bf9\u8c61\u3002\r\n\u6df1\u5ea6\u6bd4\u8f83\uff1a\u9012\u5f52\u5730\u6bd4\u8f83\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u9002\u7528\u4e8e\u590d\u6742\u5bf9\u8c61\u3002\r\n\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\uff1a\u5982 Lodash \u6216\u5176\u4ed6\u6df1\u5ea6\u6bd4\u8f83\u5e93\uff0c\u5904\u7406\u5404\u79cd\u590d\u6742\u7684\u6bd4\u8f83\u9700\u6c42\u3002"})]})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var o=r(96540);const s={},t=o.createContext(s);function i(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);