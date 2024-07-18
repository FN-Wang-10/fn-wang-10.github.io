## 什么是 vue.js



## vue 学习笔记



vue3

```
{
    props: ["xx"],
    components: {
      xxx
    },
    name: "xx",
    mixins: [xx],
    directives: {},
    setup(props, context) {
      // data
      const xx = ref();
      const data = reactive({xx: xx})
      // methods
      const xx = () => {};
      // computed
      const xx = computed(() => { return  });
      // watch
      watch(xx, (val, oldVal) => {}, {});
      // provide
      provide("xx", xx);
      // inject
      inject("xx", xx)
    }
  }
```

移动端适配

- cnpm i postcss-pxtorem -S 用于单位换算

  - 在根目录创建一个.postcssrc.js 文件

    ```js
    module.exports = {
      plugins: {
        "postcss-pxtorem": {
          rootValue: 37.5,
          propList: ["*"],
        },
      },
    };
    ```

- cnpm i amfe-flexible -S 用于设置根字体大小

  - 在 main.js 里面引入 import "amfe-flexible"

Better-scroll 插件

- 官网：https://better-scroll.github.io/docs/zh-CN/
- 原理：通过改变子元素的 transiform 的 transilate 来滚动的
- 要求：
  - 父元素要有明确的宽高
  - 子元素要比父元素大
  - 子元素只能是一个
- 安装：npm install better-scroll --save 完整功能的 better-scroll

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

## 获取组件实例 ref $refs

### 1.获取根（组件）实例

```javascript
可以通过this.$root的方式，在任意组件获取根实例
                console.log(this.$root);
                console.log(this.$root.count);拿到根组件的状态
                this.$root.fn();
可以通过this.$parent获取父组件的实例
                console.log(this.$parent);
                console.log(this.$parent.msg);拿到父组件的状态
```

### 2.父组件获取子组件实例

可以在父组件的子组件标签上面添加 ref 属性,自定义一个名字  
在父组件的 mounted 里面通过 this.$refs.自定义的名字，获取到子组件的实例  
这种方式只能在页面渲染完毕（mounted 里面）才能拿到  
这种方式仅可以获取，不能修改子组件里面的数据

```javascript
<child ref="abc"></child>
```

this.$refs不仅可以用于获取子组件实例，还可以去获取dom元素    
获取dom元素的方式是，在元素上添加ref属性，自定义一个名字    
在父组件的mounted里面通过this.$refs.自定义的名字，获取到这个 dom 元素  
这种方式只能在页面渲染完毕（mounted 里面）才能拿到

```javascript
        <input type="text" ref="ipt">
```

## 其他 （递归组件，模板替换，混入，过度，插件）

### 递归组件

递归组件，自己调用自己的组件  
name 选项允许组件调用自己，递归组件,同时递归要设置出口

```
            name: "Child",
            template: `

                <ul>
                    <li v-for="(item,index) in list" :key="item.index" >{{ item.title }}
                        <child :list="item.children" v-if="item.children"></child>
                    </li>
                </ul>

​            `,
```

### 模板替换

#### 模板替代（行内的 template）

```javascript
<child inline-template>
  <div>child组件-{{ count }}</div>
</child>;
const Child = {
  data() {
    return {
      count: 100,
    };
  },
};
代替template选项;
```

#### x-template (将模板写在 script 标签中)

```javascript
<script type="text/x-template" id="child">
  <div>child组件-{{ count }}</div>
</script>;

const Child = {
  template: "#child",
  data() {
    return {
      count: 100,
    };
  },
};
```

### 混入

混入： 分发可复用功能  
创建混入对象  
跟组件创建的方式是一样，它没有 template 选项  
如果说 key 不同会进行合并，key 相同会替换，以组件自身的 key 值为准  
生命周期是直接合并，不会替换的

```javascript
const myMixin = {
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    fn() {
      console.log("fn");
    },
  },
  mounted() {
    console.log(123);
  },
};
const myMixin2 = {
  data() {
    return {
      num: 200,
    };
  },
};
使用混入对象, 数组的形式接收;
props, inject选项对象是需要加引号的;
mixins选项对象不能加引号的;
const Child = {
  mixins: [myMixin, myMixin2],
  data() {
    return {
      // count: 10,
      msg: 100,
      count: 20, //key相同会替换，以组件自身的key值为准
    };
  },
  template: `
                <div>child组件-{{ count }}-{{ msg }}-{{ num }}</div>
            `,
  mounted() {
    this.fn();
  },
};
new Vue({
  el: "#app",
  data: {
    // count: 10,
  },
  mixins: [myMixin],
  components: {
    Child,
  },
  mounted() {
    this.fn();
  },
});
```

### 过度

1.过度
给需要显示和隐藏的元素或者组件外面加 transition 标签  
需要一个 name 属性

```javascript
<transition name="slide-fade">
  <p v-if="show">hello</p>​{" "}
</transition>
```

2.过度类名  
3.过度模式  
mode 用于动画模式

```javascript
​        <transition name="fade" mode="in-out">
​            <button v-if="show" key="1">on</button>
​            <button v-else key="2">off</button>
​        </transition>
```

​  
​

### 插件

