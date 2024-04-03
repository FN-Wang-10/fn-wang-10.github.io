---
tags:
  - click
  - 300ms
---

## 一、追根溯源

移动端为什么会出现`click`事件的`300ms`延迟？

这应该属于科技进步过程中的不完美。在 2007 年，苹果公司在发布首款`iphone`前夕，遇到一个问题：当时的网站大都为大屏幕的设备所设计，于是苹果的工程师在解决小屏幕手机浏览大屏幕网站的问题上做了一些约定，其中一个就是有名的双击缩放。

双击缩放：顾名思义就是连续两次点击屏幕，苹果自带的`safari`浏览器就会将网页缩放到它的原始比例，那么怎么实现这种双击缩放呢？很简单，就是在第一次点击之后先不触发`click`事件，而是等待`300ms`，如果在这`300ms`之内还有第二次点击，那么就对网页进行缩放；如果没有第二次点击，则再`300ms`结束后再触发`click`事件。鉴于`iphone`当时的成功，很多移动浏览器都赋值了这一功能。在当时，人们刚刚接触移动浏览器，不会在乎这`300ms`的延迟，但是随着科技的发展，用户对体验的要求也更高，这`300ms`的问题就尤为突出。

## 二、解决方案

那么如何解决这`300ms`的延迟呢？有以下几种方案：

### 1. 禁用缩放

使用了此方式，表明当前页面是不可缩放的，那么双击缩放的功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉`300ms`的点击延迟。

缺点：我们希望的是禁用掉`300ms`的延迟，并不是完全禁用页面的缩放，此方法会完全禁止缩放效果。但是通常情况下，我们还是希望能够通过双指来进行缩放操作，比如放大一张图片，放大一段很小的文字。

- `Chrome on Android(all versions)`
- `IOS 9.3`

  ```html
  <meta name="viewport" content="user-scalable=no" />
  <meta name="viewport" content="initial-scale=1,maximum-scale=1" />
  ```

  ```css
  html {
    touch-action: manipulation;
  }
  ```

- `IE on Windows Phone`

  ```css
  html {
    touch-action: manipulation; // IE11+
    -ms-touch-action: manipulation; // IE10
  }
  ```

### 2. 不禁用缩放

此方法是通过改变默认的视口宽度来达到去除`300ms`延迟的效果。

在追根溯源里已经解释了，双击缩放的原因就是因为早些时候大部分网站都是针对大屏幕的桌面浏览器开发，工程师们为了在移动端能看到大屏幕网站才引入了双击方所。但是现在很多网站都已经支持了响应式的设计，那么移动端浏览器就可以自动禁止默认的双击缩放行为并且去掉`300ms`的点击延迟。如果设置了以下的`meta`标签，那浏览器就可以认为该网站已经对移动端进行了适配，就无需双击缩放的操作了。

这个方案的好处在于，它没有完全禁用缩放，而只是禁用了浏览器默认的双击缩放行为，但用户仍然可以通过双指缩放来缩放页面。

- `Chrome 32+ on Android`
- `IOS 9.3`

  ```html
  <meta name="viewport" content="width=device-width" />
  ```

  如果不添加`width=device-width`不管是`Android`还是`IOS`中已修复的版本中仍然会出现延时的问题。

### 3. `CSS touch-action`

`touch-action`这个 CSS 属性。这个属性指定了相应元素上能够触发的用户代理（也就是浏览器）的默认行为。如果将该属性值设置为`touch-action: none`，那么表示在该元素上的操作不会触发用户代理的任何默认行为，就无需进行 300ms 的延迟判断。

### 4. `FashClick`

移动端，当用户点击屏幕时，会依次触发`touchstart`，`touchmove`,`touchend`，在`touchend`调用结束后，`fastclick`会通过`DOM`自定义事件立即触发一个模拟的`click`事件，同时禁用掉`300ms`之后的系统默认`click`，这样就解决了`300ms`的延迟问题。

## 三、`Webview`问题

### 1. `Android Webview`

`Android WebView` 中 300ms 的延迟问题和移动端浏览器解决思路一致。

### 2. `IOS Webview`

`IOS Webview`的问题有点头大，因为在`IOS8`之前一直都是`UIWebview`，`IOS8`出了个`WKWebview`。其实直到现在，`UIWebview`的`300ms`延迟问题一直存在，哪怕是新版的`IOS`版本，但是`WkWebview`在`IOS9.3`的时候将这个问题修复了。

<!-- more -->
