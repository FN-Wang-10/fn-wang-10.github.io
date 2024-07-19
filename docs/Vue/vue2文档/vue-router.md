## 原生实现路由切换

前端路由的原理是通过不同的 url，显示不同的页面或者组件

1. 需要有几个按钮，用于改变 url
2. 需要有一个存放内容切换的容器
3. 需要有一个路由表  
   实际上就是一个数组，数组的每一项是一个拥有 path 和 template 的对象
4. 监听 url 的改变。hashchange 事件

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 前端路由的原理是通过不同的url，显示不同的页面或者组件 -->
    <div id="app">
      <h2>原生实现路由切换</h2>

      <!-- 1. 需要有几个按钮，用于改变url -->
      <!-- 加上#的路由叫做hash路由 -->
      <p>
        <a href="#hot">热映</a> | <a href="#cinema">影院</a> |
        <a href="#wait">待映</a>
      </p>

      <!-- 2. 需要有一个存放内容切换的容器 -->
      <div id="box"></div>
    </div>

    <script>
      // 3. 需要有一个路由表
      // 实际上就是一个数组，数组的每一项是一个拥有path和template的对象
      const routes = [
        {
          path: "hot",
          template: "<div>这是热映页面</div>",
        },
        {
          path: "cinema",
          template: "<div>这是影院页面</div>",
        },
        {
          path: "wait",
          template: "<div>这是待映页面</div>",
        },
      ];

      // 4. 监听url的改变。hashchange事件
      window.addEventListener("hashchange", () => {
        // console.log("hashchange");
        const { hash } = location;
        const hashstr = hash.slice(1); // 去掉前面的#
        routes.forEach((item) => {
          if (item.path === hashstr) {
            document.querySelector("#box").innerHTML = item.template;
          }
        });
      });
    </script>
  </body>
</html>

```

## vue-router 实现路由切换

vue-router3 版本是给 vue2 用的  
vue-router4 版本是给 vue3 用的

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>

    <script src="../../Vue.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.5.3/vue-router.min.js"></script>
    <script>
      // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

      // 1. 定义 (路由) 组件。
      // 可以从其他文件 import 进来
      const Foo = { template: "<div>foo</div>" };
      const Bar = { template: "<div>bar</div>" };

      // 2. 定义路由
      // 每个路由应该映射一个组件。 其中"component" 可以是
      // 通过 Vue.extend() 创建的组件构造器，
      // 或者，只是一个组件配置对象。
      // 我们晚点再讨论嵌套路由。
      const route = [
        { path: "/foo", component: Foo },
        { path: "/bar", component: Bar },
      ];

      // 3. 创建 router 实例，然后传 `routes` 配置
      // 你还可以传别的配置参数, 不过先这么简单着吧。
      const router = new VueRouter({
        routes: route, // (缩写) 相当于 routes: routes
      });

      // 4. 创建和挂载根实例。
      // 记得要通过 router 配置参数注入路由，
      // 从而让整个应用都有路由功能
      const app = new Vue({
        router,
      }).$mount("#app");

      // 现在，应用已经启动了！
    </script>
  </body>
</html>

```

## vue 路由原理

路由的实现原理：hashchange 事件  
只要 url 上面的哈希值改变了，就会触发 hashchange 事件  
点击 a 标签时，a 标签的 url 会改变，url 改变了才会触发 hashchange 事件，hashchange 只会监听 url 的改变，然后把内容渲染到页面  
前端路由的原理是通过不同的 url，显示不同的页面或者组件

## 项目中的路由

### main.js

选中的`<router-link>`会自带一个 router-link-exact-active 类名（如果要加导航高亮（类似于 hover）就给这个类名添加样式就行了）  
使用 tag 属性，可以改变标签的类型，默认是 a 标签 如果改成别的标签，就没有高亮效果了，需要在下面的 style 中也改成对应的标签名

对于没有名字的路由会渲染在这里面  
`<router-view/>`

路由视图（一个里面有两个路由）  
如果路由有对应的名字，则找到对应的名字，然后在里面渲染  
`<router-view name="a"/>`  
`<router-view name="b"/>`

