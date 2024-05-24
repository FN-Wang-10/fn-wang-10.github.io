## 什么是 webpack

Webpack 是一个模块打包器(bundler)。
在 Webpack 看来, 前端的所有资源文件(js/json/css/img/less/…)都会作为模块处理
它将根据模块的依赖关系进行静态分析，生成对应的静态资源

**五个核心概念**

- Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
- Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
- Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。
- Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
- Mode：模式，有生产模式 production 和开发模式 development

  **理解 Loader**  
  Webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件(模块)，就需要使用对应的 loader 进行转换/加载  
  Loader 本身也是运行在 node.js 环境中的 JavaScript 模块  
  它本身是一个函数，接受源文件作为参数，返回转换的结果  
  loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。

  **理解 Plugins**  
  插件可以完成一些 loader 不能完成的功能。  
  插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。

  **配置文件(默认)**  
  webpack.config.js : 是一个 node 模块，返回一个 json 格式的配置信息对象

## Entry

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

**默认值**是 `./src/index.js`  
**语法**：字符串、对象、数组。

### 示例

```javascript
module.exports = {
  entry: "./path/to/my/entry/file.js",
};
```

### 1.单个入口语法

**用法：**`entry: string | [string]`

```javascript
module.exports = {
  entry: "./path/to/my/entry/file.js",
};

// entry 属性的单个入口语法，是以下形式的简写：
module.exports = {
  entry: {
    main: "./path/to/my/entry/file.js",
  },
};
```

次注入多个依赖文件，并且将它们的依赖关系绘制在一个 "chunk" 中

```javascript
module.exports = {
  entry: ["./src/file_1.js", "./src/file_2.js"],
};
```

当你希望通过一个入口（例如一个库）为应用程序或工具快速设置 webpack 配置时，单一入口的语法方式是不错的选择。然而，使用这种语法方式来扩展或调整配置的灵活性不大。

### 2.对象语法

对象语法比较繁琐，但是可拓展性更好

**用法**：`entry: { <entryChunkName> string | [string] } | {}`

```javascript
module.exports = {
  entry: {
    app: "./src/app.js",
    adminApp: "./src/adminApp.js",
  },
};
```

#### 描述入口的对象

用于描述入口的对象。你可以使用如下属性：

> dependOn: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。  
> filename: 指定要输出的文件名称。  
> import: 启动时需加载的模块。  
> library: 指定 library 选项，为当前 entry 构建一个 library。  
> runtime: 运行时 chunk 的名字。如果设置了，就会创建一个新的运行时 chunk。在 webpack 5.43.0 之后可将其设为 false 以避免一个新的运行时 chunk。  
> publicPath: 当该入口的输出文件在浏览器中被引用时，为它们指定一个公共 URL 地址。请查看 output.publicPath。

```javascript
module.exports = {
  entry: {
    a2: "dependingfile.js",
    b2: {
      dependOn: "a2",
      import: "./src/app.js",
    },
  },
};
```

runtime 和 dependOn 不应在同一个入口上同时使用，所以如下配置无效，并且会抛出错误：

```javascript
module.exports = {
  entry: {
    a2: "./a",
    b2: {
      runtime: "x2",
      dependOn: "a2",
      import: "./b",
    },
  },
};
```

确保 runtime 不能指向已存在的入口名称，例如下面配置会抛出一个错误：

```javascript
module.exports = {
  entry: {
    a1: "./a",
    b1: {
      runtime: "a1",
      import: "./b",
    },
  },
};
```

另外 dependOn 不能是循环引用的，下面的例子也会出现错误：

```javascript
module.exports = {
  entry: {
    a3: {
      import: "./a",
      dependOn: "b3",
    },
    b3: {
      import: "./b",
      dependOn: "a3",
    },
  },
};
```

### 3.常见场景

#### 1.分离 app(应用程序) 和 vendor(第三方库) 入口

webpack.config.js

```javascript
module.exports = {
  entry: {
    main: "./src/app.js",
    vendor: "./src/vendor.js",
  },
};
```

webpack.prod.js

```javascript
module.exports = {
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
};
```

webpack.dev.js

```javascript
module.exports = {
  output: {
    filename: "[name].bundle.js",
  },
};
```

这是什么？ 这是告诉 webpack 我们想要配置 2 个单独的入口点（例如上面的示例）。

为什么？ 这样你就可以在 vendor.js 中存入未做修改的必要 library 或文件（例如 Bootstrap, jQuery, 图片等），然后将它们打包在一起成为单独的 chunk。内容哈希保持不变，这使浏览器可以独立地缓存它们，从而减少了加载时间。

#### 2.多页面应用程序

