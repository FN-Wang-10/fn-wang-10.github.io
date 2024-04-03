---
tags:
  - click
  - onclick
  - fastclick
  - touchstart
---

## 一、`onclick` 与 `click`

`onclick`是绑定事件，`click`是方法，`click`本身是方法作用是触发`onclick`事件，只要执行了元素的`click()`方法，就会触发`onclick`事件。

```javascript
$('#btn1').click(function () {
  $('#btn2').click();
});
```

## 二、`click`与`tap`

**`双击缩放(double tap to zoom)`**，会有 300 毫秒延迟。双击缩放，即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者单击跳转的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。

鉴于 iPhone 的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。

### 解决方案

#### 1. [faskclick](https://github.com/ftlabs/fastclick)

- 原理：在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即出发模拟一个 click 事件，并把浏览器在 300ms 之后真正的 click 事件阻止掉
- 缺点: 脚本相对较大, 不建议使用

#### 2. 禁止浏览器缩放

当 html 文档头部包含如下 meta 标签时，表明这个页面是不可缩放的，那双击缩放的功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉 300ms 的点击延迟。 这个方案有一个缺点，就是必须通过完全禁用缩放来达到去掉点击延迟的目的，然而完全禁用缩放并不是我们的初衷，我们只是想禁掉默认的双击缩放行为，这样就不用等待 300ms 来判断当前操作是否是双击。但是通常情况下，我们还是希望页面能通过双指缩放来进行缩放操作，比如放大一张图片，放大一段很小的文字。

```html
<meta name="viewport" content="user-scalable=no" />
<meta name="viewport" content="initial-scale=1, maximum-scale=1" />
```

#### 3. 更改默认的视口宽带

一开始，因为双击缩放主要是用来改善桌面站点在移动端浏览体验的。 随着发展现在都是专门为移动开发专门的站点，这个时候就不需要双击缩放了， 所以移动端浏览器就可以自动禁掉默认的双击缩放行为并且去掉 300ms 的点击延迟。 如果设置了上述 meta 标签，那浏览器就可以认为该网站已经对移动端做过了适配和优化，就无需双击缩放操作了。 这个方案相比方案一的好处在于，它没有完全禁用缩放，而只是禁用了浏览器默认的双击缩放行为，但用户仍然可以通过双指缩放操作来缩放页面。

```html
<meta name="viewport" content="width=device-width" />
```

#### 4. 通过 touchstart 和 touchend 模拟实现

能不能直接用 touchstart 代替 click 呢？ 答：不能，

使用 touchstart 去代替 click 事件有两个不好的地方

1. touchstart 是手指触摸屏幕就触发，有时候用户只是想滑动屏幕， 却触发了 touchstart 事件，这不是我们想要的结果
2. 使用 touchstart 事件在某些场景下可能会出现点击穿透的现象

点击穿透现象：

1. 点击蒙层上的关闭按钮，蒙层消失后触发了按钮下面元素的 click 事件 蒙层关闭按钮绑定的是 touch 事件，而按钮下边元素绑定的是 click 事件， touch 事件触发之后，蒙层消失了，300ms 后这个点的 click 事件 fire， event 的 target 自然就是按钮下面的元素，因为按钮跟蒙层一起消息了。
2. 跨页面点击穿透事件：如果按钮下面恰好是一个 href 属性的 a 标签， 那么页面就会合法跳转，因为 a 标签跳转默认是 click 事件触发。
3. 另一种跨页面点击穿透问题，这次没有 mask 了，直接点击页内按钮至新页， 然后发现新页面中对应位置元素的 click 事件被触发 事件执行的顺序是 touchstart > touchend > click。

## 三、`touch`事件

`touch`事件`touch`是针对触屏手机上的触摸事件。现今大多数触屏手机 webkit 内核提供了 touch 事件的监听，让开发者可以获取用户触摸屏幕时的一些信息。其中包括：`touchstart`,`touchmove`,`touchend`,`touchcancel` 这四个事件，`touchstart`,`touchmove`,`touchend`事件可以类比于`mousedown`，`mouseover` ，`mouseup`的触发。

- `touchstart` ： 当手指触摸到屏幕会触发；
- `touchmove` ： 当手指在屏幕上移动时，会触发；
- `touchend` ： 当手指离开屏幕时，会触发；
- `touchcancel`：许多人不知道它在什么时候会被触发而忽略它，其实当你的手指还没有离开屏幕时，有系统级的操作发生时就会触发`touchcancel`，例如`alert`和`confirm`弹框，又或者是`android`系统的功能弹窗。

在一个移动端设备，手指点击一个元素，会经过：`touchstart` –> `touchmove` -> `touchend` —> `click` 几个过程。

## 四、点透问题

```html
<div id="div2">
  <div id="div1">click</div>
</div>
```

```javascript
$('.div1').addEventListener('touchstart', function (e) {
  $('.div1').style.display = 'none';
});

$('.div2').onclick = function () {
  console.log('click事件');
};
```

其中`div1`覆盖在 `div2` 之上， 按理说点击 `div1` 的时候，`div1` 会阻挡所有的事件，事件不会传递给 `div2`，当点击 `div1` 的时候，实际上 `div2` 也发生了点击事件，即上面的输出结果为 `div1` 消失， 输出 `click事件` 莫名被点击了, 这就是点透。

这是因为：当手指触摸到屏幕的时候，系统生成两个事件，一个是`touch` 一个是`click`，`touch`先执行，`touch`执行完成后，A 从文档树上面消失了，而且由于移动端`click`还有延迟 200-300ms 的关系，当系统要触发`click`的时候，发现在用户点击的位置上面，目前离用户最近的元素是 B，所以就直接把`click`事件作用在 B 元素上面了。

那么怎么去解决这个问题呢？其实系统提供了先触发的`touch`事件去取消系统生成的`click`事件，所以只要在`touch`事件的某个处理函数中 执行 `e.preverDefault`即可， 一般我们在`touchend`中执行：

```javascript
$('.div1').addEventListener('touchstart', function(e) {
    $('.div1).style.display = 'none';
    e.preventDefault();
})
```

其他解决方案：

1. 使用系统的`click`事件;
2. 当`touch`事件发生后持续大于 300ms 的事件再让遮罩层消失。
