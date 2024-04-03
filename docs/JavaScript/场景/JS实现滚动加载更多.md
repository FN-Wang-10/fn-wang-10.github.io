---
tags:
  - 滚动加载
---

## 一、scroll 计算

思路：通过滚动条判断是否到内容底部 => 到底部后向后台请求下一页得数据 => 将请求得新数据拼接在老数据上

三个关键点：

1. 滚动条距离顶部的距离：`document.documentElement.scrollTop`||`document.body.scrollTop`
2. 当前窗口内容的可视区域：`document.documentElement.clientHeight` || `document.body.clientHeigh`
3. 滚动条内容的总高度：`document.documentElement.scrollHeight`||`document.body.scrollHeight`

需要注意的是，实际上，在 js 代码里，滚动条是被抽象为一个“点”来对待的。`scrollHeight`其实不是“滚动条的高度”，而是表示滚动条需要滚动的高度，即内部所有 li 的高度。而`scrollTop`表示滚动条（一个点）当前的位置在素有`li`高度里占了多少

_项目实例_

```javascript
let dataListDOM = document.getElementById('listUlContainer');

//  获取滚动内容父级元素，即容器
DOMdataListDOM.addEventListener('scroll', () => {
  let clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  let scrollTop = dataListDOM.scrollTop;
  let scrollHeight = dataListDOM.scrollHeight;

  if (clientHeight + scrollTop >= scrollHeight) {
    setTimeout(() => {
      loadMoreData();
    }, 200);
  }
});
```

## 二、IntersectionObserver

在`IntersectionObserver`出世之前，要实现一个懒加载一般都需要大量计算 scroll，这会引发性能问题，于是在 2016 年初，chrome51 率先提供了一个新的 API，即`IntersectionObserver`，它可以用来监听元素是否进入了设备的可视区域之内，而不需要频繁的计算来做这个判断。但是这毕竟是一个新兴 API，所以各个浏览器 对其支持不太友好。[点此查看各个浏览器对 intersectionObserver 的支持情况](https://caniuse.com/#search=IntersectionObserver)

正因为浏览器对该方法支持不太好，所以要想试用此方法最好加一个垫片，[地址在此](https://github.com/w3c/IntersectionObserver/blob/master/polyfill/intersection-observer.js)

有一点要记住：`IntersectionObserver` 不是完美精确到像素级别，也不是低延时性的，它是异步的。 使用它实现类似依赖滚动效果的动画注定会失败，因为回调函数被调用的时候那些数据——严格来说——已经过期了。

调用：

```javascript
var observer = new IntersectionObserver(callback, options);
```

- `callback`: 当被监听元素的可见性变化时，触发的回调函数
- `options`: 配置参数，可传可不传，有默认属性值

下面先来看一个官方示例代码：

```javascript
//初始化一个实例
var observer = new IntersectionObserver(
  (entries) => {
    for (const entrie of entries) {
      console.log(entrie.target);

      // 被观察的目标元素，是一个 DOM 节点对象
      console.log(entrie.intersectionRatio); // 目标元素的可见比例，完全可见时为1，完全不可见时小于等于0
      console.log(entrie.time); // 当可视状态变化时，状态发送改变的时间戳
      console.log(entrie.rootBounds); // 根元素的矩形区域信息，即为getBoundingClientRect方法返回的值
      console.log(entrie.boundingClientRect); // 目标元素的矩形区域的信息
      console.log(entrie.intersectionRect); // 目标元素与视口（或根元素）的交叉区域的信息
    }
  },
  { options }
);

// 对元素target添加监听，当target元素变化时，就会触发上述的回调
observer.observe(target);

// 移除一个监听，移除之后，target元素的可视区域变化，将不再触发前面的回调函数
observer.unobserve(target);

// 停止所有的监听
observer.disconnect();

options.root; // 所监听对象的具体祖先元素(element)。如果未传入任何值或值为null，则默认使用viewport。
options.rootMargin; // 计算交叉时添加到根(root)边界盒bounding box的矩形偏移量， 可以有效的缩小或扩大根的判定范围从而满足计算需要。默认值为"0px 0px 0px 0px"。
options.thresholds; // 一个包含阈值的list, 升序排列, list中的每个阈值都是监听对象的交叉区域与边界区域的比率。当监听对象的任何阈值被越过时，都会生成一个通知(Notification)。如果构造器未传入值, 则默认值为0.
```

## 三、滚动加载示例

当实现列表滚动加载时，可在列表最后拼接一个元素（假设 id 为 observer-dom），然后监听该元素，当离开页面或者不再需要滚动加载时可移除监听。

```javascript
var observe = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio > 0) {
    loadMoreData();
  }
}, {});

observe.observe(document.getElementById('observer-dom'));
```
