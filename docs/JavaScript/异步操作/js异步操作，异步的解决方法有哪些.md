1. setTimeout,setInterval
2. ajax
3. 事件绑定
4. 回调函数（callback）
5. Promise
6. async,await
7. generator

## 异步的解决方法有哪些

1. 回调函数 callback
2. Promise
3. Generator
4. async/await
5. 事件发布订阅

## 执行顺序

1. 同步
2. procsess.nextTick(()=>{}) nodejs 中的 同步执行完之后，异步执行之前执行
3. 异步（微任务）Promise.then
4. 异步（宏任务）script 标签，定时器，ajax,读取文件  
   setImmediate(()=>{}) 当前时间循环结束执行（一轮循环后执行）  
   宏任务执行一次，清空微任务

```javascript
async function fn() {
  await 1;
  console.log(100);
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

async function async1() {
  console.log("async1 start"); // 同步
  await async2(); // 执行这个函数
  console.log("async1 end"); //     下面属于微任务
}
```
