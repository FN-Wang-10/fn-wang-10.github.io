## 什么是 vue.js

- 官网https://cn.vuejs.org/
- 作者： 尤雨溪
- 特点：

  - 易用： 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
  - 灵活： 不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
  - 高效： 20kB min+gzip 运行大小 超快虚拟 DOM 最省心的优化
  - 受欢迎： 在 github 上有 185k

- Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
- core -> vue 官方提供的库(vue-router, vuex 等) -> 第三方的库(axios 等) -> 工具链(ts, 测试打包工具等)

## vue 学习笔记

```javascript
## vue指令

  - v-bind:      在属性里面做声明式渲染   简写成 :
  - v-if=        条件判断是否渲染
  - v-for=       循环渲染
  - v-on:        用于监听用户事件         简写成@
  - v-model=     数据双向绑定
  - v-once       执行一次性地插值，当数据改变时，插值处的内容不会更新
  - v-html=      将内容解析html代码
  - v-text=      将内容解析成文本
  - v-else       配合v-if使用,要紧挨着v-if
  - v-else-if=   配合v-if使用,要紧挨着v-if
  - v-show=      条件判断是否渲染(通过css的display)
  - v-slot:      具名插槽                 简写成#


## options

  - el           表示Vue挂载到哪个节点
  - data         响应式数据
  - methods      放用户事件的方法
  - template     相当于js的outerhtml
  - components   注册局部组件
  - watch        侦听器
  - computed     计算属性
  - props        用于接收父组件的自定义属性
  - name         用于递归组件自己调自己
  - mixins       用于混入
  - directives   局部自定义指令

## vue自带的标签

  - template     做不可见的包裹元素
  - slot         用于插槽
  - component    动态组件
  - keep-alive   缓存组件


## 声明式渲染

  - 内容使用{{}}
  - 属性使用v-bind
  - 除了undefined, null都会转成字符串显示

## 组件

  - 全局组件
    - Vue.component("组件名", {...options})
    - 取名：大驼峰或连字符   调用： 连字符
  - 局部组件
    - const "组件名" = {...options}
    - 取名：大驼峰   调用： 连字符

## MVC和MVVM(面试)

  - MVC和MVVM他们都是常见的软件架构思想
  - MVC:
    - 视图（View）：用户界面。
    - 控制器（Controller）：业务逻辑。
    - 模型（Model）：数据保存
    - 通信方式： View -> Controller -> Model -> View
  - MVVM:
    - 视图（View）：用户界面。
    - 视图模型层（ViewModel）：业务逻辑。
    - 模型（Model）：数据保存
    - 通信方式： View <-> ViewModel -><- Model

## 生命周期

  - 创建阶段
    - beforeCreate
    - created

  - 挂载阶段
    - beforeMount
    - mounted

  - 更新阶段
    - beforeUpdate
    - updated

  - 销毁阶段
    - beforeDestroy
    - destroyed

    - activated    被keep-alive缓存的组件激活时调用
    - deactivated  被keep-alive缓存的组件停用时调用


## 计算属性 vs 方法

  - 计算属性是有缓存的，方法是没有的
  - 计算属性必须要依赖响应式数据(可以是多个)，只有当所依赖的响应式数据改变的时候才会重新求值
  - 计算属性不能主动修改，只能被动地依靠它所依赖的响应式数据的改变而改变

## 计算属性 vs 侦听器

  - 计算属性是被动的，依赖的响应式数据改变我才改变
  - 侦听器是主动的，我改变了然后让别人改变，触发其他的事情
  - 计算属性是可以同时监听多个的，侦听器只能侦听一个
  - 优先使用计算属性
  - 当执行异步或开销较大的操作时，使用watch


## v-if vs v-show

  - 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。


## v-if和v-for不要一起使用

  - 1. v-if的条件和item有关的时候，优先使用计算属性，过滤出我们要的数据，再循环
  - 2. v-if的条件和item无关的时候，将v-if添加到循环的父元素上


## v-for

  - 可以循环数组和对象，并且都能使用in和of
  - 循环数组有两个参数 item, index
  - 循环对象有三个参数 value, key, index

## 事件处理

  - 事件的括号可以加也可以不加
  - 如果要传递event， 不加括号或者传$event

## vue为什么在 HTML 中监听事件

  你可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图的 ViewModel 上，它不会导致任何维护上的困难。实际上，使用 v-on 有几个好处：
  扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
  因为你无须在 JavaScript 里手动绑定事件，你的 ViewModel 代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
  当一个 ViewModel 被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。

## 事件修饰符

  - stop  冒泡
  - prevent  默认行为

## v-model修饰符

  - lazy    将input事件转成change事件
  - number  parseInt
  - trim    去除首尾空格

## 组件基础

  - data选项要写成函数，并且return对象
  - 每个组件单个根元素

## 组件传参

  - 父传子
    - 1. 在父组件使用自定义属性传值，在子组件使用props接受
    - 2. 使用插槽（插槽的作用域是父组件的作用域）
    - 3. $root,$parent
    - 4. 依赖注入

  - 子传父
    - 1. 在父组件里面定义自定义事件，在子组件用this.$emit()去触发
    - 2. 作用域插槽
    - 3. ref配合$refs

  - 非父子

## 插槽

  - 作用： 内容分发

## 取名

  - 组件
    - 全局 大驼峰和连字符
    - 局部 大驼峰
  - 自定义属性
    - 连字符
  - 自定义事件
    - 连字符


## 混入

  - 作用： 分发可复用功能
  - 混入对象的data和组件的data是会合并的,重名是按组件内部的来
  - 生命周期是都会执行，混入的先执行

## 过滤器

  - 作用： 文本格式化

**SPA**

SPA （single-page application：单页面应用程序）在页面初始化的时候加载相应的 HTML、js、css，一旦加载完成，页面不会因为用户的操作进行页面的重新加载或者跳转，而是使用路由机制实现HTML内容转换，避免页面重新加载。

优点：

1、 用户体验好，内容修改不需要重新渲染页面，避免不必要的跳转和渲染；
2、SPA 对服务器的压力比较小；
3、前后端分离，架构清晰，前端负责页面，后端负责数据；

缺点：

1、首屏加载慢；
2、所有内容在同一个页面动态展示，不利于 SEO 优化；

原文链接：https://blog.csdn.net/weixin_43299180/article/details/117250597

## vue-cli

  - 创建项目

    - cnpm install -g @vue/cli
    - 生成项目  vue create 项目名  （不要在git bash上做）

  - 配置

    - Please pick a preset: (Use arrow keys)
      Default ([Vue 2] babel, eslint)
      Default (Vue 3 Preview) ([Vue 3] babel, eslint)

      > Manually select features  （自定义配置）

    - Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
      (*) Choose Vue version
      (*) Babel
      ( ) TypeScript
      ( ) Progressive Web App (PWA) Support
      (*) Router
      (*) Vuex
      (*) CSS Pre-processors
      (*) Linter / Formatter
      ( ) Unit Testing
      ( ) E2E Testing

- Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)  n

  - 项目结构
    - node_modules       项目依赖
    - public             静态资源目录
      - favicon.ico      页面小图标
      - index.html       html文件
    - src                开发目录
      - assets           静态资源目录(会被打包的)
      - components       组件目录
      - router           路由目录
      - store            vuex目录
      - views            视图目录
      - app.vue          根组件
      - main.js          入口文件
    - .browserslistrc    浏览器支持
    - .eslintrc.js       eslint的配置文件
    - .gitignore         表示不要上传的目录的文件
    - package-lock.json  锁定版本
    - package.json       依赖的记录文件
    - README.md          项目说明


  - .vue文件

    - 单文件组件（一个.vue文件就是一个组件）
    - template  script  style

  - 手机适配

    - 使用postcss-pxtorem(单位换算)和amfe-flexible(定义跟字体大小)两个插件

    - cnpm install amfe-flexible -S

    - cnpm install postcss-pxtorem@5.1.1 -D

    - 在main.js里面引入 import "amfe-flexible"

    - 在根目录创建一个.postcssrc.js

```