```javascript
<div id="app">
      <p>{{ a }}</p>
    </div>

    <script src="../../Vue.js"></script>
<script>
  const MyPlugin = new Vue({});
  // 开发插件
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      // 逻辑...
      console.log("myGlobalMethod");
    };
    Vue.abc = "123";

    // 2. 添加全局资源
    Vue.directive("my-directive", {
      bind(el, binding, vnode, oldVnode) {
        // 逻辑...
      },
    });

    // 3. 注入组件选项
    Vue.mixin({
      data() {
        return {
          a: 3,
        };
      },
      created: function () {
        // 逻辑...
      },
    });

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log("myMethod");
    };
    Vue.prototype.$b = 4;
  };

  // 使用插件
  Vue.use(MyPlugin);

  new Vue({
    el: "#app",
    data: {},
    mounted() {
      Vue.myGlobalMethod();
      console.log(Vue.abc);
      this.$myMethod();
      console.log(this.$b);
    },
  });
</script>
```

## 数组的更新检测

```
<div id="app">
      <ul>
        <li v-for="(item, index) in arr1" :key="index">{{item}}</li>
      </ul>
      <button @click="handleClick">btn</button>
    </div>

<script src="../../Vue.js"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      arr1: ["zhangsan", "lisi", "wangwu"],
    },
    methods: {
      handleClick() {
        // this.arr1.push("zhaoliu");
        this.arr1 = this.arr1.concat("zhaoliu");  ---------------------看这里
      },
    },
  });
</script>
```

## 响应式失效

```
<div id="app">
        <ul>
            <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
        <p>{{ obj }}</p>
        <button @click="handleClick">点击</button>
    </div>
<script src="../../Vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            list: [1, 2, 3, 4, 5],
            obj: {
                a: 3,
                b: 4,
            },
        },
        methods: {
            handleClick() {
                // this.list.push(6);
                //响应式失效
                // 1. 直接改变数组长度
                // 2. 通过索引去改变数组项
                // 3. 在对象里面挂载新属性

                this.list.length = 3; //响应式失效
                // this.list[2] = 20;//响应式失效
                // this.obj.a = 10;//正常
                this.obj.c = 100; //响应式失效

                // 解决(依靠es5的浅拷贝，将原来的数组的长度变为3，通过扩展运算符展开这个数组，放入一个新数组，重新赋值给这个数组，利用的是浅拷贝)
                //方法1
                this.list = [...this.list];
                // this.list[2]=20;
                // console.log(this.list);
                //方法2
                this.list = [].concat(this.list);
                //方法1
                // this.obj = {...this.obj
                // };
                //方法2
                this.obj = Object.assign({}, this.obj);
            },
        },
    });
</script>
```

## 强制更新 this.$forceUpdate()，this.$set(this.obj, 'c', 100)

```
④ 注意事项（响应式失效）
data: {
                list: [1, 2, 3, 4, 5],
                obj: {
                    a: 3,
                    b: 4,
                },
            },
handleClick() {
                    // this.list.push(6);
                    // 响应式失效
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
}
```

强制更新

### this.$forceUpdate()

```
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

                // 强制更新
                // this.$forceUpdate(); //可以更新，但是尽量少用
                // this.$set(this.obj, 'c', 100);
            },
        },
```

### $set

```
   <div id="app">
      <h3>强制更新</h3>
      <p>{{ list }}</p>
      <p>{{ obj }}</p>
      <button @click="fn">btn</button>
    </div>
<script src="../../Vue.js"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      list: [1, 2, 3],
      obj: {
        a: 3,
        b: 4,
      },
    },
    methods: {
      fn() {
        // this.list.length = 2;
        // this.list[2] = 5;
        // this.obj.c = 5;
        // 强制更新
        // this.$forceUpdate();
        // this.list = [...this.list];
        // this.list = [].concat(this.list);
        // this.obj = { ...this.obj };
        // this.obj = Object.assign({}, this.obj);

        // this.$set(this.obj, "c", 5);
        // this.$set(this.list, 2, 5);
        this.list.splice(2);
      },
    },
  });
</script>
```

### this.$nextTick 异步更新队列

```
<div id="app">
      <p>{{ count }}</p>
      <button @click="fn">btn</button>
    </div>
    <script src="../../Vue.js"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      count: 1,
    },
    methods: {
      fn() {
        // 直接从1变成4
        // 虚拟dom，一次性做渲染，减少dom操作
        // update的生命周期也可以看到这个问题
        // 数据的改变和页面的渲染不是一起发生的
        // this.count++;
        // console.log(this.count);
        // console.log(document.querySelector("p").innerHTML);
        // this.count++;
        // this.count++;

        this.count++;
        // nextTick表示下一次的事件轮询
        // 等待页面渲染完再执行里面的回调函数
        this.$nextTick(() => {
          this.count++;
        });
      },
    },
  });
</script>
```

## 动态组件

### 1. 选项卡切换

（使用 vue 提供的`<component :is="组件名称"></component>`组件）

```html
<div id="app">
  <!-- 这种方法比较蠢 -->
  <!-- <button @click="show=1">按钮1</button>
        <button @click="show=2">按钮2</button>
        <button @click="show=3">按钮3</button>
        <child1 v-if="show===1"></child1>
        <child2 v-if="show===2"></child2>
        <child3 v-if="show===3"></child3> -->
  <hr />

  <button @click="show='child1'">按钮1</button>
  <button @click="show='child2'">按钮2</button>
  <button @click="show='child3'">按钮3</button>
  <!-- vue提供的组件, 需要配合is属性, is里面写的是组件名称  -->
  <!-- <component :is="show"></component> -->
</div>
```

