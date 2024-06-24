"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[1482],{34514:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=r(85893),l=r(11151);const c={},s=void 0,d={id:"Vue/\u4f60\u5bf9vue\u7684mixin\u7684\u7406\u89e3\uff0c\u6709\u4ec0\u4e48\u5e94\u7528\u573a\u666f",title:"\u4f60\u5bf9vue\u7684mixin\u7684\u7406\u89e3\uff0c\u6709\u4ec0\u4e48\u5e94\u7528\u573a\u666f",description:"\u4e00\u3001mixin \u662f\u4ec0\u4e48",source:"@site/docs/Vue/\u4f60\u5bf9vue\u7684mixin\u7684\u7406\u89e3\uff0c\u6709\u4ec0\u4e48\u5e94\u7528\u573a\u666f.md",sourceDirName:"Vue",slug:"/Vue/\u4f60\u5bf9vue\u7684mixin\u7684\u7406\u89e3\uff0c\u6709\u4ec0\u4e48\u5e94\u7528\u573a\u666f",permalink:"/docs/Vue/\u4f60\u5bf9vue\u7684mixin\u7684\u7406\u89e3\uff0c\u6709\u4ec0\u4e48\u5e94\u7528\u573a\u666f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"vueSidebar",previous:{title:"\u4f60\u5bf9keep-alive\u7684\u7406\u89e3\u662f\u4ec0\u4e48\uff1f",permalink:"/docs/Vue/\u4f60\u5bf9keep-alive\u7684\u7406\u89e3\u662f\u4ec0\u4e48\uff1f"},next:{title:"\u4f60\u662f\u600e\u4e48\u5904\u7406vue\u9879\u76ee\u4e2d\u7684\u9519\u8bef\u7684\uff1f",permalink:"/docs/Vue/\u4f60\u662f\u600e\u4e48\u5904\u7406vue\u9879\u76ee\u4e2d\u7684\u9519\u8bef\u7684\uff1f"}},t={},a=[{value:"\u4e00\u3001mixin \u662f\u4ec0\u4e48",id:"\u4e00mixin-\u662f\u4ec0\u4e48",level:2},{value:"Vue \u4e2d\u7684 mixin",id:"vue-\u4e2d\u7684-mixin",level:3},{value:"\u5c40\u90e8\u6df7\u5165",id:"\u5c40\u90e8\u6df7\u5165",level:3},{value:"\u5168\u5c40\u6df7\u5165",id:"\u5168\u5c40\u6df7\u5165",level:3},{value:"\u6ce8\u610f\u4e8b\u9879\uff1a",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u4e8c\u3001\u4f7f\u7528\u573a\u666f",id:"\u4e8c\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4e09\u3001\u6e90\u7801\u5206\u6790",id:"\u4e09\u6e90\u7801\u5206\u6790",level:2},{value:"\u66ff\u6362\u578b",id:"\u66ff\u6362\u578b",level:3},{value:"\u5408\u5e76\u578b",id:"\u5408\u5e76\u578b",level:3},{value:"\u961f\u5217\u6027",id:"\u961f\u5217\u6027",level:3},{value:"\u53e0\u52a0\u578b",id:"\u53e0\u52a0\u578b",level:3},{value:"\u5c0f\u7ed3\uff1a",id:"\u5c0f\u7ed3",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u4e00mixin-\u662f\u4ec0\u4e48",children:"\u4e00\u3001mixin \u662f\u4ec0\u4e48"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Mixin"}),"\u662f\u9762\u5411\u5bf9\u8c61\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\u4e2d\u7684\u7c7b\uff0c\u63d0\u4f9b\u4e86\u65b9\u6cd5\u7684\u5b9e\u73b0\u3002\u5176\u4ed6\u7c7b\u53ef\u4ee5\u8bbf\u95ee",(0,i.jsx)(e.code,{children:"mixin"}),"\u7c7b\u7684\u65b9\u6cd5\u800c\u4e0d\u5fc5\u6210\u4e3a\u5176\u5b50\u7c7b"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Mixin"}),"\u7c7b\u901a\u5e38\u4f5c\u4e3a\u529f\u80fd\u6a21\u5757\u4f7f\u7528\uff0c\u5728\u9700\u8981\u8be5\u529f\u80fd\u65f6\u201c\u6df7\u5165\u201d\uff0c\u6709\u5229\u4e8e\u4ee3\u7801\u590d\u7528\u53c8\u907f\u514d\u4e86\u591a\u7ee7\u627f\u7684\u590d\u6742"]}),"\n",(0,i.jsx)(e.h3,{id:"vue-\u4e2d\u7684-mixin",children:"Vue \u4e2d\u7684 mixin"}),"\n",(0,i.jsx)(e.p,{children:"\u5148\u6765\u770b\u4e00\u4e0b\u5b98\u65b9\u5b9a\u4e49"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mixin"}),"\uff08\u6df7\u5165\uff09\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u975e\u5e38\u7075\u6d3b\u7684\u65b9\u5f0f\uff0c\u6765\u5206\u53d1 ",(0,i.jsx)(e.code,{children:"Vue"})," \u7ec4\u4ef6\u4e2d\u7684\u53ef\u590d\u7528\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u672c\u8d28\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"js"}),"\u5bf9\u8c61\uff0c\u5b83\u53ef\u4ee5\u5305\u542b\u6211\u4eec\u7ec4\u4ef6\u4e2d\u4efb\u610f\u529f\u80fd\u9009\u9879\uff0c\u5982",(0,i.jsx)(e.code,{children:"data"}),"\u3001",(0,i.jsx)(e.code,{children:"components"}),"\u3001",(0,i.jsx)(e.code,{children:"methods "}),"\u3001",(0,i.jsx)(e.code,{children:"created"}),"\u3001",(0,i.jsx)(e.code,{children:"computed"}),"\u7b49\u7b49"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u53ea\u8981\u5c06\u5171\u7528\u7684\u529f\u80fd\u4ee5\u5bf9\u8c61\u7684\u65b9\u5f0f\u4f20\u5165 ",(0,i.jsx)(e.code,{children:"mixins"}),"\u9009\u9879\u4e2d\uff0c\u5f53\u7ec4\u4ef6\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"mixins"}),"\u5bf9\u8c61\u65f6\u6240\u6709",(0,i.jsx)(e.code,{children:"mixins"}),"\u5bf9\u8c61\u7684\u9009\u9879\u90fd\u5c06\u88ab\u6df7\u5165\u8be5\u7ec4\u4ef6\u672c\u8eab\u7684\u9009\u9879\u4e2d\u6765"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728",(0,i.jsx)(e.code,{children:"Vue"}),"\u4e2d\u6211\u4eec\u53ef\u4ee5",(0,i.jsx)(e.strong,{children:"\u5c40\u90e8\u6df7\u5165"}),"\u8ddf",(0,i.jsx)(e.strong,{children:"\u5168\u5c40\u6df7\u5165"})]}),"\n",(0,i.jsx)(e.h3,{id:"\u5c40\u90e8\u6df7\u5165",children:"\u5c40\u90e8\u6df7\u5165"}),"\n",(0,i.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"mixin"}),"\u5bf9\u8c61\uff0c\u6709\u7ec4\u4ef6",(0,i.jsx)(e.code,{children:"options"}),"\u7684",(0,i.jsx)(e.code,{children:"data"}),"\u3001",(0,i.jsx)(e.code,{children:"methods"}),"\u5c5e\u6027"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'var myMixin = {\r\n  created: function () {\r\n    this.hello();\r\n  },\r\n  methods: {\r\n    hello: function () {\r\n      console.log("hello from mixin!");\r\n    },\r\n  },\r\n};\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u7ec4\u4ef6\u901a\u8fc7",(0,i.jsx)(e.code,{children:"mixins"}),"\u5c5e\u6027\u8c03\u7528",(0,i.jsx)(e.code,{children:"mixin"}),"\u5bf9\u8c61"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'Vue.component("componentA", {\r\n  mixins: [myMixin],\r\n});\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u8be5\u7ec4\u4ef6\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u6df7\u5408\u4e86",(0,i.jsx)(e.code,{children:"mixin"}),"\u91cc\u9762\u7684\u65b9\u6cd5\uff0c\u5728\u81ea\u52a8\u6267\u884c",(0,i.jsx)(e.code,{children:"created"}),"\u751f\u547d\u94a9\u5b50\uff0c\u6267\u884c",(0,i.jsx)(e.code,{children:"hello"}),"\u65b9\u6cd5"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5168\u5c40\u6df7\u5165",children:"\u5168\u5c40\u6df7\u5165"}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7",(0,i.jsx)(e.code,{children:"Vue.mixin()"}),"\u8fdb\u884c\u5168\u5c40\u7684\u6df7\u5165"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'Vue.mixin({\r\n  created: function () {\r\n    console.log("\u5168\u5c40\u6df7\u5165");\r\n  },\r\n});\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u5168\u5c40\u6df7\u5165\u9700\u8981\u7279\u522b\u6ce8\u610f\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5f71\u54cd\u5230\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff08\u5305\u62ec\u7b2c\u4e09\u65b9\u7ec4\u4ef6\uff09"}),"\n",(0,i.jsx)(e.p,{children:"PS\uff1a\u5168\u5c40\u6df7\u5165\u5e38\u7528\u4e8e\u63d2\u4ef6\u7684\u7f16\u5199"}),"\n",(0,i.jsx)(e.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879\uff1a"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u7ec4\u4ef6\u5b58\u5728\u4e0e",(0,i.jsx)(e.code,{children:"mixin"}),"\u5bf9\u8c61\u76f8\u540c\u7684\u9009\u9879\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u9012\u5f52\u5408\u5e76\u7684\u65f6\u5019\u7ec4\u4ef6\u7684\u9009\u9879\u4f1a\u8986\u76d6",(0,i.jsx)(e.code,{children:"mixin"}),"\u7684\u9009\u9879"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4f46\u662f\u5982\u679c\u76f8\u540c\u9009\u9879\u4e3a\u751f\u547d\u5468\u671f\u94a9\u5b50\u7684\u65f6\u5019\uff0c\u4f1a\u5408\u5e76\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u5148\u6267\u884c",(0,i.jsx)(e.code,{children:"mixin"}),"\u7684\u94a9\u5b50\uff0c\u518d\u6267\u884c\u7ec4\u4ef6\u7684\u94a9\u5b50"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e8c\u4f7f\u7528\u573a\u666f",children:"\u4e8c\u3001\u4f7f\u7528\u573a\u666f"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u65e5\u5e38\u7684\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\u7ecf\u5e38\u4f1a\u9700\u8981\u7528\u5230\u4e00\u4e9b\u76f8\u540c\u6216\u8005\u76f8\u4f3c\u7684\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u7684\u529f\u80fd\u76f8\u5bf9\u72ec\u7acb"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(e.code,{children:"Vue"}),"\u7684",(0,i.jsx)(e.code,{children:"mixin"}),"\u529f\u80fd\u5c06\u76f8\u540c\u6216\u8005\u76f8\u4f3c\u7684\u4ee3\u7801\u63d0\u51fa\u6765"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50"}),"\n",(0,i.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"modal"}),"\u5f39\u7a97\u7ec4\u4ef6\uff0c\u5185\u90e8\u901a\u8fc7",(0,i.jsx)(e.code,{children:"isShowing"}),"\u6765\u63a7\u5236\u663e\u793a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const Modal = {\r\n  template: "#modal",\r\n  data() {\r\n    return {\r\n      isShowing: false,\r\n    };\r\n  },\r\n  methods: {\r\n    toggleShow() {\r\n      this.isShowing = !this.isShowing;\r\n    },\r\n  },\r\n};\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"tooltip"}),"\u63d0\u793a\u6846\uff0c\u5185\u90e8\u901a\u8fc7",(0,i.jsx)(e.code,{children:"isShowing"}),"\u6765\u63a7\u5236\u663e\u793a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const Tooltip = {\r\n  template: "#tooltip",\r\n  data() {\r\n    return {\r\n      isShowing: false,\r\n    };\r\n  },\r\n  methods: {\r\n    toggleShow() {\r\n      this.isShowing = !this.isShowing;\r\n    },\r\n  },\r\n};\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7\u89c2\u5bdf\u4e0a\u9762\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u53d1\u73b0\u4e24\u8005\u7684\u903b\u8f91\u662f\u76f8\u540c\uff0c\u4ee3\u7801\u63a7\u5236\u663e\u793a\u4e5f\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u65f6\u5019",(0,i.jsx)(e.code,{children:"mixin"}),"\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86"]}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\u62bd\u51fa\u5171\u540c\u4ee3\u7801\uff0c\u7f16\u5199\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"mixin"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const toggle = {\r\n  data() {\r\n    return {\r\n      isShowing: false,\r\n    };\r\n  },\r\n  methods: {\r\n    toggleShow() {\r\n      this.isShowing = !this.isShowing;\r\n    },\r\n  },\r\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e24\u4e2a\u7ec4\u4ef6\u5728\u4f7f\u7528\u4e0a\uff0c\u53ea\u9700\u8981\u5f15\u5165",(0,i.jsx)(e.code,{children:"mixin"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'const Modal = {\r\n  template: "#modal",\r\n  mixins: [toggle],\r\n};\r\n\r\nconst Tooltip = {\r\n  template: "#tooltip",\r\n  mixins: [toggle],\r\n};\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7\u4e0a\u9762\u5c0f\u5c0f\u7684\u4f8b\u5b50\uff0c\u8ba9\u6211\u4eec\u77e5\u9053\u4e86",(0,i.jsx)(e.code,{children:"Mixin"}),"\u5bf9\u4e8e\u5c01\u88c5\u4e00\u4e9b\u53ef\u590d\u7528\u7684\u529f\u80fd\u5982\u6b64\u6709\u8da3\u3001\u65b9\u4fbf\u3001\u5b9e\u7528"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e09\u6e90\u7801\u5206\u6790",children:"\u4e09\u3001\u6e90\u7801\u5206\u6790"}),"\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\u4ece",(0,i.jsx)(e.code,{children:"Vue.mixin"}),"\u5165\u624b"]}),"\n",(0,i.jsx)(e.p,{children:"\u6e90\u7801\u4f4d\u7f6e\uff1a/src/core/global-api/mixin.js"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"export function initMixin(Vue: GlobalAPI) {\r\n  Vue.mixin = function (mixin: Object) {\r\n    this.options = mergeOptions(this.options, mixin);\r\n    return this;\r\n  };\r\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4e3b\u8981\u662f\u8c03\u7528",(0,i.jsx)(e.code,{children:"merOptions"}),"\u65b9\u6cd5"]}),"\n",(0,i.jsx)(e.p,{children:"\u6e90\u7801\u4f4d\u7f6e\uff1a/src/core/util/options.js"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"export function mergeOptions(\r\n  parent: Object,\r\n  child: Object,\r\n  vm?: Component\r\n): Object {\r\n  if (child.mixins) {\r\n    // \u5224\u65ad\u6709\u6ca1\u6709mixin \u4e5f\u5c31\u662fmixin\u91cc\u9762\u6302mixin\u7684\u60c5\u51b5 \u6709\u7684\u8bdd\u9012\u5f52\u8fdb\u884c\u5408\u5e76\r\n    for (let i = 0, l = child.mixins.length; i < l; i++) {\r\n      parent = mergeOptions(parent, child.mixins[i], vm);\r\n    }\r\n  }\r\n\r\n  const options = {};\r\n  let key;\r\n  for (key in parent) {\r\n    mergeField(key); // \u5148\u904d\u5386parent\u7684key \u8c03\u5bf9\u5e94\u7684strats[XXX]\u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\r\n  }\r\n  for (key in child) {\r\n    if (!hasOwn(parent, key)) {\r\n      // \u5982\u679cparent\u5df2\u7ecf\u5904\u7406\u8fc7\u67d0\u4e2akey \u5c31\u4e0d\u5904\u7406\u4e86\r\n      mergeField(key); // \u5904\u7406child\u4e2d\u7684key \u4e5f\u5c31parent\u4e2d\u6ca1\u6709\u5904\u7406\u8fc7\u7684key\r\n    }\r\n  }\r\n  function mergeField(key) {\r\n    const strat = strats[key] || defaultStrat;\r\n    options[key] = strat(parent[key], child[key], vm, key); // \u6839\u636e\u4e0d\u540c\u7c7b\u578b\u7684options\u8c03\u7528strats\u4e2d\u4e0d\u540c\u7684\u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\r\n  }\r\n  return options;\r\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u4e0a\u9762\u7684\u6e90\u7801\uff0c\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4f18\u5148\u9012\u5f52\u5904\u7406 ",(0,i.jsx)(e.code,{children:"mixins"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5148\u904d\u5386\u5408\u5e76",(0,i.jsx)(e.code,{children:"parent"})," \u4e2d\u7684",(0,i.jsx)(e.code,{children:"key"}),"\uff0c\u8c03\u7528",(0,i.jsx)(e.code,{children:"mergeField"}),"\u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\uff0c\u7136\u540e\u4fdd\u5b58\u5728\u53d8\u91cf",(0,i.jsx)(e.code,{children:"options"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u518d\u904d\u5386 ",(0,i.jsx)(e.code,{children:"child"}),"\uff0c\u5408\u5e76\u8865\u4e0a ",(0,i.jsx)(e.code,{children:"parent"})," \u4e2d\u6ca1\u6709\u7684",(0,i.jsx)(e.code,{children:"key"}),"\uff0c\u8c03\u7528",(0,i.jsx)(e.code,{children:"mergeField"}),"\u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\uff0c\u4fdd\u5b58\u5728\u53d8\u91cf",(0,i.jsx)(e.code,{children:"options"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"mergeField"})," \u51fd\u6570\u8fdb\u884c\u4e86\u5408\u5e76"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u5173\u4e8e",(0,i.jsx)(e.code,{children:"Vue"}),"\u7684\u51e0\u79cd\u7c7b\u578b\u7684\u5408\u5e76\u7b56\u7565"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u66ff\u6362\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u5408\u5e76\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u961f\u5217\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u53e0\u52a0\u578b"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u66ff\u6362\u578b",children:"\u66ff\u6362\u578b"}),"\n",(0,i.jsxs)(e.p,{children:["\u66ff\u6362\u578b\u5408\u5e76\u6709",(0,i.jsx)(e.code,{children:"props"}),"\u3001",(0,i.jsx)(e.code,{children:"methods"}),"\u3001",(0,i.jsx)(e.code,{children:"inject"}),"\u3001",(0,i.jsx)(e.code,{children:"computed"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"strats.props =\r\n  strats.methods =\r\n  strats.inject =\r\n  strats.computed =\r\n    function (\r\n      parentVal: ?Object,\r\n      childVal: ?Object,\r\n      vm?: Component,\r\n      key: string\r\n    ): ?Object {\r\n      if (!parentVal) return childVal; // \u5982\u679cparentVal\u6ca1\u6709\u503c\uff0c\u76f4\u63a5\u8fd4\u56dechildVal\r\n      const ret = Object.create(null); // \u521b\u5efa\u4e00\u4e2a\u7b2c\u4e09\u65b9\u5bf9\u8c61 ret\r\n      extend(ret, parentVal); // extend\u65b9\u6cd5\u5b9e\u9645\u662f\u628aparentVal\u7684\u5c5e\u6027\u590d\u5236\u5230ret\u4e2d\r\n      if (childVal) extend(ret, childVal); // \u628achildVal\u7684\u5c5e\u6027\u590d\u5236\u5230ret\u4e2d\r\n      return ret;\r\n    };\r\nstrats.provide = mergeDataOrFn;\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u540c\u540d\u7684",(0,i.jsx)(e.code,{children:"props"}),"\u3001",(0,i.jsx)(e.code,{children:"methods"}),"\u3001",(0,i.jsx)(e.code,{children:"inject"}),"\u3001",(0,i.jsx)(e.code,{children:"computed"}),"\u4f1a\u88ab\u540e\u6765\u8005\u4ee3\u66ff"]}),"\n",(0,i.jsx)(e.h3,{id:"\u5408\u5e76\u578b",children:"\u5408\u5e76\u578b"}),"\n",(0,i.jsxs)(e.p,{children:["\u548c\u5e76\u578b\u5408\u5e76\u6709\uff1a",(0,i.jsx)(e.code,{children:"data"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'strats.data = function (parentVal, childVal, vm) {\r\n  return mergeDataOrFn(parentVal, childVal, vm);\r\n};\r\n\r\nfunction mergeDataOrFn(parentVal, childVal, vm) {\r\n  return function mergedInstanceDataFn() {\r\n    var childData = childVal.call(vm, vm); // \u6267\u884cdata\u6302\u7684\u51fd\u6570\u5f97\u5230\u5bf9\u8c61\r\n    var parentData = parentVal.call(vm, vm);\r\n    if (childData) {\r\n      return mergeData(childData, parentData); // \u5c062\u4e2a\u5bf9\u8c61\u8fdb\u884c\u5408\u5e76\r\n    } else {\r\n      return parentData; // \u5982\u679c\u6ca1\u6709childData \u76f4\u63a5\u8fd4\u56deparentData\r\n    }\r\n  };\r\n}\r\n\r\nfunction mergeData(to, from) {\r\n  if (!from) return to;\r\n  var key, toVal, fromVal;\r\n  var keys = Object.keys(from);\r\n  for (var i = 0; i < keys.length; i++) {\r\n    key = keys[i];\r\n    toVal = to[key];\r\n    fromVal = from[key];\r\n    // \u5982\u679c\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5c31\u91cd\u65b0\u8bbe\u7f6e\r\n    if (!to.hasOwnProperty(key)) {\r\n      set(to, key, fromVal);\r\n    }\r\n    // \u5b58\u5728\u76f8\u540c\u5c5e\u6027\uff0c\u5408\u5e76\u5bf9\u8c61\r\n    else if (typeof toVal == "object" && typeof fromVal == "object") {\r\n      mergeData(toVal, fromVal);\r\n    }\r\n  }\r\n  return to;\r\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mergeData"}),"\u51fd\u6570\u904d\u5386\u4e86\u8981\u5408\u5e76\u7684 data \u7684\u6240\u6709\u5c5e\u6027\uff0c\u7136\u540e\u6839\u636e\u4e0d\u540c\u60c5\u51b5\u8fdb\u884c\u5408\u5e76\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5f53\u76ee\u6807 data \u5bf9\u8c61\u4e0d\u5305\u542b\u5f53\u524d\u5c5e\u6027\u65f6\uff0c\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"set"})," \u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\uff08set \u65b9\u6cd5\u5176\u5b9e\u5c31\u662f\u4e00\u4e9b\u5408\u5e76\u91cd\u65b0\u8d4b\u503c\u7684\u65b9\u6cd5\uff09"]}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u76ee\u6807 data \u5bf9\u8c61\u5305\u542b\u5f53\u524d\u5c5e\u6027\u5e76\u4e14\u5f53\u524d\u503c\u4e3a\u7eaf\u5bf9\u8c61\u65f6\uff0c\u9012\u5f52\u5408\u5e76\u5f53\u524d\u5bf9\u8c61\u503c\uff0c\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u9632\u6b62\u5bf9\u8c61\u5b58\u5728\u65b0\u589e\u5c5e\u6027"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u961f\u5217\u6027",children:"\u961f\u5217\u6027"}),"\n",(0,i.jsxs)(e.p,{children:["\u961f\u5217\u6027\u5408\u5e76\u6709\uff1a\u5168\u90e8\u751f\u547d\u5468\u671f\u548c",(0,i.jsx)(e.code,{children:"watch"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"function mergeHook(\r\n  parentVal: ?Array<Function>,\r\n  childVal: ?Function | ?Array<Function>\r\n): ?Array<Function> {\r\n  return childVal\r\n    ? parentVal\r\n      ? parentVal.concat(childVal)\r\n      : Array.isArray(childVal)\r\n      ? childVal\r\n      : [childVal]\r\n    : parentVal;\r\n}\r\n\r\nLIFECYCLE_HOOKS.forEach((hook) => {\r\n  strats[hook] = mergeHook;\r\n});\r\n\r\n// watch\r\nstrats.watch = function (parentVal, childVal, vm, key) {\r\n  // work around Firefox's Object.prototype.watch...\r\n  if (parentVal === nativeWatch) {\r\n    parentVal = undefined;\r\n  }\r\n  if (childVal === nativeWatch) {\r\n    childVal = undefined;\r\n  }\r\n  /* istanbul ignore if */\r\n  if (!childVal) {\r\n    return Object.create(parentVal || null);\r\n  }\r\n  {\r\n    assertObjectType(key, childVal, vm);\r\n  }\r\n  if (!parentVal) {\r\n    return childVal;\r\n  }\r\n  var ret = {};\r\n  extend(ret, parentVal);\r\n  for (var key$1 in childVal) {\r\n    var parent = ret[key$1];\r\n    var child = childVal[key$1];\r\n    if (parent && !Array.isArray(parent)) {\r\n      parent = [parent];\r\n    }\r\n    ret[key$1] = parent\r\n      ? parent.concat(child)\r\n      : Array.isArray(child)\r\n      ? child\r\n      : [child];\r\n  }\r\n  return ret;\r\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u751f\u547d\u5468\u671f\u94a9\u5b50\u548c",(0,i.jsx)(e.code,{children:"watch"}),"\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u6b63\u5e8f\u904d\u5386\u4e00\u6b21\u6267\u884c"]}),"\n",(0,i.jsx)(e.h3,{id:"\u53e0\u52a0\u578b",children:"\u53e0\u52a0\u578b"}),"\n",(0,i.jsxs)(e.p,{children:["\u53e0\u52a0\u578b\u5408\u5e76\u6709\uff1a",(0,i.jsx)(e.code,{children:"component"}),"\u3001",(0,i.jsx)(e.code,{children:"directives"}),"\u3001",(0,i.jsx)(e.code,{children:"filters"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"strats.components =\r\n  strats.directives =\r\n  strats.filters =\r\n    function mergeAssets(parentVal, childVal, vm, key) {\r\n      var res = Object.create(parentVal || null);\r\n      if (childVal) {\r\n        for (var key in childVal) {\r\n          res[key] = childVal[key];\r\n        }\r\n      }\r\n      return res;\r\n    };\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53e0\u52a0\u578b\u4e3b\u8981\u662f\u901a\u8fc7\u539f\u578b\u94fe\u8fdb\u884c\u5c42\u5c42\u7684\u53e0\u52a0"}),"\n",(0,i.jsx)(e.h3,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u66ff\u6362\u578b\u7b56\u7565\u6709",(0,i.jsx)(e.code,{children:"props"}),"\u3001",(0,i.jsx)(e.code,{children:"methods"}),"\u3001",(0,i.jsx)(e.code,{children:"inject"}),"\u3001",(0,i.jsx)(e.code,{children:"computed"}),"\uff0c\u5c31\u662f\u5c06\u65b0\u7684\u540c\u540d\u53c2\u6570\u66ff\u4ee3\u65e7\u7684\u53c2\u6570"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5408\u5e76\u578b\u7b56\u7565\u662f",(0,i.jsx)(e.code,{children:"data"}),", \u901a\u8fc7",(0,i.jsx)(e.code,{children:"set"}),"\u65b9\u6cd5\u8fdb\u884c\u5408\u5e76\u548c\u91cd\u65b0\u8d4b\u503c"]}),"\n",(0,i.jsxs)(e.li,{children:["\u961f\u5217\u578b\u7b56\u7565\u6709\u751f\u547d\u5468\u671f\u51fd\u6570\u548c",(0,i.jsx)(e.code,{children:"watch"}),"\uff0c\u539f\u7406\u662f\u5c06\u51fd\u6570\u5b58\u5165\u4e00\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u6b63\u5e8f\u904d\u5386\u4f9d\u6b21\u6267\u884c"]}),"\n",(0,i.jsxs)(e.li,{children:["\u53e0\u52a0\u578b\u6709",(0,i.jsx)(e.code,{children:"component"}),"\u3001",(0,i.jsx)(e.code,{children:"directives"}),"\u3001",(0,i.jsx)(e.code,{children:"filters"}),"\uff0c\u901a\u8fc7\u539f\u578b\u94fe\u8fdb\u884c\u5c42\u5c42\u7684\u53e0\u52a0"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/31018570",children:"https://zhuanlan.zhihu.com/p/31018570"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6844904015495446536#heading-1",children:"https://juejin.cn/post/6844904015495446536#heading-1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6844903846775357453",children:"https://juejin.cn/post/6844903846775357453"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://vue3js.cn/docs/zh",children:"https://vue3js.cn/docs/zh"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>d,a:()=>s});var i=r(67294);const l={},c=i.createContext(l);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);