## 虚拟 DOM，diff 算法

将 html 的片段，转成 js 的对象，并且存在浏览器的内存里面。如果要改变 html，不是直接改，而是去修改 js 对象。等所有的修改都结束了之后，再将 js 对象转回成 html，最终做一次性的渲染。

diff 算法：同级比较（减少比较次数），key 的比较（元素复用）

## 组件

vue 一个根元素

```javascript
<script src="../../Vue.js"></script>
```

引入的 Vue 是一个构造函数，里面可以传入一个选项对象

new Vue 是最大的组件

```javascript
const vm = new Vue({
所有的代码都是写在这个对象里面
element,意味着vue要去控制这个元素
    el:"#app", —————— 挂载的元素
    data:{ } —————— 响应式数据
    methods：{———————— 定义事件处理函数的
         handleClick(e){ }
    }
    computed:{
      total（）{ return  }
}
    components:{
        注册的组件名
     }
})
```

vue 是以组件为单位进行开发的  
组件一般按功能进行划分，最少一个功能  
根组件里面的 data 选项对象也可以写成函数返回对象的形式

data 里面的内容会向外放一层，直接挂载到实例下面

组件的 data 必须要写成函数返回对象  
原因：是因为函数有作用域，可以让我们的组件维护自己的状态(data 的数据)  
如果组件里的 data 直接写成对象，那么 data 里面的变量就会变成全局的，复用的时候就会影响到别的组件，函数有作用域，函数返回对象实际上和直接写对象是一样的，但是可以自己维护自己的数据，不会影响到别的组件  
每一个组件必须只能有一个根元素，需要在外面加一个标签  
template 在这里用不了

模板的注意事项（template）  
`option/tr/td`不能作为组件的根元素的

组件的取名规则  
见名知意(语义化)  
不能和现有的 h5 标签重复  
取名要使用连字符或者大驼峰  
调用的时候要使用连字符

### 全局注册

全局创建组件  
全局创建的组件的 data 必须要写成函数返回对象  
原因：是因为函数有作用域，可以让我们的组件维护自己的状态(data 的数据)  
如果组件里的 data 直接写成对象，那么 data 里面的变量就会变成全局的，复用的时候就会影响到别的组件，函数有作用域，函数返回对象实际上和直接写对象是一样的，但是可以自己维护自己的数据，不会影响到别的组件 ⭐  
每一个组件必须只能有一个根元素，需要在外面加一个标签  
template 在这里用不了  
里面有两个参数  
参一：组件名称  
参二：选项对象

```javascript
Vue.component("TbHeader", { template: "<header>淘宝头部</header>" });
```

这个对象里面写的是 option，new Vue 可以写什么，这里就可以写什么，除了 el  
里面必须要有一个东西叫 template  
组件里面的 data 要使用函数的方式

```javascript
data (  )  {  return  }
```

```javascript
Vue.component("组件名称"，{ 选项对象
data (  )  {
 return  {

}；
}，
new Vue可以写什么，这里就可以写什么，除了el
template:"渲染的结构"，
 })
```

### 局部注册（需要注册）

如果项目用的是全局注册的组件，那么全局注册的组件是直接挂载在 vue 的构造函数上面，一个完整的项目可能有四五十个页面，组件可能有几百个，一开始就全部挂载好，就会导致项目很大，运行起来会很慢，尤其是刚打开的时候会很慢  
局部注册的好处，我的组件，我要用的时候再去引进来，上面只是定义变量，我要用到哪个组件，我在把哪个组件引进来（按需引用）