```javascript
// 引入vue
import Vue from "vue";
// 引入app根组件
import App from "./App.vue";
// 引入了路由实例
// 路径直接到文件夹结束，引的是这个文件夹下面的Index.js文件(二阶段最后的项目也是这样的，有一个index.js文件)
// 如果只是省略了文件后缀，会默认先找json->js->vue
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```

### App.vue

```javascript
<template>
  <div id="app">
    <nav>
      <!-- 选中的<router-link>会自带一个router-link-exact-active类名（如果要加导航高亮（类似于hover）就给这个类名添加样式就行了） -->
      <!-- 使用tag属性，可以改变标签的类型，默认是a标签 如果改成别的标签，就没有高亮效果了，需要在下面的style中也改成对应的标签名-->
      <!-- <router-link to="./hot" tag="li">热映</router-link>|
      <router-link to="./cinema" tag="li">影院</router-link>|
      <router-link to="./wait" tag="li">待映</router-link> -->
      <router-link to="./hot">热映</router-link>|
      <router-link to="./cinema">影院</router-link>|
      <router-link to="./wait">待映</router-link>|
      <!-- /25222表示动态路由参数 -->
      <router-link to="./detail/25222">详情</router-link>
    </nav>
    <!-- 对于没有名字的路由会渲染在这里面 -->
    <router-view/>
    <!-- 路由视图（一个里面有两个路由） -->
    <!-- 如果路由有对应的名字，则找到对应的名字，然后在里面渲染 -->
    <router-view name="a"/>
    <router-view name="b"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 文本居中是由继承性的，所以后面的所有标签都会居中 */
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* 当我选中了<router-link>这个标签，他会默认的加上router-link-exact-active这个类名，会加一个绿色（如果要加导航高亮（类似于hover）就给这个类名添加样式就行了） */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>

```

### router/index.js

vue-router 是一个插件

vue 的路由默认使用排他性路由(只要匹配到一个就不会再匹配了)，react 的路由是包容性路由

```javascript
// 引入vue
import Vue from "vue";
// 引入router
import VueRouter from "vue-router";

// import命令必须在所有代码的上面
// import Hot from "../views/HotView.vue";
// import Cinema from "../views/CinemaView.vue";
// import Wait from "../views/WaitView.vue";
// 没有添加路由懒加载的时候，当我刚进入页面，还没点击，还没进行路由匹配时，组件中的内容就会被引入出来

// 插件要使用use方法，意味着vue-router是vue的一个插件
Vue.use(VueRouter);

// 创建一个路由表
// vue的路由默认使用排他性路由(只要匹配到一个就不会再匹配了)，react的路由是包容性路由
const routes = [
  // 重定向（意思就是，如果我只记住了域名，只输入了域名，他会将你重定向里面的url拼接到域名后面，这样就可以之实现只输入域名尽可以进入到页面了）
  {
    path: "/",
    redirect: "/hot",
  },
  {
    path: "/hot",
    component: () => import("../views/HotView.vue"),
    // children属性用于做路由嵌套
    children: [
      // 再次重定向
      // 这里做的重定向，上面先重定向到hot页面，因为hot里面还有两个二级路由，然后在hot页面又有一个重定向到hot1,效果就是直接输入域名，就直接可以到hot1页面了
      {
        path: "/hot",
        redirect: "/hot/hot1",
      },
      {
        path: "/hot/hot1",
        component: () => import("../views/HotView1.vue"),
      },
      {
        path: "/hot/hot2",
        component: () => import("../views/HotView2.vue"),
      },
    ],
  },
  {
    path: "/cinema",
    // 路由别名(意思就是，我也可以使用别名定义的这个url也可以访问到cinema页面，但是高亮就没有了)
    alias: "/abc",
    // 路由懒加载import函数
    // import函数可以做文件的异步引用（就是我用到了再去引入这个文件）
    // 添加了import函数之后，对于我们的首页打开速度就会相对更快一些，如果只点击首页的话，就只会加载首页的内容，当我点击别的router-link时，下一个才加载，就是谁使用了再去引入他的文件
    component: () => import("../views/CinemaView.vue"),
  },
  {
    path: "/wait",
    name: "wait",
    // component:()=>import("../views/WaitView.vue"),
    // 命名视图
    components: {
      a: () => import("../views/WaitView.vue"),
      b: () => import("../views/WaitView2.vue"),
    },
  },
  // /:id表示匹配动态路由参数(可以有多个动态路由参数/:id/:num/:a)
  {
    path: "/detail/:id",
    component: () => import("../views/DetailView.vue"),
  },
  // 404页面，一定要写在路由表的最后面
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

// 创建一个路由实例
const router = new VueRouter({
  routes, //使用路由表
});

//将路由实力进行暴露
export default router;
```

