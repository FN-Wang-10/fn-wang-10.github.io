## 一.Nodejs 的学习要求

1. 环境配置
2. linux 命令或者 Dos 命令操作
3. Nodejs 是后期框架学习的基本工具。特别是模块化，配置文件......
4. Nodejs 是服务器端的环境，脱离浏览器执行 js 代码。

## 二.Nodejs 的概述

官网：http://nodejs.cn/

1.Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境.

[Chrome V8 引擎]  
是一个由 c++编写的一个浏览器运行机制，作用就是将 js 代码编译为 cpu 可以解析的机器代码.

[JavaScript 运行环境]  
JavaScript 脚本的运行环境有浏览器和 node.js 环境两种

2.Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效

- 事件驱动： 任务执行，发布者，订阅者，事件驱动.
- 异步（非阻塞）： 执行某一个任务的同时也可以执行其他任务
- 同步（阻塞）： 执行某一个任务，这个任务如果没有执行完成，其他任务必须等待
- I/O: 输入/输出（ 数据库操作，文件系统操作等 ） - 服务器的环境
- 非阻塞 I/O 模型： 当使用 Node.js 来实现数据库操作、文件系统等操作时，要进行的异步操作，异步操作的核心传统实现方式就是回调函数和事件。

## 三.Nodejs 的安装

### 1.Node.js 版本

https://nodejs.org/en/

- LTS[long Term Support] ————长期稳定版本
- Current ———— 最新版

### 2.安装方式

#### 1.安装包安装

电脑只能安装一个版本，不能享受其他版本的功能。  
一路 next，千万不要修改路径。

#### 2.nvm 安装

电脑中可以安装多个版本并且可以随意切换版本，但 nvm 安装过程非常麻烦  
nvm 的官方版本只支持 Linux 和 Mac。 Windows 用户，可以用 nvm-windows。（注意安装前卸载电脑里面的 node 版本）

#### nvm 安装过程

第一步：下载 nvm-windows，并安装。  
第二步：配置 nvm 全局变量(安装 nvm 的路径)  
1.路径：`C:\Users\wangzongxin\AppData\Roaming\nvm`  
2.`我的电脑/属性/高级设置/环境变量/系统变量NVM_HOME`: `上面配置的路径NVM_SYMLINK: C:\Program File\node.js打开path,添加 %NVM_HOME%  和   %NVM_SYMLINK%`  
3.更改下载源  
 `找到 C:\Users\wangzongxin\AppData\Roaming\nvm\settings.txt 添加下载源`  
 `node_mirror: https://npm.taobao.org/mirrors/node/`  
 `npm_mirror: https://npm.taobao.org/mirrors/npm/`  
第三步：NVM 使用

- nvm list 列出当前电脑下的 Node.js 的版本列表
- nvm use 版本号 切换某一个版本
- nvm install 版本号 安装某一个版本
- nvm install latest 安装 Current
- nvm install stable 安装 LTS
- nvm uninstall 版本号 卸载某一个版本
- nvm list available 查看可下载的 nodejs 版本信息，根据需要下载对应的版本，LTS 列表示稳定版本  
  3.如何检查 node 是否安装成功 - 通过打印版本测试  
  打开命令行工具(dos 或者 linux) 任意位置输入：`node -v` 或者 `node --version`  
  注意事项  
  如果 nvm 安装失败，下载高版本的 LTS 进行安装,最好 16 版本。 win7 系统不适合开发人员使用。  
  如果 nvm 安装成功，下载高版本，低版本都可以安装，随意切换。

## 四.Nodejs 的相关使用

