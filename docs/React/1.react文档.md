## MVC 和 MVVM 的区别

- MVC 和 MVVM 都是常见的软件架构思想(概念从后端来的)
- MVC 是由 Model(数据层)、View(视图层)、Controller(控制层) 三部分组成
- MVC 的通信方式` view -> controller -> model -> view`
- MVVM 是由 Model(数据层)、View(视图层)、ViewModel(视图模型层)三部分组成
- MVVM 的通信方法 `view <-> viewModel -><- model`

## JSX

JSX 的全称是 Javascript and XML，React 发明了 JSX，它是一种可以在 JS 中编写 XML 的语言。
react 中 jsx 语法会通过 babel 转换成 js 对象，

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const vDom = <h1>Hello, World!</h1>;
ReactDOM.render(vDom, document.getElementById('root'));

const vDom = React.createElement(
  'h1'，
  { className: 'hClass', id: 'hId' },
  'hello world'
)
```

JSX 通过 babel 的方式转化成 React.createElement 执行，返回值是一个对象，也就是虚拟 DOM

## 组件

```javascript
1.函数式组件
    const Index=()=>{
        return <></>
    }

2.类组件
    class Index extends React.Component {
        constructor(props){
            super(props)
            this.state={}
        }
		componentDidMount(){}
    }

只能有一个根元素
<>/Fragment占位标签
```

## 添加样式

### 1.外部引入

`class——className` `for——htmlFor`

### 2.添加行内样式

`style={{ color:"red", fontSize:30, lineHeight:"30px"}}`

### 3.classNames 包

不同情况添加不同的样式（从 npm 中查看这个包，需要安装）
使用三目也可以完成这个效果

```javascript
 // 引入classnames包，用于处理不同情况添加不同的样式
    ① import classNames from 'classnames/bind';
    // 引入css的时候，可以添加一个变量名
    ② import styles from "./05.classnames.css";
    -
    执行bind方法，返回一个cx函数
    ③ let cx = classNames.bind(styles);
    render(){
    ④        let className = cx({
                // key和value表示的是类名和表达式（变量）
                red:this.state.show,
                blue:!this.state.show,
                big:true,
              });
            return (
                <>
                    <h2>classnames包,不同的条件添加不同的样式</h2>
                    {/* <p className={this.state.show}>hello react!</p> */}
                    <p className={className}>hello react!</p>
                </>
    )
    }
```

### 4.styled-components 包

在 js 中添加 css（需要安装）

```javascript
 ① import styled from 'styled-components';
    -
    定义的是组件, .span表示会生成一个span标签
    模板字符串写标准的css样式
    可以复用，也可以传递参数
    还可以传参（父传子）
    安装vscode-styled-components插件，这里写css就可以有代码提示了
    ② const Hello=styled.span`
    font-size:30px;
    color:${(props)=>props.color};  这两种写法都可以
    ${(props)=>({color:props.color, fontWeight:props.weight})};
    border: 1px solid #000;
    `
    -
    render(){
            return (
                <>
                    <h2>styled-components</h2>
                    <Hello color="red">hello react!</Hello>
                    <Hello color="green" weight={900}>hello2 react!</Hello>
                </>
            )
    }
```

## props

父传子，自定义属性  
子传父，自定义事件  
`<Component title={title} onCancel={this.oncancel}/>`  
`this.props.title `  
`this.props.onCancel`  
`props.title`  
`props.onCancel`

## propsTypes（props 类型）

```javascript
import PropTypes from 'prop-types';

import { string, number, oneOf } from "prop-types";
static propTypes={ }
挂载 组件名.propTypes={ }
函数组件，只能挂载


import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为以下 JS 原生类型
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、子元素或数组）。
  optionalNode: PropTypes.node,

  // 一个 React 元素
  optionalElement: PropTypes.element,

  // 你也可以声明属性为某个类的实例，这里使用 JS 的
  // instanceof 操作符实现。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你也可以限制你的属性值是某个特定值之一
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 限制它为列举类型之一的对象
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 一个指定元素类型的数组
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 一个指定类型的对象
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 一个指定属性及其类型的对象
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 你也可以在任何 PropTypes 属性后面加上 `isRequired`
  // 后缀，这样如果这个属性父组件没有提供时，会打印警告信息
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的数据
  requiredAny: PropTypes.any.isRequired,

  // 你也可以指定一个自定义验证器。它应该在验证失败时返回
  // 一个 Error 对象而不是 `console.warn` 或抛出异常。
  // 不过在 `oneOfType` 中它不起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 不过你可以提供一个自定义的 `arrayOf` 或 `objectOf`
  // 验证器，它应该在验证失败时返回一个 Error 对象。 它被用
  // 于验证数组或对象的每个值。验证器前两个参数的第一个是数组
  // 或对象本身，第二个是它们对应的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};

```

参考：https://xiangwan.gitbooks.io/react-doc-cn/content/typechecking-with-proptypes.html

## defaultProps (props 默认值)

`static defaultProps={  }`  
挂载 `组件名.defaultProps={ }`  
函数组件，只能挂载

## 插槽

```javascript
1.插槽
class: this.props.children
fn: props.children

2.具名插槽
class: this.props.children.xxx
fn: props.children.xxx
对象的形式
{{
    icon:<span>123</span>,
    text:<span>456</span>,
}}
```

## state 渲染

只有类组件可以定义自己的状态

1. 使用构造函数的构造器定义

```jsx
constructor (){
    super()
    this.state={  }
}
```

2. 字面量声明  
   `state={ }`

- 渲染————————{}
- 属性————————title={}
- 条件渲染————————(1.使用三目 2.使用短路逻辑)
- 循环渲染————————使用 map 遍历

修改数组

```jsx
list：prevState.list.push("lisi"),错误的
list:   prevState.list.concat("list")
list:   [...prevState.list,"lisi"]
```

复杂类型地址没有改变  
`this.state.list.push("zhaoliu");`  
为了让响应式生效  
`this.setState({});`

this.setState 修改 state  
setState({ },()=>{ })  
setState( (prevState)=>{ } , ()=>{ } )  
依赖前一次的值使用函数，不依赖前一次的值使用对象

setState 是异步的  
**在 react17 版本之前,在合成事件和生命周期中是异步的，在定时器和原生 js 中是同步的**  
**在 react18 版本之后全部都是异步的**

```jsx
useState;
const [num, setNum] = useState(1);
setNum(2);
setNum((n) => n + 1);
```

```javascript
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(组件, document.getElementById("root"));
```

## 受控组件和非受控组件

### 1. 受控组件

```javascript
    handleChange(e)
       this.setState({
          textValue:e.target.value
    })

    <Input value={this.state.textValue} onChange={this.handleChange.bind(this)} />