### views/CinemaView.vue

通过 js 的方式进行跳转，叫做编程式导航  
`this.$router.push("/wait");`

` this.$router`指的是整个路由实例  
 一般只用来做页面的跳转, 实例下面有常见的三个方法 `push` `replace` `go`

push  
想象历史记录是一个数组  
`this.$router.push("/wait")`; //添加一项，可以后退
等同于  
`this.$router.push({path:"/wait"})`;
等同于  
 `this.$router.push({name:"wait"})`;//这样写，需要在路由表对应给的位置添加 name:"wait"

replace  
`this.$router.replace("/wait")`; // 将原有的替换，后退就直接到了上一个的前面

go 方法是前进和后退，里面写整数  
` this.$router.go(-3)`;

```javascript
<template>
  <div>
 <div>这是影院页面</div>
    <button @click="fn">btn</button>
  </div>
</template>

<script>
// 没有添加路由懒加载的时候，当我刚进入页面，还没点击，还没进行路由匹配时，组件中的内容就会被引入出来
// console.log("cinema");
// export default {};
export default {
  methods: {
    fn() {
      // 通过js的方式进行跳转，叫做编程式导航
      //   this.$router.push("/wait");

      //   console.log(this.$router);
      // this.$router指的是整个路由实例
      // 一般只用来做页面的跳转, 实例下面有常见的三个方法 push/replace/go

      // 想象历史记录是一个数组
      this.$router.push("/wait"); //添加一项，可以后退
      // 等同于
      //   this.$router.push({path:"/wait"});
      // 等同于
      // this.$router.push({name:"wait"});//这样写，需要在路由表对应给的位置添加name:"wait"

      //   this.$router.replace("/wait"); // 将原有的替换，后退就直接到了上一个的前面

      // go方法是前进和后退，里面写整数
      // this.$router.go(-3);
    },
  },
};
</script>

```

### views/DetailView.vue

如果只改变动态参数，组件将会复用，不会销毁和重新创建，生命周期就不会再次执行  
需要使用 watch $route 的方式去监听动态参数的改变

```javascript
watch:{
      $route(to){//这里有两个参数，val和oldVal,一般写成(to,from)表示新的$route和旧的$route
        //   console.log(to);
        //   console.log(from);
        this.id=to.params.id;
      }
  }
```

```javascript
<template>
    <!-- <div>这是详情页面-{{ this.$route.params.id }}</div> -->
    <div>这是详情页面-{{ id }}</div>
</template>

<script>
export default {
    // 进入动态路由页面以后，拿到id,并且用id去做数据请求
    data(){
        return {
            id:"",
        };
    },
    created(){//created生命周期：页面创建完毕
    // this.$route表示当前路由的路由信息，是一个对象，里面包含跟url相关的信息
        console.log(this.$route.params.id);
        this.id=this.$route.params.id;
    },
  // 如果只改变动态参数，组件将会复用，不会销毁和重新创建，生命周期就不会再次执行
  // 需要使用watch $route的方式去监听动态参数的改变
  watch:{
      $route(to){//这里有两个参数，val和oldVal,一般写成(to,from)表示新的$route和旧的$route
        //   console.log(to);
        //   console.log(from);
        this.id=to.params.id;
      }
  }
}
</script>
```

### views/HotView.vue

```javascript
<template>
<div>
    <!-- 这个页面本身就是一个一级路由 -->
    <div>这是热映页面</div>
    <p>
        <router-link to="/hot/hot1">hot1</router-link>|
        <router-link to="/hot/hot2">hot2</router-link>
    </p>

    <router-view />
</div>
</template>



```

