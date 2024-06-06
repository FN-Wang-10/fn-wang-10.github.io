dva 中引用了 redux-saga 中间件， 它提供了 effect 函数来处理副作用。完整链路是： dispatch 一个 action，触发 effect 函数执行副作用，然后再触发 reducer 去更新 store。基于 generator 函数实现的。  
**redux-saga 是 redux 的中间键，提供了 effect 函数功能。**

​ **为什么要用它？**  
因为有时候我们期望 dispatch 一个 action 后，先处理一些业务逻辑(也称之为副作用)，比如发送请求获取数据然后将数据更新到 store，但 reducer 是纯函数，无法在 reducer 内使用副作用代码(比如不能在 reducer 里面去请求)。  
​ 那么我们可以用 redux-saga 中间键去扩展 redux 的功能，提供一个 effect 函数。  
​ 这样就可以，dispath 一个 action => 触发 effect 执行副作用业务逻辑 => 然后触发 reducer 传入数据 => 更新 store

redux-saga  
基于 generator 函数实现的。  
saga 中间件比 tunk 的逻辑清晰一点  
saga 中间件的执行流程  
我们在组件中调用通过 dispatch 调用 add 和 minus 函数，reducer 里面是没有的，它会先去执行 sagas 文件里面的 mySaga 函数  
takeEvery 方法就是用来监听 dispatch，第一个参数就是组件中 dispatch 的 type（add，minus）,监听到哪一个就会执行对应的回调函数（addAction,minusAction）
put 就相当于组件中的 dispatch，用于调用 reducer 函数

saga 数据请求的流程 ⭐  
我们在组件挂载完成的时候（useEffect）使用 dispatch 方法，然后它会去 saga 里面的 mySaga 函数进行匹配，匹配到之后执行对应的回调函数，  
我们在这个回调函数中通过 `yield call（（）=>{}）`进行数据请求，（因为 `yield` 和 async,await 一样，有一个等待的效果），拿到数据之后，将数据放到对调函数的 `put({type:"",payload})`里面,  
put 方法会调用 reducer 里面的函数（相当于之前没写 saga 时的组件的 dispatch），从而更新仓库的数据

模块化  
一个项目可能很多地方要用到全局仓库中的数据，会导致仓库中的数据非常多，redux 就会非常大  
我们实际开发中可以写成模块化的方式  
不管是哪一种仓库管理工具仓库的 state 永远只能有一个

小仓库  
store 下面 —— reducer.js & sagas.js  
哪个页面用到仓库数据，就可以在这个页面里面建一个 store 文件(里面只写两个文件，reducer.js 和 sagas.js，reducer.js 文件里面写这个页面用到的 defaultState 和 reducer 函数，sagas.js 文件里面使用 generator 函数，通过中间件去调用仓库中的方法，同时也是在这个文件里面做数据请求的),小仓库中不用创建仓库实例、

sagas.js —— sagas 文件里面全部使用 generator 函数，（在组件调用的 dispatch 以后，不会直接去找 reducer，而是来执行 mySaga，takeEvery 用来监听组件中调用的 dispatch，call 就是用来请求数据的，yield 和 async,await 一样，有一个等待的效果，put 相当于组件里面的 dispatch，用于调用 reducer 函数  
）

```jsx
import {takeEvery,put,call} from "redux-saga/effects"
import {movieApi} from "../../../utils/api";
function* addAction(这里是可以接受参数的，就是组件中dispatch调用时闯过来的参数，将这个参数在传给reducer){
    // put相当于组件里面的dispatch，用于调用reducer函数
    yield put({type:"increment"});
}
function* minusAction(){
    yield put({type:"decrement"});
}
function* loadAction(){
    // yield和async,await一样，有一个等待的效果
    // saga里面，call就是用来请求数据的
    const res=yield call(()=>{
        return movieApi();
    })
    console.log(res);
    yield put({
        type:"load",
        payload:res.result,
    });
}
function* mySaga(){
    // takeEvery用来监听组件中调用的dispatch
    // 在组件调用的dispatch以后，不会直接去找reducer，而是来执行mySaga
    // takeEvery用来分配type属性，分配到了就会直接执行第二个回调函数
    yield takeEvery("add",addAction);
    yield takeEvery("minus",minusAction);
    yield takeEvery("loadDate",loadAction);
}
export default mySaga;
```

reducer.js —— 定义 state 和 reducer 函数

```jsx
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

```jsx
index.js —— 创建仓库实例，引入rootReducer.js文件，rootSagas.js文件
// applyMiddleware是中间件,用于做redux的异步
import {legacy_createStore as createStore,applyMiddleware} from "redux";
// 引入saga异步库
import createSagaMiddleware from 'redux-saga'
// 引入reducer文件
import rootReducer from "./rootReducer";
// 引入sagas文件(代替了之前的thunk中间件异步请求的那个actionCreator.js文件)
import rootSagas from './rootSagas';
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()
// applyMiddleware里面传入的是saga的执行结果
const store =createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas)
export default store;
```

rootReducer.js 文件——是将项目中所有的小仓库中的 reducer 合并成一个大的 reducer（使用 combineReducers）

```jsx
import { combineReducers } from "redux";
// 引入小的reducer
import cityReducer from "../pages/city/store/reducer";
const rootReducer = combineReducers({
  city: cityReducer,
});
```

rootSagas.js 文件 —— 是将项目中所有的小仓库中的 sagas 合并成一个大的 sagas（使用 all 方法）

```jsx
import { all } from "redux-saga/effects";
// 引入city页面的sagas
import citySagas from "../pages/city/store/sagas";
function* rootSagas() {
  // all用来合并sagas
  yield all([citySagas()]);
}
export default rootSagas;
```
