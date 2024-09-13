"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[52860],{27452:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var d=c(74848),s=c(28453);const l={},r=void 0,i={id:"React/\u865a\u62dfdom\u548c\u771f\u5b9edom\u7684\u533a\u522b",title:"\u865a\u62dfdom\u548c\u771f\u5b9edom\u7684\u533a\u522b",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/React/\u865a\u62dfdom\u548c\u771f\u5b9edom\u7684\u533a\u522b.md",sourceDirName:"React",slug:"/React/\u865a\u62dfdom\u548c\u771f\u5b9edom\u7684\u533a\u522b",permalink:"/docs/React/\u865a\u62dfdom\u548c\u771f\u5b9edom\u7684\u533a\u522b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"\u865a\u62dfdom",permalink:"/docs/React/\u865a\u62dfdom"}},h={},o=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u533a\u522b",id:"\u4e8c\u533a\u522b",level:2},{value:"\u4e09\u3001\u4f18\u7f3a\u70b9",id:"\u4e09\u4f18\u7f3a\u70b9",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,d.jsxs)(n.p,{children:["Real DOM\uff0c\u771f\u5b9e ",(0,d.jsx)(n.code,{children:"DOM"}),"\uff0c\u610f\u601d\u4e3a\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff0c\u662f\u4e00\u4e2a\u7ed3\u6784\u5316\u6587\u672c\u7684\u62bd\u8c61\uff0c\u5728\u9875\u9762\u6e32\u67d3\u51fa\u7684\u6bcf\u4e00\u4e2a\u7ed3\u70b9\u90fd\u662f\u4e00\u4e2a\u771f\u5b9e ",(0,d.jsx)(n.code,{children:"DOM"})," \u7ed3\u6784\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://static.vue-js.com/fc7ba8d0-d302-11eb-85f6-6fac77c0c9b3.png",alt:""})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Virtual Dom"}),"\uff0c\u672c\u8d28\u4e0a\u662f\u4ee5 ",(0,d.jsx)(n.code,{children:"JavaScript"})," \u5bf9\u8c61\u5f62\u5f0f\u5b58\u5728\u7684\u5bf9 ",(0,d.jsx)(n.code,{children:"DOM"})," \u7684\u63cf\u8ff0"]}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})," \u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u66f4\u597d\u5c06\u865a\u62df\u7684\u8282\u70b9\u6e32\u67d3\u5230\u9875\u9762\u89c6\u56fe\u4e2d\uff0c\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})," \u5bf9\u8c61\u7684\u8282\u70b9\u4e0e\u771f\u5b9e ",(0,d.jsx)(n.code,{children:"DOM"})," \u7684\u5c5e\u6027\u4e00\u4e00\u7167\u5e94"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"React"})," \u4e2d\uff0c",(0,d.jsx)(n.code,{children:"JSX"})," \u662f\u5176\u4e00\u5927\u7279\u6027\uff0c\u53ef\u4ee5\u8ba9\u4f60\u5728 ",(0,d.jsx)(n.code,{children:"JS"})," \u4e2d\u901a\u8fc7\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"XML"})," \u7684\u65b9\u5f0f\u53bb\u76f4\u63a5\u58f0\u660e\u754c\u9762\u7684 ",(0,d.jsx)(n.code,{children:"DOM"})," \u7ed3\u6784"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:'// \u521b\u5efa h1 \u6807\u7b7e\uff0c\u53f3\u8fb9\u5343\u4e07\u4e0d\u80fd\u52a0\u5f15\u53f7\r\nconst vDom = <h1>Hello World</h1>;\r\n// \u627e\u5230 <div id="root"></div> \u8282\u70b9\r\nconst root = document.getElementById("root");\r\n// \u628a\u521b\u5efa\u7684 h1 \u6807\u7b7e\u6e32\u67d3\u5230 root \u8282\u70b9\u4e0a\r\nReactDOM.render(vDom, root);\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"ReactDOM.render()"})," \u7528\u4e8e\u5c06\u4f60\u521b\u5efa\u597d\u7684\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})," \u8282\u70b9\u63d2\u5165\u5230\u67d0\u4e2a\u771f\u5b9e\u8282\u70b9\u4e0a\uff0c\u5e76\u6e32\u67d3\u5230\u9875\u9762\u4e0a"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"JSX"})," \u5b9e\u9645\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\uff0c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u4f1a\u88ab ",(0,d.jsx)(n.code,{children:"babel"})," \u8fdb\u884c\u7f16\u8bd1\u8f6c\u5316\u6210 ",(0,d.jsx)(n.code,{children:"JS"})," \u4ee3\u7801\uff0c\u4e0a\u8ff0 ",(0,d.jsx)(n.code,{children:"VDOM"})," \u8f6c\u5316\u4e3a\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-jsx",children:"const vDom = React.createElement(\r\n  'h1'\uff0c\r\n  { className: 'hClass', id: 'hId' },\r\n  'hello world'\r\n)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c",(0,d.jsx)(n.code,{children:"JSX"})," \u5c31\u662f\u4e3a\u4e86\u7b80\u5316\u76f4\u63a5\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"React.createElement()"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6807\u7b7e\u540d\uff0c\u4f8b\u5982 h1\u3001span\u3001table..."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e2a\u5bf9\u8c61\uff0c\u91cc\u9762\u5b58\u7740\u6807\u7b7e\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u4f8b\u5982 id\u3001class \u7b49"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8282\u70b9\u4e2d\u7684\u6587\u672c"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"console.log(VDOM)"}),"\uff0c\u5219\u80fd\u591f\u5f97\u5230\u865a\u62df ",(0,d.jsx)(n.code,{children:"VDOM"})," \u6d88\u606f"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://static.vue-js.com/1716b9a0-d303-11eb-ab90-d9ae814b240d.png",alt:""})}),"\n",(0,d.jsxs)(n.p,{children:["\u6240\u4ee5\u53ef\u4ee5\u5f97\u5230\uff0c",(0,d.jsx)(n.code,{children:"JSX"})," \u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"babel"})," \u7684\u65b9\u5f0f\u8f6c\u5316\u6210 ",(0,d.jsx)(n.code,{children:"React.createElement"})," \u6267\u884c\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u4e8c\u533a\u522b",children:"\u4e8c\u3001\u533a\u522b"}),"\n",(0,d.jsx)(n.p,{children:"\u4e24\u8005\u7684\u533a\u522b\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u865a\u62df DOM \u4e0d\u4f1a\u8fdb\u884c\u6392\u7248\u4e0e\u91cd\u7ed8\u64cd\u4f5c\uff0c\u800c\u771f\u5b9e DOM \u4f1a\u9891\u7e41\u91cd\u6392\u4e0e\u91cd\u7ed8"}),"\n",(0,d.jsx)(n.li,{children:"\u865a\u62df DOM \u7684\u603b\u635f\u8017\u662f\u201c\u865a\u62df DOM \u589e\u5220\u6539+\u771f\u5b9e DOM \u5dee\u5f02\u589e\u5220\u6539+\u6392\u7248\u4e0e\u91cd\u7ed8\u201d\uff0c\u771f\u5b9e DOM \u7684\u603b\u635f\u8017\u662f\u201c\u771f\u5b9e DOM \u5b8c\u5168\u589e\u5220\u6539+\u6392\u7248\u4e0e\u91cd\u7ed8\u201d"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u62ff",(0,d.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484516&idx=1&sn=965a4ce32bf93adb9ed112922c5cb8f5&chksm=fc10c632cb674f2484fdf914d76fba55afcefca3b5adcbe6cf4b0c7fd36e29d0292e8cefceb5&scene=178&cur_album_id=1711105826272116736#rd",children:"\u4ee5\u524d\u6587\u7ae0"}),"\u4e3e\u8fc7\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f20\u7edf\u7684\u539f\u751f ",(0,d.jsx)(n.code,{children:"api"})," \u6216 ",(0,d.jsx)(n.code,{children:"jQuery"})," \u53bb\u64cd\u4f5c ",(0,d.jsx)(n.code,{children:"DOM"})," \u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u4ece\u6784\u5efa ",(0,d.jsx)(n.code,{children:"DOM"})," \u6811\u5f00\u59cb\u4ece\u5934\u5230\u5c3e\u6267\u884c\u4e00\u904d\u6d41\u7a0b"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u4f60\u5728\u4e00\u6b21\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u66f4\u65b0 10 \u4e2a ",(0,d.jsx)(n.code,{children:"DOM"})," \u8282\u70b9\uff0c\u6d4f\u89c8\u5668\u6ca1\u8fd9\u4e48\u667a\u80fd\uff0c\u6536\u5230\u7b2c\u4e00\u4e2a\u66f4\u65b0 ",(0,d.jsx)(n.code,{children:"DOM"})," \u8bf7\u6c42\u540e\uff0c\u5e76\u4e0d\u77e5\u9053\u540e\u7eed\u8fd8\u6709 9 \u6b21\u66f4\u65b0\u64cd\u4f5c\uff0c\u56e0\u6b64\u4f1a\u9a6c\u4e0a\u6267\u884c\u6d41\u7a0b\uff0c\u6700\u7ec8\u6267\u884c 10 \u6b21\u6d41\u7a0b"]}),"\n",(0,d.jsxs)(n.p,{children:["\u800c\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"VNode"}),"\uff0c\u540c\u6837\u66f4\u65b0 10 \u4e2a ",(0,d.jsx)(n.code,{children:"DOM"})," \u8282\u70b9\uff0c\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})," \u4e0d\u4f1a\u7acb\u5373\u64cd\u4f5c ",(0,d.jsx)(n.code,{children:"DOM"}),"\uff0c\u800c\u662f\u5c06\u8fd9 10 \u6b21\u66f4\u65b0\u7684 ",(0,d.jsx)(n.code,{children:"diff"})," \u5185\u5bb9\u4fdd\u5b58\u5230\u672c\u5730\u7684\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"js"})," \u5bf9\u8c61\u4e2d\uff0c\u6700\u7ec8\u5c06\u8fd9\u4e2a ",(0,d.jsx)(n.code,{children:"js"})," \u5bf9\u8c61\u4e00\u6b21\u6027 ",(0,d.jsx)(n.code,{children:"attach"})," \u5230 ",(0,d.jsx)(n.code,{children:"DOM"})," \u6811\u4e0a\uff0c\u907f\u514d\u5927\u91cf\u7684\u65e0\u8c13\u8ba1\u7b97"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4e09\u4f18\u7f3a\u70b9",children:"\u4e09\u3001\u4f18\u7f3a\u70b9"}),"\n",(0,d.jsxs)(n.p,{children:["\u771f\u5b9e ",(0,d.jsx)(n.code,{children:"DOM"})," \u7684\u4f18\u52bf\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6613\u7528"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6548\u7387\u4f4e\uff0c\u89e3\u6790\u901f\u5ea6\u6162\uff0c\u5185\u5b58\u5360\u7528\u91cf\u8fc7\u9ad8"}),"\n",(0,d.jsx)(n.li,{children:"\u6027\u80fd\u5dee\uff1a\u9891\u7e41\u64cd\u4f5c\u771f\u5b9e DOM\uff0c\u6613\u4e8e\u5bfc\u81f4\u91cd\u7ed8\u4e0e\u56de\u6d41"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528\u865a\u62df ",(0,d.jsx)(n.code,{children:"DOM"})," \u7684\u4f18\u52bf\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u7b80\u5355\u65b9\u4fbf\uff1a\u5982\u679c\u4f7f\u7528\u624b\u52a8\u64cd\u4f5c\u771f\u5b9e ",(0,d.jsx)(n.code,{children:"DOM"})," \u6765\u5b8c\u6210\u9875\u9762\uff0c\u7e41\u7410\u53c8\u5bb9\u6613\u51fa\u9519\uff0c\u5728\u5927\u89c4\u6a21\u5e94\u7528\u4e0b\u7ef4\u62a4\u8d77\u6765\u4e5f\u5f88\u56f0\u96be"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6027\u80fd\u65b9\u9762\uff1a\u4f7f\u7528 Virtual DOM\uff0c\u80fd\u591f\u6709\u6548\u907f\u514d\u771f\u5b9e DOM \u6570\u9891\u7e41\u66f4\u65b0\uff0c\u51cf\u5c11\u591a\u6b21\u5f15\u8d77\u91cd\u7ed8\u4e0e\u56de\u6d41\uff0c\u63d0\u9ad8\u6027\u80fd"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u8de8\u5e73\u53f0\uff1aReact \u501f\u52a9\u865a\u62df DOM\uff0c\u5e26\u6765\u4e86\u8de8\u5e73\u53f0\u7684\u80fd\u529b\uff0c\u4e00\u5957\u4ee3\u7801\u591a\u7aef\u8fd0\u884c"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u4e00\u4e9b\u6027\u80fd\u8981\u6c42\u6781\u9ad8\u7684\u5e94\u7528\u4e2d\u865a\u62df DOM \u65e0\u6cd5\u8fdb\u884c\u9488\u5bf9\u6027\u7684\u6781\u81f4\u4f18\u5316"}),"\n",(0,d.jsx)(n.li,{children:"\u9996\u6b21\u6e32\u67d3\u5927\u91cf DOM \u65f6\uff0c\u7531\u4e8e\u591a\u4e86\u4e00\u5c42\u865a\u62df DOM \u7684\u8ba1\u7b97\uff0c\u901f\u5ea6\u6bd4\u6b63\u5e38\u7a0d\u6162"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://juejin.cn/post/6844904052971536391",children:"https://juejin.cn/post/6844904052971536391"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://www.html.cn/qa/other/22832.html",children:"https://www.html.cn/qa/other/22832.html"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>i});var d=c(96540);const s={},l=d.createContext(s);function r(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);