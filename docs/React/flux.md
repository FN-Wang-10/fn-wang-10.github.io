flux 是 react 中的类似于 vuex 的公共状态管理方案，它是 Facebook 官方给出的应用架构，利用数据的单向流动的形式对公共状态进行管理。现已不推荐使用。

## flux 的组成

    View：视图层
    Action：视图发出的消息
    Dispatcher：派发者，用来接收Action，执行回调函数
    Store：数据层，存放状态，一旦发生改动

## flux 在进行数据更新时，会经历以下几步：

    用户与 View 层交互，触发 Action
    Action 使用 dispatcher.dispatch 将Action自己的状态发送给dispatcher
    dispatcher 通过register注册事件，再通过Action传入的类型来触发对应的 Store 回调进行更新
    Store 里进行相应的数据更新，并触发 View 层事件使试图也同步更新
    View层 收到信号进行更新

## redux 和 flux 的区别

1. redux 是 flux 中的一个实现  
2. 在 redux 中我们只能定义一个 store，在 flux 中我们可以定义多个  
3. 在 redux 中，store 和 dispatch 都放到了 store，结构更加清晰  
4. 在 redux 中本身就内置 State 对象，对仓库的管理更加明确