## 路由知识点

vue 的路由默认使用排他性路由(只要匹配到一个就不会再匹配了)，react 的路由是包容性路由

### 1.重定向（redirect）

重定向（意思就是，如果我只记住了域名，只输入了域名，他会将你重定向里面的 url 拼接到域名后面，这样就可以之实现只输入域名尽可以进入到页面了）
也可以做二级重定向

```javascript
  {
    path:"/",
    redirect:"/hot",
  },
{
   path:"/hot",
   component:()=>import("../views/HotView.vue")，
 },
```

### 2.别名（alias）

路由别名(意思就是，我也可以使用别名定义的这个 url 也可以访问到 cinema 页面，但是高亮就没有了)

```javascript
{
  path:"/cinema",
  alias: "/abc",
  component:()=>import("../views/CinemaView.vue"),
},
```

### 3.路由嵌套(children)

```javascript
<p>
        <router-link to="/hot/hot1">hot1</router-link>|
        <router-link to="/hot/hot2">hot2</router-link>
</p>
<router-view />
children属性用于做路由嵌套（children里面是数组对象  [ {  } , {  } ]）
{
   path:"/hot",
   component:()=>import("../views/HotView.vue"),
   children: [
      // 再次重定向
      // 这里做的重定向，上面先重定向到hot页面，因为hot里面还有两个二级路由，然后在hot页面又有一个重定向到hot1,效果就是直接输入域名，就直接可以到hot1页面了
      {
        path:"/hot",
        redirect:"/hot/hot1",
      },
      {
        path: "/hot/hot1",
        component: () => import("../views/HotView1.vue"),
      },
      {
        path: "/hot/hot2",
        component: () => import("../views/HotView2.vue"),
      },
    ],
 },
```

### 4.动态路由(`/:id` $route.params.id watch 监听)

```javascript
<router-link to="./detail/25222">详情</router-link>
  //:id表示匹配动态路由参数(可以有多个动态路由参数/:id/:num/:a)
{
  path:"/detail/:id",
  component:()=>import("../views/DetailView.vue"),
},
动态路由参数
this.$route表示当前路由的路由信息，是一个对象，里面包含跟url相关的信息
this.$route.params.id表示动态路由参数

进入动态路由页面以后，拿到id,并且用id去做数据请求
进入详情页面一般会使用动态路由参数
data(){
        return {
            id:"",
        };
},
created(){//created生命周期：页面创建完毕
    // this.$route表示当前路由的路由信息，是一个对象，里面包含跟url相关的信息
        console.log(this.$route.params.id);
        this.id=this.$route.params.id;
},
如果只改变动态参数，组件将会复用，不会销毁和重新创建，生命周期就不会再次执行
需要使用watch $route的方式去监听动态参数的改变
watch:{
      $route(to,from){//这里有两个参数，val和oldVal,一般写成(to,from)表示新的$route和旧的$route
        //   console.log(to);
        //   console.log(from);
        this.id=to.params.id;
      }
}
```

### 5.编程式导航($router push replace go)

通过 js 的方式进行跳转，叫做编程式导航
this.$router 指的是整个路由实例（表示当前路由的路由信息，是一个对象，里面包含跟 url 相关的信息）

```javascript
想象历史记录是一个数组
1. push
this.$router.push("/wait"); //添加一项，可以后退
等同于
this.$router.push({path:"/wait"});
等同于
this.$router.push({name:"wait"});//这样写，需要在路由表队医你给的位置添加name:"wait"

2. replace
this.$router.replace("/wait"); // 将原有的替换，后退就直接到了上一个的前面

3. go
go方法是前进和后退，里面写整数
this.$router.go(-3);
```

### 6.路由懒加载(import 函数)

