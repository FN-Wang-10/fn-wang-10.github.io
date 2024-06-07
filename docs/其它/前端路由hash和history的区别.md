1. 前端路由的由来  
   说前端路由由来之前，先看下后端路由：  
   后端路由：在前后端不分离的时代，路由都是通过服务端指定的，服务端根据客户端发来的 HTTP 请求，将返回的数据于模板引擎响应结果结合后进行渲染，将渲染完毕的页面发送给客户端。  
   优点：SEO 友好，爬虫爬取到的页面就是最终的渲染结果。  
   缺点：每次发起请求都要刷新页面，用户体验不好，服务器压力大。

SPA  
SPA 是单页面应用 Single Page web Application 的简写。简单理解就是一个 web 项目只有一个 html 文件，一旦页面加载完成，SPA 不会因为用户的操作进行重新加载或跳转，而是用 JS 动态变换 html 的内容（使页面无需重新加载，用户体验更加流程），页面本身的 url 并没有变化，这将导致两个问题：  
1.SPA 无法就记住用户的操作：刷新 & 前进 & 后退。  
2.实际只有一个 url，对 SEO 不友好，爬虫获取到的 html 只是模板而不是最终的页面。

前端路由的由来可以理解成是基于 SPA 页面局部更新特点的，但是要解决 SPA 的两个问题，实现：  
改变 url 不让浏览器向服务器发送请求  
监听 url 的变化，执行对应的操作

2.hash 模式  
hash 模式：www.baidu.com/#hashhash  
hash 指的就是 url 的#及后面的字符，如上面的“#hashhash”  
hash 模式的特点；  
hash 值的变化不会导致浏览器向服务器发送请求，不会引起页面刷新  
hash 值变化会触发 hashchange 事件  
hash 值变化会在浏览器的历史中留下记录，使用的浏览器的后退按钮可以回到上一个 hash 值  
hash 永远不会提交到服务器，即使刷新页面也不会。  
由以上特点可见，hash 模式完全满足前端路由的需求，因此在 h5 的 history 模式出现之前，基本都是使用 hash 模式实现前端路由。

优缺点：  
优点：  
兼容性好，支持低版本和 IE 浏览器  
实现前端路由无需服务端支持  
缺点  
url 带有#符号，略丑

3.history 模式  
在 HTML5 之前，浏览器就有 history 对象了，只能用于多页面之间的跳转  
```javascript
history.go(n) // n>0 前进 n 页；n<0 后退 n 页  
history.forward() // 前进一页  
history.back() // 后退一页
```

在 HTML5 规范中，history 中增加了新的 API：

```javascript
/*
  参数说明：
    state：合法的JavaScript对象，可以用在popstate对象中
    title：标题，基本忽略，用null
    url: 任意有效的url，将要跳转的新地址
*/
history.pushState(state, title, url); // 保留现有记录的同时，将url加到历史记录中
history.replaceState(state, title, url); // 将历史记录中的当前页面替换成url
history.state; // 返回当前状态对象
```

pushState 和 replaceState 方法可以改变 url，但是不会刷新页面，浏览器不会向服务端发送请求，具备了实现前端路由的能力。  
如何监听 url 的变化？  
对比 hash 的 hashchange 方法，history 的变化不会触发任何事件，我们可以通过罗列可能触发 history 变化的情况，对这些情况进行拦截，以此监听 history 的变化。  
对于单页面的 history 模式而言，url 的改变只能由以下情况引起：  
1.点击浏览器的前进/后退按钮，onpopstate 可以监听到  
2.点击 a 标签  
3.在 JS 代码中触发 history.pushState()或 history.replaceState()  
history 模式的 url 发生变化时不会立即向服务器发起请求，刷新会立即请求。

4.两种模式的区别  
外观：hash 的 url 有个#符号，history 没有，history 外观更好看。  
刷新：hash 刷新会加载到地址栏对应的页面，history 刷新浏览器会重新发起请求，如果服务端没有匹配当前的 url，就会出现 404 页面。  
兼容性：hash 能兼容到 IE8，history 只能兼容到 IE10。  
服务端支持：hash（#及后面的内容）的变化不会导致浏览器向服务器发起请求；history 刷新会重新向服务器发起请求，需要在服务端做处理：如果没有匹配到资源，就返回同一个 html 页面。  
原理：hash 通过监听浏览器的 onhashchange()事件，查找对应的路由规则；history 利用 H5 新增的 pushState()和 replaceState()方法改变 url。  
记录：hash 模式只有#后面的内容被修改才会添加新的记录栈；history 通过 pushState()设置的 url 于当前 url 一模一样也会被记录到历史记录栈。

5.使用场景（如何选择）  
一般情况下，vue-router 前端路由使用 hash 和 history 模式都可以。

如果追求外观，history 更合适。  
对比 hash，history 有以下优势：  
pushState()设置的 url 可以是与当前 url 同源的 url；而 hash 只能改变#后面的内容，只能设置于当前 url 同文档的 url。  
pushState()设置的 url 与当前 url 一模一样也会被添加到历史记录栈；hash 必须#后面的内容被更新才会记录。  
pushState()可以通过 stateObject 参数添加任意类型的数据到记录中，而 hash 只能添加短字符串。  
pushState()可以额外设置 title 属性供后续使用。  
history 模式需要后端配合。  
hash 兼容性更好。

https://blog.csdn.net/qq_42345108/article/details/124144047?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165780813316781818795841%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165780813316781818795841&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~pc_rank_34-4-124144047-null-null.142^v32^pc_rank_34,185^v2^tag_show&utm_term=hash%E8%B7%AF%E7%94%B1%E5%92%8Chistory%E7%9A%84%E5%8C%BA%E5%88%AB&spm=1018.2226.3001.4187
