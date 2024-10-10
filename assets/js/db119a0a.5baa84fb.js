"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[7484],{43831:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var A=n(74848),s=n(28453);const o={},t=void 0,i={id:"\u6d4f\u89c8\u5668/webworker",title:"webworker",description:"1.\u4ec0\u4e48\u662f web Worker?",source:"@site/docs/\u6d4f\u89c8\u5668/webworker.md",sourceDirName:"\u6d4f\u89c8\u5668",slug:"/\u6d4f\u89c8\u5668/webworker",permalink:"/docs/\u6d4f\u89c8\u5668/webworker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"browserSidebar",previous:{title:"url\u5230\u9875\u9762\u5448\u73b0\uff0c\u53d1\u751f\u4e86\u4ec0\u4e48",permalink:"/docs/\u6d4f\u89c8\u5668/url\u5230\u9875\u9762\u5448\u73b0\uff0c\u53d1\u751f\u4e86\u4ec0\u4e48"},next:{title:"\u4ece\u8f93\u5165url\u5230\u770b\u5230\u9875\u9762\u7ecf\u5386\u7684\u6240\u6709\u4e8b\u60c5",permalink:"/docs/\u6d4f\u89c8\u5668/\u4ece\u8f93\u5165url\u5230\u770b\u5230\u9875\u9762\u7ecf\u5386\u7684\u6240\u6709\u4e8b\u60c5"}},l={},c=[{value:"1.\u4ec0\u4e48\u662f web Worker?",id:"1\u4ec0\u4e48\u662f-web-worker",level:2},{value:"2.web worker \u7684\u4f5c\u7528",id:"2web-worker-\u7684\u4f5c\u7528",level:2},{value:"3.Web Worker \u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f7f\u7528\u6ce8\u610f\u70b9\u3002",id:"3web-worker-\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f7f\u7528\u6ce8\u610f\u70b9",level:2},{value:"4. \u5982\u4f55\u4f7f\u7528 web worker",id:"4-\u5982\u4f55\u4f7f\u7528-web-worker",level:2},{value:"5. web worker \u7684\u7b80\u5355\u5e94\u7528",id:"5-web-worker-\u7684\u7b80\u5355\u5e94\u7528",level:2},{value:"6. \u76f8\u6bd4\u5f02\u6b65 web worker \u597d\u5728\u54ea\uff1f",id:"6-\u76f8\u6bd4\u5f02\u6b65-web-worker-\u597d\u5728\u54ea",level:2},{value:"7. \u4f7f\u7528\u65b9\u5411",id:"7-\u4f7f\u7528\u65b9\u5411",level:2},{value:"8.Vue\u3001React \u9879\u76ee\u4f7f\u7528",id:"8vuereact-\u9879\u76ee\u4f7f\u7528",level:2},{value:"Vue \u4f7f\u7528",id:"vue-\u4f7f\u7528",level:3},{value:"\u9875\u9762\u4f7f\u7528",id:"\u9875\u9762\u4f7f\u7528",level:4},{value:"worker.js",id:"workerjs",level:4},{value:"React \u4f7f\u7528",id:"react-\u4f7f\u7528",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:4},{value:"9. \u603b\u7ed3",id:"9-\u603b\u7ed3",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(r.h2,{id:"1\u4ec0\u4e48\u662f-web-worker",children:"1.\u4ec0\u4e48\u662f web Worker?"}),"\n",(0,A.jsx)(r.p,{children:"JavaScript \u662f\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u5373\u6240\u6709\u4efb\u52a1\u53ea\u80fd\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u9762\u5b8c\u6210\uff0c\u524d\u9762\u7684\u4efb\u52a1\u6ca1\u6709\u505a\u5b8c\uff0c\u540e\u9762\u7684\u5c31\u53ea\u80fd\u7b49\u5f85\uff0c\u8fd9\u6837\u5f53\u6211\u4eec\u6267\u884c\u4e00\u4e9b\u65f6\u95f4\u8f83\u957f\u7684 js \u8fd0\u7b97\u65f6\u5019\u5462\u5c31\u4f1a\u963b\u585e\u540e\u9762\u6267\u884c\u7684\u4ee3\u7801\u3002\u6709\u4ec0\u4e48\u529e\u6cd5\u80fd\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u5462\uff1fweb worker \u5c31\u662f\u4e13\u95e8\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002\r\nWeb Worker \u662f\u4e00\u79cd\u7f51\u7edc\u63a5\u53e3\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u65e0\u6cd5\u8bbf\u95ee\u6216\u7ba1\u7406\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u3002Worker \u5b58\u5728\u4e8e\u4e00\u4e2a\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e2d\uff0c\u5b83\u548c\u4e3b\u7ebf\u7a0b\u4e92\u4e0d\u5e72\u6270\u3002\u5b83\u5728\u4e00\u4e2a\u65b0\u7684 Worker \u5bf9\u8c61\u521b\u5efa\u65f6\u63a5\u53d7\u4fe1\u606f\uff0c\u7136\u540e\u5411 worker \u53d1\u9001\u4fe1\u606f\u3002"}),"\n",(0,A.jsx)(r.h2,{id:"2web-worker-\u7684\u4f5c\u7528",children:"2.web worker \u7684\u4f5c\u7528"}),"\n",(0,A.jsx)(r.p,{children:"Web Worker \u7684\u4f5c\u7528\uff0c\u5c31\u662f\u4e3a JavaScript \u521b\u9020\u591a\u7ebf\u7a0b\u73af\u5883\uff0c\u5141\u8bb8\u4e3b\u7ebf\u7a0b\u521b\u5efa Worker \u7ebf\u7a0b\uff0c\u5c06\u4e00\u4e9b\u4efb\u52a1\u5206\u914d\u7ed9\u540e\u8005\u8fd0\u884c\u3002\u5728\u4e3b\u7ebf\u7a0b\u8fd0\u884c\u7684\u540c\u65f6\uff0cWorker \u7ebf\u7a0b\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u4e24\u8005\u4e92\u4e0d\u5e72\u6270\u3002\u7b49\u5230 Worker \u7ebf\u7a0b\u5b8c\u6210\u8ba1\u7b97\u4efb\u52a1\uff0c\u518d\u628a\u7ed3\u679c\u8fd4\u56de\u7ed9\u4e3b\u7ebf\u7a0b\u3002\u8fd9\u6837\u7684\u597d\u5904\u662f\uff0c\u4e00\u4e9b\u8ba1\u7b97\u5bc6\u96c6\u578b\u6216\u9ad8\u5ef6\u8fdf\u7684\u4efb\u52a1\uff0c\u88ab Worker \u7ebf\u7a0b\u8d1f\u62c5\u4e86\uff0c\u4e3b\u7ebf\u7a0b\uff08\u901a\u5e38\u8d1f\u8d23 UI \u4ea4\u4e92\uff09\u5c31\u4f1a\u5f88\u6d41\u7545\uff0c\u4e0d\u4f1a\u88ab\u963b\u585e\u6216\u62d6\u6162\u3002"}),"\n",(0,A.jsx)(r.h2,{id:"3web-worker-\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f7f\u7528\u6ce8\u610f\u70b9",children:"3.Web Worker \u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f7f\u7528\u6ce8\u610f\u70b9\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\uff081\uff09\u540c\u6e90\u9650\u5236"}),"\n",(0,A.jsx)(r.p,{children:"\u5206\u914d\u7ed9 Worker \u7ebf\u7a0b\u8fd0\u884c\u7684\u811a\u672c\u6587\u4ef6\uff0c\u5fc5\u987b\u4e0e\u4e3b\u7ebf\u7a0b\u7684\u811a\u672c\u6587\u4ef6\u540c\u6e90\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\uff082\uff09DOM \u9650\u5236"}),"\n",(0,A.jsx)(r.p,{children:"Worker \u7ebf\u7a0b\u6240\u5728\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u4e0e\u4e3b\u7ebf\u7a0b\u4e0d\u4e00\u6837\uff0c\u65e0\u6cd5\u8bfb\u53d6\u4e3b\u7ebf\u7a0b\u6240\u5728\u7f51\u9875\u7684 DOM \u5bf9\u8c61\uff0c\u4e5f\u65e0\u6cd5\u4f7f\u7528 document\u3001window\u3001parent \u8fd9\u4e9b\u5bf9\u8c61\u3002\u4f46\u662f\uff0cWorker \u7ebf\u7a0b\u53ef\u4ee5 navigator \u5bf9\u8c61\u548c location \u5bf9\u8c61\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\uff083\uff09\u901a\u4fe1\u8054\u7cfb"}),"\n",(0,A.jsx)(r.p,{children:"Worker \u7ebf\u7a0b\u548c\u4e3b\u7ebf\u7a0b\u4e0d\u5728\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587\u73af\u5883\uff0c\u5b83\u4eec\u4e0d\u80fd\u76f4\u63a5\u901a\u4fe1\uff0c\u5fc5\u987b\u901a\u8fc7\u6d88\u606f\u5b8c\u6210\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\uff084\uff09\u811a\u672c\u9650\u5236"}),"\n",(0,A.jsx)(r.p,{children:"Worker \u7ebf\u7a0b\u4e0d\u80fd\u6267\u884c alert()\u65b9\u6cd5\u548c confirm()\u65b9\u6cd5\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528 XMLHttpRequest \u5bf9\u8c61\u53d1\u51fa AJAX \u8bf7\u6c42\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\uff085\uff09\u6587\u4ef6\u9650\u5236"}),"\n",(0,A.jsx)(r.p,{children:"Worker \u7ebf\u7a0b\u65e0\u6cd5\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\uff0c\u5373\u4e0d\u80fd\u6253\u5f00\u672c\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\uff08file://\uff09\uff0c\u5b83\u6240\u52a0\u8f7d\u7684\u811a\u672c\uff0c\u5fc5\u987b\u6765\u81ea\u7f51\u7edc\u3002"}),"\n",(0,A.jsx)(r.h2,{id:"4-\u5982\u4f55\u4f7f\u7528-web-worker",children:"4. \u5982\u4f55\u4f7f\u7528 web worker"}),"\n",(0,A.jsx)(r.p,{children:"1.\u4e3b\u7ebf\u7a0b\u91c7\u7528 new \u547d\u4ee4\uff0c\u8c03\u7528 Worker()\u6784\u9020\u51fd\u6570\uff0c\u65b0\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"var worker = new Worker('./work.js');\n"})}),"\n",(0,A.jsx)(r.p,{children:"2.\u4e3b\u7ebf\u7a0b\u8c03\u7528 worker.postMessage()\u65b9\u6cd5\uff0c\u5411 Worker \u53d1\u6d88\u606f\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"worker.postMessage('Hello World');\n"})}),"\n",(0,A.jsx)(r.p,{children:"\u5b83\u53ef\u4ee5\u662f\u5404\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5305\u62ec\u4e8c\u8fdb\u5236\u6570\u636e\u3002"}),"\n",(0,A.jsx)(r.p,{children:"3.\u4e3b\u7ebf\u7a0b\u901a\u8fc7 worker.onmessage \u6307\u5b9a\u76d1\u542c\u51fd\u6570\uff0c\u63a5\u6536\u5b50\u7ebf\u7a0b\u53d1\u56de\u6765\u7684\u6d88\u606f\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"worker.onmessage = function (event) {\r\n  console.log('Received message ' + event.data);\r\n  doSomething();\r\n};\r\nfunction doSomething() {\r\n  // \u6267\u884c\u4efb\u52a1\r\n  worker.postMessage('Work done!');\r\n}\r\n\r\n// \u8fd9\u91cc\u7684worker.onmessage \u4e5f\u53ef\u4ee5\u6362\u6210self.addEventListener ,self\u4ee3\u8868\u5b50\u7ebf\u7a0b\u81ea\u8eab\uff0c\u5373\u5b50\u7ebf\u7a0b\u7684\u5168\u5c40\u5bf9\u8c61  \u7b49\u540c\u4e8e\r\nself.addEventListener(\r\n  'message',\r\n  function (e) {\r\n    self.postMessage('You said: ' + e.data);\r\n  },\r\n  false\r\n);\n"})}),"\n",(0,A.jsx)(r.p,{children:"4.Worker \u5b8c\u6210\u4efb\u52a1\u4ee5\u540e\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u628a\u5b83\u5173\u6389\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"worker.terminate();\n"})}),"\n",(0,A.jsx)(r.p,{children:"5.Worker \u5185\u90e8\u5982\u679c\u8981\u52a0\u8f7d\u5176\u4ed6\u811a\u672c\uff0c\u6709\u4e00\u4e2a\u4e13\u95e8\u7684\u65b9\u6cd5 importScripts()\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"importScripts('script1.js', 'script2.js');\n"})}),"\n",(0,A.jsx)(r.p,{children:"6.\u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u76d1\u542c Worker \u662f\u5426\u53d1\u751f\u9519\u8bef\u3002\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0cWorker \u4f1a\u89e6\u53d1\u4e3b\u7ebf\u7a0b\u7684 error \u4e8b\u4ef6\u3002"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"worker.onerror(function (event) {\r\n  console.log(\r\n    ['ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message].join('')\r\n  );\r\n});\r\n\r\n// \u6216\u8005\r\nworker.addEventListener('error', function (event) {\r\n  // ...\r\n});\n"})}),"\n",(0,A.jsx)(r.h2,{id:"5-web-worker-\u7684\u7b80\u5355\u5e94\u7528",children:"5. web worker \u7684\u7b80\u5355\u5e94\u7528"}),"\n",(0,A.jsx)(r.p,{children:"\u4e3b\u7ebf\u7a0b"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"const worker = new Worker('./worker.js');\r\n\r\nworker.addEventListener(\r\n  'message',\r\n  function ({ data }) {\r\n    switch (data.type) {\r\n      case 'prime':\r\n        document.getElementById('prime').textContent = `${\r\n          data.n\r\n        }\u4e4b\u5185\u7684\u6240\u6709\u8d28\u6570\u662f\uff1a${data.result.join(',')}`;\r\n        break;\r\n      case 'fibonacci':\r\n        document.getElementById(\r\n          'fibonacci'\r\n        ).textContent = `${data.n}\u4e4b\u5185\u7684\u6240\u6709\u6590\u6ce2\u90a3\u5951\u6570\u5217\u4e4b\u548c\u662f\uff1a${data.result}`;\r\n        break;\r\n      case 'reverseNumber':\r\n        document.getElementById(\r\n          'reverseNumber'\r\n        ).textContent = `${data.n}\u4e4b\u5185\u7684\u6240\u6709\u56de\u6587\u6570\u662f\uff1a${data.result}`;\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n  },\r\n  false\r\n);\r\nworker.postMessage({ type: 'prime', n: 300000 });\r\nworker.postMessage({ type: 'fibonacci', n: 40 });\r\nworker.postMessage({ type: 'reverseNumber', n: 400000 });\n"})}),"\n",(0,A.jsx)(r.p,{children:"worker.js"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"self.addEventListener(\r\n  'message',\r\n  function ({ data }) {\r\n    switch (data.type) {\r\n      case 'prime': // \u8d28\u6570\r\n        self.postMessage({\r\n          type: 'prime',\r\n          n: data.n,\r\n          result: countPrime(data.n)\r\n        });\r\n        break;\r\n      case 'fibonacci': //\u6590\u6ce2\u90a3\u5951\u6570\u5217\r\n        self.postMessage({\r\n          type: 'fibonacci',\r\n          n: data.n,\r\n          result: fibonacci(data.n)\r\n        });\r\n        break;\r\n      case 'reverseNumber': // \u56de\u6587\u6570\r\n        self.postMessage({\r\n          type: 'reverseNumber',\r\n          n: data.n,\r\n          result: countReverseNumber(data.n)\r\n        });\r\n      default:\r\n        break;\r\n    }\r\n  },\r\n  false\r\n);\r\n\r\n// \u8ba1\u7b97n\u4ee5\u5185\u7684\u6240\u6709\u8d28\u6570\r\nfunction countPrime(num) {\r\n  let n = 1;\r\n  let nums = [];\r\n  search: while (n < num) {\r\n    // \u5f00\u59cb\u641c\u5bfb\u4e0b\u4e00\u4e2a\u8d28\u6570\r\n    n += 1;\r\n    for (let i = 2; i <= Math.sqrt(n); i++) {\r\n      // \u5982\u679c\u9664\u4ee5n\u7684\u4f59\u6570\u4e3a0\uff0c\u5f00\u59cb\u5224\u65ad\u4e0b\u4e00\u4e2a\u6570\u5b57\u3002\r\n      if (n % i == 0) {\r\n        nums.push(n);\r\n        continue search;\r\n      }\r\n    }\r\n  }\r\n  return nums;\r\n}\r\n// \u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u4e4b\u548c\r\nfunction fibonacci(n) {\r\n  if (n == 1 || n == 2) return 1;\r\n  return n >= 3 ? fibonacci(n - 1) + fibonacci(n - 2) : null;\r\n}\r\n// \u8ba1\u7b97\r\nfunction countReverseNumber(n) {\r\n  return Array.from(new Array(n), (v, i) => i + 1).filter((v) => {\r\n    let nv = v.toString().split('').reverse().join('');\r\n    return nv == v && v > 10;\r\n  });\r\n}\n"})}),"\n",(0,A.jsx)(r.h2,{id:"6-\u76f8\u6bd4\u5f02\u6b65-web-worker-\u597d\u5728\u54ea",children:"6. \u76f8\u6bd4\u5f02\u6b65 web worker \u597d\u5728\u54ea\uff1f"}),"\n",(0,A.jsx)(r.p,{children:"\u6211\u4eec\u5148\u770b\u770b\u5728\u4e3b\u7ebf\u7a0b js \u73af\u5883\u4e0b\u6267\u884c\u4e00\u4e2a\u5f88\u5927\u7684\u5faa\u73af\u9700\u8981\u7684\u65f6\u95f4"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"function loopFor() {\r\n  console.time('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n  let cnt = 0;\r\n  for (let i = 0; i < 20e8; i += 1) {\r\n    cnt += 1;\r\n  }\r\n  console.log(cnt);\r\n  console.timeEnd('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n}\r\nloopFor();\r\nconsole.log('\u4e1a\u52a1\u4ee3\u7801\u6253\u5370');\n"})}),"\n",(0,A.jsxs)(r.p,{children:[(0,A.jsx)(r.img,{src:n(19342).A+"",width:"716",height:"152"}),"\r\n\u53ef\u4ee5\u770b\u5230\u6267\u884c\u4e00\u4e2a 20e8 \u5927\u7684\u5faa\u73af\u9700\u8981\u5927\u6982 2 \u79d2\u591a\u7684\u65f6\u95f4\uff0c\u5e76\u4e14\u5728\u6267\u884c\u540c\u65f6\u4f1a\u963b\u585e\u4e0b\u9762\u7684 console \u6253\u5370\u4ee3\u7801"]}),"\n",(0,A.jsx)(r.p,{children:"\u90a3\u4e48\u770b\u5230\u8fd9\u6709\u4eba\u4f1a\u8bf4\u53ef\u4ee5\u5c06\u8fd9\u4e2a for \u5faa\u73af\u5199\u6210\u5f02\u6b65\uff0c\u5f53\u7136\u53ef\u4ee5\uff0c\u6211\u4eec\u628a for \u5faa\u73af\u52a0\u5230\u5ef6\u65f6\u5668\u91cc\u6267\u884c"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"function loopFor() {\r\n  console.time('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n  let cnt = 0;\r\n  for (let i = 0; i < 20e8; i += 1) {\r\n    cnt += 1;\r\n  }\r\n  console.log(cnt);\r\n  console.timeEnd('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n}\r\n// loopFor()\r\nconsole.time('\u5ef6\u65f6\u5668\u6267\u884c\u65f6\u95f4\uff1a');\r\nsetTimeout(loopFor);\r\nconsole.timeEnd('\u5ef6\u65f6\u5668\u6267\u884c\u65f6\u95f4\uff1a');\r\n\r\nconsole.log('\u4e1a\u52a1\u4ee3\u7801\u6253\u5370');\n"})}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{src:n(60276).A+"",width:"756",height:"180"})}),"\n",(0,A.jsx)(r.p,{children:"\u53ef\u4ee5 \u770b\u5230\u786e\u5b9e\u6ca1\u963b\u585e\u540c\u6b65\u6267\u884c\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u4f46\u8fd9\u5e76\u975e\u89e3\u51b3\u4ee3\u7801\u6d41\u5835\u585e\u95ee\u9898\u7684\u6700\u4f73\u65b9\u6848\u3002\u867d\u7136 setTimeout \u662f\u4e00\u4e2a\u4e0d\u963b\u788d\u6b63\u5e38\u4ee3\u7801\u6d41\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u4f46\u662f\u8fd9\u6837\u505a\u4ec5\u4ec5\u6539\u53d8\u4e86\u51fd\u6570\u7684\u6267\u884c\u987a\u5e8f\u3002\u7ee7\u7eed\u770b\u4e0b\u9762\u4f8b\u5b50\uff0c\u5c06\u4e1a\u52a1\u4ee3\u7801\u4e5f\u5199\u6210\u5ef6\u65f6\u5668"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"function loopFor() {\r\n  console.time('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n  let cnt = 0;\r\n  for (let i = 0; i < 20e8; i += 1) {\r\n    cnt += 1;\r\n  }\r\n  console.log(cnt);\r\n  console.timeEnd('for\u5faa\u73af\u6267\u884c\u65f6\u95f4\uff1a');\r\n}\r\n// loopFor()\r\nconsole.time('\u5ef6\u65f6\u5668\u6267\u884c\u65f6\u95f4\uff1a');\r\nsetTimeout(loopFor);\r\nconsole.timeEnd('\u5ef6\u65f6\u5668\u6267\u884c\u65f6\u95f4\uff1a');\r\n\r\nsetTimeout(() => {\r\n  console.log('\u4e1a\u52a1\u4ee3\u7801\u6253\u5370');\r\n});\n"})}),"\n",(0,A.jsx)(r.p,{children:(0,A.jsx)(r.img,{src:n(76957).A+"",width:"712",height:"194"})}),"\n",(0,A.jsx)(r.p,{children:"\u53ef\u4ee5\u770b\u5230\u7b2c\u4e8c\u4e2a setTimeout \u603b\u662f\u5728\u7b2c\u4e00\u4e2a setTimeout \u7ed3\u675f for \u5faa\u73af\u540e\u624d\u5f00\u59cb\u8fd0\u884c console.log \u6307\u4ee4\u3002\u5982\u679c\u7b2c\u4e00\u4e2a setTimeout \u5305\u542b\u7684\u4efb\u52a1\u8017\u65f6\u8f83\u957f\uff0c\u90a3\u4e48\u7b2c\u4e8c\u4e2a setTimeout \u5c06\u65e0\u6cd5\u8fd0\u884c\u3002\r\n\u4e3a\u4ec0\u4e48\uff1f\u56e0\u4e3a Javascript \u662f\u4e00\u79cd\u5355\u7ebf\u7a0b\u7f16\u7a0b\u8bed\u8a00\u3002\u5f02\u6b65\u51fd\u6570\u5b58\u5728\u4e8e\u4e0d\u540c\u7684\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u4f46\u5b83\u4eec\u4ecd\u7136\u9075\u5faa\u5355\u7ebf\u7a0b\u89c4\u5219\u3002"}),"\n",(0,A.jsx)(r.h2,{id:"7-\u4f7f\u7528\u65b9\u5411",children:"7. \u4f7f\u7528\u65b9\u5411"}),"\n",(0,A.jsx)(r.p,{children:"1\uff09\u9884\u5148\u6293\u53d6\u6216\u7f13\u5b58\u6570\u636e\u4ee5\u4fbf\u7a0d\u540e\u4f7f\u7528\r\n2\uff09\u7a81\u51fa\u663e\u793a\u4ee3\u7801\u8bed\u6cd5\u6216\u5176\u4ed6\u5b9e\u65f6\u6587\u672c\u683c\u5f0f\r\n3\uff09\u62fc\u5199\u68c0\u67e5\r\n4\uff09\u5206\u6790\u89c6\u9891\u6216\u97f3\u9891\u6570\u636e\r\n5\uff09\u80cc\u666f I/O \u6216\u7f51\u7edc\u670d\u52a1\u8f6e\u8be2\r\n6\uff09\u5904\u7406\u8f83\u5927\u6570\u7ec4\u6216\u8d85\u5927 JSON \u54cd\u5e94\r\n7\uff09 \u4e2d\u7684\u56fe\u7247\u8fc7\u6ee4\r\n8\uff09\u66f4\u65b0\u672c\u5730\u7f51\u7edc\u6570\u636e\u5e93\u4e2d\u7684\u591a\u884c\u5185\u5bb9"}),"\n",(0,A.jsx)(r.h2,{id:"8vuereact-\u9879\u76ee\u4f7f\u7528",children:"8.Vue\u3001React \u9879\u76ee\u4f7f\u7528"}),"\n",(0,A.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\u4e3a\u5927\u5bb6\u6f14\u793a vue \u4ee5\u53ca react \u9879\u76ee\u5982\u4f55\u4f7f\u7528"}),"\n",(0,A.jsx)(r.h3,{id:"vue-\u4f7f\u7528",children:"Vue \u4f7f\u7528"}),"\n",(0,A.jsx)(r.p,{children:'vue \u7248\u672c\uff1a"vue": "^2.6.14",vue-cli \u7248\u672c\uff1a@vue/cli 5.0.8 \u5b89\u88c5 worker-loader'}),"\n",(0,A.jsx)(r.h4,{id:"\u9875\u9762\u4f7f\u7528",children:"\u9875\u9762\u4f7f\u7528"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"<template><div>\u6211\u7684\u9875\u9762</div></template>\r\n<script>\r\nexport default {\r\n  name: 'MyselfView',\r\n  data() {\r\n    return {\r\n      worker: null,\r\n    }\r\n  },\r\n  mounted() {\r\n    // \u521b\u5efa WebWorker \u5b9e\u4f8b\r\n   this.worker = new Worker(new URL('./worker.js', import.meta.url))\r\n    console.log('worker: ', this.worker)\r\n    this.worker.postMessage(40) // \u8bf7\u6c42\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u7b2c40\u9879\r\n\r\n    this.worker.addEventListener('message', (event) => {\r\n      console.log('Fibonacci result:', event.data)\r\n    })\r\n  },\r\n  beforeDestroy() {\r\n    // \u7ec4\u4ef6\u9500\u6bc1\u65f6\u7ec8\u6b62 WebWorker\r\n    this.worker.terminate()\r\n  },\r\n}\r\n<\/script>\n"})}),"\n",(0,A.jsx)(r.h4,{id:"workerjs",children:"worker.js"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"// worker.js\r\nself.addEventListener('message', (e) => {\r\n  console.log('e: ', e);\r\n  const n = e.data;\r\n  let a = 0,\r\n    b = 1,\r\n    temp;\r\n  for (let i = 2; i <= n; i++) {\r\n    temp = a;\r\n    a = b;\r\n    b = temp + b;\r\n  }\r\n  self.postMessage(b);\r\n});\n"})}),"\n",(0,A.jsxs)(r.p,{children:["\u6548\u679c\r\n",(0,A.jsx)(r.img,{src:n(27316).A+"",width:"1026",height:"172"})]}),"\n",(0,A.jsx)(r.h3,{id:"react-\u4f7f\u7528",children:"React \u4f7f\u7528"}),"\n",(0,A.jsx)(r.p,{children:'react \u7248\u672c\uff1a "react": "^18.2.0"'}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"import React, { useEffect } from 'react'\r\n// import WorkerScript from './worker.worker.js'\r\n\r\nconst Demo = () => {\r\n  useEffect(() => {\r\n    const worker = new Worker(new URL('./worker.worker.js', import.meta.url))\r\n\r\n    worker.onmessage = function (e) {\r\n      console.log('Fibonacci result:', e.data)\r\n    }\r\n    worker.postMessage(40) // \u8bf7\u6c42\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u7b2c40\u9879\r\n    // \u4f7f\u7528 worker ...\r\n    return () => worker.terminate()\r\n  }, [])\r\n\r\n  return (\r\n    <div>\r\n      <p>count\u7684\u503c</p>\r\n    </div>\r\n  )\n"})}),"\n",(0,A.jsxs)(r.p,{children:["\u6548\u679c\r\n",(0,A.jsx)(r.img,{src:n(48445).A+"",width:"1081",height:"75"})]}),"\n",(0,A.jsx)(r.h4,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,A.jsx)(r.p,{children:"\u7531\u4e8e\u6211\u4eec\u5728\u9879\u76ee\u5f00\u53d1\u65f6\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u6253\u5305\u5de5\u5177(vite/webpack)\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u6700\u65b0\u7248\u7684 vite/webpack \u90fd\u652f\u6301 Web Worker \u4e86\u3002"}),"\n",(0,A.jsx)(r.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\uff1anew URL()\u7684\u65b9\u5f0f --vite/webpack \u90fd\u652f\u6301"}),"\n",(0,A.jsx)(r.pre,{children:(0,A.jsx)(r.code,{className:"language-js",children:"new Worker(new URL('./worker.js', import.meta.url));\n"})}),"\n",(0,A.jsx)(r.h2,{id:"9-\u603b\u7ed3",children:"9. \u603b\u7ed3"}),"\n",(0,A.jsx)(r.p,{children:"\u901a\u5e38 worker \u88ab\u7528\u4e8e\u5360\u7528\u5927\u91cf CPU \u8d44\u6e90\u7684\u7a0b\u5e8f\u4e2d\uff0c\u6bd4\u5982 2D canvas \u548c\u77e2\u91cf\u56fe,webGL \u6570\u636e\u7d22\u5f15\u8ba1\u7b97\u7b49\u3002\u56e0\u4e3a worker \u4f4d\u4e8e\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\uff0c\u5b83\u4e0d\u4f1a\u963b\u65ad\u4e3b\u7ebf\u7a0b\u4e2d\u7684\u4efb\u4f55\u4efb\u52a1\uff0c\u6bd4\u5982 UI \u6e32\u67d3\u3002\u5982\u679c\u80fd\u5c06 worker \u8fd0\u7528\u81ea\u5982\uff0c\u5b83\u7684\u6548\u679c\u5c06\u5341\u5206\u5f3a\u5927\u3002\u5305\u62ec IE10 \u5728\u5185\u7684\u4f17\u591a\u6d4f\u89c8\u5668\u90fd\u80fd\u591f\u5f88\u597d\u5730\u652f\u6301\u8fd9\u4e00\u529f\u80fd\u3002"}),"\n",(0,A.jsx)(r.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,A.jsxs)(r.ul,{children:["\n",(0,A.jsx)(r.li,{children:(0,A.jsx)(r.a,{href:"https://blog.csdn.net/chenyajundd/article/details/137033829",children:"https://blog.csdn.net/chenyajundd/article/details/137033829"})}),"\n",(0,A.jsx)(r.li,{children:(0,A.jsx)(r.a,{href:"https://blog.csdn.net/weixin_37680520/article/details/117623499",children:"https://blog.csdn.net/weixin_37680520/article/details/117623499"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,A.jsx)(r,{...e,children:(0,A.jsx)(a,{...e})}):a(e)}},60276:(e,r,n)=>{n.d(r,{A:()=>A});const A=n.p+"assets/images/brosmer10-8d07c35eb0f233a18f545091e144874a.png"},76957:(e,r,n)=>{n.d(r,{A:()=>A});const A=n.p+"assets/images/brosmer11-32a17dde8b086265978d75957c75a9a7.png"},19342:(e,r,n)=>{n.d(r,{A:()=>A});const A=n.p+"assets/images/brosmer9-28c328f719b28bb60dce007899442eb2.png"},27316:(e,r,n)=>{n.d(r,{A:()=>A});const A=n.p+"assets/images/broswer12-b1e7a2c24a5cf3e1f2e896db065e2095.png"},48445:(e,r,n)=>{n.d(r,{A:()=>A});const A="data:image/png;base64,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"},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var A=n(96540);const s={},o=A.createContext(s);function t(e){const r=A.useContext(o);return A.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),A.createElement(o.Provider,{value:r},e.children)}}}]);