打开编辑器终端 `ctrl+shift +` 或选中文件夹右键 - > 终端打开`  
1.终端使用命令，仅仅为了方便，外部启动一样。  
2.repl 命令 - 交互式解释器 - 命令行内部直接书写 node.js 语法(js 语法),弊端是不方便修改  
输入 node，回车，可以编写 js 语法  
退出，按两次 ctrl+c  
3.文件执行 - 重点开发包上传到 npm 官网  
node 文件名  
node.js 都是 js 文件，后缀名都是.js  
通过 node 直接执行文件名。  
注意：  
当前目录下就一个文件 tab 键可以补全文件名  
终端中可以通过键盘的上下键来回滚你打过的命令

### nodemon 模块的安装（第三方模块）

监听 js 文件变化 - nodemon 模块(包，插件)

npm install（i）nodemon -g ———— 通过 npm 命令全局安装(任意目录)modemon 模块

- npm 是 NodeJS 的包管理工具，安装 node 时自带的，安装完 node 自动安装了 npm
- install:命令行中简写为 i，安装的意思
- nodemon:模块，包，插件
- -g:全局安装 global
  nodemon 文件名 ———— 监听文件的变化，得到结果。  
  ctrl+c ————取消监听

### 1.npm(Nodejs 自带的包管理工具)

1.安装完 node 的同时，npm 也已经安装完成了，也可以通过 DOS 或者 linux 命令任意位置输入  
`npm -v` 或者 `npm --version` ————查看版本，查看是否安装

2.npm(包管理工具)  
https://www.npmjs.com/  
提供了 100 万个包，但是必须安装后才能使用，安装完成后自动在本地生成一个 node_modules 文件夹，里面就是下载或者依赖的包。  
`node_modules` 文件夹————里面就是下载或者依赖的包。  
`package.json` 文件————包含项目的一切信息，特别是帮助我们记录安装的模块信息。  
`package-lock.json`————锁定包的版本，自动生成的。

3.npm 的概念  
NodeJS 自带的包管理工具 npm 为你和你的团队打开了连接整个 JavaScript 天才世界的一扇大门，它是世界上最大的软件注册表。

4.npm 的由来  
仓库的作者发邮件通知 jQuery 、Bootstrap 、Underscore 的作者使用 npm publish 把代码提交到 仓库上，分别取名 jquery、bootstrap 和 underscore。开发社区里的其他人如果想使用这些代码，通过 npm install 加上你要使用包的名称进行安装，或者把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码，下载完的代码出现在 node_modules 目录里，就可以随意使用了。这些可以被使用的代码被叫做包或者模块。

5.npm 相关的命令介绍  
`npm view [packagename] versions` ————查看 npm 下面 package 所有的版本  
`npm update [packagename]` 更新包  
`npm uninstall packagename` 卸载包  
`npm cache clean -f` ：清除 npm 的缓存  
安装对应版本的包以及安装的位置  
`npm install [packagename] @版本号` 安装的位置(-D/-S)  
`npm install [packagename] -D` ————安装到开发环境(开发环境的代码经过编译后执行) `-D(--save-dev)`  
`npm install [packagename] -S` ————安装到生产环境(生产环境的代码直接执行不需要编译，线上环境) `-S(--save)`  
注意：npm 国外的服务器，安装模块有时候很慢。如果安装失败，显示 err 或者红色的错误，但是如果出现警告直接忽略。安装包很长时间没有反应，ctrl+c 退出，重新安装

6.npm 和 npx 的区别  
npm 是一个 node 包安装工具。  
npx 的作用是先检查本地有没有安装某个包，如果没有去对应的远程注册表中找，找到的话直接使用，不用下载到本地 node-modules 包里面，这样就能优化本地项目的大小，也可以避免安装 package 到全局。  
例子：比如你要使用 nodemon，可以先安装全局的 nodemon，再使用 nodemon 监听 js 文件  
如果是采用 npx，直接通过 npx 调用 nodemon 执行对应的监听，无需下载到本地，用完也就没有了 nodemon

### 2.nrm

nrm(npm registry manager)是 npm 的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。  
1.首先全局安装 nrm ———— `npm install -g nrm / npm install nrm -g`(都可以)  
2.列出 npm 安装模块可用的源 ————`nrm ls ` 3.使用哪个源 ———— `nrm use taobao` 将 npm 的安装源切换到 taobao，安装速度比 npm 原来的源要快。

### 3.cnpm - 最优秀的下载方法，cnpm 是最快的

NMP 安装插件是从 NPM 官网下载对应的插件包，该网站的服务器在国外，经常会出现下载缓慢或出现异常，这时便需要找到另外的方法提供稳定的下载，这个方法就是 CNPM。阿里巴巴的淘宝团队把 NMP 官网的插件都同步到了在中国的服务器，提供给我们从这个服务器上稳定下载资源。  
1.安装 cnpm ————`npm install -g cnpm --registry=https://registry.npm.taobao.org`  
2.测试  
通过命令：`cnpm -v` ————检测是否安装成成功  
后期包的安装全部使用 cnpm 取代 npm  
`cnpm i md5 -S`

### 4.yarn

Yarn 对你的代码来说是一个包管理器。它可以让你使用并分享 全世界开发者的（例如 JavaScript）代码,Yarn 能够快速、安全、 并可靠地完成这些工作。yarn 来自 facebook.
`npm install -g yarn` ———— 安装全局 yarn  
`yarn global add  [package]` ———— 安装全局模块(包)  
`yarn add  [package] --dev` ———— 安装依赖的模块(包)  
`yarn init`：初始化项目；  
`yarn install`：安装 package.json 文件里定义的所有依赖包；  
`yarn remove  [package]`：卸载模块(包)。  
`yarn global remove [package]`：卸载全局的包

