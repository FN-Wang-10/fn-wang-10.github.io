> async 函数是什么？
>
> > 它就是 Generator 函数的语法糖。

一比较就会发现，async 函数就是将 Generator 函数的星号（\*）替换成 async，将 yield 替换成 await，仅此而已  
async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）

回调函数(回调地狱) - promise(then 比较繁琐) - async 和 await(generator 函数)

async 的作用是申明一个异步函数，函数的返回值是 promise 对象。  
await 是 async+wait 的结合 即异步等待，  
await 就是 promise 里面 then 的语法糖。

注意细节

1. await 直接拿到 promise 的返回值。
2. async 和 await 在一个函数中存在。
3. 匿名函数也可以使用 async 和 await.

async 和 then 方法的返回结果是一模一样的  
函数的返回值是一个 promise 对象  
promise 对象的结果由 async 函数的返回值决定

1. async 函数里面返回一个 promise 对象，async 函数的返回值就由里面的 promise 的状态和值决定
2. async 函数里面返回一个非 promise 类型的对象，async 函数就会返回一个成功状态的 promise 对象，值是 async 函数里面的返回的那个值
3. throw 抛出异常，async 函数返回一个失败状态的 promise 对象

> 1. 右侧为 promise 的情况，await 会直接拿到 promise 成功的结果
> 2. 右侧为其他类型的数据,会直接拿到这个值
> 3. 如果右侧 promise 为失败的状态,就不抛出异常
>    需要使用 try...catch...来捕获异常

注意：
await 必须写在 async 函数中，但 async 函数中可以没有 await
如果 await 的 promise 失败了，就会抛出异常，需要通过 try...catch 捕获处理

```javascript
async function fn() {
  await 1;
  console.log(100);
  //   相当于.then;
}
fn();
console.log(2);
setTimeout(() => {
  console.log(3);
}, 0);
// 2 100 3

async function fn() {
  // await 1
  console.log(100);
}
fn();
console.log(2);
setTimeout(() => {
  console.log(3);
}, 0);
// 100 2 3
```
