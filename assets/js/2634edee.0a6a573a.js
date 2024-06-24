"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[84764],{30982:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=c(85893),i=c(11151);const r={tags:["Event","\u5b8f\u4efb\u52a1","\u5fae\u4efb\u52a1","EventLoop"]},l=void 0,d={id:"JavaScript/\u5f02\u6b65\u64cd\u4f5c/\u4e8b\u4ef6\u5faa\u73af",title:"\u4e8b\u4ef6\u5faa\u73af",description:"\u4e00\u3001JavaScript \u5355\u7ebf\u7a0b\u673a\u5236",source:"@site/docs/JavaScript/\u5f02\u6b65\u64cd\u4f5c/\u4e8b\u4ef6\u5faa\u73af.md",sourceDirName:"JavaScript/\u5f02\u6b65\u64cd\u4f5c",slug:"/JavaScript/\u5f02\u6b65\u64cd\u4f5c/\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/JavaScript/\u5f02\u6b65\u64cd\u4f5c/\u4e8b\u4ef6\u5faa\u73af",draft:!1,unlisted:!1,tags:[{label:"Event",permalink:"/docs/tags/event"},{label:"\u5b8f\u4efb\u52a1",permalink:"/docs/tags/\u5b8f\u4efb\u52a1"},{label:"\u5fae\u4efb\u52a1",permalink:"/docs/tags/\u5fae\u4efb\u52a1"},{label:"EventLoop",permalink:"/docs/tags/event-loop"}],version:"current",frontMatter:{tags:["Event","\u5b8f\u4efb\u52a1","\u5fae\u4efb\u52a1","EventLoop"]},sidebar:"javascriptSidebar",previous:{title:"setTimeout\u548csetInterval\u7684\u6700\u5c0f\u6267\u884c\u65f6\u95f4",permalink:"/docs/JavaScript/\u5f02\u6b65\u64cd\u4f5c/setTimeout\u548csetInterval\u7684\u6700\u5c0f\u6267\u884c\u65f6\u95f4"},next:{title:"\u4e8b\u4ef6\u8f6e\u8be2Event Loop",permalink:"/docs/JavaScript/\u5f02\u6b65\u64cd\u4f5c/\u4e8b\u4ef6\u8f6e\u8be2Event Loop"}},o={},t=[{value:"\u4e00\u3001JavaScript \u5355\u7ebf\u7a0b\u673a\u5236",id:"\u4e00javascript-\u5355\u7ebf\u7a0b\u673a\u5236",level:2},{value:"\u4e8c\u3001\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1",id:"\u4e8c\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1",level:2},{value:"\u4e09\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af",id:"\u4e09\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af",level:2},{value:"\u56db\u3001\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",id:"\u56db\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",level:2},{value:"\u4e94\u3001async \u4e0e await",id:"\u4e94async-\u4e0e-await",level:2},{value:"async",id:"async",level:3},{value:"await",id:"await",level:3},{value:"\u516d\u3001Node \u548c\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u6709\u4f55\u4e0d\u540c",id:"\u516dnode-\u548c\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u6709\u4f55\u4e0d\u540c",level:2},{value:"1. \u7ebf\u7a0b\u4e0e\u8fdb\u7a0b",id:"1-\u7ebf\u7a0b\u4e0e\u8fdb\u7a0b",level:3},{value:"2. \u6d4f\u89c8\u5668\u4e2d\u7684 Event Loop",id:"2-\u6d4f\u89c8\u5668\u4e2d\u7684-event-loop",level:3},{value:"3. Node \u4e2d\u7684 Event Loop",id:"3-node-\u4e2d\u7684-event-loop",level:3},{value:"4. Node \u4e0e\u6d4f\u89c8\u5668\u7684 Event Loop \u5dee\u5f02",id:"4-node-\u4e0e\u6d4f\u89c8\u5668\u7684-event-loop-\u5dee\u5f02",level:3},{value:"\u4e03\u3001\u6d41\u7a0b\u5206\u6790",id:"\u4e03\u6d41\u7a0b\u5206\u6790",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4e00javascript-\u5355\u7ebf\u7a0b\u673a\u5236",children:"\u4e00\u3001JavaScript \u5355\u7ebf\u7a0b\u673a\u5236"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u6211\u4eec\u90fd\u77e5\u9053\uff0c",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u662f\u4e00\u95e8\u5355\u7ebf\u7a0b\u7684\u8bed\u8a00\uff0c\u6240\u8c13\u5355\u7ebf\u7a0b\u6307\u7684\u662f\u5728",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u5f15\u64ce\u4e2d\u8d1f\u8d23\u89e3\u91ca\u548c\u6267\u884c\u4ee3\u7801\u7684\u7ebf\u7a0b\u53ea\u6709\u4e00\u4e2a\uff0c\u901a\u5e38\u79f0\u4e3a\u4e3b\u7ebf\u7a0b\u3002\u90a3\u4e48\u4e3a\u4ec0\u4e48",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u5fc5\u987b\u662f\u5355\u7ebf\u7a0b\u7684\u8bed\u8a00\uff0c\u800c\u4e0d\u80fd\u50cf\u4ed6\u7684\u8001\u5927\u54e5",(0,s.jsx)(n.code,{children:"Java"}),"\u4e00\u6837\uff0c\u624b\u52a8\u5f00\u542f\u591a\u4e2a\u7ebf\u7a0b\u5462\uff1f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a\u8fd9\u662f\u7531\u4e8e",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u6240\u8fd0\u884c\u7684\u6d4f\u89c8\u5668\u73af\u5883\u51b3\u5b9a\uff0c\u4ed6\u53ea\u80fd\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5982\u679c",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u80fd\u5f00\u542f\u591a\u4e2a\u7ebf\u7a0b\uff0c\u9875\u9762\u4e0a\u6709\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"div"}),"\uff0c\u6211\u4eec\u540c\u65f6\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u6765\u6539\u53d8\u8fd9\u4e2a",(0,s.jsx)(n.code,{children:"div"}),"\u4e2d\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u6700\u7ec8\u8fd9\u4e2a",(0,s.jsx)(n.code,{children:"div"}),"\u4f1a\u53d8\u6210\u4ec0\u4e48\u6837\u5b50\u8c01\u4e5f\u786e\u5b9a\u4e0d\u4e86\uff0c\u6700\u540e\u53ea\u80fd\u542c\u5929\u7531\u547d\uff0c\u770b\u54ea\u4e2a\u7ebf\u7a0b\u662f\u6700\u540e\u4e00\u4e2a\u8fd0\u884c\u7ed3\u675f\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u5b9e",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"Web Worker"}),"\u5f00\u542f\u591a\u7ebf\u7a0b\u662f\u7684\uff0c\u4f46\u662f\u8fd9\u4e2a\u65b0\u5f00\u7ebf\u7a0b\u7684\u529f\u80fd\u88ab\u9650\u5236\u4e86\uff0c\u53ea\u80fd\u505a\u4e00\u4e9b\u6d88\u8017",(0,s.jsx)(n.code,{children:"CPU"}),"\u7684\u903b\u8f91\u8fd0\u7b97\u7b49\uff0c\u6570\u636e\u4f20\u8f93\u4e5f\u662f\u901a\u8fc7\u56de\u8c03\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\uff0c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u7684\u6267\u884c\uff1b\u800c\u4e14\u6700\u6700\u91cd\u8981\u7684\u662f\uff0c",(0,s.jsx)(n.code,{children:"Web Worker"}),"\u4e0d\u80fd\u6765\u64cd\u4f5c",(0,s.jsx)(n.code,{children:"dom"}),"\uff0c\u7b14\u8005\u7ecf\u8fc7\u5c1d\u8bd5\u53d1\u73b0\uff0c\u5728\u65b0\u5f00\u7684\u7ebf\u7a0b\u4e2d\u751a\u81f3\u90fd\u4e0d\u80fd\u83b7\u53d6\u5230",(0,s.jsx)(n.code,{children:"document"}),"\u548c",(0,s.jsx)(n.code,{children:"window"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8c\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1",children:"\u4e8c\u3001\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u662f\u5355\u7ebf\u7a0b\u8fd0\u884c\u7684\uff0c\u6240\u6709\u7684\u4efb\u52a1\u53ea\u80fd\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6392\u961f\u6267\u884c\uff1b\u4f46\u662f\u5982\u679c\u67d0\u4e2a\u4efb\u52a1\u7279\u522b\u8017\u65f6\uff0c\u6bd4\u5982",(0,s.jsx)(n.code,{children:"Ajax"}),"\u8bf7\u6c42\u4e00\u4e2a\u63a5\u53e3\uff0c\u53ef\u80fd 1s \u8fd4\u56de\u7ed3\u679c\uff0c\u4e5f\u53ef\u80fd 10s \u624d\u8fd4\u56de\uff0c\u6709\u5f88\u591a\u7684\u4e0d\u786e\u5b9a\u56e0\u7d20\uff08\u7f51\u7edc\u5ef6\u8fdf\u7b49\uff09\uff1b\u5982\u679c\u8fd9\u4e9b\u4efb\u52a1\u4e5f\u653e\u5230\u4e3b\u7ebf\u7a0b\u4e2d\u53bb\uff0c\u90a3\u4e48\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\uff08\u7528\u6237\u9664\u4e86\u7b49\uff0c\u4e0d\u80fd\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\uff09\u3002\u4e8e\u662f\uff0c\u6d4f\u89c8\u5668\u5c31\u628a\u8fd9\u4e9b\u4efb\u52a1\u5206\u6d3e\u5230\u5f02\u6b65\u4efb\u52a1\u961f\u5217\u4e2d\u53bb\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e09\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af",children:"\u4e09\u3001\u4ec0\u4e48\u662f\u4e8b\u4ef6\u5faa\u73af"}),"\n",(0,s.jsx)(n.p,{children:"\u4e8b\u4ef6\u5faa\u73af\u7684\u6d41\u7a0b\u5927\u81f4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6240\u6709\u4efb\u52a1\u90fd\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u5f62\u6210\u4e00\u4e2a\u6267\u884c\u6808\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u7ebf\u7a0b\u53d1\u73b0\u6709\u5f02\u6b65\u4efb\u52a1\uff0c\u5c31\u5728\u201c\u4efb\u52a1\u961f\u5217\u201d\u4e4b\u4e2d\u52a0\u5165\u4e00\u4e2a\u4efb\u52a1\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u65e6\u201c\u6267\u884c\u6808\u201d\u4e2d\u7684\u6240\u6709\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u7cfb\u7edf\u5c31\u4f1a\u8bfb\u53d6\u201c\u4efb\u52a1\u961f\u5217\u201d\uff08\u5148\u8fdb\u5148\u51fa\u539f\u5219\uff09\u3002\u90a3\u4e9b\u5bf9\u5e94\u7684\u5f02\u6b65\u4efb\u52a1\uff0c\u7ed3\u675f\u7b49\u5f85\u72b6\u6001\uff0c\u8fdb\u5165\u6267\u884c\u6808\u5e76\u5f00\u59cb\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e3b\u7ebf\u7a0b\u4e0d\u65ad\u91cd\u590d\u4e0a\u9762\u7684\u7b2c\u4e09\u6b65\uff0c\u8fd9\u6837\u7684\u4e00\u4e2a\u5faa\u73af\u79f0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u56db\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",children:"\u56db\u3001\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4efb\u52a1\u961f\u5217\u4e2d\u6709\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\uff0c\u90a3\u4e48\u5148\u6267\u884c\u54ea\u4e2a\u4efb\u52a1\u5462\uff1f\u4e8e\u662f\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0c\u4e5f\u8fdb\u884c\u4e86\u7b49\u7ea7\u5212\u5206\uff0c\u5206\u4e3a\u5b8f\u4efb\u52a1",(0,s.jsx)(n.code,{children:"\uff08macrotask\uff09"}),"\u548c\u5fae\u4efb\u52a1",(0,s.jsx)(n.code,{children:"\uff08microtask\uff09"}),"\uff1b\u4e0d\u540c\u7684 API \u6ce8\u518c\u7684\u4efb\u52a1\u4f1a\u4f9d\u6b21\u8fdb\u5165\u81ea\u8eab\u5bf9\u5e94\u7684\u961f\u5217\u4e2d\uff0c\u7136\u540e\u7b49\u5f85\u4e8b\u4ef6\u5faa\u73af\u5c06\u5b83\u4eec\u4f9d\u6b21\u538b\u5165\u6267\u884c\u6808\u4e2d\u6267\u884c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b8f\u4efb\u52a1\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"script(\u6574\u4f53\u4ee3\u7801)"})}),"\n",(0,s.jsx)(n.li,{children:"setTimeout,"}),"\n",(0,s.jsx)(n.li,{children:"setInterval,"}),"\n",(0,s.jsx)(n.li,{children:"setImmediate,"}),"\n",(0,s.jsx)(n.li,{children:"requestAnimationFrame"}),"\n",(0,s.jsx)(n.li,{children:"postMessage"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"I/O"})}),"\n",(0,s.jsx)(n.li,{children:"UI rendering"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5fae\u4efb\u52a1\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"process.nextTick"}),"\n",(0,s.jsx)(n.li,{children:"Promise"}),"\n",(0,s.jsx)(n.li,{children:"Object.observe(\u5df2\u5e9f\u5f03)"}),"\n",(0,s.jsx)(n.li,{children:"MutationObserver(html5 \u65b0\u7279\u6027)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u628a\u6574\u4f53\u7684 JS \u4ee3\u7801\u4e5f\u770b\u6210\u662f\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff0c\u4e3b\u7ebf\u7a0b\u4e5f\u662f\u4ece\u5b8f\u4efb\u52a1\u5f00\u59cb\u7684\u3002\u6211\u4eec\u628a\u4e0a\u9762\u4e8b\u4ef6\u5faa\u73af\u7684\u6b65\u9aa4\u66f4\u65b0\u4e00\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(3213).Z+"",width:"910",height:"859"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u4e00\u4e2a\u5b8f\u4efb\u52a1"}),"\n",(0,s.jsx)(n.li,{children:"\u6267\u884c\u8fc7\u7a0b\u4e2d\u5982\u679c\u9047\u5230\u5fae\u4efb\u52a1\u5c31\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u9047\u5230\u5b8f\u4efb\u52a1\u5c31\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217"}),"\n",(0,s.jsx)(n.li,{children:"\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u68c0\u67e5\u5f53\u524d\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5982\u679c\u6709\uff0c\u5c31\u4f9d\u6b21\u6267\u884c\uff08\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u7ed3\u675f\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u5f00\u59cb\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"process.nextTick"})," \u662f\u4e00\u4e2a\u72ec\u7acb\u4e8e ",(0,s.jsx)(n.code,{children:"eventLoop"})," \u7684\u4efb\u52a1\u961f\u5217\u3002\u5728\u6bcf\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"eventLoop"})," \u9636\u6bb5\u5b8c\u6210\u540e\u4f1a\u53bb\u68c0\u67e5 ",(0,s.jsx)(n.code,{children:"nextTick"})," \u961f\u5217\uff0c\u5982\u679c\u91cc\u9762\u6709\u4efb\u52a1\uff0c\u4f1a\u8ba9\u8fd9\u90e8\u5206\u4efb\u52a1\u4f18\u5148\u4e8e\u5fae\u4efb\u52a1\u6267\u884c\u3002\u662f\u6240\u6709\u5f02\u6b65\u4efb\u52a1\u4e2d\u6700\u5feb\u6267\u884c\u7684\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e94async-\u4e0e-await",children:"\u4e94\u3001async \u4e0e await"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"async"})," \u662f\u5f02\u6b65\u7684\u610f\u601d\uff0c",(0,s.jsx)(n.code,{children:"await "}),"\u5219\u53ef\u4ee5\u7406\u89e3\u4e3a ",(0,s.jsx)(n.code,{children:"async wait"}),"\u3002\u6240\u4ee5\u53ef\u4ee5\u7406\u89e3",(0,s.jsx)(n.code,{children:"async"}),"\u5c31\u662f\u7528\u6765\u58f0\u660e\u4e00\u4e2a\u5f02\u6b65\u65b9\u6cd5\uff0c\u800c ",(0,s.jsx)(n.code,{children:"await "}),"\u662f\u7528\u6765\u7b49\u5f85\u5f02\u6b65\u65b9\u6cd5\u6267\u884c"]}),"\n",(0,s.jsx)(n.h3,{id:"async",children:"async"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"async"}),"\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"promise"}),"\u5bf9\u8c61\uff0c\u4e0b\u9762\u4e24\u79cd\u65b9\u6cd5\u662f\u7b49\u6548\u7684"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function f() {\r\n  return Promise.resolve('TEST');\r\n}\r\n\r\n// asyncF is equivalent to f!\r\nasync function asyncF() {\r\n  return 'TEST';\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"await",children:"await"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"await"}),"\u547d\u4ee4\u540e\u9762\u662f\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Promise "}),"\u5bf9\u8c61\uff0c\u8fd4\u56de\u8be5\u5bf9\u8c61\u7684\u7ed3\u679c\u3002\u5982\u679c\u4e0d\u662f ",(0,s.jsx)(n.code,{children:"Promise "}),"\u5bf9\u8c61\uff0c\u5c31\u76f4\u63a5\u8fd4\u56de\u5bf9\u5e94\u7684\u503c"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"async function f() {\r\n  // \u7b49\u540c\u4e8e\r\n  // return 123\r\n  return await 123;\r\n}\r\nf().then((v) => console.log(v)); // 123\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u7ba1",(0,s.jsx)(n.code,{children:"await"}),"\u540e\u9762\u8ddf\u7740\u7684\u662f\u4ec0\u4e48\uff0c",(0,s.jsx)(n.code,{children:"await"}),"\u90fd\u4f1a\u963b\u585e\u540e\u9762\u7684\u4ee3\u7801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"async function fn1() {\r\n  console.log(1);\r\n  await fn2();\r\n  console.log(2); // \u963b\u585e\r\n}\r\n\r\nasync function fn2() {\r\n  console.log('fn2');\r\n}\r\n\r\nfn1();\r\nconsole.log(3);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"await"})," \u4f1a\u963b\u585e\u4e0b\u9762\u7684\u4ee3\u7801\uff08\u5373\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217\uff09\uff0c\u5148\u6267\u884c ",(0,s.jsx)(n.code,{children:"async "}),"\u5916\u9762\u7684\u540c\u6b65\u4ee3\u7801\uff0c\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\uff0c\u518d\u56de\u5230 ",(0,s.jsx)(n.code,{children:"async"})," \u51fd\u6570\u4e2d\uff0c\u518d\u6267\u884c\u4e4b\u524d\u963b\u585e\u7684\u4ee3\u7801"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u4ee5\u4e0a\u8ff0\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a",(0,s.jsx)(n.code,{children:"1"}),"\uff0c",(0,s.jsx)(n.code,{children:"fn2"}),"\uff0c",(0,s.jsx)(n.code,{children:"3"}),"\uff0c",(0,s.jsx)(n.code,{children:"2"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u516dnode-\u548c\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u6709\u4f55\u4e0d\u540c",children:"\u516d\u3001Node \u548c\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u6709\u4f55\u4e0d\u540c"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u7ebf\u7a0b\u4e0e\u8fdb\u7a0b",children:"1. \u7ebf\u7a0b\u4e0e\u8fdb\u7a0b"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8fdb\u7a0b\u662f CPU \u8d44\u6e90\u5206\u914d\u7684\u6700\u5c0f\u5355\u4f4d\uff1b\u7ebf\u7a0b\u662f CPU \u8c03\u5ea6\u7684\u6700\u5c0f\u5355\u4f4d"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(89081).Z+"",width:"443",height:"162"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8fdb\u7a0b\u597d\u6bd4\u56fe\u4e2d\u7684\u5de5\u5382\uff0c\u6709\u5355\u72ec\u7684\u4e13\u5c5e\u81ea\u5df1\u7684\u5de5\u5382\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7ebf\u7a0b\u597d\u6bd4\u56fe\u4e2d\u7684\u5de5\u4eba\uff0c\u591a\u4e2a\u5de5\u4eba\u5728\u4e00\u4e2a\u5de5\u5382\u4e2d\u534f\u4f5c\u5de5\u4f5c\uff0c\u5de5\u5382\u4e0e\u5de5\u4eba\u662f 1",":n"," \u7684\u5173\u7cfb\u3002\u4e5f\u5c31\u662f\u8bf4",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u7ebf\u7a0b\u7ec4\u6210\uff0c\u7ebf\u7a0b\u662f\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u4ee3\u7801\u7684\u4e0d\u540c\u6267\u884c\u8def\u7ebf"}),"\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5de5\u5382\u7684\u7a7a\u95f4\u662f\u5de5\u4eba\u4eec\u5171\u4eab\u7684\uff0c\u8fd9\u8c61\u5f81",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u7684\u5185\u5b58\u7a7a\u95f4\u662f\u5171\u4eab\u7684\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u53ef\u7528\u8fd9\u4e9b\u5171\u4eab\u5185\u5b58"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u591a\u4e2a\u5de5\u5382\u4e4b\u95f4\u72ec\u7acb\u5b58\u5728\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5 Chrome \u6d4f\u89c8\u5668\u4e2d\u4e3a\u4f8b\uff0c\u5f53\u4f60\u6253\u5f00\u4e00\u4e2a Tab \u9875\u65f6\uff0c\u5176\u5b9e\u5c31\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a\u7ebf\u7a0b\uff0c\u6bd4\u5982\u6e32\u67d3\u7ebf\u7a0b\u3001JS \u5f15\u64ce\u7ebf\u7a0b\u3001HTTP \u8bf7\u6c42\u7ebf\u7a0b\u7b49\u7b49\u3002\u5f53\u4f60\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42\u65f6\uff0c\u5176\u5b9e\u5c31\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u5f53\u8bf7\u6c42\u7ed3\u675f\u540e\uff0c\u8be5\u7ebf\u7a0b\u53ef\u80fd\u5c31\u4f1a\u88ab\u9500\u6bc1\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u5185\u6838\u662f\u591a\u7ebf\u7a0b\uff0c\u5728\u5185\u6838\u63a7\u5236\u4e0b\u5404\u7ebf\u7a0b\u76f8\u4e92\u914d\u5408\u4ee5\u4fdd\u6301\u540c\u6b65\uff0c\u4e00\u4e2a\u6d4f\u89c8\u5668\u901a\u5e38\u7531\u4ee5\u4e0b\u5e38\u9a7b\u7ebf\u7a0b\u7ec4\u6210\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GUI \u6e32\u67d3\u7ebf\u7a0b"}),"\n",(0,s.jsx)(n.li,{children:"JavaScript \u5f15\u64ce\u7ebf\u7a0b"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b"}),"\n",(0,s.jsx)(n.li,{children:"\u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b"}),"\n",(0,s.jsx)(n.li,{children:"\u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u6d4f\u89c8\u5668\u4e2d\u7684-event-loop",children:"2. \u6d4f\u89c8\u5668\u4e2d\u7684 Event Loop"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"|400",src:c(41986).Z+"",width:"786",height:"902"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e00\u5f00\u59cb\u6267\u884c\u6808\u7a7a,\u6211\u4eec\u53ef\u4ee5\u628a",(0,s.jsx)(n.strong,{children:"\u6267\u884c\u6808\u8ba4\u4e3a\u662f\u4e00\u4e2a\u5b58\u50a8\u51fd\u6570\u8c03\u7528\u7684\u6808\u7ed3\u6784\uff0c\u9075\u5faa\u5148\u8fdb\u540e\u51fa\u7684\u539f\u5219"}),"\u3002micro \u961f\u5217\u7a7a\uff0cmacro \u961f\u5217\u91cc\u6709\u4e14\u53ea\u6709\u4e00\u4e2a script \u811a\u672c\uff08\u6574\u4f53\u4ee3\u7801\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5168\u5c40\u4e0a\u4e0b\u6587\uff08script \u6807\u7b7e\uff09\u88ab\u63a8\u5165\u6267\u884c\u6808\uff0c\u540c\u6b65\u4ee3\u7801\u6267\u884c\u3002\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5224\u65ad\u662f\u540c\u6b65\u4efb\u52a1\u8fd8\u662f\u5f02\u6b65\u4efb\u52a1\uff0c\u901a\u8fc7\u5bf9\u4e00\u4e9b\u63a5\u53e3\u7684\u8c03\u7528\uff0c\u53ef\u4ee5\u4ea7\u751f\u65b0\u7684 macro-task \u4e0e micro-task\uff0c\u5b83\u4eec\u4f1a\u5206\u522b\u88ab\u63a8\u5165\u5404\u81ea\u7684\u4efb\u52a1\u961f\u5217\u91cc\u3002\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u4e86\uff0cscript \u811a\u672c\u4f1a\u88ab\u79fb\u51fa macro \u961f\u5217\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u672c\u8d28\u4e0a\u662f\u961f\u5217\u7684 macro-task \u7684\u6267\u884c\u548c\u51fa\u961f\u7684\u8fc7\u7a0b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u4e00\u6b65\u6211\u4eec\u51fa\u961f\u7684\u662f\u4e00\u4e2a macro-task\uff0c\u8fd9\u4e00\u6b65\u6211\u4eec\u5904\u7406\u7684\u662f micro-task\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u5f53 macro-task \u51fa\u961f\u65f6\uff0c\u4efb\u52a1\u662f",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a\u4e00\u4e2a"}),"\u6267\u884c\u7684\uff1b\u800c micro-task \u51fa\u961f\u65f6\uff0c\u4efb\u52a1\u662f",(0,s.jsx)(n.strong,{children:"\u4e00\u961f\u4e00\u961f"}),"\u6267\u884c\u7684\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5904\u7406 micro \u961f\u5217\u8fd9\u4e00\u6b65\uff0c\u4f1a\u9010\u4e2a\u6267\u884c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u5e76\u628a\u5b83\u51fa\u961f\uff0c\u76f4\u5230\u961f\u5217\u88ab\u6e05\u7a7a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6267\u884c\u6e32\u67d3\u64cd\u4f5c\uff0c\u66f4\u65b0\u754c\u9762"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u68c0\u67e5\u662f\u5426\u5b58\u5728 Web worker \u4efb\u52a1\uff0c\u5982\u679c\u6709\uff0c\u5219\u5bf9\u5176\u8fdb\u884c\u5904\u7406"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8ff0\u8fc7\u7a0b\u5faa\u73af\u5f80\u590d\uff0c\u76f4\u5230\u4e24\u4e2a\u961f\u5217\u90fd\u6e05\u7a7a"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-node-\u4e2d\u7684-event-loop",children:"3. Node \u4e2d\u7684 Event Loop"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Node"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"Event Loop"})," \u548c\u6d4f\u89c8\u5668\u4e2d\u7684\u662f\u5b8c\u5168\u4e0d\u76f8\u540c\u7684\u4e1c\u897f\u3002Node.js \u91c7\u7528 V8 \u4f5c\u4e3a js \u7684\u89e3\u6790\u5f15\u64ce\uff0c\u800c I/O \u5904\u7406\u65b9\u9762\u4f7f\u7528\u4e86\u81ea\u5df1\u8bbe\u8ba1\u7684",(0,s.jsx)(n.code,{children:"libuv"}),"\uff0c",(0,s.jsx)(n.code,{children:"libuv"}),"\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u8de8\u5e73\u53f0\u62bd\u8c61\u5c42\uff0c\u5c01\u88c5\u4e86\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u4e00\u4e9b\u5e95\u5c42\u7279\u6027\uff0c\u5bf9\u5916\u63d0\u4f9b\u7edf\u4e00\u7684 API\uff0c\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u4e5f\u662f\u5b83\u91cc\u9762\u7684\u5b9e\u73b0\uff08\u4e0b\u6587\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff09"]}),"\n",(0,s.jsx)(n.p,{children:"Node.js \u7684\u8fd0\u884c\u673a\u5236\u5982\u4e0b:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["V8 \u5f15\u64ce\u89e3\u6790",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u811a\u672c\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u89e3\u6790\u540e\u7684\u4ee3\u7801\uff0c\u8c03\u7528 Node API\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"libuv"}),"\u5e93\u8d1f\u8d23 Node API \u7684\u6267\u884c\u3002\u5b83\u5c06\u4e0d\u540c\u7684\u4efb\u52a1\u5206\u914d\u7ed9\u4e0d\u540c\u7684\u7ebf\u7a0b\uff0c\u5f62\u6210\u4e00\u4e2a Event Loop\uff08\u4e8b\u4ef6\u5faa\u73af\uff09\uff0c\u4ee5\u5f02\u6b65\u7684\u65b9\u5f0f\u5c06\u4efb\u52a1\u7684\u6267\u884c\u7ed3\u679c\u8fd4\u56de\u7ed9 V8 \u5f15\u64ce\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"V8 \u5f15\u64ce\u518d\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c(80773).Z+"",width:"359",height:"331"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u4e0a\u56fe\u4e2d\uff0c\u5927\u81f4\u770b\u51fa node \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af\u7684\u987a\u5e8f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"\u5916\u90e8\u8f93\u5165\u6570\u636e--\x3e\u8f6e\u8be2\u9636\u6bb5(poll)--\x3e\u68c0\u67e5\u9636\u6bb5(check)--\x3e\u5173\u95ed\u4e8b\u4ef6\u56de\u8c03\u9636\u6bb5(close callback)--\x3e\u5b9a\u65f6\u5668\u68c0\u6d4b\u9636\u6bb5(timer)--\x3eI/O \u4e8b\u4ef6\u56de\u8c03\u9636\u6bb5(I/O callbacks)--\x3e\u95f2\u7f6e\u9636\u6bb5(idle, prepare)--\x3e\u8f6e\u8be2\u9636\u6bb5\uff08\u6309\u7167\u8be5\u987a\u5e8f\u53cd\u590d\u8fd0\u884c\uff09..."})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"timers \u9636\u6bb5\uff1a\u8fd9\u4e2a\u9636\u6bb5\u6267\u884c timer\uff08setTimeout\u3001setInterval\uff09\u7684\u56de\u8c03"}),"\n",(0,s.jsx)(n.li,{children:"I/O callbacks \u9636\u6bb5\uff1a\u5904\u7406\u4e00\u4e9b\u4e0a\u4e00\u8f6e\u5faa\u73af\u4e2d\u7684\u5c11\u6570\u672a\u6267\u884c\u7684 I/O \u56de\u8c03"}),"\n",(0,s.jsx)(n.li,{children:"idle, prepare \u9636\u6bb5\uff1a\u4ec5 node \u5185\u90e8\u4f7f\u7528"}),"\n",(0,s.jsx)(n.li,{children:"poll \u9636\u6bb5\uff1a\u83b7\u53d6\u65b0\u7684 I/O \u4e8b\u4ef6, \u9002\u5f53\u7684\u6761\u4ef6\u4e0b node \u5c06\u963b\u585e\u5728\u8fd9\u91cc"}),"\n",(0,s.jsx)(n.li,{children:"check \u9636\u6bb5\uff1a\u6267\u884c setImmediate() \u7684\u56de\u8c03"}),"\n",(0,s.jsx)(n.li,{children:"close callbacks \u9636\u6bb5\uff1a\u6267\u884c socket \u7684 close \u4e8b\u4ef6\u56de\u8c03"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-node-\u4e0e\u6d4f\u89c8\u5668\u7684-event-loop-\u5dee\u5f02",children:"4. Node \u4e0e\u6d4f\u89c8\u5668\u7684 Event Loop \u5dee\u5f02"}),"\n",(0,s.jsx)(n.p,{children:"\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0cmicrotask \u7684\u4efb\u52a1\u961f\u5217\u662f\u6bcf\u4e2a macrotask \u6267\u884c\u5b8c\u4e4b\u540e\u6267\u884c\u3002\u800c\u5728 Node.js \u4e2d\uff0cmicrotask \u4f1a\u5728\u4e8b\u4ef6\u5faa\u73af\u7684\u5404\u4e2a\u9636\u6bb5\u4e4b\u95f4\u6267\u884c\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u9636\u6bb5\u6267\u884c\u5b8c\u6bd5\uff0c\u5c31\u4f1a\u53bb\u6267\u884c microtask \u961f\u5217\u7684\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e03\u6d41\u7a0b\u5206\u6790",children:"\u4e03\u3001\u6d41\u7a0b\u5206\u6790"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u5bf9\u4e0a\u9762\u7684\u4e86\u89e3\uff0c\u6211\u4eec\u5bf9",(0,s.jsx)(n.code,{children:"JavaScript"}),"\u5bf9\u5404\u79cd\u573a\u666f\u7684\u6267\u884c\u987a\u5e8f\u6709\u4e86\u5927\u81f4\u7684\u4e86\u89e3"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u76f4\u63a5\u4e0a\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"async function async1() {\r\n  console.log('async1 start');\r\n  await async2();\r\n  console.log('async1 end');\r\n}\r\nasync function async2() {\r\n  console.log('async2');\r\n}\r\nconsole.log('script start');\r\nsetTimeout(function () {\r\n  console.log('settimeout');\r\n});\r\nasync1();\r\nnew Promise(function (resolve) {\r\n  console.log('promise1');\r\n  resolve();\r\n}).then(function () {\r\n  console.log('promise2');\r\n});\r\nconsole.log('script end');\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5206\u6790\u8fc7\u7a0b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6267\u884c\u6574\u6bb5\u4ee3\u7801\uff0c\u9047\u5230 ",(0,s.jsx)(n.code,{children:"console.log('script start')"})," \u76f4\u63a5\u6253\u5370\u7ed3\u679c\uff0c\u8f93\u51fa ",(0,s.jsx)(n.code,{children:"script start"})]}),"\n",(0,s.jsx)(n.li,{children:"\u9047\u5230\u5b9a\u65f6\u5668\u4e86\uff0c\u5b83\u662f\u5b8f\u4efb\u52a1\uff0c\u5148\u653e\u7740\u4e0d\u6267\u884c"}),"\n",(0,s.jsxs)(n.li,{children:["\u9047\u5230 ",(0,s.jsx)(n.code,{children:"async1()"}),"\uff0c\u6267\u884c ",(0,s.jsx)(n.code,{children:"async1"})," \u51fd\u6570\uff0c\u5148\u6253\u5370 ",(0,s.jsx)(n.code,{children:"async1 start"}),"\uff0c\u4e0b\u9762\u9047\u5230",(0,s.jsx)(n.code,{children:"await"}),"\u600e\u4e48\u529e\uff1f\u5148\u6267\u884c ",(0,s.jsx)(n.code,{children:"async2"}),"\uff0c\u6253\u5370 ",(0,s.jsx)(n.code,{children:"async2"}),"\uff0c\u7136\u540e\u963b\u585e\u4e0b\u9762\u4ee3\u7801\uff08\u5373\u52a0\u5165\u5fae\u4efb\u52a1\u5217\u8868\uff09\uff0c\u8df3\u51fa\u53bb\u6267\u884c\u540c\u6b65\u4ee3\u7801"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8df3\u5230 ",(0,s.jsx)(n.code,{children:"new Promise"})," \u8fd9\u91cc\uff0c\u76f4\u63a5\u6267\u884c\uff0c\u6253\u5370 ",(0,s.jsx)(n.code,{children:"promise1"}),"\uff0c\u4e0b\u9762\u9047\u5230 ",(0,s.jsx)(n.code,{children:".then()"}),"\uff0c\u5b83\u662f\u5fae\u4efb\u52a1\uff0c\u653e\u5230\u5fae\u4efb\u52a1\u5217\u8868\u7b49\u5f85\u6267\u884c"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6700\u540e\u4e00\u884c\u76f4\u63a5\u6253\u5370 ",(0,s.jsx)(n.code,{children:"script end"}),"\uff0c\u73b0\u5728\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u4e86\uff0c\u5f00\u59cb\u6267\u884c\u5fae\u4efb\u52a1\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"await "}),"\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6253\u5370 ",(0,s.jsx)(n.code,{children:"async1 end"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u5fae\u4efb\u52a1\uff0c\u5373\u6267\u884c ",(0,s.jsx)(n.code,{children:"then"})," \u7684\u56de\u8c03\uff0c\u6253\u5370 ",(0,s.jsx)(n.code,{children:"promise2"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e0a\u4e00\u4e2a\u5b8f\u4efb\u52a1\u6240\u6709\u4e8b\u90fd\u505a\u5b8c\u4e86\uff0c\u5f00\u59cb\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff0c\u5c31\u662f\u5b9a\u65f6\u5668\uff0c\u6253\u5370 ",(0,s.jsx)(n.code,{children:"settimeout"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u4ee5\u6700\u540e\u7684\u7ed3\u679c\u662f\uff1a",(0,s.jsx)(n.code,{children:"script start"}),"\u3001",(0,s.jsx)(n.code,{children:"async1 start"}),"\u3001",(0,s.jsx)(n.code,{children:"async2"}),"\u3001",(0,s.jsx)(n.code,{children:"promise1"}),"\u3001",(0,s.jsx)(n.code,{children:"script end"}),"\u3001",(0,s.jsx)(n.code,{children:"async1 end"}),"\u3001",(0,s.jsx)(n.code,{children:"promise2"}),"\u3001",(0,s.jsx)(n.code,{children:"settimeout"})]})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},80773:(e,n,c)=>{c.d(n,{Z:()=>s});const s="data:image/png;base64,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"},89081:(e,n,c)=>{c.d(n,{Z:()=>s});const s=c.p+"assets/images/20210129135856-f9dbda901c0580f1980f4131f5249260.png"},41986:(e,n,c)=>{c.d(n,{Z:()=>s});const s=c.p+"assets/images/20210129140631-8ae0a5f1070d051a002f3edbcc4f5627.png"},3213:(e,n,c)=>{c.d(n,{Z:()=>s});const s=c.p+"assets/images/6e80e5e0-7cb8-11eb-85f6-6fac77c0c9b3-0ad18eb19aaea5468416a90b592c80ab.png"},11151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>l});var s=c(67294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);