## 总结

1. 普通函数——函数调用者
2. > 定时器——window  
   > 自执行函数 —— window  
   > 全局函数指向 window
3. > 类——实例对象  
   > 构造函数——实例对象
4. 箭头函数——父级（外层）（箭头函数本身是没有 this 和 arguments 的）
5. 事件处理函数——事件对象
6. 严格模式——undefined
7. 在方法中，this 指向该方法所属的对象。

this 永远指向最后调用它的对象

```js
var name = 'codereasy';
let obj = {
  name: '张三',
  say: function () {
    console.log(this.name);
  }
};
obj.say(); // this指向调用者obj
setTimeout(obj.say, 10); // setTimeout中this指向window  obj.say作为回调传入(传的只是这个函数的引用)
// 函数中的this取决于调用时的执行上下文是谁

// 张三 codereasy
```

```js
var name = 'codereasy';
let obj = {
  name: '张三',
  say: () => {
    console.log(this.name);
  }
};
obj.say();
setTimeout(obj.say, 10);
// codereasy codereasy
```
