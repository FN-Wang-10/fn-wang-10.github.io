## 一、概念

1. Promise ES6 新增的异步编程的一种解决方案，比传统的解决方案（回调函数）更合理和更强大
2. Promise 可以解决回调地狱的问题，是一个构造函数。
3. Promise 对象代表一个异步操作，有三种状态：**pending 进行中**、**fulfilled 成功**、**rejected** 失败。
4. promise 是异步的，异步指的是 promise 下面的 then 和 catch 是异步的 finally
5. promise 支持链式操作，说明 then 和 catch 方法返回 promise 对象。
   可以把 Promise 看成一个状态机。

## 二、Promise 对象有两个特点

1.  对象的状态不受外界影响
2.  一旦状态设定，就不会再变，任何时候都可以得到这个结果。
3.  Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected,只· 要这两种情况发生，状态就凝固了.

```javascript
let promise = new Promise((resolve, reject) => {
  resolve("成功的状态");
  reject("失败的状态");
});
```

## 三、promise 原型下面的三个常用的方法

1. Promise.prototype.then
   当 promise 的状态设定为 resolve，就会执行 then 方法，并且 resolve 的参数会传递给 then 里面的回调函数。

```javascript
promise.then((value) => {
  console.log(value); //成功的状态
});
```

2. Promise.prototype.catch  
   当 promise 的状态设定为 reject，就会执行 catch 方法，并且 reject 的参数会传递给 catch 里面的回调函数。

```javascript
promise.catch((value) => {
  console.log(value); //失败的状态
});
```

3. Promise.prototype.finally(最后)
   对比：try...catch....finally js 容错处理
   finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的 finally 操作。该方法是 ES2018 引入标准的。

```javascript
promise
  .then((value) => {
    //成功
    console.log("success");
    console.log(value);
  })
  .catch((error) => {
    //失败
    console.log(error);
  })
  .finally(() => {
    //省略的
    console.log("不管状态是成功还是失败，我都会执行");
  });
```

## 四、promise 对象下面的静态方法

1. Promise.all()
   用于将多个 Promise 实例，包装成一个新的 Promise 实例，接受一个数组作为参数，只有数组里面的每个状态都变成 resolve，则新的 Promise 实例状态才会变成 resolve.否则都是失败。发送多个请求并根据请求顺序获取和使用数据
2. Promise.race()
   方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例，接受一个数组作为参数，只要其中有一个实例率先改变状态，则整个的状态就跟着改变。
3. Promise.resolve()  
    可以将任意对象转为 promise 对象，有时需要将现有对象转为 Promise 对象，该方法就起到这个作用。
   ```javascript
   Promise.resolve(5).then((data) => {
     console.log(data); //5
   });
   ```
4. Promise.reject()
   方法也会返回一个新的 Promise 实例，该实例的状态为 rejected。

## 五、应用

promise 获取函数内部的异步数据。(之前使用回调函数)
promise 解决回调地狱，将深层的嵌套改成链式操作

## 六、promise 问题

> 1. 改变 promise 状态的三种方法（3 条）
> 2. 一个 promise 指定多个成功或者失败的回调函数，都会调用吗？（要看状态）
> 3. 改变 promise 状态和指定回调函数，谁先谁后？（分同步和异步）
> 4. promise.then()返回的结果状态由什么决定？（3 条）
> 5. promise 如何串联多个操作任务？（谈返回值）
> 6. promise 异常传透？（将错误传递到最后） 7.中断 promise 链的唯一方法（padding）

1. **改变 promise 状态的三种方法**  
   resolve("成功");——————pending => fulfilled ———————————— 从进行中到成功的状态

   reject("失败") —————— pending => rejected —————— 从进行中到失败的状态

   throw 123;  —————— 直接抛错也是失败的状态

2. **一个 promise 指定多个成功或者失败的回调函数，都会调用吗？**  
   当 promise 改变为对应状态时都会调用  
   如果没有定义状态，就是 pending，则都不会执行

3. **改变 promise 状态和指定回调函数，谁先谁后？**
   都有可能

   1. 当 promise 里面是同步任务时，先改变状态，再执行成功的回调
   2. 当 promise 里面是异步任务时，先执行.then 回调（顺序是这样的，但是只有成功的状态才会执行.then 的回调）， 再执行 promise 里面的异步（宏任务执行一次，清空微任务，.then 是微任务，定时器是宏任务）

4. **promise.then()返回的结果状态由什么决定？**  
   then 方法的执行结果是由它指定的回调函数的执行结果决定的

   1. 如果这个回调函数执行时返回一个非 promise 类型的数据（比如：数字，字符串等等），then 方法的结果就是一个成功的 promise
   2. 如果这个回调函数执行时返回的是一个成功的 promise 对象，那么回调函数中返回的 promise 就决定了 then 方法返回的 promise 的结果和状态
   3. throw 抛出异常，then()方法会返回一个失败的 promise

5. **promise 如何串联多个操作任务？**  
   .then()方法执行会返回一个新的 promise 对象，可以写成链式调用  
   通过 then 的链式调用串联多个同步或者异步任务  
   promise.then 的状态由他指定的回调函数的返回值决定  
   promise 上一个.then()回调的返回结果会作为下一个.then()回调的结果输出出来

6. **promise 异常传透？**  
   当使用 promise 的 then 链式调用时，可以在最后指定失败的回调  
   前面任何操作出了异常，都会传递到最后的失败的回调中处理

7. **中断 promise 链的唯一方法**  
   在使用 promise 的 then 链式调用时候，在中间中断，不再调用后面的回调函数  
   办法：再回调函数中返回一个 pending 状态的 promise 对象  
   返回一个 pending 状态的 promise 对象

## 七、参考文献

https://blog.csdn.net/weixin_38300263/article/details/109989436?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-16-109989436-blog-124480423.pc_relevant_default&spm=1001.2101.3001.4242.9&utm_relevant_index=18
