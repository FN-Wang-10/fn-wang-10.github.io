## 总结

1. link 是 html 提供的一个标签,@import 是 css 提供的一个方法;
2. link 引入的 css 会同时被加载（同时下载加载）,@import 引入的 css 会先下载再加载;
3. link 引入的样式能被 JS 控制(JS 通过都没改变 link 引入的样式),@import 引入的样式不能被 JS 控制
4. link引入的样式的权重大于@import引入的样式的权重
## 前言

众多周知，有两种方法可以在页面中导入样式文件。

```javascript
<link href="a.css" rel="stylesheet">

<style> @import url('a.css'); </style>
```

## 1.用法区别

@import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 等属性 。

## 2.加载顺序区别

加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 会等到页面全部被下载完再被加载。该规则必须在样式表头部最先声明。并且其后的分号是必需的，如果省略了此分号，外部样式表将无法正确导入，并会生成错误信息,而事实证明，避免使用@import 同样对网站性能有益。

## 3.兼容性区别

@import 是 CSS2.1 提出的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。

## 4.DOM 可控性区别

可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式。

## 5.加载机制区别

**@import @import**

```javascript
// 如果一直使用@import，那么就没有什么性能问题 两个样式文件将同时并行下载
<style>@import url('a.css'); @import url('b.css');</style>
```

**LINK @import**  
这个 LINK @import 的例子使用 LINK 加载 a.css，使用@import 导入 b.css:

```javascript
// 会导致样式表文件逐个加载，并行下载资源是加速页面的一个关键,在 IE 中 link 混合@import 会破坏并行下载
<link href="a.css" rel="stylesheet" type="text/css">
<style>
  @import url('b.css');
</style>
```

**LINK 嵌套@import**  
a.css 通过 LINK 插入到页面中，然后 a.css 通过@import 规则来引入 b.css:

```javascript
// 这种方式同样阻止并行加载代码，但是这次是对于所有的浏览器,其实这个应该不会感到奇怪吧，简单的想一下就能理解了。浏览器必须先下载 a.css，并分析它，这个时候，浏览器发现了@import 规则，然后才会开始加载 b.css.
<link href="a.css" rel="stylesheet" type="text/css">
//在a.css中:
@import url('b.css');
```

**LINK 阻断 @import**  
使用 LINK 导入 a.css 和一个新的样式文件 proxy.css。proxy.css 没有添加额外的样式，它只是用来通过@import 规则导入 b.css

```javascript
// 在下载a.css完成之前，IE不会开始下载b.css。但是在其它所有的浏览器中，这种情况不会发生
<link href="a.css" rel="stylesheet" type="text/css">
<link href="proxy.css" rel="stylesheet" type="text/css">
//proxy.css的代码:
@import url('b.css');
```

**多个@imports**  
IE 中使用@import 会引起资源被按照一个不同于预期的顺序下载,在 IE 中，如果脚本中包含的代码，来自样式表文件中应用的样式(比如 getElementsByClassName)， 那么就将可能会发生意外的结果，因为脚本先于样式被加载，尽管开发人员将其置于代码的最后面。

```javascript
// @import在IE中引发资源文件的下载顺序被打乱
<style>
@import url('a.css');
@import url('b.css');
@import url('c.css');
@import url('d.css');
@import url('e.css');
@import url('f.css');
</style>
<script src="one.js" type="text/javascript"></script>
```

**LINK LINK**  
使用 LINK 来引入样式更简单和安全,使用 LINK 可确保样式在所有浏览器里面都能被并行下载,同样能保证资源按照开发人员制定的顺序下载。

```javascript
<link href="a.css" rel="stylesheet" type="text/css">
<link href="b.css" rel="stylesheet" type="text/css">
```

## 6.权重

link 引入的样式权重大于@import 引入的样式。

<!-- ## 参考文献 -->
<!-- - http://localhost:3000/docs/Css%E6%A0%B7%E5%BC%8F/link%E5%92%8C@import%E7%9A%84%E5%8C%BA%E5%88%AB#1%E7%94%A8%E6%B3%95%E5%8C%BA%E5%88%AB -->
