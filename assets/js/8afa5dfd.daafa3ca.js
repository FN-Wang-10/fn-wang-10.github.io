"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[98500],{23240:(s,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>h,metadata:()=>c,toc:()=>r});var e=n(74848),t=n(28453);const h={},l=void 0,c={id:"Git/\u5bf9git stash \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",title:"\u5bf9git stash \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/Git/\u5bf9git stash \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f.md",sourceDirName:"Git",slug:"/Git/\u5bf9git stash \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",permalink:"/docs/Git/\u5bf9git stash \u7684\u7406\u89e3\uff1f\u5e94\u7528\u573a\u666f\uff1f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"gitSidebar",previous:{title:"\u5bf9Git\u7684\u7406\u89e3\uff1f",permalink:"/docs/Git/\u5bf9Git\u7684\u7406\u89e3\uff1f"}},d={},r=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u5982\u4f55\u4f7f\u7528",id:"\u4e8c\u5982\u4f55\u4f7f\u7528",level:2},{value:"git stash",id:"git-stash",level:3},{value:"git stash save",id:"git-stash-save",level:3},{value:"git stash list",id:"git-stash-list",level:3},{value:"git stash pop",id:"git-stash-pop",level:3},{value:"git stash apply",id:"git-stash-apply",level:3},{value:"git stash show",id:"git-stash-show",level:3},{value:"git stash drop",id:"git-stash-drop",level:3},{value:"git stash clear",id:"git-stash-clear",level:3},{value:"\u4e09\u3001\u5e94\u7528\u573a\u666f",id:"\u4e09\u5e94\u7528\u573a\u666f",level:2}];function a(s){const i={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,e.jsx)(i.p,{children:"stash\uff0c\u8bd1\u4e3a\u5b58\u653e\uff0c\u5728 git \u4e2d\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4fdd\u5b58\u5f53\u524d\u5de5\u4f5c\u8fdb\u5ea6\uff0c\u4f1a\u628a\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u7684\u6539\u52a8\u8fdb\u884c\u4fdd\u5b58\uff0c\u8fd9\u4e9b\u4fee\u6539\u4f1a\u4fdd\u5b58\u5728\u4e00\u4e2a\u6808\u4e0a"}),"\n",(0,e.jsx)(i.p,{children:"\u540e\u7eed\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u4efb\u4f55\u5206\u652f\u91cd\u65b0\u5c06\u67d0\u6b21\u7684\u4fee\u6539\u63a8\u51fa\u6765\uff0c\u91cd\u65b0\u5e94\u7528\u8fd9\u4e9b\u66f4\u6539\u7684\u4ee3\u7801"}),"\n",(0,e.jsxs)(i.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,e.jsx)(i.code,{children:"git stash"}),"\u4f1a\u7f13\u5b58\u4e0b\u5217\u72b6\u6001\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u7684\u4fee\u6539\uff08staged changes\uff09"}),"\n",(0,e.jsx)(i.li,{children:"Git \u8ddf\u8e2a\u7684\u4f46\u5e76\u672a\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u7684\u4fee\u6539\uff08unstaged changes\uff09"}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"\u4f46\u4ee5\u4e0b\u72b6\u6001\u7684\u6587\u4ef6\u4e0d\u4f1a\u7f13\u5b58\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5728\u5de5\u4f5c\u76ee\u5f55\u4e2d\u65b0\u7684\u6587\u4ef6\uff08untracked files\uff09"}),"\n",(0,e.jsx)(i.li,{children:"\u88ab\u5ffd\u7565\u7684\u6587\u4ef6\uff08ignored files\uff09"}),"\n"]}),"\n",(0,e.jsxs)(i.p,{children:["\u5982\u679c\u60f3\u8981\u4e0a\u8ff0\u7684\u6587\u4ef6\u90fd\u88ab\u7f13\u5b58\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,e.jsx)(i.code,{children:"-u"}),"\u6216\u8005",(0,e.jsx)(i.code,{children:"--include-untracked"}),"\u53ef\u4ee5\u5de5\u4f5c\u76ee\u5f55\u65b0\u7684\u6587\u4ef6\uff0c\u4f7f\u7528",(0,e.jsx)(i.code,{children:"-a"}),"\u6216\u8005",(0,e.jsx)(i.code,{children:"--all"}),"\u547d\u4ee4\u53ef\u4ee5\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u4fee\u6539"]}),"\n",(0,e.jsx)(i.h2,{id:"\u4e8c\u5982\u4f55\u4f7f\u7528",children:"\u4e8c\u3001\u5982\u4f55\u4f7f\u7528"}),"\n",(0,e.jsxs)(i.p,{children:["\u5173\u4e8e",(0,e.jsx)(i.code,{children:"git stash"}),"\u5e38\u89c1\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash save"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash list"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash pop"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash apply"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash show"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash drop"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"git stash clear"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash",children:"git stash"}),"\n",(0,e.jsx)(i.p,{children:"\u4fdd\u5b58\u5f53\u524d\u5de5\u4f5c\u8fdb\u5ea6\uff0c\u4f1a\u628a\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u7684\u6539\u52a8\u4fdd\u5b58\u8d77\u6765"}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-save",children:"git stash save"}),"\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.code,{children:"git stash save"}),"\u53ef\u4ee5\u7528\u4e8e\u5b58\u50a8\u4fee\u6539.\u5e76\u4e14\u5c06",(0,e.jsx)(i.code,{children:"git"}),"\u7684\u5de5\u4f5c\u72b6\u6001\u5207\u56de\u5230",(0,e.jsx)(i.code,{children:"HEAD"}),"\u4e5f\u5c31\u662f\u4e0a\u4e00\u6b21\u5408\u6cd5\u63d0\u4ea4\u4e0a"]}),"\n",(0,e.jsxs)(i.p,{children:["\u5982\u679c\u7ed9\u5b9a\u5177\u4f53\u7684\u6587\u4ef6\u8def\u5f84,",(0,e.jsx)(i.code,{children:"git stash"}),"\u53ea\u4f1a\u5904\u7406\u8def\u5f84\u4e0b\u7684\u6587\u4ef6.\u5176\u4ed6\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5b58\u50a8\uff0c\u5176\u5b58\u5728\u4e00\u4e9b\u53c2\u6570\uff1a"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"--keep-index \u6216\u8005 -k \u53ea\u4f1a\u5b58\u50a8\u4e3a\u52a0\u5165 git \u7ba1\u7406\u7684\u6587\u4ef6"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"--include-untracked \u4e3a\u8ffd\u8e2a\u7684\u6587\u4ef6\u4e5f\u4f1a\u88ab\u7f13\u5b58,\u5f53\u524d\u7684\u5de5\u4f5c\u7a7a\u95f4\u4f1a\u88ab\u6062\u590d\u4e3a\u5b8c\u5168\u6e05\u7a7a\u7684\u72b6\u6001"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"-a \u6216\u8005 --all \u547d\u4ee4\u53ef\u4ee5\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u4fee\u6539\uff0c\u5305\u62ec\u88ab git \u5ffd\u7565\u7684\u6587\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-list",children:"git stash list"}),"\n",(0,e.jsxs)(i.p,{children:["\u663e\u793a\u4fdd\u5b58\u8fdb\u5ea6\u7684\u5217\u8868\u3002\u4e5f\u5c31\u610f\u5473\u7740\uff0c",(0,e.jsx)(i.code,{children:"git stash"}),"\u547d\u4ee4\u53ef\u4ee5\u591a\u6b21\u6267\u884c\uff0c\u5f53\u591a\u6b21\u4f7f\u7528",(0,e.jsx)(i.code,{children:"git stash"}),"\u547d\u4ee4\u540e\uff0c\u6808\u91cc\u4f1a\u5145\u6ee1\u672a\u63d0\u4ea4\u7684\u4ee3\u7801\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"https://static.vue-js.com/50216dd0-fccf-11eb-bc6f-3f06e1491664.png",alt:""})}),"\n",(0,e.jsxs)(i.p,{children:["\u5176\u4e2d\uff0c",(0,e.jsx)(i.code,{children:"stash@{0}"}),"\u3001",(0,e.jsx)(i.code,{children:"stash@{1}"}),"\u5c31\u662f\u5f53\u524d",(0,e.jsx)(i.code,{children:"stash"}),"\u7684\u540d\u79f0"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-pop",children:"git stash pop"}),"\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.code,{children:"git stash pop"})," \u4ece\u6808\u4e2d\u8bfb\u53d6\u6700\u8fd1\u4e00\u6b21\u4fdd\u5b58\u7684\u5185\u5bb9\uff0c\u4e5f\u5c31\u662f\u6808\u9876\u7684",(0,e.jsx)(i.code,{children:"stash"}),"\u4f1a\u6062\u590d\u5230\u5de5\u4f5c\u533a"]}),"\n",(0,e.jsxs)(i.p,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,e.jsx)(i.code,{children:"git stash pop"})," + ",(0,e.jsx)(i.code,{children:"stash"}),"\u540d\u5b57\u6267\u884c\u6062\u590d\u54ea\u4e2a",(0,e.jsx)(i.code,{children:"stash"}),"\u6062\u590d\u5230\u5f53\u524d\u76ee\u5f55"]}),"\n",(0,e.jsxs)(i.p,{children:["\u5982\u679c\u4ece",(0,e.jsx)(i.code,{children:"stash"}),"\u4e2d\u6062\u590d\u7684\u5185\u5bb9\u548c\u5f53\u524d\u76ee\u5f55\u4e2d\u7684\u5185\u5bb9\u53d1\u751f\u4e86\u51b2\u7a81\uff0c\u5219\u9700\u8981\u624b\u52a8\u4fee\u590d\u51b2\u7a81\u6216\u8005\u521b\u5efa\u65b0\u7684\u5206\u652f\u6765\u89e3\u51b3\u51b2\u7a81"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-apply",children:"git stash apply"}),"\n",(0,e.jsxs)(i.p,{children:["\u5c06\u5806\u6808\u4e2d\u7684\u5185\u5bb9\u5e94\u7528\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u4e0d\u540c\u4e8e",(0,e.jsx)(i.code,{children:"git stash pop"}),"\uff0c\u8be5\u547d\u4ee4\u4e0d\u4f1a\u5c06\u5185\u5bb9\u4ece\u5806\u6808\u4e2d\u5220\u9664"]}),"\n",(0,e.jsx)(i.p,{children:"\u4e5f\u5c31\u8bf4\u8be5\u547d\u4ee4\u80fd\u591f\u5c06\u5806\u6808\u7684\u5185\u5bb9\u591a\u6b21\u5e94\u7528\u5230\u5de5\u4f5c\u76ee\u5f55\u4e2d\uff0c\u9002\u5e94\u4e8e\u591a\u4e2a\u5206\u652f\u7684\u60c5\u51b5"}),"\n",(0,e.jsxs)(i.p,{children:["\u540c\u6837\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,e.jsx)(i.code,{children:"git stash apply"})," + ",(0,e.jsx)(i.code,{children:"stash"}),"\u540d\u5b57\u6267\u884c\u6062\u590d\u54ea\u4e2a",(0,e.jsx)(i.code,{children:"stash"}),"\u6062\u590d\u5230\u5f53\u524d\u76ee\u5f55"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-show",children:"git stash show"}),"\n",(0,e.jsxs)(i.p,{children:["\u67e5\u770b\u5806\u6808\u4e2d\u6700\u65b0\u4fdd\u5b58\u7684",(0,e.jsx)(i.code,{children:"stash"}),"\u548c\u5f53\u524d\u76ee\u5f55\u7684\u5dee\u5f02"]}),"\n",(0,e.jsxs)(i.p,{children:["\u901a\u8fc7\u4f7f\u7528",(0,e.jsx)(i.code,{children:"git stash show -p"}),"\u67e5\u770b\u8be6\u7ec6\u7684\u4e0d\u540c"]}),"\n",(0,e.jsxs)(i.p,{children:["\u901a\u8fc7\u4f7f\u7528",(0,e.jsx)(i.code,{children:"git stash show stash@{1}"}),"\u67e5\u770b\u6307\u5b9a\u7684",(0,e.jsx)(i.code,{children:"stash"}),"\u548c\u5f53\u524d\u76ee\u5f55\u5dee\u5f02"]}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.img,{src:"https://static.vue-js.com/458620a0-fccf-11eb-bc6f-3f06e1491664.png",alt:""})}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-drop",children:"git stash drop"}),"\n",(0,e.jsxs)(i.p,{children:[(0,e.jsx)(i.code,{children:"git stash drop"})," + ",(0,e.jsx)(i.code,{children:"stash"}),"\u540d\u79f0\u8868\u793a\u4ece\u5806\u6808\u4e2d\u79fb\u9664\u67d0\u4e2a\u6307\u5b9a\u7684 stash"]}),"\n",(0,e.jsx)(i.h3,{id:"git-stash-clear",children:"git stash clear"}),"\n",(0,e.jsx)(i.p,{children:"\u5220\u9664\u6240\u6709\u5b58\u50a8\u7684\u8fdb\u5ea6"}),"\n",(0,e.jsx)(i.h2,{id:"\u4e09\u5e94\u7528\u573a\u666f",children:"\u4e09\u3001\u5e94\u7528\u573a\u666f"}),"\n",(0,e.jsx)(i.p,{children:"\u5f53\u4f60\u5728\u9879\u76ee\u7684\u4e00\u90e8\u5206\u4e0a\u5df2\u7ecf\u5de5\u4f5c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u6240\u6709\u4e1c\u897f\u90fd\u8fdb\u5165\u4e86\u6df7\u4e71\u7684\u72b6\u6001\uff0c \u800c\u8fd9\u65f6\u4f60\u60f3\u8981\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u5206\u652f\u6216\u8005\u62c9\u4e0b\u8fdc\u7aef\u7684\u4ee3\u7801\u53bb\u505a\u4e00\u70b9\u522b\u7684\u4e8b\u60c5"}),"\n",(0,e.jsxs)(i.p,{children:["\u4f46\u662f\u4f60\u521b\u5efa\u4e00\u6b21\u672a\u5b8c\u6210\u7684\u4ee3\u7801\u7684",(0,e.jsx)(i.code,{children:"commit"}),"\u63d0\u4ea4\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,e.jsx)(i.code,{children:"git stash"})]}),"\n",(0,e.jsx)(i.p,{children:"\u4f8b\u5982\u4ee5\u4e0b\u573a\u666f\uff1a"}),"\n",(0,e.jsxs)(i.p,{children:["\u5f53\u4f60\u7684\u5f00\u53d1\u8fdb\u884c\u5230\u4e00\u534a,\u4f46\u662f\u4ee3\u7801\u8fd8\u4e0d\u60f3\u8fdb\u884c\u63d0\u4ea4 ,\u7136\u540e\u9700\u8981\u540c\u6b65\u53bb\u5173\u8054\u8fdc\u7aef\u4ee3\u7801\u65f6.\u5982\u679c\u4f60\u672c\u5730\u7684\u4ee3\u7801\u548c\u8fdc\u7aef\u4ee3\u7801\u6ca1\u6709\u51b2\u7a81\u65f6,\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,e.jsx)(i.code,{children:"git pull"}),"\u89e3\u51b3"]}),"\n",(0,e.jsxs)(i.p,{children:["\u4f46\u662f\u5982\u679c\u53ef\u80fd\u53d1\u751f\u51b2\u7a81\u600e\u4e48\u529e.\u76f4\u63a5",(0,e.jsx)(i.code,{children:"git pull"}),"\u4f1a\u62d2\u7edd\u8986\u76d6\u5f53\u524d\u7684\u4fee\u6539\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u4f9d\u6b21\u4f7f\u7528\u4e0b\u8ff0\u7684\u547d\u4ee4\uff1a"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"git stash"}),"\n",(0,e.jsx)(i.li,{children:"git pull"}),"\n",(0,e.jsx)(i.li,{children:"git stash pop"}),"\n"]}),"\n",(0,e.jsxs)(i.p,{children:["\u6216\u8005\u5f53\u4f60\u5f00\u53d1\u5230\u4e00\u534a\uff0c\u73b0\u5728\u8981\u4fee\u6539\u522b\u7684\u5206\u652f\u95ee\u9898\u7684\u65f6\u5019\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,e.jsx)(i.code,{children:"git stash"}),"\u7f13\u5b58\u5f53\u524d\u533a\u57df\u7684\u4ee3\u7801"]}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"git stash\uff1a\u4fdd\u5b58\u5f00\u53d1\u5230\u4e00\u534a\u7684\u4ee3\u7801"}),"\n",(0,e.jsx)(i.li,{children:"git commit -m '\u4fee\u6539\u95ee\u9898'"}),"\n",(0,e.jsx)(i.li,{children:"git stash pop\uff1a\u5c06\u4ee3\u7801\u8ffd\u52a0\u5230\u6700\u65b0\u7684\u63d0\u4ea4\u4e4b\u540e"}),"\n"]})]})}function x(s={}){const{wrapper:i}={...(0,t.R)(),...s.components};return i?(0,e.jsx)(i,{...s,children:(0,e.jsx)(a,{...s})}):a(s)}},28453:(s,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var e=n(96540);const t={},h=e.createContext(t);function l(s){const i=e.useContext(h);return e.useMemo((function(){return"function"==typeof s?s(i):{...i,...s}}),[i,s])}function c(s){let i;return i=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),e.createElement(h.Provider,{value:i},s.children)}}}]);