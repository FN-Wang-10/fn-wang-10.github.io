## 前言

> 在讲 BFC 之前，我们先来了解一下常见的定位方案，定位方案是控制元素的布局，有三种常见方案:
>
> 1. **普通流 (normal flow)**  
>    在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非>另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。
> 2. **浮动 (float)**  
>    在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。
> 3. **绝对定位 (absolute positioning)**  
>    在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

## 1.简介

BFC 中文简称(块状格式化上下文)，它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部

## 2.渲染规则

1. 内部元素从上往下依次排列
2. 垂直方向的距离由 margin 控制，相邻两个元素的 margin 会发生重叠，距离以大的为准
3. BFC 里面的元素的 margin-left 回和父元素的 border-left 相接触
4. BFC 区域不和浮动元素重叠
5. BFC 区域计算高度时，浮动元素参与计算
6. BFC 区域是一个独立的渲染区域，与外界毫不相干

## 3.触发条件

1. html 根元素;
2. 浮动元素：float 值为 left，right;
3. overflow 值不为默认值（visible）
   - visible 显示 默认值
   - hidden 隐藏
   - scroll 出现滚动条
   - auto 判断容器内容是否溢出，溢出展示滚动条
4. display 的值为
   - inline-block
   - inltable-cell
   - table-caption
   - table
   - inline-table
   - flex、inline-flex
   - grid、inline-grid
5. position 的值为
   - absolute
   - fixed

## 4.应用场景

1. 解决 margin 重叠问题
2. 清除内部浮动
3. 自适应多栏布局
4. 解决高度塌陷（给父元素添加 overflow：hidden，触发了 BFC）

**1. 解决 margin 重叠问题**

```html
<style>
  p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
  }
</style>
<body>
  <p>Haha</p>
  <p>Hehe</p>
</body>
```

页面显示如下：

![](https://static.vue-js.com/d0ce3650-9511-11eb-85f6-6fac77c0c9b3.png)

两个 p 元素之间的距离为 100px，发生了 margin 重叠（塌陷），以最大的为准，如果第一个 P 的 margin 为 80 的话，两个 P 之间的距离还是 100，以最大的为准。

前面讲到，同一个 BFC 的俩个相邻的盒子的 margin 会发生重叠

可以在 p 外面包裹一层容器，并触发这个容器生成一个 BFC，那么两个 p 就不属于同一个 BFC，则不会出现 margin 重叠

```html
<style>
  .wrap {
    overflow: hidden; // 新的BFC
  }
  p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
  }
</style>
<body>
  <p>Haha</p>
  <div class="wrap">
    <p>Hehe</p>
  </div>
</body>
```

这时候，边距则不会重叠：

![](https://static.vue-js.com/dec44740-9511-11eb-85f6-6fac77c0c9b3.png)

**2. 清除内部浮动**

```html
<style>
  .par {
    border: 5px solid #fcc;
    width: 300px;
  }

  .child {
    border: 5px solid #f66;
    width: 100px;
    height: 100px;
    float: left;
  }
</style>
<body>
  <div class="par">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</body>
```

页面显示如下：

![](https://static.vue-js.com/ec5d4410-9511-11eb-85f6-6fac77c0c9b3.png)

而 BFC 在计算高度时，浮动元素也会参与，所以我们可以触发.par 元素生成 BFC，则内部浮动元素计算高度时候也会计算

```html
.par { overflow: hidden; }
```

实现效果如下：

![](https://static.vue-js.com/f6487b20-9511-11eb-ab90-d9ae814b240d.png)

**3.自适应多栏布局**

这里举个两栏的布局

```html
<style>
  body {
    width: 300px;
    position: relative;
  }

  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: #f66;
  }

  .main {
    height: 200px;
    background: #fcc;
  }
</style>
<body>
  <div class="aside"></div>
  <div class="main"></div>
</body>
```

效果图如下：

![](https://static.vue-js.com/ffb95210-9511-11eb-ab90-d9ae814b240d.png)

前面讲到，每个元素的左外边距与包含块的左边界相接触

因此，虽然.aslide 为浮动元素，但是 main 的左边依然会与包含块的左边相接触

而 BFC 的区域不会与浮动盒子重叠

所以我们可以通过触发 main 生成 BFC，以此适应两栏布局

```html
.main { overflow: hidden; }
```

这时候，新的 BFC 不会与浮动的.aside 元素重叠。因此会根据包含块的宽度，和.aside 的宽度，自动变窄

效果如下：

![](https://static.vue-js.com/0a5f2690-9512-11eb-ab90-d9ae814b240d.png)

## 参考文献

- https://zhuanlan.zhihu.com/p/25321647
- https://vue3js.cn/interview/css/BFC.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF
