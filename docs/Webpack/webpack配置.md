## 了解 Webpack 相关

**什么是 webpack**

Webpack 是一个模块打包器(bundler)。  
在 Webpack 看来, 前端的所有资源文件(js/json/css/img/less/…)都会作为模块处理  
它将根据模块的依赖关系进行静态分析，生成对应的静态资源

**五个核心概念**

- **Entry：** 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。
- **Output：** output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。
- **Loader：** loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。
- **Plugins：** 插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
- **Mode：** 模式，有生产模式 production 和开发模式 development

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

## 开启项目

**初始化项目：**

生成 package.json 文件

```javascript
{
    "name": "webpack_test",
    "version": "1.0.0"
}
```

**安装 webpack**

```
npm install webpack webpack-cli -g //全局安装,作为指令使用
npm install webpack webpack-cli -D //本地安装,作为本地依赖使用
```

## 编译打包应用

**创建 js 文件**

- src/js/app.js
- src/js/module1.js
- src/js/module2.js
- src/js/module3.js

**创建 json 文件**
`src/json/data.json`

**创建主页面:**
`src/index.html`

**运行指令**

- 开发配置指令：`webpack src/js/app.js -o dist/js/app.js --mode=development`
- 功能: webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成浏览器能识别的语法
- 生产配置指令：webpack src/js/app.js -o dist/js/app.js --mode=production
- 功能: 在开发配置功能上加上一个压缩代码

**结论：**

- webpack 能够编译打包 js 和 json 文件
- 能将 es6 的模块化语法转换成浏览器能识别的语法
- 能压缩代码

**缺点：**

- 不能编译打包 css、img 等文件
- 不能将 js 的 es6 基本语法转化为 es5 以下语法

**改善：**  
 使用 webpack 配置文件解决，自定义功能

## 使用 webpack 配置文件

**目的：**  
在项目根目录定义配置文件，通过自定义配置文件，还原以上功能  
**文件名称：**  
`webpack.config.js `  
**文件内容：**

```javascript
 const { resolve } = require('path'); //node内置核心模块，用来设置路径。
    module.exports = {
      entry: './src/js/app.js',   // 入口文件配置（简写）
      /*完整写法：
        entry:{
          main:'./src/js/app.js'
        }
      */
      output: {                     // 输出配置
        filename: './js/built.js',      // 输出文件名
        path: resolve(__dirname, 'build')   //输出文件路径配置
      },
      mode: 'development'   //开发环境(二选一)
      mode: 'production'   //生产环境(二选一)
    };
```

运行指令： webpack

## 打包 less 资源 (less-loader)

**概述：**  
less 文件 webpack 不能解析，需要借助 loader 编译解析  
**创建 less 文件**

- src/less/test1.less
- src/less/test2.less
- 入口 app.js 文件
- 引入 less 资源
- 安装 loader
  > `npm install css-loader style-loader less-loader less --save-dev`

**配置 loader**

```javascript
{
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [  // 数组中loader执行是从下到上，从右到左顺序执行
          'style-loader', // 创建style标签，添加上js中的css代码
          'css-loader', // 将css以commonjs方式整合到js文件中
          'less-loader'  // 将less文件解析成css文件
        ]
    }
```

运行指令： webpack

## js 语法检查 (eslint-loader)

**概述：**  
对 js 基本语法错误/隐患，进行提前检查  
**安装 loader**

- `npm install eslint-loader eslint --save-dev`
- 备注 1：在：eslint.org 网站 -> userGuide -> Configuring ESLint 查看如何配置
- 备注 2：在：eslint.org 网站 -> userGuide -> Rules 查看所有规则

**配置 loader**

```javascript
module: {
  rules: [
    {
      test: /\.js$/, //只检测js文件
      exclude: /node_modules/, //排除node_modules文件夹
      enforce: "pre", //提前加载使用
      use: {
        //使用eslint-loader解析
        loader: "eslint-loader",
      },
    },
  ];
}
```

**加粗样式**