```
<script src="../../Vue.js"></script>
<script>
Vue.component('child1', {
            template: `
                <div>child1组件</div>
            `,
        });
Vue.component('child2', {
            template: `
                <div>child2组件</div>
            `,
        });
Vue.component('child3', {
            template: `
                <div>child3组件</div>
            `,
        });
new Vue({
            el: '#app',
            data: {
                // show: 1,
                show: "child1",
            }
        });
</script>
```

### 2.动态组件扩展（缓存问题）

```
<keep-alive>+<component>组件
vue提供的组件, 需要配合is属性, is里面写的是组件名称
keep-alive是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建
        <keep-alive>
            <component :is="show"></component>
        </keep-alive>

<div id="app">
        <!-- 这种方法比较蠢 -->
        <!-- <button @click="show=1">按钮1</button>
        <button @click="show=2">按钮2</button>
        <button @click="show=3">按钮3</button>
        <child1 v-if="show===1"></child1>
        <child2 v-if="show===2"></child2>
        <child3 v-if="show===3"></child3> -->
            <hr>

    <button @click="show='child1'">按钮1</button>
    <button @click="show='child2'">按钮2</button>
    <button @click="show='child3'">按钮3</button>

    <!-- 动态组件（问题）
    我刚进来时，vue只渲染显示的组件，其他的组件不会渲染
    当我点击某个组件时，它会对这个组件进行渲染，当我离开的时候，它会自动销毁,里面的定时器还在运行
    当我再次点击上一个组件的时候，这个组件又重新渲染，里面的数据又重新加载，又开了一个定时器

    解决
    vue提供了一个<keep-alive></keep-alive alive>组件(keep-alive的意思是保持生机)，也叫缓存组件
    当组件进行切换的时候，不会被销毁和重新创建
        -->

    <!-- 应用（猫眼电影手机端）
    我现在点击一个页面查看页面内容，会有数据请请求，并且我现在把页面往下滚动了
    当我切换到另一个页面时，另一个页面在做数据请求，上一个页面组件会被销毁，再次点击的时候再次创建
    我现在又回到第一个页面，可以不用去数据请求数据（组件不会被销毁重新创建），并且还保持在我上一次查看的地方（滚动的地方），这样可以提高用户体验感
    前提条件是需要使用<keep-alive></keep-alive>缓存组件，当组件进行切换的时候，不会被销毁和重新创建 -->

    vue提供的组件, 需要配合is属性, is里面写的是组件名称
keep-alive是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建
        <keep-alive>
            <component :is="show"></component>
        </keep-alive>
</div>

<script src="../../Vue.js"></script>
<script>
Vue.component('child1', {
            template: `
                <div>child1组件</div>
            `,
            mounted() {
                console.log('child2 mounted');
            },
            beforeDestroy() {
                console.log('child2 destroy');
            }
        });
        Vue.component('child2', {
            template: `
                <div>child2组件</div>
            `,
        });
Vue.component('child3', {
            data() {
                return {
                    count: 0,
                }
            },
            template: `
                <div>child3组件-{{ count }}</div>
            `,
                    mounted() {
            console.log('child3 mounted');
            setInterval(() => {
                this.count++;
            }, 1000);
        },
        beforeDestroy() {
            console.log('child3 destroy');
        }
    });
    new Vue({
            el: '#app',
vue是以组件为单位进行开发的
组件一般按功能进行划分，最少一个功能
根组件里面的data选项对象也可以写成函数返回对象的形式
            data() {
                return {
                    // show: 1,
                    show: "child1",
                }
            }
        });
</script>
```

### 3.动态组件关于定时器的问题

activated 钩子：被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。  
deactivated 钩子：被 keep-alive 缓存的组件失活时调用。该钩子在服务器端渲染期间不被调用。

```
    <button @click="show='child1'">按钮1</button>
    <button @click="show='child2'">按钮2</button>
    <button @click="show='child3'">按钮3</button>

    <!-- 动态组件（问题）
    我刚进来时，vue只渲染显示的组件，其他的组件不会渲染
    当我点击某个组件时，它会对这个组件进行渲染，当我离开的时候，它会自动销毁,里面的定时器还在运行
    当我再次点击上一个组件的时候，这个组件又重新渲染，里面的数据又重新加载，又开了一个定时器

    解决
    vue提供了一个<keep-alive></keep-alive alive>组件(keep-alive的意思是保持生机)，也叫缓存组件
    当组件进行切换的时候，不会被销毁和重新创建
        -->

    <!-- 应用（猫眼电影手机端）
    我现在点击一个页面查看页面内容，会有数据请请求，并且我现在把页面往下滚动了
    当我切换到另一个页面时，另一个页面在做数据请求，上一个页面组件会被销毁，再次点击的时候再次创建
    我现在又回到第一个页面，可以不用去数据请求数据（组件不会被销毁重新创建），并且还保持在我上一次查看的地方（滚动的地方），这样可以提高用户体验感
    前提条件是需要使用<keep-alive></keep-alive>缓存组件，当组件进行切换的时候，不会被销毁和重新创建 -->

        <!-- vue提供的组件, 需要配合is属性, is里面写的是组件名称 -->
    <!-- keep-alive是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建 -->
    <keep-alive>
        <component :is="show"></component>
    </keep-alive>

    <script src="../../Vue.js"></script>

<script>
Vue.component('child1', {
            template: `
                <div>child1组件</div>
            `,
            mounted() {
                console.log('child2 mounted');
            },
            beforeDestroy() {
                console.log('child2 destroy');
            }
        });
        Vue.component('child2', {
            template: `
                <div>child2组件</div>
            `,
        });
        let timer;
Vue.component('child3', {
            data() {
                return {
                    count: 0,
                }
            },
            template: `
                <div>child3组件-{{ count }}</div>
            `,
                    mounted() {
            console.log('child3 mounted');
            // timer = setInterval(() => {
            //     this.count++;
            // }, 1000);
        },
        beforeDestroy() {
            console.log('child3 destroy');
            clearInterval(timer); //在动态组件里这里的定时器并没有被销毁
      },
      解决上面的问题（切换的时候关闭定时器，再次回来的时候开启定时器）
这里需要添加两个生命周期钩子activated和deactivated
activated钩子：被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。
deactivated钩子：被 keep-alive 缓存的组件失活时调用。该钩子在服务器端渲染期间不被调用。
            activated() {
                // console.log('child3 activated');//测试
                timer = setInterval(() => { //激活时开启定时器
                    this.count++;
                }, 1000);
            },
            deactivated() {
                // console.log('child3 deactivated');//测试
                clearInterval(timer); //失活时关闭定时器
            }
});
new Vue({
            el: '#app',
        vue是以组件为单位进行开发的
        组件一般按功能进行划分，最少一个功能
        根组件里面的data选项对象也可以写成函数返回对象的形式
            data() {
                return {
                    // show: 1,
                    show: "child1",
                }
            }
        });
</script>
```

