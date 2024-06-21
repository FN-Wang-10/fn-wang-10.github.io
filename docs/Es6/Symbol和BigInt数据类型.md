## 总结

### 一、 Symbol

表示独一无二的值，它是 js 中的第七种数据类型，属于基本类型，使用方式类似于函数

Symbol 函数接收一个字符串作为参数，表示对 symbol 的描述,描述的内容相同仅仅表示的是描述， 不代表其他的意义

结构：let s1 = Symbol(字符串); //声明一个 Symbol 数据

参数：字符串

```javascript
let s1 = Symbol(); //声明一个 Symbol 数据
let s2 = Symbol(); //声明一个 Symbol 数据
console.log(s1 == s2); //false
console.log(typeof Symbol()); // symbol
```

Symbol **主要就是用来预防对象的属性出现重名覆盖的问题**。

Object.getOwnPropertySymbols(obj)方法 返回一个数组，获取一个对象所有的 symbol 属性

Symbol 的弊端是不能被 for...in...遍历，可以 for 循环遍历。

```javascript
let s1 = Symbol(); //声明一个 Symbol 数据
let s2 = Symbol(); //声明一个 Symbol 数据
console.log(s1 == s2); //false
console.log(typeof s1); //symbol
let s1 = Symbol("zhangsan"); //声明一个 Symbol 数据
let s2 = Symbol("lisi"); //声明一个 Symbol 数据
console.log(s1); //Symbol(zhangsan)
console.log(s2); //Symbol(lisi)
```

````javascript
let s1 = Symbol('zhangsan');
let s2 = Symbol('lisi');
let s3 = Symbol('lisi');
let obj = {
s1: 100, //这里的 s1 是自定义的属性名和上面的变量的没有关系。
[s1]: 200, //这里的 s1 表示上面的变量
[s2]: 300, //这里的 s2 表示上面的变量
[s3]: 400 //这里的 s2 表示上面的变量
};
console.log(obj); //{s1: 100, Symbol(zhangsan): 200, Symbol(lisi): 300, Symbol(lisi): 400}
console.log(obj[s1]); //200

     for (let key in obj) {
        console.log(obj[key]); //100
    }
    Object.getOwnPropertySymbols(obj)方法获取一个对象所有的symbol属性
    console.log(Object.getOwnPropertySymbols(obj)); // 返回一个数组[Symbol(zhangsan), Symbol(lisi), Symbol(lisi)]

    //  for循环遍历Symbol数据
    for (let i = 0; i < Object.getOwnPropertySymbols(obj).length; i++) {
        console.log(obj[Object.getOwnPropertySymbols(obj)[i]]);
    }
    ```
    // 按照上面的写法，属性就算相同也不会覆盖。
````

### 二、BigInt

BigInt 数据类型的目的是比 Number 数据类型支持的范围更大的整数值。

在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用 BigInt，整数溢出将不再是问题。

要创建 BigInt，只需在整数的末尾追加 n 即可,可以进行任意的运算。

```javascript
//  创建一个 BigInt
 const bigInt = 123456789012345678901234567890n;
//  将 BigInt 转换为 Number
 const number = bigInt _ 2n; // 结果为：246913578024691357802469135780n
//  将 BigInt 转换为字符串
 const string = bigInt.toString(); // 结果为：123456789012345678901234567890
//  使用 BigInt 进行加法运算
 const sum = bigInt + bigInt; // 结果为：246913578024691357802469135780n
//  使用 BigInt 进行乘法运算
 const product = bigInt _ bigInt; // 结果为：15230605968527652059685276520n
//  使用 BigInt 进行除法运算
 const quotient = bigInt / bigInt; // 结果为：1n
//  使用 BigInt 进行取模运算
 const remainder = bigInt % bigInt; // 结果为：0n
```
