总体来说分为以下几个过程:

1. `DNS`解析
2. `TCP`连接
3. 发送`HTTP`请求
4. 服务器处理请求并返回`HTTP`报文
5. 浏览器解析渲染页面
6. 连接结束

## 一、DNS 解析

### 1. 什么是`DNS`

首先要知道什么是`DNS`

> 域名系统（英文：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS 使用 TCP 和 UDP 端口 53。当前，对于每一级域名长度的限制是 63 个字符，域名总长度则不能超过 253 个字符

### 2. 与域名服务器交互解析

域名解析的过程是一个递归查询的过程。

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220303171624.png" width="100%"/>

上述图片是查找`www.google.com`的 IP 地址过程。首先在本地域名服务器中查询 IP 地址，如果没有找到的情况下，本地域名服务器会向根域名服务器发送一个请求， 如果根域名服务器也不存在该域名时，本地域名会向 com 顶级域名服务器发送一个请求，依次类推下去。直到最后本地域名服务器得到 google 的 IP 地址并把它缓存到本地，供下次查询使用。从上述过程中，可以看出网址的解析是一个从右向左的过程: `com -> google.com -> www.google.com`。但是你是否发现少了点什么，根域名服务器的解析过程呢？事实上，真正的网址是`www.google.com.`，并不是多打了一个`.`，这个`.`对应的就是根域名服务器，默认情况下所有的网址的最后一位都是`.`，既然是默认情况下，为了方便用户，通常都会省略，浏览器在请求 DNS 的时候会自动加上，所有网址真正的解析过程为: `. -> .com -> google.com. -> www.google.com.`。

### 3. 添加缓存后的查询过程

上面主要是与不同域名服务器之间进行交互，其实真正的解析过程大部分依靠的是缓存。

1. **浏览器缓存**: 首先会向浏览器的缓存中读取上一次访问的记录，在 chrome 可以通过地址栏中输入`chrome://net-internals/#dns`查看缓存的当前状态
2. **操作系统缓存**：查找存储在系统运行内存中的缓存。
3. **在 host 文件中查找**：如果在缓存中都查找不到的情况下，就会读取系统中预设的 host 文件中的设置。
4. **路由器缓存**：有些路由器也有 DNS 缓存的功能，访问过的域名会存在路由器上。
5. **ISP DNS 缓存**：互联网服务提供商（如中国电信）也会提供 DNS 服务，比如比较著名的 `114.114.114.114`，在本地查找不到的情况下，就会向 ISP 进行查询，ISP 会在当前服务器的缓存内查找是否有记录，如果有，则返回这个 IP，若没有，则会开始向根域名服务器请求查询。
6. **顶级 DNS 服务器/根 DNS 服务器**：根域名收到请求后，会判别这个域名(`.com`)是授权给哪台服务器管理,并返回这个顶级 DNS 服务器的 IP。请求者收到这台顶级 DNS 的服务器 IP 后，会向该服务器发起查询，如果该服务器无法解析，该服务器就会返回下一级的 DNS 服务器 IP（`google.com`），本机继续查找，直到服务器找到(`www.google.com`)的主机。

## 二、TCP 连接

<!-- 具体流程查看：[HTTP三次握手与四次挥手](三次握手&&四次挥手.md) -->

具体流程查看：[HTTP 三次握手与四次挥手]

## 三、发送 HTTP 请求

在应用层，浏览器会分析这个 url，并设置好请求报文发出。请求报文中包括请求行、请求头、空行、请求主体。https 默认请求端口 443， http 默认 80。

以下是请求`google`首页的请求头

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220303175712.png" width="100%"/>

### 1. 请求行

请求行中包括请求的方法，路径和协议版本。

`Method Request-URL HTTP-Version CRLF`

```bash
GET index.html HTTP/1.1
```