```javascript
 "eslintConfig": {
        "parserOptions": {
          "ecmaVersion": 6,         // 支持es6
          "sourceType": "module"    // 使用es6模块化
        },
        "env": { // 设置环境
          "browser": true,   // 支持浏览器环境： 能够使用window上的全局变量
          "node": true       // 支持服务器环境:  能够使用node上global的全局变量
        },
        "globals": {    // 声明使用的全局变量, 这样即使没有定义也不会报错了
          "$": "readonly"   // $ 只读变量
        },
        "rules": {  // eslint检查的规则  0 忽略 1 警告 2 错误
          "no-console": 0,  // 不检查console
          "eqeqeq": 2,  // 用==而不用===就报错
          "no-alert": 2 // 不能使用alert
        },
        "extends": "eslint:recommended" // 使用eslint推荐的默认规则 https://cn.eslint.org/docs/rules/
    },
```

运行指令： webpack

## js 语法转换 (babel-loader)

**概述：**  
将浏览器不能识别的新语法转换成原来识别的旧语法，做浏览器兼容性处理  
**安装 loader**  
`npm install babel-loader @babel/core @babel/preset-env --save-dev`  
**配置 loader**

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ];
}
```

运行指令： webpack

## js 兼容性处理 (babel-loader)

第一种方法：使用经典的 polyfill  
**安装包**  
`npm install @babel/polyfill`
**使用**

```javascript
app.js;
import "@babel/polyfill"; // 包含ES6的高级语法的转换
```

**优点**  
解决 babel 只能转换部分低级语法的问题(如：let/const/解构赋值…)，引入 polyfill 可以转换高级语法(如:Promise…)  
**缺点**  
将所有高级语法都进行了转换，但实际上可能只使用一部分  
**解决**  
需要按需加载（使用了什么高级语法，就转换什么，而其他的不转换）  
第二种方法：借助按需引入 core-js 按需引入  
**安装包**  
`npm install core-js`  
**配置 loader**

```javascript
{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',  // 按需引入需要使用polyfill
                  corejs: { version: 3 }, // 解决warn
                  targets: { // 指定兼容性处理哪些浏览器
                    "chrome": "58",
                    "ie": "9",
                  }
                }
              ]
            ],
            cacheDirectory: true, // 开启babel缓存
          }
        }
    },
```

## 打包样式文件中的图片资源 (url-loader file-loader)

**概述：**
图片文件 webpack 不能解析，需要借助 loader 编译解析  
添加 2 张图片:

- 小图, 小于 8kb: src/images/vue.png
- 大图, 大于 8kb: src/images/react.jpg
- 在 less 文件中通过背景图的方式引入图片

**安装 loader**  
 `npm install file-loader url-loader --save-dev `  
**补充**  
 url-loader 是对象 file-loader 的上层封装，使用时需配合 file-loader 使用。  
**配置 loader**

```javascript
    {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            outputPath: 'images', // 决定文件本地输出路径
            publicPath: '../build/images',  // 决定图片的url路径
            name: '[hash:8].[ext]' // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
          }
        }
    }
