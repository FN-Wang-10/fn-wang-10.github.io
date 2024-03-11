## 前言

在 JavaScript 中，判断数据类型的方法有四种

- typeof
- instanceof
- constructor
- Object.prototype.toString.call()

## 一、typeof

> 作用：typeof 检测基本类型和函数  
> 弊端：检测引用数据类型，只会返回 object  
> 返回值：字符串

```javascript
typeof 1 === "number"; //true
typeof "" === "string"; //true
typeof true === "boolean"; //true
typeof undefined === "undefined"; //true
typeof null === "object"; // true
typeof Symbol("我是symbol数据") === "symbol"; //true
const theBiggestInt = 9007199254740991n;
typeof theBiggestInt === "bigint"; //true
typeof function () {} === "function"; //true

typeof {} === "object"; // true
typeof [] === "object"; //true

typeof null // "Object"
...
```

typeof null 的结果是“object”;  
（这是浏览器的 BUG：所有的值在计算中都以二进制编码储存，浏览器中把前三位 000 的当作对象，而 null 的二进制前三位是 000，所以被识别为对象，但是他不是对象，他是空对象指针，是基本类型值）

## 二、instanceof

> 作用：检测引用数据类型  
> 原理：
>
> - 基于原型链去判断，判断左边对象是否是右边勾走函数的实例
> - 判断左边对象的原型链 proto 上是否有右边构造函数的 prototype 属性
>
> 弊端：只能用于检测引用数据类型，检测基本数据不生效，返回 false
> 返回值：布尔值

```javascript
[] instanceof Object; //true
[] instanceof Array; //true
```

## 三、constructor

> 作用：可以检测基本数据类型和引用数据类型;  
> 原理：
>
> - 判断当前的实例的 constructor 的属性是不是预估的类
> - 实例对象.constructor===类.prototype.constructor
>
> 弊端：我们把类的与耐性进行重写，很有可能把执勤啊的 constructor 覆盖，检测到的结果就不准确;  
> 返回值：布尔值;

```javaScript
let num=1;
num.constructor===Number; // true
let str="";
str.constructor===String; // true
let obj={};
obj.constructor===Object; //true
let arr=[];
arr.constructor===Array; // true
...
```

## 四、Object.prototype.toString.call()

> 作用：可以检测所有数据类型;  
> 原理：  
> 1.每一种数据类型的构造函数的原型上都有 toString 方法;  
> 2.除了 Object.prototype 上的 toString 是用来返回当前实例所属类的信息（检测数据类型的），其余的都是转换为字符串的  
> 3.对象实例.toString() ：toString 方法中的 THIS 是对象实例，也就是检测它的数据类型，也就是 THIS 是谁，就是检测谁的数据类型  
> 4.Object.prototype.toString.call([value]) 所以我们是把 toString 执行，基于 call 改变 this 为要检测的数据值
> 返回值：字符串（'[object 类]'）

```javaScript
使用方法
Object.prototype.toString.call(被检测的实例)
({}).toString.call(被检测的实例)

Object.prototype.toString.call(10)
({}).toString.call(10)
({}).toString===Object.prototype.toString

Object.prototype.toString.call(1) // '[object Number]'
Object.prototype.toString.call(true) // '[object Boolean]'
Object.prototype.toString.call("") // '[object String]'
Object.prototype.toString.call(null) // '[object Null]'
Object.prototype.toString.call(undefined) // '[object Undefined]'
Object.prototype.toString.call([]) // '[object Array]'
Object.prototype.toString.call({}) // '[object Object]'
Object.prototype.toString.call(function(){}) // '[object Function]'
Object.prototype.toString.call(Symbol()) // '[object Symbol]'
Object.prototype.toString.call(111111111111111111n) // '[object BigInt]'
```
