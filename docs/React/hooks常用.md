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

## useState

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

## useEffect

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

## useCallBack

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

## useMemo

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

## useContext

useContext 主要是用于简化 context 下面的 Consumer 的接收的  
只是简化接收，传递 Provider 还是不变的  
使用 useContext,createContext 还是必须要有的  
useContext 函数需要接受 context 对象作为参数，并且可以返回出 context 对象里面传过来的 value 属性（value 是一个对象）  
useContext 用的也不多，如果是一组传参的话直接就用 context 了，有的时候跨组件传参用全局状态管理（redux）了  
`const value=useContext(context1); `
`const {name}=useContext(context1);`直接解构

## useReducer

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

## useRef

useRef 的作用和非受控组件中的 createRef 几乎相同（createRef 函数执行以后会返回一个内存的地址）  
1.创建变量是没有响应式的，并且这个变量可以规避 React Hooks 中 Capture Value 特性（捕获值）  
2.可以用于获取 dom

我们通过下面的 2,3 例子得出在函数组件内部和子组件上使用 ref 是不同的  
1.如果要在函数内部使用，那就直接创建后挂 ref 属性给 react 元素就行了。  
2.如果要在子组件上使用，除了上面的步骤，还需要使用 forwardRef 把子组件的函数包起来，然后再传入第二个参数 ref，最后挂载 ref 就可以正常取到 DOM 了。

### 1.创建变量，没有响应式

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

### 2.获取 dom

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

### 3.子组件上使用 ref

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

## forWardRef

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

## useImperativeHandle

1. 父组件获取子组件 dom
2. 父组件调用子组件方法  
   结合 useRef/createRef,forwardRef 一块使用

### 获取方法

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

### 获取 dom

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

## useLayoutEffect

useLayoutEffect 是会优先于 useEffect 执行  
是在 componentDidMount 以后直接同步调用  
官方建议使用 useEffect  
只有在变量要控制 css 样式的时候用，避免页面闪烁

### useEffect 和 useLayoutEffect 有什么区别?

1. useEffect 是异步执行的，而 useLayoutEffect 是同步执行的。
2. useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价。  
   useLayoutEffect 等同于 useEffect, 但它会在所有 dom 改变之后同步触发，使用 useLayoutEffect 可以读取 dom 的布局并且同步重新渲染。赶在浏览器绘制之前，useLayoutEffect 内部的更新将同步刷新；  
   如果你使用类组件，useLayoutEffect 会和 componentDidMount 、componentDidUpdate 在同一时机触发，但是官方推荐先使用 useEffect，只有使用 useEffect 出错的时候再尝试 useLayoutEffect;  
   简单来说就是调用时机不同，`useLayoutEffect`和原来`componentDidMount`&`componentDidUpdate`一致，在 react 完成 DOM 更新后马上**同步**调用的代码，会阻塞页面渲染。而`useEffect`是会在整个页面渲染完才会调用的代码。  
   官方建议优先使用`useEffect`

## 自定义 hooks

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
`const count=useSelector(state=>state.city.count)`;  
dispatch 就是用来调用改变仓库变量的方法的  
`const dispatch=useDispatch()`;  
useSelector —— 获取仓库的值  
useDispatch —— 调用仓库的函数  
为了方便获取仓库的值和调用仓库的函数

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

### useNavigate(v6)

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
