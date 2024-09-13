"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[63283],{24293:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var t=n(74848),o=n(28453);const u={},s=void 0,p={id:"Vue3/vue3\u6587\u6863/vue-router",title:"vue-router",description:"vue-router\uff084\u7248\u672c\uff09",source:"@site/docs/Vue3/vue3\u6587\u6863/vue-router.md",sourceDirName:"Vue3/vue3\u6587\u6863",slug:"/Vue3/vue3\u6587\u6863/vue-router",permalink:"/docs/Vue3/vue3\u6587\u6863/vue-router",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"vue3Sidebar",previous:{title:"Vue3",permalink:"/docs/Vue3/"},next:{title:"vue3",permalink:"/docs/Vue3/vue3\u6587\u6863/vue3"}},i={},c=[{value:"vue-router\uff084\u7248\u672c\uff09",id:"vue-router4\u7248\u672c",level:2},{value:"useRoute \u8def\u7531\u4fe1\u606f",id:"useroute-\u8def\u7531\u4fe1\u606f",level:2},{value:"useRouter \u8def\u7531\u5b9e\u4f8b",id:"userouter-\u8def\u7531\u5b9e\u4f8b",level:2}];function a(r){const e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"vue-router4\u7248\u672c",children:"vue-router\uff084\u7248\u672c\uff09"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'<template>\r\n    <div>\r\n        <h3>vue3-router</h3>\r\n\r\n        <p>\r\n            <router-link to="/home">home</router-link> |\r\n            <router-link to="/about/100">about</router-link>\r\n        </p>\r\n\r\n        <hr>\r\n\r\n        <router-view />\r\n    </div>\r\n</template>\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'import { createRouter, createWebHashHistory } from "vue-router";\r\n\r\n// \u521b\u5efa\u8def\u7531\u8868\r\nconst routes = [\r\n  // \u91cd\u5b9a\u5411\r\n  {\r\n    path: "/",\r\n    redirect: "/home",\r\n  },\r\n  {\r\n    path: "/home",\r\n    component: () => import("../views/Home.vue"),\r\n  },\r\n  // \u52a8\u6001\u8def\u7531\r\n  {\r\n    path: "/about/:id",\r\n    component: () => import("../views/About.vue"),\r\n  },\r\n];\r\n\r\n//\u521b\u5efa\u8def\u7531\u5b9e\u4f8b\r\nconst router = createRouter({\r\n  // 4. \u5185\u90e8\u63d0\u4f9b\u4e86 history \u6a21\u5f0f\u7684\u5b9e\u73b0\u3002\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528 hash \u6a21\u5f0f\u3002\r\n  history: createWebHashHistory(),\r\n  routes, // `routes: routes` \u7684\u7f29\u5199\r\n});\r\n\r\nexport default router;\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'import { createApp } from "vue";\r\n// import App from "./App.vue";\r\n// import App from "./01-Setup.vue";\r\n// import App from "./02-SetupTodolist.vue";\r\n// import App from "./03-LifeCycle.vue";\r\n// import App from "./04-watch.vue";\r\n// import App from "./05-computed.vue";\r\n// import App from "./06-components-father.vue";\r\n// import App from "./08-reactive.vue";\r\n// import App from "./09-Provide-Inject\u4f9d\u8d56\u6ce8\u5165.vue";\r\n// import App from "./11-router.vue";\r\nimport App from "./12-vuex.vue";\r\n\r\nimport router from "./router"; // \u5f15\u5165\u8def\u7531\r\nimport store from "./store"; // \u5f15\u5165\u4ed3\u5e93\r\n\r\ncreateApp(App).use(router).use(store).mount("#app"); //\u4f7f\u7528\u8def\u7531\u548c\u4ed3\u5e93\n'})}),"\n",(0,t.jsx)(e.h2,{id:"useroute-\u8def\u7531\u4fe1\u606f",children:"useRoute \u8def\u7531\u4fe1\u606f"}),"\n",(0,t.jsx)(e.p,{children:"useRoute\u8fd4\u56de\u5f53\u524d\u7684\u8def\u7531\u4fe1\u606f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'<template>\r\n    <div>about\u9875\u9762</div>\r\n</template>\r\n\r\n<script>\r\nimport { useRoute } from "vue-router";\r\nexport default {\r\n    setup(){\r\n        const route=useRoute();\r\n        console.log(route);\r\n    }\r\n}\r\n<\/script>\n'})}),"\n",(0,t.jsx)(e.h2,{id:"userouter-\u8def\u7531\u5b9e\u4f8b",children:"useRouter \u8def\u7531\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(e.p,{children:["useRouter \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6267\u884c\u4e4b\u540e\u4f1a\u8fd4\u56de\u8def\u7531\u5b9e\u4f8b",(0,t.jsx)(e.br,{}),"\n","useRoute \u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6267\u884c\u4f1a\u8fd4\u56de\u5f53\u524d\u7684\u8def\u7531\u4fe1\u606f",(0,t.jsx)(e.br,{}),"\n","useRouter \u8868\u793a\u8def\u7531\u5bf9\u8c61",(0,t.jsx)(e.br,{}),"\n","useRoute \u8868\u793a\u8def\u7531\u4fe1\u606f"]}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e24\u4e2a\u51fd\u6570\uff0c\u5fc5\u987b\u5199\u5728 setup \u7684\u9876\u5c42(setup \u91cc\u9762\u7684\u7b2c\u4e00\u5c42)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'<template>\r\n    <div>home\u9875\u9762-<button @click="fn">\u70b9\u51fb</button></div>\r\n</template>\r\n\r\n<script>\r\n// useRouter\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6267\u884c\u4e4b\u540e\u4f1a\u8fd4\u56de\u8def\u7531\u5b9e\u4f8b\r\n// useRoute\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u6267\u884c\u4f1a\u8fd4\u56de\u5f53\u524d\u7684\u8def\u7531\u4fe1\u606f\r\n// useRouter\u8868\u793a\u8def\u7531\u5bf9\u8c61\r\n// useRoute\u8868\u793a\u8def\u7531\u4fe1\u606f\r\n\r\n// \u8fd9\u4e24\u4e2a\u51fd\u6570\uff0c\u5fc5\u987b\u5199\u5728setup\u7684\u9876\u5c42(setup\u91cc\u9762\u7684\u7b2c\u4e00\u5c42)\r\nimport {useRouter} from "vue-router";\r\nexport default {\r\n    // vue2\u5199\u6cd5\uff0c\u70b9\u51fb\u8df3\u8f6c\r\n    // methods:{\r\n    //     fn(){\r\n    //         this.$router.push("/about");\r\n    //     }\r\n    // }\r\n\r\n    // vue3\u5199\u6cd5\r\n    setup(){\r\n        const router=useRouter();\r\n        const fn=()=>{\r\n            router.push("/about/222");// \u8bbe\u7f6e\u52a8\u6001\u53c2\u6570\u540e\uff0c\u8df3\u8f6c\u7684\u5730\u65b9\u4e5f\u8981\u6dfb\u52a0\u52a8\u6001\u53c2\u6570\uff0c\u4e0d\u7136\u51fa\u4e0d\u6765\r\n            // console.log(route);\r\n        }\r\n\r\n        return {\r\n            fn\r\n        }\r\n    }\r\n}\r\n<\/script>\n'})})]})}function l(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(a,{...r})}):a(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>s,x:()=>p});var t=n(96540);const o={},u=t.createContext(o);function s(r){const e=t.useContext(u);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function p(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:s(r.components),t.createElement(u.Provider,{value:e},r.children)}}}]);