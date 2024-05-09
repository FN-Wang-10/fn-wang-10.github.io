try....catch：让错误不影响代码的执行。

catch 的参数就是 try 里面的错误信息

先执行`try {...}`的代码，如果 try 里面的代码出错，转而执行 `catch(e){..}`代码
最后执行 `finally{...}`代码，也就是 finally 里面的代码一定会执行。

注意：finally 可以不必出现

```javascript
try {
// 如果这里的代码块有错误，执行 catch 里面的代码
console.log(a)
} catch (e){ // catch 参数就是 try 错误信息
// try 里面的代码有错，执行 catch 里面的代码
console.log(123) // 输出自定义的容错 123
console.log(e) // 输出上面 try 里面的错误
}.finally{

}
```
