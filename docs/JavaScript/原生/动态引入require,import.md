---
tags:
  - require
  - import
---

本篇基于图片加载的基础来简单介绍`require`、`require`、`context`和`import`的区别！

现如今的前端项目用`webpack`打包已经成为了行业趋势，然而在此模式的前提下，图片的引入是我们不可避免的问题。正常的图片引入是用`img`标签或者元素背景图的方式，采用这种方式的图片，`webpack`都能正常打包并显示。但是如果直接在 js 文件中定义图片路径，并赋给图片元素的话不能正常显示的，这是因为`webpack`打包后，会将静态资源文件放在`dist/static/img`下，我们的网站实际上以`dist`目录作为根目录，并由此加载该目录下的`index.html`所需的 css、js、img 等。而当我们在 js 文件中动态引入图片时`url-loader`是无法探测到图片路径的。我们`build`后发现，图片根本不会打包输出到 dist 目录（`webpack`是按需打包的）。

此处介绍了三种动态引入图片的方式：

## 一、require

```html
<img :src="imgList[0]" />
```

```javascript
// 将图片动态引入，可选择渲染，亦可循环渲染
// xxx.jslet
imgList = [require('../images/a.png'), require('../images/b.jpg')];
```

> 官方文档：如果你的 **`request`** 含有表达式(`expressions`)，会创建一个上下文(`context`)，因为在编译时(`compile time`)并不清楚具体是哪一个模块被导入。

原因：

- `webpack`本身是一个预编译路径 不能`require`纯变量的打包工具，无法预测未知变量路径
- `require(path)` ,`path` 至少要有三部分组成, 目录,文件名和后缀
- 目录：`webpack` 才知道从哪里开始查找
- 后缀 文件后缀，必须要加上，不然会报错
- 文件名：可用变量表示

### 1. 错误引用

上述意思即是不能通过以下这种方式加载图片，这种方式下，webpack 找不到具体是哪个模块（图片）被引入，故而无法将图片 hash 并输出到 dist 文件下。

```javascript
let imgUrlStr = '../images/a.png';
let imgUrl = require(imgUrlStr);
```

### 2. 正确引用

鉴于 require 在纯变量的情况下找不到模块，所以我们至少要在 require 参数中写明一个目录（如下边代码中的 example 2 和 example 3），这样的话，虽然不知道具体的模块，但是 webpack 也会为我们做些分析工作：

- 分析目录： ‘../images’
- 提取正则表达式 : ’/^.\*.png$/’

但是此种情况下，webpack 生成的上下文模块（context module）。它包含目录下的所有模块的引用，是通过一个 request 解析出来的正则表达式，去匹配目录下所有符合的模块，然后都 require 进来。此 context module 包含一个 map 对象，会把 request 中所有模块翻译成对应的模块 id。这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。

```javascript
let imgName = 'a';
let imgAllName = 'a.png';

// example 1
let imgUrl = require('../images/a.png'); // 纯字符串

// example 2
let imgUrl = require('../images/' + imgAllName); // 目录 + 文件全名

// example 3
let imgUrl = require('../images/' + imgName + '.png'); // 目录 + 文件名 + 后缀
```

## 二、require.context

此方法可理解为 require 方法的详细实现，用 require.context() 函数来创建自己的 context。可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。

```javascript
// 语法
require.context(directory, (useSubdirectories = false), (regExp = /^\.\//));

// example
// 创建出一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.png` 结尾。
require.context('../images', true, /\.png$/);
```

### 1. require.context

一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。 此导出函数有三个属性：resolve, keys, id。

- resolve 是一个函数，它返回 request 被解析后得到的模块 id。
- keys 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求（译者注：参考下面第二段代码中的 key）组成。
- id 是 context module 里面所包含的模块 id. 它可能在你使用 module.hot.accept 时会用到。

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120606.png](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120606.png)

### 2. 图片预加载

动态加载文件夹下所有图片实例：

```javascript
// example// 图片预加载,
preloadAllImages () {
	let imgCounts = 0;      // 已加载图片计数，可实现真实进度条
	let imgsFun = require.context('../images', true, /\.(png|jpg)$/);
	let imgKeys = imgsFun.keys();
	imgKeys.forEach(item => {
		let Img = new Image();
		Img.src = imgsFun(item);
		Img.onload = function () {
			imgCounts++;
		}
		Img.onerror = function () {
			imgCounts++;
		};
	});
// }
```

## 三、import

require 是运行时加载模块，但 import 命令会被 javascript 引擎静态分析，先于模块内其他模块执行，做不到运行时加载，因此为了实现类似于 require 的动态加载，就提出了实现一个 import()函数方法，

```javascript
import(specifier);
```

上面代码中，import 函数的参数 specifier，指定所要加载的模块的位置。import 命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。

import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，也会加载指定的模块。另外，import()函数与所加载的模块没有静态连接关系，这点也是与 import 语句不相同。

> import() 特性依赖于内置的 Promise。如果想在低版本浏览器使用 import()，记得使用像 es6-promise 或者 promise-polyfill 这样 polyfill 库，来预先填充(shim) Promise 环境。

```javascript
// examplelet
imgUrl = ''; // 与require参数类似，不能通过纯参数的方式引入模块。正确的引入方式可查看以上require的引入方式
import('/images/tree/tree.png').then((res) => {
  imgUrl = res;
});
```
