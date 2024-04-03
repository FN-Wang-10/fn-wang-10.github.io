---
tags:
  - JsBridge
---

## 一、什么是 JSBridge

主要是给 JavaScript 调用 native 功能的接口，让 H5 可以实现调用系统原生功能，如相机，位置，话筒等。但是 JSBridge 的功能不单单是调用 native 这么简单，实际上，JSBridge 就是 JavaScript 与 native 的桥梁，它的核心是构建 native 与非 native 之间消息通信的渠道，而且这个渠道是双向的。

H5 与 native 交互如下图：

![https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120523.jpeg](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129120523.jpeg)

## 二、JSBridge 实现原理

JavaScript 是运行在一个单独的 JavaScript Context 中，由于这些环境与原生环境天生相隔，我们可以将这种情况与 RPC（Remote Procedure Call，远程过程调用）通信进行类比，将 Native 与 JavaScript 的每次互相调用看做一次 RPC 调用。

在 JSBridge 的设计中，可以把前端看做 RPC 的客户端，把 Native 端看做 RPC 的服务器端，从而 JSBridge 要实现的主要逻辑就出现了：通信调用（Native 与 JS 通信） 和句柄解析调用。

## 三、JSBridge 的通信原理

JavaScript 调用 native 主要有两种方式：**注入 API** 和 **拦截 UrlScheme**

### 1. 注入 API

实现方式为，通过 Webview 提供的接口，向 JavaScript 的 Context（window）中注入对象或方法，让 JavaScript 调用时，直接执行相应的 native 代码，达到 JavaScript 调用 native 的目的。

### 2. 拦截 Url Scheme

实现方式为，H5 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 native 拦截到请求，并根据 URL Scheme 所携带的参数进行相应的操作。

这种方式有一定的缺陷：

- 使用 iframe.src 发送请求，会有 url 长度的隐患

> 有些方案为了规避 url 长度隐患的缺陷，在 iOS 上采用了使用 Ajax 发送同域请求的方式，并将参数放到 head 或 body 里。这样，虽然规避了 url 长度的隐患，但是 WKWebView 并不支持这样的方式。为什么选择 iframe.src 不选择 locaiton.href ？ 因为如果通过 location.href 连续调用 Native，很容易丢失一些调用。

- 创建请求，需要一定的耗时，比注入 api 方式实现同样的功能，耗费时间多一些

## 四、接口实现

```javascript
// native注册在window上的方法应该是这样的
window.JSBridge = {
  callHandler: function (bridgeName, params, callback) {
    // other code...
    callback && callback(data);
  },
};
```

一个调用 JSBridge 的封装：

```javascript
// 底层封装
function setupWebViewJavascriptBridge(callback) {
  if (window.JSBridge) {
    return callback(window.JSBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  const WVJBIframe = window.document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  window.document.documentElement.appendChild(WVJBIframe);
  setTimeout(() => {
    window.document.documentElement.removeChild(WVJBIframe);
  }, 0);
}

// 正常调用
setupWebViewJavascriptBridge((bridge) => {
  bridge.callHandler('getUserInfo', {}, (data) => {
    console.log('userInfo', data);
  });
});
```

<!-- more -->