## 路由

### 1.原生实现路由切换

后端路由：通过 url 的跳转，返回不同的资源  
前端路由：通过 url 的不同，显示不同的页面，不同的组件

动态组件：点击每一个时，url 不会改变，刷新后会回到第一个  
哈希路由：url 会改变，刷新时不会回到第一个，还是在现在点击的那个

路由的实现原理：hashChange 事件  
只要 url 上面的哈希值改变了，就会触发 hashChange 事件

点击 a 标签时，a 标签的 url 会改变，url 改变了才会触发 hashChange 事件，hashChange 只会监听 url 的改变，然后把内容渲染到页面

前端路由的原理是通过不同的 url，显示不同的页面或者组件

```
<div id="app">
         <h2>原生实现路由切换</h2>

              <!-- 1.需要有几个按钮，用于改变url -->
     <!-- 加上#的路由叫做hash路由 -->
     <p>
         <a href="#hot">热映</a>|
         <a href="#cinema">影院</a>|
         <a href="#wait">待映</a>
     </p>

     <!-- 2.需要有一个存放内容切换的容器 -->
     <div id="box"></div>
  </div>
  <script>
        //  3.需要有一个路由表
        // 路由表实际上就是一个数组，数组的每一项是一个拥有path和template的对象
        const routes=[
            {
                path:"hot",
                template:"<div>这是热映页面</div>",
            },
            {
                path:"cinema",
                template:"<div>这是影院页面</div>",
            },
            {
                path:"wait",
                template:"<div>这是待映页面</div>",
            }
        ];
            // 4.监听url的改变，采用hashchange事件
    window.addEventListener("hashchange",()=>{
        // console.log("hashchange");
        // console.log(location);
        const { hash }=location;
        const hashStr=hash.slice(1);//去掉前面的#
        routes.forEach(item=>{//便利渲染
            if(item.path===hashStr){
                document.querySelector("#box").innerHTML=item.template;
            }
        })
    })
</script>
```

### 2.用 vue-router 实现切换

```
<div id="app">
    <div id="app">
        <h1>Hello App!</h1>
        <p>
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
              <!-- <router-link>相当于a标签，to属性相当于href属性，实际上是对a标签做了一个封装，比a标签牛一点 -->
          <router-link to="/foo">Go to Foo</router-link>
          <router-link to="/bar">Go to Bar</router-link>
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- 相当于一个容器，把路由匹配到的内容渲染金相和歌容器内 -->
        <router-view></router-view>
      </div>
</div>
<script src="../../Vue.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.5.3/vue-router.min.js"></script>
<script>
    // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
    // 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// 两个局部组件，也可以从外面引入
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由（路由表）
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const route = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例（使用路由表），然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// VueRouter构造函数中，实际上底层自己做了hasfchange事件的监听
const router = new VueRouter({
  routes:route, // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例（创建根实例，并将router实力挂载到根实例上）。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
</script>
```

vue 路由原理  
路由的实现原理：hashchange 事件  
只要 url 上面的哈希值改变了，就会触发 hashchange 事件  
点击 a 标签时，a 标签的 url 会改变，url 改变了才会触发 hashchange 事件，hashchange 只会监听 url 的改变，然后把内容渲染到页面  
前端路由的原理是通过不同的 url，显示不同的页面或者组件

### 3.项目中的路由

```
1.入口文件
① 引入了路由实例
路径直接到文件夹结束，引的是这个文件夹下面的Index.js文件
如果只是省略了文件后缀，会默认先找json->js->vue
import router from './router'
② 使用路由
new Vue({
  router,//相当于router:router
  render: (h) => h(App),
}).$mount("#app");

2.APP.vue根组件
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
  3.router下面的index.js文件
1.引入vue
import Vue from 'vue';
2.引入router
import VueRouter from 'vue-router';
3.插件要使用use方法，意味着vue-router是vue的一个插件
Vue.use(VueRouter);
4.创建一个路由表
const routes=[
	{
	     path: " / ",
	     component:()=>import("../../"),
           	}
	......
  ]
5.创建一个路由实例
const router = new VueRouter({
  routes,//使用路由表
})
6.将路由实力进行暴露
export default router
```

### 4.路由知识点

