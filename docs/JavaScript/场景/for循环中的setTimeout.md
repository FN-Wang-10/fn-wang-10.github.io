---
tags:
  - for
  - setTimeout
  - Promise
  - sleep
  - bind
  - 闭包
---

## 一、错误示例

```javascript
function print() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
```

上面的代码，我们期望每隔一秒，输出一个数，而且这个数是每次循环 i 的值。但是期望也只是期望，实际情况是一秒钟之后直接输出了 10 个 10。那么问题就来了，我们怎么实现我们的期望值呢？

由此我们先来尝试几种解决方案，并作一一对比：

- 每隔一秒输出一个 10

```javascript
// 每隔一秒输出一个10
function print() {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
```

- 等待一秒之后接连输出 0-9

```javascript
// 等待一秒之后接连输出0-9
function print() {
  for (var i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}
```

综上所述，第一种方式实现了每隔一秒输出一个数值的功能，第二种方案实现了每次输出不同的 i 值的功能，如果将这两种方案综合起来，那就是我们想要的结果，即：

```javascript
// 每隔一秒输出一个自增的i值
function print() {
  for (var i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
```

## 二、问题及解决办法

之所以会出现这种情况差异，是因为 js 是单线程的，有一个事件队列机制，setTimeout 和 setInterval 的回调会到了延迟时间塞入事件队列中，排队执行。而在此同时，for 循环并不会一直等待，而会直接循环完毕，所以等到 setTimeout 开始执行的时候，原先我们预想的 i 早就变成了 10，所以就会出现之前我们遇到的问题。

为了实现我们想要的功能，就要解决两个问题： _ 1. 怎么保存每次循环的临时变量 i _ 2. 怎么让定时器产生时间间隔

弄懂了我们要解决的问题，那么接下来敲代码就行云流水了，关于第一个问题，我们需要保存每次循环 i 的值，关于第二个问题，我们只需要控制定时器的时间就好，以下即是几种解决方案：

## 三、正确示例

### 1. 添加一个函数调用

```javascript
function print() {
  for (var i = 0; i < 10; i++) {
    timePrint(i); // 这里的 i 值被复制了
  }
}

// 每次传进来的 i 值都不同，故可得以保存
function timePrint(i) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

### 2. 立即执行函数（闭包）

```javascript
function print() {
  for (var i = 0; i < 10; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, i * 1000);
    })(i);
  }
}
```

### 3. setTimeout 另一种用法

```javascript
function print() {
  for (var i = 0; i < 10; i++) {
    setTimeout(
      function (j) {
        console.log(j);
      },
      1000 * i,
      i
    ); // 从第三个参数开始的附加参数都可以传给setTimeout的匿名函数
  }
}
```

> [!NOTE] setTimeout setTimeout()的返回值是一个正整数，表示定时器的编号。这个值可以传递给 clearTimeout()来取消该定时器。需要注意的是 setTimeout()和 setInterval()共用一个编号池，技术上，clearTimeout()和 clearInterval() 可以互换。但是，为了避免混淆，不要混用取消定时函数。

### 4. let 方法保存不同阶段的值

```javascript
function print() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
```

### 5. Promise

```javascript
const tasks = [];

for (var i = 0; i < 10; i++) {
  (function (j) {
    tasks.push(
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(j);
          resolve();
        }, 1000 * j);
      })
    );
  })(i);
}

Promise.all(tasks);
```

### 6. 简洁版的 Promise

```javascript
const tasks = [];
const output = (i) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000 * i);
  });

for (var i = 0; i < 10; i++) {
  tasks.push(output(i));
}

Promise.all(tasks);
```

### 7. sleep 方法

```javascript
// 模拟其他语言的sleep方法
const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

async function print() {
  for (var i = 0; i < 10; i++) {
    await sleep(1000);
    console.log(i);
  }
}

print();
```

### 8. bind 方法

```javascript
function print() {
  for (var i = 0; i < 10; i++) {
    setTimeout(
      function (i) {
        console.log(new Date(), i);
      }.bind(null, i),
      1000 * i
    );
  }
}
```
