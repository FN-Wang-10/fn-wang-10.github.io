"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[67307],{9427:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(74848),s=r(28453);const c={},l=void 0,i={id:"React/ref,\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u548cdom",title:"ref,\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u548cdom",description:"\u4e00.(\u7c7b\u7ec4\u4ef6)\u4e0d\u501f\u52a9 ref \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",source:"@site/docs/React/ref,\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u548cdom.md",sourceDirName:"React",slug:"/React/ref,\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u548cdom",permalink:"/docs/React/ref,\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u548cdom",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"redux\u7684\u4f7f\u7528",permalink:"/docs/React/redux\u7684\u4f7f\u7528"},next:{title:"refs",permalink:"/docs/React/refs"}},o={},d=[{value:"\u4e00.(\u7c7b\u7ec4\u4ef6)\u4e0d\u501f\u52a9 ref \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",id:"\u4e00\u7c7b\u7ec4\u4ef6\u4e0d\u501f\u52a9-ref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",level:2},{value:"\u4e8c.(\u7c7b\u7ec4\u4ef6)\u4f7f\u7528 createRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",id:"\u4e8c\u7c7b\u7ec4\u4ef6\u4f7f\u7528-createref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",level:2},{value:"\u4e09.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 useRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",id:"\u4e09\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-useref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",level:2},{value:"\u56db.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 createRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",id:"\u56db\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-createref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",level:2},{value:"\u4e94.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 useRef \u83b7\u53d6\u5b50\u7ec4\u4ef6 dom,\u4f7f\u7528 createRef \u4e5f\u53ef\u4ee5",id:"\u4e94\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-useref-\u83b7\u53d6\u5b50\u7ec4\u4ef6-dom\u4f7f\u7528-createref-\u4e5f\u53ef\u4ee5",level:2},{value:"\u516d.useRef \u53ef\u4ee5\u5b9a\u4e49\u53d8\u91cf",id:"\u516duseref-\u53ef\u4ee5\u5b9a\u4e49\u53d8\u91cf",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4e00\u7c7b\u7ec4\u4ef6\u4e0d\u501f\u52a9-ref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",children:"\u4e00.(\u7c7b\u7ec4\u4ef6)\u4e0d\u501f\u52a9 ref \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u7236\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5c06\u8fd9\u4e2a\u65b9\u6cd5\u901a\u8fc7\u81ea\u5b9a\u4e49\u5c5e\u6027\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\uff0c"}),"\n",(0,t.jsx)(n.li,{children:"\u5b50\u7ec4\u4ef6\u5728 componentDidMount \u91cc\u9762\u8c03\u7528\u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u65b9\u6cd5\uff0c\u5c06\u5b50\u7ec4\u4ef6\u7684 this \u4f20\u5230\u7236\u7ec4\u4ef6\u4e2d\uff0c\u5c31\u662f\u5c06\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u4f20\u5230\u7236\u7ec4\u4ef6\u4e2d"}),"\n",(0,t.jsx)(n.li,{children:"\u7236\u7ec4\u4ef6\u63a5\u53d7 this,\u5c06 this \u8d4b\u503c\u7ed9 this.child this.child=ref\uff08\u8fd9\u91cc\u7684 ref \u5c31\u662f\u5b50\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684 this\uff0c\u7ec4\u5efa\u5b9e\u4f8b\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u7236\u7ec4\u4ef6\u901a\u8fc7\u70b9\u51fb\u4e8b\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5\uff0cthis.child.sonFn()"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8c\u7c7b\u7ec4\u4ef6\u4f7f\u7528-createref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",children:"\u4e8c.(\u7c7b\u7ec4\u4ef6)\u4f7f\u7528 createRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["1.\u5728\u7236\u7ec4\u4ef6\u4e2d\uff0c\u5b9a\u4e49\u4e00\u4e2a ipt,",(0,t.jsx)(n.code,{children:"ipt=createRef()"}),",\u5c06\u8fd9\u4e2a ",(0,t.jsx)(n.code,{children:"ipt"})," \u52a0\u5728\u5b50\u7ec4\u4ef6\u4e0a\uff0c",(0,t.jsx)(n.code,{children:"ref={this.ipt} "}),"\r\n\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u62ff\u5230\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u4e86\uff0c\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"this.ipt.current"})," \u62ff\u5230\u5b50\u7ec4\u4ef6\u5b9e\u4f8b"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e09\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-useref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",children:"\u4e09.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 useRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u9700\u8981 useRef,useImperativeHandle,forwardRef",(0,t.jsx)(n.br,{}),"\n","\u6b65\u9aa4\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u7236\u7ec4\u4ef6\u4e2d\u4f7f\u7528 useRef,\u4ea7\u751f\u7684\u5730\u5740\u6dfb\u52a0\u5728\u5b50\u7ec4\u4ef6\u4e0a"}),"\n",(0,t.jsx)(n.li,{children:"\u5b50\u7ec4\u4ef6\uff08\u51fd\u6570\u7ec4\u4ef6\uff09\u53ef\u4ee5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0cprops,ref"}),"\n",(0,t.jsxs)(n.li,{children:["\u5728\u5b50\u7ec4\u4ef6\u4e2d\u4f7f\u7528 useImperativeHandle\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u5c31\u662f\u63a5\u6536\u5230\u7684 ref",(0,t.jsx)(n.br,{}),"\n","\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5c06\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u653e\u5728\u8fd9\u4e2a\u5bf9\u8c61\u4e2d"]}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u6574\u4e2a\u5b50\u7ec4\u4ef6\u4f7f\u7528 forwardRef \u5305\u88f9\u4f4f"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u56db\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-createref-\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5",children:"\u56db.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 createRef \u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981useRef,useImperativeHandle,forwardRef"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e94\u51fd\u6570\u7ec4\u4ef6\u4f7f\u7528-useref-\u83b7\u53d6\u5b50\u7ec4\u4ef6-dom\u4f7f\u7528-createref-\u4e5f\u53ef\u4ee5",children:"\u4e94.(\u51fd\u6570\u7ec4\u4ef6)\u4f7f\u7528 useRef \u83b7\u53d6\u5b50\u7ec4\u4ef6 dom,\u4f7f\u7528 createRef \u4e5f\u53ef\u4ee5"}),"\n",(0,t.jsx)(n.p,{children:"\u6b65\u9aa4\u548c\u8c03\u7528\u65b9\u6cd5\u4e00\u6837"}),"\n",(0,t.jsx)(n.p,{children:"( \u7c7b\u7ec4\u4ef6)\u4f7f\u7528 createRef \u53ef\u4ee5\u83b7\u53d6\u5b50\u7ec4\u4ef6 dom \u8282\u70b9"}),"\n",(0,t.jsx)(n.h2,{id:"\u516duseref-\u53ef\u4ee5\u5b9a\u4e49\u53d8\u91cf",children:"\u516d.useRef \u53ef\u4ee5\u5b9a\u4e49\u53d8\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"uesRef \u5f53\u4f5c\u4e00\u4e2a\u5bf9\u8c61\u4f7f\u7528\uff0c\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u53c2\u6570\uff0c\u4f20\u5165\u53c2\u6570\u540e\uff0cuseRef \u751f\u6210\u7684\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u662f\u4f20\u5165\u7684\u53c2\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'const Son = forwardRef((props, ref) => {\r\n  useImperativeHandle(ref, () => {\r\n    return {\r\n      sonFn() {\r\n        console.log("\u5b50\u7ec4\u4ef6\u65b9\u6cd5");\r\n      },\r\n    };\r\n  });\r\n  return (\r\n    <>\r\n      <h2>\u5b50\u7ec4\u4ef6</h2>\r\n    </>\r\n  );\r\n});\r\n\r\nconst App = () => {\r\n  const sonIpt = useRef();\r\n  const handleClick = () => {\r\n    sonIpt.current.sonFn();\r\n    console.log(sonIpt.current);\r\n  };\r\n  return (\r\n    <>\r\n      <h2>\u7236\u7ec4\u4ef6</h2>\r\n      <Son ref={sonIpt} />\r\n      <button onClick={handleClick}>\u70b9\u51fb</button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default App;\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u83b7\u53d6 dom"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const Son = forwardRef((props, ref) => {\r\n  const div = useRef();\r\n  const span = useRef();\r\n  useImperativeHandle(ref, () => {\r\n    return {\r\n      div: div.current,\r\n      span: div.current,\r\n    };\r\n  });\r\n  return (\r\n    <>\r\n      <h2>\u5b50\u7ec4\u4ef6</h2>\r\n      <div ref={div}>123</div>\r\n      <span ref={span}>456</span>\r\n    </>\r\n  );\r\n});\r\n\r\nconst App = () => {\r\n  const sonIpt = useRef();\r\n  const handleClick = () => {\r\n    console.log(sonIpt.current);\r\n    console.log(sonIpt.current.div.innerHTML);\r\n    console.log(sonIpt.current.span.innerHTML);\r\n  };\r\n  return (\r\n    <>\r\n      <h2>\u7236\u7ec4\u4ef6</h2>\r\n      <Son ref={sonIpt} />\r\n      <button onClick={handleClick}>\u70b9\u51fb</button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default App;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["16 \u7248\u672c\u4e4b\u524d\u4f7f\u7528 refs\r\n",(0,t.jsx)(n.a,{href:"https://blog.csdn.net/Cassy_Wu/article/details/109785547?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165815158416780357225956%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165815158416780357225956&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~pc_rank_34-1-109785547-null-null.142%5Ev32%5Epc_rank_34,185%5Ev2%5Econtrol&utm_term=react16%E7%89%88%E6%9C%AC%E4%B9%8B%E5%89%8D%E8%8E%B7%E5%8F%96dom&spm=1018.2226.3001.4187",children:"https://blog.csdn.net/Cassy_Wu/article/details/109785547?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165815158416780357225956%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165815158416780357225956&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~pc_rank_34-1-109785547-null-null.142^v32^pc_rank_34,185^v2^control&utm_term=react16%E7%89%88%E6%9C%AC%E4%B9%8B%E5%89%8D%E8%8E%B7%E5%8F%96dom&spm=1018.2226.3001.4187"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import React, { Component } from "react";\r\n\r\nclass Example extends Component {\r\n  constructor() {\r\n    super();\r\n    this.inputEle = null;\r\n  }\r\n\r\n  handleClick = () => {\r\n    alert(this.inputEle.value);\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <>\r\n        <input type="text" ref={(el) => (this.inputEle = el)} />\r\n        <br />\r\n        <button onClick={this.handleClick}>get input value</button>\r\n      </>\r\n    );\r\n  }\r\n}\r\n\r\nexport default Example;\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const s={},c=t.createContext(s);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);