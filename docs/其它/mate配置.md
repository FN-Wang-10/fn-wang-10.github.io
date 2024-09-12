```html
<meta charset="UTF-8" />
<!-- charset 属性规定 HTML 文档的字符编码 charset 属性是 HTML5 中的新属性，且替换了：<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> -->

<meta http-equiv="”Cache-Control”" content="”no-siteapp”" />
<!-- 不让百度转码 通过手机百度打开网页时，百度可能会对你的网页进行转码，修改，会添点广告啥的。 -->

<meta http-equiv="X-UA-Compatible" content="IE=7" />
<!-- 无论页面是否包含 <!DOCTYPE> 指令，IE8/9都会以 IE7 的标准渲染模式 -->

<meta http-equiv="X-UA-Compatible" content="IE=8" />
<!-- IE8/9都会以 IE8 的标准渲染模式，但由于本身 X-UA-Compatible 文件头仅支持 IE8 以上版本，因此等同于冗余代码 -->

<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- Edge 模式通知IE浏览器  以最高级别的可用模式显示内容，这实际上破坏了“锁定”模式。即如果你有IE9的话说明你有IE789，那么就调用高版本的那个也就是IE9 -->

<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
<!-- 如果IE有安装Google Chrome Frame，那么就走安装的组件，如果没有就和<meta http-equiv="X-UA-Compatible" content="edge" />一样。 -->

<meta http-equiv="Window-target" content="_top" />
<!-- 指定要显示在一个特定框架中的页面 -->

<meta http-equiv="reflash" content="60" />
<!-- 定时刷新或重定向，用户不可控制，慎用。 上面的是60秒刷新一次。 -->
<meta http-equiv="refresh" content="60; url=https://www.baidu.xxx.com" />
<!-- 页面60秒后，跳转到其他网页， content: 表示时间，单位秒。 url :跳转地址。 -->

<!-- 缓存机制 -->
<!-- 强制页面在当前窗口以独立的页面显示，防止别人在框架里调用你的页面 -->
<meta http-equiv="pragma" content="no-cache" />
<!-- 禁止浏览器从本地计算机的缓存中访问页面内容 -->

<meta http-equiv="cache-control" content="no-cache" />
<!-- 设定页面使用的字符集  no-cache表示先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。   即第一条被替换的格式-->

<meta http-equiv="expires" content="0" />
<!-- 设定网页的到期时间。一旦网页过期，必须到服务器上重新传输 -->
<!-- 上面三条：清除浏览器中的缓存，几句合起来用，就可以使你再次进入曾经访问过的页面时，ie浏览器必须从服务端下载最新的内容，达到刷新的效果 -->

<meta http-equiv="x-dns-prefetch-control" content="off" />
<!-- 通过设置为 “off” 完全退出 DNS 预取 -->

<meta http-equiv="set-cookie" content="name=value; expires=date; path=url" />
<!-- 在客户端存储 cookie，web 浏览器的客户端识别， 如果网站过期，网站存在本地的cookie会被删除。-->

<meta name="keywords" content="网页 关键字" />
<meta name="keywords" content="网页 描述文字" />

<!-- 上面两条：可以让搜索引擎搜索到你的网站 -->

<meta
  http-equiv="Page-Enter"
  content="revealTrans(duration=5.0, transition=20)"
/>
<meta
  http-equiv="Page-Exit"
  content="revealTrans(duration=5.0, transition=20)"
/>

<!-- 上面两条：可以让网站在进入或者离开网页的一刹那实现动画效果 效果见：https://www.cnblogs.com/something/archive/2012/10/18/2728765.html  https://blog.csdn.net/coooliang/article/details/39206715-->

<meta name="author" content="Hege Refsnes" />
<!-- 定义网页作者 -->

<meta name="language" content="en" />
<!-- 此标签为语系标签，即作用就是声明编码默认语系  【不推荐】 -->

<meta
  name="robots"
  content="index(允许检索该页面)),noindex(不允许检索该页面),fllow(允许检索该页面上的链接), nofollow(不允许检索该页面的链接),"
/>
<!-- 指定搜索引擎爬虫的行为 -->

<meta name="revisit-after" content="7 days" />
<!-- 如果网站不经常更新，为了减少搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫访问时间。 -->

<meta name="rating" content="General" />
<!-- 对当前页面一个等级衡量，告诉蜘蛛当前页面在整个网站中的权重到底是多少。General是一般页面，Mature是比较成熟的页面，Restricted代表受限制的。 -->

<meta name="googlebot" content="index,follow" /><!-- 仅对 Google 有效 -->

<meta
  name="referrer"
  content="no-referrer(不发送referrer),no-referrer-when-downgrade(协议降级时，不发送referrer),origin(只发送host部分，不包括路径和参数),origin-when-crossorigin(在跨域的时候只发送host部分，同源则发送完整的url),unsafe-URL(总是发送referrer字段，最宽松的策略，不考虑是否同源等问题)"
/>
<!-- 控制网页发送给服务器的referrer信息 -->

<meta name="generator" content="FrontPage 4.0" />
<!-- 生成文档的一个软件包（不用于手写页面）,文件是用FrontPage 4.0来生成的. -->
<meta name="url" content="https://www.baidu.xxx.com" />
<!-- 在seo优化网站时，告诉收索引擎，这个网页的地址是什么 -->

<meta name="copyright" content="Iris_mao" />
<!-- 注明网页的版权所有 copyright(版权) -->
<meta name="subject" content="你的网站主题" />
<!-- 关于你的网站主题的简短描述 -->

<meta name="topic" content="" />
<!-- 描述网站的主题 -->

<meta name="summary" content="" />
<!-- 公司概要或网站目的 -->

<!-- goodle 专用 -->
<meta http-equiv="X-UA-Compatible" content="chrome=1" />
<!-- 优先使用最新的chrome版本 -->

<meta name="google" content="nositelinkssearchbox" />
<!-- 告诉 Google 不显示网站链接的搜索框 -->

<meta name="google" content="notranslate" />
<!-- 告诉 Google 不提供此页面的翻译 -->

<meta name="google-site-verification" content="verification_token" />
<!-- 验证 Google 搜索控制台的所有权 -->

<meta name="renderer" content="webkit" />
<!-- 双核浏览器，用于指定浏览器的渲染内核 【默认webkit内核】-->

<meta name="”Distribution”" content="Global" />
<!-- 这个用语声明你网站的发布对象是面向全球，还是仅仅针对当地。 -->

<meta name="applicable-device" content="pc" />
<!-- pc站 -->
<meta name="applicable-device" content="mobile" />
<!-- 手机移动站 -->
<meta name="applicable-device" content="pc,mobile" />
<!-- 不需要经过url自适配跳转就可以根据浏览器的屏幕大小自适应的展现合适的效果，同时适合在移动设备和电脑上进行浏览 即响应式的-->

<!-- 移动设备 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>

<!--  viewport：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放
           width - viewport的宽度 height - viewport的高度
           initial-scale - 初始的缩放比例
           minimum-scale - 允许用户缩放到的最小比例
           maximum-scale - 允许用户缩放到的最大比例
           user-scalable - 用户是否可以手动缩放 -->

<meta name="format-detection" content="telephone=no,email=no" />
<!-- 禁用自动检测和格式化可能的电话号码 ,即点击数字或邮箱样的字符不会做其他操作。-->

<meta name="HandheldFriendly" content="true" />
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->

<meta name="MobileOptimized" content="320" />
<!-- 微软的老式浏览器 -->

<meta name="screen-orientation" content="portrait" />
<!-- uc强制竖屏 -->

<meta name="x5-orientation" content="portrait" />
<!-- QQ强制竖屏 -->

<meta name="full-screen" content="yes" />
<!-- UC强制全屏 -->

<meta name="x5-fullscreen" content="true" />
<!-- QQ强制全屏 -->

<meta name="browsermode" content="application" />
<!-- UC应用模式 -->

<meta name="x5-page-mode" content="app" />
<!-- QQ应用模式 -->

<meta name="msapplication-tap-highlight" content="no" />
<!-- windows phone 点击无高光 -->
```