```

运行指令： webpack

## 打包 html 文件 (HtmlWebpackPlugin)

**概述：**  
html 文件 webpack 不能解析，需要借助插件编译解析  
**添加 html 文件**  
`src/index.html`  
注意不要在 html 中引入任何 css 和 js 文件  
**安装插件 Plugins**  
`npm install html-webpack-plugin --save-dev `  
在 webpack.config.js 中引入插件（插件都需要手动引入，而 loader 会自动加载）

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

**配置插件 Plugins**

```javascript
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html", // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
  }),
];
```

运行指令： webpack

## 打包 html 中图片资源 (html-loader)

**概述：**  
html 中的图片 url-loader 没法处理，它只能处理 js 中引入的图片 / 样式中图片，不能处理 html 中 img 标签，需要引入其他 html-loader 处理。

**添加图片**  
在 src/index.html 添加两个 img 标签

**安装 loader**  
`npm install html-loader --save-dev `

**配置 loader**

```javascript
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    }
```

运行指令： webpack

## 打包其他资源 (file-loader)

**概述：**
其他资源 webpack 不能解析，需要借助 loader 编译解析

**添加字体文件**

- src/media/iconfont.eot
- src/media/iconfont.svg
- src/media/iconfont.ttf
- src/media/iconfont.woff
- src/media/iconfont.woff2

**修改样式**

```css
@font-face {
  font-family: "iconfont";
  src: url("../media/iconfont.eot");
  src: url("../media/iconfont.eot?#iefix") format("embedded-opentype"), url("../media/iconfont.woff2")
      format("woff2"), url("../media/iconfont.woff") format("woff"), url("../media/iconfont.ttf")
      format("truetype"), url("../media/iconfont.svg#iconfont") format("svg");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**配置 loader**

```javascript
    {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/,  // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]'
        }
    }
```

运行指令： webpack

## 自动编译打包运行 (devServer)

**安装 loader**  
`npm install webpack-dev-server --save-dev`  
详细配置见官网：指南 -> 开发环境 -> 使用 webpack-dev-server

**修改 webpack 配置对象（注意不是 loader 中）**

```javascript
    devServer: {
      open: true, // 自动打开浏览器
      compress: true, // 启动gzip压缩
      port: 3000, // 端口号
    }
```

**修改 url-loader 部分配置**

- 因为构建工具以 build 为根目录，不用再找 build 了
- publicPath: '../build/images/' --> publicPath: 'images/'

**修改 package.json 中 scripts 指令**

```javascript
"start": "webpack-dev-server",
```

**运行指令：** `npm run start`  
注意 webpack-dev-server 指令才能启动 devServer 配置，然后配置到 package.json 中才行

## 热模替换功能 (devServer hot)

**概述：**  
热模块替换（HMR）是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新（只更新变化的模块，不变的模块不更新）。
详细配置见官网：指南 -> 模块热替换

**修改 devServer 配置**

```javascript
    devServer: {
      contentBase: resolve(__dirname, 'build'), // 运行项目的目录
      open: true, // 自动打开浏览器
      compress: true, // 启动gzip压缩
      port: 3000, // 端口号
      hot: true // 开启热模替换功能 HMR
    }
```

**问题：** html 文件无法自动更新了，需要增加一个入口

```javascript
entry: ["./src/js/app.js", "./src/index.html"];
```

## devtool

**概述：**  
一种将压缩/编译文件中的代码映射回源文件中的原始位置的技术，让我们调试代码不在困难  
详细配置见官网：配置 -> devtool

**介绍**  
cheap 只保留行, 编译速度快  
eval webpack 生成的代码（每个模块彼此分开，并使用模块名称进行注释）, 编译速度快  
inline 以 base64 方式将 source-map 嵌入到代码中，缺点造成编译后代码体积很大

**推荐使用：**  
开发环境： `cheap-module-eval-source-map`  
生产环境： `cheap-module-source-map`  
以上就是 webpack 开发环境的配置，可以在内存中自动打包所有类型文件并有自动编译运行、热更新等功能。

## 准备生产环境

**创建文件夹 config**  
将 webpack.config.js 复制两份

- ./config/webpack.dev.js
- ./config/webpack.prod.js
- 修改 webpack.prod.js 配置，删除 webpack-dev-server 配置

```javascript
// / 代表根路径(等价于这个：http://localhost:5000/)，以后项目上线所有路径都以当前网址为根路径出发
module.exports = {
  output: {
    path: resolve(__dirname, "../build"), // 文件输出目录
    filename: "./js/built.js", // 文件输出名称
    publicPath: "/", // 所有输出资源在引入时的公共路径，若loader中也指定了publicPath，会以loader的为准。
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            outputPath: "images",
            publicPath: "/images", // 重写publicPath，需要在路径前面加上 /
            name: "[hash:8].[ext]",
          },
        },
      },
    ],
  },
  mode: "production", //修改为生产环境
  devtool: "cheap-module-source-map", // 修改为生产环境的错误提示
  // 删除devServer
};
```

**修改 package.json 的指令**  
“start”: “webpack-dev-server --config ./config/webpack.dev.js”  
“dev”: “webpack-dev-server --config ./config/webpack.dev.js”  
“build”: “webpack --config ./config/webpack.prod.js”
开发环境指令

```
npm start
npm run dev
```

生产环境指令

```
npm run build
```

注意: 生产环境代码需要部署到服务器上才能运行 （serve 这个库能帮助我们快速搭建一个静态资源服务器）

```
npm i serve -g
serve -s build -p 5000
```

## 清除打包文件目录 (CleanWebpackPlugin )

**概述：**

每次打包生成了文件，都需要手动删除，引入插件帮助我们自动删除上一次的文件

**安装插件**  
`npm install clean-webpack-plugin --save-dev`

**引入插件**

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 注意要解构赋值！！！
```

**配置插件**

```javascript
new CleanWebpackPlugin(); // 自动清除output.path目录下的文件
```

运行指令： npm run build

## 提取 css 成单独文件 (MiniCssExtractPlugin.loader)

**安装插件**  
`npm install mini-css-extract-plugin --save-dev`

**引入插件**

```javascript
const MiniCssExtractPlugin = require(“mini-css-extract-plugin”);
```

**配置 loader**

```javascript
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
    ]
  }