```

### 2.非受控组件

从 react 中解构 createRef 函数

```jsx
constructor(){
   super()
   this.ipt=createRef()
}
ipt=createRef()
<imput  ref={this.ipt} defaultValue="abc"/>
```

非受控组件的默认值要用 defaultValue  
input 的值 ———— this.ipt.current.files[0] 文件信息  
非受控组件就是交由 ref 去控制表单元素  
文件上传的时候使用非受控组件  
文件上传的内容是只读的，所以只能使用非受控组件  
非受控组件的值不能是 null 或者 undefined  
受控组件可以做到精细化的操作

## 合成事件

### 事件解决 this 指向

1. 内联的使用 this.xxx.bind(this),不推荐，会产生一个新函数（在内存中），占用内存
2. 在 constructor 中写 this.xxx=this.xxx.bind(this)，不会增加内存，不推荐，有冗余
3. 使用箭头函数，推荐使用，因为箭头函数的 this 指向父级  
   `handleClick=()=>{  }`

### 事件传参

1. 使用内联的 bind 方式 this.xxx.bind(this,2)不推荐，增加内存，bind 不仅可以改变 this 指向，bind 会产生一个新函数，bind 函数是不会立马执行的，并且会将第二个参数变成新新函数的第一个参数
2. 使用内联的箭头函数，不推荐，增加内存。里层自执行，外层套一层
   (e)=>this.xxx(3,e)
3. 柯里化函数，就是闭包，一个函数返回另一个函数，外层函数已经被执行了，点击的时候调用里层函数，推荐，不会增加内存

```jsx
this.handleClick(2);
handleClick = (n) => () => {};
```

### 事件对象

柯里化函数里的事件对象

```jsx
<button onClick={this.handleClick(2)}>点击</button>;
handleClick = (num) => (e) => {
  this.setState((prevState) => {
    console.log(e);
    return {
      num: prevState.num + num,
    };
  });
};
```

内联的使用箭头函数的事件对象

```jsx
<button onClick={(e) => this.handleClick(2, e)}>点击</button>;
handleClick = (num, e) => {
  console.log(e);
  this.setState(
    (prevState) => {
      return {
        count: prevState.count + num,
      };
    },
    () => {
      console.log(this.state.count);
    }
  );
};
```

**事件对象是写在我点击的时候执行的那个函数里面，（不是放在执行好的函数里面）**

## 生命周期

### 16.3 版本之前

父子组件的 render 和 componentDidMount 的执行顺序  
父 render -> 子 render -> 子 componentDidMount -> 父 componentDidMount  
父组件只要 render 了，子组件一定也会 render  
在子组件添加 PureComponent 组件，如果父组件没变，子组件也不会变，相当于 vue 中的 v-once 指令，组件只会被渲染一次

#### 初始化

**constructor**  
 constructor 是当类被实例化的时候，就会自动执行的，并且是最先执行的  
 constructor 是可以接收一个参数是 props 的  
 props 的值是不可以改变的，有的时候真想改变，constructor 可以接受一个参数是 props，可以作为 state 的初始值，就可以改变了（初始化 props 的值，就是把 props 的值拿下来当作 state 里的数据的初始值）  
 constructor 里面可以定义 state，定义 createRef,还有事件处理函数的 bind(this)

#### 挂载阶段

**1.UNSAFE_componentWillMount（删除）**
在这里是不能请求数据的  
 因为有 fiber 算法，可能会使这个数据请求执行多次  
 不能请求数据的原因：Fiber 算法的原理是可以将页面渲染之前的大任务分成一个一个的小任务，在这里做数据请求，如果这个数据很复杂，他把大任务分成小任务的过程中有可能正好分到数据请求这里，如果正好分到这里，这个数据请求有可能会执行两次，如果说执行两次，对我们的性能消耗就比较大，Fiber 算法是在 16 版本推出的，发现这个生命周期连数据请求都不能做了，就在 16.3 版本把这个生命周期删掉了  
 Fiber 算法是在组件开始更新到更新结束这个过程中

**2.render**  
render 一定要返回一个 jsx  
 render 不能做数据请求（会无限执行，死循环），fiber 算法的原因, render 不仅仅是挂载的时候执行，更新的时候还会执行  
当我第一次在这做数据请求的时候，数据就更新了，数据一旦更新，又走 render，又请求，又更新，就死循环了  
可以在 render 里面做解构，只能在 render 里面做解构（类组件）

**3.componentDidMount**
这里面就什么都能做了(可以请求数据，加定时器等)  
 在页面加载完毕，请求数据，然后改变原始数据，又能触发 render(更新阶段)
这里和 Fiber 算法无关，Fiber 算法是在组件开始更新到更新结束这个过程中，把大的任务分成若干个小任务，componentDidMount 生命周期是页面已经加载结束执行的，这时 Fiber 算法也已经结束了

#### state 的更新

**1. shouldComponentUpdate（nextProps,nextState）**  
 两个参数 nextProps,nextState，分别表示新的 props 和新的 state
（就是更新后的 props 和 state）  
`return prevState.count !== this.state.count `  
vue 中原数据的 10 再次改变成 10，是不会更新渲染的（这是 vue 自己做的比较）  
 react 中需要我们自己判断是否能更新  
PureComponent 组件可以替换 shouldComponentUpdate,自动做监听（复杂类型也可以），比较牛逼

**2. UNSAFE_componentWillUpdate（删除）**

**3. render**

重新渲染，不用写，它会重新执行前面的 render（）函数

**4. componentDidUpdate（prevProps,prevState）**  
可以拿到更新后的数据  
不要在这里去更改数据，如果更改，可能会造成死循环

#### props 的更新（子组件）

**1.UNSAFE_componentWillReceiveProps 组件将要接受 props （删除）**   
1. 组件初次渲染时不会执行 componentWillReceiveProps；  
2. 当 props 发生变化时执行 componentWillReceiveProps；   
3. 在这个函数里面，旧的属性仍可以通过 this.props 来获取；  
4. 此函数可以作为 react 在 prop 传入之后， render() 渲染之前更新 state 的机会。即可以根据属性的变化，通过调用 this.setState()来更新你的组件状态，在该函数中调用 this.setState() 将不会引起第二次渲染。   
5. 也可在此函数内根据需要调用自己的自定义函数，来对 prop 的改变做出一些响应。
注意：
当父组件向子组件传递引用类型（或复合类型，比如对象、数组等）的属性时，要注意打印的 this.props 和 nextProps 的内容是一致的，因为引用类型在内存中只有一份，传值时是浅拷贝

**2.shouldComponentUpdate**
`return prevProps.count !== this.props.count`  
`PureComponent 组件`

**3. componentWillUpdata**

**4. render**

**5. componentDidUpdata**

#### 卸载阶段

**componentWillUnmount**  
关闭定时器，关闭 websocket，解除 js 的事件监听，卸载第三方插件
地图，echarts  
路由在切换的时候组件会卸载

### 16.8 版本之后的

删 3 增 2  
componentWillMount  
componentWillUpdata  
componentWillReceiveProps

#### **1.getDerivedStateFromProps 根据 props 的值去生成一个新的 state**

里面可以接受两个参数 nextProps,nextState  
 前面必须要使用 static，组件必须要有 state  
 这个生命周期必须返回一个对象或者 null

#### **2.getSnapshotBeforeUpdata 在更新之前去获取一个快照（快照就是一条记录）**

这个生命周期必须和 componentDidUpdate 一起配合使用  
 这个生命周期必须去返回一个值或者 null  
 getSnapshotBeforeUpdate 返回的值可以给 componentDidUpdate 的第三个参数 snapshot（快照）使用  
 这个生命周期有两个参数 prevProps,prevState  
 这个生命周期只有在 ui 处理（涉及到一些 css 样式相关的东西才用到）的时候会用到  
 例如：下拉加载的时候，要获取一个元素的高度，在 getSnapshotBeforeUpdate 里面获取元素高度，将获取到的元素高度传给 componentDidUpdate 使用

该周期函数在 render 后执行，执行之时 DOM 元素还没有被更新  
该方法返回的一个 Snapshot 值，作为 componentDidUpdate 第三个参数传入

```jsx
    getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('#enter getSnapshotBeforeUpdate');
            return 'foo';
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('#enter componentDidUpdate snapshot = ', snapshot);
        }
```

此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些 UI 视觉上的状态

**创建阶段**  
 constructor  
 getDerivedStateFromProps  
 render  
 componentDidMount  
**更新阶段**  
 getDerivedStateFromProps  
 shouldComponentUpdate  
 render  
 getSnapshotBeforeUpdate  
 componentDidUpdate  
**卸载阶段**  
 componentWillUnmount

参考：https://vue3js.cn/interview/React/life%20cycle.html#shouldcomponentupdate

## context 组件通信（三种方式）

从 react 中解构 createContext 函数，执行这个函数会返回一个 context 对象,从 context 中可以解构出两个组件，Provider,Consumer  
`const [Provider,Consumer]=context`
Provider 是加在父组件的最外层，有一个 value 属性，一般为对象 `value={{  }}  `
Consumer 是在子组件或者孙组件中使用,Consumer 里面要写一个函数，函数返回一个 jsx  
`<Consumer>{(value)=><span>value.xxx</span>}</Consumer>`

1. React.createContext 提供的 Provider 和 Consumer
2. 函数组件：React.createContext 提供的 Provider 和 useContext 钩子
3. Class 组件：React.createContext 提供的 Provider 和 class 的 contextType 属性

### 1.React.createContext 提供的 Provider 和 Consumer

```jsx
   import React, { createContext } from "react";
   const content=createContext()
   const [Provider,Consumer]=content
   父组件
   <Provider value={{ }}>子孙组件 </ Provider>
   子孙组件
   <Consumer>
       {
           (value)=>{
               return <>{value}</>
           }
       }
   </ Consumer>
```

### 2.函数组件：React.createContext 提供的 Provider 和 useContext 钩子

    useContext主要是用于简化context下面的Consumer的接收的
    只是简化接收，传递Provider还是不变的
    使用useContext,createContext还是必须要有的
    useContext函数需要接受context对象作为参数，并且可以返回出context对象里面传过来的value属性（value是一个对象）
    useContext用的也不多，如果是一组传参的话直接就用context了，有的时候跨组件传参用全局状态管理（redux）了

```jsx
const value = useContext(context1);

// 直接解构;
const { name } = useContext(context1);

import React, { useContext } from "react";
import MyContext from "./context";
const FnC = () => {
  const context = useContext(MyContext);
  return <div>第二种使用Context方式获取的值：{JSON.stringify(context)}</div>;
};
export default FnC;
```

### 3.Class 组件：React.createContext 提供的 Provider 和 class 的 contextType 属性

```jsx
import React, { Component } from "react";
import context from "./context";
class ClassC extends Component {
  static contextType = context;
  render() {
    const value = this.context;
    return <div>第三种使用Context方式获取的值：{JSON.stringify(value)}</div>;
  }
}
// ClassC.contextType = context; //此处与写static关键字作用一致
export default ClassC;
```

    挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
    使用static关键字添加静态属性，和直接在class添加属性效果一致,最终都会添加到类上，而不是类的实例上

参考：https://juejin.cn/post/6924506511511126029

## hoc 高阶组件

**高阶组件本质就是一个函数，这个函数接受一个组件作为参数，同时返回一个组件**

1. **高阶组件的作用是为了复用，统一增强组件的功能**
2. **添加统一的 html**
3. **添加公共的属性**  
   **高阶组件一般使用 with 开头**
4. **高阶组件会让组件的层级变深**  
   **withRouter connect()函数会返回一个高阶组件 memo**

创建一个高阶函数，调用这个函数，会生成一个组件，将 App 组件作为参数传递给这个高阶函数（就相当于，在 App 组件外面又嵌套了一层组件，）  
注意：现在的 App 组件是拿不到根组件传过来的数据的（就是 props）,因为现在的 App 组件相当于就是子孙组件，而根组件是祖先组件，所以是不能拿到根组件的数据的
解决办法：在高阶函数返回的 jsx 里面的传入的组件添加`{...this.props}`,这样就可以将接收到的 props，原封不动的传给子组件了

```jsx
import {Component} from 'react'
const withHoc = (Comp) => {
  return class extends Component {
    render() {
      console.log(this.props);
      return (
        <>
                   {" "}
          {/* {...this.props}为了将接受到的属性，原封不动地传给子组件 */}
                    <Comp count="10" {...this.props} />          <footer>
            杭州优行 ©2020-2022
          </footer>       {" "}
        </>
      );
    }
  };
};
// 高阶函数会生成一个新的组件
const App2 = withHoc(App);
export default App2;
// 高阶函数里面可以添加html,它会将传进来的组件和添加的html放在一个组件
// 高阶组件添加装饰器
```

## portal

`import {createPortal} from "react-dom";`
createPortal 是一个函数，用于将一个组件放到项目的任意位置（子组件本来是在父组件里的，使用此方法可以将子组件放到父组件外面）  
createPortal 方法是从 react-dom 中解构的  
createPortal 方法可以接受两个参数  
第一个是组件  
第二个是需要挂载的容器（可以使用原生 js 的获取 dom 的方法）  
一般只有对话框，悬浮框，和小提示会使用 portal，都是要以窗口为参照进行定位的

`{createPortal(<Child />,document.querySelector("body"))}`  
portal 可以让我们的元素在别处渲染，但是冒泡的机制还是原来的位置  
**封装 Model 对话框**

## lazy 和 Suspense 组件懒加载

React.lazy 定义  
React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）。  
什么意思呢？其实就是懒加载。其原理就是利用 es6 import()函数。这个 import 不是 import 命令。同样是引入模块，import 命令是同步引入模块，而 import()函数动态引入。  
当 Webpack 解析到该语法时，它会自动地开始进行代码分割(Code Splitting)，分割成一个文件，当使用到这个文件的时候会这段代码才会被异步加载。

都是从 react 中解构的  
lazy 是一个函数  
Suspense 是一个组件  
`import Child from "./Child";`之前是通过 import 命令的方式引入  
组件懒加载需要用到 import()函数去做动态引入组件  
`const Child=lazy(()=>import("./Child"));`  
lazy 函数要和 Suspense 组件一起使用  
Suspense 组件需要添加一个 fallback 属性，里面引入组件（也可以直接写 jsx），当网速比较慢的时候，组件还没有加载进来时，暂时的显示（就是等待加载中）

```jsx
<Suspense fallback={<Loading />}>      {this.state.show && <Child />}</Suspense>
```

```jsx
// lazy和Suspense路由懒加载
const Home = lazy(() => import("./Home"));
const Share = lazy(() => import("./Share"));
<Switch>
  <Route path="/home">
    <Suspense fallback={<div>loading...</div>}>
      <Home />
    </Suspense>
  </Route>
  <Route path="/share">
    <Suspense fallback={<div>loading...</div>}>
      <Share />
    </Suspense>
  </Route>
