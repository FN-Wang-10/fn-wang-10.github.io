render  
支持返回这五类:  
React elements, 数组, Fragments, Portal, String/numbers, boolean/null, 基础数据类型

Fiber  
React Fiber 的方法其实很简单——分片。把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。

新的生命周期函数  
由于异步渲染的改动，componentWillMount, componentWillReceiveProps,componentWillUpdate 三个函数将被废弃。  
由于这是一个很大的改变会影响很多现有的组件，所以需要慢慢的去改。  
目前 react 16 只是会报 warning，在 react 17 就只能在前面加 UNSAFE\_的前缀来使用

diff 算法  
作用: 计算出 Virtual DOM 中真 正变化的部分，并只针对该部分进行原生 DOM 操作，而非重新渲染整个页面

getDerivedStateFromProps  
static getDerivedStateFromProps(props, state)在调用 render 方法之前调用，  
无论是在初始安装还是后续更新。它应返回一个对象来更新状态，或者返回 null 以不更新任何内容。

根据 props 更新 state  
这个生命周期可用于替代 componentWillReceiveProps

getSnapshotBeforeUpdate()  
getSnapshotBeforeUpdate(prevProps, prevState)在最近呈现的输出被提交到例如 DOM 之前调用。它使组件可以在可能更改之前从 DOM 捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给 componentDidUpdate()。

hooks

lazy、suspense  
lazy 需要跟 Suspence 配合使用。  
lazy 实际上是帮助我们实现代码分割的功能。

由于有些内容，并不一定要在首屏展示，所以这些资源没有必要一开始就要去获取，那么这些资源就可以动态获取。  
这样的话，相当于把不需要首屏展示的代码分割出来，减少首屏代码的体积，提升性能。

Suspence 很像 Error Boundary，不同的是 Error Boundary 是用来捕获错误，显示相应的 callback 组件。而 Suspence 是用来捕获还没有加载好的组件，并暂停渲染，显示相应的 callback。