```javascript
const TbHeader = {
            template: `<div>淘宝头部</div>`,
        };
 components: {
                TbHeader,
            }
```

对象里面写的还是选项，跟全局创建组件的第二个参数完全相同  
取名只能使用大驼峰了,使用只能用连字符  
局部创建的组件需要注册 components  
谁使用这个组件，就在谁里面注册，同时组件的标签就写注册的模板中,项目最外层的组件要在根组件里注册，使用的时候要在根标签里使用  
最大的组件要定义在最下面

### 组件的嵌套

```javascript
            template: `<footer>--<tb-button></tb-button></footer>`,
            components: {
                TbButton,
            }
```

data 也可以写在外面

```javascript
const data = {
  a: 3,
  obj: {
    x: 10,
    y: 20,
    z: null,
  },
};
```

`Object.freeze()`用来冻结数据的

```javascript
Object.freeze(data);
```

data 里面的内容会向外放一层，直接挂载到实例下面  
只有当实例被创建时就已经存在于 data 中的 property 才是响应式的  
如果想让数据具有响应式，需要在 data 里面给这个数据加初始值（一般为设置为 null）

模板的注意事项（template 选项）  
`option/tr/td`不能作为组件的根元素的

data 里面的数据是具有响应式的（当这个数据一旦发生改变，页面就会自动的从新渲染）  
在 Vue 里面所有的操作都是在操作数据（再也没有 dom 操作了），数据驱动 ⭐

## 渲染

### 1.声明式渲染 `{{  }}`

双大括号的模板语法，可以将响应式数据直接渲染到模板里  
使用双括号的形式进行声明式的渲染，文本  
用双大括号显示的时候，除了 undefined 和 null 以外，都会一字符串的方式显示  
双大括号里面不仅可以使用变量，还可以使用 js 表达式

属性  
属性如果要使用变量或者表达式，使用 v-bind 的指令  
自定义属性后面的值，如果是变量或者表达式，需要使用`v-bind`

```javascript
<p v-bind:title="title">hello Vue!</p>
```

### 2.条件渲染

v-if 用于控制一个元素是否渲染  
v-if 里面可以写变量和表达式

```javascript
<p v-if="show===1">现在你看到我了</p>
```

#### v-if

v-else-if  
v-else  
v-if 和 v-else 要是并列的兄弟元素  
template 就是空的占位符标签，不会显示  
vue 自己提供的一个组件  
满足 v-if 指令后面的条件则显示 template 标签里面的内容，不满足则执行 v-else 指令里面的内容

```javascript
<template v-if="show===1">
  <div>111</div>
  <div>111</div>
  <div>111</div>
  <div>111</div>
</template>
```

#### key 管理可复用的元素

用 key 管理可复用的元素  
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 placeholder。
给元素添加了不同的 key 值，相当于告诉 vue，这两个元素没有关系，不要进行复用 ⭐

```
<template v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username" key='1'>
        </template>

        <template v-else>
          <label>Email</label>
          <input placeholder="Enter your email address" key='0'>
        </template>

<button @click="loginType = loginType === 'username' ? '123' : 'username'">点击</button>
 data: {
                loginType: "username",
            }
```

#### v-show 和 v-if

v-show 的语法和 v-if 完全相同  
区别在于 v-show 是通过 css 的 display 属性进行切换  
v-if 如果初始化的时候条件为假，则不会进行渲染，直到条件为真才会进行渲染，v-if 是有惰性的  
v-show 初始化的时候已经被渲染，不管条件的真假，它是通过控制元素的 display 属性进行显示的，条件为真则显示，条件为假就不显示

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。  
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。  
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。  
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。⭐

### 3.循环渲染

v-for 指令用于做循环渲染  
哪个元素要循环，就给哪个元素添加 v-for  
item 表示的是每一项，形参

```javascript
<li v-for="item in list">{{ item }}</li>
```

#### v-for（遍历数组和对象）

遍历数组
v-for 遍历数组时可以接收二个参数（这里的参数都是形参，自定义的，相当于形参）
第一个参数是：item(数组中的每一项)，  
第二个参数：index（每一项所对应的索引）  
for in 循环也可以写成 for of 循环  
在 vue 里 for...in...和 for...of...一样，都可以遍历数组或者对象 \

遍历数组

```javascript
<li v-for="(item,index) in lists">{{ item.message }}-{{ index }}</li>
```

遍历对象  
v-for(in&of)遍历对象时，有三个参数  
第一个参数：属性值（value）  
第二个参数：属性名（key）  
第三个参数：索引（index）

```javascript
<li v-for="(value,key,index) in object">
  {{ value }}----{{ key }}----{{ index }}
</li>
```

#### 循环中的 key（维护状态）

key 保证如果改变前后的两个元素的 key 是相同的，就会直接复用，提高性能 ⭐  
key 必须保证不重复, key 必须是数字或者字符串  
只要使用 v-for 循环，就必须加:key=""（无脑加）,最好的用 id,如果没有 id 才用 index⭐  
key 的值不可以是引用类型（复杂类型）的，因为引用类型比较的是地址，改变前和改变后对象的值地址肯定是不相同的，  
vue 在使用 v-for 循环的时候，如果我们要在数组或者对象中添加或者修改内容，vue 会从新进行渲染（卸载和重新创建），其实我们只是在原数组或者对象中添加一项，前面的几项还是一样的，但是 vue 也会重新渲染（卸载并重新创建），这样就会造成性能损耗，浪费资源。因此我们需要在循环的元素中添加一个 key（key 必选保证不重复，同时 key 必须是数字或者字符串），渲染的每一个元素的 key 都是不相同的，这样可以让 vue 进行判断，如果再次渲染和渲染前元素的 key 相同，就不会进行渲染就可以复用，只会渲染 key 值不相同的元素，可以提升性能 ⭐