vue 的路由默认使用排他性路由(只要匹配到一个就不会再匹配了)，react 的路由是包容性路由

```
1.重定向（redirect）
重定向（意思就是，如果我只记住了域名，只输入了域名，他会将你重定向里面的url拼接到域名后面，这样就可以之实现只输入域名尽可以进入到页面了）
也可以做二级重定向
  {
    path:"/",
    redirect:"/hot",
  },
{
   path:"/hot",
   component:()=>import("../views/HotView.vue")，
 },

2.别名（alias）
路由别名(意思就是，我也可以使用别名定义的这个url也可以访问到cinema页面，但是高亮就没有了)
{
  path:"/cinema",
  alias: "/abc",
  component:()=>import("../views/CinemaView.vue"),
},

3.路由嵌套
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


4.动态路由
<router-link to="./detail/25222">详情</router-link>
  /:id表示匹配动态路由参数(可以有多个动态路由参数/:id/:num/:a)
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

5.编程式导航
通过js的方式进行跳转，叫做编程式导航
this.$router指的是整个路由实例（表示当前路由的路由信息，是一个对象，里面包含跟url相关的信息）
想象历史记录是一个数组
① this.$router.push("/wait"); //添加一项，可以后退
等同于
      //   this.$router.push({path:"/wait"});
等同于
      // this.$router.push({name:"wait"});//这样写，需要在路由表队医你给的位置添加name:"wait"
② this.$router.replace("/wait"); // 将原有的替换，后退就直接到了上一个的前面
③ go方法是前进和后退，里面写整数
    this.$router.go(-3);

6.路由懒加载
import命令必须在所有代码的上面
// import Hot from "../views/HotView.vue";
// import Cinema from "../views/CinemaView.vue";
// import Wait from "../views/WaitView.vue";
// 没有添加路由懒加载的时候，当我刚进入页面，还没点击，还没进行路由匹配时，组件中的内容就会被引入出来，造成性能浪费

路由懒加载import函数
import函数可以做文件的异步引用（就是我用到了再去引入这个文件）
添加了import函数之后，对于我们的首页打开速度就会相对更快一些，如果只点击首页的话，就只会加载首页的内容，当我点击别的router-link时，下一个才加载，就是谁使用了再去引入他的文件，按需引入
component:()=>import("../views/CinemaView.vue"),

7.404路由
404页面，一定要写在路由表的最后面
{
  path:"*",
  component:()=>import("../views/NotFound.vue"),
},

8.导航高亮
选中的<router-link>会自带一个router-link-exact-active类名（如果要加导航高亮（类似于hover）就给这个类名添加样式就行了）
使用tag属性，可以改变标签的类型，默认是a标签 如果改成别的标签，就没有高亮效果了，需要在下面的style中也改成对应的标签名
<router-link to="./cinema" tag="li">影院</router-link>

9.路由视图
对于没有名字的路由会渲染在<router-view/>里面
路由视图（一个里面有两个路由）
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

导航守卫
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

2.全局解析守卫
功能和用法是和全局前置守卫是一摸一样的，只是他们的执行时机有一些不同，比全局前置守卫会慢一些执行
router.beforeResolve((to, from, next) => { });

3.全局后置钩子（改变标题）
会稍微慢一些执行
router.afterEach((to) => {
   console.log(to);
   console.log(from);
   通过路由切换去改变页面的标题
       document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
});

4.路由独享的守卫（单个页面的路由鉴权）
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

5.组件内的守卫（看猫眼项目）
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

### 5.路由模式

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

### 6..路由表

```
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

## vuex