</Switch>;
// 可以将Suspense套在外面，就是switch里面，比较方便
```

## redux

MVC 的全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，是一种软件设计典范。  
MVC 只是看起来很美  
MVC 框架的数据流很理想，请求先到 Controller, 由 Controller 调用 Model 中的数据交给 View 进行渲染，但是在实际的项目中，又是允许 Model 和 View 直接通信的。然后就出现了这样的结果：

其实 Flux 在 React 里的应用就类似于 Vue 中的 Vuex 的作用，但是在 Vue 中，Vue 是完整的 mvvm 框架，而 Vuex 只是一个全局的插件。  
React 只是一个 MVC 中的 V(视图层)，只管页面中的渲染，一旦有数据管理的时候，React 本身的能力就不足以支撑复杂组件结构的项目，在传统的 MVC 中，就需要用到 Model 和 Controller。Facebook 对于当时世面上的 MVC 框架并不满意，于是就有了 Flux, 但 Flux 并不是一个 MVC 框架，他是一种新的思想。  
注意：flux、redux 都不是必须和 react 搭配使用的，因为 flux 和 redux 是完整的架构，在学习 react 的时候，只是将 react 的组件作为 redux 中的视图层去使用了。

**redux 使用的三大原则**

1. 唯一的数据源,只能有一个 state
2. 状态是只读的，在 redux 中的 state 是不能去改变的
3. 数据的改变必须通过纯函数完成

**什么是纯函数：**

1. 同步函数
2. 如果相同的入参，那么一定是相同的返回值
3. 不能改变入参

redux  
可以从 redux 中解构出  
`import { createStore,combineReducers,applyMiddleware } from "redux";`

- createStore ————创建仓库实例
- combineReducers ————用于做仓库模块化的
- applyMiddleware ————中间件，在用于做异步

createStore ————方法执行会返回一个仓库实力，需要一个函数作为参数 reducer  
 `const store=createStore(reducer)`
store 仓库实例下面有三种方法

- dispatch——用来触发 reducer 函数的
- getState——用来获取仓库数据的
- subscribe——监听仓库数据的改变

## react-redux

store 文件下有 index.js，reducer.js 文件  
index.js 文件

```javascript
import { createSore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer);
export default store;
```

reducer.js 文件

```javascript
    const defaultState={ }
    const reducer=(state=defaultState,action){
       switch (action.type) {
         case "":
             return {
               ...state,
               count:state.count+1
    }
       case " "
           return { ...state }
         default:
           return state;
    }
    }
    export default reducer;