尽量不要使用 index 作为 key，实在没办法才使用 index 作为 key(因为如果在数组中插入一项，那么原有的数组项的 index 会改变，key 值就不相同了，vue 就无法进行复用，只能重新卸卸载并创建) ⭐

```
<li v-for="(item,index) in list" :key="item.id">{{ item.message }}</li>
```

#### 数组的更新检测（在数组中新增）⭐

```
data: {
                arr1: ["zhangsan", "lisi", "wangwu"],
            },
handleClick() {
                    this.arr1.push('zhaoliu');    都可以
                    this.arr1 = this.arr1.concat('zhaoliu');
                }
<li v-for="item in arr1" :key="index">{{ item }}</li>
<button @click="handleClick">点击</button>
```

#### 注意事项（响应式失效）

```javascript
data: {
                list: [1, 2, 3, 4, 5],
                obj: {
                    a: 3,
                    b: 4,
                },
            },
handleClick() {
                    // this.list.push(6);
                    // 响应式失效⭐
                    // 1. 直接改变数组长度
                    // 2. 通过索引去改变数组项
                    // 3. 在对象里面挂载新属性

                    // this.list.length = 3; //响应式失效
                    // this.list[2] = 20;//响应式失效
                    // this.obj.a = 10;//正常
                    this.obj.c = 100; //响应式失效

         this.list.length = 3;
                    // 解决(依靠es5的浅拷贝，将原来的数组的长度变为3，通过扩展运算符展开这个数组，放入一个新数组，重新赋值给这个数组，利用的是浅拷贝)
                    //方法1
                    // this.list = [...this.list];
            this.list[2] = 20;
                    //方法2
                       this.list = [].concat(this.list);
           this.list[2] = 20;
                    //方法1
                    // this.obj = {...this.obj};
            this.obj.c = 100;
                    //方法2
                    this.obj = Object.assign({}, this.obj);
            this.obj.c = 100;

},
```

#### 强制更新 ⭐

```javascript
data: {
                list: [1, 2, 3],
                obj: {
                    a: 2,
                    b: 3,
                }
            },
            methods: {
                handleClick() {
                    // 不能强制更新的三种情况
                    // this.list.length = 2; //不可以更新
                    // this.list[2] = 10; // 不可以更新
                    // this.obj.a = 100;  //可以更新
                    // this.obj.c = 20; // 不可以更新

                    // 数组
                    // this.list = [...this.list]; //数组方法一
                    // this.list = [].concat(this.list); //数组方法一
                    // this.list.splice(2); //数组方法三
                    // 对象
                    // this.obj = {...this.obj}; //对象方法一
                    // this.obj = Object.assign({}, this.obj); //对象方法二

                    // 强制更新⭐
                    // this.$forceUpdate(); //可以更新，但是尽量少用
                    // this.$set(this.obj, 'c', 100);
                },
            },
```

#### 循环嵌套，在 v-for 中使用值范围

九九乘法表

```javascript
        <div v-for="item in 9">
            <span v-for="value in item">{{ value }} * {{ item }} = {{ value * item }}</span>
        </div>
```

#### v-if 和 v-for 不要一起使用

```
 data: {
                list: [1, 2, 3, 4, 5, 6, 7],
                show: true,
            },
            computed: {
                oddList() {
                    return this.list.filter(item => item % 2);
                },
                newList() {
                    if (this.show) {
                        return this.list;
                    } else {
                        return [];
                    }
                }
            },
 一个元素同时有v-for和v-if, v-for会有一个更高的优先级⭐
        <ul>
这种会有性能损耗
            <li v-for="(item,index) in list" :key="index" v-if="item%2">{{ item }}</li>
        </ul>

判断条件和item相关的时候，可以使用计算属性来过滤
1.利用计算属性，先对数据进行过滤，过滤完之后再进行循环
        <ul>
            <li v-for="(item,index) in oddList" :key="index" v-if="item%2">{{ item }}</li>
        </ul>

2.这种方法，添加一个show变量，对show进行判断，如果为true就进行循环，如果为false则不会进行循环
        <ul>
            <li v-for="(item,index) in newList" :key="index">{{ item }}</li>
        </ul>

3.判断条件和item无关的时候，可以把v-if放到父元素
        <ul v-if="show">
            <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>

⑦  在 <template> 上使用 v-for
类似于 v-if，你也可以利用带有 v-for 的 <template> 来循环渲染一段包含多个元素的内容。比如：

<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

### 4.模板语法 ⭐

v-once 指令表示这个元素只会被渲染一次

```javascript
<p v-once>{{ count }}</p>
```

v-html 表示将内容转成 html 标签进行渲染

```javascript
data:{
     content: '<h1>标题<h1>',
}

        <div v-html="content"></div>
```

v-text 表示将内容转成普通文本进行渲染

```javascript
data:{
     content: '<h1>标题<h1>',
}
<div v-text="content"></div>
```

## 事件

v-on:click  
v-on 指令用于定义事件  
调用事件处理函数时，小括号可以加，也可以不加

### 1.事件传参

#### 加上括号可以做事件的传参

```javascript
        <button v-on:click="countAdd(2)">点击+2</button>
countAdd(num) {
                    this.count += num;
                },
```

#### 如果只获取事件对象，不传实参，不用加括号，否则就获取不到事件对象（会输出 undefined）

```javascript
        <input type="text" v-on:input="handleInput">
handleInput(e) {
                    console.log(e.target.value);
                }
```

#### 如果需要传参，同时需要获取事件对象，则把事件对象写在后面$event

```javascript
        <button v-on:click="fn2(3,$event)">点击3</button>
fn2(num, e) {
                    console.log(num);
                    console.log(e);
                },