```
vuex全局状态管理
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式(全局状态管理工具，也就是管理data，数据，变量)，
vuex的原理：组件通过dispatch调用actions里面的函数（可以是异步的，actions和Backend API后端接口绑定在一起的），actions在通过commit去调用mutatuins里面的函数（mutations和Devtools开发者工具绑定在一起的，快照，只要mutations里面的函数执行了，开发者工具就会产生一个快照），mutations可以改变state里面的数据，数据改变了然后在相对组件进行重新渲染

1.store文件——里面有一个index.js文件
index.js文件
store就是写仓库的数据，仓库的数据就是整个项目全局的数据
state(){}
getters(){}
mutations(){}
actions(){}
modules(){}

2.主入口文件main.js
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

1.state
store就是写仓库的数据，仓库的数据就是整个项目全局的数据
  state: {
    count: 10,
    name: "pengpeng",
    age: 25,
    address: "九堡",
    msg:"hello vuex!"
  },
使用
仓库中的数据是有响应式的
组件使用仓库中的state状态是使用计算属性的方式，（仓库中的数据改变了，组件中计算属性就会改变，并且重新渲染到页面）
① 不使用辅助函数
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
② 使用辅助函数
mapState 辅助函数 用于简化计算属性的写法，会返回一个对象
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



2.getters
getters就是vuex里面的计算属性
具有缓存，用来改变的时候才会重新触发，不会去改变state的原数据
可以接收第一个参数是state
还可以接收第二个参数是getters,说明他还可以依赖其他的getters
getters: {
    reverseMsg(state){
      return state.msg.split("").reverse().join("");
    },
    reverseMsg2(state,getters){
      return getters.reverseMsg+"--你好，世界！";
    }
  },

使用
① 不使用辅助函数
computed: {
     reverseMsg() {
       return this.$store.getters.reverseMsg;
     },
     reverseMsg2() {
       return this.$store.getters.reverseMsg2;
    },
},
② 使用辅助函数
mapGetters是vuex实例里面的一个辅助函数，也会返回一个对象
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




3.mutations
mutations里面是写函数的，mutations是唯一可以去改变state里面数据的地方
mutations是和Devtools开发工具绑定在一起的，开发工具上的快照，就是mutations里面的函数执行的时候去拍的，只要一触发mutations里面的函数，就会在开发工具中产生一个快照
里面的函数可以接受一个state参数
mutations必须是同步函数（开发者工具里面的快照是在mutations函数执行的时候产生的，而不是在数据改变的时候产生的）
可以接受第二个参数，就是组件传来的值（payload）
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


使用
① 不使用辅助函数
用commit方法与调用仓库中的mutations里面的函数
commit方法可以接收两个参数，第一个参数是mutations的函数名称（type）,第二个参数就是传递的参数（payload），如果是传多个参数，可以使用对象的方式进行传参
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

② 使用辅助函数
mapMutations是辅助函数，可以用于简化commit的写法，也会返回一个对象
将仓库中的mutations里面的add和minus函数映射到组件里面的handleClick1和handleClick2函数
import {mapMutations} from "vuex";
export default {
methods: {
    ...mapMutations(["add","minus"]),
    handleClick1(num) {
           this.minus({num});
    },
    handleClick2(){
        this.add();
    }
  },
};


4.actions
这里也是写函数的，但是不能去改变state,这里能做的是去调用mutations里面的函数
这里允许使用异步（Backend API后端接口是和actions绑定在一起的）
actions里面的函数可以接受一个context参数（context是一个对象），context是一个对象，表示上下文，可以从context对象中结构出commit和dispatch方法
还可以接受一个payload（组件中调用该方法时传过来的数据）
如果只用context对象里面的commit方法，也可以进行解构
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

使用
① 不使用辅助函数
使用dispatch()方法,第一个参数就是actions里面的函数名
流程：组件里面使用dispatch方法去调actions里面的函数,然后仓库中的actions去调用mutations里面的函数，mutations去改变state里面的数据
methods: {
    handleClick() {
       actions也可以进行传参
       this.$store.dispatch("addAsync", { a: 2 });         dispatch是调度的意思
    },
  },

② 使用辅助函数
在组件中分发actions
就是从vuex实例对象中解构mapActions这个辅助函数，返回一个对象
将actions里面的addAsync函数映射到组件的this.addAsync里面
methods: {
    ...mapActions(["addAsync"]),
    handleClick() {
         this.addAsync({ a: 2 });
    },
},


5.modules
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


仓库
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
    msg:"hello vuex!"
  },
  // getters就是vuex里面的计算属性
  // 具有缓存，用来改变的时候才会重新触发，，不会去改变state的原数据
  // 可以接收第一个参数是state
  getters: {
    reverseMsg(state){
      return state.msg.split("").reverse().join("");
    },
    // 还可以接收第二个参数是getters,说明他还可以依赖其他的getters
    reverseMsg2(state,getters){
      return getters.reverseMsg+"--你好，世界！";
    }

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

## vue3

```
vue3
vue3兼容vue2的语法
vue ranct都是采用虚拟dom
真正写的html,不会真正输出html,要把它变成一个函数，函数再返回一个js对象，将对象存储在浏览器的内存中
vue3新增
1.diff算法
2.diff算法，同级比较，key的比较
在以上基础上做了
	静态标记
	静态监听
	事件侦听缓存
