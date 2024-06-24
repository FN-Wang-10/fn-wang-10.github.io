"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[16302],{46114:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(85893),s=r(11151);const i={},d=void 0,l={id:"Nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",title:"Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",description:"\u4e00\u3001Nginx \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",source:"@site/docs/Nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790.md",sourceDirName:"Nginx",slug:"/Nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",permalink:"/docs/Nginx/Nginx\u914d\u7f6e\u6587\u4ef6\u89e3\u6790",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"nginxSidebar",previous:{title:"Nginx\u5e38\u7528\u914d\u7f6e",permalink:"/docs/Nginx/Nginx\u5e38\u7528\u914d\u7f6e"}},o={},c=[{value:"\u4e00\u3001Nginx \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",id:"\u4e00nginx-\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",level:2},{value:"\u4e8c\u3001\u793a\u4f8b\u914d\u7f6e",id:"\u4e8c\u793a\u4f8b\u914d\u7f6e",level:2},{value:"\u4e09\u3001\u5185\u90e8\u53d8\u91cf",id:"\u4e09\u5185\u90e8\u53d8\u91cf",level:2}];function x(e){const n={code:"code",em:"em",h2:"h2",li:"li",ol:"ol",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4e00nginx-\u914d\u7f6e\u6587\u4ef6\u7ed3\u6784",children:"\u4e00\u3001Nginx \u914d\u7f6e\u6587\u4ef6\u7ed3\u6784"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"#\u5168\u5c40\u5757\r\n...\r\n\r\n#events\u5757\r\nevents {\r\n   ...\r\n}\r\n\r\n#http\u5757\r\nhttp {\r\n\r\n\t\t#server\u5757\r\n\t\tserver {\r\n\r\n       #location\u5757\r\n       location [PATTERN] {\r\n           ...\r\n       }\r\n\r\n\t\t\t\t# \u53ef\u914d\u7f6e\u591a\u4e2alocation\u5757\r\n       location [PATTERN] {\r\n           ...\r\n       }\r\n    }\r\n\r\n\t\t# \u53ef\u914d\u7f6e\u591a\u4e2aserver\u5757\r\n    server {\r\n      ...\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"\u5168\u5c40\u5757"})}),"\uff1a\u914d\u7f6e\u5f71\u54cd",(0,t.jsx)(n.code,{children:"nginx"}),"\u5168\u5c40\u7684\u6307\u4ee4\u3002\u4e00\u822c\u6709\u8fd0\u884c",(0,t.jsx)(n.code,{children:"nginx"}),"\u670d\u52a1\u5668\u7684\u7528\u6237\u7ec4\uff0c",(0,t.jsx)(n.code,{children:"nginx"}),"\u8fdb\u7a0b",(0,t.jsx)(n.code,{children:"pid"}),"\u5b58\u653e\u8def\u5f84\uff0c\u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u914d\u7f6e\u6587\u4ef6\u5f15\u5165\uff0c\u5141\u8bb8\u751f\u6210",(0,t.jsx)(n.code,{children:"worker process"}),"\u6570\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"events \u5757"})}),"\uff1a\u914d\u7f6e\u5f71\u54cd",(0,t.jsx)(n.code,{children:"nginx"}),"\u670d\u52a1\u5668\u6216\u4e0e\u7528\u6237\u7684\u7f51\u7edc\u8fde\u63a5\u3002\u6709\u6bcf\u4e2a\u8fdb\u7a0b\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9009\u53d6\u54ea\u79cd\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u5904\u7406\u8fde\u63a5\u8bf7\u6c42\uff0c\u662f\u5426\u5141\u8bb8\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u8def\u8fde\u63a5\uff0c\u5f00\u542f\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\u5e8f\u5217\u5316\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"http \u5757"})}),"\uff1a\u53ef\u4ee5\u5d4c\u5957\u591a\u4e2a",(0,t.jsx)(n.code,{children:"server"}),"\uff0c\u914d\u7f6e\u4ee3\u7406\uff0c\u7f13\u5b58\uff0c\u65e5\u5fd7\u5b9a\u4e49\u7b49\u7edd\u5927\u591a\u6570\u529f\u80fd\u548c\u7b2c\u4e09\u65b9\u6a21\u5757\u7684\u914d\u7f6e\u3002\u5982\u6587\u4ef6\u5f15\u5165\uff0c",(0,t.jsx)(n.code,{children:"mime-type"}),"\u5b9a\u4e49\uff0c\u65e5\u5fd7\u81ea\u5b9a\u4e49\uff0c\u662f\u5426\u4f7f\u7528",(0,t.jsx)(n.code,{children:"sendfile"}),"\u4f20\u8f93\u6587\u4ef6\uff0c\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u8fde\u63a5\u8bf7\u6c42\u6570\u7b49\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"server \u5757"})}),"\uff1a\u914d\u7f6e\u865a\u62df\u4e3b\u673a\u7684\u76f8\u5173\u53c2\u6570\uff0c\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"http"}),"\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a",(0,t.jsx)(n.code,{children:"server"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"location \u5757"})}),"\uff1a\u914d\u7f6e\u8bf7\u6c42\u7684\u8def\u7531\uff0c\u4ee5\u53ca\u5404\u79cd\u9875\u9762\u7684\u5904\u7406\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8c\u793a\u4f8b\u914d\u7f6e",children:"\u4e8c\u3001\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"########### \u6bcf\u4e2a\u6307\u4ee4\u5fc5\u987b\u6709\u5206\u53f7\u7ed3\u675f\u3002#################\r\nuser administrator administrators;  #\u914d\u7f6e\u7528\u6237\u6216\u8005\u7ec4\uff0c\u9ed8\u8ba4\u4e3anobody nobody\u3002\r\nworker_processes 2;  #\u5141\u8bb8\u751f\u6210\u7684\u8fdb\u7a0b\u6570\uff0c\u9ed8\u8ba4\u4e3a1\r\npid /nginx/pid/nginx.pid;   #\u6307\u5b9anginx\u8fdb\u7a0b\u8fd0\u884c\u6587\u4ef6\u5b58\u653e\u5730\u5740\r\n\r\n#\u5236\u5b9a\u65e5\u5fd7\u8def\u5f84\uff0c\u7ea7\u522b\u3002\u8fd9\u4e2a\u8bbe\u7f6e\u53ef\u4ee5\u653e\u5165\u5168\u5c40\u5757\uff0chttp\u5757\uff0cserver\u5757\uff0c\u7ea7\u522b\u4ee5\u6b64\u4e3a\uff1adebug|info|notice|warn|error|crit|alert|emerg\r\nerror_log log/error.log debug;\r\n\r\nevents {\r\n    accept_mutex on;   #\u8bbe\u7f6e\u7f51\u8def\u8fde\u63a5\u5e8f\u5217\u5316\uff0c\u9632\u6b62\u60ca\u7fa4\u73b0\u8c61\u53d1\u751f\uff0c\u9ed8\u8ba4\u4e3aon\r\n    multi_accept on;  #\u8bbe\u7f6e\u4e00\u4e2a\u8fdb\u7a0b\u662f\u5426\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\uff0c\u9ed8\u8ba4\u4e3aoff\r\n    use epoll;      #\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff0cselect|poll|kqueue|epoll|resig|/dev/poll|eventport\r\n    worker_connections  1024;    #\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a512\r\n}\r\n\r\nhttp {\r\n    include       mime.types;   #\u6587\u4ef6\u6269\u5c55\u540d\u4e0e\u6587\u4ef6\u7c7b\u578b\u6620\u5c04\u8868\r\n    default_type  application/octet-stream; #\u9ed8\u8ba4\u6587\u4ef6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3atext/plain\r\n    #access_log off; #\u53d6\u6d88\u670d\u52a1\u65e5\u5fd7\r\n    log_format myFormat '$remote_addr\u2013$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #\u81ea\u5b9a\u4e49\u683c\u5f0f\r\n    access_log log/access.log myFormat;  #combined\u4e3a\u65e5\u5fd7\u683c\u5f0f\u7684\u9ed8\u8ba4\u503c\r\n    sendfile on;   #\u5141\u8bb8sendfile\u65b9\u5f0f\u4f20\u8f93\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3aoff\uff0c\u53ef\u4ee5\u5728http\u5757\uff0cserver\u5757\uff0clocation\u5757\u3002\r\n    sendfile_max_chunk 100k;  #\u6bcf\u4e2a\u8fdb\u7a0b\u6bcf\u6b21\u8c03\u7528\u4f20\u8f93\u6570\u91cf\u4e0d\u80fd\u5927\u4e8e\u8bbe\u5b9a\u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u4e0d\u8bbe\u4e0a\u9650\u3002\r\n    keepalive_timeout 65;  #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a75s\uff0c\u53ef\u4ee5\u5728http\uff0cserver\uff0clocation\u5757\u3002\r\n\r\n    upstream mysvr {\r\n      server 127.0.0.1:7878;\r\n      server 192.168.10.121:3333 backup;  #\u70ed\u5907\r\n    }\r\n\r\n    error_page 404 https://www.baidu.com; #\u9519\u8bef\u9875\r\n\r\n    server {\r\n        keepalive_requests 120; #\u5355\u8fde\u63a5\u8bf7\u6c42\u4e0a\u9650\u6b21\u6570\u3002\r\n        listen       4545;   #\u76d1\u542c\u7aef\u53e3\r\n        server_name  127.0.0.1;   #\u76d1\u542c\u5730\u5740\r\n        location  ~*^.+$ {       #\u8bf7\u6c42\u7684url\u8fc7\u6ee4\uff0c\u6b63\u5219\u5339\u914d\uff0c~\u4e3a\u533a\u5206\u5927\u5c0f\u5199\uff0c~*\u4e3a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002\r\n           #root path;  #\u6839\u76ee\u5f55\r\n           #index vv.txt;  #\u8bbe\u7f6e\u9ed8\u8ba4\u9875\r\n           proxy_pass  http://mysvr;  #\u8bf7\u6c42\u8f6c\u5411mysvr \u5b9a\u4e49\u7684\u670d\u52a1\u5668\u5217\u8868\r\n           deny 127.0.0.1;  #\u62d2\u7edd\u7684ip\r\n           allow 172.18.5.54; #\u5141\u8bb8\u7684ip\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e09\u5185\u90e8\u53d8\u91cf",children:"\u4e09\u3001\u5185\u90e8\u53d8\u91cf"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5e38\u91cf"}),(0,t.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["remoteaddr\u2004",(0,t.jsx)("br",{}),"http_x_forwarded_for"]}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u5ba2\u6237\u7aef\u7684 ip \u5730\u5740"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$remote_user"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u5ba2\u6237\u7aef\u7528\u6237\u540d\u79f0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$time_local"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u8bbf\u95ee\u65f6\u95f4\u4e0e\u65f6\u533a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$request"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u8bf7\u6c42\u7684 url \u4e0e http \u534f\u8bae\uff1b"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$status"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u8bf7\u6c42\u72b6\u6001\uff1b\u6210\u529f\u662f 200\uff0c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$body_bytes_s ent"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u6587\u4ef6\u4e3b\u4f53\u5185\u5bb9\u5927\u5c0f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$http_referer"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u4ece\u90a3\u4e2a\u9875\u9762\u94fe\u63a5\u8bbf\u95ee\u8fc7\u6765"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$http_user_agent"}),(0,t.jsx)(n.td,{children:"\u8bb0\u5f55\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u7684\u76f8\u5173\u4fe1\u606f"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var t=r(67294);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);