```

### 2.事件修饰符

v-on:click.stop  
v-on:————表示指令  
click:————表示参数  
stop:————表示修饰符

```
methods: {
                fatherClick() {
                    console.log('fatherClick');
                },
                sonClick(e) {
                    // event.stopPropagation();
                    console.log('sonClick');
                },
                // form表单提交的时候会有一个默认行为，就是刷新页面
                onSubmit() {
                    console.log(1);
                }
            }

<div class="father" @click="fatherClick">
①. stop修饰符表示阻止事件冒泡
            <div class="son" @click.stop="sonClick"></div>
        </div>

② .prevent修饰符用于阻止默认行为

<form action="" @submit.prevent="onSubmit">
            <input type="text">
            <input type="submit">
        </form>
```

在事件处理程序中调用  event.preventDefault() (阻止浏览器默认行为)或  event.stopPropagation() （阻止事件冒泡）是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。  
为了解决这个问题，Vue.js 为  v-on  提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。  
.stop————阻止事件冒泡  
.prevent————阻止浏览器默认行为  
.capture————阻止事件捕获  
.self————点击自己（对于父元素来说，只能点击自己，点击父元素里面的子元素，没用）  
.once————事件只能触发一次  
.passive————提升移动端滚动的性能的

### 3.按键修饰符

```
两种写法都可以
        <!-- <input type="text" @keyup.enter="handleClick"> -->
        <input type="text" @keyup.13="handleClick">
handleClick(e) {
                    // console.log(e.target.value);
                    // js里的写法
                    // if (e.keyCode === 13) {
                    //     console.log(e.target.value);
                    // }
                    // if (e.key === 'Enter') {
                    //     console.log(e.target.value);
                    // }
                    console.log(e.target.value);
                }
```

按键修饰符  
.enter  
.tab  
.delete (捕获“删除”和“退格”键)  
.esc  
.space  
.up  
.down  
.left  
.right

### 4.系统修饰符

.ctrl  
.alt  
.shift  
.meta  
exact  修饰符  
.exact  修饰符允许你控制由精确的系统修饰符组合触发的事件。

### 5.自定义事件转原生事件（使用 native 修饰符）

```
<div id="app">
        <!-- @click添加在子组件标签上面，它默认就是自定义事件 -->
        <!-- native修饰符是可以尝试着将自定义事件转成原声事件 -->
        <h3>事件补充，native修饰符</h3>
        <child @click.native="handleClick"></child>
</div>

    <script src="../../Vue.js"></script>
    <script>
        Vue.component('child', {
            template: `
                <div>child组件</div>
            `,
        })
        new Vue({
            el: '#app',
            data: {},
            methods: {
                handleClick() {
                    console.log(1);
                }
            }
        });

</script>
```

### 6.自定义事件

```
<!-- 自定义事件 -->
        <!-- 定义：连字符 -->
        <!-- 调用：连字符 -->
        <child @get-count="fn"></child>
this.$emit("get-count");
```

## 表单

表单输入绑定

```
data: {
                message: '',
                message2: '',
                // checked: false,//也可以
                checked: 'no',
                checkedNames: [],
                picked: '',
                selected: '',
            }
1.普通文本
value和input事件
        <input v-model="message" placeholder="edit me">

        <p>Message is: {{ message }}</p>
        <hr>

2.多行文本
value和input事件
        <span>Multiline message2 is:</span>
        <p style="white-space: pre-line;">{{ message2 }}</p>
        <br>
        <textarea v-model="message2" placeholder="add multiple lines"></textarea>
        <hr>

3.多选框
        <!-- checked和change事件 -->
        <!-- 如果这个变量只被一个单选框绑定，绑定的是布尔值 -->
        <input type="checkbox" id="checkbox" v-model="checked" true-value="yes" false-value="no">
        <label for="checkbox">{{ checked }}</label>
        <br>
        <!-- 如果这个变量被多个单选框绑定，绑定的是数组 -->
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <hr>

4.单选框
        <!-- checked和change事件 -->
        <!-- 单选框绑定的是字符串类型 -->
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
        <hr>

5.下拉选择框
        <!-- value和change事件 -->
        <!-- 下拉框默认绑定的是字符串类型 -->
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <!-- <option>A</option>
            <option>B</option>
            <option>C</option> -->
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        <span>Selected: {{ selected }}</span>

6.表单的修饰符
data: {
                text1: "",
                text2: "",
                text3: "",
            },
① lazy修饰符
        <!-- lazy修饰符就是将 onInput事件换成onChange事件 -->
        <input type="text" v-model.lazy="text1">
        <p>{{ text1 }} - {{ typeof text1 }}</p>

② number修饰符
        <!-- number类型，只可以输入数字和e -->
        <!-- <input type="number" v-model="text2"> -->
        <!-- number修饰符,将表单的值转成数字类型 -->
        <input type="number" v-model.number="text2">
        <!-- 修饰符可以链式操作 -->
        <!-- <input type="number" v-model.number.lazy="text2"> -->
        <p>{{ text2 }} - {{ typeof text2 }}</p>

③ trim修饰符
        <!-- trim修饰符用于去除首尾空格 -->
        <input type="text" v-model.trim="text3">

        <p>{{ text3 }}</p>

​        <button @click="handleClick">点击</button>

```

## 双向数据绑定，单项数据流

双向绑定 v-model  
双向绑定必须是和表单元素相关的  
v-model 指令可以用于双向数据绑定，input 和 data 里面的响应式数据进行绑定  
v-model 只是一个语法糖 v-model 加在 input 中  
v-model 其实就是 v-bind 和 v-on 的语法糖 (表单的 value 和 input)

```javascript
 <input type="text" v-model="msg">
```

### 1.手动实现 v-model

```
<input type="text" v-bind:value="msg" v-on:input="handleInput">
data: {
                msg: 'hello vue',
            },
handleInput(e) {
                    this.msg = e.target.value;
                },
