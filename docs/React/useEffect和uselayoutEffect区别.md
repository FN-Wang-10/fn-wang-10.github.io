**useLayoutEffect 是会优先于 useEffect 执行**  
**是在 componentDidMount 以后直接同步调用**  
官方建议使用 useEffect  
只有在变量要控制 css 样式的时候用，避免页面闪烁

1. **useEffect 是异步执行的，而 useLayoutEffect 是同步执行的**。    
2. **useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价**。  
useLayoutEffect 等同于 useEffect, 但它会在所有 dom 改变之后同步触发，使用 useLayoutEffect 可以读取 dom 的布局并且同步重新渲染。赶在浏览器绘制之前，useLayoutEffect 内部的更新将同步刷新；

简单来说就是调用时机不同，`useLayoutEffect`和原来`componentDidMount`&`componentDidUpdate`一致，在 react 完成 DOM 更新后马上**同步**调用的代码，会阻塞页面渲染。而`useEffect`是会在整个页面渲染完才会调用的代码。

如果你使用类组件，useLayoutEffect 会和 componentDidMount 、componentDidUpdate 在同一时机触发，但是官方推荐先使用 useEffect，只有使用 useEffect 出错的时候再尝试 useLayoutEffect;
