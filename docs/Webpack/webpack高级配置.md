## webpack 基本配置

### 拆分配置和 merge 细看每个配置

> webpack.common.js(公共配置)  
> webpack.dev.js(开发环境配置)  
> webpack.prod.js(生产环境配置)  
> 开发环境和生产环境使用'webpack-merge'中的 merge 合并公有配置

### 启动本地服务

> 在开发环境中使用 webpack-dev-server

![](../../static//img/webpack/5BE77A39-F57F-478e-ABC7-83A1E9AE1116.png)

### 处理 ES6

> babel-loader  
> .babelrc 文件  
> 把 es6,7,8.....转换成浏览器能够运行的 es5 版本

![](../../static//img/webpack/AB93064D-1A88-4415-B4EC-BC959D0B3974.png)

### 处理样式

> style-loader,css-loader,postcss-loader  
> postcss-loader 解决浏览器兼容性  
> postcss.config.js  
> package.json 中添加配置

![](../../static//img/webpack/6689DC83-59C5-4547-8DA1-4CF5D989880B.png)

### 处理图片

> file-loader  
> url-loader  
> 配置 limit 将小文件转换成 base64，可以减少一次 http 网络请求  
> outputPath 图片输出目录

![](../../static//img/webpack/4DD6487D-4BE4-4aa4-86C3-FEDE29466C0A.png)

### 模块化

> contenthash 的使用

![](../../static//img/webpack/7B38EC19-383B-4c47-8A28-5206883E5454.png)

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

![](../../static/img/webpack/5913C496-84B4-48d6-937F-33A9DED7028F.png)
![](../../static/img/webpack/6BFA97AC-C96C-4c31-BA96-6DBCA36C9D7B.png)
![](../../static/img/webpack/AB9399E4-0FE5-4293-916A-A34C120475C1.png)

### 抽离 css(MiniCssExtractPlugin)

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

![](../../static/img/webpack/200DA9A5-9F80-452d-B869-046154B5F4B7.png)
![](../../static/img/webpack/A1BE85E5-D52A-4b1b-A7C4-8F15E638C36D.png)

### 抽离公共的代码(SplitChunksPlugin)

> 对于第三方的包和公用的逻辑代码，如果将这些和业务逻辑代码打包到一块，会有一个问题
> 打包的时候会生成 contenthash，如果业务代码改了什么东西，重新打包的时候 contenthash 就会改变，但是对于第三方的包，比如 react，vue，lodash，这些包虽然内容没变，但是会重新打包，如果在生产环境，之前的一些缓存就会失效
> 一些工具函数同理

**拆包主要分两块内容**

1.  提取公用的第三方包
2.  提取公用的业务逻辑代码

主要使用 SplitChunksPlugin 插件  
在开发环境没必要考虑拆包分包，只有在生产环境使用

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
    other: path.join(srcPath, "other.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory"],
        // include和 exclude是排除范围
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
        include: srcPath,
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
      chunks: ["index", "vendor", "common"], // 要考虑代码分割
    }),
    // 多入口 - 生成 other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "other.html"),
      filename: "other.html",
      chunks: ["other", "common"], // 考虑代码分割
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
  //mode: 'production',
  mode: "development",
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
            limit: 5 * 1024,

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
      // 抽离 less
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
      filename: "css/main.[contenthash:8].css",
    }),
  ],

  // 在optimization中做分包
  optimization: {
    // 压缩 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

    // 分割代码块
    splitChunks: {
      chunks: "all",
      /**
             * initial 入口 chunk，对于异步导入的文件不处理
                async 异步 chunk，只对异步导入的文件处理
                all 全部 chunk 基本都配置all
             */

      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: "vendor", // chunk 名称
          priority: 1, // 权限更高，优先抽离，重要！！！值越大，抽离的优先级越高
          test: /node_modules/, // 匹配的范围
          minSize: 0, // 大小限制 如果第三报的包比较小，没必要进行分包，如果大于minSize就会进行分包
          minChunks: 1, // 最少复用过几次
        },

        // 公共的模块
        common: {
          name: "common", // chunk 名称
          priority: 0, // 优先级
          minSize: 0, // 公共模块的大小限制
          minChunks: 2, // 公共模块最少复用过几次
        },
      },
    },
  },
});
```

![](../../static//img/webpack/D68E7CE8-2149-465f-9CE8-D1323F87B0E2.png)
![](../../static//img/webpack/CE45DD79-EA99-4bff-B1F5-EEE88353EB09.png)

### 何时使用 DllPlugin

> DllPlugin 是一个动态链接库插件

为什么要用呢？

- 前端框架 React，Vue 体积大，构建慢
- 比较稳定，基本不会升级版本
- 同一个版本只构建一次，不用每次都重新构建

具体怎么用？

- webpack 已经内置支持了 DllPlugin
- DllPlugin--打包出 dll 文件（比如对 react，vue 预打包）
- DllReferencePlugin--使用 dll 文件

> 先配置一个 webpack.dll.js 文件，通过 DllPlugin 插件打包完成之后生成 xxx.dll.js 文件，生成完之后在 html 模板中引入 xxx.dll.js 文件（相当于把链接的库作为一个全局的变量）  
> 用 webpack 内置的 DllReferencePlugin 做一个映射，使用这个 dll 文件，告诉 Webpack 使用了哪些动态链接库  
> 在开发环境编译速度就比较快

webpack.common.js

```javascript
/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
const publicPath = path.join(__dirname, "..", "public");