### 5.总结

1.安装依赖包采用 cnpm yarn 比较多  
2.安装的时候有可能报错，重新安装

主流包管理工具 npm、yarn、cnpm、pnpm 之间的区别与联系  
https://blog.csdn.net/qq_32614411/article/details/80894605

### package.json 文件（介绍和生成）

1.`npm init` ———— 项目初始化（用户需回答一些问题，然后在当前目录生成一个基本的 package.json 文件。）  
package.json 文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。  
2.`npm init -y` ———— 快速生成 package.json 文件，路径中不能包含空格或者中文.  
3.`npm install` ———— 根据 package.json 配置文件，自动下载所需的模块，模块包括生产环境和开发环境中的所有模块，一次性下载完成所有的模块。  
4.package.json 文件中核心属性的介绍。

1.script 属性  
通过 script 属性可以指定脚本命令，提供 npm 直接调用。  
`npm run-script` 自定义的名称 ———— 调用 script 里面重新声明的命令  
npm run 自定义的名称 ———— 调用 script 里面重新声明的命令  
npm run 是 npm-script 的缩写，推荐使用前者。  
npm 内置了两个命令的缩写：  
npm test 等同于执行了 `npm run test`  
npm start 等同于执行了 `npm run start`  
npm run 后面不加任何参数，列出 script 里面所有的命令。  
2.dependencies 属性：生产环境 devDependencies 属性：开发环境  
npm 安装的包可以装在生产环境和开发环境中  
生产环境：线上环境依然存在，安装的包里面的代码直接使用，无需编译。jquery  
开发环境：安装包里面的代码需要编译，在开发时候才需要。gulp(代码压缩)  
`npm i jquery -S / npm i jquery --save` ———— 安装包到生产环境  
`npm i gulp -D / npm i gulp --save-dev` ———— 安装包到开发环境

## 六.commonjs 规范

1.CommonJS 最开始是 Mozilla 的工程师于 2009 年开始的一个项目，它的目的是让浏览器之外的 JavaScript 能够通过模块化的方式来开发和协作---Node.js(服务器端环境)。
ES6 的模块化 2015 年提出的，commonJS 规范 2009 提出

2.CommonJS 是最早的规范。  
CommonJS 的规范中，每个 JavaScript 文件就是一个独立的模块.
CommonJS 的规范中提出定义模块 调用模块 配置模块的方式方法.  
CommonJS 规范的主要适用场景是服务器端编程，所以采用同步加载模块的策略.

3.Node.js 实现了 commonjs 这一规范  
解读：利用 Node.js 实现这个规范下面的定义模块，调用模块，以及配置模块。

4.自定义模块：参考 commonjs 规范由用户书写的模块，基于 Node.js 实现。

1.定义模块：

```javascript
// 定义单个模块：module.exports = function(){}     es6 定义单个模块：exprot default function fn()
// 定义多个模块：module.exports = { }                     es6 定义多个模块：export{}
```

2.调用模块

```javascript
const {} = require("./模块名"); //   es6  import{} from './模块名'
const defineObj = require("./definemodule"); //省略扩展名
// defineObj相当于definemodule.js暴露的对象。
```

3.配置模块  
上面调用模块的./(当前目录)表示配置模块的意思，说明当前的模块在本地，是我们自定义的，不是第三方或者 Node.js 内置的。  
如果不添加./，自动去 node_modules 文件夹里面去找。但是 node_modules 里面是安装的第三方模块。本地模块在 node_modules 里面不存在。

5.模块的划分，三种模块

- 自定义模块 （自己写）
- 内置模块 (无需安装，直接使用)
- 第三方模块（需要通过 npm 安装使用）

  1.自定义模块（自己写）

```javascript
// 利用commonjs规范由用户书写的模块
- module.exports = { }————定义模块
- const {} = require('./模块名')————调用模块
// 自定义模块
const name = 'zhangsan';
const fn = function() {
    console.log('我是函数')
}
const obj = {
        a: 1,
        b: 2,
        c: 3
    }
// 使用module.exports暴露上面的信息。
//自定义多个模块
module.exports = {
        name,
        fn,
        obj
    }
//自定义单个模块
module.exports = function() {
     console.log('123');
    }


//1.调用模块+配置模块
// const defineObj = require('./definemodule');
//defineObj相当于definemodule.js暴露的对象
// console.log(defineObj.name);
// console.log(defineObj.fn());
// console.log(defineObj.obj);
// console.log(defineObj.obj.a);
// console.log(defineObj.obj.b);
// console.log(defineObj.obj.c);
//2.解构操作
const { name, fn, obj } = require('./definemodule.js');
console.log(name);
console.log(fn());
console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
```

