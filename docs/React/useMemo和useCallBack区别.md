## 相同点

1. useCallback 和 useMemo 都是用于缓存函数的
2. useCallback 和 useMemo 都是用于提高 react 函数组件的性能
3. useCallback 和 useMemo 都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行
4. 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据

## 不同点

1. 返回值不同  
   useCallback 返回的是缓存的函数体，useMemo 返回的是缓存的函数的返回值（相当于计算属性）
2. useMemo 当做计算属性使用（不用调用，当作属性使用）只有依赖发生改变才会重新执行  
   useCallback（当自定义事件传递给子组件的时候，只改变父组件自身的状态的情况下，子组件也会二次渲染，因为父组件 render 了，子组件也会 render,此时就可以用 useCallBack 将这个函数缓存起来，来阻止它二次渲染，来达到性能优化的作用）

## 什么时候使用 useCallback？

当这个函数要作为自定义事件或自定义属性进行传递的时候，就必须要加 useCallback（和性能优化相关）

## 什么时候使用 useCallMemo？

计算属性，功能性函数

改写  
用 useMemo 去改写 useCallback(useCallback 不能改写 useMemo)  
加一个 return，在回调函数中返回一个函数，将这个函数当作回调函数的返回值返回出去
