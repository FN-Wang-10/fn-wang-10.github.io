## vue-router（4版本）

```javascript
<template>
    <div>
        <h3>vue3-router</h3>

        <p>
            <router-link to="/home">home</router-link> |
            <router-link to="/about/100">about</router-link>
        </p>

        <hr>

        <router-view />
    </div>
</template>
```

```javascript
import { createRouter, createWebHashHistory } from "vue-router";

// 创建路由表
const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  // 动态路由
  {
    path: "/about/:id",
    component: () => import("../views/About.vue"),
  },
];

//创建路由实例
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
```

```javascript
import { createApp } from "vue";
// import App from "./App.vue";
// import App from "./01-Setup.vue";
// import App from "./02-SetupTodolist.vue";
// import App from "./03-LifeCycle.vue";
// import App from "./04-watch.vue";
// import App from "./05-computed.vue";
// import App from "./06-components-father.vue";
// import App from "./08-reactive.vue";
// import App from "./09-Provide-Inject依赖注入.vue";
// import App from "./11-router.vue";
import App from "./12-vuex.vue";

import router from "./router"; // 引入路由
import store from "./store"; // 引入仓库

createApp(App).use(router).use(store).mount("#app"); //使用路由和仓库
```

## useRoute 路由信息
useRoute返回当前的路由信息
```javascript
<template>
    <div>about页面</div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
    setup(){
        const route=useRoute();
        console.log(route);
    }
}
</script>
```

## useRouter 路由实例

useRouter 是一个函数，这个函数执行之后会返回路由实例  
useRoute 也是一个函数，这个函数执行会返回当前的路由信息  
useRouter 表示路由对象  
useRoute 表示路由信息

这两个函数，必须写在 setup 的顶层(setup 里面的第一层)

```javascript
<template>
    <div>home页面-<button @click="fn">点击</button></div>
</template>

<script>
// useRouter是一个函数，这个函数执行之后会返回路由实例
// useRoute也是一个函数，这个函数执行会返回当前的路由信息
// useRouter表示路由对象
// useRoute表示路由信息

// 这两个函数，必须写在setup的顶层(setup里面的第一层)
import {useRouter} from "vue-router";
export default {
    // vue2写法，点击跳转
    // methods:{
    //     fn(){
    //         this.$router.push("/about");
    //     }
    // }

    // vue3写法
    setup(){
        const router=useRouter();
        const fn=()=>{
            router.push("/about/222");// 设置动态参数后，跳转的地方也要添加动态参数，不然出不来
            // console.log(route);
        }

        return {
            fn
        }
    }
}
</script>
```
