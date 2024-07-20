## vuex(4 版本)

```javascript
import { createStore } from "vuex"; //解构

// 创建仓库
const store = createStore({
  state: {
    count: 100,
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
export default store; //暴露仓库
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

## useStore

useStore 是一个函数，执行时返回一个仓库实例  
useStore 调用时也要写顶层（在 setup 里面的第一层）  
setup 里面没法使用辅助函数

使用仓库中的 state 数据需要使用 computed 计算属性

```javascript
<template>
    <div>
        <h3>组合zpi-vuex</h3>
        <p>{{ count }}</p>
        <button @click="fn">点击</button>
    </div>
</template>

<script>
// useStore是一个函数，执行时返回一个仓库实例
// useStore调用时也要写顶层（在setup里面的第一层）
// setup里面没法使用辅助函数
import {useStore} from "vuex";
import {computed} from "vue";
export default {
    setup(){
        const store=useStore();
        // 使用仓库中的state数据需要使用computed计算属性
        // const count=computed(()=>{
        //     return store.state.count;
        // });
        // const fn=()=>{
        //     store.commit("addCount");
        // };
        // return {
        //     count,
        //     fn,
        // }

        // 下面的写法等同于上面的写法
        return {
            count:computed(()=>{
            return store.state.count;
        }),
            fn:()=>{
            store.commit("addCount");
        },
        }
    }
}
</script>
```
