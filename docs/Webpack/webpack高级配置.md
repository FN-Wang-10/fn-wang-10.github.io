## webpack 基本配置

### 拆分配置和 merge 细看每个配置

> webpack.common.js(公共配置)
> webpack.dev.js(开发环境配置)
> webpack.prod.js(生产环境配置)
> 开发环境和生产环境使用'webpack-merge'中的 merge 合并公有配置

### 启动本地服务

> 在开发环境中使用 webpack-dev-server

### 处理 ES6

> babel-loader  
> .babelrc 文件  
> 把 es6,7,8.....转换成浏览器能够运行的 es5 版本

### 处理样式

> style-loader,css-loader,postcss-loader  
> postcss-loader 解决浏览器兼容性
> postcss.config.js
> package.json 中添加配置

### 处理图片

> file-loader
> url-loader
> 配置 limit 将小文件转换成 base64，可以减少一次 http 网络请求
> outputPath 图片输出目录

### 模块化

> contenthash 的使用

webpack.common.js

```javascript
/* eslint-disable */
// webpack.common.js文件将生产环境和开发环境公有的配置都提取出来公用
// 开发环境和生产环境使用'webpack-merge'中的merge合并公有配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = {
  entry: path.join(srcPath, "index"),
  module: {
    rules: [
      // babel-loader处理es6，需要安装
      // 还需要新建.babelrc文件
      //   {
      //     "presets": ["@babel/preset-env"], // 会把es6,7,8.....转换成浏览器能够运行的es5版本
      //     "plugins": []
      // }
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        include: srcPath, // 处理的目录
        exclude: /node_modules/, // 排除
      },

      // 处理css
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前
        // 加了 postcss  需要配置postcss.config.js，
        // /* eslint-disable */
        // module.exports = {
        //   plugins: [
        //       require('postcss-preset-env') // 预设包含了浏览器兼容性
        //   ]
        // }
        // 同时需要在package.json中添加
        // "browserslist": {
        //   "development": [
        //     "last 1 chrome version",
        //     "last 1 firefox version",
        //     "last 1 safari version"
        //   ],
        //   "production": [
        //     ">0.2%",
        //     "not dead",
        //     "not op_mini all"
        //   ]
        // }
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      title: "webpack5-demo",
      filename: "index.html",
    }),
  ],
};
```

webpack.dev.js

```javascript
const path = require("path");
const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
/* eslint-disable */
const { merge } = require("webpack-merge");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = merge(webpackCommonConf, {
  mode: "development",
  module: {
    rules: [
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'development'
      ENV: JSON.stringify("development"),
    }),
  ],
  // devServer: {
  //     static: {
  //       directory: path.join(__dirname, 'public'),
  //     },
  //     compress: true,
  //     port: 9000,
  // },

  // 启动本地服务
  devServer: {
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    client: {
      progress: true, // 打包进度
    },
    compress: true, // 启动 gzip 压缩
    // 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:9000/api/xxx
      "/api": "http://localhost:9000",

      // 将本地 /api2/xxx 代理到 localhost:9000/xxx
      "/api2": {
        target: "http://localhost:9000",
        pathRewrite: {
          "/api2": "",
        },
      },
    },
  },
});
```

webpack.prod.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = merge(webpackCommonConf, {
  mode: "production",
  output: {
    // 截取8个字符，如果文件内容不变，contenthash就不变，
    // 这里有个好处是如果contenthash变了，说明内容变了，就不走缓存，直接从服务端获取数据，
    // 如果contenthash不变，说明内容不变，就走本地的缓存，这样可以提高访问的速度，可以提升性能
    filename: "[name].[contenthash:8].js",
    path: distPath,
    // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
  },
  module: {
    rules: [
      // 图片 - 考虑 base64 编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader", // file-loader
          options: {
            // 小于 12kb 的图片用 base64 格式产出，可以减少一次http的网络请求
            // 否则，依然延用 file-loader 的形式，产出 url 格式
            limit: 12 * 1024,

            // 打包到 img 目录下
            outputPath: "/img1/",

            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
            // publicPath: 'http://cdn.baidu.com'
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("production"),
    }),
  ],
});
```

## webpack 高级配置

### 多入口

> entry 中配置多个入口
> plugins 中配置多个 HtmlWebpackPlugin
> output 中 配置`filename: "[name].[contenthash:8].js"`,

> `mode: 'production'`, // 生产环境默认会把打包后的 html 文件压缩，格式不好看
> `mode: "development"`, // 开发环境不会进行压缩
> `new CleanWebpackPlugin()`, // 会默认清空 output.path 文件夹

webpack.common.js

```javascript
/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");