```

### 2.组件添加 v-model (重写 v-model)

```
<div id="app">
        <h3>组件添加v-model</h3>
        <p>{{ msg }}</p>
        <!-- 改写前 -->
        <!-- <child :value="msg" @input="handleAbc"></child> -->
        <!-- v-model改写后 -->
        <!-- v-mode就是v-bind和v-on的语法糖 -->
        <child v-model="msg"></child>
</div>

<script src="../../Vue.js"></script>

    <script>
        // 父组件的变量和子组件的input的内容做双向绑定

Vue.component('child', {
            props: ["value"],
            template: `
                <input type="text" :value="value" @input="handleInput">
            `,
            methods: {
                handleInput(e) {
                    // console.log(e.target.value);
                    this.$emit("input", e.target.value);
                }
            }
        })
new Vue({
            el: '#app',
            data: {
                msg: "hello vue!",
            },
            // 换成v-mode后就不需要了
            // methods: {
            //     handleAbc(value) {
            //         this.msg = value;
            //     }
            // }
        });
</script>
```

### 3.单向数据流和双向数据绑定

vue 是什么数据流？单向数据流

#### 单向数据流 ⭐

父组件的数据改变了，那么传递给子组件的内容会同步改变  
子组件接收到的 props 的值是不能修改的，如果要改必须在父组件里改  
如果特殊情况真的想改 props 的值，可以将 props 的值作为组件的 data 的初始值  
注意：vue 这里可以改，但会报错（说是不能改，但真能改，会报错），这是设计的错误  
单项数据流， 数据只能 从父的流向子的，子不能改变父的（和子传父不冲突，不是一回事）  
单向数据流，是组件层面的，父组件的东西可以给子组件用，子组件不能去改  
注意：props 里面的数据和 data 里面的数据不能重名，因为 props 和 data 里面的数据都会向外提取一层 ⭐⭐  
计算属性可以依赖 props 的值（父组件传入的数据变了，子组件计算属性依赖的 props 的值也会改变，计算属性就会改变）⭐

#### 双向数据绑定 ⭐

双向数据绑定，组件内部的，组件内部的变量和它的 input 里面的内容可以双向数据绑定  
单向数据流和双向数据绑定是不冲突的，没有任何关系  
如果特殊情况真的想改 props 的值，可以将 props 的值作为组件的 data 的初始值

#### vue 双向绑定原理 ⭐

vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。  
也就是数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变

## 生命周期

10 种生命周期  
生命周期执行顺序和书写顺序无关  
只有创建阶段和挂载阶段的生命周期会自动执行（只要 new Vue 实例化，前面两个阶段就会自动执行）

在创建之前 vue 自己去初始化了事件和生命周期

### 1.创建阶段（初始化阶段）

beforeCreate() {},————不能去做数据请求，不能拿到 data 里面的响应式数据，不能去做赋值  
vue 自己初始化了注入和响应式(data 和 methods)  
created() {},————这里可以做数据请求，可以拿到响应式数据，可以去做赋值

vue 会去检查是否有 el 选项//如果没有 el 选项，vue 就会中断执行(但是可以补救一下，就是在 vm 对象后面链式操作加上.$mount(el))  
vue 会去检查是否有 template 选项（如果有就会用模板替换之前的内容，如果没有就会用 el 里面的元素进行渲染）

### 2.挂载阶段

beforeMount() {},————这里也可以做数据请求  
重点注意：vue 会去将虚拟 dom 替换成真实 dom(将带双大括号的内容渲染成真正的内容)
mounted() {},————这里可以做数据请求，一般在这 created 和 mounted 里做数据请求  
在挂载完成后需要手动销毁组件 this.$destroy(); //手动销毁组件（写在 mounted 里面）  
vue 里面销毁组件是销毁的是响应式

created，beforeMount，mounted 理论上可以请求数据，一般在 mounted 里请求

### 3.更新阶段

更新阶段会在 data 的数据发生改变的时候触发  
更新前和更新后不是数据改变的前后, 是 dom 重新渲染的前后  
注意：数据的改变和页面的渲染不是一起发生的  
beforeUpdate() {},————在 beforeUpdate 可以修改数据，但是一般也不会在这里修改数据  
这里 vue 自己会对更新后的虚拟 dom 进行从重新渲染  
updated() {},————在 updated 里面不要去修改数据，如果修改数据会造成死循环

### 4.销毁阶段

组件销毁的时候会触发  
组件销毁的时候，组件的定时器是不会被销毁的  
beforeDestroy() {},————清除定时器/WebScoket/js 的事件监听/第三方插件的监听  
destroyed() {},————destroyed 这个生命周期几乎不用

### 动态组件使用的（缓存组件的定时器问题）

activated 钩子：被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。  
deactivated 钩子：被 keep-alive 缓存的组件失活时调用。该钩子在服务器端渲染期间不被调用。

## 数据请求在 created 和 mounted 的区别

created 是在组件实例一旦创建完成的时候立刻调用，这时候页面 dom 节点并未生成  
mounted 是在页面 dom 节点渲染完毕之后就立刻执行的  
触发时机上 created 是比 mounted 要更早的  
两者相同点：都能拿到实例对象的属性和方法讨论这个问题本质就是触发的时机，放在 mounted 请求有可能导致页面闪动（页面 dom 结构已经生成），但如果在页面加载前完成则不会出现此情况建议：放在 create 生命周期当中

create 为组件初始化阶段，在此阶段主要完成数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，此时还未生成真实的 DOM，也就无法获取和操作 DOM 元素。而 mount 主要完成从虚拟 DOM 到真实 DOM 的转换挂载，此时 html 已经渲染出来了，所以可以直接操作 dom 节点。

## 计算属性和监听属性，过滤器

### 1.计算属性

计算属性(看似是个函数，可以把他当做属性看)  
里面写的是函数，里面的函数必须要有返回值  
计算属性是不改变原始数据的（就是 data 里面的响应式数据），原始数据还是原样，可以使用  
计算属性是有缓存的，缓存的是函数的返回值，只有当依赖发生改变的时候才会再次计算  
计算属性需要有依赖，响应式数据就是它的依赖  
计算属性里面的函数一开始就会先执行（计算属性里面的函数只要有依赖，它就会先执行好，然后存储下来，函数所依赖的响应式数据只要发生改变，计算属性就会从新计算，并从新保存,用的时候当做属性使用，不用去调用）  
一个计算属性可以同时依赖多个响应式数据，还可以依赖其它的计算属性  
不能直接修改计算属性，改变计算属性唯一的方式就是修改它的依赖（依赖的响应式数据）

计算属性什么时候使用  
我们要通过现有的响应式数据，计算出或者说过滤出一个新的值的时候，并且要不改变响应式数据，可以使用计算属性

```
            computed: {
                reverseMsg() {
                    console.log(1);
                    return this.msg.split("").reverse().join("") + this.count; //一个计算属性可以同时依赖多个响应式数据
                },
                oddArr() {
                    return this.arr.filter(item => item % 2 === 1);
                },
                doubleOddArr() {
                    return [...this.oddArr, ...this.oddArr]; //还可以依赖其它的计算属性
                },
            }
