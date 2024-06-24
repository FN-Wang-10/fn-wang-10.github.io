"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[81333],{68417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>b});var r=n(85893),s=n(11151);const c={},o=void 0,i={id:"React/Fiber\u7b97\u6cd5",title:"Fiber\u7b97\u6cd5",description:"\u5728 react 16 \u4e4b\u540e\u53d1\u5e03\u7684\u4e00\u79cd react \u6838\u5fc3\u7b97\u6cd5",source:"@site/docs/React/Fiber\u7b97\u6cd5.md",sourceDirName:"React",slug:"/React/Fiber\u7b97\u6cd5",permalink:"/docs/React/Fiber\u7b97\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"Fiber\u67b6\u6784",permalink:"/docs/React/Fiber\u67b6\u6784"},next:{title:"Provider \u548c connect\u5206\u522b\u505a\u4e86\u4ec0\u4e48\u4e8b",permalink:"/docs/React/Provider \u548c connect\u5206\u522b\u505a\u4e86\u4ec0\u4e48\u4e8b"}},a={},b=[];function u(e){const t={br:"br",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728 react 16 \u4e4b\u540e\u53d1\u5e03\u7684\u4e00\u79cd react \u6838\u5fc3\u7b97\u6cd5",(0,r.jsx)(t.br,{}),"\n","\u4f8b\uff1a\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u4efb\u52a1\u9700\u8981 2s \u4e2d\u6267\u884c\uff0c\u53ef\u4ee5\u5c06\u5b83\u5206\u6210 10 \u4e2a\u5c0f\u4efb\u52a1\uff0c\u6bcf\u4e00\u4e2a\u4efb\u52a1 200ms,200ms \u4e00\u4e2a\u4efb\u52a1\u7684\u603b\u65f6\u957f\u8fd8\u662f 2s \u5de6\u53f3\uff0c\u5f71\u54cd\u4e0d\u592a\u5927\uff0c\u5f53\u7b2c\u4e00\u4e2a\u5c0f\u4efb\u52a1\u6267\u884c\u5b8c\u65f6\uff0c\u6709\u65f6\u95f4\u53bb\u6267\u884c\u5176\u4ed6\u7684\u4e1c\u897f\u4e86",(0,r.jsx)(t.br,{}),"\n","\u4f8b\uff1a\u661f\u5df4\u514b",(0,r.jsx)(t.br,{}),"\n","\u53bb\u4e70\u661f\u5df4\u514b\uff0c\u524d\u9762\u7ad9\u4e86\u4e00\u4e2a\u4eba\uff0c\u4ed6\u8981 100 \u676f\uff0c\u6309\u7167\u903b\u8f91\uff0c\u6211\u9700\u8981\u7b49\u5f85\u4ed6\u7684 100 \u676f\u5168\u90e8\u505a\u597d\u624d\u8f6e\u5230\u6211\uff0c\u6211\u5c31\u9700\u8981\u7b49\u5f85\u7279\u522b\u4e45",(0,r.jsx)(t.br,{}),"\n","\uff08\u4e3a\u4e86\u4e0d\u8ba9\u540e\u9762\u7684\u6d88\u8d39\u8005\u7b49\u5f85\u5f88\u957f\u7684\u65f6\u95f4\uff0c\u73b0\u5728\u6709\u4e00\u4e2a\u529e\u6cd5\uff09",(0,r.jsx)(t.br,{}),"\n","\u73b0\u5728\u5e97\u4e3b\u53ef\u4ee5\u7ed9\u4ed6 10 \u676f 10 \u676f\u7684\u505a\uff0c\u505a 10 \u4e2a 10 \u676f\uff0c\u5e97\u4e3b\u5148\u7ed9\u4ed6\u505a 10 \u676f\uff0c\u7136\u540e\u95ee\u540e\u9762\u7684\u4eba\uff0c\u6709\u6ca1\u6709\u9700\u8981\u4e00\u676f\u4e24\u676f\u7684\uff0c\u5982\u679c\u6709\u7684\u8bdd\uff0c\u505a\u5b8c\u7b2c\u4e00\u4e2a 10 \u676f\u540e\uff0c\u7ed9\u540e\u9762\u7684\u9700\u8981\u7684\u5c11\u7684\u987e\u5ba2\u5148\u505a\uff0c\u7136\u540e\u518d\u7ed9\u4ed6\u505a 10 \u676f\uff0c\u7136\u540e\u518d\u95ee\u540e\u9762\u7684\u4eba...\u5728\u505a 10 \u676f....\u76f4\u5230 100 \u676f\u505a\u5b8c",(0,r.jsx)(t.br,{}),"\n","\u8fd9\u6837\u5bf9\u540e\u9762\u7684\u987e\u5ba2\u6765\u8bf4\u5c31\u4e0d\u9700\u8981\u7b49\u5f85\u5f88\u957f\u7684\u65f6\u95f4\u4e86\uff0c\u5bf9\u9700\u8981 100 \u676f\u7684\u987e\u5ba2\u6765\u8bf4\u53ef\u80fd\u4e16\u5bb6\u4f1a\u7a0d\u957f\u4e00\u70b9"]}),"\n",(0,r.jsxs)(t.p,{children:["React Fiber \u7684\u65b9\u6cd5\u5176\u5b9e\u5f88\u7b80\u5355\u2014\u2014",(0,r.jsx)(t.strong,{children:"\u5206\u7247"}),"\u3002\u628a\u4e00\u4e2a\u8017\u65f6\u957f\u7684\u4efb\u52a1\u5206\u6210\u5f88\u591a\u5c0f\u7247\uff0c\u6bcf\u4e00\u4e2a\u5c0f\u7247\u7684\u8fd0\u884c\u65f6\u95f4\u5f88\u77ed\uff0c\u867d\u7136\u603b\u65f6\u95f4\u4f9d\u7136\u5f88\u957f\uff0c\u4f46\u662f\u5728\u6bcf\u4e2a\u5c0f\u7247\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u90fd\u7ed9\u5176\u4ed6\u4efb\u52a1\u4e00\u4e2a\u6267\u884c\u7684\u673a\u4f1a\uff0c\u8fd9\u6837\u552f\u4e00\u7684\u7ebf\u7a0b\u5c31\u4e0d\u4f1a\u88ab\u72ec\u5360\uff0c\u5176\u4ed6\u4efb\u52a1\u4f9d\u7136\u6709\u8fd0\u884c\u7684\u673a\u4f1a\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["webkit v8",(0,r.jsx)(t.br,{}),"\n","\u95ee\u9898",(0,r.jsx)(t.br,{}),"\n","JavaScript \u5f15\u64ce\u548c\u9875\u9762\u6e32\u67d3\u5f15\u64ce\u4e24\u4e2a\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u5f53\u5176\u4e2d\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u65f6\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u53ea\u80fd\u6302\u8d77\u7b49\u5f85",(0,r.jsx)(t.br,{}),"\n","\u5982\u679c JavaScript \u7ebf\u7a0b\u957f\u65f6\u95f4\u5730\u5360\u7528\u4e86\u4e3b\u7ebf\u7a0b\uff0c\u90a3\u4e48\u6e32\u67d3\u5c42\u9762\u7684\u66f4\u65b0\u5c31\u4e0d\u5f97\u4e0d\u957f\u65f6\u95f4\u5730\u7b49\u5f85\uff0c\u754c\u9762\u957f\u65f6\u95f4\u4e0d\u66f4\u65b0\uff0c\u4f1a\u5bfc\u81f4\u9875\u9762\u54cd\u5e94\u5ea6\u53d8\u5dee\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u611f\u89c9\u5230\u5361\u987f",(0,r.jsx)(t.br,{}),"\n","\u800c\u8fd9\u4e5f\u6b63\u662f React 15 \u7684 Stack Reconciler \u6240\u9762\u4e34\u7684\u95ee\u9898\uff0c\u5f53 React \u5728\u6e32\u67d3\u7ec4\u4ef6\u65f6\uff0c\u4ece\u5f00\u59cb\u5230\u6e32\u67d3\u5b8c\u6210\u6574\u4e2a\u8fc7\u7a0b\u662f\u4e00\u6c14\u5475\u6210\u7684\uff0c\u65e0\u6cd5\u4e2d\u65ad",(0,r.jsx)(t.br,{}),"\n","\u5982\u679c\u7ec4\u4ef6\u8f83\u5927\uff0c\u90a3\u4e48 js \u7ebf\u7a0b\u4f1a\u4e00\u76f4\u6267\u884c\uff0c\u7136\u540e\u7b49\u5230\u6574\u68f5 VDOM \u6811\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u624d\u4f1a\u4ea4\u7ed9\u6e32\u67d3\u7684\u7ebf\u7a0b",(0,r.jsx)(t.br,{}),"\n","\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u7528\u6237\u4ea4\u4e92\u3001\u52a8\u753b\u7b49\u4efb\u52a1\u65e0\u6cd5\u7acb\u5373\u5f97\u5230\u5904\u7406\uff0c\u5bfc\u81f4\u5361\u987f\u7684\u60c5\u51b5"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},c=r.createContext(s);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);