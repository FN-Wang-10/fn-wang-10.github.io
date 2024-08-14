"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[63930],{20979:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>x});var s=e(74848),t=e(28453);const o={},a=void 0,c={id:"JavaScript/\u5176\u5b83/axios",title:"axios",description:"fetch() \u2014\u2014 h5 \u81ea\u5e26\u7684\uff0c\u53ea\u80fd\u7528\u5728\u6d4f\u89c8\u5668 4kb",source:"@site/docs/JavaScript/\u5176\u5b83/axios.md",sourceDirName:"JavaScript/\u5176\u5b83",slug:"/JavaScript/\u5176\u5b83/axios",permalink:"/docs/JavaScript/\u5176\u5b83/axios",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"javascriptSidebar",previous:{title:"Websocket\u603b\u7ed3",permalink:"/docs/JavaScript/\u5176\u5b83/Websocket\u603b\u7ed3"},next:{title:"fetch",permalink:"/docs/JavaScript/\u5176\u5b83/fetch"}},i={},x=[];function p(n){const r={br:"br",code:"code",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["fetch() \u2014\u2014 h5 \u81ea\u5e26\u7684\uff0c\u53ea\u80fd\u7528\u5728\u6d4f\u89c8\u5668 4kb",(0,s.jsx)(r.br,{}),"\n","axios \u2014\u2014 \u662f\u7b2c\u4e09\u65b9\u7684\u63d2\u4ef6\uff0c\u5305\u4f53\u79ef\u5927\u4e00\u70b9\uff0c14kb",(0,s.jsx)(r.br,{}),"\n","Axios \u662f\u4e00\u4e2a\u57fa\u4e8e promise \u7684 HTTP \u5e93\uff0c\u53ef\u4ee5\u7528\u5728\u6d4f\u89c8\u5668\u548c node.js \u4e2d\u3002",(0,s.jsx)(r.br,{}),"\n","axios \u6267\u884c\u4e5f\u4f1a\u8fd4\u56de promise",(0,s.jsx)(r.br,{}),"\n","\u529f\u80fd\u65b9\u9762\u6bd4 fetch \u725b\u903c\uff0c\u5de5\u4f5c\u4e2d\u7528\u7684\u591a",(0,s.jsx)(r.br,{}),"\n","\u5b89\u88c5 yarn add axios",(0,s.jsx)(r.br,{}),"\n","axios \u771f\u6b63\u597d\u7684\u4e00\u70b9\u662f\u5728\u4e8e\u5c01\u88c5\u65b9\u4fbf",(0,s.jsx)(r.br,{}),"\n","fetch \u5c01\u88c5\u7684\u65f6\u5019\u53ea\u80fd\u5728\u540e\u9762\u62fc\u63a5\uff0cfetch \u5c01\u88c5\u7684\u65f6\u5019\u8981\u5148\u628a\u5bf9\u8c61\u88c5\u6362\u6210\u5b57\u7b26\u4e32\u8fdb\u884c\u62fc\u63a5",(0,s.jsx)(r.br,{}),"\n","axios \u53ef\u4ee5\u76f4\u63a5\u4f20\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5bf9\u8c61\uff0c\u4e0d\u7528\u8f6c\u6362",(0,s.jsx)(r.br,{}),"\n","axios \u6bd4 fetch \u5c11\u4e00\u4e00\u6b65\u64cd\u4f5c\uff0cfetch \u9700\u8981\u4e24\u4e2a.then()\uff0c\u7b2c\u4e00\u4e2a.then()\u91cc\u9762\u9700\u8981\u8f6c json\uff0c\u7b2c\u4e8c\u4e2a.then()\u91cc\u9762\u53ef\u4ee5\u62ff\u5230\u8f6c\u6362\u683c\u5f0f\u540e\u7684\u6570\u636e\uff0caxios \u5c31\u4e0d\u9700\u8981\u4e86\uff0c\u53ea\u9700\u8981\u4e00\u4e2a.then()"]}),"\n",(0,s.jsxs)(r.p,{children:["axios \u652f\u6301",(0,s.jsx)(r.br,{}),"\n","\u4ece\u6d4f\u89c8\u5668\u4e2d\u521b\u5efa \xa0XMLHttpRequests",(0,s.jsx)(r.br,{}),"\n","\u4ece node.js \u521b\u5efa \xa0http\xa0 \u8bf7\u6c42",(0,s.jsx)(r.br,{}),"\n","\u652f\u6301 \xa0Promise\xa0API",(0,s.jsx)(r.br,{}),"\n","\u62e6\u622a\u8bf7\u6c42\u548c\u54cd\u5e94",(0,s.jsx)(r.br,{}),"\n","\u8f6c\u6362\u8bf7\u6c42\u6570\u636e\u548c\u54cd\u5e94\u6570\u636e",(0,s.jsx)(r.br,{}),"\n","\u53d6\u6d88\u8bf7\u6c42",(0,s.jsx)(r.br,{}),"\n","\u81ea\u52a8\u8f6c\u6362 JSON \u6570\u636e",(0,s.jsx)(r.br,{}),"\n","\u5ba2\u6237\u7aef\u652f\u6301\u9632\u5fa1 \xa0XSRF"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9762\u8bd5\uff1a\u5982\u679c\u6211\u5199\u4e86 async await \u7684\u8bed\u6cd5\uff0c\u600e\u6837\u53bb\u5904\u7406\u4ed6\u7684\u5bb9\u9519",(0,s.jsx)(r.br,{}),"\n","\u7528 try.....catch......\u5bb9\u9519\u5904\u7406"]}),"\n",(0,s.jsxs)(r.p,{children:["axios \u4e24\u79cd\u5199\u6cd5",(0,s.jsx)(r.br,{}),"\n","\u5199\u6cd5\u4e00"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'axios\r\n  .get("/user", {\r\n    params: {\r\n      ID: 12345,\r\n    },\r\n  })\r\n  .then(function (response) {\r\n    console.log(response);\r\n  })\r\n  .catch(function (error) {\r\n    console.log(error);\r\n  });\r\n\r\naxios\r\n  .post("/user", {\r\n    firstName: "Fred",\r\n    lastName: "Flintstone",\r\n  })\r\n  .then(function (response) {\r\n    console.log(response);\r\n  })\r\n  .catch(function (error) {\r\n    console.log(error);\r\n  });\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5199\u6cd5\u4e8c"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"axios({\r\n  method: 'post',\r\n  url: '/user/12345',\r\n  data: {\r\n    firstName: 'Fred',\r\n    lastName: 'Flintstone'\r\n  }\uff0c\r\n\r\n});\r\naxios({\r\n  method: 'get',\r\n  url: '/user/12345',\r\n  data: {\r\n    firstName: 'Fred',\r\n    lastName: 'Flintstone'\r\n  }\uff0c\r\n  params:{\r\n        a:20022002\r\n      }\r\n});\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u6267\u884c\u591a\u4e2a\u5e76\u53d1\u8bf7\u6c42"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'function getUserAccount() {\r\n  return axios.get("/user/12345");\r\n}\r\n\r\nfunction getUserPermissions() {\r\n  return axios.get("/user/12345/permissions");\r\n}\r\n\r\naxios.all([getUserAccount(), getUserPermissions()]).then(\r\n  axios.spread(function (acct, perms) {\r\n    // \u4e24\u4e2a\u8bf7\u6c42\u73b0\u5728\u90fd\u6267\u884c\u5b8c\u6210\r\n  })\r\n);\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u521b\u5efa\u5b9e\u4f8b",(0,s.jsx)(r.br,{}),"\n","\u521b\u5efa\u4e00\u4e2a axios \u5b9e\u4f8b\uff08\u91cc\u9762\u53ef\u4ee5\u52a0\u8bf7\u6c42\u914d\u7f6e\uff09"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"// \u4f7f\u7528\u5b9e\u4f8b\u5c31\u4e0d\u80fd\u7528axios\u4e86\uff0c\u76f4\u63a5\u7528\u5b9e\u4f8binstance\uff08\u4e0b\u9762\u7684\u6240\u6709axios\u5168\u90e8\u4f7f\u7528instance\uff09\r\nvar instance = axios.create({\r\n\xa0 // url\u7684\u524d\u7f00\r\n\xa0 baseURL: \"http://www.pudge.wang:3080/api\",\r\n\xa0 // \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff08\u8d85\u65f6\u8bf7\u6c42\u5c31\u4f1a\u81ea\u52a8\u5173\u6389\uff0c\u4e00\u822c\u8bbe\u7f6e10s\uff09\r\n\xa0 timeout: 10000,\r\n\xa0 // headers: {'X-Custom-Header': 'foobar'}\r\n\u9ed8\u8ba4\u4f20\u53c2\r\n\xa0 // \u52a0\u4e86params,\u53ea\u8981\u6211\u505a\u8bf7\u6c42\uff0c\u4e0d\u7ba1\u6211\u6709\u6ca1\u6709\u4f20\u53c2\uff0c\u4ed6\u90fd\u4f1a\u5728url\u540e\u9762\u62fc\u63a5\u8fd9\u4e2aparams\r\n\xa0 // params\u53ea\u4f1a\u5728get\u8bf7\u6c42\u7684\u65f6\u5019\u5e2e\u6211\u4eec\u52a0\u8fdb\u53bb\uff0cdata\u53ea\u4f1a\u5728post\u8bf7\u6c42\u7684\u65f6\u5019\u5e2e\u6211\u4eec\u52a0\u8fdb\u53bb\r\n\xa0 params: {\r\n\xa0 \xa0 // ID: 12345\r\n\xa0 \xa0 token: localStorage.getItem(\"token\"), // \u4ed6\u4f1a\u5224\u65ad\u6211\u6709\u6ca1\u6709token\uff0c\u6709\u4e86\u4f1a\u8fdb\u884c\u62fc\u63a5\uff0c\u6ca1\u6709\u5219\u4e0d\u4f1a\r\n\xa0 },\r\n\xa0 // data: {\r\n\xa0 // \xa0 firstName: 'Fred'\r\n\xa0 // },\r\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6dfb\u52a0\u8bf7\u6c42\u62e6\u622a\u5668 \uff08\u5224\u65ad\u662f get \u8fd8\u662f post \u8bf7\u6c42\uff0c\u6302\u8f7d token \u4fe1\u606f\uff09",(0,s.jsx)(r.br,{}),"\n","\u6211\u9875\u9762\u7684\u4efb\u4f55\u4e00\u4e2a\u5730\u65b9\u5982\u679c\u8981\u8bf7\u6c42\u63a5\u53e3\uff0c\u53ea\u8981\u662f\u901a\u8fc7 axios \u8bf7\u6c42\u7684\u63a5\u53e3\uff0c\u5b83\u90fd\u4f1a\u8d70\u8fd9\u4e00\u6b65",(0,s.jsx)(r.br,{}),"\n","\u6211\u518d\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\uff0c\u53ea\u8981 return \u4e86 config\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u5c31\u7ed9\u4ed6\u53d1\u9001",(0,s.jsx)(r.br,{}),"\n","config \u5c31\u662f\u6211\u4eec\u8981\u53d1\u9001\u7ed9\u540e\u7aef\u7684\u8bf7\u6c42\u4fe1\u606f",(0,s.jsx)(r.br,{}),"\n","\u73b0\u5728\u6211\u4eec\u6709\u673a\u4f1a\u5728\u8bf7\u6c42\u4e4b\u524d\u53bb\u505a\u7edf\u4e00\u7684\u4e00\u4e9b\u64cd\u4f5c",(0,s.jsx)(r.br,{}),"\n","\u6211\u53ef\u4ee5\u5728 return \u4e4b\u524d\uff0cconfig.params \u53bb\u6302\u8f7d token \u4fe1\u606f",(0,s.jsx)(r.br,{}),"\n","\u5982\u679c\u8fd9\u6837\u52a0\u4f1a\u6709\u4e2a\u95ee\u9898\uff0c\u53ea\u6709 get \u8bf7\u6c42\u6709\u7528\uff0cpost \u8bf7\u6c42\u662f\u5728 data \u91cc\u9762\u7684",(0,s.jsx)(r.br,{}),"\n","\u6709\u4e00\u79cd\u6700\u597d\u7684\u5199\u6cd5\uff08\u5224\u65ad\u662f get \u8fd8\u662f post \u8bf7\u6c42\uff0c\u518d\u6dfb\u52a0\uff09",(0,s.jsx)(r.br,{}),"\n","\u6709\u7684\u516c\u53f8\u662f\u52a0\u5728 headers \u91cc\u9762\u7684"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'instance.interceptors.request.use(\r\n  function (config) {\r\n    // console.log(config); //config\u5c31\u662f\u6211\u4eec\u8981\u53d1\u9001\u7ed9\u540e\u7aef\u7684\u8bf7\u6c42\u4fe1\u606f\r\n    // \u5728\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u505a\u4e9b\u4ec0\u4e48\r\n    // params\u53ea\u5bf9get\u8bf7\u6c42\u6709\u6548\r\n    // post\u8bf7\u6c42\u9700\u8981\u52a0\u5728data\u91cc\u9762\r\n    // config.params.token = localStorage.getItem("token");\r\n    // \u6709\u7684\u516c\u53f8\u662f\u52a0\u5728headers\u91cc\u9762\u7684\r\n    // \u66f4\u597d\u7684\u5199\u6cd5\r\n    if (config.method === "get") {\r\n      config.params.token = localStorage.getItem("token");\r\n    } else {\r\n      config.data.token = localStorage.getItem("token");\r\n    }\r\n    return config;\r\n  },\r\n  function (error) {\r\n    // \u5bf9\u8bf7\u6c42\u9519\u8bef\u505a\u4e9b\u4ec0\u4e48\r\n    return Promise.reject(error);\r\n  }\r\n);\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u6dfb\u52a0\u54cd\u5e94\u62e6\u622a\u5668 (\u5224\u65ad\u72b6\u6001\u7801)",(0,s.jsx)(r.br,{}),"\n","\u662f\u5728\u521a\u62ff\u5230\u6570\u636e\u7684\u65f6\u5019\u6267\u884c\uff0c\u521a\u62ff\u5230\u6570\u636e\u4e4b\u540e\uff0c\u5148\u6267\u884c\u54cd\u5e94\u62e6\u622a\u5668",(0,s.jsx)(r.br,{}),"\n","response \u548c.then()\u91cc\u9762\u7684\u7ed3\u679c res \u662f\u4e00\u6478\u4e00\u6837\u7684",(0,s.jsx)(r.br,{}),"\n","\u7ed3\u8bba:\u54cd\u5e94\u62e6\u622a\u5668\u91cc\u9762 return \u7684\u5185\u5bb9\uff0c\u4f1a\u4f5c\u4e3a\u8bf7\u6c42\u91cc\u9762.then()\u7684\u7ed3\u679c",(0,s.jsx)(r.br,{}),"\n","\u54cd\u5e94\u62e6\u622a\u5668\u53ef\u4ee5\u505a\u72b6\u6001\u7801\u7684\u5224\u5b9a\uff08\u5728\u8fd9\u91cc\u505a\u72b6\u6001\u7801\u7684\u5224\u5b9a\uff0c404 \u662f\u6ca1\u6709\u529e\u6cd5\u5224\u65ad\u5230\u7684\uff09",(0,s.jsx)(r.br,{}),"\n","\u72b6\u6001\u7801",(0,s.jsx)(r.br,{}),"\n","100 \u2014\u2014 \u7ee7\u7eed",(0,s.jsx)(r.br,{}),"\n","200 \u2014\u2014 \u6210\u529f",(0,s.jsx)(r.br,{}),"\n","300 \u2014\u2014 \u91cd\u5b9a\u5411",(0,s.jsx)(r.br,{}),"\n","400 \u2014\u2014 \u6ca1\u627e\u5230",(0,s.jsx)(r.br,{}),"\n","500 \u2014\u2014 \u670d\u52a1\u5668\u9519\u8bef"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'instance.interceptors.response.use(\r\n  function (response) {\r\n    // \u5728\u521a\u62ff\u5230\u6570\u636e\u7684\u65f6\u5019\u6267\u884c\uff08\u521a\u62ff\u5230\u6570\u636e\uff0c\u5148\u6267\u884c\u76f8\u5e94\u62e6\u622a\u5668\u91cc\u9762\u7684\u5185\u5bb9\uff09\r\n    // response\u548c.then()\u91cc\u9762\u7684\u7ed3\u679cres\u662f\u4e00\u6478\u4e00\u6837\u7684\r\n    // console.log(response);\r\n    // \u5bf9\u54cd\u5e94\u6570\u636e\u505a\u70b9\u4ec0\u4e48\r\n    // return response;\r\n    // return response.data;\r\n\r\n    // \u5728\u8fd9\u91cc\u9762\u8fd8\u53ef\u4ee5\u505a\u72b6\u6001\u7801\u7684\u5224\u65ad\uff08404\u5728\u8fd9\u91cc\u662f\u5224\u65ad\u4e0d\u5230\u7684\uff09404\u7f51\u5740\u90fd\u6ca1\u627e\u5230\uff0c\u5c31\u6ca1\u6709\u72b6\u6001\u7801\r\n    if (response.status === 200) {\r\n      console.log("ok");\r\n    } else if (response.status === 500) {\r\n      console.log("\u670d\u52a1\u5668\u9519\u8bef");\r\n    }\r\n    return response;\r\n  },\r\n  function (error) {\r\n    // \u5bf9\u54cd\u5e94\u9519\u8bef\u505a\u70b9\u4ec0\u4e48\r\n    return Promise.reject(error);\r\n  }\r\n);\n'})})]})}function l(n={}){const{wrapper:r}={...(0,t.R)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},28453:(n,r,e)=>{e.d(r,{R:()=>a,x:()=>c});var s=e(96540);const t={},o=s.createContext(t);function a(n){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(o.Provider,{value:r},n.children)}}}]);