```javascript
module.exports = {
  entry: {
    pageOne: "./src/pageOne/index.js",
    pageTwo: "./src/pageTwo/index.js",
    pageThree: "./src/pageThree/index.js",
  },
};
```

我们告诉 webpack 需要三个独立分离的依赖图

## Output

output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。  
主要输出文件的**默认值**是 `./dist/main.js`，其他生成文件默认放置在 `./dist` 文件夹中。

**注意，即使可以存在多个 entry 起点，但只能指定一个 output 配置。**

### 示例

```javascript
const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
```

在上面的示例中，我们通过 output.filename 和 output.path 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成(emit)到哪里

### 1.用法

在 webpack 配置中，output 属性的最低要求是，将它的值设置为一个对象，然后为将输出文件的文件名配置为一个 output.filename：

webpack.config.js

```javascript
module.exports = {
  output: {
    filename: "bundle.js",
  },
};
```

此配置将一个单独的 bundle.js 文件输出到 dist 目录中。

## Loader

**Webpack 本身只能加载 JS/JSON 模块**，如果要加载其他类型的文件(模块)，就需要使用对应的 loader 进行转换/加载  
Loader 本身也是运行在 node.js 环境中的 JavaScript 模块  
**loader 本身是一个函数，接受源文件作为参数，返回转换的结果**  
**loader 一般以 xxx-loader 的方式命名**，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。

**loader 需要安装**  
**loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)**

loader 有两个属性：

- **test** 属性，识别出哪些文件会被转换。
- **use** 属性，定义出在进行转换时，应该使用哪个 loader。

### 示例

```javascript
const path = require("path");

module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
```

以上配置中，对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这告诉 webpack 编译器(compiler) 如下信息：

“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先 use(使用) raw-loader 转换一下。”

### 1.使用 loader

#### module.rules

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
```

从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束

#### 内联方式

不推荐使用，如需了解，可查看官网

### 2.loader 特性

- loader 支持链式调用。链中的每个 loader 会将转换应用在已处理过的资源上。一组链式的 loader 将按照相反的顺序执行。链中的第一个 loader 将其结果（也就是应用过转换后的资源）传递- 给下一个 loader，依此类推。最后，链中的最后一个 loader，返回 webpack 所期望的 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何操作。
- loader 可以通过 options 对象配置（仍然支持使用 query 参数来设置选项，但是这种方式已被废弃）。
- 除了常见的通过 package.json 的 main 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 loader 字段直接引用一个模块。
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。  
  可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言转译（或编译）和 更多其他特性。

### 3.常用 loader

语法转换

babel-loader 使用 Babel 加载 ES2015+ 代码并将其转换为 ES5  
esbuild-loader 加载 ES2015+ 代码并使用 esbuild 转译到 ES6+  
模板

html-loader 将 HTML 导出为字符串，需要传入静态资源的引用路径  
样式

style-loader 将模块导出的内容作为样式并添加到 DOM 中  
css-loader 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码  
less-loader 加载并编译 LESS 文件  
sass-loader 加载并编译 SASS/SCSS 文件  
postcss-loader 使用 PostCSS 加载并转换 CSS/SSS 文件  
stylus-loader 加载并编译 Stylus 文件

查看更多 https://www.webpackjs.com/loaders/#files

### 4.解析 loader

loader 遵循标准 模块解析 规则。多数情况下，loader 将从 模块路径 加载（通常是从 npm install, node_modules 进行加载）。

我们预期 loader 模块导出为一个函数，并且编写为 Node.js 兼容的 JavaScript。通常使用 npm 进行管理 loader，但是也可以将应用程序中的文件作为自定义 loader。按照约定，loader 通常被命名为 xxx-loader（例如 json-loader）。更多详细信息，

### 5.手写 loader

## Plugin

loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。  
插件目的在于解决 loader 无法实现的其他事
**plugin 需要安装**

### 示例

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
在上面的示例中，html-webpack-plugin 为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。
```

### 1.剖析

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象。

ConsoleLogOnBuildWebpackPlugin.js

```javascript
const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log("webpack 构建正在启动！");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```

compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 hook 中重复使用。

### 2.用法

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入一个 new 实例。

取决于你的 webpack 用法，对应有多种使用插件的方式。

#### 配置方式

