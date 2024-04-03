---
tags:
  - width
  - height
  - clientWidth
  - clientHeight
  - innerWidth
  - innerHeight
---

在`JavaScript`中存在各种宽高属性，如`height`, `clientHeight`, `innerHeight`,`outerHeight`等等，那么它们究竟有什么区别呢？

在了解这些属性的区别之前，我们需要先来了解`window`和`document`的区别：

## 一、`window`和`document`

- `Window`对象表示浏览器打开的窗口，调用`window`对象上的方法可以省略`window`，如`console.log()`, `alert`等；
- `Document`对象是`Window`对象的一部分，浏览器的`HTML`文档成为`Document`对象。
- `window`对象的`location`属性引用的是`Location`对象，表示该窗口中当前文档的`URL`，`document`的对象的`location`属性也是应用了`Location`对象

```javascript
window.location === document.location; // true
```

## 二、`window`上的宽高

### 1. 各属性含义

- `window.innerWidth`：浏览器内`html`可见区域的宽度；
- `window.outerWidth`：浏览器整个窗口，包括滚动条的宽度；
- `window.innerHeight`：浏览器内`html`可见区域的高度；
- `window.outerHeight`：浏览器整个窗口，包括`tab`栏的高度；

需要注意的是`innerHeight`和`outerHeight`是不支持`IE9以下的浏览器的`。

### 2. 验证

下面是我电脑屏幕分辨率宽高：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310131022.png](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310131022.png)

以下是我电脑`chrome`浏览器全屏时各个属性的值：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310131712.png](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310131712.png)

## 三、`window.screen`上的宽高

挂载在`window`上的还有`screen`属性，`window.screen`包含有关用户屏幕的一些信息。

### 1. 各属性含义

- `window.screen.width`：用户整个屏幕宽度，与当前浏览器大小无关；
- `window.screen.height`：用户整个屏幕高度，与当前浏览器大小无关；
- `window.screen.availWidth`：当前`window`窗口可用宽度，即浏览器在屏幕上所占宽度；
- `window.screen.availHeight`：当前`window`窗口可用高度，即浏览器在屏幕上所占高度；
- `window.screenLeft`：浏览器窗口距用户屏幕左侧距离；
- `window.screenTop`：浏览器窗口距用户屏幕顶部距离；

### 2. 验证

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310134020.png](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210310134020.png)

WX20210310-132749@2x

## 四、`document`上的宽高

`document`下有三类属性：`client`,`offset`和`scroll`。

### 1. `document.client`

- `document.body.clientWidth`：元素可视部分的宽度，即`padding+content`;
- `document.body.clientHeight`：元素可视部分的高度，即`padding+content`;

如果没有滚动条，即为元素设定的宽度和高度，如果有滚动条，滚动条会遮盖元素的宽高，即为本来的宽高减去滚动条的宽高。

```css
body {
  border: 20px solid #000;
  margin: 10px;
  padding: 40px;
  background: #eee;
  height: 350px;
  width: 500px;
  overflow: scroll;
}
```

```javascript
console.log(document.body.clientHeight);
//430（padding*2+height）

console.log(document.body.clientWidth);
//580（padding*2+width）
```

- `document.body.clientLeft`：返回元素周围边框的宽度；
- `document.body.clientTop`：返回元素周围边框的高度；

如果不指定一个元素的边框或者定位该元素，则这个值一直为 0；

```css
body {
  border: 20px solid #000;
  margin: 10px;
  padding: 40px;
  background: #eee;
  height: 350px;
  width: 500px;
  overflow: scroll;
}
```

```javascript
console.log(document.body.clientLeft); //20
console.log(document.body.clientTop); //20
```

### 2. `document.offset`

- `document.body.offsetWidth`
- `document.body.offsetHeight`

这两个属性是`content+padding+border`的宽度和高度。这里需要注意，如果有滚动条的话还需要加上滚动条的宽高，不是减去。

```css
body {
  border: 20px solid #000;
  margin: 10px;
  padding: 40px;
  background: #eee;
  height: 350px;
  width: 500px;
  overflow: scroll;
}
```

```javascript
console.log('offsetWidth=', document.body.offsetWidth);
//620（width+margin*2+padding*2+border*2）

console.log('offsetHeight=', document.body.offsetHeight);
//470（width+margin*2+padding*2+border*2）
```

- `document.offsetLeft`
- `document.offsetTop`

这两个属性与父级元素有很深的关联，且不同浏览器表现不一致，暂不梳理。

**总结**

- 假如无`padding`无滚动条无`border`：
  - `offsetWidth=clientWidth=style.width`
- 假如有`padding`无滚动条有`border`：
  - `offsetWidth=style.width+style.padding*2+(border-width)*2`
  - `offsetWidth=clientWidth+border宽度*2`
- 假如有`padding`有滚动条，且滚动条是显示的，有`border`：
  - `offsetWidth=style.width+style.padding*2+(border-width)*2`
  - `offsetWidth=clientWidth+滚动条宽度+border宽度*2`

### 3. `document.scroll`

- `document.body.scrollWidth`
- `document.body.scrollHeight`

表示当元素中的内容超出其宽度和高度时，元素内部内容的实际宽度和高度。

- `document.body.scrollLeft`
- `document.body.scrollTop`

表示当前元素滚动的高度或左侧距离，滚动条可视为一个点，并不是我们所见的一个长条。

## 五、常用方法

有三种方法获得浏览器尺寸

- 对于 IE, chrome, firefox, opera, safari 浏览器

```javascript
var wid = window.innerHeight;
var hei = window.innerWidth;
```

- 对于 IE8, 7, 6, 5 浏览器

```javascript
var wid = document.documentElement.clientWidth;
var hei = document.documentElement.clientHeight;
```

- 或者

```javascript
var wid = document.body.clientWidth;
var hei = document.body.clientHeight;
```

在程序中，可以用或连接符把不同情况的处理方式连接起来。

<!-- more -->