```

### 2.监听属性

watch 用于监听  
监听响应式数据，里面写函数，函数的名称就是要监听的响应式数据（也就是变量）

```
            watch: {
                //监听count这个变量
                count(val, oldVal) { //val:新值  oldVal:旧值
                    console.log(1);
                    console.log(val);
                    console.log(oldVal);
                },
                //监听obj这个对象
                // obj(val) {
                //     console.log(val); //打印不出来结果，因为obj是引用类型的数据，监听的是地址，只要地址不发生改变，就监听不到，而我们要监听的是obj对象里面的a的值，所以不能这样写
                // },
                obj: {
                    handler(val) {
                        console.log(val);
                    },
            深度监听，可以监听对象和数组
                    deep: true,
            进入页面的时候就会先做一次监听
                    immediate: true,
                },

            }
```

### 3.计算属性 vs 监听属性

```
<input type="text" v-model="firstName">
<input type="text" v-model="lastName">

<p>{{ fullName }}</p>

data: {
                firstName: '李',
                lastName: '四',
                fullName: '李 四',
            },
监听属性实现
watch: {
                firstName(val) {
                    this.fullName = val + '' + this.lastName;
                },
                lastName(val) {
                    this.fullName = this.firstName + '' + val;
                },
            },
计算属性实现
            // computed: {
            //     fullName() {
            //         return this.firstName + '' + this.lastName;
            //     },
            // },
```

### 4.过滤器（filters）管道符

过滤器的作用：文本格式化  
双大括号和 v-bind 都可以使用过滤器  
过滤器可以串联  
filters 选项对象的语法和 methods 一样

```
        <!-- <p>{{ sex===1 ? "男" : "女" }}</p> -->
        <p>{{ sex | formatSex | formatSex2}}</p>
data: {
                sex: 1,
            },
filters: {
                formatSex(val) {                                 // val参数：表示管道符前面的变量
                    return val === 1 ? "男" : "女";
                },
	formatSex2(val) {
                    return val === '男' ? '♂' : '♀';
                },
            },
```

## 添加样式

### 1.class

```
<p :class="className">hello vue!</p> -->
```

### 2.class（三目） 三目不好识别

```
 <p :class="big ? 'big':'small'">hello vue!</p>
```

### 3.class（对象的形式）

在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组  
如果使用对象，key 表示类名，value 表示表达式  
如果类名有连字符，需要加一个引号  
class 和:class 是可以一起使用的

```
<p :class="{ big:big,'red-color':active===1 }" class="abc">hello vue!</p>

data: {
                className: 'big',
                big: true,
                active: 1,
            }
```

### 4.行内样式

```
<p style="color:red;font-size:50px">hello vue!</p>
```

### 5.可以使用对象的语法写:style

key 对应的 css 的属性，value 是变量或者 js 表达式  
点击按钮，实现字体加 1，水平移动 5

```
        <button @click="size++,distance+=5">点击</button>
        <p :style="{color:color,'font-size':size+'px',transform:'translateX('+distance+'px)'}">hello vue!</p>
data: {
                color: 'red',
                size: 50,
                distance: 0,
            }
```

## props,$emit,provide,inject 依赖注入

父传子  
在父组件的子组件中添加自定义属性  
子组件使用 props 选项接收（可以是数组，也可以是对象）

子传父  
在父组件的子组件中添加自定义事件（@xxx）事件处理函数写在父组件中  
在子组件里面使用 this.$emit()方法进行调用  
this.$emit()方法可以接受多个参数，第一个参数是父组件里面子组件标签上的自定义事件名称，从第二个参数开始就是子组件要传给父组件的变量（响应式数据），如果变量过多可以采用对象的形式进行传参

### 父传子

#### 1.props（数组接收）

需要在父组件的子组件的标签上添加自定义属性  
在子组件里面使用 props 选项进行接收（数组的形式，数组里面的数组项需要带引号）

```
props: ["abc", "name", "count"],
自定义属性的规范
        // 传递：连字符
        // 接收：小驼峰
```

props 中的数据和 data 一样也会向外暴露一层，直接挂载在实例上

#### 2.Prop 的类型（验证） （对象接收）

如果传的自定义属性，在子组件没有用 props 接受，那么它就会直接挂载到子组件的根元素上面  
props 除了用数组接受以外，还可以使用对象的方式进行接收

```javascript
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}

