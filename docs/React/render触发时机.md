类组件只要执行了 setState，就一定会触发 render 函数执行  
类组件可以使用 this.forceUpdate()强制更新  
函数组件 useState 会判断当前值有无发生改变而确定是否执行 render 函数，一旦父组件 render，子组件一定 render
