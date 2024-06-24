"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[51859],{29358:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var c=n(85893),r=n(11151);const o={},d=void 0,i={id:"Node/\u5bf9 Node \u4e2d\u7684 process \u7684\u7406\u89e3\uff1f\u6709\u54ea\u4e9b\u5e38\u7528\u65b9\u6cd5\uff1f",title:"\u5bf9 Node \u4e2d\u7684 process \u7684\u7406\u89e3\uff1f\u6709\u54ea\u4e9b\u5e38\u7528\u65b9\u6cd5\uff1f",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/Node/\u5bf9 Node \u4e2d\u7684 process \u7684\u7406\u89e3\uff1f\u6709\u54ea\u4e9b\u5e38\u7528\u65b9\u6cd5\uff1f.md",sourceDirName:"Node",slug:"/Node/\u5bf9 Node \u4e2d\u7684 process \u7684\u7406\u89e3\uff1f\u6709\u54ea\u4e9b\u5e38\u7528\u65b9\u6cd5\uff1f",permalink:"/docs/Node/\u5bf9 Node \u4e2d\u7684 process \u7684\u7406\u89e3\uff1f\u6709\u54ea\u4e9b\u5e38\u7528\u65b9\u6cd5\uff1f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"nodeSidebar",previous:{title:"\u5bf9 Node \u4e2d\u7684 fs\u6a21\u5757\u7684\u7406\u89e3",permalink:"/docs/Node/\u5bf9 Node \u4e2d\u7684 fs\u6a21\u5757\u7684\u7406\u89e3"},next:{title:"\u5bf9Node.js \u7684\u7406\u89e3\uff1f\u4f18\u7f3a\u70b9\uff1f\u5e94\u7528\u573a\u666f\uff1f",permalink:"/docs/Node/\u5bf9Node.js \u7684\u7406\u89e3\uff1f\u4f18\u7f3a\u70b9\uff1f\u5e94\u7528\u573a\u666f\uff1f"}},l={},t=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u5c5e\u6027\u4e0e\u65b9\u6cd5",id:"\u4e8c\u5c5e\u6027\u4e0e\u65b9\u6cd5",level:2},{value:"process.cwd()",id:"processcwd",level:3},{value:"process.argv",id:"processargv",level:3},{value:"process.env",id:"processenv",level:3},{value:"process.nextTick()",id:"processnexttick",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"process"})," \u5bf9\u8c61\u662f\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u63d0\u4f9b\u4e86\u6709\u5173\u5f53\u524d ",(0,c.jsx)(s.code,{children:"Node.js "}),"\u8fdb\u7a0b\u7684\u4fe1\u606f\u5e76\u5bf9\u5176\u8fdb\u884c\u63a7\u5236\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf"]}),"\n",(0,c.jsx)(s.p,{children:"\u6211\u4eec\u90fd\u77e5\u9053\uff0c\u8fdb\u7a0b\u8ba1\u7b97\u673a\u7cfb\u7edf\u8fdb\u884c\u8d44\u6e90\u5206\u914d\u548c\u8c03\u5ea6\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u662f\u64cd\u4f5c\u7cfb\u7edf\u7ed3\u6784\u7684\u57fa\u7840\uff0c\u662f\u7ebf\u7a0b\u7684\u5bb9\u5668"}),"\n",(0,c.jsxs)(s.p,{children:["\u5f53\u6211\u4eec\u542f\u52a8\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"js"}),"\u6587\u4ef6\uff0c\u5b9e\u9645\u5c31\u662f\u5f00\u542f\u4e86\u4e00\u4e2a\u670d\u52a1\u8fdb\u7a0b\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u62e5\u6709\u81ea\u5df1\u7684\u72ec\u7acb\u7a7a\u95f4\u5730\u5740\u3001\u6570\u636e\u6808\uff0c\u50cf\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u65e0\u6cd5\u8bbf\u95ee\u5f53\u524d\u8fdb\u7a0b\u7684\u53d8\u91cf\u3001\u6570\u636e\u7ed3\u6784\uff0c\u53ea\u6709\u6570\u636e\u901a\u4fe1\u540e\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u624d\u53ef\u4ee5\u6570\u636e\u5171\u4eab"]}),"\n",(0,c.jsxs)(s.p,{children:["\u7531\u4e8e",(0,c.jsx)(s.code,{children:"JavaScript"}),"\u662f\u4e00\u4e2a\u5355\u7ebf\u7a0b\u8bed\u8a00\uff0c\u6240\u4ee5\u901a\u8fc7",(0,c.jsx)(s.code,{children:"node xxx"}),"\u542f\u52a8\u4e00\u4e2a\u6587\u4ef6\u540e\uff0c\u53ea\u6709\u4e00\u6761\u4e3b\u7ebf\u7a0b"]}),"\n",(0,c.jsx)(s.h2,{id:"\u4e8c\u5c5e\u6027\u4e0e\u65b9\u6cd5",children:"\u4e8c\u3001\u5c5e\u6027\u4e0e\u65b9\u6cd5"}),"\n",(0,c.jsxs)(s.p,{children:["\u5173\u4e8e",(0,c.jsx)(s.code,{children:"process"}),"\u5e38\u89c1\u7684\u5c5e\u6027\u6709\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"process.env\uff1a\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982\u901a\u8fc7 `process.env.NODE_ENV \u83b7\u53d6\u4e0d\u540c\u73af\u5883\u9879\u76ee\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,c.jsxs)(s.li,{children:["process.nextTick\uff1a\u8fd9\u4e2a\u5728\u8c08\u53ca ",(0,c.jsx)(s.code,{children:"EventLoop"})," \u65f6\u7ecf\u5e38\u4e3a\u4f1a\u63d0\u5230"]}),"\n",(0,c.jsx)(s.li,{children:"process.pid\uff1a\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b id"}),"\n",(0,c.jsx)(s.li,{children:"process.ppid\uff1a\u5f53\u524d\u8fdb\u7a0b\u5bf9\u5e94\u7684\u7236\u8fdb\u7a0b"}),"\n",(0,c.jsx)(s.li,{children:"process.cwd()\uff1a\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u5de5\u4f5c\u76ee\u5f55\uff0c"}),"\n",(0,c.jsx)(s.li,{children:"process.platform\uff1a\u83b7\u53d6\u5f53\u524d\u8fdb\u7a0b\u8fd0\u884c\u7684\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0"}),"\n",(0,c.jsx)(s.li,{children:"process.uptime()\uff1a\u5f53\u524d\u8fdb\u7a0b\u5df2\u8fd0\u884c\u65f6\u95f4\uff0c\u4f8b\u5982\uff1apm2 \u5b88\u62a4\u8fdb\u7a0b\u7684 uptime \u503c"}),"\n",(0,c.jsx)(s.li,{children:"\u8fdb\u7a0b\u4e8b\u4ef6\uff1a process.on(\u2018uncaughtException\u2019,cb) \u6355\u83b7\u5f02\u5e38\u4fe1\u606f\u3001 process.on(\u2018exit\u2019,cb\uff09\u8fdb\u7a0b\u63a8\u51fa\u76d1\u542c"}),"\n",(0,c.jsx)(s.li,{children:"\u4e09\u4e2a\u6807\u51c6\u6d41\uff1a process.stdout \u6807\u51c6\u8f93\u51fa\u3001 process.stdin \u6807\u51c6\u8f93\u5165\u3001 process.stderr \u6807\u51c6\u9519\u8bef\u8f93\u51fa"}),"\n",(0,c.jsx)(s.li,{children:"process.title \u6307\u5b9a\u8fdb\u7a0b\u540d\u79f0\uff0c\u6709\u7684\u65f6\u5019\u9700\u8981\u7ed9\u8fdb\u7a0b\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u4e0b\u9762\u518d\u7a0d\u5fae\u4ecb\u7ecd\u4e0b\u67d0\u4e9b\u65b9\u6cd5\u7684\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(s.h3,{id:"processcwd",children:"process.cwd()"}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd4\u56de\u5f53\u524d ",(0,c.jsx)(s.code,{children:"Node "}),"\u8fdb\u7a0b\u6267\u884c\u7684\u76ee\u5f55"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e00\u4e2a",(0,c.jsx)(s.code,{children:" Node"})," \u6a21\u5757 ",(0,c.jsx)(s.code,{children:"A"})," \u901a\u8fc7 NPM \u53d1\u5e03\uff0c\u9879\u76ee ",(0,c.jsx)(s.code,{children:"B"})," \u4e2d\u4f7f\u7528\u4e86\u6a21\u5757 ",(0,c.jsx)(s.code,{children:"A"}),"\u3002\u5728 ",(0,c.jsx)(s.code,{children:"A"})," \u4e2d\u9700\u8981\u64cd\u4f5c ",(0,c.jsx)(s.code,{children:"B"})," \u9879\u76ee\u4e0b\u7684\u6587\u4ef6\u65f6\uff0c\u5c31\u53ef\u4ee5\u7528 ",(0,c.jsx)(s.code,{children:"process.cwd()"})," \u6765\u83b7\u53d6 ",(0,c.jsx)(s.code,{children:"B"})," \u9879\u76ee\u7684\u8def\u5f84"]}),"\n",(0,c.jsx)(s.h3,{id:"processargv",children:"process.argv"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u7ec8\u7aef\u901a\u8fc7 Node \u6267\u884c\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"process.argv"})," \u53ef\u4ee5\u83b7\u53d6\u4f20\u5165\u7684\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"0: Node \u8def\u5f84\uff08\u4e00\u822c\u7528\u4e0d\u5230\uff0c\u76f4\u63a5\u5ffd\u7565\uff09"}),"\n",(0,c.jsx)(s.li,{children:"1: \u88ab\u6267\u884c\u7684 JS \u6587\u4ef6\u8def\u5f84\uff08\u4e00\u822c\u7528\u4e0d\u5230\uff0c\u76f4\u63a5\u5ffd\u7565\uff09"}),"\n",(0,c.jsx)(s.li,{children:"2~n: \u771f\u5b9e\u4f20\u5165\u547d\u4ee4\u7684\u53c2\u6570"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6240\u4ee5\uff0c\u6211\u4eec\u53ea\u8981\u4ece ",(0,c.jsx)(s.code,{children:"process.argv[2]"})," \u5f00\u59cb\u83b7\u53d6\u5c31\u597d\u4e86"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const args = process.argv.slice(2);\n"})}),"\n",(0,c.jsx)(s.h3,{id:"processenv",children:"process.env"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b58\u50a8\u5f53\u524d\u73af\u5883\u76f8\u5173\u7684\u6240\u6709\u4fe1\u606f\uff0c\u4e00\u822c\u5f88\u5c11\u76f4\u63a5\u7528\u5230\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e00\u822c\u6211\u4eec\u4f1a\u5728 ",(0,c.jsx)(s.code,{children:"process.env"})," \u4e0a\u6302\u8f7d\u4e00\u4e9b\u53d8\u91cf\u6807\u8bc6\u5f53\u524d\u7684\u73af\u5883\u3002\u6bd4\u5982\u6700\u5e38\u89c1\u7684\u7528 ",(0,c.jsx)(s.code,{children:"process.env.NODE_ENV"})," \u533a\u5206 ",(0,c.jsx)(s.code,{children:"development"})," \u548c ",(0,c.jsx)(s.code,{children:"production"})]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728 ",(0,c.jsx)(s.code,{children:"vue-cli"})," \u7684\u6e90\u7801\u4e2d\u4e5f\u7ecf\u5e38\u4f1a\u770b\u5230 ",(0,c.jsx)(s.code,{children:"process.env.VUE_CLI_DEBUG"})," \u6807\u8bc6\u5f53\u524d\u662f\u4e0d\u662f ",(0,c.jsx)(s.code,{children:"DEBUG"})," \u6a21\u5f0f"]}),"\n",(0,c.jsx)(s.h3,{id:"processnexttick",children:"process.nextTick()"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u77e5\u9053",(0,c.jsx)(s.code,{children:"NodeJs"}),"\u662f\u57fa\u4e8e\u4e8b\u4ef6\u8f6e\u8be2\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u540c\u4e00\u65f6\u95f4\u53ea\u4f1a\u5904\u7406\u4e00\u4ef6\u4e8b\u60c5"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u8fd9\u79cd\u5904\u7406\u6a21\u5f0f\u4e0b\uff0c",(0,c.jsx)(s.code,{children:"process.nextTick()"}),"\u5c31\u662f\u5b9a\u4e49\u51fa\u4e00\u4e2a\u52a8\u4f5c\uff0c\u5e76\u4e14\u8ba9\u8fd9\u4e2a\u52a8\u4f5c\u5728\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u8f6e\u8be2\u7684\u65f6\u95f4\u70b9\u4e0a\u6267\u884c"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\u5c06\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"foo"}),"\u51fd\u6570\u5728\u4e0b\u4e00\u4e2a\u65f6\u95f4\u70b9\u8c03\u7528"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'function foo() {\r\n  console.error("foo");\r\n}\r\n\r\nprocess.nextTick(foo);\r\nconsole.error("bar");\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u8f93\u51fa\u7ed3\u679c\u4e3a",(0,c.jsx)(s.code,{children:"bar"}),"\u3001",(0,c.jsx)(s.code,{children:"foo"})]}),"\n",(0,c.jsx)(s.p,{children:"\u867d\u7136\u4e0b\u8ff0\u65b9\u5f0f\u4e5f\u80fd\u5b9e\u73b0\u540c\u6837\u6548\u679c\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'setTimeout(foo, 0);\r\nconsole.log("bar");\n'})}),"\n",(0,c.jsx)(s.p,{children:"\u4e24\u8005\u533a\u522b\u5728\u4e8e\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"process.nextTick()\u4f1a\u5728\u8fd9\u4e00\u6b21 event loop \u7684 call stack \u6e05\u7a7a\u540e\uff08\u4e0b\u4e00\u6b21 event loop \u5f00\u59cb\u524d\uff09\u518d\u8c03\u7528 callback"}),"\n",(0,c.jsx)(s.li,{children:"setTimeout()\u662f\u5e76\u4e0d\u77e5\u9053\u4ec0\u4e48\u65f6\u5019 call stack \u6e05\u7a7a\u7684\uff0c\u6240\u4ee5\u4f55\u65f6\u8c03\u7528 callback \u51fd\u6570\u662f\u4e0d\u786e\u5b9a\u7684"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"http://nodejs.cn/api/process.html",children:"http://nodejs.cn/api/process.html"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://vue3js.cn/interview/",children:"https://vue3js.cn/interview/"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>d});var c=n(67294);const r={},o=c.createContext(r);function d(e){const s=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(o.Provider,{value:s},e.children)}}}]);