真实的 dom,我们每一次更改数据或者标签，这个 dom 树都会重新渲染

## 虚拟 dom

将一个 html 片段，转换成 js 对象，保存浏览器在内存中，这个 js 对象就是一个虚拟的 dom 树，第一次先把虚拟 dom 转换成真实 dom，渲染到页面，每当数据发生改变时，react 都会重新构建整个 dom 树，然后 react 会将当前 dom 树和上一次的 dom 树进行对比(通过 diff 算法进行对比)，得到 dom 结构的区别，然后仅仅将改变的部分转换成真实的 dom，实际上修改的是 js 对象的变量，渲染进页面中，可以提高渲染效率

虚拟 dom 是什么  
 所谓的虚拟 dom，也就是虚拟节点。它通过 JS 的 Object 对象模拟 DOM 中的节点，然后再通过特定的 render 方法将其渲染成真实的 DOM 节点  
 用 js 模拟一颗 dom 树,放在浏览器内存中。当你要变更时,虚拟 dom 使用 diff 算法进行新旧虚拟 dom 的比较,将变更放到变更队列中,反应到实际的 dom 树,减少了 dom 操作。

## 虚拟 dom 的使用基本流程（前四步骤）

- 获取数据
- 创建虚拟 dom
- 通过 render 函数解析 jsx，将其转换成虚拟 dom 结构
- 将虚拟 dom 渲染成真实 dom
- 数据更改了
- 使用 diff 算法比对两次虚拟 dom,生成 patch 对象
- 根据 key 将 patch 对象渲染到页面中改变的结构上，而其他没有改变的地方是不做任何修改的(虚拟 dom 的惰性原则)

## 虚拟 DOM 的优点：

只渲染修改的部分，可以提高渲染效率
无须手动操作 dom

## 虚拟 DOM 的缺点：

首次渲染的时候，因为多了一层虚拟 dom，会比真实 dom 渲染的慢一点
无法进行极致优化

Real DOM Virtual DOM

## 真实 dom 和虚拟 dom 的区别？

1. 虚拟 dom 不会进行排版与重绘操作，虚拟 dom 就是把真实 DOM 转换为 javaScript 代码  
2. 虚拟 dom 进行频繁修改，然后一次性比较并修改真实 DOM 中需要修改的部分，最后真实 DOM 进行排版重绘，减少节点排版与重绘损耗
