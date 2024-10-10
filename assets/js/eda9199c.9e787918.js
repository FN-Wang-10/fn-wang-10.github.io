"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[76656],{84208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>t,toc:()=>j});var s=r(74848),o=r(28453);const l={},c=void 0,t={id:"JavaScript/\u573a\u666f/\u904d\u5386\u5bf9\u8c61\u7684\u65b9\u6cd5",title:"\u904d\u5386\u5bf9\u8c61\u7684\u65b9\u6cd5",description:"\u5bf9\u8c61\u7684\u5c5e\u6027\u5206\u7c7b",source:"@site/docs/JavaScript/\u573a\u666f/\u904d\u5386\u5bf9\u8c61\u7684\u65b9\u6cd5.md",sourceDirName:"JavaScript/\u573a\u666f",slug:"/JavaScript/\u573a\u666f/\u904d\u5386\u5bf9\u8c61\u7684\u65b9\u6cd5",permalink:"/docs/JavaScript/\u573a\u666f/\u904d\u5386\u5bf9\u8c61\u7684\u65b9\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"\u79fb\u52a8\u7aefclick\u4e8b\u4ef6300ms\u5ef6\u8fdf",permalink:"/docs/JavaScript/\u573a\u666f/\u79fb\u52a8\u7aefclick\u4e8b\u4ef6300ms\u5ef6\u8fdf"},next:{title:"\u91cd\u5199\u6570\u7ec4\u65b9\u6cd5",permalink:"/docs/JavaScript/\u573a\u666f/\u91cd\u5199\u6570\u7ec4\u65b9\u6cd5"}},i={},j=[{value:"\u5bf9\u8c61\u7684\u5c5e\u6027\u5206\u7c7b",id:"\u5bf9\u8c61\u7684\u5c5e\u6027\u5206\u7c7b",level:2},{value:"1. for...in \u8bed\u53e5",id:"1-forin-\u8bed\u53e5",level:2},{value:"2. Object.keys() \u65b9\u6cd5",id:"2-objectkeys-\u65b9\u6cd5",level:2},{value:"3. Object.values() \u65b9\u6cd5",id:"3-objectvalues-\u65b9\u6cd5",level:2},{value:"4. Object.entries() \u65b9\u6cd5",id:"4-objectentries-\u65b9\u6cd5",level:2},{value:"5. Object.getOwnPropertyNames() \u65b9\u6cd5",id:"5-objectgetownpropertynames-\u65b9\u6cd5",level:2},{value:"6. Reflect.ownKeys() \u65b9\u6cd5",id:"6-reflectownkeys-\u65b9\u6cd5",level:2},{value:"7.Object.getOwnPropertySymbols()",id:"7objectgetownpropertysymbols",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5bf9\u8c61\u7684\u5c5e\u6027\u5206\u7c7b",children:"\u5bf9\u8c61\u7684\u5c5e\u6027\u5206\u7c7b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u539f\u578b\u5c5e\u6027"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u4ee5\u679a\u4e3e\u5c5e\u6027"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u8c61\u81ea\u8eab\u7684\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"}),"\n",(0,s.jsx)(n.li,{children:"symbol \u5c5e\u6027"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u6ce8\u610f: Object.create\u662f\u5229\u7528\u7ed9\u5b9a\u7684\u5bf9\u8c61\u4f5c\u4e3a\u539f\u578b\u5bf9\u8c61\u8fdb\u884c\u521b\u5efa\u65b0\u7684\u5bf9\u8c61\r\nconst obj = Object.create({\r\n  bar: 'bar' // \u539f\u578b\u5c5e\u6027\r\n});\r\nobj.foo = 'foo'; // \u5bf9\u8c61\u7684\u81ea\u8eab\u53ef\u679a\u4e3e\u5c5e\u6027\r\nObject.defineProperty(obj, 'name', {\r\n  // \u5bf9\u8c61\u81ea\u8eab\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\r\n  enumerable: false,\r\n  value: 'kongs'\r\n});\r\nobj[Symbol('age')] = 'age'; // \u5bf9\u8c61\u7684symbol\u5c5e\u6027\n"})}),"\n",(0,s.jsx)(n.h2,{id:"1-forin-\u8bed\u53e5",children:"1. for...in \u8bed\u53e5"}),"\n",(0,s.jsx)(n.p,{children:"for...in \u8bed\u53e5\u7528\u4e8e\u904d\u5386\u5bf9\u8c61\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff08\u5305\u62ec\u4ece\u539f\u578b\u94fe\u7ee7\u627f\u7684\u5c5e\u6027\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nfor (let key in person) {\r\n  console.log(key, person[key]);\r\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"name John\r\nage 30\r\njob developer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"for...in \u8bed\u53e5\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u548c\u7ee7\u627f\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u3002\r\n\u5982\u679c\u53ea\u60f3\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u7684\u5c5e\u6027\u800c\u4e0d\u5305\u542b\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u901a\u5e38\u4f1a\u7ed3\u5408 hasOwnProperty \u65b9\u6cd5\u3002\r\n\u4f7f\u7528 hasOwnProperty \u8fc7\u6ee4\u7ee7\u627f\u5c5e\u6027\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"for (let key in person) {\r\n  if (person.hasOwnProperty(key)) {\r\n    console.log(key, person[key]);\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"2-objectkeys-\u65b9\u6cd5",children:"2. Object.keys() \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"Object.keys() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u540d\uff08\u4e0d\u5305\u62ec\u7ee7\u627f\u7684\u5c5e\u6027\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nObject.keys(person).forEach((key) => {\r\n  console.log(key, person[key]);\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"name John\r\nage 30\r\njob developer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ea\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u3002\r\n\u8fd4\u56de\u7684\u5c5e\u6027\u987a\u5e8f\u662f\u4e0e\u624b\u52a8\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u65f6\u7684\u987a\u5e8f\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"3-objectvalues-\u65b9\u6cd5",children:"3. Object.values() \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"Object.values() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nObject.values(person).forEach((value) => {\r\n  console.log(value);\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"John\r\n30\r\ndeveloper\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ea\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u7684\u503c\u3002\r\n\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6\u5c5e\u6027\u540d\uff0c\u53ea\u80fd\u83b7\u53d6\u5c5e\u6027\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"4-objectentries-\u65b9\u6cd5",children:"4. Object.entries() \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"Object.entries() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u662f\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u7684\u952e\u503c\u5bf9\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nObject.entries(person).forEach(([key, value]) => {\r\n  console.log(key, value);\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"name John\r\nage 30\r\njob developer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ea\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u3002\r\n\u63d0\u4f9b\u952e\u503c\u5bf9\u5f62\u5f0f\u7684\u904d\u5386\uff0c\u9002\u5408\u9700\u8981\u540c\u65f6\u8bbf\u95ee\u5c5e\u6027\u540d\u548c\u5c5e\u6027\u503c\u7684\u573a\u666f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"5-objectgetownpropertynames-\u65b9\u6cd5",children:"5. Object.getOwnPropertyNames() \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"Object.getOwnPropertyNames() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u5bf9\u8c61\u81ea\u8eab\u7684\u6240\u6709\u5c5e\u6027\uff08\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nObject.getOwnPropertyNames(person).forEach((key) => {\r\n  console.log(key, person[key]);\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"name John\r\nage 30\r\njob developer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u3002\r\n\u901a\u5e38\u7528\u4e8e\u9700\u8981\u83b7\u53d6\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u65f6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"6-reflectownkeys-\u65b9\u6cd5",children:"6. Reflect.ownKeys() \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.p,{children:"Reflect.ownKeys() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u5bf9\u8c61\u81ea\u8eab\u7684\u6240\u6709\u5c5e\u6027\uff08\u5305\u62ec\u7b26\u53f7\u5c5e\u6027\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const person = {\r\n  name: 'John',\r\n  age: 30,\r\n  job: 'developer'\r\n};\r\n\r\nReflect.ownKeys(person).forEach((key) => {\r\n  console.log(key, person[key]);\r\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"name John\r\nage 30\r\njob developer\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7279\u70b9\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u540d\uff0c\u5305\u62ec\u53ef\u679a\u4e3e\u5c5e\u6027\u3001\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u548c\u7b26\u53f7\u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"7objectgetownpropertysymbols",children:"7.Object.getOwnPropertySymbols()"}),"\n",(0,s.jsx)(n.p,{children:"Object.getOwnPropertySymbols()\u4f1a\u8fd4\u56de\u5bf9\u8c61\u5185\u7684\u6240\u6709 Symbol \u5c5e\u6027\uff0c\u8fd4\u56de\u5f62\u5f0f\u4f9d\u65e7\u662f\u6570\u7ec4\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u65f6\u5019\uff0c\u5185\u90e8\u662f\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55 Symbol \u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let obj = {\r\n  name: 'obj'\r\n};\r\nObject.getOwnPropertySymbols(obj); // []\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4ee5\u6211\u521d\u59cb\u5316\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u7a7a\u6570\u7ec4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let sym = Symbol();\r\nobj[sym] = 'hogkin';\r\nObject.getOwnPropertySymbols(obj); // [Symbol()]\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5728\u540e\u9762\u65b0\u5efa symbol\uff0c\u518d\u4e3a\u4e0a\u9762\u58f0\u660e\u597d\u7684\u5bf9\u8c61\u6dfb\u52a0\u8fdb\u53bb\uff0c\u901a\u8fc7\u904d\u5386\u5f97\u5230 Symbol()"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u83b7\u53d6\u5bf9\u8c61\u81ea\u8eab\u6240\u6709\u7684 symbol \u5c5e\u6027\r\n\u4e0d\u5305\u62ec\u539f\u578b\u4e0a\u7684 symbol \u5c5e\u6027\r\nes6 \u65b0\u589e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Object.getOwnPropertySymbols(obj).forEach((i) => console.log(i)); // \u8f93\u51fa: Symbol(age)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.p,{children:["for...in\uff1a\u904d\u5386\u5bf9\u8c61\u53ca\u5176\u539f\u578b\u94fe\u4e0a\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u9002\u5408\u7b80\u5355\u904d\u5386\uff0c\u4f46\u9700\u8981 hasOwnProperty \u6765\u8fc7\u6ee4\u7ee7\u627f\u5c5e\u6027\u3002",(0,s.jsx)(n.br,{}),"\n","Object.keys()\uff1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u540d\uff0c\u6700\u5e38\u7528\u3002",(0,s.jsx)(n.br,{}),"\n","Object.values()\uff1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u503c\uff0c\u9002\u5408\u53ea\u9700\u8981\u503c\u7684\u573a\u666f\u3002",(0,s.jsx)(n.br,{}),"\n","Object.entries()\uff1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u7684\u952e\u503c\u5bf9\uff0c\u9002\u5408\u540c\u65f6\u9700\u8981\u952e\u548c\u503c\u7684\u573a\u666f\u3002",(0,s.jsx)(n.br,{}),"\n","Object.getOwnPropertyNames()\uff1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u3002",(0,s.jsx)(n.br,{}),"\n","Reflect.ownKeys()\uff1a\u8fd4\u56de\u5bf9\u8c61\u81ea\u8eab\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5305\u62ec\u7b26\u53f7\u5c5e\u6027\u548c\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u3002\r\nObject.getOwnPropertySymbols:\u56de\u53bb\u5bf9\u8c61\u7684 symbol \u5c5e\u6027"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(96540);const o={},l=s.createContext(o);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);