webpack.config.js

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // 访问内置的插件
const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
};
```

ProgressPlugin 用于自定义编译过程中的进度报告，HtmlWebpackPlugin 将生成一个 HTML 文件，并在其中使用 script 引入一个名为 my-first-webpack.bundle.js 的 JS 文件。

#### Node API 方式

在使用 Node API 时，还可以通过配置中的 plugins 属性传入插件。

some-node-script.js

```javascript
const webpack = require("webpack"); // 访问 webpack 运行时(runtime)
const configuration = require("./webpack.config.js");

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {
  // ...
});
```

### HtmlWebpackPlugin

打包时自动生成 html 文件，并替换之前的 html 文件

## Mode

配置环境

```javascript
module.exports = {
  mode: "production" | "development" | "none",
};
```

如果没有设置，webpack 会给 mode 的默认值设置为 production

https://webpack.docschina.org/configuration/mode/

## Webpack.config.js

`npm install --save-dev style-loader css-loader`

安装一个将被打包到生产环境 bundle 的包时，应该使用 npm install --save；而安装一个用于开发环境的包时（例如代码检查工具、测试库等），应该使用 npm install --save-dev。请查看 npm 文档 以了解更多相关信息。

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 单一入口
  entry: "./src/index.js", // 默认入口文件
  entry: {
    // 第一种写法的简写
    main: "./src/index.js",
  },

  // 多入口文件
  entry: ["./src/file_1.js", "./src/file_2.js"], // 数组语法
  entry: {
    // 对象语法
    file1: "src/file_1.js",
    file2: "src/file_2.js",
  },

  entry: {
    a2: "./a",
    b2: {
      runtime: "x2",
      dependOn: "a2",
      import: "./b",
      // ...其他配置,
    },
  },

  output: {
    filename: "bundle.js", //默认值  "./dist/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true, // 删除上一次的dist目录
  },

  module: {
    rules: [
      {
        // 加载css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // 加载图像
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        //加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // ...其它loader
    ],
  },

  plugins: [
    // 打包时自动生成 html 文件，并替换之前的 html 文件
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],

  mode: "development",
  mode: "production", // 默认值
  mode: "none",

  devtool: "inline-source-map", // 告诉开发者错误来源于哪一个源代码
};
```

## webpack 的配置类型

### 导出对象

```javascript
module.exports={
  entry:'',
  outPut:'',
  module:{},
  plugins:[],
  mode:'',
  ...
}
```

### 导出函数

你可能会遇到需要区分开发环境和生产环境的情况。有很多种方式可以做到这一点。其中一种选择是由 webpack 配置导出一个函数而非对象，这个函数包含两个参数：

- 参数一是环境（environment）。请查阅 environment 选项文档了解更多。
- 参数二是传递给 webpack 的配置项，其中包含 output-path 和 mode 等。

```javascript
module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval",
    plugins: [
      new TerserPlugin({
        terserOptions: {
          compress: argv.mode === "production", // only if `--mode production` was passed
        },
      }),
    ],
  };
};
```

如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为函数，而不是导出对象：

```javascript
var config = {
  entry: "./app.js",
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
    //...
  }

  return config;
};
```

### 导出 Promise

当需要异步加载配置变量时，webpack 将执行函数并导出一个配置文件，同时返回一个 Promise。

### 导出多种配置

https://www.webpackjs.com/configuration/configuration-types/#exporting-multiple-configurations

https://webpack.docschina.org/configuration/configuration-types/

## 依赖图(graph)

每当一个文件依赖另一个文件时，webpack 都会将文件视为直接存在 依赖关系。这使得 webpack 可以获取非代码资源，如 images 或 web 字体等。并会把它们作为 依赖 提供给应用程序。

当 webpack 处理应用程序时，它会根据命令行参数中或配置文件中定义的模块列表开始处理。 从 入口 开始，webpack 会递归的构建一个 依赖关系图，这个依赖图包含着应用程序中所需的每个模块，然后将所有模块打包为少量的 bundle —— 通常只有一个 —— 可由浏览器加载。

## runtime(运行时)和 manifest(清单)

https://www.webpackjs.com/concepts/manifest/

## 模块热替换（HMR）

https://www.webpackjs.com/concepts/hot-module-replacement/

### webpack-dev-server

安装一个将被打包到生产环境 bundle 的包时，应该使用 npm install --save；而安装一个用于开发环境的包时（例如代码检查工具、测试库等），应该使用 npm install --save-dev。请查看 npm 文档 以了解更多相关信息。

### webpack-dev-middleware

webpack-dev-middleware 是一个包装器，它可以把 webpack 处理过的文件发送到 server。这是 webpack-dev-server 内部的原理

## 开发环境

 devtool: 'inline-source-map', 告诉开发者错误来源于哪一个源代码。

webpack --watch  
观察模式唯一的缺点是需要手动刷新浏览器才能看到修改后的实际效果。实现 webpack-dev-server 将能够自动刷新浏览器！

參考文档

- https://www.webpackjs.com/concepts/
- https://developer.aliyun.com/article/891807#slide-1


## 代码分离
## 缓存

SplitChunksPlugin