常用的方法有: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`, `HEAD`。

### 2. 请求头

请求报头允许客户端向服务器传递请求的附加信息和客户端自身的信息。一般是以键值的形式成对存在，比如设置请求文件的类型`accept-type`，以及服务器对缓存的设置。

常见的请求报头有: `Accept`, `Accept-Charset`, `Accept-Encoding`, `Accept-Language`, `Authorization`, `Cookie`, `User-Agent`等。

### 3. 空行

协议中规定请求头和请求主体间必须用一个空行隔开。

### 4. 请求体

当使用 POST, PUT 等方法时，通常需要客户端向服务器传递数据。这些数据就储存在请求体中。在请求包头中有一些与请求正文相关的信息，例如: 现在的 Web 应用通常采用 Rest 架构，请求的数据格式一般为 json。这时就需要设置`Content-Type: application/json`。

## 四、服务器处理请求并返回 HTTP 报文

服务端收到请求之后，会根据 url 匹配到的路径做相应的处理，最后返回浏览器需要的页面资源。浏览器会收到一个响应报文，而所需要的资源就就在报文主体上。与请求报文相同，响应报文也有与之对应的起始行、首部、空行、报文主体，不同的地方在于包含的东西不一样。

以下是请求`google`首页的响应报文：

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220303180623.png" width="100%"/>

### 1. 响应行

响应报文的起始行同样包含了协议版本，与请求的起始行不同的是其包含的还有状态码和状态码的原因短语。

```bash
HTTP/2 200 ok
```

### 2. 响应头

对应请求报文中的请求头，格式一致，但是各自有不同的首部。也有一起用的通用首部。

常见的响应头有：`allow`、 `content-type`、`content-length`、`cache-control`、`expires`、 `date`、`server`、`set-cookie`等。

### 3. 空行

响应正文和响应头之间有一行空格，表示响应头的信息到空格为止。

### 4. 响应正文

包含着我们请求返回的一些具体信息，比如`cookie`，`html`，`image`，后端返回的请求数据等等。

### 5. 常见状态码

- `1xx`：指示信息–表示请求已接收，继续处理。
- `2xx`：成功–表示请求已被成功接收、理解、接受。
- `3xx`：重定向–要完成请求必须进行更进一步的操作。
- `4xx`：客户端错误–请求有语法错误或请求无法实现。
- `5xx`：服务器端错误–服务器未能实现合法的请求。

## 五、使用 HTTP 缓存

请求是浏览器的一个优化点，我们可以通过缓存来减少不必要的请求，进而加快页面的呈现。通过简单地设置 http 头部可以使用缓存的功能。一般来说有三种设置的方式

### 1. Last-Modify(响应头) + If-Modified-Since（请求头）

服务器在返回资源的时候设置 Last-Modify 当前资源最后一次修改的时间，浏览器会把这个时间保存下来，在下次请求的时候，请求头部 If-Modified-Since 会包含这个时间，服务端收到请求后，会比对资源最后更新的时间是否在 If-Modified-Since 设置的时间之后，如果不是，返回 304 状态码，浏览器将从缓存中获取资源。反之返回 200 和资源内容。

### 2. ETag（响应头） + If-None-Match（请求头）

根据资源标识符来确定文件是否存在修改，服务器每一次返回资源，都会在 Etag 中存放资源的标识符，浏览器收到这个标识符，在下一次请求的时候将标识符放在 If-None-Match 中，服务端将判断是否匹配，如果不匹配，返回 200 以及新的资源，反之返回 304，浏览器从缓存中获取资源

### 3. Cache-Control/Expires(响应头)

首先这不是一种方法，而是协议更替中的一种演化。
在 http 1.0 的时代，我们基于 Pragma 和 Expires 控制缓存的生命周期。我们可以通过设置 Pragma 为 no-cache 关闭缓存功能，同样也可以在 Expires 中设置一个缓存失效的时间。需要注意的是，这个失效的时间是相对于服务器的实践而言的，如果人为地改变了客户端的时间，是会导致缓存失效的。

所以，为了解决这个问题，HTTP1.1 的协议加入了 Cache-Control，通过设置 Cache-Control 的 max-age 可以控制缓存的周期。在这个周期内，资源是新鲜的，浏览器再一次需要使用资源的时候，就不会发出请求了。

## 六、浏览器解析渲染页面

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20220304105858.webp" width="100%"/>

至此浏览器已经拿到了一个 HTML 文档，并为了呈现文档而开始解析。呈现引擎开始工作，基本流程如下（以 webkit 为例）

- 通过 HTML 解析器解析 HTML 文档，构建一个`DOM Tree`，同时通过 CSS 解析器解析 HTML 中存在的 CSS，构建`Style Rules`，`两者结合形成一个Attachment`。
- 通过`Attachment`构造出一个呈现树（`Render Tree`）
- `Render Tree`构建完毕，进入到布局阶段（`layout/reflow`），将会为每个阶段分配一个应出现在屏幕上的确切坐标。
- 最后将全部的节点遍历绘制出来后，一个页面就展现出来了。

从构建 DOM 树到呈现的过程如下

需要注意的是，这是一个渐进的过程，呈现引擎为了力求显示的及时，会在文档请求不完全的情况下就开始渲染页面，同时，如果在解析的过程中遇到 script 的时候，文档的解析将会停止下来，立即解析执行脚本，如果脚本是外部的，则会等待请求完成并解析执行。所以，为了不阻塞页面地呈现，一般会把 script 脚本放在文档的最后。

在最新的 HTML4 和 HTML5 规范中，也可以将脚本标注为`defer`，这样就不会停止文档解析，而是等到解析结束后才执行。HTML5 增加了一个选项，可将脚本标记为`async`，以便由其他线程解析和执行。

## 七、连接结束

现在的页面为了优化请求的耗时，默认都会开启持久连接（`keep-alive`），那么一个 TCP 连接确切关闭的时机，是这个 tab 标签页关闭的时候。这个关闭的过程就是著名的四次挥手。关闭是一个全双工的过程，发包的顺序的不一定的。一般来说是客户端主动发起的关闭，过程如下。
