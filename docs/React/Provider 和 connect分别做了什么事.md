react-redux 是给 react 项目提供的状态提升和分发的简化操作 api=>Provider+connect。  
通过最外层 Provider 组件开启 context，将全局 store 内容打进去；通过 connect 高阶组件获取 store 内容，并将其打入到参数组件的 props 中； 上述两者完成了状态提升到全局和状态分发。

1. 从 react-redux 中解构 Provider 组件，套在 App 组件的外面，Provider 组件有一个 store 属性
2. 引入仓库实例，把仓库实例作为 Provider 组件的 store 属性的属性值  
   组件使用仓库
3. 从 react-redux 中 解构 connect 函数  
   `import {connect} from "react-redux"`
4. connect 函数执行需要两个参数，都是纯函数（mapStateToProps,mapDispatchToProps）  
   connect 函数执行会返回一个高阶组件  
   mapStateToProps ———— 将仓库中的数据映射到组件的 props 中  
   mapDispatchToProps ———— 将仓库中的方法映射到组件的 props 中

mapStateToProps

```jsx
// 第一个函数是将仓库的state的数据映射到组建的props里面去(这个函数可以接受一个state参数，state就是仓库中的state)
// 这个函数会返回一个对象，这个对象会映射到组件的props中去，这时组件的props里面就会有个count，这个count会和仓库中的state中的count保持一致（仓库中的state中的count直接映射到组建的props的count，这样它们两者就能保持一致了，仓库中的count就是组件中的props的count了，组件就可以直接使用了）
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
```

mapDispatchToProps

```jsx
// 第二个参数是将仓库的dispatch函数映射到组件的props里面去（dispatch就是派发改变仓库数据的函数的）
// 这个函数可以接受一个参数是dispatch，就是仓库下的dispatch方法
// 这个函数也会返回一个对象，这个对象会映射到组件的props中去，这时组件的props里面就会有add了，这个add会和仓库中的dispatch中的increment保持一致（仓库中的dispatch中的increment直接映射到组建的props的add，这样它们两者就能保持一致了，仓库中的increment就是组件中的props的add了，组件就可以直接使用了）
const mapDispatchToProps = (dispatch) => {
  return {
    add: (num) => {
      // dispatch({type:"increment",num});
      dispatch(addAction(num));
    },
    minus(num) {
      // dispatch({type:"decrement",num});
      dispatch(minusAction(num));
    },
    load() {
      dispatch(loadAction());
    },
  };
};
```

直接将仓库引到组件中是没有响应式的  
有响应式的做法  
根组件

```jsx
// 1. 从react-redux中解构Provider组件，套在App组件的外面，Provider组件有一个store属性
// 2. 引入仓库实例，把仓库实例作为Provider组件的store属性的属性值
import store from "./.....";
<Provider store={store}></Provider>;
// 使用仓库
// 从react-redux中 解构connect函数
import { connect } from "react-redux";
// 4.connect函数执行需要两个参数，都是纯函数（mapStateToProps,mapDispatchToProps）
// connect函数执行会返回一个高阶组件
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
`@connect(mapStateToProps，mapDispatchToProps)`，要写在类组件的上面，不能分开  
如果只使用一个参数，要写为 null，  
`@connect(null，mapDispatchToProps)`  
将仓库中的数据映射到组件的 props 中  
将仓库中的方法映射到组件的 props 中  
使用的时候直接 this,props.count this.props.xxx  
这样写这个仓库的数据就有响应式了

redux 的异步

```jsx
// 使用thunk异步库
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
