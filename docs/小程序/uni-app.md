uni-app 小程序的框架  
uni-app 是一个使用 Vue.js (opens new window)开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。  
一端编写多端运行  
小程序 刚需低频  
官网：https://uniapp.dcloud.net.cn/  
uni-app 是用 vue 语法开发的  
wepy 腾讯出的，使用 vue 语法  
taro 京东出的，用 react 语法开发的

使用 uni-app 框架开发小程序需要下载 HBuilder 编辑器，在 HBuilder 编辑器中写代码，然后打包，在微信开发者工具中引入打包的文件，查看效果（它会将 HBuilder 中的项目编译成小程序的语法）  
不同的小程序都会有自己的开发工具

## 创建项目

1.在 HBuilder 中新建项目 ， 创建项目目录

![](../../static/img/small/%E6%88%AA%E5%9B%BE.png)

2.会生成项目

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(1).png>)

3.运行到小程序模拟器 ——> 选择微信开发者工具

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(2).png>)

4.选择微信开发者工具的安装路径(第一次需要选，第二次就不需要)
![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(14).png>)

爆红也没事，包已经打好了  
5.会生成 unpackage 文件 —— dist —— dev —— mp-weixin，就是打包的文件  
6.打开微信开发者工具 ——> 导入项目 ——> 不要把整个项目导进来，只把打包的项目导进来（就是 mp-weixin 这个文件导进来），这时候在微信开发者工具上就可以看到效果了（导入微信开发者工具中的项目会自动编译成小程序的相关语法 .js .json .wxml .wxss，我们不用操作）  
在 HBuilder 中是按照 vue 的相关语法结合微信小程序写的，写完之后会在微信开发者工具中转换成小程序的语法

## 教程

https://uniapp.dcloud.net.cn/tutorial/

### 项目目录

在教程——工程中  
https://uniapp.dcloud.net.cn/tutorial/project.html  
main.js—— 入口文件  
app.vue —— 相当于根组件  
pages.json —— 全局配置  
uni.scss —— css 变量  
menifest.json  
static 静态资源  
pages

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(4).png>)

可以运行到不同的小程序中（百度，京东等），然后将打包对应的文件在不同的开发者工具中打开

### 生命周期

页面 https://uniapp.dcloud.net.cn/tutorial/page.html  
页面——生命周期

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(5).png>)

在 uni-app 中

- js 语法是按照 vue 的语法
- 标签的使用是微信小程序的规范
- 接口能力（JS API）靠近微信小程序规范（uni.request()）
- 数据绑定及事件处理同 Vue.js 规范，同时补充了 App 及页面的生命周期（小程序的生命周期和 vue 的生命周期都可以写）
- 为兼容多端运行，建议使用 flex 布局进行开发
- vue 的生命周期和小程序的生命周期能同时用  
  uni-ap 官网上还有别的生命周期，比如：  
  onPullDownRefresh（）{} —— 监听用户下拉刷新  
  配置  
  现在页面的配置也在全局配置中 pages.json style 就是页面的配置

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(6).png>)

### getApp()

getApp() 函数用于获取当前应用实例，一般用于获取 globalData 。  
globalData 就是全局的状态，和微信小程序是一样的

### 页面通讯

路由  
和微信小程序是一样的

- 路由参照微信小程序（原生）规范，路由自动生成，tabbar 页面非 tabbar 页面

<block/> 在不同的平台表现存在一定差异，推荐统一使用 <template/>（就是空的占位标签）  
引入 js，现在是支持 ES6 的 import 引入了

### 全局文件

- pages.json 页面路由
- manifest.json 应用配置
- package.json
- vue.config.js
- vite.config.js
- uni.scss
- App.vue
- main.js

### 组件

### API

### 项目注意

### uni-app 引入图片

图片只能先引入再使用  
或者使用 import 引入

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(7).png>)

### 引入组件

组件也可以写在页面中的 components 文件夹中

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(8).png>)

### 静态资源

可以重建一个 common 文件，和 pages 文件同级  
common——font——icon  
commin——images——图片  
可以将图片和 icon 放在里面

### uni-app 中引入 icon

在 app.vue 页面中

```javascript
<style>/*每个页面公共css // @import url("@/static/iconfont.css"); */</style>
```

## uni-app 分包

微信小程序规定的包的大小是不能超过 2M 的，可以做分包  
分包:本来我要引入一个小程序的包，现在我先引入主包，分为主包和分包，只要主包不超过 2M，一开始会先把主包引入，剩下的页面放到其他的分包里面，到时候只要跳转到这个页面再去加载分包，这样一个小程序可以分成四次引入，每个包的大小还是 2M，这样小程序整体的体积就可以大一点，现在变为 16M 了，但是每个包的大小还是 2M  
uni-app 官网中是有的  
分包配置https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages  
在全局文件下的 subPackages 是用来做分包的

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(9).png>)

pages 文件是我们的主包  
我们可以自己去定义一些 pagesA，pagesB  
这些包和 pages 是并列的位置  
将不是 tabbar 页面的文件放在分包中  
规定：不能对 tabbar 页面进行分包，tabbar 页面是必须放在主包中的  
同时在 pages.json 配置文件中也要进行新增 subPackages 字段，用于分包的管理

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(10).png>)
![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(15).png>)
root 是分包名称  
当我第一次打开小程序页面的时候，分包的内容是不会去加载的，只会先去加载主包的内容，只有当我进入分包页面的时候，他的内容才会加载  
注意：跳转的时候的路径要及逆行修改

## 微信小程序登录

在微信小程序官方文档中搜 wx.login
进入小程序的时候，会有一个微信账号授权，正常开发的 项目（不是小程序），进入的时候会让注册账号并且登录  
在小程序中可以直接使用微信账号进行登录，但是数据库并不是存的你的微信号，而是用户 id,  
小程序的登录就是让微信账号和用户 id 绑定起来，还可以获得一些用户的手机号...微信头像，昵称权限等等  
在微信小程序官方文档中搜 wx.login，下面有一个相关文档，点击小程序登录，可以看到登录的流程图

小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(12).png>)

步骤
用户进入小程序的时候，通过点击授权，可以调用 wx.login()这个方法，这个方法调用成功之后会返回一个 code（这个 code 是根据每个人不同的微信账号自动生成的）,接着后端会专门有一个接口，让把 code 发送给后端，后端拿到 code 之后，把(code,appid 就是注册小程序的 id,appsecret)再发送给微信的服务器,微信服务器会返回一个 session_key 和 openid(这两个东西就可以让你的微信号和这个小程序关联起来)，变成一个自定义的登录态（这是通过 session_key 和 openid 得到的）后端将登录态返回给前端，前端将登录态存在 stora 发起请求（就是知道是哪个用户了），返回对应的数据 ge 中，之后所有的请求都要带上 storage，有了 storage 时候，后端就知道是谁在

说明  
1.调用 wx.login() 获取 临时登录凭证 code ，并回传到开发者服务器。  
2.调用 auth.code2Session 接口，换取 用户唯一标识 OpenID 、 用户在微信开放平台帐号下的唯一标识 UnionID（若当前小程序已绑定到微信开放平台帐号） 和 会话密钥 session_key。  
之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份。  
注意事项  
1.会话密钥 session_key 是对用户数据进行 加密签名 的密钥。为了应用自身的数据安全，开发者服务器不应该把会话密钥下发到小程序，也不应该对外提供这个密钥。  
2.临时登录凭证 code 只能使用一次

## 小程序支付流程

![](<../../static/img/small/%E6%88%AA%E5%9B%BE%20(13).png>)