```javascript
import命令必须在所有代码的上面
// import Hot from "../views/HotView.vue";
// import Cinema from "../views/CinemaView.vue";
// import Wait from "../views/WaitView.vue";
// 没有添加路由懒加载的时候，当我刚进入页面，还没点击，还没进行路由匹配时，组件中的内容就会被引入出来，造成性能浪费

路由懒加载import函数
import函数可以做文件的异步引用（就是我用到了再去引入这个文件）
添加了import函数之后，对于我们的首页打开速度就会相对更快一些，如果只点击首页的话，就只会加载首页的内容，当我点击别的router-link时，下一个才加载，就是谁使用了再去引入他的文件，按需引入
component:()=>import("../views/CinemaView.vue"),
```

### 7.404 路由

404 页面，一定要写在路由表的最后面

```javascript
{
  path:"*",
  component:()=>import("../views/NotFound.vue"),
},
```

### 8.导航高亮(router-link-exact-active 类名)

```javascript
选中的<router-link>会自带一个router-link-exact-active类名（如果要加导航高亮（类似于hover）就给这个类名添加样式就行了）
使用tag属性，可以改变标签的类型，默认是a标签 如果改成别的标签，就没有高亮效果了，需要在下面的style中也改成对应的标签名
<router-link to="./cinema" tag="li">影院</router-link>
```

### 9.路由视图(components name 属性)

```javascript
对于没有名字的路由会渲染在<router-view/>里面
路由视图（一个路由里面有两个组件）
如果路由有对应的名字，则找到对应的名字，然后在里面渲染
    <router-view name="a"/>
    <router-view name="b"/>
{
  path:"/wait",
  name:"wait",
  // component:()=>import("../views/WaitView.vue"),
  // 命名视图
  components:{    （加s）
    a:()=>import("../views/WaitView.vue"),
    b:()=>import("../views/WaitView2.vue"),
  }
},
```

### 10. 路由命名（name）

```javascript
 {
      path: '/user/:userId',
      name: 'user',
      component: User
    }

<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

router.push({ name: 'user', params: { userId: 123 } })
```

## 导航守卫

### 全局前置守卫（router.beforeEach）

```javascript
1.全局前置守卫  （路由鉴权）
我要跳转的页面需不需要登录，如果需要登录在进行判断（判断是否登陆过，如果登陆过了，则进入，如果没登陆过，则进入登录页），如果不需要登录则进入。配合路由元信息，meta


{
        path: "/home/show",
        component: () => import("../views/home/show/ShowView.vue"),
路由元信息, 可以写一个任意对象
        meta: {
            requiredLogin: true, //相当于进入页面的一个权限
            title: "猫眼表演",
        },
},

全局前置守卫
router.beforeEach((to, from, next) => { })
在创建完路由实例之后使用全局前置守卫
只要url发生改变，就会触发
router.beforeEach((to, from, next) => {
  to from表示要去的那个页面和来的那个页面的路由信息
  next()执行就表示允许跳转了
  next(false)表示阻止跳转
  next("路径")表示重定向
  console.log(to);//去那个页面的里路由信息
  console.log(from);// 从哪个页面来的路由信息
  next("/city");//Maximum call stack size exceeded 栈溢出，因为出现死循环了
  next(false);
  next();

  配合路由元信息中的meta(meta写在页面对应的路由表中)
 路由鉴权

   if (to.meta.requiredLogin) {       先去判断要去的那个页面是否需要登录
    if (localStorage.getItem("token")) {      判断是否登陆过    登录过，就放行，可以进入页面
      next();
    } else {         没登陆过，就跳转到登陆页面
      next("/city");
    }
  } else {
      next();   放行
  }

  // 通过路由切换去改变页面的标题
  // 这里在全局后置钩子也可以做，会稍微慢一些执行
  // document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});
```

### 2.全局解析守卫(router.beforeResolve)

功能和用法是和全局前置守卫是一摸一样的，只是他们的执行时机有一些不同，比全局前置守卫会慢一些执行

```javascript
router.beforeResolve((to, from, next) => {});
```

### 3.全局后置钩子（router.afterEach）

应用:改变标题
会稍微慢一些执行

```javascript
router.afterEach((to) => {
  console.log(to);
  console.log(from);
  通过路由切换去改变页面的标题;
  document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});
```

### 4.路由独享的守卫（beforeEnter）

应用：单个页面的路由鉴权