类型检测和默认值
props: {
① String是规定类型，上面不传也不会报错
                name: String,
② 多个类型,可以不传，不会报错
                age: [Number, String],
③ 必填，不可以不传
                sex: {
                    type: [String, Number],
                    required: true, //必填
                },
④ 有默认值,可以不传
                money: {
                    type: Number,
                    default: 3500,
                },
⑤ 自定义验证函数
                color: {
                    type: String,
                    validator(value) {
                        // 这个值必须匹配下列字符串中的一个
                        return ["red", "yellow"].indexOf(value) !== -1;
                    },
                },
                height: {
                    type: Number,
                    validator(value) {
                        return value > 100;
                    },
                },
                // xxx:{
                //     validator(value){
                //         const reg=/ /;//正则表达式
                //         return reg.test();
                //     },
                // }
            },
```

#### 3.传递静态或动态 Prop

```
静态传递
<blog-post  title="My journey with Vue"></blog-post>
动态赋予一个变量的值 （就是传递变量）
<blog-post v-bind:title="post.title"></blog-post>
①.传入一个数字
如果想传递一个数字，前面需要加上v-bind（就是:）
<child name="pengshao" :age-count="23"></child>
加上v-bind传入的参数可以是变量和js表达式（这里的23就是js表达式）
也可以用一个变量进行动态赋值

②.传入一个布尔值
<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
<blog-post is-published></blog-post>

<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:is-published="false"></blog-post>
也可以用一个变量进行动态赋值

③.传入一个数组
<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
也可以用一个变量进行动态赋值

④.传入一个对象
<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
<blog-post
  v-bind:author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"

></blog-post>
>也可以用一个变量进行动态赋值
```

### 子传父

先在子组件里面去调用父组件的自定义事件  
1.需要在父组件的子组件标签上面添加自定义事件，（自定义事件的事件处理函数写在父组件的 methods 里面）  
2.在子组件里面使用 this.$emit()方法进行调用  
this.$emit()方法可以接受多个参数，第一个参数是父组件里面子组件标签上的自定义事件名称，从第二个参数开始就是子组件要传给父组件的变量（响应式数据），如果变量过多可以采用对象的形式进行传参

```
handleClick() {
这里可以传多个参数，第一个参数是父组件里面子组件上面自定义的事件名称，第二个参数就是子组件要传给父组件的数据，如果数据比较多，可以采用对象的形式传参
                    this.$emit("abc", this.msg);
                }
```

### 依赖注入（父传孙，父传子）

1.依赖（provide 选项），向孙组件传递内容  
穿透式传递  
写法和 data 选项一样，函数返回对象  
它是没有响应式的(vue2)，vue3 有了响应式

```javascript
       provide() {
                return {
                    count: this.count,
                };
        },
```

2.注入(inject 选项)，可以获取父元素传来的内容,使用数组的方式接收

```javascript
            inject: ["count"],
```

## 插槽

插槽（使用 vue 提供的`<slot></slot>`组件）

### 1.普通插槽

插槽的作用：内容分发  
前后都可以插  
插槽不仅可以插入文本，还可以插入元素甚至组件

```javascript
<div id="app">
        <h3>插槽</h3>
        <child>123</child>
</div>
<script src="../../Vue.js"></script>
<script>
        Vue.component('child', {
            template: `
                <div>child组件-<slot></slot></div>
            `,
        })
        new Vue({
            el: '#app',
            data: {}
        });
</script>
```

插槽不仅可以插入文本，还可以插入元素甚至组件

```javascript
<child>
  123
  <span>插槽</span>
  <child2></child2>
</child>;

const Child = {
  template: `
                <div>child组件-<slot></slot></div>
            `,
};
```

### 2.具名插槽

使用`v-solt`指令，简写#，配合 vue 提供的`<template></template>`占位标签
具名插槽的作用是：可以让我们想插哪里就插哪里  
具名插槽使用 v-slot:指令，后面是冒号，冒号后面跟一个自定义的名字  
同时 slot 标签里也要加一个 name 的属性，属性名就是上面的自定义名字  
v-slot:可以简写成#

#### 具名插槽案例 1

```
<maoyan-header>
            <template #title>猫眼电影</template>
            <template #icon>
                <span>#</span>
            </template>
</maoyan-header
<maoyan-header>
     <template #title>印度女孩</template>
</maoyan-header>
const MaoyanHeader = {
            template: `
                <header>
                    <slot name="title"></slot>
                    <slot name="icon"></slot>
                </header>
            `,
        };
```

#### 具名插槽案例 2

```
<child>
         <template #left>
                <span>123</span>
         </template>
         <template #right>
                <span>456</span>
         </template>
      <!-- <span>789</span>
      <span>888</span> -->
下面的写法等同于上面的写法（上面注释的789 888） -->
         <template #default>
                <span>789</span>
                <span>888</span>
         </template>
</child>
const Child = {
            template: `
                <div><slot name="left"></slot>-child组件-<slot name="right"></slot>-<slot></slot></div>
            `,
        }
```

### 3.插槽（编译作用域）

插槽的内容用的是父组件的作用域  
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。  
哪个组件的 template,就用那个组件的作用域

### 4.插槽的后备内容（默认值）

<child></child>
slot 标签中间写的内容会作为插槽的默认内容

```
const Child = {
            template: `
                <div>child组件-<slot>123</slot></div>
            `,
};
```

### 5.作用域插槽

count 默认是父组件的作用域  
作用域插槽就是想在这里使用子组件的作用域

```
<child>
            <template v-slot:default="slotProps">
                <span>{{ slotProps.count }}</span>
                <!-- 解构写法 -->
                <!-- <template v-slot:default="{ count }>
                        <span>{{ count }}</span> -->
            </template>
</child>
const Child = {
            data() {
                return {
                    count: 10,
                }
            },
            template: `
                <div>child组件-<slot :count="count"></slot></div>
            `,
        }
```

## fetch

```javascript
// fetch是一个h5自带的数据请求方式
// 自带封装了promise的
fetch("http://www.pudge.wang:3080/api/rated/list")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
  });
```
