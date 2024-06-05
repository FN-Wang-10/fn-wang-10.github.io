redux-thunk  
创建一个 createAction.js 的文件  
在这个文件里面通过函数返回函数的形式做异步操作  
返回的这个函数可以接受一个 dispatch 参数（dispatch 就可以调用 reducer 中的方法）

redux-thunk  
redux 的异步  
使用 thunk 异步库

```jsx
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
thunk异步库用的不多;
```

操作  
index.js

```jsx
import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// 引入异步库
import thunk from "redux-thunk";
const store = legacy_createStore(reducer, applyMiddleware(thunk));
export default store;
```

createAction.js 文件

```jsx
// 动作创建者，写的是函数
export const addAction = (num) => {
  return {
    type: "add",
    payload: num,
  };
};
export const minusAction = (num) => {
  return (dispatch)=>{
    setTimeout(()=>{
        dispatch({type:"minus",payload:num})
    },2000)
  };
};
export const loadAction = () => {
  1.如果加了中间件，返回的就可以不是扁平化对象了，可以返回函数了
  2.这个函数可以接受一个dispatch参数
  3.中间件就是用来帮我们执行里面的函数的
  return (dispatch) => {
    fetch("http://www.pudge.wang:3080/api/rated/list")
      .then((response) => response.json())
      .then((res) => {
        dispatch({type:"load",payload:res.result})
      });
  };
};
```

使用

```jsx
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
