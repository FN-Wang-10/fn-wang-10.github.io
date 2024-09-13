"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[96671],{64267:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const a={},c=void 0,o={id:"React/setState\u4e4b\u540e\u53d1\u751f\u4e86\u4ec0\u4e48",title:"setState\u4e4b\u540e\u53d1\u751f\u4e86\u4ec0\u4e48",description:"setState \u65b9\u6cd5\u7528\u4e8e\u4fee\u6539 state",source:"@site/docs/React/setState\u4e4b\u540e\u53d1\u751f\u4e86\u4ec0\u4e48.md",sourceDirName:"React",slug:"/React/setState\u4e4b\u540e\u53d1\u751f\u4e86\u4ec0\u4e48",permalink:"/docs/React/setState\u4e4b\u540e\u53d1\u751f\u4e86\u4ec0\u4e48",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"render\u89e6\u53d1\u65f6\u673a",permalink:"/docs/React/render\u89e6\u53d1\u65f6\u673a"},next:{title:"setState\u6267\u884c\u673a\u5236",permalink:"/docs/React/setState\u6267\u884c\u673a\u5236"}},i={},l=[];function d(t){const e={br:"br",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["setState \u65b9\u6cd5\u7528\u4e8e\u4fee\u6539 state",(0,n.jsx)(e.br,{}),"\n","setState \u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u540c\u65f6\u53c8\u4e24\u79cd\u5199\u6cd5",(0,n.jsx)(e.br,{}),"\n","\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u5bf9\u8c61\u6216\u8005\u56de\u8c03\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u4e2d\u53ef\u4ee5\u62ff\u5230\u4fee\u6539\u540e\u7684\u503c",(0,n.jsx)(e.br,{}),"\n","\u5982\u679c\u8bf4\u8981\u4f9d\u8d56\u524d\u4e00\u6b21\u7684\u503c\uff0c\u4f7f\u7528\u56de\u8c03\u51fd\u6570\uff0c\u4e0d\u4f9d\u8d56\u524d\u4e00\u6b21\u7684\u503c\uff0c\u4f7f\u7528\u5bf9\u8c61"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",children:"this.setState({ },()=>{ }).                                                                       .\r\nthis.setState( (prevState)=>{ } , ()=>{ } )\n"})}),"\n",(0,n.jsxs)(e.p,{children:["setState \u662f\u5f02\u6b65\u7684",(0,n.jsx)(e.br,{}),"\n","\u5728 react17 \u7248\u672c\u4e4b\u524d",(0,n.jsx)(e.br,{}),"\n","\u5728\u5408\u6210\u4e8b\u4ef6\u548c\u751f\u547d\u5468\u671f\u4e2d\u662f\u5f02\u6b65\u7684\uff0c\u5728\u5b9a\u65f6\u5668\u548c\u539f\u751f js \u4e8b\u4ef6\u4e2d\u662f\u540c\u6b65\u7684",(0,n.jsx)(e.br,{}),"\n","\u5728 react18 \u7248\u672c\u4e4b\u540e\u5168\u90e8\u90fd\u662f\u5f02\u6b65\u7684"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"React \u4f1a\u5c06\u5f53\u524d\u4f20\u5165\u7684\u5bf9\u8c61\u4e0e\u7ec4\u4ef6\u5f53\u524d\u7684\u72b6\u6001\u5408\u5e76"}),","]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["setState \u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\uff1f",(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.strong,{children:"\u6267\u2f8f\u8fc7\u7a0b\u4ee3\u7801\u540c\u6b65\u7684\uff0c\u53ea\u662f\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u2f26\u51fd\u6570\u7684\u8c03\u2f64\u987a\u5e8f\u5728\u66f4\u65b0\u4e4b\u524d\uff0c\u5bfc\u81f4\u5728\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u2f26\u51fd\u6570\u4e2d\u6ca1\u6cd5\u2f74\u9a6c\u62ff\u5230\u66f4\u65b0\u540e\u7684\u503c"}),"\uff0c\u5f62\u6210\u4e86\u6240\u8c13\u7684\u201c\u5f02\u6b65\u201d\uff0c\u6240\u4ee5\u8868\u73b0\u51fa\u6765\u6709\u65f6\u662f\u540c\u6b65\uff0c\u6709\u65f6\u662f\u201c\u5f02\u6b65\u201d\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u4f55\u65f6\u662f\u540c\u6b65\uff0c\u4f55\u65f6\u662f\u5f02\u6b65\u5462\uff1f",(0,n.jsx)(e.br,{}),"\n","\u53ea\u5728\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u2f26\u51fd\u6570\u4e2d\u662f\u201c\u5f02\u6b65\u201d\u7684\uff0c\u5728\u539f\u2f63\u4e8b\u4ef6\u548c setTimeout/ setInterval \u7b49\u539f\u2f63 API \u4e2d\u90fd\u662f\u540c\u6b65\u7684\u3002\u7b80\u5355\u7684\u53ef\u4ee5\u7406\u89e3\u4e3a\u88ab React \u63a7\u5236\u7684\u51fd\u6570\u2fa5\u2faf\u5c31\u4f1a\u8868\u73b0\u51fa\u201c\u5f02\u6b65\u201d\uff0c\u53cd\u4e4b\u8868\u73b0\u4e3a\u540c\u6b65\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u90a3\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u5f02\u6b65\u7684\u60c5\u51b5\u5462\uff1f",(0,n.jsx)(e.br,{}),"\n",(0,n.jsx)(e.strong,{children:"\u4e3a\u4e86\u505a\u6027\u80fd\u4f18\u5316\uff0c\u5c06 state \u7684\u66f4\u65b0\u5ef6\u7f13\u5230\u6700\u540e\u6279\u91cf\u5408\u5e76\u518d\u53bb\u6e32\u67d3\u5bf9\u4e8e\u5e94\u2f64\u7684\u6027\u80fd\u4f18\u5316\u662f\u6709\u6781\u2f24\u597d\u5904\u7684\uff0c\u5982\u679c\u6bcf\u6b21\u7684\u72b6\u6001\u6539\u53d8\u90fd\u53bb\u91cd\u65b0\u6e32\u67d3\u771f\u5b9e dom\uff0c\u90a3\u4e48\u5b83\u5c06\u5e26\u6765\u5de8\u2f24\u7684\u6027\u80fd\u6d88\u8017"}),"\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u90a3\u5982\u4f55\u5728\u8868\u73b0\u51fa\u5f02\u6b65\u7684\u51fd\u6570\u2fa5\u53ef\u4ee5\u51c6\u786e\u62ff\u5230\u66f4\u65b0\u540e\u7684 state \u5462\uff1f",(0,n.jsx)(e.br,{}),"\n","\u901a\u8fc7\u7b2c\u2f06\u4e2a\u53c2\u6570 setState(partialState, callback) \u4e2d\u7684 callback \u62ff\u5230\u66f4\u65b0\u540e\u7684\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u6bcf\u6b21 setState \u7684\u65f6\u5019\u5c31\u4f1a\u91cd\u65b0\u6e32\u67d3\u4e00\u6b21 dom\uff0c\u4e3a\u4e86\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4f18\u5316\uff0c\u7528\u5f02\u6b65\u7684\u65b9\u6cd5\u628a\u8fd9\u4e9b\u60f3\u8981\u6e32\u67d3\u7684\u503c\u5168\u90e8\u538b\u5230\u6700\u540e\uff0c\u538b\u5230\u6700\u540e",(0,n.jsx)(e.strong,{children:"\u6279\u91cf\u66f4\u65b0"})," state \u7684\u503c\uff0c\u53ea\u5f15\u53d1\u4e86\u4e00\u6b21 dom \u6e32\u67d3\uff0c\u5982\u679c\u662f\u540c\u6b65\u7684\u8bdd\uff0c\u66f4\u65b0\u4e00\u4e2a\uff0c\u7acb\u9a6c\u5c31\u53bb\u6e32\u67d3 dom\uff0c\u592a\u6d6a\u8d39\u6027\u80fd"]}),"\n",(0,n.jsx)(e.p,{children:"setState \u7684\u6279\u91cf\u66f4\u65b0\u4f18\u5316\u4e5f\u662f\u5efa\u7acb\u5728\u201c\u5f02\u6b65\u201d\uff08\u5408\u6210\u4e8b\u4ef6\u3001\u94a9\u5b50\u51fd\u6570\uff09\u4e4b\u4e0a\u7684\uff0c\u5728\u539f\u751f\u4e8b\u4ef6\u548c setTimeout \u4e2d\u4e0d\u4f1a\u6279\u91cf\u66f4\u65b0\uff0c\u5728\u201c\u5f02\u6b65\u201d\u4e2d\u5982\u679c\u5bf9\u540c\u4e00\u4e2a\u503c\u8fdb\u884c\u591a\u6b21 setState \uff0c setState \u7684\u6279\u91cf\u66f4\u65b0\u7b56\u7565\u4f1a\u5bf9\u5176\u8fdb\u884c\u8986\u76d6\uff0c\u53d6\u6700\u540e\u4e00\u6b21\u7684\u6267\u884c\uff0c\u5982\u679c\u662f\u540c\u65f6 setState \u591a\u4e2a\u4e0d\u540c\u7684\u503c\uff0c\u5728\u66f4\u65b0\u65f6\u4f1a\u5bf9\u5176\u8fdb\u884c\u5408\u5e76\u6279\u91cf\u66f4\u65b0\u3002"})]})}function x(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function c(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);