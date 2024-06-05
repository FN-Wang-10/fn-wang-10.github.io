代码层面

- lazy,Susponse(组件懒加载，路由懒加载),
- Immutable 结合 redux 使用（不可改变数据）,
- memo（高阶组件，和 PureComponent 一样，这是给函数组件用的）,
- PureComponent（给类组件用的，代替 shouldComponentUpdata 这个生命周期），
- shouldCOmponentUpdata（这否允许组件更新）
- useCallback(缓存函数，缓存的是函数体，一般自定义属性时使用，属性值是函数或者对象)
- useMemo（缓存组件，缓存的是函数的返回值，可以当作计算属性使用，）
- componentWIllUnmount(卸载阶段的生命周期，关闭定时器，WebSockets,卸载第三方插件，接触事件绑定)  
  类组件避免使用内联函数，尽量在组件内部创建函数，这样每次 render 时候就不会在创建一个新的函数  
  使用 React.Fragments 充当父组件  
  事件绑定方式：在 constructor 中使用 bind 和在定义阶段使用箭头函数，就只用生成一个方法实例，内联的使用 bind 和内联的使用箭头函数都会生成一个新的方法实例  
  封装组件时候，要添加 defaultProps,propsTypes  
  key  
  通过以上有些方式减少 render 的渲染  

工程层面  
框架层面
