react 中 JSX 的渲染原理  
JSX 通过 Babel 转换成 ReactElement(也就是 js 对象，虚拟 dom)，这一步主要是为了之后虚拟 dom 和真实 dom 进行比较，只更新改变的部分，减少性能消耗
由于浏览器在渲染的时候只识别（Html,css,js），不识别 jsx，因此需要将虚拟 dom 转换为真实的 dom（通过 ReactDom.render(<Component />,document.getElementById('root'))方法）

```jsx
render(){
	return (
		<div>
			<span className='text'>hello</span>
			<Component title='组件'></Component>
		</div>
	)
}
```

参数 1（type）：标签名/组件名（babel 通过首字母判断，小写为标签，大写为组件）  
参数 2（props）：标签/组件的属性  
参数 3（children）：嵌套内容或者文本

```jsx
render(){
	const element=React.createElement(
		'div',
		null,
		React.createElement(
			'span',
			{className:'text'},
			'hello',
		),
		React.createElement(
			Component,
			{title:'组件'},
			null,
		)
	)
	return element
}
```

其渲染流程如下所示：  
使用 React.createElement 或 JSX 编写 React 组件，实际上所有的 JSX 代码最后都会转换成 React.createElement(...) ，Babel 帮助我们完成了这个转换的过程。  
createElement 函数对 key 和 ref 等特殊的 props 进行处理，并获取 defaultProps 对默认 props 进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟 DOM 对象  
ReactDOM.render 将生成好的虚拟 DOM 渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实 DOM

参考：https://vue3js.cn/interview/React/JSX%20to%20DOM.html#%E4%BA%8C%E3%80%81%E8%BF%87%E7%A8%8B