2.第三方模块（需要安装使用）  
引入第三方模块操作

- 1.npm 提供的由第三方开发的模块，npm 安装后才能使用。
- 2.如果是第三方模块，安装后使用，一开始就要初始化这个项目(package.json)`npm init -y`
- 3.安装模块（`cnpm i request -S`）  
  1.request 模块————请求（可以拿到第三方数据接口）  
  2.md5 模块————加密  
  如何使用第三方模块：最常见的操作。

```javascript
// 1.引入模块
const request = require("request"); //获取接口数据
// 2.使用模块
const url = "https://suggest.taobao.com/sug?code=utf-8&q=apple";
request(url, function (error, response, body) {
  console.error("error:", error); // 输出错误信息
  console.log("statusCode:", response && response.statusCode); // 打印响应状态码，http状态码
  console.log("body:", body); // 返回数据
});
```

3.Nodejs 内置模块（无需安装，直接引入使用）  
有 node 官方提供的，可以直接使用，无需安装。引入即可使用。

- 1.http 模块
- 2.fs 模块
- 3.path 模块
- 4.url 模块
- 5.queryString 模块
- 6.event 模块

### 1.http 模块————创建服务器（后端）生成接口

```javascript
// 要使用 HTTP 服务器和客户端，则必须 require('http')
// Node内置的模块，直接引入使用，无需安装。
// php安装服务器，约定域名ip和端口
// Node自定义服务器，约定域名(localhost/127.0.0.1)自由设置端口
const http = require('http'); //引入模块
const host = 'localhost';//主机
const port = '3000';//自定义的端口
// 创建一个服务器
const server = http.createServer((req,res)=>{//创建服务器，返回对象server
  // request: 请求， 前端->后端
  // response:响应， 后端->前端
  // 如果解析html标签，设置响应头(文档格式是html格式，字符编码是utf-8)
  res.writeHead(200,{
    'Content-type':'text/html;charset=utf-8'
  });
  res.write('hello,nodejs');//写入信息到浏览器中，信息包含标签，解析标签
  res.write('<hr>');//写入信息到浏览器中，信息包含标签，解析标签
  res.write('hello,nodejs');//写入信息到浏览器中，信息包含标签，解析标签
  res.end();//结束服务器,一定添加
});
// listen方法：设置端口和主机
server.listen(port,host,()=>{
  console.log(`The server is running at http://${host}:${port}`);
});


案例：
后端：通过Nodejs的内置模块http创建服务器，引入第三方的接口
前端:通过ajax响应到后端发送的数据（会产生跨域问题，前后端交互牵扯到两台电脑通信）
后端代码————Nodejs
// 新建服务器
const http = require('http');
const request = require('request');//获取接口数据,第三方模块，安装使用
const host = 'localhost';
const port = '5000';
const url = 'https://suggest.taobao.com/sug?code=utf-8&q=xiaomi';
const url2 = 'http://api.k780.com/?app=phone.get&phone=13800138000&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
const server = http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');//解决跨域的设置cors
  res.writeHead(200,{//设置文档类型和编码
    'content-type':'text/html;charset=utf-8'
  });
  request(url,(err,status,body)=>{
    res.write(body);//将括号里面的信息输出到浏览器
    res.end();//结束服务器并且将括号里面的信息输出到浏览器，一定添加，否则服务器一直加载
  });
});
server.listen(port,host,()=>{
  console.log(`The server is running at http://${host}:${port}`);
});

前端
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
<script>
  // 跨越问题，域名不同，端口不同，协议不同都会产生跨越
  // 访问：如何访问(live Server)
  $.ajax({
    url: "http://localhost:5000/",
    dataType: "json",
  }).then((resData) => {
    console.log(resData);
  });
</script>
```

- http 建服务器
- get 获取数据
- 爬虫

```javascript
创建服务器（后端）————http模块
1.创建服务器
// http模块：创建服务器，获取数据，爬虫
// 1.创建服务器
// const http = require('http');
// const host = 'localhost';
// const port = '5000'; //端口不可以被占用，如果出不来，可以换一个端口
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); //解决跨域的设置cors
//     //如果解析html标签，需要设置请求头（文档格式是html格式，字符编码是utf-8）
//     res.writeHead(200, {
//         'Content-type': 'text/html;charset=utf-8'
//     })
//     res.write('hello word'); //写入信息到浏览器中，信息包含标签，解析标签
//     res.write('<hr>'); //写入信息到浏览器中，信息包含标签，解析标签
//     res.write('hello word'); //写入信息到浏览器中，信息包含标签，解析标签
//     res.end();
// }); //这里可以链式操作
// server.listen(port, host, () => {
//     console.log(`The server is a running at http://${host}:${port}`);
// });

