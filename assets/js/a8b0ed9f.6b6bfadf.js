"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[47787],{28420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(85893),t=n(11151);const o={},a=void 0,l={id:"Es6/promise/all\u65b9\u6cd5",title:"all\u65b9\u6cd5",description:"\u7528\u4e8e\u5c06\u591a\u4e2a Promise \u5b9e\u4f8b\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u53ea\u6709\u6570\u7ec4\u91cc\u9762\u7684\u6bcf\u4e2a\u72b6\u6001\u90fd\u53d8\u6210 resolve\uff0c\u5219\u65b0\u7684 Promise \u5b9e\u4f8b\u72b6\u6001\u624d\u4f1a\u53d8\u6210 resolve.\u5426\u5219\u90fd\u662f\u5931\u8d25\u3002\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u5e76\u6839\u636e\u8bf7\u6c42\u987a\u5e8f\u83b7\u53d6\u548c\u4f7f\u7528\u6570\u636e",source:"@site/docs/Es6/promise/all\u65b9\u6cd5.md",sourceDirName:"Es6/promise",slug:"/Es6/promise/all\u65b9\u6cd5",permalink:"/docs/Es6/promise/all\u65b9\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"es6Sidebar",previous:{title:"module",permalink:"/docs/Es6/module"},next:{title:"async\u548cawait",permalink:"/docs/Es6/promise/async\u548cawait"}},i={},c=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2}];function p(e){const r={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"\u7528\u4e8e\u5c06\u591a\u4e2a Promise \u5b9e\u4f8b\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u53ea\u6709\u6570\u7ec4\u91cc\u9762\u7684\u6bcf\u4e2a\u72b6\u6001\u90fd\u53d8\u6210 resolve\uff0c\u5219\u65b0\u7684 Promise \u5b9e\u4f8b\u72b6\u6001\u624d\u4f1a\u53d8\u6210 resolve.\u5426\u5219\u90fd\u662f\u5931\u8d25\u3002\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u5e76\u6839\u636e\u8bf7\u6c42\u987a\u5e8f\u83b7\u53d6\u548c\u4f7f\u7528\u6570\u636e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'Promise.all([p1, p2])\r\n  .then((data) => {\r\n    console.log("then \u6210\u529f", data);\r\n  })\r\n  .catch((err) => {\r\n    console.log("333");\r\n    console.log("err", err);\r\n  });\n'})}),"\n",(0,s.jsx)(r.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,s.jsx)(r.p,{children:"promise.all \u8fdb\u884c 5 \u4e2a\u8bf7\u6c42\uff0c\u82e5\u5176\u4e2d\u4e00\u4e2a\u5931\u8d25\u4e86\uff0c\u600e\u4e48\u8ba9\u5176\u4ed6 4 \u4e2a\u6210\u529f\u8fd4\u56de"}),"\n",(0,s.jsxs)(r.p,{children:["Promise all \u6253\u5305\u51e0\u4e2a\u63a5\u53e3\u4e00\u8d77\u8bf7\u6c42\u3002\r\n\u4f46\u662f\u5176\u4e2d\u5982\u679c\u6709\u4e00\u4e2a\u63a5\u53e3\u5931\u8d25\u4e86\u90a3\u4e48\u5c31\u4e0d\u4f1a\u7ee7\u7eed\u8d70\u4e0b\u53bb\u4e86 \u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u63a5\u53e3\u64cd\u4f5c\uff0c\u5173\u8054\u6027\u592a\u5f3a\u4e86\uff0c",(0,s.jsx)(r.br,{}),"\n","\u9700\u6c42\uff1a \u524d\u9762\u6253\u5305\u7684\u7684\u51e0\u4e2a\u63a5\u53e3\u64cd\u4f5c\u65e0\u8bba\u5931\u8d25\u6216\u8005\u6210\u529f\u51e0\u4e2a\u90fd\u9700\u8981\u8d70\u540e\u9762\u7684\u63a5\u53e3\uff0c\u5c31\u4f1a\u6709\u70b9\u9ebb\u70e6\u4e86\uff0c",(0,s.jsx)(r.br,{}),"\n","\u89e3\u51b3\uff1a\u5728 catch \u91cc\u9762 resolve \u5c31\u884c\u4e86"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'const p1 = new Promise((resolve) => {\r\n  const a = b;\r\n  resolve(a);\r\n}).catch(() => {\r\n  return Promise.resolve("aaab");\r\n});\r\nconst p2 = new Promise((resolve) => {\r\n  const a = 1;\r\n  return resolve(a);\r\n}).catch(() => {\r\n  return Promise.resolve("aaa");\r\n});\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u56e0\u4e3a\u6211\u4eec\u7ecf\u5e38\u4f1a\u4f7f\u7528\u5230\u63a5\u53e3\u7684\u91cd\u590d\u8c03\u7528\u95ee\u9898\u6216\u94fe\u5f0f\u8c03\u7528\u63a5\u53e3\r\nPromise.all \u5f88\u8212\u670d\u7684\u89e3\u51b3\u4e86\u8fd9\u4e9b\u95ee\u9898\r\n\u4f46\u662f Promise.all \u7684\u7279\u6027 \u662f\u4f1a\u6267\u884c\u91cc\u9762\u7684\u6240\u6709\u5f02\u6b65\u64cd\u4f5c\uff0c\u9047\u5230\u629b\u9519\u5c31\u53d6\u6d88\u6267\u884c\uff0c\u5e76\u4e0d\u4f1a\u7ee7\u7eed\u5f80\u4e0b\u6267\u884c\u4e86\u3002\r\n\u6709\u65f6\u6211\u4eec \u9700\u8981\u80fd\u7ee7\u7eed\u6267\u884c\u4e0b\u53bb\u3002\u8fd9\u6837\u4e5f\u662f\u6709\u65b9\u6cd5\u80fd\u5b9e\u73b0\u7684\u2026"}),"\n",(0,s.jsxs)(r.p,{children:["\u4ee3\u7801\u89e3\u51b3\uff1a\u5728 catch \u91cc\u9762 resolve \u5c31\u884c\u4e86",(0,s.jsx)(r.br,{}),"\n","\u6d4b\u8bd5\u4e86\u4e0b\u89e3\u51b3\u65b9\u5f0f\u8fd8\u80fd\u5b9e\u73b0"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'   var p1 = new Promise(resolve => {\r\n       let p1Data = b;\r\n       resolve(p1Data)\r\n   }).catch(err => {\r\n       return Promise.resolve("P1 \u65e0\u6570\u636e")\r\n   })\r\n\r\n   var p2 = new Promise(resolve => {\r\n       let p2Data = \'p2\u7684\u6709\u6570\u636e\';\r\n       resolve(p2Data)\r\n   }).catch(err => {\r\n       return Promise.resolve("P2 \u65e0\u6570\u636e")\r\n   })\r\n\r\n   Promise.all([p1, p2]).then(res => {\r\n       console.log(res);\r\n   }).catch(err => {\r\n       throw new Error("Promise \u6267\u884c\u9519\u8bef", err)\r\n   })\r\n   ```\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://blog.csdn.net/WACBG/article/details/121904161?ops_request_misc=&request_id=&biz_id=102&utm_term=promise.all%20%E8%BF%9B%E8%A1%8C5%E4%B8%AA%E8%AF%B7%E6%B1%82%EF%BC%8C%E8%8B%A5%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E4%BA%86%EF%BC%8C%E6%80%8E%E4%B9%88&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-4-121904161.142%5Ev32%5Epc_rank_34,185%5Ev2%5Etag_show&spm=1018.2226.3001.4187",children:"https://blog.csdn.net/WACBG/article/details/121904161?ops_request_misc=&request_id=&biz_id=102&utm_term=promise.all%20%E8%BF%9B%E8%A1%8C5%E4%B8%AA%E8%AF%B7%E6%B1%82%EF%BC%8C%E8%8B%A5%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E4%BA%86%EF%BC%8C%E6%80%8E%E4%B9%88&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-4-121904161.142^v32^pc_rank_34,185^v2^tag_show&spm=1018.2226.3001.4187"})})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>a});var s=n(67294);const t={},o=s.createContext(t);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);