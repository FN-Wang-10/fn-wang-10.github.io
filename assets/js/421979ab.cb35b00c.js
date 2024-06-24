"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[11442],{25071:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var c=r(85893),s=r(11151);const l={},d=void 0,i={id:"Es6/ES6\u4e2dFunction\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",title:"ES6\u4e2dFunction\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",description:"\u4e00\u3001\u53c2\u6570",source:"@site/docs/Es6/ES6\u4e2dFunction\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55.md",sourceDirName:"Es6",slug:"/Es6/ES6\u4e2dFunction\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",permalink:"/docs/Es6/ES6\u4e2dFunction\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"es6Sidebar",previous:{title:"ES6\u4e2dArray\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",permalink:"/docs/Es6/ES6\u4e2dArray\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55"},next:{title:"ES6\u4e2dObject\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55",permalink:"/docs/Es6/ES6\u4e2dObject\u65b0\u589e\u4e86\u54ea\u4e9b\u6269\u5c55"}},o={},a=[{value:"\u4e00\u3001\u53c2\u6570",id:"\u4e00\u53c2\u6570",level:2},{value:"\u4e8c\u3001\u5c5e\u6027",id:"\u4e8c\u5c5e\u6027",level:2},{value:"\u51fd\u6570\u7684 length \u5c5e\u6027",id:"\u51fd\u6570\u7684-length-\u5c5e\u6027",level:3},{value:"name \u5c5e\u6027",id:"name-\u5c5e\u6027",level:3},{value:"\u4e09\u3001\u4f5c\u7528\u57df",id:"\u4e09\u4f5c\u7528\u57df",level:2},{value:"\u56db\u3001\u4e25\u683c\u6a21\u5f0f",id:"\u56db\u4e25\u683c\u6a21\u5f0f",level:2},{value:"\u4e94\u3001\u7bad\u5934\u51fd\u6570",id:"\u4e94\u7bad\u5934\u51fd\u6570",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function t(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u4e00\u53c2\u6570",children:"\u4e00\u3001\u53c2\u6570"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"ES6"}),"\u5141\u8bb8\u4e3a\u51fd\u6570\u7684\u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'function log(x, y = "World") {\r\n  console.log(x, y);\r\n}\r\n\r\nconsole.log("Hello"); // Hello World\r\nconsole.log("Hello", "China"); // Hello China\r\nconsole.log("Hello", ""); // Hello\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u51fd\u6570\u7684\u5f62\u53c2\u662f\u9ed8\u8ba4\u58f0\u660e\u7684\uff0c\u4e0d\u80fd\u4f7f\u7528",(0,c.jsx)(e.code,{children:"let"}),"\u6216",(0,c.jsx)(e.code,{children:"const"}),"\u518d\u6b21\u58f0\u660e"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function foo(x = 5) {\r\n  let x = 1; // error\r\n  const x = 2; // error\r\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u53c2\u6570\u9ed8\u8ba4\u503c\u53ef\u4ee5\u4e0e\u89e3\u6784\u8d4b\u503c\u7684\u9ed8\u8ba4\u503c\u7ed3\u5408\u8d77\u6765\u4f7f\u7528"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function foo({ x, y = 5 }) {\r\n  console.log(x, y);\r\n}\r\n\r\nfoo({}); // undefined 5\r\nfoo({ x: 1 }); // 1 5\r\nfoo({ x: 1, y: 2 }); // 1 2\r\nfoo(); // TypeError: Cannot read property 'x' of undefined\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0a\u9762\u7684",(0,c.jsx)(e.code,{children:"foo"}),"\u51fd\u6570\uff0c\u5f53\u53c2\u6570\u4e3a\u5bf9\u8c61\u7684\u65f6\u5019\u624d\u80fd\u8fdb\u884c\u89e3\u6784\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\u7684\u65f6\u5019\uff0c\u53d8\u91cf",(0,c.jsx)(e.code,{children:"x"}),"\u548c",(0,c.jsx)(e.code,{children:"y"}),"\u5c31\u4e0d\u4f1a\u751f\u6210\uff0c\u4ece\u800c\u62a5\u9519\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u907f\u514d"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function foo({ x, y = 5 } = {}) {\r\n  console.log(x, y);\r\n}\r\n\r\nfoo(); // undefined 5\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u53c2\u6570\u9ed8\u8ba4\u503c\u5e94\u8be5\u662f\u51fd\u6570\u7684\u5c3e\u53c2\u6570\uff0c\u5982\u679c\u4e0d\u662f\u975e\u5c3e\u90e8\u7684\u53c2\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u5b9e\u9645\u4e0a\u8fd9\u4e2a\u53c2\u6570\u662f\u6ca1\u53d1\u7701\u7565\u7684"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:"function f(x = 1, y) {\r\n  return [x, y];\r\n}\r\n\r\nf() // [1, undefined]\r\nf(2) // [2, undefined]\r\nf(, 1) // \u62a5\u9519\r\nf(undefined, 1) // [1, 1]\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e8c\u5c5e\u6027",children:"\u4e8c\u3001\u5c5e\u6027"}),"\n",(0,c.jsx)(e.h3,{id:"\u51fd\u6570\u7684-length-\u5c5e\u6027",children:"\u51fd\u6570\u7684 length \u5c5e\u6027"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"length"}),"\u5c06\u8fd4\u56de\u6ca1\u6709\u6307\u5b9a\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e2a\u6570"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"(function (a) {})\r\n  .length(\r\n    // 1\r\n    function (a = 5) {}\r\n  )\r\n  .length(\r\n    // 0\r\n    function (a, b, c = 5) {}\r\n  ).length; // 2\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"rest"})," \u53c2\u6570\u4e5f\u4e0d\u4f1a\u8ba1\u5165",(0,c.jsx)(e.code,{children:"length"}),"\u5c5e\u6027"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"(function (...args) {}).length; // 0\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u8bbe\u7f6e\u4e86\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e0d\u662f\u5c3e\u53c2\u6570\uff0c\u90a3\u4e48",(0,c.jsx)(e.code,{children:"length"}),"\u5c5e\u6027\u4e5f\u4e0d\u518d\u8ba1\u5165\u540e\u9762\u7684\u53c2\u6570\u4e86"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"(function (a = 0, b, c) {}).length(\r\n  // 0\r\n  function (a, b = 1, c) {}\r\n).length; // 1\n"})}),"\n",(0,c.jsx)(e.h3,{id:"name-\u5c5e\u6027",children:"name \u5c5e\u6027"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u8be5\u51fd\u6570\u7684\u51fd\u6570\u540d"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'var f = function () {};\r\n\r\n// ES5\r\nf.name; // ""\r\n\r\n// ES6\r\nf.name; // "f"\n'})}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u5c06\u4e00\u4e2a\u5177\u540d\u51fd\u6570\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u5219 ",(0,c.jsx)(e.code,{children:"name"}),"\u5c5e\u6027\u90fd\u8fd4\u56de\u8fd9\u4e2a\u5177\u540d\u51fd\u6570\u539f\u672c\u7684\u540d\u5b57"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'const bar = function baz() {};\r\nbar.name; // "baz"\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Function"}),"\u6784\u9020\u51fd\u6570\u8fd4\u56de\u7684\u51fd\u6570\u5b9e\u4f8b\uff0c",(0,c.jsx)(e.code,{children:"name"}),"\u5c5e\u6027\u7684\u503c\u4e3a",(0,c.jsx)(e.code,{children:"anonymous"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'new Function().name; // "anonymous"\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"bind"}),"\u8fd4\u56de\u7684\u51fd\u6570\uff0c",(0,c.jsx)(e.code,{children:"name"}),"\u5c5e\u6027\u503c\u4f1a\u52a0\u4e0a",(0,c.jsx)(e.code,{children:"bound"}),"\u524d\u7f00"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-javascript",children:'function foo() {}\r\nfoo\r\n  .bind({})\r\n  .name(\r\n    // "bound foo"\r\n\r\n    function () {}\r\n  )\r\n  .bind({}).name; // "bound "\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e09\u4f5c\u7528\u57df",children:"\u4e09\u3001\u4f5c\u7528\u57df"}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u65e6\u8bbe\u7f6e\u4e86\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\uff0c\u51fd\u6570\u8fdb\u884c\u58f0\u660e\u521d\u59cb\u5316\u65f6\uff0c\u53c2\u6570\u4f1a\u5f62\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u4f5c\u7528\u57df"}),"\n",(0,c.jsx)(e.p,{children:"\u7b49\u5230\u521d\u59cb\u5316\u7ed3\u675f\uff0c\u8fd9\u4e2a\u4f5c\u7528\u57df\u5c31\u4f1a\u6d88\u5931\u3002\u8fd9\u79cd\u8bed\u6cd5\u884c\u4e3a\uff0c\u5728\u4e0d\u8bbe\u7f6e\u53c2\u6570\u9ed8\u8ba4\u503c\u65f6\uff0c\u662f\u4e0d\u4f1a\u51fa\u73b0\u7684"}),"\n",(0,c.jsxs)(e.p,{children:["\u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"y=x"}),"\u4f1a\u5f62\u6210\u4e00\u4e2a\u5355\u72ec\u4f5c\u7528\u57df\uff0c",(0,c.jsx)(e.code,{children:"x"}),"\u6ca1\u6709\u88ab\u5b9a\u4e49\uff0c\u6240\u4ee5\u6307\u5411\u5168\u5c40\u53d8\u91cf",(0,c.jsx)(e.code,{children:"x"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"let x = 1;\r\n\r\nfunction f(y = x) {\r\n  // \u7b49\u540c\u4e8e let y = x\r\n  let x = 2;\r\n  console.log(y);\r\n}\r\n\r\nf(); // 1\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u56db\u4e25\u683c\u6a21\u5f0f",children:"\u56db\u3001\u4e25\u683c\u6a21\u5f0f"}),"\n",(0,c.jsx)(e.p,{children:"\u53ea\u8981\u51fd\u6570\u53c2\u6570\u4f7f\u7528\u4e86\u9ed8\u8ba4\u503c\u3001\u89e3\u6784\u8d4b\u503c\u3001\u6216\u8005\u6269\u5c55\u8fd0\u7b97\u7b26\uff0c\u90a3\u4e48\u51fd\u6570\u5185\u90e8\u5c31\u4e0d\u80fd\u663e\u5f0f\u8bbe\u5b9a\u4e3a\u4e25\u683c\u6a21\u5f0f\uff0c\u5426\u5219\u4f1a\u62a5\u9519"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"// \u62a5\u9519\r\nfunction doSomething(a, b = a) {\r\n  'use strict';\r\n  // code\r\n}\r\n\r\n// \u62a5\u9519\r\nconst doSomething = function ({a, b}) {\r\n  'use strict';\r\n  // code\r\n};\r\n\r\n// \u62a5\u9519\r\nconst doSomething = (...a) => {\r\n  'use strict';\r\n  // code\r\n};\r\n\r\nconst obj = {\r\n  // \u62a5\u9519\r\n  doSomething({a, b}) {\r\n    'use strict';\r\n    // code\r\n  }\r\n};\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u4e94\u7bad\u5934\u51fd\u6570",children:"\u4e94\u3001\u7bad\u5934\u51fd\u6570"}),"\n",(0,c.jsxs)(e.p,{children:["\u4f7f\u7528\u201c\u7bad\u5934\u201d\uff08",(0,c.jsx)(e.code,{children:"=>"}),"\uff09\u5b9a\u4e49\u51fd\u6570"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"var f = (v) => v;\r\n\r\n// \u7b49\u540c\u4e8e\r\nvar f = function (v) {\r\n  return v;\r\n};\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u7bad\u5934\u51fd\u6570\u4e0d\u9700\u8981\u53c2\u6570\u6216\u9700\u8981\u591a\u4e2a\u53c2\u6570\uff0c\u5c31\u4f7f\u7528\u4e00\u4e2a\u5706\u62ec\u53f7\u4ee3\u8868\u53c2\u6570\u90e8\u5206"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"var f = () => 5;\r\n// \u7b49\u540c\u4e8e\r\nvar f = function () {\r\n  return 5;\r\n};\r\n\r\nvar sum = (num1, num2) => num1 + num2;\r\n// \u7b49\u540c\u4e8e\r\nvar sum = function (num1, num2) {\r\n  return num1 + num2;\r\n};\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u7bad\u5934\u51fd\u6570\u7684\u4ee3\u7801\u5757\u90e8\u5206\u591a\u4e8e\u4e00\u6761\u8bed\u53e5\uff0c\u5c31\u8981\u4f7f\u7528\u5927\u62ec\u53f7\u5c06\u5b83\u4eec\u62ec\u8d77\u6765\uff0c\u5e76\u4e14\u4f7f\u7528",(0,c.jsx)(e.code,{children:"return"}),"\u8bed\u53e5\u8fd4\u56de"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"var sum = (num1, num2) => {\r\n  return num1 + num2;\r\n};\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u8fd4\u56de\u5bf9\u8c61\uff0c\u9700\u8981\u52a0\u62ec\u53f7\u5c06\u5bf9\u8c61\u5305\u88f9"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:'let getTempItem = (id) => ({ id: id, name: "Temp" });\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6ce8\u610f\u70b9\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u51fd\u6570\u4f53\u5185\u7684",(0,c.jsx)(e.code,{children:"this"}),"\u5bf9\u8c61\uff0c\u5c31\u662f\u5b9a\u4e49\u65f6\u6240\u5728\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u65f6\u6240\u5728\u7684\u5bf9\u8c61"]}),"\n",(0,c.jsxs)(e.li,{children:["\u4e0d\u53ef\u4ee5\u5f53\u4f5c\u6784\u9020\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"new"}),"\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef"]}),"\n",(0,c.jsxs)(e.li,{children:["\u4e0d\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"arguments"}),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5728\u51fd\u6570\u4f53\u5185\u4e0d\u5b58\u5728\u3002\u5982\u679c\u8981\u7528\uff0c\u53ef\u4ee5\u7528 ",(0,c.jsx)(e.code,{children:"rest"})," \u53c2\u6570\u4ee3\u66ff"]}),"\n",(0,c.jsxs)(e.li,{children:["\u4e0d\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"yield"}),"\u547d\u4ee4\uff0c\u56e0\u6b64\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5c Generator \u51fd\u6570"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://es6.ruanyifeng.com/#docs/function",children:"https://es6.ruanyifeng.com/#docs/function"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(t,{...n})}):t(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>i,a:()=>d});var c=r(67294);const s={},l=c.createContext(s);function d(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);