module.exports = {
  entry: path.join(srcPath, "index"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"),
      filename: "index.html",
    }),
  ],
};
```

webpack.dev.js

```javascript
/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
const srcPath = path.join(__dirname, "..", "src");
const distPath = path.join(__dirname, "..", "dist");
// 第一，引入 DllReferencePlugin
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");

module.exports = merge(webpackCommonConf, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: srcPath,
        exclude: /node_modules/, // 第二，不要再转换 node_modules 的代码
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("development"),
    }),
    // 第三，告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      manifest: require(path.join(distPath, "react.manifest.json")),
    }),
  ],
  devServer: {
    port: 8080,
    compress: true, // 启动 gzip 压缩
    static: {
      // directory: path.join(__dirname, 'public'),
      directory: "./",
    },
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
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const distPath = path.join(__dirname, "..", "dist");

module.exports = merge(webpackCommonConf, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash:8].js", // 打包代码时，加上 hash 戳
    path: distPath,
    // publicPath: 'http://cdn.baidu.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
  },
  plugins: [
    new webpack.DefinePlugin({
      // window.ENV = 'production'
      ENV: JSON.stringify("production"),
    }),
  ],
});
```

webpack.dll.js

```javascript
/* eslint-disable */
const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");
const distPath = path.join(__dirname, "..", "dist");

module.exports = {
  mode: "development",
  // JS 执行入口文件
  entry: {
    // 把 React 相关模块的放到一个单独的动态链接库
    react: ["react", "react-dom"],
  },
  output: {
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
    // 也就是 entry 中配置的 react 和 polyfill
    filename: "[name].dll.js",
    // 输出的文件都放到 dist 目录下
    path: distPath,
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
    // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
    library: "_dll_[name]",
  },
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: "_dll_[name]",
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(distPath, "[name].manifest.json"),
    }),
  ],
};
```

![](../../static/img/webpack/3564C6DB-698A-41db-AC74-385BC6C5799D.png)

### 懒加载（异步加载）

![](../../static/img/webpack/775295BD-1F52-45cd-A26D-0742E7143DF4.png)

### 处理 jsx

[babel 官网](https://www.babeljs.cn/docs/babel-preset-react)

`npm install --save-dev @babel/preset-react`

![](../../static//img/webpack/23A9B5AA-2153-49eb-910D-C933C7BEF46E.png)

### 处理 vue

vue-loader

### webpack 性能优化
