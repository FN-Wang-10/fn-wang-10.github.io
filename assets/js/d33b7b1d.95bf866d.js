"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[53355],{62593:(t,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var s=n(85893),e=n(11151);const o={},a=void 0,i={id:"\u5176\u5b83/\u8def\u7531",title:"\u8def\u7531",description:"\u8def\u7531\u6a21\u5f0f",source:"@site/docs/\u5176\u5b83/\u8def\u7531.md",sourceDirName:"\u5176\u5b83",slug:"/\u5176\u5b83/\u8def\u7531",permalink:"/docs/\u5176\u5b83/\u8def\u7531",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"otherSidebar",previous:{title:"\u603b\u7ed3",permalink:"/docs/\u5176\u5b83/\u603b\u7ed3"},next:{title:"\u9996\u5c4f\u52a0\u8f7d\u901f\u5ea6",permalink:"/docs/\u5176\u5b83/\u9996\u5c4f\u52a0\u8f7d\u901f\u5ea6"}},c={},h=[];function u(t){const r={br:"br",code:"code",p:"p",...(0,e.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u8def\u7531\u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","\u2460 \u6b63\u5e38\u60c5\u51b5\u4e0b\u4f7f\u7528 hash \u6a21\u5f0f\uff0c\u627e\u5de5\u4f5c\u4e2d\uff0c\u5982\u679c\u6709\u8981\u6c42\uff0c\u53ef\u4ee5\u627e\u540e\u7aef\u7684\u540c\u4e8b\u914d\u5408",(0,s.jsx)(r.br,{}),"\n","\u2461 \u8bbe\u7f6e\u8def\u7531\u6a21\u5f0f\u4e3a\u5386\u53f2\u6a21\u5f0f(\u4e0d\u5e26#\u53f7)",(0,s.jsx)(r.br,{}),"\n","history \u6a21\u5f0f\uff0c\u5982\u679c\u8981\u653e\u5728\u751f\u4ea7\u73af\u5883\uff08\u653e\u5728\u670d\u52a1\u5668\uff09\uff0c\u9875\u9762\u5237\u65b0\u5c31\u4f1a\u53d8\u6210 404\uff0c\u8fd9\u91cc\u9700\u8981\u540e\u7aef\u914d\u5408",(0,s.jsx)(r.br,{}),"\n",'mode:"history",',(0,s.jsx)(r.br,{}),"\n","\u603b\u7ed3\uff1a",(0,s.jsx)(r.br,{}),"\n","1\uff1ahash \u6a21\u5f0f\uff08vue-router \u9ed8\u8ba4\u6a21\u5f0f URL \u540e\u9762\u5e26#\uff09\u4f7f\u7528 URL \u7684 hash \u503c\u6765\u4f5c\u4e3a\u8def\u7531\uff0c\u652f\u6301\u6240\u6709\u6d4f\u89c8\u5668 \u7f3a\u70b9\uff1a\u53ea\u80fd\u6539\u53d8#\u540e\u9762\u7684\u6765\u5b9e\u73b0\u8def\u7531\u8df3\u8f6c\u3002",(0,s.jsx)(r.br,{}),"\n","2\uff1ahistory \u6a21\u5f0f\uff08\u901a\u8fc7 mode: 'history\u2019\u6765\u6539\u53d8\u4e3a history \u6a21\u5f0f\uff09HTML5 \uff08BOM\uff09History API \u548c\u670d\u52a1\u5668\u914d\u7f6e \u7f3a\u70b9\uff1a\u6015\u5237\u65b0\u5982\u679c\u540e\u7aef\u6ca1\u6709\u5904\u7406\u8fd9\u4e2a\u60c5\u51b5\u7684\u65f6\u5019\u524d\u7aef\u5237\u65b0\u5c31\u662f\u5b9e\u5b9e\u5728\u5728\u7684\u8bf7\u6c42\u670d\u52a1\u5668\u8fd9\u6837\u6d88\u8017\u7684\u65f6\u95f4\u5f88\u591a\u8fd8\u5f88\u6162\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8def\u7531\u6709\u4e09\u79cd\u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","hash \u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","history \u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","abstract \u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","Vue-router \u7684\u4e09\u79cd\u6a21\u5f0f",(0,s.jsx)(r.br,{}),"\n","1\u3001hash",(0,s.jsx)(r.br,{}),"\n","\u3000\u3000\u4f7f\u7528 URL \u7684 hash \u6765\u6a21\u62df\u4e00\u4e2a\u5b8c\u6574\u7684 URL\uff0c\u5f53 URL \u53d1\u751f\u6539\u53d8\u65f6\uff0c\u9875\u9762\u4e0d\u4f1a\u91cd\u65b0\u52a0\u8f7d\uff0c\u5176\u663e\u793a\u7684\u7f51\u7edc\u8def\u5f84\u4e2d\u4f1a\u6709#\u53f7\uff0c\u8fd9\u662f\u6700\u5b89\u5168\u7684\u6a21\u5f0f\uff0c\u56e0\u4e3a\u4ed6\u517c\u5bb9\u6240\u6709\u7684\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668",(0,s.jsx)(r.br,{}),"\n","2\u3001history",(0,s.jsx)(r.br,{}),"\n","\u3000\u3000\u7f8e\u5316\u540e\u7684 hash \u6a21\u5f0f\uff0c\u8def\u5f84\u4e2d\u4f1a\u53bb\u6389#\u3002\u4f9d\u8d56\u4e8e html5 \u7684 history\uff0cpushState API\uff0c\u6240\u4ee5\u8981\u62c5\u5fc3 IE9 \u53ca\u4ee5\u4e0b\u7684\u7248\u672c\u3002\u5e76\u4e14\u8fd8\u5305\u62ec back\u3001forward\u3001go \u4e09\u4e2a\u65b9\u6cd5\uff0c\u5bf9\u5e94\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\u3001\u540e\u9000\u3001\u8df3\u8f6c\u64cd\u4f5c\uff0c\u5c31\u662f\u6d4f\u89c8\u5668\u5de6\u4e0a\u89d2\u7684\u524d\u8fdb\u540e\u9000\u7b49\u6309\u94ae\u8fdb\u884c\u7684\u64cd\u4f5c",(0,s.jsx)(r.br,{}),"\n","3\u3001abstract",(0,s.jsx)(r.br,{}),"\n","\u3000\u3000\u9002\u7528\u4e8e\u6240\u6709 JavaScript \u73af\u5883\uff0c\u4f8b\u5982\u670d\u52a1\u5668\u7aef\u4f7f\u7528 Node.js\u3002\u5982\u679c\u6ca1\u6709\u6d4f\u89c8\u5668 API\uff0c\u8def\u7531\u5668\u5c06\u81ea\u52a8\u88ab\u5f3a\u5236\u8fdb\u5165\u6b64\u6a21\u5f0f\uff0c\u7136\u540e\u5728\r\n",(0,s.jsx)(r.code,{children:"const router = new VueRouter({routes, mode:'hash|history|abstract',})"})]})]})}function d(t={}){const{wrapper:r}={...(0,e.a)(),...t.components};return r?(0,s.jsx)(r,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var s=n(67294);const e={},o=s.createContext(e);function a(t){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(r):{...r,...t}}),[r,t])}function i(t){let r;return r=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:a(t.components),s.createElement(o.Provider,{value:r},t.children)}}}]);