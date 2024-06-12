### display

- flex
- inline-flex(行内弹性盒，就是横着排)

### 1.flex-direction:（改变弹性盒主轴方向）

- row 水平方向从左到右排 **默认**
- column 垂直方向从上到下
- row-reverse 水平方向从右到左
- column-reverse 垂直方向从下到上

### 2.flex-wrap:（元素是否换行）

- nowrap 不换行 **默认**
- wrap 换行
- wrap-reverse 换行并且反向

### 3.flex-flow:flex-direction 和 flex-wrap 的简写

- `flex-flow: <flex-direction> || <flex-wrap>`;

### 4.justify-content:（项目在主轴方向的对齐方式）

- flex-start 从主轴的开始位置排列 **默认**
- center 在主轴的中间位置排列
- flex-end 在主轴的结束位置开始排列
- space-between 项目在容器两边没有间隙，中间平分
- space-around 项目在容器两边有间隙，中间的间隙是两边的 2 倍
- space-evenly 项目在容器两边有间隙，中间的间隙和两边的相同（平分间隙）

### 5.align-items:（项目在侧轴上的对其方式）

- stretch 拉伸自身以适应侧轴空间 **默认** 如果项目未设置高度或设为 auto，将占满整个容器的高度
- flex-start 在侧轴的开始位置排列
- center 在侧轴的中间位置排列
- flex-end 在侧轴的结束位置排列
- baseline 基线对齐

### 6.align-content：（多行子元素在侧轴上的对其方式（一定是多行）一定要换行）

- stretch 拉伸适应容器 **默认**
- flex-start 在侧轴的开始位置
- center 在侧轴的中间位置
- flex-end 在侧轴的结束位置
- space-between 项目在容器侧轴两边没有间隙，中间间隙平分
- space-around 项目在容器侧轴两边有间隙，中间的间隙是两边的 2 倍

一个元素设置弹性盒之后，子元素的浮动，清除浮动，vertical-align 失效  
弹性盒子里面的子元素会产生一个块级框，可以设置宽高

弹性盒子元素属性

### 7.align-self：(元素单独在侧轴的对齐方式)

- flex-start 项目单独在侧轴的开始位置
- flex-end 项目单独在侧轴的结束位置
- center 项目单独在侧轴的中间位置
- baseline 仙姑单独在侧轴的基线位置
- stretch 拉伸适应容器
- auto **默认** 找父元素 align-items 的属性，如果父元素 align-items 属性没有，设置为 stretch

### flex-grow：（项目在主轴的扩展比例）

- 对剩余空间进行分配，如果父元素没有剩余空间，不进行分配
- 0 不放大 **默认**
- 1 只能写数值

### flex-shrink: （元素收缩比率）

- 1 收缩 **默认**
- 0 不收缩

### flex-basis:（元素的基准值）

- auto **默认值**
- 0 会根据内容撑开  
  **弹性盒的子项目如果设置了 flex-basis,宽度有 flex-basis 决定**  
  如果 flex-basis 和 width 有一个 auto，宽度由另一个没有 auto 的决定  
  如果 flex-basis 和 width 都为 auto，宽度由内容撑开  
  (如设置了 width 则元素尺寸由 width/height 决定（主轴方向），没有设置则由内容决定)

### flex 简写

flex:flex-grow flex-shrink flex-basis

- auto: 1 1 auto
- 1: 1 1 0%
- 2: 2 1 0%
- none: 0 0 auto

## 一、是什么

`Flexible Box` 简称 `flex`，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局

采用 Flex 布局的元素，称为`flex`容器`container`

它的所有子元素自动成为容器成员，称为`flex`项目`item`

![](https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png)

容器中默认存在两条轴，主轴和交叉轴，呈 90 度关系。项目默认沿主轴排列，通过`flex-direction`来决定主轴的方向

每根轴都有起点和终点，这对于元素的对齐非常重要

关于`flex`常用的属性，我们可以划分为容器属性和容器成员属性

