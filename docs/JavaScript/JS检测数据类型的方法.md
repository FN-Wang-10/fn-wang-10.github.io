---
sidebar_position: 4
tags:
  - JavaScript
  - typeof
  - instanceof
  - constructor
  - toString
---

## 一、`typeof` 基本判断

```javascript
typeof a; // undefined
typeof (a = 1); // number
typeof (a = "1"); // string
typeof (a = true); // boolean
typeof (a = Symbol()); // symbol
typeof (a = function () {}); // function
typeof (a = null); // object
typeof (a = [1, 2]); // object
typeof (a = {}); // object
```

可以看到，在对`null`类型的判断中返回了`object`，这是因为`typeof`只处理返回了处于原型链最顶端的`object`类型，它的返回没有错，但不是我们想要的结果。

:::caution
`typeof`基本能判断大部分数据类型，但是有两点特殊：

- 对于基本数据类型，除`null`外，均可以返回正确结果；
- 对于引用数据类型，除`function`外，一律返回`object`类型。
  :::

## 二、`instanceof` 原型检查

`instanceof` 是用来判断 A 是否为 B 的实例，表达式为：`A instanceof B`，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是： **`instanceof` 检测的是原型**。

> `instanceof` 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

需要注意的是`instanceof`左侧只能是一个对象，例如`1 instanceof Number`会返回`false`。因为`1`是一个基本数据类型。

`instanceof`操作符的问题在于它假定只有一个全局执行环境，如果网页中包含多个框架，那实际上就存在两个以上的执行环境，从而存在两个以上不同版本的构造函数，如果你从一个框架向另一个框架传入一个数组，那么传入的数组与第二个框架中原生创建的数据分别具有各自不同的构造函数。

```javascript title="instanceof"
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[0].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]
arr instanceof Array; // false
```

针对数组这个问题，`ES5`提供了`Array.isArray()`这个方法用来判断某个对象本身是否为`Array`类型，而不区分在哪个环境中创建。`Array.isArray()`本质上就是检查对象的`[[Class]]`值，`[[Class]]` 是对象的一个内部属性，里面包含了对象的类型信息，其格式为 `[object Xxx]` ，`Xxx` 就是对应的具体类型 。对于数组而言，`[[Class]]` 的值就是 `[object Array]` 。

## 三、`constructor` 构造函数

`constructor`是原型`prototype`的一个属性，当函数被定义时候，`js`引擎会为函数添加原型`prototype`，并且这个`prototype`中`constructor`属性指向函数引用， 因此重写`prototype`会丢失原来的`constructor`。

```javascript title="constructor"
(a = 1).constructor === Number; // true
(a = "1").constructor === String; // true
(a = true).constructor === Boolean; // true
(a = {}).constructor === Object; // true
(a = []).constructor === Array; // true
(a = function () {}).constructor === Function; // true
document.constructor === HTMLDocument; // true
window.constructor === window; // true
```

:::caution
不过这种方法有两个缺陷：

- 一是`null` 和 `undefined` 是无效的对象，也就不存在对应的`constructor`，这两种类型的数据需要通过其他方式判断。
- 二是如果自定义对象，开发者重写`prototype`之后，原有的`constructor`会丢失，因此，为了规范开发，在重写对象原型时一般都需要重新给 `constructor` 赋值，以保证对象实例的类型不被篡改。
  :::

## 四、`toString`完美的方法

`toString()` 是 `Object` 的原型方法，调用该方法，默认返回当前对象的 `[[Class]]` 。这是一个内部属性，其格式为` [object Xxx]` ，其中 `Xxx` 就是对象的类型。

对于 `Object` 对象，直接调用 `toString()` 就能返回` [object Object]` 。而对于其他对象，则需要通过 `call / apply` 来调用才能返回正确的类型信息。

```javascript
Object.prototype.toString.call(""); // [object String]
Object.prototype.toString.call(1); // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(Symbol()); // [object Symbol]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(new Function()); // [object Function]
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(new RegExp()); // [object RegExp]
Object.prototype.toString.call(new Error()); // [object Error]
Object.prototype.toString.call(document); // [object HTMLDocument]
Object.prototype.toString.call(window); // [object global] window 是全局对象 global 的引用
```

## 五、各种方式优缺点汇总

| 优缺点 | typeof                                                                     | instanceof                                                                                                                  | constructor                                                                                     | Object.prototype.toString.call                                       |
| :----: | :------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  作用  | 用于检测基本类型和函数                                                     | 用于检测引用数据类型                                                                                                        | 可以检测基本数据类型和引用数据类型）                                                            | 可以检测所用数据类型                                                 |
|  语法  | typeof 1/""/true/undefined/null/[]/{}/function(){}                         | []/{} instanceof Array                                                                                                      | ('')/(6)/(boolen)/({})/([]).constructor === String/Number/Object/Array                          | Object.prototype.toString.call(''/6/true/undefined/null/{}/[]/)      |
| 返回值 | (string)'number'/'string'/'boolean'/'undefined'/'object'/'function'        | (boolean)true/false                                                                                                         | (boolean)true/false                                                                             | (string)'[object String/Number/Boolean/Undefined/Null/Object/Array]' |
|  优点  | 使用简单                                                                   | 能检测出引用类型                                                                                                            | 基本能检测所有的类型（除了 null 和 undefined）                                                  | 检测出所有的类型                                                     |
|  缺点  | 1.只能检测出基本类型（除 null）和函数('function') 2.检测引用类返回'object' | 1.只能用于检测复杂类型，检测基本类型不会生效 2.且不能跨 iframe                                                              | 1.把类的原型进行重写，很有可能把之前的 constructor 覆盖，检测出的结果就不准确 2.也不能跨 iframe | IE6 下，undefined 和 null 均为 Object                                |
|  原理  |                                                                            | 1.基于原型链去判断，判断左边对象是否是右边构造函数的实例 2.判断左边对象的原型链 proto 上是否有右边构造函数的 prototype 属性 |                                                                                                 |