module.exports = {
  // 多入口
  entry: {
    index: path.join(srcPath, "index.js"),
    other: path.join(srcPath, "other.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: srcPath,
        exclude: /node_modules/,
      },
      // {
      //     test: /\.css$/,
      //     // loader 的执行顺序是：从后往前
      //     loader: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前
        use: ["style-loader", "css-loader", "postcss-loader"], // 加了 postcss
      },
      {
        test: /\.less$/,
        // 增加 'less-loader' ，注意顺序
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: path.join(srcPath, 'index.html'),
    //     filename: 'index.html'
    // })

    // 多入口 - 生成 index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      filename: "index.html",
      // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
      chunks: ["index"], // 只引用 index.js
    }),
    // 多入口 - 生成 other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "other.html"),
      filename: "other.html",
      chunks: ["other"], // 只引用 other.js
    }),
  ],
};
```

webpack.dev.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = merge(webpackCommonConf, {
  mode: "development",
  module: {
    rules: [
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("development"),
    }),
  ],
  devServer: {
    port: 8080,
    open: true, // 自动打开浏览器
    client: {
      progress: true,
    },
    compress: true, // 启动 gzip 压缩
    // 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
      "/api": "http://localhost:3000",

      // 将本地 /api2/xxx 代理到 localhost:3000/xxx
      "/api2": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/api2": "",
        },
      },
    },
  },
});
```

webpack.prod.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");

module.exports = merge(webpackCommonConf, {
  // mode: 'production', // 生产环境默认会把打包后的html文件压缩，格式不好看
  mode: "development", // 开发环境不会进行压缩
  output: {
    filename: "[name].[contenthash:8].js", // name 即多入口时 entry 的 key
    path: distPath,
    // publicPath: 'http://cdn.test.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
  },
  module: {
    rules: [
      // 图片 - 考虑 base64 编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // 小于 5kb 的图片用 base64 格式产出
            // 否则，依然延用 file-loader 的形式，产出 url 格式
            limit: 5 * 1024,

            // 打包到 img 目录下
            outputPath: "/img1/",

            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
            // publicPath: 'http://cdn.baidu.com'
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("production"),
    }),
  ],
});
```

### 抽离 css

> **问题**
> 使用 `style-loader`,会把 `css` 和 `js` 打包到一个 `js` 文件夹中  
> 开发环境可以这样配置，生产环境不建议  
> 使用`MiniCssExtractPlugin.loader`代替`style-loader`  
> 使用`new MiniCssExtractPlugin({filename: "css/main.[contenthash:8].css",})`抽离 css  
> `optimization: {minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],},`压缩 css  
> `mode: 'production'`, 生产环境默认会对 css 进行压缩  
> `mode: "development"`, 开发环境不会  
> `style-loader`会把 css 插入到 dom 中

webpack.common.js

```javascript
/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = {
  entry: {
    index: path.join(srcPath, "index.js"),
    // other: path.join(srcPath, 'other.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: srcPath,
        exclude: /node_modules/,
      },
      // css
    ],
  },
  plugins: [
    // 多入口 - 生成 index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      filename: "index.html",
      // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
      chunks: ["index"], // 只引用 index.js
    }),
    // 多入口 - 生成 other.html
    // new HtmlWebpackPlugin({
    //     template: path.join(srcPath, 'other.html'),
    //     filename: 'other.html',
    //     chunks: ['other']  // 只引用 other.js
    // })
  ],
};
```

webpack.dev.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = merge(webpackCommonConf, {
  mode: "development",
  module: {
    rules: [
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
      // {
      //     test: /\.css$/,
      //     // loader 的执行顺序是：从后往前
      //     loader: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        // loader 的执行顺序是：从后往前
        // style-loader会把css插入到dom中
        use: ["style-loader", "css-loader", "postcss-loader"], // 加了 postcss  需要配置postcss.config.js
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("development"),
    }),
  ],
  devServer: {
    port: 8080,
    open: true, // 自动打开浏览器
    client: {
      progress: true,
    },
    compress: true, // 启动 gzip 压缩
    // 设置代理
    proxy: {
      // 将本地 /api/xxx 代理到 localhost:9000/api/xxx
      "/api": "http://localhost:9000",

      // 将本地 /api2/xxx 代理到 localhost:3000/xxx
      "/api2": {
        target: "http://localhost:9000",
        pathRewrite: {
          "/api2": "",
        },
      },
    },
  },
});
```

webpack.prod.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackCommonConf = require("./webpack.common.js");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
module.exports = merge(webpackCommonConf, {
  // mode: 'production', // 生产环境默认会对css进行压缩
  mode: "development", // 开发环境不会
  output: {
    // filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳
    filename: "[name].[contenthash:8].js", // name 即多入口时 entry 的 key
    path: distPath,
    // publicPath: 'http://cdn.baidu.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
  },
  module: {
    rules: [
      // 图片 - 考虑 base64 编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // 小于 5kb 的图片用 base64 格式产出
            // 否则，依然延用 file-loader 的形式，产出 url 格式
            limit: 13 * 1024,

            // 打包到 img 目录下
            outputPath: "/img1/",

            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
            // publicPath: 'http://cdn.abc.com'
          },
        },
      },
      // 抽离 css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 注意，这里不再用 style-loader
          "css-loader",
          "postcss-loader",
        ],
      },
      // 抽离 less --> css
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // 注意，这里不再用 style-loader
          "css-loader",
          "less-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("production"),
    }),

    // 抽离 css 文件
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash:8].css", // 在dist目录下生成css目录，存放css, html文件通过link标签引入css
    }),
  ],

  optimization: {
    // 压缩 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});
```

## 抽离公共的代码

## 何时使用 DllPlugin 动态链接库插件

## 懒加载（异步加载）

## 处理 jsx

## 处理 vue

## webpack 性能优化