```

如果直接把仓库引到组件中，仓库的数据是没有响应式的

有响应式的做法  
根组件

1. 从 react-redux 中解构 Provider 组件，套在 App 组件的外面，Provider 组件有一个 store 属性
2. 引入仓库实例，把仓库实例作为 Provider 组件的 store 属性的属性值  
   `import store from "./....."`  
   `<Provider store={store}></Provider>`  
   使用仓库
3. 从 react-redux 中 解构 connect 函数
   `import {connect} from "react-redux"`
4. connect 函数执行需要两个参数，都是纯函数`（mapStateToProps,mapDispatchToProps）`  
   connect 函数执行会返回一个高阶组件

```javascript
// mapStateToProps函数有一个state参数，state就是仓库中的defaultState
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
// mapDispatchToProps函数有一个dispatch参数，dispatch就是仓库下面reducer里面定义的方法
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch({ type: "xxxx" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

也可以写成高阶组件的装饰器的写法  
`@connect（mapStateToProps，mapDispatchToProps)`，要写在类组件的上面，不能分开，不能写在函数组件上  
如果只使用一个参数，要写为 null，  
`@connect(null，mapDispatchToProps)`
将仓库中的数据映射到组件的 props 中  
将仓库中的方法映射到组件的 props 中  
使用的时候直接 this.props.count this.props.xxx  
这样写这个仓库的数据就有响应式了

## redux-thunk

redux 的异步  
使用 thunk 异步库

```javascript
// applyMiddleware是中间件,用于做redux的异步
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// 安装异步库yarn add redux-thunk
// 引入异步库
import thunk from "redux-thunk";
// createStore方法可以接收第二个参数
// 第二个参数是applyMiddleware方法的返回值
// applyMiddleware方法需要接收一个异步库作为参数
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
// thunk异步库用的不多
```

操作  
index.js

```javascript
import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// 引入异步库
import thunk from "redux-thunk";
const store = legacy_createStore(reducer, applyMiddleware(thunk));
export default store;
```

createAction.js 文件

```javascript
// 动作创建者，写的是函数
export const addAction = (num) => {
  return {
    type: "add",
    payload: num,
  };
};
export const minusAction = (num) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({ type: "minus", payload: num });
    }, 2000);
  };
};
export const loadAction = () => {
  //   1.如果加了中间件，返回的就可以不是扁平化对象了，可以返回函数了
  //   2.这个函数可以接受一个dispatch参数
  //   3.中间件就是用来帮我们执行里面的函数的
  return (dispatch) => {
    fetch("http://www.pudge.wang:3080/api/rated/list")
      .then((response) => response.json())
      .then((res) => {
        dispatch({ type: "load", payload: res.result });
      });
  };
};
```

使用

```javascript
const mapStateToProps = (state) => {
  return {
    count: state.count,
    ratedList: state.ratedList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add(num) {
      dispatch(addAction(num));
    },
    minus(num) {
      dispatch(minusAction(num));
    },
    load() {
      dispatch(loadAction());
    },
  };
};
```

![](../../static/img/react/EF897912-1920-4af4-A062-EF27869BDAB8.png)
![](../../static/img/react/789826E0-8139-496f-81D5-B6AD1920873A.png)
![](../../static/img/react/76607087-E371-4d86-95A0-AAE364045661.png)

## redux-saga

yarn add redux-sagas  
官网 https://redux-saga-in-chinese.js.org/

一个项目可能很多地方要用到全局仓库中的数据，会导致仓库中的数据非常多，redux 就会非常大  
我们实际开发中可以写成模块化的方式  
不管是哪一种仓库管理工具仓库的 state 永远只能有一个

小仓库  
store 下面 —— reducer.js & sagas.js  
哪个页面用到仓库数据，就可以在这个页面里面建一个 store 文件(里面只写两个文件，reducer.js 和 sagas.js，reducer.js 文件里面写这个页面用到的 defaultState 和 reducer 函数，sagas.js 文件里面使用 generator 函数，通过中间件去调用仓库中的方法，同时也是在这个文件里面做数据请求的),小仓库中不用创建仓库实例

sagas.js —— sagas 文件里面全部使用 generator 函数，（在组件调用的 dispatch 以后，不会直接去找 reducer，而是来执行 mySaga，takeEvery 用来监听组件中调用的 dispatch，call 就是用来请求数据的，yield 和 async,await 一样，有一个等待的效果，put 相当于组件里面的 dispatch，用于调用 reducer 函数）

```javascript
import { takeEvery, put, call } from "redux-saga/effects";
import { movieApi } from "../../../utils/api";
function* addAction() {
  // 这里是可以接受参数的，就是组件中dispatch调用时传过来的参数，将这个参数在传给reducer
  // put相当于组件里面的dispatch，用于调用reducer函数
  yield put({ type: "increment" });
}
function* minusAction() {
  yield put({ type: "decrement" });
}
function* loadAction() {
  // yield和async,await一样，有一个等待的效果
  // saga里面，call就是用来请求数据的
  const res = yield call(() => {
    return movieApi();
  });
  console.log(res);
  yield put({
    type: "load",
    payload: res.result,
  });
}
function* mySaga() {
  // takeEvery用来监听组件中调用的dispatch
  // 在组件调用的dispatch以后，不会直接去找reducer，而是来执行mySaga
  // takeEvery用来分配type属性，分配到了就会直接执行第二个回调函数
  yield takeEvery("add", addAction);
  yield takeEvery("minus", minusAction);
  yield takeEvery("loadDate", loadAction);
}
export default mySaga;
```

reducer.js —— 定义 state 和 reducer 函数

```javascript
const defaultState = {
  count: 10,
  movieList: [],
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "load":
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
```

全局仓库  
store 下面 —— index.js & rootReducer.js & rootSagas.js

index.js —— 创建仓库实例，引入 rootReducer.js 文件，rootSagas.js 文件

```javascript
// applyMiddleware是中间件,用于做redux的异步
import { legacy_createStore as createStore, applyMiddleware } from "redux";
// 引入saga异步库
import createSagaMiddleware from "redux-saga";
// 引入reducer文件
import rootReducer from "./rootReducer";
// 引入sagas文件(代替了之前的thunk中间件异步请求的那个actionCreator.js文件)
import rootSagas from "./rootSagas";
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware();
// applyMiddleware里面传入的是saga的执行结果
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
export default store;
```

rootReducer.js 文件——是将项目中所有的小仓库中的 reducer 合并成一个大的

```javascript
// reducer（使用combineReducers）
import { combineReducers } from "redux";
// 引入小的reducer
import cityReducer from "../pages/city/store/reducer";
const rootReducer = combineReducers({
  city: cityReducer,
});

export default rootReducer;
```

rootSagas.js 文件 —— 是将项目中所有的小仓库中的 sagas 合并成一个大的 sagas（使用 all 方法）

```javascript
import { all } from "redux-saga/effects";
// 引入city页面的sagas
import citySagas from "../pages/city/store/sagas";
function* rootSagas() {
  // all用来合并sagas
  yield all([citySagas()]);
}
export default rootSagas;
```

saga 中间件比 tunk 的逻辑清晰一点  
saga 中间件的执行流程  
我们在组件中调用通过 dispatch 调用 add 和 minus 函数，reducer 里面是没有的，它会先去执行 sagas 文件里面的 mySaga 函数  
takeEvery 方法就是用来监听 dispatch，第一个参数就是组件中 dispatch 的 type（add，minus）,监听到哪一个就会执行对应的回调函数（addAction,minusAction）  
put 就相当于组件中的 dispatch，用于调用 reducer 函数

saga 数据请求的流程  
我们在组件挂载完成的时候（useEffect）使用 dispatch 方法，然后它会去 saga 里面的 mySaga 函数进行匹配，匹配到之后执行对应的回调函数，  
我们在这个回调函数中通过` yield call(（）=>{})`进行数据请求，（因为 yield 和 async,await 一样，有一个等待的效果），拿到数据之后，将数据放到对调函数的 `put({type:"",payload})`里面,  
put 方法会调用 reducer 里面的函数（相当于之前没写 saga 时的组件的 dispatch），从而更新仓库的数据

注意：
state 需要加模块名，方法不需要  
mySaga 函数里面 takeEvery 监听的函数不能和 reducer 函数重名

```javascript
const count = useSelector((state) => state.shot.count);
<button onClick={() => dispatch({ type: "takeadd" })}>+</button>;
```

## redux-logger

## useSelector,uesDispatch

react-redux 提供了两个 hooks  
useSelector —— 获取仓库的值  
useDispatch —— 调用仓库的函数

之前是通过 Provider 组件和 connect 函数，将仓库中的 state 和 dispatch 映射到组件中的 props 中，connect 函数调用需要两个纯函数作为参数（mapStateToProps,mapDispatchToProps）,connect 函数执行会返回一个高阶组件

react-redux 提供了两个 hooks,为了方便获取仓库的值和调用仓库的函数（这两个 hooks 可以替换之前的 connect）  
`import {useSelector,useDispatch} from "react-redux";`
将仓库的 count 变成组件的 count 变量，并且具有响应式（回调函数的参数 state 就是仓库中的 state）  
如果要做仓库的模块化，属性需要加模块化命，方法不需要  
useSelector 可以调用多次  
const count=useSelector(state=>state.city.count);  
dispatch 就是用来调用改变仓库变量的方法的  
const dispatch=useDispatch();  
useSelector —— 获取仓库的值  
useDispatch —— 调用仓库的函数  
为了方便获取仓库的值和调用仓库的函数

## 路由

### react-router-dom（v5）

yarn add react-router-dom@5

// 如果项目需要使用路由，那么整个项目就需要使用 BrowserRouter 组件套住  
`import {BrowserRouter as Router} from "react-router-dom";`
vue 默认路由是排他性路由（只要匹配到一个，就不会在匹配了），react 默认是包容性路由  
react 路由默认是 history 路由

#### 1.基础

```javascript
​    ​    // 一切皆组件
​    ​    import { Link, Route, Switch } from "react-router-dom";
​    ​    <Link to="/">首页</Link>
​    ​    <Switch>
​    ​                {/* 也可以不写exact，将这个容器写到最下面就行 */}
​    ​              <Route path="/" component={Home} exact></Route>
​    ​              <Route path="/about" component={About}></Route>
​    ​              <Route path="/mine" component={Mine}></Route>
​    ​    </Switch>
```

1. Link 组件就是用来改变 url 地址的 a 标签，相当于 vue 里面的 router-link,必须要有 to 属性
2. Route 组件用于渲染对应的页面，并不是整一个容器(path,component,exact)
3. switch 叫做分支匹配，作用就是将包容性路由转换成排他性路由
4. exact 表示的是精准匹配，只有 url 正好相等的时候才能显示

#### 2.动态路由参数

```javascript
​    ​    ​    <Link to="/detail/654321">详情页页面2</Link>
​    ​    ​    {/* 动态路由的做法和vue的做法是一样的 */}
​    ​    ​    <Route path="/detail/:id" component={Detail}></Route>
​    ​    ​    拿到动态路由参数
​    ​    ​    this.props.match.params
```

​  
​

#### 3.路由嵌套

​ ​ ​ vue 是在路由表中加 children  
​ ​ ​ react 的路由嵌套（二级路由）是加在子组件中的（哪个组件需要，就给那个组件加）  
​ ​ ​ 子组件一就可以使用 Route 和 Link  
​ ​ ​ this.props——打印的就是路由信息  
​ ​ ​ this.props 下面有 history,location,match 等表示路由信息  
​ ​ ​ vue 中$route 表示路由信息

#### 4.路由中组件的渲染的方式

​ ​ ​ withRouter——是一个用于拿到路由信息的高阶组件

1. component 属性渲染组件  
   ​ ​ ​ 在 route 里面，最常见的渲染组件的方式是使用 component 属性  
   ​ ​ ​ component 属性既能渲染函数组件，还能渲染类组件  
   ​ ​ ​ 可以拿到路由信息  
   ​ ​ ​ this.props  
   ​ ​ ​ `<Route path="/home" component={Home}></Route>`

​  
​  
2. render 属性渲染组件  
​ ​ ​ 用 render 属性不能渲染类组件，只能渲染函数组件  
​ `<Route path="/about" render={About}></Route>`  
​ render 如果想渲染类组件，使用函数返回组件的形式（），这样是没有路由信息的，需要传递一下  
​ `<Route path="/about" render={(props)=><About {...props}/>}></Route>`  
​ ​ ​ render 里面可以写函数，那麽就可以在 render 的函数里面写逻辑和判断  
​ ​ ​ 重定向，路由鉴权就可以使用 render 属性
​ ​ ​ `<Route path="/about" render={(props)=><About {...props}/>}></Route>`
​ ​ ​  
3. children 属性渲染组件  
​ ​ ​ 还可以使用 children 属性来渲染组件  
​ ​ ​ 在有 Switch 的情况下，children 属性的效果和 render 属性是完全一样的  
​ ​ ​ 在没有 Switch 的情况下，children 属性对应的组件不管是否匹配都会被渲染  
​ ​ ​ `<Route path="/mine" children={Mine}></Route>`
​ ​ ​  
4. 插槽的方式渲染组件
​ ​ ​ 可以直接在 Route 组件的内部，将组件实例化，  
​ ​ ​ 既可以使用类组件，还可以使用函数组件  
​ ​ ​ 但是这种方式拿不到路由信息（不用路由信息的情况下可以使用）  
​ ​ ​ 现在有一种方法也可以拿到他的路由信息  
​ ​ ​ 从 react-router-dom 中解构 withRouter(高阶组件)  
​ ​ ​ withRouter 高阶组件是帮助那些拿不到路由信息的，拿到组件的路由信息  
​ ​ ​ withRouter 高阶组件会让组件树层级变深
​ ​ ​  
​ ​  
5. 重定向(Redirect)
​ ​ Redirect 组件——用于做重定向  
​ ​ Redirect 要写在 Route 并列的位置  
​ ​ Redirect 有两个属性，from,to 从哪到哪  
​ ​ Redirect 一般要写在 Route 的最后一行，或者添加 exact（精准匹配）属性

```javascript
<Switch>
  ​ ​ <Redirect from="/" to="/home" exact></Redirect>​ ​ <Route
    path="/home"
    component={Home}
  ></Route>​ ​ <Route path="/about" component={About}></Route>​ ​ <Route
    path="/mine"
    component={Mine}
  ></Route>​ ​ {/* <Redirect from="/" to="/home"></Redirect> */}​ ​{" "}
</Switch>
```

​  
​  
6. 路由鉴权（render+Redirect）

```jsx
import {Component} from 'react'
​    ​    ​    <Route path="/mine" render={()=>{
​    ​    ​                  if(localStorage.getItem("token")){
​    ​    ​                      return <Mine />
​    ​    ​                  }else{
​    ​    ​                    //   没有登陆的时候，直接重定向到登陆页面
​    ​    ​                    return <Redirect to="/login"></Redirect>
​    ​    ​                  }
​    ​    ​              }}></Route>
​    ​    ​
​    ​    ​    @withRouter
​    ​    ​    class Login extends Component {
​    ​    ​      login = () => {
​    ​    ​        // console.log(123);
​    ​    ​        localStorage.setItem("token", "123");}
}
```

​  
​  
7. 编程式导航（this.props.history）
​ ​ ​ this.props.history 下面有四个常用的方法  
​ ​ ​ go()前进或者后退几步  
​ ​ ​ goBack()不需要加参乎上，直接返回一步  
​ ​ ​ push("/xxx")追加，可以后退  
​ ​ ​ replace("/xxx")替换，回退的时候会把之前的的一页跳过

```jsx
​    ​    ​        // console.log(this.props);
​    ​    ​        // console.log(this.props.history);
​    ​    ​        this.props.history.push("/mine");
​    ​    ​
​    ​    ​      render() {
​    ​    ​        return (
​    ​    ​          <div>
​    ​    ​            这是Login组件-<button onClick={this.login}>点击</button>
​    ​    ​          </div>
​    ​    ​        );
​    ​    ​      }
​    ​    ​
```

​  
​  
​  
8. 导航高亮（NavLink）
​ ​ ​ NavLink——可以用来替换 Link 组件，在 Link 组件的基础上面，多加了一个导航高亮的功能  
​ ​ ​ 默认的类名是 active  
​ ​ ​ NavLink 有一个 activeClassName 属性——修改类名  
​ ​ ​ NavLink 也可以使用 exact 精准匹配  
​ ​ ​ `<NavLink to="/" activeClassName="select" exact>首页</NavLink>`

​  
​  
​  
9. 404 路由
​ ​ ​ 404 的时候，不能去掉 Switch  
​ ​ ​ 404 要写在所有 Route 的最后

```jsx
<Switch>
  ​ ​ ​ <Route path="/home" component={Home} exact></Route>​ ​ ​ <Route
    path="/about"
    component={About}
  ></Route>​ ​ ​ <Route path="/mine" component={Mine}></Route>​ ​ ​ <Route
    path="*"
    component={NoMatch}
  ></Route>​ ​ ​{" "}
</Switch>
```

​  
​  
​

10. 阻止跳转（Prompt）
    ​ ​ ​ 案例：输入框输入的时候点击跳转  
    ​ ​ ​ 里面有两个属性，when 表示条件，message 表示的是提示信息  
    ​ ​ ​ 当条件为 true 的时候跳转，弹出一个信息

```jsx
<>
​    ​    ​            <div>这是Home组件</div>
​    ​    ​            <input
​    ​    ​              type="text"
​    ​    ​              value={this.state.textValue}
​    ​    ​              onChange={this.handleChange}
​    ​    ​            />
​    ​    ​            {/* 里面有两个属性，when表示条件，message表示的是提示信息 */}
​    ​    ​            {/* 当条件为true的时候跳转 */}
​    ​    ​            <Prompt
​    ​    ​              when={this.state.textValue}
​    ​    ​              message={(location) =>
​    ​    ​                `Are you sure you want to go to ${location.pathname}`
​    ​    ​              }
​    ​    ​            />
​    ​    ​    </>
```

​  
​  
​  
11. 路由传参的方式

1. 动态路由传参

```jsx
import {Component} from 'react'
​    ​    ​    <Link to="/home/123">首页</Link>
​    ​    ​    <Route path="/home/:id" component={Home}></Route>
​    ​    ​    路由信息
​    ​    ​    class Home extends Component {
​    ​    ​      render() {
​    ​    ​        //   console.log(this.props);
​    ​    ​        return <div>这是Home组件-{this.props.match.params.id}</div>;
​    ​    ​      }
​    ​    ​    }
```

​ ​ ​  
2. query 的传参

```jsx
import {Component} from 'react'
​    ​    ​    <Link to="/about?a=10&b=20">关于页面</Link>
​    ​    ​    <Route path="/about" component={About}></Route>
// ​    ​    ​    路由信息
​    ​    ​    class About extends Component {
​    ​    ​      render() {
​    ​    ​        //   console.log(this.props);
​    ​    ​        // query的传参需要用到this.props.location.search
​    ​    ​        const {location:{search}}=this.props;
​    ​    ​        const query =search.slice(1);//"a=10&b=20"
// ​    ​    ​        拿到a的值
​    ​    ​        const params=new URLSearchParams(query);
​    ​    ​        const a=params.get("a");
​    ​    ​        console.log(a);//10
​    ​    ​
​    ​    ​    new URL()
// ​    ​    ​    这个构造函数可以传入一个完整的url
​    ​    ​        // const obj=new URL("http://localhost:3000/about?a=10&b=20");
​    ​    ​        // console.log(obj.searchParams.get("a"));//10
​    ​
​    ​    new URLSearchParams()
// ​    ​    这个构造函数可以传入query  ?a=10&b=20
​    ​        // const obj=new URLSearchParams("a=10&b=20");
​    ​        // console.log(obj.get("a"));//10
​    ​
​    ​        return <div>这是About组件</div>;
​    ​      }
​    ​    }
```

​ ​  
3. state 的传参

```jsx
import {Component} from 'react'
​    ​    state的传参(location下面的state)
// ​    ​    state也可以做url的传参，state是一个对象，里面可以随意发挥
// ​    ​    是一种在url地址上面看不到的一种传参
​    ​                <Link to={{
​    ​                    pathname:"/mine",
​    ​                    search:"?x=100&y=200",
​    ​                    hash:"#abc",
​    ​                    state:{
​    ​                        name:"zhangsan",
​    ​                        age:20,
​    ​                    }
​    ​                }}>我的页面</Link>
​    ​    <Route path="/mine" component={Mine}></Route>
// ​    ​    路由信息
​    ​    class Mine extends Component {
​    ​      render() {
​    ​          console.log(this.props);
​    ​        return <div>这是Mine组件-{this.props.location.state.name}-{this.props.location.state.age}</div>;
​    ​      }
​    ​    }
```

### react-router-dom(v6)

#### 1.路由基础

安装 6 版本路由 yarn add react-router-dom  
最外面依旧要使用 BrowserRouter  
跳转依旧使用 Link 组件  
没有 Switch 了，替换成了 Routes  
Routes 是必须要有的，路由只能是排他性路由了  
Routes 里面只能写 Route  
渲染组件只有一种方式了，使用 element 属性，里面写的是组件的实例化的结果  
element 既可以渲染函数组件，也可以渲染类组件  
element 渲染的组件是一律没有路由信息的  
想拿到路由信息，需要使用路由提供的 hooks（useNavigate,useParams,useLocation,useRouteMatch）  
react 的路由 v6 版本已经没有 useHistory,取而代之的是 useNavigate  
所有的路由默认都是精准匹配（不用使用 exact 了）之前的路由是模糊匹配，需要加 exact

```jsx
<Routes>
          <Route path="/home" element={<Home />}></Route>
  {/* <Route path="/" element={<Home />}></Route> */}       {" "}
  {/* 也可以这样写 */}       {" "}
  {/* <Route path="/home" element={<div>home组件</div>}></Route> */}       {" "}
  <Route path="/about" element={<About />}></Route>
</Routes>
```

#### 2. 路由嵌套

Outlet 二级路由的容器  
之前的嵌套是写在子组件中的  
现在的二级路由是嵌套在一级路由的容器中，同时在子组件中使用 Outlet 容器

```jsx
<Routes>
  {/* 一级路由 */}       {" "}
  <Route path="/home" element={<Home />}>
              {/* 二级路由 */}         {" "}
    {/* 如果二级路由的地址和一级路由的地址是一致的，那麽可以加上index属性 省略了二级路由的path*/}
              <Route index element={<Home1 />}></Route>         {" "}
    {/* 不是以斜杠开头，相当于在上一级的基础上做拼接 */}         {" "}
    {/* <Route path="home1" element={<Home1 />}></Route> */}         {" "}
    <Route path="home2" element={<Home2 />}></Route>          {/* <Route path="/home/home1" element={<Home1 />}></Route>
               <Route path="/home/home2" element={<Home2 />}></Route> */}       {" "}
  </Route>
          <Route path="/about" element={<About />}></Route>
</Routes>
```

#### 3.404

```jsx
<Routes>
          {/* 404写法几乎一样，写在最下面 */}       {" "}
  {/* 404也可以写在外面一层，这样如果地址错了，就不会显示任何内容了 */}       {" "}
  <Route path="/home" element={<Home />}></Route>        <Route
    path="/about"
    element={<About />}
  ></Route>        <Route path="*" element={<div>404 not found....</div>}></Route>
</Routes>
```

#### 4.动态路由

```jsx
<Routes>
          {/* 动态路由的写法和之前也是一样的 */}       {" "}
  <Route path="/home" element={<Home />}></Route>        <Route
    path="/about"
    element={<About />}
  ></Route>        {/* 新增了动态可选参数 */}       {" "}
  {/* 有动态参数或者没有动态参数，页面都可以显示 */}       {" "}
  {/* 可以做一些有参数的时候页面是什么样的，没参数的时候页面是啥样的 */}       {" "}
  <Route path="/detail" element={<Detail />}>
                <Route path=":id" element={<Detail />}></Route>       {" "}
  </Route>
          {/* <Route path="/detail/:id" element={<Detail />}></Route> */}       {" "}
  <Route path="*" element={<div>404 not found....</div>}></Route>
</Routes>
```

#### 5.导航高亮

```jsx
<ul>
         {" "}
  <li>
              {/* activeClassName属性没有了 */}         {" "}
    {/* 需要使用函数， 参数可以解构出一个isActive， 表示当前的NavLink是否被选中 */}
              <NavLink
      to="/home"
      className={({ isActive }) => (isActive ? "select" : "")}
    >
      home
    </NavLink>       {" "}
  </li>
          <li>
             {" "}
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "select" : "")}
    >
      about
    </NavLink>
           {" "}
  </li>
</ul>
```

#### 6.重定向

Navigate 组件—— 重定向

```jsx
<Routes>
          {/* Routes里面只能写Route */}       {" "}
  <Route path="/" element={<Navigate to="/home" />}></Route>        <Route
    path="/home"
    element={<Home />}
  ></Route>        <Route path="/about" element={<About />}></Route>        <Route
    path="*"
    element={<div>404 not found....</div>}
  ></Route>
</Routes>
```

#### 7.编程式导航

react 的路由 v6 版本已经没有 useHistory,取而代之的是 useNavigate

```jsx
import { Link, Routes, Route, useNavigate } from "react-router-dom";
// 执行useNavigate函数返回的是一个函数，并不是之前useHistory的对象了
const navigate = useNavigate();
const handClick = () => {
  // 1.push效果
  // navigate方法直接传入路径，相当于push方法
  // navigate("/about");
  // 2.replace效果
  // 如果想做replace的效果，需要加入第二个参数{replace:true}
  // navigate("/about",{replace:true});
  // 3.前进后退
  // 如果想要前进或者后退，里面可以直接传入数字
  navigate(-1);
};
```

#### 8.路由鉴权

## 路由提供的 hooks

### useHistory

### useParams

### useLocation

### useRouteMatch

路由提供的 hooks
​ ​ ​ hooks 是 react 16.8 版本以后才新增的内容  
​ ​ ​ hooks 的目的是让函数组件能够拥有类组件的功能，hooks 只能给函数组件用  
​ ​ ​ 类组件的性能比函数组件的性能差一点（让那个函数组件可以定义自己的 state 和生命周期）hooks 就是用来解决这个问题的  
​ ​ ​ 插槽的方式是拿不到路由信息的（需要使用高阶组件）  
​ ​ ​ withRouter 高阶组件会让组件树层级变深  
​ ​ ​ hooks 还可以解决高阶组件让层级变深的问题  
​ ​ ​  
​ ​ ​ 路由提供的 hooks 主要还是用于获取路由信息的  
​ ​ ​ 所有的 hooks 都是 use 开头的  
​ ​ ​ 所有的 hooks 都必须在函数组件的顶层调用

```jsx
​    ​    ​    import { Link, Route, Switch,useHistory,useParams,useLocation,useRouteMatch } from "react-router-dom";
​    ​    ​
​    ​        const Home=(props)=>{
​    ​            // console.log(props);//插槽的方式是拿不到路由信息的（需要使用高阶组件）


​
​
​         // 1.useHistory()
​    ​        const history=useHistory();
​    ​        console.log(history);//相当于this.props
​    ​
​    ​        // 2.useParams()
​    ​        const params=useParams();
​    ​        console.log(params);//相当于this.props.match.params的动态路由参数
​    ​
​    ​        // 3.useLocation()
​    ​        const location=useLocation();
​    ​        console.log(location);
​    ​
​    ​        // 4.useRouteMatch()
​    ​        const match=useRouteMatch();
​    ​        console.log(match);// 相当于this.props.match
​    ​
​    ​        const jump=()=>{
​    ​            history.push("/about");
​    ​        }
​    ​    <Switch>
​    ​              <Route path="/home">
​    ​                  <Home />
​    ​              </Route>
​    ​              <Route path="/about">
​    ​                  <About />
​    ​              </Route>
​    ​              <Route path="/mine">
​    ​                  <Mine />
​    ​              </Route>
​    ​    </Switch>
​    ​
​    ​        return <div>这是Home组件-<button onClick={jump}>点击</button></div>;
​    ​    }
```

### useNavigate

```jsx
// react的路由v6版本已经没有useHistory,取而代之的是useNavigate
import { Link, Routes, Route, useNavigate } from "react-router-dom";
// 执行useNavigate函数返回的是一个函数，并不是之前useHistory的对象了
const navigate = useNavigate();
const handClick = () => {
  // 1.push效果
  // navigate方法直接传入路径，相当于push方法
  // navigate("/about");
  // 2.replace效果
  // 如果想做replace的效果，需要加入第二个参数{replace:true}
  // navigate("/about",{replace:true});
  // 3.前进后退
  // 如果想要前进或者后退，里面可以直接传入数字
  navigate(-1);
};
```

## hooks

hooks 都是给函数组件用的，为了让函数组件能够拥有类组件的功能（定义 state,生命周期）  
react 在 16.8 版本出了 React Hooks  
hooks 必须在函数组件的顶层使用

函数组件的性能比类组件的性能好  
函数组件他在卸载的时候会在浏览器的内存中直接销毁，性能比类组件好一点  
hooks 的好处  
1.代码可读性更强，原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中，容易使开发者不利于维护和迭代，通过 React Hooks 可以将功能代码聚合，方便阅读维护  
2.组件树层级变浅，在原本的代码中，我们经常使用 HOC/render props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在 React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实现

vue3 中的组合 api(为什么会有组合 api)  
一个组件或一个页面会有很多个功能，每个功能会有自己的数据，方法，生命周期，这些东西要写在不同的选项对象里面，当我去使用的时候，不好读取，不好操作，所以用组合 api 的方式，将相同功能的代码方法一起去（便于为何和迭代）  
vue3 的组合 api 就是借鉴了 react 的自定义 hooks 的思路来设计的

### useState

useSateate—— 作用是在函数组件中定义 state  
const [count,setCount]=useState(5);  
和 vue3 中的 ref(定义变量非常像)  
setCount 修改变量的方法  
如果改变以后的值不依赖前一次的值，括号里面直接写值  
setCount(10);  
如果改变以后的值依赖前一次的值，括号里面写函数（参数是函数）  
setCount(v=>v+1)  
v 表示改变之前的变量的值  
改变数据的方法是异步的，这里没有回调函数的(就是这里是拿不到改变后的值的，需要配合其他的 hooks)  
如果想得到改变以后的结果，需要配合 useEffect 一起使用

### useEffect

useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在 componentDidMount 里面的代码，现在可以放在 useEffect()。

useEffect —— 是用来替换生命周期的  
useEffect 方法调用的时候是没有返回值的  
里面需要传入参数  
第一个参数是回调函数  
第二个参数是数组，数组里面写的依赖

constructor  
render  
componentDidMount  
componentDidUpdate  
componentWillUnmount  
useEffect 在页面渲染之后执行

1. 一个参数的情况  
   如果只有一个参数，那么就相当于 componentDidMount 以及 componentDidUpdate
   页面挂载完毕会执行，同时数据改变也会执行
2. 两个参数的情况（第二个参数是空数组）  
   如果有第二个参数，并且是空数组，那么相当于 componentDidMount  
   3.两个参数的情况（第二个参数有依赖）  
   如果第二个参数有依赖，那麽相当于 watch(依赖的数据发生改变，前面的回调函数就会执行,就可以拿到数据改变后的值了),监听数据的改变，同时数组的好处是还可以同时监听多个数据的改变

整个函数组件相当于 render  
constructor 的内容是可以放在函数组件里面直接写的  
卸载:如果回调函数返回一个函数，那么返回的函数里面就相当于 componentWillUnMount  
卸载是要关掉定时器，事件监听，WebSockets,第三方插件

```jsx
// 就相当于进来的时候开启定时器，离开的时候关闭定时器
// useEffect(()=>{
//     const timer=setInterval(() => {
//         console.log(123)
//     }, 1000);
//     return ()=>{
//         clearInterval(timer);
//     }
// },[]);
```

useEffect 方法可以执行多次  
如果在 useEffect 里面去调用封装好的请求，那么我们要使用自执行函数  
原因是：我们调用封装好的函数时，他会返回一个 fetch，就和卸载阶段的格式一样了，他就不知道是请求还是卸载，（会报错）因此使用自执行函数，就不会存在这样的问题

```jsx
useEffect(() => {
  (async () => {
    const res = await getData();
    console.log(res);
  })();
}, []);
```

注意：
使用 useEffect()时，有一点需要注意。如果有多个副效应，应该调用多个
useEffect()，而不应该合并写在一起。

```jsx
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);
  useEffect(() => {
    const timeoutA = setTimeout(() => setVarA(varA + 1), 1000);
    const timeoutB = setTimeout(() => setVarB(varB + 2), 2000);

    return () => {
      clearTimeout(timeoutA);
      clearTimeout(timeoutB);
    };
  }, [varA, varB]);

  return (
    <span>
      {varA}, {varB}
    </span>
  );
}
// 上面的例子是错误的写法，副效应函数里面有两个定时器，它们之间并没有关系，其实是两个不相关的副效应，不应该写在一起。正确的写法是将它们分开写成两个useEffect()。
function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);
    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return (
    <span>
      {varA}, {varB}
    </span>
  );
}
```

### useCallBack

useCallback(性能优化相关)  
类组件  
会有一个问题，我点击父组件的事件时，父组件的数据改变，子组件也会重新渲染
原因是：在 react 中，只要父组件 render 了（父组件的数据改变就会重新渲染），子组件也一定会 render  
之前解决这个问题：在子组件中使用 PureComponent(只要子组件的 props 不改变，子组件就不会从新渲染)，但是这里并没有用（子组件加了 PureComponent 之后，子组件还会重新渲染）  
原因是：`style={{fontSize: 14}} doSomething={ () => { console.log('do something')}}`，自定义属性，里面是一个对象或者函数，对象是引用类型，虽然父组件渲染前和渲染后这个对象看起来是一样的，但是其实地址是不一样的，渲染前和渲染后是了两个地址，所以子组件还会会重新渲染  
解决办法：将对象或者函数单独定义在外面，这样子组件就不会重新渲染了

函数组件  
父组件只要 render 了子组件也一定会 render  
在上面的类组件中，我们使用 PureComponent 来拦截子组件的再次渲染，在函数组件中我们没有 PureComponent

```jsx
import React,{useState,memo,useCallback} from "react";
memo —— 是一个高阶组件，作用和PureComponent一摸一样，他是给函数组件用的
const Child=memo(()=>{
    return <div>child组件</div>
})
```

函数组件使用 memo 后就算我把函数单独写到外面也还会有一个问题，子组件还会重新渲染  
原因是：上面的类组件我们可以将对象或者函数单独写到上面，类组件数据改变的时候只会把 render 函数重新执行  
函数组件一旦数据改变了，因为它没有 render,他的 render 就是整个函数组件重新执行，那么重新执行后 fn2 函数就会变成一个新的 fn2 了，所以子组件还会重新渲染
我们想办法把这个 fn2 函数缓存起来，第一次的 fn2 和第二次的 fn2 让他保持不变  
可以使用 useCallback  
useCallback —— 叫做缓存函数（缓存的是函数体）  
里面有两个参数，第一个参数是函数体（要缓存的函数体），第二个参数是数组依赖（就是依赖的变量,只要依赖改变了，fn2 就会改变）  
参一 —— 函数体  
参二 —— 依赖  
返回值 ：函数（返回的这个函数还是缓存的那个函数）  
useCallback 缓存函数的返回值还是函数（返回的这个函数还是缓存的那个函数）

```jsx
const fn2 = useCallback(() => {
  console.log(count);
}, [count]); //依赖改变了，fn2就会重新执行
```

什么时候添加 useCallback？  
当这个函数要作为自定义事件进行传递的时候，就必须要加 useCallback（和性能优化相关）  
通过 useCallback 将函数缓存起来，意味着改变前和改变后他的地址是不变的，fn2 还是之前的 fn2 他的地址就没有改变  
用 useMemo 去改写 useCallback(useCallback 不能改写 useMemo)  
`useMemo(()=>{return function(){}},[])`

### useMemo

useMemo(性能优化相关)

```jsx
// 问题：
// 我点击第一个按钮改变count的时候sum函数会被执行（因为sum函数使用了count），这是正常的，我点击第二个按钮改变num的时候sum函数也被执行了（sum函数没使用num），这是不合理的
// 如果这个函数是一个很复杂的函数，那么我点击第二个按钮改变num的时候，这个函数是没必要被执行的，这样会造成性能损耗
// 原因：组件的数据改变了，组件就会重新渲染，函数组件的render就是函数组件整个再执行一遍
// 解决：使用useMemo
// useMemo也是用来缓存函数的，语法和useCallback完全相同，有两个参数（第一个是函数体，第二个是依赖）useMemo缓存函数返回一个函数（就是第一个参数，缓存的函数）
// useMemo缓存函数类似于计算属性（依赖只要改变了可以重新去计算结果，可以不用调用，直接使用，当作属性用）（计算属性在计算出新的结果的时候不会去影响老的数据）

// 面试题：useCallback和useMemo的区别
// 1.他俩都是用来缓存函数的
// 2.useCallback是给自定义属性用的，useMemo是用来做计算属性的
// 3.useCallback缓存的是函数本身，useMemo返回的是函数的返回值

const oddList = useMemo(() => {
  return list.filter((item) => item % 2);
}, [list]);

// 面试中还会问：你能不能用useCallback去替换useMemo
// 用useMemo可以去改写useCallback，useCallback不能去改写useMemo
useMemo(() => {
  return function () {};
}, []);
```

### useContext

useContext 主要是用于简化 context 下面的 Consumer 的接收的  
只是简化接收，传递 Provider 还是不变的  
使用 useContext,createContext 还是必须要有的  
useContext 函数需要接受 context 对象作为参数，并且可以返回出 context 对象里面传过来的 value 属性（value 是一个对象）  
useContext 用的也不多，如果是一组传参的话直接就用 context 了，有的时候跨组件传参用全局状态管理（redux）了  
`const value=useContext(context1); `
`const {name}=useContext(context1);`直接解构

### useReducer

useReducer 的作用是做一个简易版的 redux 仓库，没有办法使用异步（因为没有中间件）  
阉割版的 redux  
之前我们创建仓库是通过 createStore 的方式常见一个 store 仓库，通过 ES6 的模块化的方式引入 reducer  
现在我们通过 useReducer 的方式就不需要使用 createStore 创建了  
useReducer 函数调用的时候可以接受两个参数，分别是 reducer 和 defaultState  
useReducer 函数有返回值，会返回一个数组，分别是 state 和 dispatch

```javascript
const myReducer = (state, action) => {
  switch (action.type) {
    case "countUp":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(myReducer, { count: 0 });
dispatch({ type: "countUp" });
state.count;
```

它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux。

### useRef

useRef 的作用和非受控组件中的 createRef 几乎相同（createRef 函数执行以后会返回一个内存的地址）  
1.创建变量是没有响应式的，并且这个变量可以规避 React Hooks 中 Capture Value 特性（捕获值）  
2.可以用于获取 dom

我们通过下面的 2,3 例子得出在函数组件内部和子组件上使用 ref 是不同的  
1.如果要在函数内部使用，那就直接创建后挂 ref 属性给 react 元素就行了。  
2.如果要在子组件上使用，除了上面的步骤，还需要使用 forwardRef 把子组件的函数包起来，然后再传入第二个参数 ref，最后挂载 ref 就可以正常取到 DOM 了。

#### 1.创建变量，没有响应式

useRef 变化不会主动使页面渲染

```jsx
import React, { useRef } from "react";
export default function App() {
  const r = useRef(0);
  console.log(r);
  const add = () => {
    r.current += 1;
    console.log(`r.current:${r.current}`);
  };
  return (
    <div className="App">
      <h1>r的current:{r.current}</h1>
      <button onClick={add}>点击+1</button>
    </div>
  );
}
```

#### 2.获取 dom

```jsx
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null); //创建一个包含current属性的对象
  console.log(textInput);
  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <input type="text" ref={textInput} />
      //挂到内部dom上
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
```

#### 3.子组件上使用 ref

上面的方法不能直接在子组件上使用，也许你会这样写  
`<Child ref={textInput} />`
但是这样还拿不到子组件的 DOM，我们需要使用 forwardRef 配合使用，上面的例子可以写成这样

```jsx
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null);

  console.log(textInput);
  //   current: <input type="text"></input>
  // 拿到子组件的DOM元素了。

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <Child ref={textInput} /> //**依然使用ref传递**
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
const Child = forwardRef((props, ref) => {
  //** 看我 **
  return <input type="text" ref={ref} />; //** 看我挂到对应的dom上 **
});
```

上面是通过 forwardRef 把 Child 函数包起来，然后传入第二个参数 ref 最后挂载`ref={ref}`  
这样就可以拿到对应的 DOM 了，控制台打印一下看看

```jsx
1.传入字符串
    this.myRef = React.createRef();
    <div ref="myref" />
    this.refs.myref.innerHTML = "hello";
2.传入对象
    this.myRef = React.createRef();
    <div ref={this.myRef} />
    const node = this.myRef.current;
3.传入函数
    this.myRef = React.createRef();
    <div ref={element => this.myref = element} />
    const node = this.myref
4.传入hook
    const myref = useRef()
    <div ref={myref}></div>
    const node = myref.current;
```

### forWardRef

上面的方法不能直接在子组件上使用，也许你会这样写  
`<Child ref={textInput} />`
但是这样还拿不到子组件的 DOM，我们需要使用 forwardRef 配合使用，上面的例子可以写成这样

```jsx
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null);

  console.log(textInput);
  //   current: <input type="text"></input>
  // 拿到子组件的DOM元素了。

  function handleClick() {
    textInput.current.focus();
  }
  return (
    <div>
      <Child ref={textInput} /> //**依然使用ref传递**
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
const Child = forwardRef((props, ref) => {
  //** 看我 **
  return <input type="text" ref={ref} />; //** 看我挂到对应的dom上 **
});
```

上面是通过 forwardRef 把 Child 函数包起来，然后传入第二个参数 ref 最后挂载`ref={ref}`  
这样就可以拿到对应的 DOM 了，控制台打印一下看看

### useImperativeHandle

1. 父组件获取子组件 dom
2. 父组件调用子组件方法  
   结合 useRef/createRef,forwardRef 一块使用

#### 获取方法

```jsx
const Son = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      sonFn() {
        console.log("子组件方法");
      },
    };
  });
  return (
    <>
      <h2>子组件</h2>
    </>
  );
});

const App = () => {
  const sonIpt = useRef();
  const handleClick = () => {
    sonIpt.current.sonFn();
    console.log(sonIpt.current);
  };
  return (
    <>
      <h2>父组件</h2>
      <Son ref={sonIpt} />
      <button onClick={handleClick}>点击</button>
    </>
  );
};

export default App;
```

#### 获取 dom

```jsx
const Son = forwardRef((props, ref) => {
  const div = useRef();
  const span = useRef();
  useImperativeHandle(ref, () => {
    return {
      div: div.current,
      span: div.current,
    };
  });
  return (
    <>
      <h2>子组件</h2>
      <div ref={div}>123</div>
      <span ref={span}>456</span>
    </>
  );
});

const App = () => {
  const sonIpt = useRef();
  const handleClick = () => {
    console.log(sonIpt.current);
    console.log(sonIpt.current.div.innerHTML);
    console.log(sonIpt.current.span.innerHTML);
  };
  return (
    <>
      <h2>父组件</h2>
      <Son ref={sonIpt} />
      <button onClick={handleClick}>点击</button>
    </>
  );
};

export default App;
```

### useLayoutEffect

useLayoutEffect 是会优先于 useEffect 执行  
是在 componentDidMount 以后直接同步调用  
官方建议使用 useEffect  
只有在变量要控制 css 样式的时候用，避免页面闪烁

#### useEffect 和 useLayoutEffect 有什么区别?

1. useEffect 是异步执行的，而 useLayoutEffect 是同步执行的。
2. useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价。  
   useLayoutEffect 等同于 useEffect, 但它会在所有 dom 改变之后同步触发，使用 useLayoutEffect 可以读取 dom 的布局并且同步重新渲染。赶在浏览器绘制之前，useLayoutEffect 内部的更新将同步刷新；  
   如果你使用类组件，useLayoutEffect 会和 componentDidMount 、componentDidUpdate 在同一时机触发，但是官方推荐先使用 useEffect，只有使用 useEffect 出错的时候再尝试 useLayoutEffect;  
   简单来说就是调用时机不同，`useLayoutEffect`和原来`componentDidMount`&`componentDidUpdate`一致，在 react 完成 DOM 更新后马上**同步**调用的代码，会阻塞页面渲染。而`useEffect`是会在整个页面渲染完才会调用的代码。  
   官方建议优先使用`useEffect`

### 自定义 hooks

我把一个功能通过函数的方式封装起来（就是把这个功能提出来），维护起来更好维护，还可以复用  
你做过哪些自定义 hooks 的封装  
在你之前的项目中有点复杂且能复用的东西，在我做过的项目中，有哪些功能适合

案例

```jsx
const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};
// 上例的 Hooks 代码还可以封装起来，变成一个自定义的 Hook，便于共享。
const usePerson = (personId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);
  return [loading, person];
};
// 上面代码中，usePerson()就是一个自定义的 Hook。
// Person 组件就改用这个新的钩子，引入封装的逻辑。
const Person = ({ personId }) => {
  const [loading, person] = usePerson(personId);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};
```

## memo

当想要避免子组件不必要的重新渲染（即便父组件发生了更改），你可以使用 React.memo 打包子组件 – 只要 props 不发生改变，就不会重复渲染。请注意此处是引用相等（译者注：沿用了旧版本 React 的“浅比较”）——子组件不会被重新渲染。

memo —— 是一个高阶组件，作用和 PureComponent 一摸一样，他是给函数组件用的

```jsx
import { memo } from 'react';
const ChildComponent = (props) => {
  // ...
};
export default memo(ChildComponent);

如果需要深层次比较，这时候可以给memo第二个参数传递比较函数
function arePropsEqual(prevProps, nextProps) {
  // your code
  return prevProps === nextProps;
}
export default memo(Button, arePropsEqual);
```

## PureComponent

PureComponent 的原理是继承了 Component 类，自动加载 shouldComponentUpdate 函数  
当组件更新时，shouldComponentUpdate 对 props 和 state 进行了一层浅比较，如果组件的 props 和 state 都没有发生改变，render 方法就不会触发，省去 Virtual DOM 的生成和对比过程，达到提升性能的目的。

PureComponent 的组件在 props 或者 state 的**属性值是对象的情况下，并不能阻止不必要的渲染**，是因为自动加载的 shouldComponentUpdate 里面做的只是浅比较，所以想要用 PureComponent 的特性，应该遵守原则：

1. 确保数据类型是值类型
2. 如果是引用类型，不应当有深层次的数据变化(解构)

PureComponent 可以进行 React 性能优化，减少不必要的 render 渲染次数，使用时只要把继承类从 Component 换成 PureComponent。  
PureComponent 的原理是继承了 Component 类，自动加载 shouldComponentUpdate 函数，当组件更新时，shouldComponentUpdate 对 props 和 state 进行了一层浅比较，如果组件的 props 和 state 都没有发生改变，render 方法就不会触发，省去 Virtual DOM 的生成和对比过程，达到提升性能的目的。  
下面从 PureComponent 的使用和源码来彻底了解它.

shouldComponentUpdate 优化性能  
在 PureComponent 之前，我们经常看到优化 react 性能最常见的手段之一就是在 react 的生命周期函数 shouldComponentUpdate 里判断 props 或 state 的数据是否发生变化，通过返回 ture(更新)和 false(不更新)来阻止不必要的 render.  
首先来看看 react 产生不必要渲染的一个场景：  
用 create-react-app 来初始化 react 的运行环境，然后在 App.js 文件里创建一个定时任务，每隔一秒更新数据：   

```jsx
import React, { Component } from 'react'
import ShouldComponentUpdateList from './ShouldComponentUpdateList'
// 容器组件
export default class App extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // 定时任务，每隔一秒更新数据
        setInterval(() => {
            this.setState({
                data: [
                    { title: 'react line 1' },
                    { title: 'react line 2' },
                ]
            })
        }, 1000)
    }
    render() {
        return(
            <div>
                {
                    this.state.data.map((item, index) => (
                        <ShouldComponentUpdateList key={index} list={item} />
                    ))
                }
            </div>
        )
    }
}

// ShouldComponentUpdateList组件内容为：
export default class List extends Component {
    render() {
        console.log('list render')
        return(
            <div>{this.props.list.title}</div>
        )
    }
}
```

命令行运行 npm start，浏览器查看输出：

发现控制台每隔一秒都会输出 list render，明明数据没有发生变化，但是 react 还是发生渲染，造成了不必要的渲染浪费。  
只需要在 shuoldComponentUpdate 里加上判断，再次查看输出结果，定时任务的数据没有发生改变，不会再渲染 render 函数：

```jsx
import {Component} from 'react'
export default class List extends Component {
  // 在shuoldComponentUpdate里判断props传递的数据没有发生变化，则不需要render
  shouldComponentUpdate(nextProps) {
    // 返回值为true则render，为false则不render
    if (nextProps.list.title === this.props.list.title) {
      return false;
    }
    return true;
  }
  render() {
    console.log("list render");
    return <div>{this.props.list.title}</div>;
  }
}
```

PureComponent 使用  
除了使用 shouldComponentUpdate 来判断是否需要更新组件，还可以用 PureComponent, PureComponent 实际上自动加载 shouldComponentUpdate 函数，当组件更新时，shouldComponentUpdate 对 props 和 state 进行了一层浅比较.

```jsx
// 新建PureComponentList组件，用PureComponent代替Component：
import React, { PureComponent } from "react";
export default class List extends PureComponent {
  render() {
    console.log("list render");
    return <div>{this.props.list.title}</div>;
  }
}

// 在App组件中传入：
this.state.data.map((item, index) => (
  <PureComponentList key={index} list={item} />
));
```

然后查看浏览器输出结果，惊奇地发生，`PureComponent` 并没有阻止不必要 render，这是为什么呢？因为前面我们说到 PureComponent 的 `shouldComponentUpdate` 只对 `props` 和 `state` 进行浅比较，也就是 `this.props = { list: { title: 'react line1' } }`，`nextProps = { list: { title: 'react line1' } }`，作浅比较的话 `this.props` 当然不等于 `next.props`.  
为了更清晰地找到原因，我们先来看看 `PureComponent` 的源码.

```jsx
// PureComponent源码
// 首先找到PureComponent这个函数，在构造函数和原型上分别继承了Component的属性和方法：
// export default function PureComponent(props, context) {
//     Component.call(this, props, context)
// }

// PureComponent.prototype = Object.create(Component.prototype)
// PureComponent.prototype.constructor = PureComponent
// PureComponent.prototype.shouldComponentUpdate = shallowCompare

// function shallowCompare(nexProps, nextState) {
//     return !shallowEqual(this.props, nextProps) || !shollowEqual(this.state, nextState)
// }

// 接着PureComponent在生命周期函数里面写了shallowCompare方法，shallowCompare里面通过shallowEqual的返回值来返回ture还是false.
// 接着来看看shallowEqual函数
export default function shallEqual(objA, objB) {
    // 从后面代码可以看出，对于两个对象的比较为这里的代码
    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    for (let i = 0; i < keysA.length; i++) {
        if (!objB.hasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}
```

从上面浅比较的源码 shallowEqual 函数可以看出，shallEqual 对于对象的比较仅仅通过 `if (objA === objB) { return true; }`来判断，而 `let a = { list: { title: 'react line1' } }`，`let b = { list: { title: 'react line1' } }`, a === b 值为 false，所以这就很好的解释了上面 PureComponent 并没有阻止不必要 render 的原因。  
所以我们来改进代码，使得 PureComponent 的 props 如果传入对象情况下应该如何起效：  
在 App.js 里面修改 PureComponentList 组件传入 item.title 而不是 item 对象，浏览器只输出两次 log：

```jsx
this.state.data.map((item, index) => (
  // <PureComponentList key={index} list={item}/>
  <PureComponentList key={index} title={item.title} />
));
```

通过解构 item 对象，传入 item.title，这样就可以进行浅比较，来达到优化不必要渲染的目的.  
PureComponent 原则  
由上面探究 PureComponent 源码我们知道，PureComponent 的组件在 props 或者 state 的属性值是对象的情况下，并不能阻止不必要的渲染，是因为自动加载的 shouldComponentUpdate 里面做的只是浅比较，所以想要用 PureComponent 的特性，应该遵守原则：

- 确保数据类型是值类型
- 如果是引用类型，不应当有深层次的数据变化(解构).

React.memo
在使用 PureComponent 的时候，只能把 react 组件写成是 class 的形式，不能使用函数的形式；react v16.6.0 之后，可以使用 React.memo 来实现函数式的组件，也有了 PureComponent 的功能。

```jsx
// List组件的PureComponent:
const ListComponent = React.memo(() => (
    <div>{this.props.data || 'loading'}</div>
))
```

参考：https://juejin.cn/post/6844903806170300423

## Immutable不可改变数据

react内存消耗太大  
使用虚拟dom，减少dom操作  
state的状态改变setState（）会将新的对象和老的对象进行合并  
redux中的defaultState全局状态的改变也是这，新的对象会替换老的对象  

Inmutable  
什么是不可改变数据  
不可改变数据就是一旦创建就不能被再次更改的数据，对immutable对象的任何添加删除修改，都会产生一个新的immutable对象，immutable的原理是持久化数据结构，
也就是使用旧数据创建新数据时，要保证旧数据的可用且不可变，同时为了避免深拷贝把所有节点都复制一遍带来的性能损耗，immutable使用了结构共享，
既对象树中只有一个节点发生变化，只修改这个节点和受他影响的父节点，其他的节点则进行共享  
Inmutable配合redux一起使用  


Inmutable语法
```jsx
1.immutable对象的创建
  const map1=Map({
       a:3,
       b:4,
  });
  // console.log(map1);//Map {size: 2, _root: ArrayMapNode, __ownerID: undefined, __hash: undefined, __altered: false}
2.toJS（）—— 方法可以以将immutable对象装换成普通对象
项目中不要使用toJS方法，仅仅调试的时候使用（因为immutable本来就是为了减少开销）
  // console.log(map1.toJS());//{a: 3, b: 4}

3.获取对象的属性
  // console.log(map1.get("a"));//3

4.修改对象的属性set
set方法用来生成一个新的对象，老的对象会一直存在且不变且可用
不可变数据 (Immutable Data )就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。
  // const map2=map1.set("a",10);
  // console.log(map2.toJS());//{a: 10, b: 4}
  // console.log(map1===map2);//false(map1里面的a已经改变地址了，那么他的父节点肯定改变了)
5.equals()——方法用于比较两个immutable对象里面的内容是否相同
  // console.log(map1.equals(map2));//false

如果改完之后的值是一样的，那么他们的地址还是一样的，整体也是一样的，如果改完之后，对象里面的值和原来的只要有一个是不一样的，那么他们的地址就不一样了，整体也会不一样
  // const map2=map1.set("a",3);
  // console.log(map1===map2);//true(map1里面的a的地址是一样的，b的地址是一样的，所以整体的地址是一样的)
  // console.log(map1.equals(map2));//true

  // const obj={
  //     a:3,
  //     b:4,
  // }
  // const map1=Map(obj);
  // const map2=Map(obj);
  // console.log(map1===map2);//false
  // console.log(map1.equals(map2));//true;

6.immutable数组的创建
  //   const list1 = List([1, 2, 3]);
  //   console.log(list1); //List {size: 3, _origin: 0, _capacity: 3, _level: 5, _root: null, …}
  //   console.log(list1.toJS()); //(3) [1, 2, 3]
  //   // size表示的是数组长度
  //   console.log(list1.size); //3
  //   const list2 = list1.push(3, 4, 5);
  //   const list3 = list2.unshift(0);
  //   const list4 = list1.concat(list2, list3);
  //   console.log(list4.toJS());

  //   const map1 = Map({
  //     a: 3,
  //     b: 4,
  //   });
  // 对象也可以使用map方法做遍历
  //   const map2=map1.map((value,key)=>{
  //       console.log(value);
  //       console.log(key);
  //       return value*value;
  //   })

对象和数组的合并
7.对象的合并merge（）
merge（）——方法可以做对象的合并,key相同的会覆盖
mergeDeep（）——方法表示深度合并
immutable对象是可以合并普通对象的(普通对象不能合并immutable对象)
  //   const map1 = Map({
  //     a: 3,
  //     b: 4,
  //     z: {
  //       x: 10,
  //       y: 20,
  //     },
  //   });
  //   const map2 = Map({
  //     c: 5,
  //     b: 6,
  //     z: {
  //       x: 30,
  //       w: 40,
  //     },
  //   });
  // const map3=map1.merge(map2);
  // const map3=map1.mergeDeep(map2);
  // const map3 = map1.merge({ name: "zhangsan" });
  // console.log(map3);

8.数组的合并
immutable数组也可以合并普通数组(普通数组也可以合并immutable数组)
  // const list1=List([1,2,3]);
  // const list2=List([4,5,6]);
  // const list3=list1.concat(list2);
  // console.log(list3);
  // console.log([1,2,3].concat(list1));

9.Seq方法既可以生成对象,也可以生成数组
Seq是有惰性的，用到什么再去计算什么
  //   const map1 = Seq({ a: 3, b: 4 });
  //   console.log(map1);
  //   const list1 = Seq([1, 2, 3]);
  //   console.log(list1);
  //  const oddSquares = Seq([1, 2, 3, 4, 5, 6, 7, 8])
  //     .filter((x) => {
  //       console.log("filter x:" + x);
  //       return x % 2 !== 0;
  //     })
  //     .map((x) => {
  //       console.log("map x:" + x);
  //       return x * x;
  //     });
  //   console.log(oddSquares.get(1)); // 1 2 3 3 9

10. fromJS和Seq方法一样,既可以生成对象,也可以生成数组
    fromJS可以递归的创建嵌套的immutable对象(或数组)
      //   const map1 = fromJS({
      //     a: 1,
      //     b: 2,
      //     c: {
      //       x: 10,
      //       y: 20,
      //     },
      //   });
      //   console.log(map1);

11.重要的方法六个
get,getIn,set,setIn,update,updateIn
  // const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });
  // const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });
  // console.log(nested2); //// { a: { b: { c: [3, 4, 5], d: 6 } } }
01..getIn方法用于深度地获取immutable对象的值
  // console.log(nested2.getIn(["a", "b", "d"])); //6
02.setIn方法用于深度地修改immutable对象的值
  // const nested3 = nested2.setIn(["a", "b", "d"], 10);
  // console.log(nested3.getIn(["a", "b", "d"])); //10
03.updateIn方法深度地修改immutable对象的值,第二个参数是一个函数,v表示d的值（依赖之前的值，及性能修改，多层）
  // const nested4 = nested2.updateIn(["a", "b", "d"], (v) => v + 1);
  // console.log(nested4.toJS());
04.update方法修改immutable对象的值,(update是依赖之前的值，进行修改，第一层)
set,setIN是不依赖之前的值,update,updateIn是依赖之前的值
```