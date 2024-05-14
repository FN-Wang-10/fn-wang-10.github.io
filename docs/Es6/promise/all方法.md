用于将多个 Promise 实例，包装成一个新的 Promise 实例，接受一个数组作为参数，只有数组里面的每个状态都变成 resolve，则新的 Promise 实例状态才会变成 resolve.否则都是失败。发送多个请求并根据请求顺序获取和使用数据

```javascript
Promise.all([p1, p2])
  .then((data) => {
    console.log("then 成功", data);
  })
  .catch((err) => {
    console.log("333");
    console.log("err", err);
  });
```

## 问题

promise.all 进行 5 个请求，若其中一个失败了，怎么让其他 4 个成功返回

Promise all 打包几个接口一起请求。
但是其中如果有一个接口失败了那么就不会继续走下去了 会影响到其他接口操作，关联性太强了，  
需求： 前面打包的的几个接口操作无论失败或者成功几个都需要走后面的接口，就会有点麻烦了，  
解决：在 catch 里面 resolve 就行了

```javascript
const p1 = new Promise((resolve) => {
  const a = b;
  resolve(a);
}).catch(() => {
  return Promise.resolve("aaab");
});
const p2 = new Promise((resolve) => {
  const a = 1;
  return resolve(a);
}).catch(() => {
  return Promise.resolve("aaa");
});
```

因为我们经常会使用到接口的重复调用问题或链式调用接口
Promise.all 很舒服的解决了这些问题
但是 Promise.all 的特性 是会执行里面的所有异步操作，遇到抛错就取消执行，并不会继续往下执行了。
有时我们 需要能继续执行下去。这样也是有方法能实现的…

代码解决：在 catch 里面 resolve 就行了  
测试了下解决方式还能实现

````javascript
   var p1 = new Promise(resolve => {
       let p1Data = b;
       resolve(p1Data)
   }).catch(err => {
       return Promise.resolve("P1 无数据")
   })

   var p2 = new Promise(resolve => {
       let p2Data = 'p2的有数据';
       resolve(p2Data)
   }).catch(err => {
       return Promise.resolve("P2 无数据")
   })

   Promise.all([p1, p2]).then(res => {
       console.log(res);
   }).catch(err => {
       throw new Error("Promise 执行错误", err)
   })
   ```
````

参考文献

https://blog.csdn.net/WACBG/article/details/121904161?ops_request_misc=&request_id=&biz_id=102&utm_term=promise.all%20%E8%BF%9B%E8%A1%8C5%E4%B8%AA%E8%AF%B7%E6%B1%82%EF%BC%8C%E8%8B%A5%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E4%BA%86%EF%BC%8C%E6%80%8E%E4%B9%88&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-4-121904161.142^v32^pc_rank_34,185^v2^tag_show&spm=1018.2226.3001.4187
