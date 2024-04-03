## 总结

> arguments 独享是函数的一个内置对象  
> arguments 是一个类数组  
> rest 参数是一个数组（用法和 arguments 一样）ES6 新增

```javascript
// arguments 变量的写法
function sortNumbers() {
return Array.from(arguments).sort();
}

// rest 参数的写法
const sortNumbers = (...numbers) => numbers.sort();

我们可以使用 Array.prototype.slice 将 arguments 对象转换成一个数组。
Array.prototype.slice.call(arguments)
```
