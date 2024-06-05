1. redux 可以理解成一个框架，他和 react 配合使用，就是将 react 作为 redux 的视图层
2. react-redux 就是 react 和 redux 之间的粘合剂

redux 是独立的应用状态管理工具。它是可以独立于 react 之外的。如果我们需要在 react 当中运用它，那么我们需要手动订阅 store 的状态变化，来对我们的 react 组件进行更新。react-reudx 这个工具，就帮我们实现了这个功能，我们只需对 store 进行处理，react 组件就会有相应的变化。

Redux 的核心由三部分组成：Store, Action, Reducer。  
Store: 是个对象，贯穿你整个应用的数据都应该存储在这里。  
Action: 是个对象，必须包含 type 这个属性，reducer 将根据这个属性值来对 store 进行相应的处理。除此之外的属性，就是进行这个操作需要的数据。  
Reducer: 是个函数。接受两个参数：要修改的数据(state) 和 action 对象。根据 action.type 来决定采用的操作，对 state 进行修改，最后返回新的 state。

总结  
Redux: store, action, reducer  
store: getState, dispatch, subscribe  
combineReducers  
createStore  
store ️ dispatch ️ action ️ reducer

react-redux:  
connect : 将 store 作为 props 注入  
provider(破外的): 使 store 在子孙组件的 connect 中能够获取到
