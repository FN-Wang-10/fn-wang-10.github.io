"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[76991],{98313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var c=s(74848),t=s(28453);const r={},o=void 0,i={id:"React/hooks",title:"hooks",description:"\u4e00\u3001\u662f\u4ec0\u4e48",source:"@site/docs/React/hooks.md",sourceDirName:"React",slug:"/React/hooks",permalink:"/docs/React/hooks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"reactSidebar",previous:{title:"hoc\u9ad8\u9636\u7ec4\u4ef6",permalink:"/docs/React/hoc\u9ad8\u9636\u7ec4\u4ef6"},next:{title:"hooks\u5e38\u7528",permalink:"/docs/React/hooks\u5e38\u7528"}},d={},l=[{value:"\u4e00\u3001\u662f\u4ec0\u4e48",id:"\u4e00\u662f\u4ec0\u4e48",level:2},{value:"\u4e8c\u3001\u6709\u54ea\u4e9b",id:"\u4e8c\u6709\u54ea\u4e9b",level:2},{value:"useState",id:"usestate",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"\u5176\u5b83 hooks",id:"\u5176\u5b83-hooks",level:3},{value:"\u4e09\u3001\u89e3\u51b3\u4ec0\u4e48",id:"\u4e09\u89e3\u51b3\u4ec0\u4e48",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u4e00\u662f\u4ec0\u4e48",children:"\u4e00\u3001\u662f\u4ec0\u4e48"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Hook"})," \u662f React 16.8 \u7684\u65b0\u589e\u7279\u6027\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u7f16\u5199 ",(0,c.jsx)(n.code,{children:"class"})," \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"state"})," \u4ee5\u53ca\u5176\u4ed6\u7684 ",(0,c.jsx)(n.code,{children:"React"})," \u7279\u6027"]}),"\n",(0,c.jsxs)(n.p,{children:["\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u5f15\u5165",(0,c.jsx)(n.code,{children:"hook"}),"\uff0c\u5b98\u65b9\u7ed9\u51fa\u7684\u52a8\u673a\u662f\u89e3\u51b3\u957f\u65f6\u95f4\u4f7f\u7528\u548c\u7ef4\u62a4",(0,c.jsx)(n.code,{children:"react"}),"\u8fc7\u7a0b\u4e2d\u5e38\u9047\u5230\u7684\u95ee\u9898\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u96be\u4ee5\u91cd\u7528\u548c\u5171\u4eab\u7ec4\u4ef6\u4e2d\u7684\u4e0e\u72b6\u6001\u76f8\u5173\u7684\u903b\u8f91"}),"\n",(0,c.jsx)(n.li,{children:"\u903b\u8f91\u590d\u6742\u7684\u7ec4\u4ef6\u96be\u4ee5\u5f00\u53d1\u4e0e\u7ef4\u62a4\uff0c\u5f53\u6211\u4eec\u7684\u7ec4\u4ef6\u9700\u8981\u5904\u7406\u591a\u4e2a\u4e92\u4e0d\u76f8\u5173\u7684 local state \u65f6\uff0c\u6bcf\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u53ef\u80fd\u4f1a\u5305\u542b\u7740\u5404\u79cd\u4e92\u4e0d\u76f8\u5173\u7684\u903b\u8f91\u5728\u91cc\u9762"}),"\n",(0,c.jsx)(n.li,{children:"\u7c7b\u7ec4\u4ef6\u4e2d\u7684 this \u589e\u52a0\u5b66\u4e60\u6210\u672c\uff0c\u7c7b\u7ec4\u4ef6\u5728\u57fa\u4e8e\u73b0\u6709\u5de5\u5177\u7684\u4f18\u5316\u4e0a\u5b58\u5728\u4e9b\u8bb8\u95ee\u9898"}),"\n",(0,c.jsx)(n.li,{children:"\u7531\u4e8e\u4e1a\u52a1\u53d8\u52a8\uff0c\u51fd\u6570\u7ec4\u4ef6\u4e0d\u5f97\u4e0d\u6539\u4e3a\u7c7b\u7ec4\u4ef6\u7b49\u7b49"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4ee5\u524d\uff0c\u51fd\u6570\u7ec4\u4ef6\u4e5f\u88ab\u79f0\u4e3a\u65e0\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u53ea\u8d1f\u8d23\u6e32\u67d3\u7684\u4e00\u4e9b\u5de5\u4f5c"}),"\n",(0,c.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u73b0\u5728\u7684\u51fd\u6570\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u662f\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u5185\u90e8\u4e5f\u53ef\u4ee5\u7ef4\u62a4\u81ea\u8eab\u7684\u72b6\u6001\u4ee5\u53ca\u505a\u4e00\u4e9b\u903b\u8f91\u65b9\u9762\u7684\u5904\u7406"}),"\n",(0,c.jsx)(n.h2,{id:"\u4e8c\u6709\u54ea\u4e9b",children:"\u4e8c\u3001\u6709\u54ea\u4e9b"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u8bb2\u5230\uff0c",(0,c.jsx)(n.code,{children:"Hooks"}),"\u8ba9\u6211\u4eec\u7684\u51fd\u6570\u7ec4\u4ef6\u62e5\u6709\u4e86\u7c7b\u7ec4\u4ef6\u7684\u7279\u6027\uff0c\u4f8b\u5982\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u3001\u751f\u547d\u5468\u671f"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u5e38\u89c1\u7684",(0,c.jsx)(n.code,{children:"hooks"}),"\u6709\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"useState"}),"\n",(0,c.jsx)(n.li,{children:"useEffect"}),"\n",(0,c.jsx)(n.li,{children:"\u5176\u4ed6"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"usestate",children:"useState"}),"\n",(0,c.jsx)(n.p,{children:"\u9996\u5148\u7ed9\u51fa\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'import React, { useState } from "react";\r\n\r\nfunction Example() {\r\n  // \u58f0\u660e\u4e00\u4e2a\u53eb "count" \u7684 state \u53d8\u91cf\r\n  const [count, setCount] = useState(0);\r\n\r\n  return (\r\n    <div>\r\n      <p>You clicked {count} times</p>\r\n      <button onClick={() => setCount(count + 1)}>Click me</button>\r\n    </div>\r\n  );\r\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7",(0,c.jsx)(n.code,{children:"useState"}),"\u5b9e\u73b0\u51fd\u6570\u5185\u90e8\u7ef4\u62a4",(0,c.jsx)(n.code,{children:"state"}),"\uff0c\u53c2\u6570\u4e3a",(0,c.jsx)(n.code,{children:"state"}),"\u9ed8\u8ba4\u7684\u503c\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u503c\u4e3a\u5f53\u524d\u7684",(0,c.jsx)(n.code,{children:"state"}),"\uff0c\u7b2c\u4e8c\u4e2a\u503c\u4e3a\u66f4\u65b0",(0,c.jsx)(n.code,{children:"state"}),"\u7684\u51fd\u6570"]}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u7ec4\u4ef6\u7b49\u4ef7\u4e8e\u7684\u7c7b\u7ec4\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"class Example extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      count: 0,\r\n    };\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <p>You clicked {this.state.count} times</p>\r\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\r\n          Click me\r\n        </button>\r\n      </div>\r\n    );\r\n  }\r\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u4e0a\u8ff0\u4e24\u79cd\u4ee3\u7801\u5206\u6790\uff0c\u53ef\u4ee5\u770b\u51fa\u4e24\u8005\u533a\u522b\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"state \u58f0\u660e\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7 useState \u76f4\u63a5\u83b7\u53d6\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7 constructor \u6784\u9020\u51fd\u6570\u4e2d\u8bbe\u7f6e"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["state \u8bfb\u53d6\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u53d8\u91cf\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7",(0,c.jsx)(n.code,{children:"this.state.count"}),"\u7684\u65b9\u5f0f\u83b7\u53d6"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"state \u66f4\u65b0\u65b9\u5f0f\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u901a\u8fc7 setCount \u66f4\u65b0\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7 this.setState()"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u603b\u7684\u6765\u8bb2\uff0cuseState \u4f7f\u7528\u8d77\u6765\u66f4\u4e3a\u7b80\u6d01\uff0c\u51cf\u5c11\u4e86",(0,c.jsx)(n.code,{children:"this"}),"\u6307\u5411\u4e0d\u660e\u786e\u7684\u60c5\u51b5"]}),"\n",(0,c.jsx)(n.h3,{id:"useeffect",children:"useEffect"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"}),"\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8fdb\u884c\u4e00\u4e9b\u5e26\u6709\u526f\u4f5c\u7528\u7684\u64cd\u4f5c"]}),"\n",(0,c.jsx)(n.p,{children:"\u540c\u6837\u7ed9\u51fa\u4e00\u4e2a\u8ba1\u65f6\u5668\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"class Example extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      count: 0,\r\n    };\r\n  }\r\n\r\n  componentDidMount() {\r\n    document.title = `You clicked ${this.state.count} times`;\r\n  }\r\n  componentDidUpdate() {\r\n    document.title = `You clicked ${this.state.count} times`;\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <p>You clicked {this.state.count} times</p>\r\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>\r\n          Click me\r\n        </button>\r\n      </div>\r\n    );\r\n  }\r\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u89c1\uff0c\u7ec4\u4ef6\u5728\u52a0\u8f7d\u548c\u66f4\u65b0\u9636\u6bb5\u90fd\u6267\u884c\u540c\u6837\u64cd\u4f5c"}),"\n",(0,c.jsxs)(n.p,{children:["\u800c\u5982\u679c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"useEffect"}),"\u540e\uff0c\u5219\u80fd\u591f\u5c06\u76f8\u540c\u7684\u903b\u8f91\u62bd\u79bb\u51fa\u6765\uff0c\u8fd9\u662f\u7c7b\u7ec4\u4ef6\u4e0d\u5177\u5907\u7684\u65b9\u6cd5"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u5e94\u7684",(0,c.jsx)(n.code,{children:"useEffect"}),"\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:'import React, { useState, useEffect } from "react";\r\nfunction Example() {\r\n  const [count, setCount] = useState(0);\r\n\r\n  useEffect(() => {\r\n    document.title = `You clicked ${count} times`;\r\n  });\r\n  return (\r\n    <div>\r\n      <p>You clicked {count} times</p>\r\n      <button onClick={() => setCount(count + 1)}>Click me</button>\r\n    </div>\r\n  );\r\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useEffect"}),"\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"useEffect"}),"\u4f1a\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u548c\u66f4\u65b0\u4e4b\u540e\u90fd\u4f1a\u6267\u884c\uff0c\u76f8\u5f53\u4e8e\u5728",(0,c.jsx)(n.code,{children:"componentDidMount"}),"\u548c",(0,c.jsx)(n.code,{children:"componentDidUpdate"}),"\u4e24\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u6267\u884c\u56de\u8c03"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u67d0\u4e9b\u7279\u5b9a\u503c\u5728\u4e24\u6b21\u91cd\u6e32\u67d3\u4e4b\u95f4\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u5bf9 effect \u7684\u8c03\u7528\uff0c\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useEffect(() => {\r\n  document.title = `You clicked ${count} times`;\r\n}, [count]); // \u4ec5\u5728 count \u66f4\u6539\u65f6\u66f4\u65b0\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\u540e\uff0c\u5982\u679c ",(0,c.jsx)(n.code,{children:"count"})," \u7684\u503c\u662f ",(0,c.jsx)(n.code,{children:"5"}),"\uff0c\u800c\u4e14\u6211\u4eec\u7684\u7ec4\u4ef6\u91cd\u6e32\u67d3\u7684\u65f6\u5019 ",(0,c.jsx)(n.code,{children:"count"})," \u8fd8\u662f\u7b49\u4e8e ",(0,c.jsx)(n.code,{children:"5"}),"\uff0cReact \u5c06\u5bf9\u524d\u4e00\u6b21\u6e32\u67d3\u7684 ",(0,c.jsx)(n.code,{children:"[5]"})," \u548c\u540e\u4e00\u6b21\u6e32\u67d3\u7684 ",(0,c.jsx)(n.code,{children:"[5]"})," \u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u662f\u76f8\u7b49\u5219\u8df3\u8fc7",(0,c.jsx)(n.code,{children:"effects"}),"\u6267\u884c"]}),"\n",(0,c.jsxs)(n.p,{children:["\u56de\u8c03\u51fd\u6570\u4e2d\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u6e05\u9664\u51fd\u6570\uff0c\u8fd9\u662f",(0,c.jsx)(n.code,{children:"effect"}),"\u53ef\u9009\u7684\u6e05\u9664\u673a\u5236\uff0c\u76f8\u5f53\u4e8e\u7c7b\u7ec4\u4ef6\u4e2d",(0,c.jsx)(n.code,{children:"componentwillUnmount"}),"\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u53ef\u505a\u4e00\u4e9b\u6e05\u9664\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"useEffect(() => {\r\n  function handleStatusChange(status) {\r\n    setIsOnline(status.isOnline);\r\n  }\r\n\r\n  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\r\n  return () => {\r\n    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\r\n  };\r\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c ",(0,c.jsx)(n.code,{children:"useEffect"}),"\u76f8\u5f53\u4e8e",(0,c.jsx)(n.code,{children:"componentDidMount"}),"\uff0c",(0,c.jsx)(n.code,{children:"componentDidUpdate"})," \u548c ",(0,c.jsx)(n.code,{children:"componentWillUnmount"})," \u8fd9\u4e09\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570\u7684\u7ec4\u5408"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5176\u5b83-hooks",children:"\u5176\u5b83 hooks"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u7ec4\u4ef6\u901a\u4fe1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"useContext"}),"\uff0c",(0,c.jsx)(n.code,{children:"refs"}),"\u5b66\u4e60\u4e2d\u6211\u4eec\u4e5f\u7528\u5230\u4e86",(0,c.jsx)(n.code,{children:"useRef"}),"\u83b7\u53d6",(0,c.jsx)(n.code,{children:"DOM"}),"\u7ed3\u6784......"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd8\u6709\u5f88\u591a\u989d\u5916\u7684",(0,c.jsx)(n.code,{children:"hooks"}),"\uff0c\u5982\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"useReducer"}),"\n",(0,c.jsx)(n.li,{children:"useCallback"}),"\n",(0,c.jsx)(n.li,{children:"useMemo"}),"\n",(0,c.jsx)(n.li,{children:"useRef"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4e09\u89e3\u51b3\u4ec0\u4e48",children:"\u4e09\u3001\u89e3\u51b3\u4ec0\u4e48"}),"\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7\u5bf9\u4e0a\u9762\u7684\u521d\u6b65\u8ba4\u8bc6\uff0c\u53ef\u4ee5\u770b\u5230",(0,c.jsx)(n.code,{children:"hooks"}),"\u80fd\u591f\u66f4\u5bb9\u6613\u89e3\u51b3\u72b6\u6001\u76f8\u5173\u7684\u91cd\u7528\u7684\u95ee\u9898\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6bcf\u8c03\u7528 useHook \u4e00\u6b21\u90fd\u4f1a\u751f\u6210\u4e00\u4efd\u72ec\u7acb\u7684\u72b6\u6001"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u81ea\u5b9a\u4e49 hook \u80fd\u591f\u66f4\u597d\u7684\u5c01\u88c5\u6211\u4eec\u7684\u529f\u80fd"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7f16\u5199",(0,c.jsx)(n.code,{children:"hooks"}),"\u4e3a\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u6bcf\u4e2a\u529f\u80fd\u90fd\u5305\u88f9\u5728\u51fd\u6570\u4e2d\uff0c\u6574\u4f53\u98ce\u683c\u66f4\u6e05\u723d\uff0c\u66f4\u4f18\u96c5"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"hooks"}),"\u7684\u51fa\u73b0\uff0c\u4f7f\u51fd\u6570\u7ec4\u4ef6\u7684\u529f\u80fd\u5f97\u5230\u4e86\u6269\u5145\uff0c\u62e5\u6709\u4e86\u7c7b\u7ec4\u4ef6\u76f8\u4f3c\u7684\u529f\u80fd\uff0c\u5728\u6211\u4eec\u65e5\u5e38\u4f7f\u7528\u4e2d\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"hooks"}),"\u80fd\u591f\u89e3\u51b3\u5927\u591a\u6570\u95ee\u9898\uff0c\u5e76\u4e14\u8fd8\u62e5\u6709\u4ee3\u7801\u590d\u7528\u673a\u5236\uff0c\u56e0\u6b64\u4f18\u5148\u8003\u8651",(0,c.jsx)(n.code,{children:"hooks"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/hooks-state.html",children:"https://zh-hans.reactjs.org/docs/hooks-state.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/hooks-effect.html",children:"https://zh-hans.reactjs.org/docs/hooks-effect.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.cnblogs.com/lalalagq/p/9898531.html",children:"https://www.cnblogs.com/lalalagq/p/9898531.html"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var c=s(96540);const t={},r=c.createContext(t);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);