```javascript
{
        path: "/home/video",
        component: () => import("../views/home/video/VideoView.vue"),
        meta: {
          title: "猫眼视频",
        },
  单个路由独享守卫
  只有进这个页面才会去执行里面的函数
        beforeEnter: (to, from, next) => {
           if (localStorage.getItem("token")) {
                next();
           } else {
               next("/city");
           }
        },
},
```

### 5.组件内的守卫（beforeRouteEnter）

应用：看猫眼项目

```javascript
组件内守卫（路由给我们提供的生命周期）
该生命周期在路由创建之前就被创建了，执行时机在路由跳转之前
路由守卫配合数据获取
  // async beforeRouteEnter(to, from, next) {
  //   // 一般用于先请求数据，在进入页面
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   // 当我把网速调慢以后，当我点击进入路由时，他会先出现白屏，然后再进行渲染，就是渲染比较慢，用户体验就不好
  //   // console.log("beforeRouteEnter");//进入路由时触发
  //   // this.getDetailDate();// 在这里是用不了的，因为这里面this不能获取到
  //   // 这里面不能收用this

  //   // 在这里请求数据，就不会出现白屏了
  //   // 这里面的to就相当于this.$route
  //   const res = await detailApi({ id: to.params.id });
  //   // next里面可以传入一个回调函数，在next的时候做，可以使用vm的形参表示组件的this
  //   next((vm) => {
  //     vm.detailInfo = res.result;
  //   });
  //   // 这样如果我的网速很慢，用户点击的时候没有反应，要等一会才出现页面数据，这样用户体验也不是很好

  //   /*微信浏览器
  //   就是微信里面打开页面，默认使用微信浏览器去打开的
  //   进入页面之前，会有一个进度条（这就是在做请求数据，当进度条加载完了，页面才会出现）
  //   这个进度条我们自己做会比较麻烦，因为不知道请求数据所需要的时间，这个和ajax四部曲的原理有关
  //   我们一般使用npm里面的一个包nropress,可以实现进度条这个效果
  //   这个包有两个方法
  //   NProgress.start();显示进度条
  //   NProgress.done();关闭进度条
  //   可以以加在http封装的数据请求里面
  //   进度条会显示在上面
  //   当开启的时候他会创建一个标签，关闭的时候删除这个标签
  //   */
  // },
  // async beforeRouteUpdate(to, from, next) {
  //   // 一般用于做猜你喜欢
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // console.log("beforeRouteUpdate"); //改变路由参数时触发
  //   const res = await detailApi({ id: to.params.id }); //beforeRouteUpdate可以代替watch  $route
  //   this.detailInfo = res.result;
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   // 这个生命周期很少使用,
  //   // 更多使用beforeDestroy()这个生命周期
  //   next();
  //   console.log("beforeRouteLeave"); //离开路由时触发
  // },
};
```

## 路由模式

