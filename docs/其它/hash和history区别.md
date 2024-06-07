1.hash：带 # 号，是通过 hash 值的不同，显示不同的页面的。hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。⭐⭐  
优点：  
 兼容性好，支持低版本和 IE 浏览器  
 实现前端路由无需服务端支持  
缺点  
 url 带有#符号，略丑  

history：不带 # 号，利用了 HTML5 中新增的 pushState() 和 replaceState() 方法（需要特定浏览器支持），用来完成 URL 跳转而无须重新加载页面，不过这种模式还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，就需要配置 404 页面。⭐

兼容性：hash 能兼容到 IE8，history 只能兼容到 IE10。  
原理：⭐

1. hash 通过监听浏览器的 onhashchange()事件变化，查找对应的路由规则
2. history 原理： 利用 H5 的 history 中新增的两个 API pushState() 和 replaceState() 和一个事件 onpopstate 监听 URL 变化

hash  
即地址栏 URL 中的 # 符号（此 hash 不是密码学里的散列运算）。  
比如这个 URL：http://www.baidu.com/#/home，hash 的值为 #/home。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

history  
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法（需要特定浏览器支持），用来完成 URL 跳转而无须重新加载页面，不过这种模式还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，就需要配置 404 页面。

1. hash 就是指 url 后面的 # 号以及后面的字符，history 没有带#，外观上比 hash 模式好看些
2. 原理的区别（原理）
3. hash 能兼容到 IE8， history 只能兼容到 IE10；
4. 由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件（hashchange 只能改变 # 后面的 url 片段）；虽然 hash 路径出现在 URL 中，但是不会出现在 HTTP 请求中，对后端完全没有影响，因此改变 hash 值不会重新加载页面，基本都是使用 hash 来实现前端路由的。

区别  
通过 history api，我们丢掉了丑陋的#，但是它也有个问题：不怕前进，不怕后退，就怕刷新，（如果后端没有准备的话），因为刷新是实实在在地去请求服务器的。  
在 hash 模式下，前端路由修改的是#中的信息，而浏览器请求时不会将 # 后面的数据发送到后台，所以没有问题。但是在 history 下，你修改 path 时，当刷新时，如果服务器中没有相应的响应或者资源，则会刷新出来 404 页面
