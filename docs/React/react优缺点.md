## 优点：

1. **采用虚拟 dom**，减少了原生开发中的 dom 操作，提高浏览器的渲染性能
2. **函数式编程**，JS 的最大特点就是函数式编程，在 React 中，函数式编程可谓式无处不见  
   函数式编程（通常缩写为 FP）是通过编写纯函数，避免共享状态、可变数据、副作用 来构建软件的过程  
   函数式的代码往往比命令式或面向对象的代码更简洁，更可预测，更容易测试
3. **一切皆组件（组件系统）**：更利于模块化开发，重用代码更容易，可维护性高。
4. **JSX 语法**：为了更加便利的模拟 DOM 结构，我们使用了 JSX 语法，可以让我们在 JS 中编译 DOM 结构
5. **单向数据流**：状态都是可控的，不会相互影响  

6. **跨浏览器兼容**：虚拟 DOM 帮助我们解决了跨浏览器问题，它为我们提供了标准化的 API，甚至在 IE8 中都是没问题的。

## 缺点

1. **内存消耗比较大**  
   state 的状态改变 setState（）**会将新的对象和老的对象进行合并** 
   redux 中的 defaultState 全局状态的改变也是这，新的对象会替换老的对象
2. 不是一个完整的 MVC 框架，只是一个视图层，因此在大型项目中需要引入 react-route-dom，redux-redux，redux-dom 等
3. react 内存消耗大，使用虚拟 dom，要将很大的对象放在浏览器缓存中  
   vue 也是采用虚拟 dom,但是 vue 是可以直接改变原数据的

## 虚拟 DOM

将 html 的片段，转成 js 的对象，并且存在浏览器的内存里面。如果要改变 html，不是直接改，而是去修改 js 对象。等所有的修改都结束了之后，再将 js 对象转回成 html，最终做一次性的渲染。

1. 虚拟 DOM  
   我们以前操作 dom 的方式是通过 document.getElementById()的方式，这样的过程实际上是先去读取 html 的 dom 结构，将结构转换成变量，再进行操作。而 reactjs 定义了一套变量形式的 dom 模型，一切操作和换算直接在变量中，这样减少了操作真实 dom，性能真实相当的高，和主流 MVC 框架有本质的区别，并不和 dom 打交道
2. 组件系统  
   react 最核心的思想是将页面中任何一个区域或者元素都可以看做一个组件 component  
   那么什么是组件呢？  
   组件指的就是同时包含了 html、css、js、image 元素的聚合体  
   使用 react 开发的核心就是将页面拆分成若干个组件，并且 react 一个组件中同时耦合了 css、js、image，这种模式整个颠覆了过去的传统的方式
3. 单向数据流  
   父传子，子组件这能通过 props 接受数据，不可以改变  
   其实 reactjs 的核心内容就是数据绑定，所谓数据绑定指的是只要将一些服务端的数据和前端页面绑定好，开发者只关注实现业务就行了
4. JSX 语法  
   在 vue 中，我们使用 render 函数来构建组件的 dom 结构性能较高，因为省去了查找和编译模板的过程，但是在 render 中利用 createElement 创建结构的时候代码可读性较低，较为复杂，此时可以利用 jsx 语法来在 render 中创建 dom，解决这个问题，但是前提是需要使用工具来编译 jsx
