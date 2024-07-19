vuex 是 vue 的插件

## vuex 是什么

vuex 全局状态管理  
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式(全局状态管理工具，也就是管理 data，数据，变量)，
vuex 的原理：组件通过 dispatch 调用 actions 里面的函数（可以是异步的，actions 和 Backend API 后端接口绑定在一起的），actions 在通过 commit 去调用 mutatuins 里面的函数（mutations 和 Devtools 开发者工具绑定在一起的，快照，只要 mutations 里面的函数执行了，开发者工具就会产生一个快照），mutations 可以改变 state 里面的数据，数据改变了然后在相对组件进行重新渲染，

![](https://vuex.vuejs.org/vuex.png)

```javascript
1.store文件——里面有一个index.js文件
index.js文件
store就是写仓库的数据，仓库的数据就是整个项目全局的数据
state(){}
getters(){}
mutations(){}
actions(){}
modules(){}

2.store/index.js
import Vue from“vue”
import Vuex from "vuex"
Vue.use(Vuex);
const store=new  Vuex.Store({
	state: {   },
	getters: {  }，
	mutations： {  }，
	actions：{  }，
	modules：{  }，
})
export default store;

3.主入口文件main.js
import Vue from 'vue'
import App from './App.vue'
// 引入了仓库实例
import store from './store'
Vue.config.productionTip = false
new Vue({
  // 注册了仓库
  store,
  render: h => h(App)
}).$mount('#app')
```

## 1.state

store 就是写仓库的数据，仓库的数据就是整个项目全局的数据

```javascript
  state: {
    count: 10,
    name: "pengpeng",
    age: 25,
    address: "九堡",
    msg:"hello vuex!"
  },
```

仓库中的数据是有响应式的  
组件使用仓库中的 state 状态是使用计算属性的方式，（仓库中的数据改变了，组件中计算属性就会改变，并且重新渲染到页面）

### 不使用辅助函数

```javascript
computed: {
     count2() {
       return this.$store.state.count;
     },
     name(){
       return this.$store.state.name;
     },
   },
methods：{
     handleClick() {
       这种写法数据会改变,但是开发工具里面的vuex中的state里面的数据则不会改变，开发工具就没有用了
       this.$store.state.count++;

       commit可以去调用mutations里面的add函数，参数就是mutations里面的函数名
       this.$store.commit("add");

  },
}
```

### 使用辅助函数(mapState)

mapState 辅助函数 用于简化计算属性的写法，会返回一个对象

```javascript
import { mapState } from "vuex";

mapState里面可以写数组或者对象

1.数组语法,用的比较多（仓库中是什么名字，数组里面就是什么名字，必须一致）

① computed:mapState(["count","name","age","address"]), 

② 对象解构
 computed:{
    ...mapState(["count","name","age","address"]),
    doubleNum(){   //依赖的组件中的计算属性
      return this.num*2;
    },
  }


2.对象语法
我们的组件中的数据可能和仓库中的state里面的数据重名，这样就不好了，所以使用对象的写法，对象的写法好处是，我们引进的仓库中的数据可以自定义名字（就是属性名）

computed: mapState({
对象里面有三种写法：箭头函数，字符串，普通函数

① 箭头函数
箭头函数写法，取不到this
count2: (state) => state.count,

② 字符串
传字符串参数 'name' 等同于 `state => state.name`
name: "name",

③ 普通函数
为了能够使用 `this` 获取局部状态，必须使用常规函数
也可以写成普通函数的形式（computed属性可以同时依赖多个响应式数据，有时候我们需要使用自己组件内的数据和仓库中的全局数据，做拼接，这种普通函数的写法就比较合适了）
  //   address(state) {
  //     return state.address + "--" + this.街道;
  //   },
  // }),
};
```

## 2.getters(相当于计算属性)

getters 就是 vuex 里面的计算属性  
具有缓存，用来改变的时候才会重新触发，不会去改变 state 的原数据  
可以接收第一个参数是 state  
还可以接收第二个参数是 getters,说明他还可以依赖其他的 getters

```javascript
getters: {
    reverseMsg(state){
      return state.msg.split("").reverse().join("");
    },
    reverseMsg2(state,getters){
      return getters.reverseMsg+"--你好，世界！";
    }
  },
```

### 不使用辅助函数(computed)

```javascript
computed: {
     reverseMsg() {
       return this.$store.getters.reverseMsg;
     },
     reverseMsg2() {
       return this.$store.getters.reverseMsg2;
    },
},
```

### 使用辅助函数(mapGetters)

mapGetters 是 vuex 实例里面的一个辅助函数，也会返回一个对象

```javascript
import { mapGetters } from "vuex";
export default {

1.（数组）
computed:mapGetters(["reverseMsg","reverseMsg2"]),

2. 对象解构
   computed:{
           ...mapGetters(["reverseMsg","reverseMsg2"]),
           ...mapState(["name"]),
       }
   };
```

## 3.mutations

mutations 里面是写函数的，mutations 是唯一可以去改变 state 里面数据的地方  
mutations 是和 Devtools 开发工具绑定在一起的，开发工具上的快照，就是 mutations 里面的函数执行的时候去拍的，只要一触发 mutations 里面的函数，就会在开发工具中产生一个快照  
里面的函数可以接受一个 state 参数  
**mutations 必须是同步函数**（开发者工具里面的快照是在 mutations 函数执行的时候产生的，而不是在数据改变的时候产生的）  
可以接受第二个参数，就是组件传来的值（payload）

```javascript
mutations: {
    add(state, payload) {
         setTimeout(()=>{
              state.count += payload.a;
       },200);
    },
    minus(state, payload) {
          state.count -= payload.num;
    },
},
```

### 不使用辅助函数(methods commit)

用 commit 方法与调用仓库中的 mutations 里面的函数  
commit 方法可以接收两个参数，第一个参数是 mutations 的函数名称（type）,第二个参数就是传递的参数（payload），如果是传多个参数，可以使用对象的方式进行传参

```javascript
methods: {
    handleClick1(num) {
         this.$store.commit("minus", num);
         this.$store.commit("minus", {num});
等价于
对象风格的提交方式
         this.$store.commit({
               type:"minus",
               num:num,
      });
    },
    handleClick2(){
           this.$store.commit("add");
    }
  },
```

### 使用辅助函数(mapMutations)

mapMutations 是辅助函数，可以用于简化 commit 的写法，也会返回一个对象  
将仓库中的 mutations 里面的 add 和 minus 函数映射到组件里面的 handleClick1 和 handleClick2 函数

```javascript
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["add", "minus"]),
    handleClick1(num) {
      this.minus({ num });
    },
    handleClick2() {
      this.add();
    },
  },
};
```

## 4.actions

这里也是写函数的，但是不能去改变 state,这里能做的是去调用 mutations 里面的函数  
这里允许使用异步（Backend API 后端接口是和 actions 绑定在一起的）  
actions 里面的函数可以接受一个 context 参数（context 是一个对象），context 是一个对象，表示上下文，可以从 context 对象中结构出 commit 和 dispatch 方法
还可以接受一个 payload（组件中调用该方法时传过来的数据）  
如果只用 context 对象里面的 commit 方法，也可以进行解构

```javascript
actions: {
     addAsync(context){
       console.log(context);
       setTimeout(()=>{
         context.commit("add");
       },2000);
     },
    addAsync({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 2000);
    },
  },
```

### 不使用辅助函数(methods dispatch)

使用 dispatch()方法,第一个参数就是 actions 里面的函数名  
流程：组件里面使用 dispatch 方法去调 actions 里面的函数,然后仓库中的 actions 去调用 mutations 里面的函数，mutations 去改变 state 里面的数据

```javascript
methods: {
    handleClick() {
       actions也可以进行传参
       this.$store.dispatch("addAsync", { a: 2 });         dispatch是调度的意思
    },
  },
```

### 使用辅助函数(mapActions)

在组件中分发 actions  
就是从 vuex 实例对象中解构 mapActions 这个辅助函数，返回一个对象  
将 actions 里面的 addAsync 函数映射到组件的 this.addAsync 里面

```javascript
import { mapActions } from "vuex";
methods: {
    ...mapActions(["addAsync"]),
    handleClick() {
         this.addAsync({ a: 2 });
    },
},
```

## 5.modules

```javascript
modules: {
      city:cityModule,
      detail:detailModule,
      rated:ratedModule,
},

还可以使ES6的模块化（将模块写在外面）
由于使用单一状态树(单一状态数：就是一个vuex文件只能使用一个state)，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

命名空间
默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
组件使用的时候只有state是需要加模块名的，其他的都是在全局命名空间（不需要加模块名）
computed: {
    detailInfo(){
      // detail表示的是模块名
      return this.$store.state.detail.detailInfo;
    }
},

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 
namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
所有模块都用模块名需要在store里面添加 ，namespaced: true,(和state同级)，表示命名空间
    namespaced: true,
    state: {
        // 详情页面的数据
      detailInfo: {},
    },
使用的时候不只有state需要加模块名称，getters/mutations/actions也都需要去添加模块名称了
如果添加了命名空间，需要额外加一个第一个参数是模块名称（state还是上面的写法）
...mapActions("detail",["getDetailInfoAsync"]),
```

```javascript
仓库;
import Vue from "vue";
// 引入vuex组件
import Vuex from "vuex";

// .use进行使用，vuex是一个vue的插件
Vue.use(Vuex);

// 创建了一个仓库实例
const store = new Vuex.Store({
  // store就是写仓库的数据，仓库的数据就是整个项目全局的数据
  state: {
    count: 10,
    name: "pengpeng",
    age: 25,
    address: "九堡",
    msg: "hello vuex!",
  },
  // getters就是vuex里面的计算属性
  // 具有缓存，用来改变的时候才会重新触发，，不会去改变state的原数据
  // 可以接收第一个参数是state
  getters: {
    reverseMsg(state) {
      return state.msg.split("").reverse().join("");
    },
    // 还可以接收第二个参数是getters,说明他还可以依赖其他的getters
    reverseMsg2(state, getters) {
      return getters.reverseMsg + "--你好，世界！";
    },
  },
  // mutations里面是写函数的，mutations是唯一可以去改变state里面数据的地方
  // mutations是和Devtools开发工具绑定在一起的，开发工具上的快照，就是mutations里面免得函数执行的时候去拍的，只要一触发mutations里面的函数，就会在开发工具中产生一个快照
  mutations: {
    // 里面的函数可以接受一个state参数
    // mutations必须是同步函数（开发者工具里面的快照实在mutations函数执行的时候产生的，而不是在数据改变的时候产生的）
    add(state, payload) {
      // setTimeout(()=>{
      state.count += payload.a;
      // },200);
    },
    // 可以接受第二个参数，就是组件传来的值（payload）
    minus(state, payload) {
      state.count -= payload.num;
    },
  },
  // 这里也是写函数的，但是不能去改变state,这里能做的是去调用mutations里面的函数
  // 这里允许使用异步
  // Backend API后端接口是和actions绑定在一起的
  actions: {
    // addAsync(context){
    //   console.log(context);// context是一个对象，表示上下文,里面有commit和dispatch函数
    //   setTimeout(()=>{
    //     context.commit("add");
    //   },2000);
    // },
    // 如果只用context对象里面的commit方法，也可以进行解构
    addAsync({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, 2000);
    },
  },
  modules: {},
});
export default store;
```