```

2.get 获取接口数据

```javascript
// 要使用 HTTP 服务器和客户端，则必须 require('http')
//Nodejs内置的模块，直接引入使用，无需安装
// php安装服务器，约定域名ip和端口
// Node自定义服务器，约定域名(localhost/127.0.0.1)自由设置端口
const http = require("http"); //引入模块
const host = "localhost"; //主机
const port = 5000; //自定义的端口
const request = require("request");
const url = "https://suggest.taobao.com/sug?code=utf-8&q=huawei"; //获取接口数据
// const url2 = 'http://api.k780.com/?app=phone.get&phone=13800138000&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
//创建一个服务器
const server = http.createServer((req, res) => {
  //创建服务器，返回一个对象
  res.setHeader("Access-Control-Allow-Origin", "*"); //解决跨域的设置cors
  // 如果解析html标签，设置响应头(文档格式是html格式，字符编码是utf-8)
  res.writeHead(200, {
    "Content-type": "text/html;charset=utf-8",
  });
  request(url, function (error, response, body) {
    // console.error('error:', error); //输出错误信息
    // console.log('statusCode:', response && response.statusCode); // 打印响应状态吗 http状态码码
    // console.log('body:', body); //返回数据
    // console.log(body);
    res.write(body); //写入信息到浏览器中，信息包含标签，解析标签
    res.end(); //结束服务器,一定添加
  });
});
server.listen(port, host, () => {
  console.log(`The server is running at http://${host}:${port}`);
});

