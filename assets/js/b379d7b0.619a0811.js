"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[60337],{66049:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var t=n(85893),r=n(11151);const s={sidebar_position:13},c=void 0,d={id:"Git/git reset\u4e0egit revert\u533a\u522b",title:"git reset\u4e0egit revert\u533a\u522b",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/Git/git reset\u4e0egit revert\u533a\u522b.md",sourceDirName:"Git",slug:"/Git/git reset\u4e0egit revert\u533a\u522b",permalink:"/docs/Git/git reset\u4e0egit revert\u533a\u522b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"gitSidebar",previous:{title:"git rebase\u4e0egit merge\u533a\u522b",permalink:"/docs/Git/git rebase\u4e0egit merge\u533a\u522b"},next:{title:"git\u4e2dHEAD\u6307\u5411",permalink:"/docs/Git/Git \u4e2d HEAD\u3001\u5de5\u4f5c\u6811\u548c\u7d22\u5f15\u4e4b\u95f4\u7684\u533a\u522b\uff1f"}},l={},h=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"git reset",id:"git-reset",level:3},{value:"git revert",id:"git-revert",level:3},{value:"\u4e8c\u3001\u5982\u4f55\u7528",id:"\u4e8c\u5982\u4f55\u7528",level:2},{value:"git reset",id:"git-reset-1",level:3},{value:"git revert",id:"git-revert-1",level:3},{value:"\u4e09\u3001\u533a\u522b",id:"\u4e09\u533a\u522b",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,t.jsx)(i.h3,{id:"git-reset",children:"git reset"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"reset"}),"\u7528\u4e8e\u56de\u9000\u7248\u672c\uff0c\u53ef\u4ee5\u9057\u5f03\u4e0d\u518d\u4f7f\u7528\u7684\u63d0\u4ea4"]}),"\n",(0,t.jsx)(i.p,{children:"\u6267\u884c\u9057\u5f03\u65f6\uff0c\u9700\u8981\u6839\u636e\u5f71\u54cd\u7684\u8303\u56f4\u800c\u6307\u5b9a\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9a\u662f\u5426\u590d\u539f\u7d22\u5f15\u6216\u5de5\u4f5c\u6811\u5185\u5bb9"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://static.vue-js.com/ab4d0c00-ff72-11eb-bc6f-3f06e1491664.png",alt:""})}),"\n",(0,t.jsx)(i.h3,{id:"git-revert",children:"git revert"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u5f53\u524d\u63d0\u4ea4\u540e\u9762\uff0c\u65b0\u589e\u4e00\u6b21\u63d0\u4ea4\uff0c\u62b5\u6d88\u6389\u4e0a\u4e00\u6b21\u63d0\u4ea4\u5bfc\u81f4\u7684\u6240\u6709\u53d8\u5316\uff0c\u4e0d\u4f1a\u6539\u53d8\u8fc7\u53bb\u7684\u5386\u53f2\uff0c\u4e3b\u8981\u662f\u7528\u4e8e\u5b89\u5168\u5730\u53d6\u6d88\u8fc7\u53bb\u53d1\u5e03\u7684\u63d0\u4ea4"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://static.vue-js.com/bd12c290-ff72-11eb-991d-334fd31f0201.png",alt:""})}),"\n",(0,t.jsx)(i.h2,{id:"\u4e8c\u5982\u4f55\u7528",children:"\u4e8c\u3001\u5982\u4f55\u7528"}),"\n",(0,t.jsx)(i.h3,{id:"git-reset-1",children:"git reset"}),"\n",(0,t.jsxs)(i.p,{children:["\u5f53\u6ca1\u6709\u6307\u5b9a",(0,t.jsx)(i.code,{children:"ID"}),"\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\u4f7f\u7528",(0,t.jsx)(i.code,{children:"HEAD"}),"\uff0c\u5982\u679c\u6307\u5b9a",(0,t.jsx)(i.code,{children:"ID"}),"\uff0c\u90a3\u4e48\u5c31\u662f\u57fa\u4e8e\u6307\u5411",(0,t.jsx)(i.code,{children:"ID"}),"\u53bb\u53d8\u52a8\u6682\u5b58\u533a\u6216\u5de5\u4f5c\u533a\u7684\u5185\u5bb9"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"// \u6ca1\u6709\u6307\u5b9aID, \u6682\u5b58\u533a\u7684\u5185\u5bb9\u4f1a\u88ab\u5f53\u524dID\u7248\u672c\u53f7\u7684\u5185\u5bb9\u8986\u76d6\uff0c\u5de5\u4f5c\u533a\u4e0d\u53d8\r\ngit reset\r\n\r\n// \u6307\u5b9aID\uff0c\u6682\u5b58\u533a\u7684\u5185\u5bb9\u4f1a\u88ab\u6307\u5b9aID\u7248\u672c\u53f7\u7684\u5185\u5bb9\u8986\u76d6\uff0c\u5de5\u4f5c\u533a\u4e0d\u53d8\r\ngit reset <ID> \n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u65e5\u5fd7",(0,t.jsx)(i.code,{children:"ID"}),"\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\uff0c\u53ef\u4ee5",(0,t.jsx)(i.code,{children:"git log"}),"\u8fdb\u884c\u67e5\u8be2\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"commit a7700083ace1204ccdff9f71631fb34c9913f7c5 (HEAD -> master)\r\nAuthor: linguanghui <linguanghui@baidu.com>\r\nDate:   Tue Aug 17 22:34:40 2021 +0800\r\n\r\n    second commit\r\n\r\ncommit e31118663ce66717edd8a179688a7f3dde5a9393\r\nAuthor: linguanghui <linguanghui@baidu.com>\r\nDate:   Tue Aug 17 22:20:01 2021 +0800\r\n\r\n    first commit\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u5e38\u89c1\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"--mixed\uff08\u9ed8\u8ba4\uff09\uff1a\u9ed8\u8ba4\u7684\u65f6\u5019\uff0c\u53ea\u6709\u6682\u5b58\u533a\u53d8\u5316"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"--hard\u53c2\u6570\uff1a\u5982\u679c\u4f7f\u7528 --hard \u53c2\u6570\uff0c\u90a3\u4e48\u5de5\u4f5c\u533a\u4e5f\u4f1a\u53d8\u5316"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"--soft\uff1a\u5982\u679c\u4f7f\u7528 --soft \u53c2\u6570\uff0c\u90a3\u4e48\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u90fd\u4e0d\u4f1a\u53d8\u5316"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:"https://static.vue-js.com/225b41e0-ff73-11eb-bc6f-3f06e1491664.png",alt:""})}),"\n",(0,t.jsx)(i.h3,{id:"git-revert-1",children:"git revert"}),"\n",(0,t.jsxs)(i.p,{children:["\u8ddf",(0,t.jsx)(i.code,{children:"git reset"}),"\u7528\u6cd5\u57fa\u672c\u4e00\u81f4\uff0c",(0,t.jsx)(i.code,{children:"git revert"})," \u64a4\u9500\u67d0\u6b21\u64cd\u4f5c\uff0c\u6b64\u6b21\u64cd\u4f5c\u4e4b\u524d\u548c\u4e4b\u540e\u7684 ",(0,t.jsx)(i.code,{children:"commit"}),"\u548c",(0,t.jsx)(i.code,{children:"history"}),"\u90fd\u4f1a\u4fdd\u7559\uff0c\u5e76\u4e14\u628a\u8fd9\u6b21\u64a4\u9500\uff0c\u4f5c\u4e3a\u4e00\u6b21\u6700\u65b0\u7684\u63d0\u4ea4\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"git revert <commit_id> \n"})}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u64a4\u9500\u524d\u4e00\u4e2a\u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"git revert HEAD\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u64a4\u9500\u524d\u524d\u4e00\u6b21\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"git revert HEAD^\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u4e09\u533a\u522b",children:"\u4e09\u3001\u533a\u522b"}),"\n",(0,t.jsxs)(i.p,{children:["\u64a4\u9500\uff08revert\uff09\u88ab\u8bbe\u8ba1\u4e3a\u64a4\u9500\u516c\u5f00\u7684\u63d0\u4ea4\uff08\u6bd4\u5982\u5df2\u7ecfpush\uff09\u7684\u5b89\u5168\u65b9\u5f0f\uff0c",(0,t.jsx)(i.code,{children:"git reset"}),"\u88ab\u8bbe\u8ba1\u4e3a\u91cd\u8bbe\u672c\u5730\u66f4\u6539"]}),"\n",(0,t.jsx)(i.p,{children:"\u56e0\u4e3a\u4e24\u4e2a\u547d\u4ee4\u7684\u76ee\u7684\u4e0d\u540c\uff0c\u5b83\u4eec\u7684\u5b9e\u73b0\u4e5f\u4e0d\u4e00\u6837\uff1a\u91cd\u8bbe\u5b8c\u5168\u5730\u79fb\u9664\u4e86\u4e00\u5806\u66f4\u6539\uff0c\u800c\u64a4\u9500\u4fdd\u7559\u4e86\u539f\u6765\u7684\u66f4\u6539\uff0c\u7528\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\u6765\u5b9e\u73b0\u64a4\u9500"}),"\n",(0,t.jsx)(i.p,{children:"\u4e24\u8005\u4e3b\u8981\u533a\u522b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"git revert\u662f\u7528\u4e00\u6b21\u65b0\u7684commit\u6765\u56de\u6eda\u4e4b\u524d\u7684commit\uff0cgit reset\u662f\u76f4\u63a5\u5220\u9664\u6307\u5b9a\u7684commit"}),"\n",(0,t.jsx)(i.li,{children:"git reset \u662f\u628aHEAD\u5411\u540e\u79fb\u52a8\u4e86\u4e00\u4e0b\uff0c\u800cgit revert\u662fHEAD\u7ee7\u7eed\u524d\u8fdb\uff0c\u53ea\u662f\u65b0\u7684commit\u7684\u5185\u5bb9\u548c\u8981revert\u7684\u5185\u5bb9\u6b63\u597d\u76f8\u53cd\uff0c\u80fd\u591f\u62b5\u6d88\u8981\u88abrevert\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(i.li,{children:"\u5728\u56de\u6eda\u8fd9\u4e00\u64cd\u4f5c\u4e0a\u770b\uff0c\u6548\u679c\u5dee\u4e0d\u591a\u3002\u4f46\u662f\u5728\u65e5\u540e\u7ee7\u7eed merge \u4ee5\u524d\u7684\u8001\u7248\u672c\u65f6\u6709\u533a\u522b"}),"\n"]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"git revert\u662f\u7528\u4e00\u6b21\u9006\u5411\u7684commit\u201c\u4e2d\u548c\u201d\u4e4b\u524d\u7684\u63d0\u4ea4\uff0c\u56e0\u6b64\u65e5\u540e\u5408\u5e76\u8001\u7684branch\u65f6\uff0c\u4e4b\u524d\u63d0\u4ea4\u5408\u5e76\u7684\u4ee3\u7801\u4ecd\u7136\u5b58\u5728\uff0c\u5bfc\u81f4\u4e0d\u80fd\u591f\u91cd\u65b0\u5408\u5e76"}),"\n",(0,t.jsx)(i.p,{children:"\u4f46\u662fgit reset\u662f\u4e4b\u95f4\u628a\u67d0\u4e9bcommit\u5728\u67d0\u4e2abranch\u4e0a\u5220\u9664\uff0c\u56e0\u800c\u548c\u8001\u7684branch\u518d\u6b21merge\u65f6\uff0c\u8fd9\u4e9b\u88ab\u56de\u6eda\u7684commit\u5e94\u8be5\u8fd8\u4f1a\u88ab\u5f15\u5165"}),"\n"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\u5982\u679c\u56de\u9000\u5206\u652f\u7684\u4ee3\u7801\u4ee5\u540e\u8fd8\u9700\u8981\u7684\u60c5\u51b5\u5219\u4f7f\u7528",(0,t.jsx)(i.code,{children:"git revert"}),"\uff0c \u5982\u679c\u5206\u652f\u662f\u63d0\u9519\u4e86\u6ca1\u7528\u7684\u5e76\u4e14\u4e0d\u60f3\u8ba9\u522b\u4eba\u53d1\u73b0\u8fd9\u4e9b\u9519\u8bef\u4ee3\u7801\uff0c\u5219\u4f7f\u7528",(0,t.jsx)(i.code,{children:"git reset"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://juejin.cn/post/6844903542931587086",children:"https://juejin.cn/post/6844903542931587086"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset",children:"https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>c});var t=n(67294);const r={},s=t.createContext(r);function c(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);