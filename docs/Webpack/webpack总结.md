webpack-dev-server 启动本地服务，代理 http-proxy-middleware node 中间件  
启动 gzip 压缩  
缓存  
需在 nginx 中配置请求头

## loader

Loader 本身也是运行在 node.js 环境中的 JavaScript 模块  
它本身是一个函数，接受源文件作为参数，返回转换的结果  
webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个 编译生命周期都可以访问 compiler 对象  

babel-loader 处理 es6 @babel/polyfill @babel/core @babel/preset-env
style-loader  
css-loader  
less-loader  
sass-loader  
postcss-loader 处理浏览器兼容性问题  
file-loader  
url-loader，limit 将小图片转为 base64 减少一次资源请求  
contenthash，hash 值变了，就不走缓存  
MiniCssExtractPlugin.loader 代替 style-loader，抽离 css 为单独文件  
optimization.minimizer 压缩 css
html-loader 打包 html 中图片资源,html 中的图片 url-loader 没法处理，它只能处理 js 中引入的图片 / 样式中图片，不能处理 html 中 img 标签，需要引入其他 html-loader 处理。  
eslint-loader 对 js 基本语法错误/隐患，进行提前检查

## plugin

 插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量  

webpack.DefinePlugin  
HtmlWebpackPlugin  
CleanWebpackPlugin 清空打包文件  
SplitChunksPlugin 抽离公共的逻辑代码，第三方包和公用逻辑作为单独模块引用，动态引入  
DllPlugin 动态链接库插件，配置 webpack.dll.js 文件（react、react-dom），打包出 dll 文件，在 html 模板中引入 dll 文件，用 webpack 内置的 DllReferencePlugin 做一个映射,提高编译速度
OptimizeCssAssetsPlugin 压缩 css

处理 jsx @babel/preset-react 预设  
处理 vue vue-loader

## webpack 性能优化

优化打包构建速度，开发和体验效率  
优化产出代码，产品性能

`[name].contenthash`  
babel-loader, use: ["babel-loader?cacheDirectory"], cacheDirectory 对于 es6，编译过的不用重新编译  
happyPack 开启多进程打包  
ParallelUglifyPlugin 开启多进程压缩 js  
Ignore-Plugin 避免引入无用模块，直接不引入，代码中没有  
noParse 避免重复打包，引入，但不打包  
DllPlugin 对于第三方的包在生产环境没必要每次都编译  
懒加载 import()  
自动刷新 watch  
热更新 HotModuleReplacementPlugin hot 需要指定哪些文件需要热更新  
cdn 加速 将打包后的文件上上传到 cdn 服务器

自动刷新；整个网页全部刷新，速度较慢，状态丢失  
热更新：新代码生效，网页不刷新，状态不丢失

## module,chunk,bundle 的区别

module 是各个源码文件（一个文件就是一个 module），webpack 中一切模块  
chunk 是多模块合成的，如 entry，import() splitChunk（chunk 是 webpack 内存中的一个概念，webpack 中一切还没有处理的 module 的一个集合）  
bundle 是最终输出的文件（通过 webpack 的处理最终输出的文件）  
一个 chunk 对应一个 bundle，一个 chunk 可能包含多个 module

## Tree Shaking(删除无效代码)

ES6Module 可以实现 Tree Shaking 而 Commonjs 不行  
ES6Module 静态引入，编译时引入  
Commonjs 动态引入，执行时引入  
webpack 打包的过程是代码的分析和编译的过程，还没有真正的执行，是静态分析，要把无用的代码删掉，打包成线上的代码在运行。在使用 Tree Shaking 的时候，前提是代码需要固定，不能有逻辑

## Scope Hositing

直译：作用域提升，webpack3 就有了  
代码体积更小，运行更快  
创建函数的作用域少，内存开销也随之变小  
代码可读性更好

Scope Hoisting 原理  
分析出模块之间的依赖关系，尽可能将打散的模块合并到一个函数中，前提是不能造成代码冗余。因此，只有那些被引用一次的模块才能被合并。  
由于 Scope Hoisting 需要分析出模块之间的依赖关系，因此源码必须采用 ES6 模块化语法，不然她讲无法生效。和使用 TreeShaking 中介绍的类似

启动 Scope Hoisting  
第一种：mode:'production'  
第二种：手动启动 在 webpack 中已经内置 Scope Hoisting,只需要配置 ModuleConcatenationPlugin 插件即可

## source map(源码映射)
```javascript
module.exports = {
  devtool: "inline-source-map", // 关键代码
};
```