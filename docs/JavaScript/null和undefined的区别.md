## 前言

1. null 和 undefined 都是基本数据类型
2. null 表示空对象，主要用于赋值给一个可能会返回对象的变量，作为初始值
   undefined 表示未定义，就是此处应该有一个值，但是还没有定义

## 用法

### undefined

1. 变量被声明了，但没有赋值时，就等于 undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
3. 对象没有赋值的属性，该属性的值为 undefined。
4. 函数没有返回值时，默认返回 undefined。

### null

1. 作为原型链的终点
2. 作为函数的参数，表示该函数的参数不是对象。

```javascript
typeof null object
null == undefined true
null === undefined false
```

## 参考文献

- https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html
