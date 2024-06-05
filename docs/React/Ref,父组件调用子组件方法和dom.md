## 一.(类组件)不借助 ref 调用子组件方法

1. 在父组件中定义一个方法，将这个方法通过自定义属性传递给子组件，
2. 子组件在 componentDidMount 里面调用父组件传过来的方法，将子组件的 this 传到父组件中，就是将子组件的实例传到父组件中
3. 父组件接受 this,将 this 赋值给 this.child this.child=ref（这里的 ref 就是子组件传过来的 this，组建实例）
4. 父组件通过点击事件调用子组件的方法，this.child.sonFn()

## 二.(类组件)使用 createRef 调用子组件方法

1.在父组件中，定义一个 ipt,`ipt=createRef()`,将这个 `ipt` 加在子组件上，`ref={this.ipt} ` 
 这样就可以直接拿到子组件的实例了，通过 `this.ipt.current` 拿到子组件实例

## 三.(函数组件)使用 useRef 调用子组件方法

需要 useRef,useImperativeHandle,forwardRef  
步骤：

1. 在父组件中使用 useRef,产生的地址添加在子组件上
2. 子组件（函数组件）可以接受两个参数，props,ref
3. 在子组件中使用 useImperativeHandle，第一个参数就是接收到的 ref  
   第二个参数是一个回调函数，回调函数返回一个对象，将要调用的方法放在这个对象中
4. 将整个子组件使用 forwardRef 包裹住

## 四.(函数组件)使用 createRef 调用子组件方法

      需要useRef,useImperativeHandle,forwardRef

## 五.(函数组件)使用 useRef 获取子组件 dom,使用 createRef 也可以

      步骤和调用方法一样

( 类组件)使用 createRef 可以获取子组件 dom 节点

## 六.useRef 可以定义变量

uesRef 当作一个对象使用，可以传入一个参数，传入参数后，useRef 生成的这个对象就是传入的参数

获取方法

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

获取 dom

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

16 版本之前使用 refs
https://blog.csdn.net/Cassy_Wu/article/details/109785547?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165815158416780357225956%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=165815158416780357225956&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~pc_rank_34-1-109785547-null-null.142^v32^pc_rank_34,185^v2^control&utm_term=react16%E7%89%88%E6%9C%AC%E4%B9%8B%E5%89%8D%E8%8E%B7%E5%8F%96dom&spm=1018.2226.3001.4187

```jsx
import React, { Component } from "react";

class Example extends Component {
  constructor() {
    super();
    this.inputEle = null;
  }

  handleClick = () => {
    alert(this.inputEle.value);
  };

  render() {
    return (
      <>
        <input type="text" ref={(el) => (this.inputEle = el)} />
        <br />
        <button onClick={this.handleClick}>get input value</button>
      </>
    );
  }
}

export default Example;
```
