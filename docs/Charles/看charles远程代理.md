<!-- ---
title: charles远程代理
date: 2021-02-01 10:36:04
tags: 
  - Charles
  - remote
  - proxy
categories: Charles
---

### 1. 打开代理

首先需要确保设置好`charlse`的抓包配置，保证能正常抓取到app的请求。

### 2. 配置`Map remote`

1.  打开`map remote`:

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201105713.jpg" alt="map-remote" width="300"/>

2.  以**少数派**中一个页面为例，配置一个页面到测试环境的代理，接口不进行代理

![](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201105855.jpg)

<img src="https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201105908.jpg" width="600"/>

### 3. 抓包查看结果

由下图可以看到，配置了`map remote`之后，**少数派**中页面请求到了`test-ios.sspai.com`的域名，接口`api`还是请求的线上域名`ios.sspai.com`。

这种配置很适合开发，我在以下两种情况下经常使用`map remote`：

1.  开发时借用测试环境接口进行联调，因为开发环境总是不稳定的，相对比而言我更愿意使用开发环境的页面访问测试环境的接口；
2.  解`bug`，`H5`的开发不像`web`可以随时看到各种情况，所以每当解`BUG`时我经常把页面发到开发环境，同时调用测试环境接口验证`BUG`。

![](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201110000.jpg)
 -->