静态标记
text的标记是1
class的标记是2
style的标记是4
是为了复用，更新时效率的提升
enum是ts中的一种新的数据类型，枚举类型
<<位运算符，是给二进制用的
1<<1——>将1向左移1位——>10——>二进制的2
1<<2——>将1向左移2位——>100——>二进制的4
1<<3——>将1向左移3位——>1000——>二进制的8
vue-cli脚手架
vite也是构建项目，脚手架
npm run build 打包——>生成dist文件，项目上线，将打包的文件放到服务器
vue3已经支持，不需要外面只有一个根元素
会有一个报错，在设置(在线服务设置)中搜eslint-plugin-vue,把下面的对号去掉
vue2——new Vue({ })
vue3——Vue.createApp( xx ).mount(#APP)
3.vue3中所有的东西都是要从vue中解构出来的
没有new Vue()对象了
4.按键修饰符只有.enter,没有.13了
依赖注入provide&inject（父传子）
5.vue2中依赖注入是没有响应式的,vue3中，依赖注入有响应式
6.vue3中过滤器删除了farmat filters
7.vue3中底层源码使用了ts进行了 重写
项目中
文本格式化有时会报错，将lintOnSave:false加在vue.config.js文件中
src外的文件改动了，需要重启项目
路由中BeforeRouterEnter中取不到this
setup中也取不到this
vue3新增setup选项，是一个函数
setup是组合api,data,methods是选项api

vue3 的组合 api 的语法
{
vue3中没有el选项了
props: ["xx"], ————父传子
components: {————注册组件
xxx
},
name: "xx",————用于递归组件
mixins: [xx],————引入混入对象
directives: {},————定义局部的自定义组件
setup(props, context) {context里面有emit子组件调用父组件事件，可以解构，props不可以解构
// data————变量
const xx = ref();
const data = reactive({xx: xx})
一个变量用ref,多个变量使用reactive
reactive也是一个函数,调用的时候，参数是一个对象，对象里面写变量
const data = reactive({
      count: 3,
      msg: "hello",
      num: 10,
    });
// methods————函数
const xx = () => {};
// computed————计算属性
const xx = computed(() => { return  });
// watch————侦听属性
watch(xx, (val, oldVal) => {}, {});   监听的变量，回调函数（新值，旧值），对象（深度监听，经停数组，对象）
// provide————依赖（父传子）跨组件传参
provide("xx", xx);
// inject————注入（有响应式）
inject("xx", xx)
}
}



main.js入口文件
import { createApp } from "vue";
import App from "./12-vuex.vue";

import router from "./router";// 引入路由
import store from "./store";// 引入仓库

createApp(App).use(router).use(store).mount("#app");//使用路由和仓库

<template></template>
<script>
export default {
};
</script>
<style lang="less"></style>
  <!-- vue3中不需要唯一的根元素 -->
  <!-- vue3的写法是完全兼容vue2的 -->
  <!-- 依赖注入可以使用了，有响应式 -->
  <!-- 按键修饰符不能用.13了 -->
  <!-- 过滤器删除了 -->


setup
1.setup
01.setup组件选项
setup就是组合api(composition Api)的入口
setup同时也是组件的生命周期，这个生命周期是最早执行的
setup里面是取不到this的（路由中的BeforeRouterEnter也是取不到this的）
setup里面定义的内容，想在上面模板中使用，需要return
setup会先执行，它会将里面的代码翻译成下面的样子，相当于我们执行了下面的代码
    // data(){
    //     return {
    //         count:5
    //     }
    // },
    // methods:{
    //     add(){
    //         this.count++;
    //     }
    // }

2.带ref的响应式变量（在setup里写）
如果一个变量需要有响应式，就需要用到ref（ref是一个函数，执行之后会指向一个内存，里面可以接收一个参数）在setup里面调用
import {ref} from "vue";
const count=ref(5);
使用了ref之后的count是一个对象（复杂类型），并且下面有一个value属性是5
count.value可以拿到count的值
事件处理函数也是写在setup里面的，同样需要return

import {ref} from "vue";
export default {
setup(){
        console.log(123);
        console.log(this);//undefined setup里面是取不到this的

        const count=ref(5);
        const add=()=>{
            // count++;//不行的
            // 使用了ref之后，count就是一个对象，里面有一个value属性，就是5
            // console.log(count);
            count.value++;

        };

        // setup里面定义的内容，想在上面模板中使用，需要return
        return {
            count,
            add,
        };

},
    // setup会先执行，它会将里面的代码翻译成下面的样子，相当于我们执行了下面的代码
    // data(){
    //     return {
    //         count:5
    //     }
    // },
    // methods:{
    //     add(){
    //         this.count++;
    //     }
    // }
}

todolist案例
<script>
import { ref } from "vue";
export default {
  setup() {
    const [list, remove] = removeModule();// 解构
    const [textValue, add] = addModule(list);// 解构
    // const textValue = ref("");
// const add = () => {
//   list.value.push({
//     id: new Date().getTime(),
//     name: textValue.value,
//   });
//   textValue.value = "";
// };

// const list = ref([
//   {
//     id: 1,
//     name: "zhangsan",
//   },
//   {
//     id: 2,
//     name: "lisi",
//   },
// ]);
// const remove = (id) => {
//   list.value = list.value.filter((item) => item.id !== id);
// };

return {
  textValue,
  list,
  add,
  remove,
};
  },
};

// 删除功能
const removeModule = () => {
  const list = ref([
    {
      id: 1,
      name: "zhangsan",
    },
    {
      id: 2,
      name: "lisi",
    },
  ]);
  const remove = (id) => {
    list.value = list.value.filter((item) => item.id !== id);
  };
  // 将里面的两个东西返回
  return [list, remove];
};
// 添加功能
const addModule = (list) => {
  const textValue = ref("");
  const add = () => {
    list.value.push({
      id: new Date().getTime(),
      name: textValue.value,
    });
    textValue.value = "";
  };
  // 将里面的两个东西返回
  return [textValue, add];
};
</script>

3.reactive也是用来定义响应式数据（定义多个响应式数据）
reactive可以用来一次性定义多个变量
定义一个变量用ref,多个变量使用reactive
reactive也是一个函数,调用的时候，参数是一个对象，对象里面写变量
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      count: 3,
      msg: "hello",
      num: 10,
    });
    const fn=()=>{
      data.count++;
    }
    return {
        data,
        fn,
    }
  },

在setup内注册生命周期钩子（在setup里写）
vue3中所有的生命周期都需要从vue3中解构
onMounted是一个生命周期，它就是一个函数可以直接执行，这些函数接受一个回调，当钩子被组件调用时，该回调将被执行。
vue3中 created和BeforeCreated 这两个生命周期不存在了
可以直接写在setup里面，就可以表示创建阶段
因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。

同一个生命周期可以写多个
比如说我现在有三个功能，每一个功能可能都有自己的挂载完的时候要做的事情
调用多次就可以分开写在不同的功能里面