```

**配置插件**

```javascript
new MiniCssExtractPlugin({
  filename: "css/[name].css",
});
```

运行指令

```
npm run build
serve -s build
```

## 添加 css 兼容 (postcss-loader)

**安装 loader**

```
npm install postcss-loader postcss-flexbugs-fixes postcss-preset-env  postcss-normalize autoprefixer --save-dev
```

**配置 loader**

```javascript
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            require('postcss-normalize')(),
          ],
          sourceMap: true,
        },
      },
      'less-loader',
    ]
  }
```

**添加配置文件: .browserslistrc**

```
    last 1 version
    > 1%
    IE 10 # sorry
```

**运行指令：**

```
npm run build
serve -s build
```

## 压缩 css (OptimizeCssAssetsPlugin)

**安装插件**  
`npm install optimize-css-assets-webpack-plugin --save-dev `

**引入插件**  
`const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');`

**配置插件**

```javascript
new OptimizeCssAssetsPlugin({
  cssProcessorPluginOptions: {
    preset: ["default", { discardComments: { removeAll: true } }],
  },
  cssProcessorOptions: {
    // 解决没有source map问题
    map: {
      inline: false,
      annotation: true,
    },
  },
});
```

**运行指令：**

```
npm run build
serve -s build
```

## 压缩 html (HtmlWebpackPlugin)

**修改插件配置**

```javascript
new HtmlWebpackPlugin({
  template: "./src/index.html",
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
});
```

**运行指令：**

```
npm run build
serve -s dist
```

以上就是 webpack 生产环境的配置，可以生成打包后的文件。

## devServer 常用配置

```javascript
module.exports = {
  devServer: {
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    port: 3000, // 端口号
    hot: true, // 开启热模替换功能 HMR
    proxy: {
      // 代理
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }, // 如果不希望传递/api，则需要重写路径：
      },
    },
    // 现在，对 /api/users 的请求会将请求代理到 http://localhost:3000/api/users
  },
};
```
devServer.proxy 代理功能，其底层依赖于 http-proxy-middleware 软件包。所以如果需要设置更多的代理服务配置，可以借鉴参考 http-proxy-middleware 配置文档说明。

http-proxy-middleware 本质上是一个 Node.js 的中间件库，用于在 Express、Koa 或任何基于 Node.js 的 HTTP 服务器上代理 HTTP 请求。

http-proxy-middleware 可以方便地配置代理规则，支持按路径、按域名、按请求头等进行匹配和过滤，也可以对请求和响应进行修改。通过这种方式，它可以实现反向代理、请求转发、API 接口代理等功能。

参考文档

- https://developer.aliyun.com/article/891807#slide-1
