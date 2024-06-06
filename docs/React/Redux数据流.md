## Redux 的使用的三大原则

1. 唯一的数据源,只能有一个 state
2. 状态是只读的，在 redux 中的 state 是不能去改变的
3. 数据的改变必须通过纯函数完成

## 纯函数

1. 同步函数
2. 如果相同的入参，那么一定是相同的返回值
3. 不能改变入参

## 是一种管理状态

1. 打造 store -- 存储定义 state、管理 state
2. 打造 reducers，reducer 拷贝 state,并返回一个新的 state 给 store -- 定义修改后的数据
3. 通过 connect 高阶组件将 store 的数据取出来给了组件
4. 组件中触发动作激活 action
5. actionCreators 创建 action，action 激活 reducer
6. reducers 中修改数据

7. 组件中通过 `dispatch(dispatch({type:'add'},data))`调用 reducer 函数
8. reducer 函数分发 action，修改仓库状态

saga 中间件比 thunk 的逻辑清晰一点  
saga 中间件的执行流程  
我们在组件中调用通过 dispatch 调用 add 和 minus 函数，reducer 里面是没有的，它会先去执行 sagas 文件里面的 mySaga 函数  
takeEvery 方法就是用来监听 dispatch，第一个参数就是组件中 dispatch 的 type（add，minus）,监听到哪一个就会执行对应的回调函数（addAction,minusAction）  
put 就相当于组件中的 dispatch，用于调用 reducer 函数

saga 数据请求的流程  
我们在组件挂载完成的时候（useEffect）使用 dispatch 方法，然后它会去 saga 里面的 mySaga 函数进行匹配，匹配到之后执行对应的回调函数，  
我们在这个回调函数中通过 `yield call（（）=>{}）`进行数据请求，（因为 yield 和 async,await 一样，有一个等待的效果），拿到数据之后，将数据放到对调函数的 `put({type:"",payload})`里面,  
put 方法会调用 reducer 里面的函数（相当于之前没写 saga 时的组件的 dispatch），从而更新仓库的数据
