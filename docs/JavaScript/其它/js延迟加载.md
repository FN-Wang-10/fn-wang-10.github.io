我们都知道 dom 元素是从上到下渲染的, 如果 js 来管理页面上的元素, 并且 js 加载操作想在 HTML 之前, 代码就会报错.
这是因为 js 加载执行在 DOM 结构之前, 所以获取不到, 解决方法就是吧 script 放到 div 后面

异步下载就此产生, 在浏览器下载执行 js 的同时, 还会继续后续页面的处理

1. defer
   `<script defer="defer">`  
   添加 defer 属性 , 等于告诉浏览器立即下载, 但延迟执行  
   虽然 script 放在 div 元素之上, 但是包含的脚本将延迟浏览器遇到 html 标签后才执行  
   defer 属性, 只适用于外部脚本文件.

2. async 属性  
   于 defer 类似, 用于改变处理脚本的行为, 只适用于外部脚本文件, 不会阻塞其他资源下载, 所以不会影响页面的加载  
   defer 是 HTML4 为 script 标签定义的属性  
   async 是 HTML5 位 script 标签定义的属性  
   async 不让页面等待脚本下载和执行, 从而异步加载页面其他内容, 不会影响页面的加载  
   注意点是 不能控制加载的顺序

3. 使用 setTimeout 延迟方法
4. 动态创建 DOM 方式

https://blog.csdn.net/zm_miner/article/details/120059859?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165573311216781685333236%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165573311216781685333236&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v32_ecpm-3-120059859-null-null.142^v18^rank_v32,157^v15^new_3&utm_term=js%E6%96%87%E4%BB%B6%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD&spm=1018.2226.3001.4187