① 正常情况下使用 hash 模式，找工作中，如果有要求，可以找后端的同事配合  
② 设置路由模式为历史模式(不带#号)  
history 模式，如果要放在生产环境（放在服务器），页面刷新就会变成 404，这里需要后端配合  
mode:"history",

总结：  
1：hash 模式（vue-router 默认模式 URL 后面带#）使用 URL 的 hash 值来作为路由，支持所有浏览器 缺点：只能改变#后面的来实现路由跳转。  
2：history 模式（通过 mode: 'history’来改变为 history 模式）HTML5 （BOM）History API 和服务器配置 缺点：怕刷新如果后端没有处理这个情况的时候前端刷新就是实实在在的请求服务器这样消耗的时间很多还很慢。

路由有三种模式  
hash 模式  
history 模式  
abstract 模式  
Vue-router 的三种模式  
1、hash  
　　使用 URL 的 hash 来模拟一个完整的 URL，当 URL 发生改变时，页面不会重新加载，其显示的网络路径中会有#号，这是最安全的模式，因为他兼容所有的浏览器和服务器  
2、history  
　　美化后的 hash 模式，路径中会去掉#。依赖于 html5 的 history，pushState API，所以要担心 IE9 及以下的版本。并且还包括 back、forward、go 三个方法，对应浏览器的前进、后退、跳转操作，就是浏览器左上角的前进后退等按钮进行的操作  
3、abstract  
　　适用于所有 JavaScript 环境，例如服务器端使用 Node.js。如果没有浏览器 API，路由器将自动被强制进入此模式，然后在
`const router = new VueRouter({routes, mode:'hash|history|abstract',})`

## 路由表

```JavaScript
路由表案例 1（路由demo）
// 引入vue
import Vue from 'vue';
// 引入router
import VueRouter from 'vue-router';

// import命令必须在所有代码的上面
// import Hot from "../views/HotView.vue";
// import Cinema from "../views/CinemaView.vue";
// import Wait from "../views/WaitView.vue";
// 没有添加路由懒加载的时候，当我刚进入页面，还没点击，还没进行路由匹配时，组件中的内容就会被引入出来


// 插件要使用use方法，意味着vue-router是vue的一个插件
Vue.use(VueRouter);

// 创建一个路由表
// vue的路由默认使用排他性路由(只要匹配到一个就不会再匹配了)，react的路由是包容性路由
const routes = [
  // 重定向（意思就是，如果我只记住了域名，只输入了域名，他会将你重定向里面的url拼接到域名后面，这样就可以之实现只输入域名尽可以进入到页面了）
  {
    path:"/",
    redirect:"/hot",
  },
 {
   path:"/hot",
   component:()=>import("../views/HotView.vue"),
    // children属性用于做路由嵌套
    children: [
      // 再次重定向
      // 这里做的重定向，上面先重定向到hot页面，因为hot里面还有两个二级路由，然后在hot页面又有一个重定向到hot1,效果就是直接输入域名，就直接可以到hot1页面了
      {
        path:"/hot",
        redirect:"/hot/hot1",
      },
      {
        path: "/hot/hot1",
        component: () => import("../views/HotView1.vue"),
      },
      {
        path: "/hot/hot2",
        component: () => import("../views/HotView2.vue"),
      },
    ],
 },
 {
  path:"/cinema",
  // 路由别名(意思就是，我也可以使用别名定义的这个url也可以访问到cinema页面，但是高亮就没有了)
  alias: "/abc",
  // 路由懒加载import函数
  // import函数可以做文件的异步引用（就是我用到了再去引入这个文件）
  // 添加了import函数之后，对于我们的首页打开速度就会相对更快一些，如果只点击首页的话，就只会加载首页的内容，当我点击别的router-link时，下一个才加载，就是谁使用了再去引入他的文件
  component:()=>import("../views/CinemaView.vue"),
},
{
  path:"/wait",
  name:"wait",
  // component:()=>import("../views/WaitView.vue"),
  // 命名视图
  components:{
    a:()=>import("../views/WaitView.vue"),
    b:()=>import("../views/WaitView2.vue"),
  }
},
// /:id表示匹配动态路由参数(可以有多个动态路由参数/:id/:num/:a)
{
  path:"/detail/:id",
  component:()=>import("../views/DetailView.vue"),
},
  // 404页面，一定要写在路由表的最后面
{
  path:"*",
  component:()=>import("../views/NotFound.vue"),
},
]

// 创建一个路由实例
const router = new VueRouter({
  routes,//使用路由表
})

//将路由实力进行暴露
export default router
```

## 路由案例

```javascript
路由表案例2（猫眼路由表）
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 创建路由表
const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home/HomeIndex.vue"),
    children: [
      {
        path: "/home",
        redirect: "/home/movies",
      },
      {
        path: "movies",
        component: () => import("../views/home/movies/MoviesView.vue"),
        children: [
          {
            path: "/home/movies",
            redirect: "/home/movies/hot",
          },
          {
            path: "hot",
            component: () => import("../views/home/movies/hot/HotView.vue"),
            meta: {
                requireAlive: true,
            },
          },
          {
            path: "cinema",
            component: () =>
              import("../views/home/movies/cinema/CinemaView.vue"),
            meta: {
                requireAlive: false,
            },
          },
          {
            path: "wait",
            component: () => import("../views/home/movies/wait/WaitView.vue"),
            meta: {
                requireAlive: true,
            },
          },
          {
            path: "classic",
            component: () =>
              import("../views/home/movies/classic/ClassicView.vue"),
            meta: {
                requireAlive: true,
            },
          },
        ],
      },
      {
        path: "/home/video",
        component: () => import("../views/home/video/VideoView.vue"),
        meta: {
          title: "猫眼视频",
        },
        // 单个路由独享守卫
        // 只有进这个页面才会去执行里面的函数
        // beforeEnter: (to, from, next) => {
        //   // ...
        //   if (localStorage.getItem("token")) {
        //     next();
        //   } else {
        //     next("/city");
        //   }
        // },
      },
      {
        path: "/home/mini",
        component: () => import("../views/home/mini/MiniView.vue"),
        meta: {
          title: "猫眼小视频",
        },
      },
      {
        path: "/home/show",
        component: () => import("../views/home/show/ShowView.vue"),
        // 路由元信息, 可以写一个任意对象
        meta: {
          requiredLogin: true, //相当于进入页面的一个权限
          title: "猫眼表演",
        },
      },
      {
        path: "/home/mine",
        component: () => import("../views/home/mine/MineView.vue"),
        // 路由元信息, 可以写一个任意对象
        meta: {
          requiredLogin: true, //相当于进入页面的一个权限
          title: "我的页面",
        },
      },
    ],
  },
  // 动态路由
  {
    path: "/detail/:id",
    component: () => import("../views/detail/DetailIndex.vue"),
    // props: true加上以后，那么我们可以在组件里面直接通过props的方式接收到id
    props: true,
  },
  {
    path: "/city",
    component: () => import("../views/city/CityIndex.vue"),
  },
  // 404
  {
    path: "*",
    component: () => import("../views/404/NotFound.vue"),
  },
];

// 创建路由实例
const router = new VueRouter({
  // 设置路由模式为历史模式(不带#号)
  // history模式，如果要放在生产环境（放在服务器），页面刷新就会变成404，这里需要后端配合
  // mode:"history",
  // 正常情况下使用hash模式，找工作中，如果有要求，可以找后端的同事配合
  routes,
    // 滚动行为的处理
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // return { x: 0, y: 0 };
    // 只有在前进和后退的时候可以保留位置(就是历史记录中有的会进行保留位置)
if (savedPosition) {
  return savedPosition
} else {
  return { x: 0, y: 0 }
}
  }
});

// 全局前置守卫
// 只要url发生改变，就会触发
router.beforeEach((to, from, next) => {
  // to from表示要去的那个页面和来的那个页面的路由信息
  // console.log(to);
  // console.log(from);
  // next()执行就表示允许跳转了
  // next(false)表示阻止跳转
  // next("路径")表示重定向
  // console.log(to);//去那个页面的里也有信息
  //   console.log(from);// 从哪个页面来的路由信息
  //   next("/city");//Maximum call stack size exceeded 栈溢出，因为出现死循环了
  //   next(false);
  //   next();

  // 配合路由元信息中的meta(meta写在页面对应的路由表中)
  // 路由鉴权
  // 先去判断要去的那个页面是否需要登录
  if (to.meta.requiredLogin) {
    // 判断是否登陆过
    if (localStorage.getItem("token")) {
      //登录过，就放行，可以进入页面
      next();
    } else {
      // 没登陆过，就跳转到登陆页面
      next("/city");
    }
  } else {
    // 放行
    next();
  }

  // 通过路由切换去改变页面的标题
  // 这里在全局后置狗子也可以做，会稍微慢一些执行
  // document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});

// 全局解析守卫
// 功能和用法是和全局前置守卫是一摸一样的，只是他们的执行时机有一些不同，比全局前置守卫会慢一些执行
// router.beforeResolve((to, from, next) => {});

// 全局后置钩子
router.afterEach((to) => {
  // console.log(to);
  // console.log(from);

  // 通过路由切换去改变页面的标题
  document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});

// 用于解决编程式导航重复点击的报错
const originalPush = VueRouter.prototype.push;
// 这里是重写了VueRouter原型链上的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
```
