## 什么是 SPA

SPA（single-page application），翻译过来就是单页应用

SPA 是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验

在单页应用中，所有必要的代码（HTML、JavaScript 和 CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面

页面在任何时间点都不会重新加载，也不会将控制转移到其他页面

举个例子来讲就是一个杯子，早上装的牛奶，中午装的是开水，晚上装的是茶，我们发现，变的始终是杯子里的内容，而杯子始终是那个杯子

结构如下图

![](https://i-blog.csdnimg.cn/blog_migrate/d0a8f959c3b5031f0c04dde0119d0532.png)
我们熟知的 JS 框架如 react,vue,angular,ember 都属于 SPA

## 什么是 MPA

上面大家已经对单页面有所了解了，下面来讲讲多页应用

MPA（MultiPage-page application），翻译过来就是多页应用

在 MPA 中，每个页面都是一个主页面，都是独立的

当我们在访问另一个页面的时候，都需要重新加载 html、css、js 文件，公共文件则根据需求按需加载

如下图
![](https://i-blog.csdnimg.cn/blog_migrate/a2112cdf74db97f2051eca7a1c9fd7e4.png)

## 单页应用与多页应用的区别

|                  | 单页面应用（SPA）           | 多页面应用（MPA）                     |
| ---------------- | --------------------------- | ------------------------------------- |
| 组成             | 一个主页面和多个页面片段    | 多个主页面                            |
| 刷新方式         | 局部刷新                    | 整页刷新                              |
| url 模式         | 哈希模式                    | 历史模式                              |
| SEO 搜索引擎优化 | 难实现，可使用 SSR 方式改善 | 容易实现                              |
| 数据传递         | 容易                        | 通过 url、cookie、localStorage 等传递 |
| 页面切换         | 速度快，用户体验良好        | 切换加载资源，速度慢，用户体验差      |
| 维护成本         | 相对容易                    | 相对复杂                              |

## 单页应用优缺点

优点：

具有桌面应用的即时性、网站的可移植性和可访问性

用户体验好、快，内容的改变不需要重新加载整个页面

良好的前后端分离，分工更明确

缺点：

不利于搜索引擎的抓取

首次渲染速度相对较慢

## 实现一个 SPA

### 原理

监听地址栏中 hash 变化驱动界面变化

用 pushsate 记录浏览器的历史，驱动界面发送变化
![](https://i-blog.csdnimg.cn/blog_migrate/17922bb9a26fae607c62d33b8deab3de.png)

### 实现

### hash 模式

核心通过监听 url 中的 hash 来进行路由跳转

```javascript
// 定义 Router
class Router {
  constructor() {
    this.routes = {}; // 存放路由path及callback
    this.currentUrl = "";

    // 监听路由change调用相对应的路由回调
    window.addEventListener("load", this.refresh, false);
    window.addEventListener("hashchange", this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback;
  }

  push(path) {
    this.routes[path] && this.routes[path]();
  }
}

// 使用 router
window.miniRouter = new Router();
miniRouter.route("/", () => console.log("page1"));
miniRouter.route("/page2", () => console.log("page2"));

miniRouter.push("/"); // page1
miniRouter.push("/page2"); // page2
```

### history 模式

history 模式核心借用 HTML5 history api，api 提供了丰富的 router 相关属性

先了解一个几个相关的 api

history.pushState 浏览器历史纪录添加记录

history.replaceState 修改浏览器历史纪录中当前纪录

history.popState 当 history 发生变化时触发

// 定义 Router

```javascript
class Router {
  constructor() {
    this.routes = {};
    this.listerPopState();
  }

  init(path) {
    history.replaceState({ path: path }, null, path);
    this.routes[path] && this.routes[path]();
  }

  route(path, callback) {
    this.routes[path] = callback;
  }

  push(path) {
    history.pushState({ path: path }, null, path);
    this.routes[path] && this.routes[path]();
  }

  listerPopState() {
    window.addEventListener("popstate", (e) => {
      const path = e.state && e.state.path;
      this.routers[path] && this.routers[path]();
    });
  }
}

// 使用 Router

window.miniRouter = new Router();
miniRouter.route("/", () => console.log("page1"));
miniRouter.route("/page2", () => console.log("page2"));

// 跳转
miniRouter.push("/page2"); // page2
```
