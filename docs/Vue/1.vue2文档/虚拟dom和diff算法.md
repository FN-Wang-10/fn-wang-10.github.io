## 虚拟 DOM

### 浏览器的渲染原理和流程

    1. 浏览器将获取的HTML文档解析成DOM Tree(DOM树)。
    2. 将CSS样式表，解析成CSSOM Tree(CSS树)。
    3. 将DOM和CSSOM合并为渲染树(rendering tree)，attachment
    4. 渲染树的每个元素经过精确的计算后，给出坐标，laylout。
    5. 将渲染树的各个节点绘制到屏幕上，painting。

### render Tree 是在 DOM 和 CSSOM 结束以后才开始构建的吗？

- 不是的。为了能够更快的显示页面，一边加载，一边解析，一边渲染。
- 不必等待整个 html 文档全部解析完毕后再渲染

### css 的解析顺序

- 逆向解析的，从 DOM 树的下往上解析的效率更高。所以嵌套标签越多，效率会越低

### js 操作 DOM 的代价

- 使用传统的 js 或者 jq 操作 dom 树的时候，浏览器会从执行整个流程。
- 尤其是当循环 10 次的时候，做第一次的时候，并不知道后面还有 9 次，每一次都会执行整个流程，甚至前九次都是无用功。可以通过 console.time 来比较
- 所以操作 DOM 的代价是昂贵的

### 为什么要使用虚拟 DOM

- 虚拟 DOM 是为了解决浏览器性能问题而被设计出来的。
- 比如有 10 次循环，虚拟 DOM 不会立即操作 DOM，而是将 10 次的 diff 内容保存在一个 js 对象里面，然后一次性的操作，避免大量无谓的计算
- 操作内存中的 js 对象的速度显然更快，等更新完后，再将最终的 js 对象映射成真实的 DOM，交由浏览器绘制。

### 真实 DOM 的实现

```javascript
<div id="app">
  <p>Real DOM</p>
  <div>cannot update</div>
  <ul>
    <li class="item">item1</li>
    <li class="item">item2</li>
    <li class="item">item3</li>
  </ul>
</div>
```

### 虚拟 DOM 的实现

创建虚拟 DOM

```javascript
const tree = Element("div", { id: "app" }, [
  Element("p", {}, ["Real DOM"]),
  Element("div", {}, ["cannot update"]),
  Element("ul", {}, [
    Element("li", { class: "item" }, ["item1"]),
    Element("li", { class: "item" }, ["item2"]),
    Element("li", { class: "item" }, ["item3"]),
  ]),
]);

const root = tree.render();
document.querySelector("body").appendChild(root);
```

映射成真实 DOM

```javascript
function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

Element.prototype.render = function () {
  var el = document.createElement(this.tagName); // 根据tagName构建
  var props = this.props;

  for (var propName in props) {
    // 设置节点的DOM属性
    var propValue = props[propName];
    el.setAttribute(propName, propValue);
  }

  var children = this.children || [];

  children.forEach(function (child) {
    var childEl =
      child instanceof Element
        ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
        : document.createTextNode(child); // 如果字符串，只构建文本节点
    el.appendChild(childEl);
  });

  return el;
};

export default function (tagName, props, children) {
  return new Element(tagName, props, children);
}
```

### diff 操作

数据改变，虚拟 DOM 也会改变
我们不想重新渲染 vdom，我们只想渲染改变的部分，就需要用到 diff 算法
两个树如果完全比较，时间复杂度是 O(n^3),Vue 的 Diff 算法的时间复杂度是 O(n),意味着只能平层的比较两棵树的节点，放弃了深度遍历。似乎牺牲了一定的精准性来换取速度，但考虑到前端页面通常不会跨层移动 DOM 元素，这样做是优先的

```
  采用了同级比较，只有count相同的children进行比较
  比较他们的key，进行增加，删除，替换，换位等操作
```

同级比较  
key 的对比