import { onMounted, onBeforeUnmount } from "vue";
export default {
setup() {
    // console.log("created");
    onMounted(() => {
  console.log("onMounted");
});
onMounted(() => {
  console.log("onMounted2");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
  },
};
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted

5.watch响应式更改（监听属性）（在setup里写）
watch现在也是一个函数，也是直接调用
watch也可以多次调用
可以接收三个参数
1.我们要监听的值
2.回调函数（可以有两个参数val,oldVal）
3.描述对象，deep immediate
import {ref,watch} from "vue";
export default {
    setup(){
        const count=ref(100);
        const fn=()=>{
            count.value++;
        };
        watch(count,(val,oldVal)=>{
            console.log(val);
            console.log(oldVal);
            console.log(123);
        },
        {
            // 深度的监听，可以去监听对象和数组
            deep:true,
            // 进入页面之后先做一次监听
            immediate:true,
        });
        return {
            count,
            fn
        }
    }
}

独立的computed计算属性（在setup里写）
计算属性computed也是一个函数，也需要从vue里面解构，也可以调用多次
调用computed函数，里面是一个回调函数，需要有返回值
import {ref,computed} from "vue";
export default {
    setup(){
        const count=ref(10);
        const fn=()=>{
            count.value++;
        };
        const doubleCount=computed(()=>{//调用computed，里面是一个回调函数，需要有返回值
            return count.value*2;
        })
        const arr=ref([1,2,3,4,5,6]);
        const addArr=computed(()=>arr.value.filter(item=>item%2));//调用computed，里面是一个回调函数，需要有返回值
        return {
            count,
            fn,
            doubleCount,
            addArr
        }
    }
}

props，$emit,provide，inject组件传参
2.传参
父传子（在父组件的子组件中添加自定义属性，子组件用prps选项接收）
子传父（在父组件的子组件中添加自定义事件，子组件在setup里面通过context.emit调用）

01.setup参数（可以接收两个参数props和context）
components和props选项是不能写到setup里面的（components和props选项需要和setup同级）
setup里面是不能拿到data,computed,methods,watch,refs等选项
setup的执行时机比较早，setup里面不能使用this，没有参数可以接收这些选项
如果使用了setup,就尽量不要使用传统的选项api了

setup（props，context）{}
props
在setup里面如果想要使用props的值，由于setup里面没有this,所以setup需要接受第一个参数props
props是不能被解构的，因为 props 是响应式的，你不能使用 ES6 解构，它会消除 prop 的响应性。
如果真的需要解构，需要在setup里面，使用toRefs（）方法进行解构
props:{     props是父传子，子用props接收
        msg:String,
    },
setup（props）{
 const {msg}=toRefs(props)
}

context
setup还可以接受第二个参数context是一个对象，对象里面有attrs,emit,expose,slots
第二个参数因为是普通对象，所以可以直接解构
emit子组件调用父组件事件
emit（“fn”）


父组件
import Son from "./07-son.vue";
export default {
    setup(){
        const fn=()=>{
            console.log("father");
        };
        return {
            fn,
        }
    },
    components:{
        Son,
    }
}


子组件
import { ref, toRefs, onMounted } from "vue";
export default {
    props:{
        msg:String,
    },
    setup(props,{emit}){
        const {msg}=toRefs(props);
        // console.log(context);   //context是一个对象
         onMounted(()=>{
        setTimeout(()=>{
            emit("fn");     //emit子组件调用父组件事件
        },2000)
    })
    const msg2=ref(msg);
    const fn=()=>{
        console.log(msg)
    }
    return {
        msg,
        msg2,
        fn,
    }
}
}

02.provide&inject依赖注入
依赖provide注入inject是用来跨组件传参的
provide和inject调用的时候也是写在setup函数里面的

1.vue2和vue3中依赖注入的区别
vue2中的provide语法和data一样，是对象，inject语法和props一样，数组和对象都可以
vue3中provide语法是函数，调用时provide有两个参数，分别是key和value，inject语法也是函数，调用是有两个参数，第一个是父组件传过来的key，第二个是默认值（只有当父组件中没写provide时，默认值才会生效）
vue2中的依赖注入是没有响应式的，vue3中的依赖注入是由响应式的（前提条件是，父组件传过来的值本身是具有响应式的数据，也就是使用ref或者reactive定义的变量）

vue2
依赖注入（父传孙，父传子）
1.依赖（provide选项），向孙组件传递内容
穿透式传递
写法和data选项一样，函数返回对象
它是没有响应式的(vue2)，vue3有了响应式
       provide() {
                return {
                    count: this.count,
                };
        },
2.注入(inject选项)，可以获取父元素传来的内容,使用数组的方式接收
            inject: ["count"],
vue3
2.provide
provide也是一个函数，需要从vue中解构，使用时需要调用
import {provide,ref} from "vue";
provide("count",count);

3.inject
inject也是一个函数，需要从vue中结构，用的时候需要调用
import { inject } from "vue";
inject其实有两个参数，第一个参数是父组件传进来的key
第二个参数是默认值（只有当父组件中没写provide时，默认值才会生效）
const count = inject("count");
const count = inject("count",100);

8.路由
3.路由vue-router
import {createRouter,createWebHashHistory} from "vue-router";
创建路由表
const routes=[
    // 重定向
    {
        path:"/",
        redirect:"/home",
    },
    {
        path:"/home",
        component:()=>import("../views/Home.vue"),
    },
    // 动态路由
    {
        path:"/about/:id",
        component:()=>import("../views/About.vue"),
    },
]
创建路由实例
const router = createRouter({
    // 4内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })
export default router;

9.vuex
4.仓库vuex
创建仓库
import {createStore} from "vuex";//解构
// 创建仓库
const store=createStore({
    state:{
        count:100,
    },
    getters:{},
    mutations:{
        addCount(state){
            state.count++;
        }
    },
    actions:{},
    modules:{},
});
export default store;//暴露仓库




使用仓库
useStore是一个函数，执行时返回一个仓库实例
useStore调用时也要写顶层（在setup里面的第一层）
setup里面没法使用辅助函数

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

```

##