// 2.get获取接口数据
const http = require("http"); //引入http模块
http
  .get("http://localhost:5000/", (res) => {
    //这里的接口来自于day02中taobao的数据，是http,同时https在这里不支持
    const { statusCode } = res; //接收状态码
    const contentType = res.headers["content-type"]; //文档类型
    let error;
    // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
    if (statusCode !== 200) {
      //如果不成功，则报请求失败
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      //接口的数据类型
      error = new Error(
        "Invalid content-type.\n" +
          `Expected application/json but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      // 消费响应数据以释放内存
      res.resume();
      return;
    }
    res.setEncoding("utf8"); //设置编码
    let rawData = ""; //接收数据的变量
    res.on("data", (chunk) => {
      rawData += chunk;
    }); //获取数据，数据是一段一段拼接的
    res.on("end", () => {
      try {
        //  try...catch...容错处理
        const parsedData = JSON.parse(rawData); //获取的字符串数据转换成对象
        console.log(parsedData); //输出数据
      } catch (e) {
        console.error(e.message); //输出错误信息
      }
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
// 要开两个终端服务，一个终端是输出接口（本小节），一个是请求接口(day02--taobao.js)
```

爬虫，获取页面数据

```javascript
//爬虫，获取页面数据
const http = require("http");
const cheerio = require("cheerio"); //第三方模块，需要安装,清洗数据，语法类似jquery
//配置对象，分析网站信息
// http://oa.1000phone.net/oa.php/Index/index?more=293
const options = {
  hostname: "oa.1000phone.net", //主机名
  port: 80, //端口
  path: "/oa.php/Index/index?more=293", //路径
  method: "GET", //请求方式
  headers: {
    //获取当前抓取页面的请求头（在控制面板中，network->dov->Request Headers中）
    Accept:
      " text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    Connection: "keep-alive",
    Cookie:
      "PHPSESSID=ST-98282-JtU0mCHmHFND3Tg06geTuG245Og-cas-54b674fd8f-l4dv8",
    Host: "oa.1000phone.net",
    Referer: "http://oa.1000phone.net/oa.php",
    "Upgrade-Insecure-Requests": 1,
    "User-Agent":
      " Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
  },
};
http
  .get(options, (res) => {
    // http爬取的数据必须是http协议
    const { statusCode } = res; //状态码
    const contentType = res.headers["content-type"]; //设置文档类型
    let error;
    // 任何 2xx 状态码都表示成功响应，但这里只检查 200。
    if (statusCode !== 200) {
      //请求不成功
      error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
      //数据类型
      error = new Error(
        "Invalid content-type.\n" +
          `Expected application/json but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      // 消费响应数据以释放内存
      res.resume();
      return;
    }
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
      rawData += chunk;
    });
    res.on("end", () => {
      try {
        // console.log(rawData); //输出获取的数据
        let $ = cheerio.load(rawData); //类似jquery下面的$符号
        $("#sample-table-1 td a").each(function () {
          //遍历a标签
          console.log($(this).text());
        });
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  .on("error", (e) => {
    console.error(`Got error: ${e.message}`);
  });
```

### fs path

文件模块的核心  
文件夹进行增删改查  
文件进行增删改查

```javascript
const fs = require("fs"); //引入模块,生成对象
const path = require("path"); //引入路径模块，生成对象
```

一.路径模块 path 的应用
path 是用于获取当前文件的磁盘路径[绝对路径],Node 只要使用路径，基本上都是用磁盘的路径
`path.join(__dirname,'fileurl')` 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
`__dirname`：获取文件的物理路径。

```javascript
console.log(path.join(__dirname));//获取当前文件的目录位置
D:\phpstudy_pro\WWW\JS2114\week07\Day 27_Nodejs\Day02\code\node_built_module
console.log(path.join(__dirname,'/index','/data','d.html'));//获取当前文件的目录位置+拼接
D:\phpstudy_pro\WWW\JS2114\week07\Day 27_Nodejs\Day02\code\node_built_module\index\data\d.html
```

二.文件模块的操作

```javascript
1.文件操作 - 增
fs.writeFile(路径(文件名),写入内容,回调函数)
如果文件不存在，创建，存在写入内容
const str= 'function fn(){ console.log(100)}';
fs.writeFile(path.join(__dirname,'index.js'),str,err=>{
if(err) throw err;//如果有错误，抛错
   console.log('index.js文件创建成功');
});
2.文件操作 - 删
fs.unlink(路径(文件名),回调函数)
fs.unlink(path.join(__dirname,'index.js'),err=>{
    if(err) throw err;//如果有错误，抛错
    console.log('删除成功');
 });
3.文件操作——改（改变创建出来的文件的内容）
修改内容
// const str1 = 'function fn_add(){console.log(1222222)}';
// fs.writeFile(path.join(__dirname, 'index.js'), str1, {
//     flag: 'w', // w:修改   a:追加
// }, err => {
//     if (err) throw err;
//     console.log('修改成功');
// })
追加内容
// const str2 = 'function fn_add(){console.log(22222222222)}';
// fs.writeFile(path.join(__dirname, 'index.js'), str2, {
//     flag: 'a', // w:修改   a:追加
// }, err => {
//     if (err) throw err;
//     console.log('追加成功');
// })
4.文件操作——查（读取文件内部的内容）
doc文件中的内容
utf-8字符编码
fs.readFile(路径（文件名）,'utf-8',回调函数)
// fs.readFile(path.join(__dirname, 'index.js'), 'utf-8', (err, doc) => {
//     if (err) throw err;
//     console.log(doc);
//     console.log(doc.toString());
// })
```

三.目录（文件夹）的操作

```javascript
1.目录操作——增
fs.mkdir(路径（创建的文件名），回调函数)
// fs.mkdir(path.join(__dirname, 'file'), err => {
//     if (err) throw err;
//     console.log('目录创建成功');
// })
2.目录操作——删
fs.rmdir(路径（要删除的文件名）,回调函数)
// fs.rmdir(path.join(__dirname, 'file'), err => {
//     if (err) throw err;
//     console.log('目录删除成功');
// })
3.目录操作——改
fs.rename(路径 （原文件名），路径（新的文件名），回调函数)
// fs.rename(path.join(__dirname, 'file'), path.join(__dirname, 'newfile'), err => {
//     if (err) throw err;
//     console.log('目录修改成功');
// })
4.目录操作——查
fs.stat(路径（文件名）,回调函数)
//该方法返回一个对象
// stats.isDirectory()查看当前的文件是不是文件夹，返回布尔值
// stats.isFile()查看当前的文件是不是文件，返回布尔值
// fs.stat(path.join(__dirname, 'newfile'), (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
// })
案例：创建一个目录file，里面包含10个文件。创建完成还要删除这些文件和目录
// fs.mkdir(path.join(__dirname, 'file'), err => {
//     if (err) throw err;
//     for (let i = 1; i <= 10; i++) {
//         fs.writeFile(path.join(__dirname, `file/index${i}.js`), `文件${i}`, err => {
//             if (err) throw err;
//             console.log('文件创建成功');
//         });
//     }
//     console.log('目录创建成功');
// })
//删除文件或者目录，先读取目录中的文件，删除文件，最后在删除目录
//读取目录文件列表的方法：readdir方法
// fs.readdir(路径（文件名），回调函数)
fs.readdir(path.join(__dirname, 'file'), (err, docs) => {
    if (err) throw err;
    // console.log(docs); //输出目录中的内容，以数组的形式输出
    //遍历删除文件，同步，Nodejs的大部分方法通过添加Sync变成同步的方法
    docs.forEach(value => {
        // console.log(value);//目录中 的每一项内容
        fs.unlinkSync(path.join(__dirname, `file/${value}`), err => {
            if (err) throw err;
            console.log(`${value}文件删除成功`);
        });
    });
    //删除目录
    fs.rmdir(path.join(__dirname, 'file'), err => {
        if (err) throw err;
        console.log('目录删除成功');
    });
    console.log('目录读取成功');
})
```

url 模块

```javascript
1.url.parse(url)//将一个url字符串转换成对象并返回
2.url.format(obj)//parse逆运算
const url = require('url'); //引入内置对象，不需要安装，直接使用
// 1.url.parse(url)//将一个url字符串转换成对象并返回
// const urlStr = 'https://uland.taobao.com/sem/tbsearch?a=1&b=2&c=3&d=4';
// console.log(url.parse(urlStr)); //返回一个对象
// Url {
//     protocol: 'https:',//协议
//     slashes: true,//双斜线
//     auth: null,//作者
//     host: 'uland.taobao.com',//主机
//     port: null,//端口
//     hostname: 'uland.taobao.com',//主机名
//     hash: null,//哈希值
//     search: '?a=1&b=2&c=3&d=4',//数据
//     query: 'a=1&b=2&c=3&d=4',//数据，不带前面的？
//     pathname: '/sem/tbsearch',//路径名
//     path: '/sem/tbsearch?a=1&b=2&c=3&d=4',//路径
//     href: 'https://uland.taobao.com/sem/tbsearch?a=1&b=2&c=3&d=4'//整个地址
//   }
// console.log(url.parse(urlStr, true).query);//{ a: '1', b: '2', c: '3', d: '4' }
// 2.url.format(obj)//parse逆运算
const urlObj = {
    protocol: 'https:', //协议
    slashes: true, //双斜线
    auth: null, //作者
    host: 'uland.taobao.com', //主机
    port: null, //端口
    hostname: 'uland.taobao.com', //主机名
    hash: null, //哈希值
    search: '?a=1&b=2&c=3&d=4', //数据
    query: 'a=1&b=2&c=3&d=4', //数据，不带前面的？
    pathname: '/sem/tbsearch', //路径名
    path: '/sem/tbsearch?a=1&b=2&c=3&d=4', //路径
    href: 'https://uland.taobao.com/sem/tbsearch?a=1&b=2&c=3&d=4' //整个地址
}
console.log(url.format(urlObj)); //https://uland.taobao.com/sem/tbsearch?a=1&b=2&c=3&d=4
```

5.queryString 模块

```javascript
1.parse:将一个字符串对象转换成对象格式
2.stringify:将对象转换成字符串格式
3.escape:将中文进行编译
4.unescape:讲中文进行解码
const queryString = require('querystring'); //引入内置模块，无需安装，直接使用
// 1.parse:将一个字符串对象转换成对象格式
// queryString.parse(字符串，第一个分隔符，第二个分隔符)
// 默认第一个分隔符：&，可以自由设定
// 默认第二个分隔符：=，可以自由设定
// const str = 'name=zhangsan&age=18&sex=男';
// console.log(queryString.parse(str));//{ name: 'zhangsan', age: '18', sex: '男' }
// const str = 'name:zhangsan%age:18%sex:男';
// console.log(queryString.parse(str, '%', ':'));//{ name: 'zhangsan', age: '18', sex: '男' }
// 2.stringify:将对象转换成字符串格式
// queryString.stringify(obj);
// const obj = { name: 'zhangsan', age: '18', sex: '男' };
// console.log(queryString.stringify(obj));//name=zhangsan&age=18&sex=%E7%94%B7
// 3.escape:将中文进行编译
// console.log(queryString.escape('name=东北二人转'));//name%3D%E4%B8%9C%E5%8C%97%E4%BA%8C%E4%BA%BA%E8%BD%AC
// 4.unescape:讲中文进行解码
// console.log(queryString.unescape('name%3D%E4%B8%9C%E5%8C%97%E4%BA%8C%E4%BA%BA%E8%BD%AC'));//name=东北二人转
```

6.event 模块

```javascript
const EventEmitter = require("events"); //引入模块，无需安装，直接引用
class MyEmitter extends EventEmitter {} //定义一个MyEmitter类去继承EventEmitter类
const myEmitter = new MyEmitter(); //实例化MyEmitter这个类，生成一个对象myEmitter
myEmitter.on("haha", () => {
  //绑定事件
  console.log("我是一个自定义的事件，名字叫做haha");
});
myEmitter.emit("haha"); //触发事件
// 设计模式：自定义事件
```

<!-- 七.mongodb数据库和robo3T可视化工具
1.数据库
1.NoSQL，指的是非关系型的数据库。NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。
Mysql数据库,是关系型数据库,需要sql语句的支持.
2.NoSQL用于超大规模数据的存储，例如谷歌或Facebook每天为他们的用户收集万亿比特的数据。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。
2.MongoDB简介
MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
MongoDB 是非关系型数据库当中功能最丰富，最像关系型数据库的。
BSON介绍
BSON是一种类似json的二进制形式的存储格式，简称Binary JSON，它和JSON一样，支持内嵌的文档对象和数组对象
BSON有三个特点：轻量性、可遍历性、高效性。
后面大家会看到我们存在数据库里面的全部都是bson格式的数据。
3.mongodb数据库的安装.
MongoDB下载地址：https://www.mongodb.com/try/download/community
1.下载安装包
2.根据下面的顺序安装mongodb
  https://blog.csdn.net/weixin_41466575/article/details/105326230?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164802544316782092991450%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164802544316782092991450&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-3-105326230.142^v3^pc_search_result_cache,143^v4^control&utm_term=mongodb%E5%AE%89%E8%A3%85&spm=1018.2226.3001.4187
3.继续安装数据库的可视化工具(robo3T)
下载网址：https://robomongo.org/     一路next，安装完成

4.mongodb数据库的操作
1.终端命令行操作 - 了解使用
1.show dbs 查看当前电脑中所有的数据库列表
2.use 数据库名  表示切换/创建数据库，如果数据库不存在，自动创建。如果数据库中没有数据，不会显示出来这个数据库。
3.show collections 表示显示当前数据库下有哪些集合(集合类似于mysql的表)
重点：mongodb里面没有表，通过集合进行操作的(复数形式创建)，也就是mongodb里面的集合就是关系型数据库中的表。
4.增加
db.集合名称[复数].insert(bson数据)
db.集合名称[复数].save(bson数据)
2.利用可视化工具robo3t操作数据库。
1.robo3t连接mongodb
左上角连接图标(ctrl+n) - 左上角create创建连接(address地址：localhost / mongodb端口：27017) - save
2.双击集合刷新
3.通过robo3t工具对集合进行各种操作
5.操作数据库
操作数据库：利用第三方模块mongoose操作连接数据库。
// 1.安装引入mongoose
const mongoose = require('mongoose');
const http = require('http');
const host = 'localhost';
const port = '8000';
// 2.连接数据库
mongoose.connect('mongodb://localhost:27017/student');//students数据库名
// 3.设置字段类型
const schema = new mongoose.Schema({
  name:'string',
  age:'string',
  sex:'string'
});
// 4.创建模型
const userlist = mongoose.model('students',schema);//参1：集合名称，参2：字段类型
// 5.开启服务器，获取数据,输出
const server = http.createServer((req,res)=>{
  res.writeHead(200,{
    'content-type':'text/html;charset=utf-8'
  });
  userlist.find({},(err,docs)=>{//docs获取的所有数据，每组数据对象的形式存储到另外一个数组。
    res.write(JSON.stringify(docs));
    res.end();
  });
});
server.listen(port,host,()=>{
  console.log(`The server is running at http://${host}:${port}`);
});


八.express框架
node.js可以http模块创建服务器，但是我们只是发送了一些简单的字符串，功能比较单一。
1.express框架介绍 - https://www.expressjs.com.cn/
自己了解（koa框架）
express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。使用 express 可以快速地搭建一个完整功能的网站。
express 框架核心特性：
可以设置中间件来响应 HTTP 请求。
定义了路由表(路由：路径)用于执行不同的 HTTP 请求动作。
可以通过向模板传递参数来动态渲染 HTML 页面。
express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
2.利用express搭建脚手架。
express脚手架安装  ( express-generator )
全局安装： npm i express-generator -g
express框架的两种使用(前后端分离，前后端不分离)
创建项目：
express -e xx名    快速生成xx名的项目(包括目录)
express -e .  已经生成目录（自己创建一个文件，然后执行命令）
-e表示 ejs模板，通过express --help查看其它格式
- res.render:渲染数据到模板引擎
- res.json:输出json数据
- res.send:直接发送数据
3.什么是中间件？
中间件就是一个具有特定功能的封装函数(新的叫法，其实就是原生js里面的函数或者方法)
中间件三个参数
- request  表示请求，记录了前端给后端的所有信息
- response 表示响应，记录了后端给前端的信息
- next 表示连接，连接request 和 response
express里面的跨越，通过cors模块进行解决
聊天室案例 -->
