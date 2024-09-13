"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[79672],{79702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=t(74848),r=t(28453);const c={},o=void 0,i={id:"React/state \u548c props \u6709\u4ec0\u4e48\u533a\u522b",title:"state \u548c props \u6709\u4ec0\u4e48\u533a\u522b",description:"\u4e00\u3001state",source:"@site/docs/React/state \u548c props \u6709\u4ec0\u4e48\u533a\u522b.md",sourceDirName:"React",slug:"/React/state \u548c props \u6709\u4ec0\u4e48\u533a\u522b",permalink:"/docs/React/state \u548c props \u6709\u4ec0\u4e48\u533a\u522b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"setState\u6267\u884c\u673a\u5236",permalink:"/docs/React/setState\u6267\u884c\u673a\u5236"},next:{title:"state\u7684\u503c\u53ef\u4ee5\u76f4\u63a5\u6539\u5417",permalink:"/docs/React/state\u7684\u503c\u53ef\u4ee5\u76f4\u63a5\u6539\u5417"}},l={},d=[{value:"\u4e00\u3001state",id:"\u4e00state",level:2},{value:"\u4e8c\u3001props",id:"\u4e8cprops",level:2},{value:"\u4e09\u3001\u533a\u522b",id:"\u4e09\u533a\u522b",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4e00state",children:"\u4e00\u3001state"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u7ec4\u4ef6\u7684\u663e\u793a\u5f62\u6001\u53ef\u4ee5\u7531\u6570\u636e\u72b6\u6001\u548c\u5916\u90e8\u53c2\u6570\u6240\u51b3\u5b9a\uff0c\u800c\u6570\u636e\u72b6\u6001\u5c31\u662f ",(0,s.jsx)(n.code,{children:"state"}),"\uff0c\u4e00\u822c\u5728 ",(0,s.jsx)(n.code,{children:"constructor"})," \u4e2d\u521d\u59cb\u5316"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u9700\u8981\u4fee\u6539\u91cc\u9762\u7684\u503c\u7684\u72b6\u6001\u9700\u8981\u901a\u8fc7\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"setState"})," \u6765\u6539\u53d8\uff0c\u4ece\u800c\u8fbe\u5230\u66f4\u65b0\u7ec4\u4ef6\u5185\u90e8\u6570\u636e\u7684\u4f5c\u7528\uff0c\u5e76\u4e14\u91cd\u65b0\u8c03\u7528\u7ec4\u4ef6 ",(0,s.jsx)(n.code,{children:"render"})," \u65b9\u6cd5\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"class Button extends React.Component {\r\n  constructor() {\r\n    super();\r\n    this.state = {\r\n      count: 0,\r\n    };\r\n  }\r\n\r\n  updateCount() {\r\n    this.setState((prevState, props) => {\r\n      return { count: prevState.count + 1 };\r\n    });\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <button onClick={() => this.updateCount()}>\r\n        Clicked {this.state.count} times\r\n      </button>\r\n    );\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setState"})," \u8fd8\u53ef\u4ee5\u63a5\u53d7\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f1a\u5728 ",(0,s.jsx)(n.code,{children:"setState"})," \u8c03\u7528\u5b8c\u6210\u5e76\u4e14\u7ec4\u4ef6\u5f00\u59cb\u91cd\u65b0\u6e32\u67d3\u65f6\u88ab\u8c03\u7528\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u542c\u6e32\u67d3\u662f\u5426\u5b8c\u6210"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'this.setState(\r\n  {\r\n    name: "JS\u6bcf\u65e5\u4e00\u9898",\r\n  },\r\n  () => console.log("setState finished")\r\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8cprops",children:"\u4e8c\u3001props"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"React"})," \u7684\u6838\u5fc3\u601d\u60f3\u5c31\u662f\u7ec4\u4ef6\u5316\u601d\u60f3\uff0c\u9875\u9762\u4f1a\u88ab\u5207\u5206\u6210\u4e00\u4e9b\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u7ec4\u4ef6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7ec4\u4ef6\u4ece\u6982\u5ff5\u4e0a\u770b\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a\u8f93\u5165\u503c\uff0c\u8fd9\u4e2a\u53c2\u6570\u5c31\u662f ",(0,s.jsx)(n.code,{children:"props"}),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u628a ",(0,s.jsx)(n.code,{children:"props"})," \u7406\u89e3\u4e3a\u4ece\u5916\u90e8\u4f20\u5165\u7ec4\u4ef6\u5185\u90e8\u7684\u6570\u636e"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"react"})," \u5177\u6709\u5355\u5411\u6570\u636e\u6d41\u7684\u7279\u6027\uff0c\u6240\u4ee5\u4ed6\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u4ece\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4e2d\u4f20\u9012\u6570\u636e"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"props"})," \u9664\u4e86\u53ef\u4ee5\u4f20\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\uff0c\u8fd8\u53ef\u4ee5\u4f20\u9012\u5bf9\u8c61\uff0c\u6570\u7ec4\u751a\u81f3\u662f\u56de\u8c03\u51fd\u6570\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'class Welcome extends React.Component {\r\n  render() {\r\n    return <h1>Hello {this.props.name}</h1>;\r\n  }\r\n}\r\n\r\nconst element = <Welcome name="Sara" onNameChanged={this.handleName} />;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0 ",(0,s.jsx)(n.code,{children:"name"})," \u5c5e\u6027\u4e0e ",(0,s.jsx)(n.code,{children:"onNameChanged"})," \u65b9\u6cd5\u90fd\u80fd\u5728\u5b50\u7ec4\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"props"})," \u53d8\u91cf\u4e2d\u8bbf\u95ee"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5b50\u7ec4\u4ef6\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"props"})," \u5728\u5185\u90e8\u4e0d\u53ef\u53d8\u7684\uff0c\u5982\u679c\u60f3\u8981\u6539\u53d8\u5b83\u770b\uff0c\u53ea\u80fd\u901a\u8fc7\u5916\u90e8\u7ec4\u4ef6\u4f20\u5165\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"props"})," \u6765\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u5426\u5219\u5b50\u7ec4\u4ef6\u7684 ",(0,s.jsx)(n.code,{children:"props"})," \u548c\u5c55\u793a\u5f62\u5f0f\u4e0d\u4f1a\u6539\u53d8"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e09\u533a\u522b",children:"\u4e09\u3001\u533a\u522b"}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u540c\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e24\u8005\u90fd\u662f JavaScript \u5bf9\u8c61"}),"\n",(0,s.jsx)(n.li,{children:"\u4e24\u8005\u90fd\u662f\u7528\u4e8e\u4fdd\u5b58\u4fe1\u606f"}),"\n",(0,s.jsx)(n.li,{children:"props \u548c state \u90fd\u80fd\u89e6\u53d1\u6e32\u67d3\u66f4\u65b0"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u533a\u522b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"props \u662f\u5916\u90e8\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\uff0c\u800c state \u662f\u5728\u7ec4\u4ef6\u5185\u88ab\u7ec4\u4ef6\u81ea\u5df1\u7ba1\u7406\u7684\uff0c\u4e00\u822c\u5728 constructor \u4e2d\u521d\u59cb\u5316"}),"\n",(0,s.jsx)(n.li,{children:"props \u5728\u7ec4\u4ef6\u5185\u90e8\u662f\u4e0d\u53ef\u4fee\u6539\u7684\uff0c\u4f46 state \u5728\u7ec4\u4ef6\u5185\u90e8\u53ef\u4ee5\u8fdb\u884c\u4fee\u6539"}),"\n",(0,s.jsx)(n.li,{children:"state \u662f\u591a\u53d8\u7684\u3001\u53ef\u4ee5\u4fee\u6539"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://lucybain.com/blog/2016/react-state-vs-pros/",children:"https://lucybain.com/blog/2016/react-state-vs-pros/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844904009203974158",children:"https://juejin.cn/post/6844904009203974158"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);