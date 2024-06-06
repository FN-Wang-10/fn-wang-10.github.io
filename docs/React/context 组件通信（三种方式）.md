从 react 中解构 createContext 函数，执行这个函数会返回一个 context 对象,从 context 中可以解构出两个组件，Provider,Consumer  
`const [Provider,Consumer]=context`
Provider 是加在父组件的最外层，有一个 value 属性，一般为对象 `value={{  }}  `
Consumer 是在子组件或者孙组件中使用,Consumer 里面要写一个函数，函数返回一个 jsx  
`<Consumer>{(value)=><span>value.xxx</span>}</Consumer>`

1. React.createContext 提供的 Provider 和 Consumer
2. 函数组件：React.createContext 提供的 Provider 和 useContext 钩子
3. Class 组件：React.createContext 提供的 Provider 和 class 的 contextType 属性

## 1.React.createContext 提供的 Provider 和 Consumer

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

## 2.函数组件：React.createContext 提供的 Provider 和 useContext 钩子

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

## 3.Class 组件：React.createContext 提供的 Provider 和 class 的 contextType 属性

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