## 二、容器属性

容器属性有：

1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content

### 1.flex-direction

决定主轴的方向(即项目的排列方向)

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

属性对应如下：

- row（默认值）：主轴为水平方向，起点在左端
- row-reverse：主轴为水平方向，起点在右端
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿

如下图所示：

![](https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png)

### 2.flex-wrap

弹性元素永远沿主轴排列，那么如果主轴排不下，通过`flex-wrap`决定容器内项目是否可换行

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

属性对应如下：

- nowrap（默认值）：不换行
- wrap：换行，第一行在下方
- wrap-reverse：换行，第一行在上方

默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩

### 3.flex-flow

是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`(一般不用)

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### 4.justify-content

定义了项目在主轴上的对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

属性对应如下：

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等
- space-around：两个项目两侧间隔相等

效果图如下：

![](https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png)

### 5.align-items

定义项目在交叉轴上如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

属性对应如下：

- flex-start：交叉轴的起点对齐
- flex-end：交叉轴的终点对齐
- center：交叉轴的中点对齐
- baseline: 项目的第一行文字的基线对齐
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度

### 6.align-content

定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

属性对应如吓：

- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
- stretch（默认值）：轴线占满整个交叉轴

效果图如下：

![](https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png)

容器成员属性如下：

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

## 三、元素属性

以下属性是作用的容器内部元素上的。

1. order
2. flex-grow
3. flex-shrink
4. flex-basis
5. flex
6. align-self

### 1.order

order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。

```css
.item {
  order: <integer>;
}
```

![flex-24](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115728.png)

### 2.flex-grow

flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>;
}
```

- 都为 1 （等分剩余空间）
  ![flex-25](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115737.png)

- 中间为 2，其他两个为 1 （中间占据的剩余空间将比其他项多一倍。）
  ![flex-26](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115749.png)

### 3.flex-shrink

flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

- 都为 1 （默认值，均等缩小）
  ![flex-27](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115758.png)

- 前三个为 0，其余为默认值 1 （前三个保持宽度大小不变）
  ![flex-28](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129115806.png)

### 4.flex-basis

设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在`flex-grow`和`flex-shrink`生效前的尺寸

浏览器根据这个属性，计算主轴是否有多余空间，默认值为`auto`，即项目的本来大小，如设置了`width`则元素尺寸由`width/height`决定（主轴方向），没有设置则由内容决定

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

当设置为 0 的是，会根据内容撑开

它可以设为跟`width`或`height`属性一样的值（比如 350px），则项目将占据固定空间

### 5.flex

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`，也是比较难懂的一个复合属性

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" >];
}
```

一些属性有：

- flex: 1 = flex: 1 1 0%
- flex: 2 = flex: 2 1 0%
- flex: auto = flex: 1 1 auto
- flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩

`flex:1` 和 `flex:auto` 的区别，可以归结于`flex-basis:0`和`flex-basis:auto`的区别

当设置为 0 时（绝对弹性元素），此时相当于告诉`flex-grow`和`flex-shrink`在伸缩的时候不需要考虑我的尺寸

当设置为`auto`时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑

注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

### 6.align-self

允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性

默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

效果图如下：

![](https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png)

## 三、应用场景

### 1. 阿语布局

在一些从右往左的布局中，如阿语下，用 flex 布局可自动转换位置。相反，用 position 定位和 float 浮动都不能自动排列，都需要再重新判断语言，重写定位方式。

### 2. 圣杯布局（双飞翼）

```css
.container {
  display: flex;
  padding: 5px 5px;
  width: 760px;
  height: 120px;
  box-sizing: border-box;
  background-color: gainsboro;
}
.item {
  display: flex;
  margin: 5px 5px;
  width: 500px;
  height: 100px;
  background-color: gray;
}
.item:nth-child(2) {
  flex-shrink: 0; // 不缩小
}
```

## 参考文献

- https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
- http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
