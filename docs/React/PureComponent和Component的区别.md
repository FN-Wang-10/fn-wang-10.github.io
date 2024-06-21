**PureComponent 与 Component 几乎完全相同，但 PureComponent 通过 prop 和 state 的浅对比来实 shouldComponentUpate()。**  
　　如果 React 组件的 render() 函数在给定相同的 props 和 state 下渲染为相同的结果，在某些场景下你可以使用 PureComponent 来提升性能。  
　　 React.PureComponent 的 shouldComponentUpdate() 只会对对象进行浅对比。如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断(表现为对象深层的数据已改变视图却没有更新, 原文：false-negatives)。当你期望只拥有简单的 props 和 state 时，才去继承 PureComponent ，或者在你知道深层的数据结构已经发生改变时使用 forceUpate() 。或者，考虑使用 不可变对象 来促进嵌套数据的快速比较。  
　　此外,React.PureComponent 的 shouldComponentUpate() 会忽略整个组件的子级。请确保所有的子级组件也是”Pure”的。

PureComponent 的作用：  
 PureComponent 其实是在内部帮我们简单实现了一下 shouldComponentUpdate 的功能，以便提供组件的性能；这里的简单指是：对 prop 和 state 做浅比较，若浅比较结果相同，则该组件以及其子组件不做 render；否则，render。

使用 PureComponent 注意事项：  
 PureComponent 主要针对 prop 和 state 为基本数据类型，如 bool、string、number；  
 对于数组和对象等引用类型，则要引用不同，才会渲染；如果引用相同，则 PureComponent 浅比较返回结果相同，不做 render；  
 PureComponent 中不建议再另外重写 shouldComponentUpdate 方法，否则会报 warning 信息：  
 PureComponent 的最好作为展示组件，如果 prop 和 state 每次都会变，PureComponent 做浅比较也会影响性能，可以考虑直接用 Component；  
 对于 prop 和 state 数据结构比较复杂的情况，可以考虑自己重写 shouldComponentUpdate 方法来做优化；  

**PureComponent 其实就是一个继承自 Component 的子类，会自动加载 shouldComponentUpdate 函数。当组件需要更新的时候，shouldComponentUpdate 会对组件的 props 和 state 进行一次浅比较。如果 props 和 state 都没有发生变化，那么 render 方法也就不会触发，当然也就省去了之后的虚拟 dom 的生成和对比，在 react 性能方面得到了优化。**
