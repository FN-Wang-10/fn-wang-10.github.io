---
sidebar_position: 3
tags:
  - JavaScript
  - 类型转换
  - ToPrimitive
---

## 一、类型转换

各种数据类型之间是可以相互转换的，转换又分为 **_显示转换_** 和 **_隐式转换_** 。

> 类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时(runtime)。然而在 javascript 中通常将它们统称为强制类型转换。

我个人则倾向于用“隐式强制类型转换”(implicit coercion)和“显式强制类型转换”(explicit coercion)来区分：

- 显式强制类型转换：手动地将一种类型的值转为另一种类型，常见的显式转换方法有：`number`、`string`、`boolean`、`parseint`、`parsefloat`、`tostring` 等等；
- 隐式强制类型转换：一般是在涉及运算符的时候才出现的情况，比如两个不同类型的变量相加减、取反等。

### 1. 显示转换

能够很清楚地看到这里发生了类型的转换，常见的方法有：

- `Number()`
- `parseInt()`
- `String()`
- `Boolean()`

#### 1.1 `Number()`

将任意类型的值转为数值。

需要注意`undefined`转为数值是`NaN`，如果待转换字符串中有非数字字符，则会直接转为`NaN`。

<!-- tabs:start -->

#### **题目 1**

```javascript
Number(123); // 123
Number("123"); // 123
Number("123abc"); // NaN
Number(""); // 0
Number(true); // 1
Number(false); // 0
Number(undefined); // NaN
Number(null); // 0
Number({ a: 1 }); // NaN
Number([1, 2, 3]); // NaN
Number([1]); // 1
```

#### 1.2 `parseInt()`

`parseInt()`与`Number()`方法都可以将字符串转为数值类型，但他们有以下几个区别：

- `parseInt(str, hex)`接收两个参数，第二个参数是表明要解析的`str`字符串的进制基准；
- `parseInt()`只能转为整数类型，会去掉小数部分；
- `parseInt()`遇到一个字符就解析一个字符，如果遇到非数字字符，就停止解析，返回之前解析好的数字，但是`Number()`解析的字符中只要有非数字内容就转为`NaN`。

<!-- tabs:start -->

#### **题目 2**

```javascript
parseInt("123"); // 123
parseInt("123abc"); // 123
parseInt("123.45"); // 123
parseInt("10", 2); // 2
```

<!-- tabs:end -->

#### 1.3 `String()`

将任意类型的值转为字符串。

<!-- tabs:start -->

#### **题目 3**

```javascript
String(123); // '123'
String("123"); // '123'
String(true); // 'true'
String(false); // 'false'
String(undefined); // 'undefined'
String(null); // 'null'
String({ a: 123 }); // '[object Object]'
String([1, 2, 3]); // '1,2,3'
```

<!-- tabs:end -->

#### 1.4 `Boolean()`

将任意类型的值转为布尔值。

<!-- tabs:start -->

#### **题目 4**

```javascript
Boolean(0); // false
Boolean(1); // true
Boolean("0"); // true
Boolean("1"); // true
Boolean(""); // false
Boolean(NaN); // false
Boolean({}); // true
Boolean([]); // true
Boolean(new Boolean(false)); // true
```

<!-- tabs:end -->

### 2. 隐式转换

虽然变量的类型是不确定的，但是各种运算操作对数据类型是有要求的，如果运算子的类型与预期不符，就会触发类型转换，这种转换就是 **_隐式转换_** 。

这里可以归纳为三种发生隐式转换的场景：

- 比较运算（`==`、`!=`、`>`、`<`）、`if`、`while`需要布尔值的地方会转为布尔值
- 算数运算（`+`、`-`、`*`、`/`、`%`）需要数值运算的地方会转为数值类型
- 算数运算中的`+`运算如果一侧有字符串，则视为字符串操作，会将非字符串类型转为字符串

#### 2.1 自动转为布尔值

在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean`函数。

可以得出个小结，除了下面几种会被转化成 false，其他都换被转化成 true

- `undefined`
- `null`
- `false`
- `+0`
- `-0`
- `NaN`
- `""`

#### 2.2 自动转为数值

遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作。

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

<!-- tabs:start -->

#### **题目 5**

```javascript
"5" + 1; // '51'
"5" + true; // "5true"
"5" + false; // "5false"
"5" + {}; // "5[object Object]"
"5" + []; // "5"
"5" + function () {}; // "5function (){}"
"5" + undefined; // "5undefined"
"5" + null; // "5null"
```

<!-- tabs:end -->

#### 2.3 自动转为字符串

除了`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

<!-- tabs:start -->

#### **题目 6**

```javascript
"5" - "2"; // 3
"5" * "2"; // 10
true - 1; // 0
false - 1; // -1
"1" - 1; // 0
"5" * []; // 0
false / "5"; // 0
"abc" - 1; // NaN
null + 1; // 1
undefined + 1; // NaN
```

<!-- tabs:end -->

## 二、转换方法

### 1. 转换为字符串

#### 1.1 `toString()`

这种方法可以将`number`、`boolean`和`object`类型转换为`string`，但是无法转换`null`和`undefined`。

<!-- tabs:start -->

#### **题目 1**

```javascript
(1).toString(); // '1'
true
  .toString()(
    // 'true'
    {}
  )
  .toString()(
    // '[object Object]'
    []
  )
  .toString()(
    // ''
    [1, 2, 3]
  )
  .toString(); // ‘1,2,3’
```

<!-- tabs:end -->

这里需要注意的是`{}`调用`toString()`是调用了原型链顶端的`toString()`方法，它返回`object`的`[[class]]`属性，而`[]`调用的`toString()`是`Array`重写过之后的方法，这个方法的功能是将数组里的每个值取出拼成一个字符串，并且每个值之间以`,`隔开，这里因为是空数组，所以返回`‘’`。

#### 1.2 `String()`

`string()`是一个全局函数，基本上能转换所有的数据类型为`string`。

<!-- tabs:start -->

#### **题目 2**

```javascript
String(123); // '123'
String("123"); // '123'
String(true); // 'true'
String(false); // 'false'
String(undefined); // 'undefined'
String(null); // 'null'
String({ a: 123 }); // '[object Object]'
String([1, 2, 3]); // '1,2,3'
```

<!-- tabs:end -->

`String()`转换对象时与`toStirng()`逻辑相同。

#### 1.3 操作符：`+`

这是最简单便捷的一种方式，将其他类型的变量加上一个空字符串都可以转成一个字符串类型。

<!-- tabs:start -->

#### **题目 3**

```javascript
1 + ''            // "1"
null + ''         // "null"
undefined + ''    // "undefined"
true + ''         // "true"
{} + ''           // 0
[] + ''           // ""
[1, 2, 3] + ''    // "1,2,3"
```

<!-- tabs:end -->

### 2. 转换为数值类型

#### 2.1 `Number()`

除了要转换的类型本来就是由数字组成之外，其他的转换一律变成`NaN`。

<!-- tabs:start -->

#### **题目 4**

```javascript
Number("1"); // 1
Number("+1"); // 1
Number("-1"); // -1
Number("s"); // NaN
Number(null); // 0
Number(undefined); // NaN
Number({}); // NaN
Number([]); // 0
Number([1, 2, 3]); // NaN
Number([1]); // 1
```

<!-- tabs:end -->

#### 2.2 `parseInt(x, 10)`

将其他类型转换成整数类型，后面的 10 表示的是十进制，取值范围在`2 ~ 37`之间。一般都是进制之间的转换。

<!-- tabs:start -->

#### **题目 5**

```javascript
parseInt("123"); // 123
parseInt("123abc"); // 123
parseInt("123.45"); // 123
parseInt("10", 2); // 2
parseInt("011", 10); // 11
parseInt("0x11", 10); // 0
parseInt("011", 36); // 37
parseInt("0x11"); // 17
parseInt("08"); // 8
parseInt("011", 2); // 3
```

<!-- tabs:end -->

#### 2.3 `x - 0`

这是一种最简单快捷的方式，字符串减去一个 0 可以转换成数字。

在数学运算符中，除了`+`，其他运算符都期望得到数值进行运算，它们的表现与`-`是相同的。

<!-- tabs:start -->

#### **题目 6**

```javascript
'1' - 1           // 0
1 - '1'           // 0
'1' - '1'         // 0
'1' - null        // 1
1 - null          // 1
null - '1'        // -1
null - 1          // -1
'1' - undefined   // NaN
'1' - {}          // NaN
{} - '1'          // -1
'1' - []          // 1
[] - '1'          // -1
```

<!-- tabs:end -->

#### 2.4 `+x`

在要转换的类型前面加上`+`可以转换成数字，并不是取绝对值。

<!-- tabs:start -->

#### **题目 7**

```javascript
+"1" + // 1
  "-1" + // -1
  {} + // NaN
  []; // 0
```

<!-- tabs:end -->

### 3. 转换为`boolean`

#### 3.1 `Boolean()`

可以转换所有类型的值为布尔类型。

<!-- tabs:start -->

#### **题目 8**

```javascript
Boolean(1); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean({}); // true
Boolean([]); // true
Boolean("s"); // true
```

<!-- tabs:end -->

#### 3.2 `!!`

这是一种最快最便捷的方式将其他类型的值转为布尔类型。

<!-- tabs:start -->

#### **题目 9**

```javascript
!!1; // true
!!null; // false
!!undefined; // false
!!obj; // true
!!"s"; // true
```

<!-- tabs:end -->

## 三、`{} + []`与`[] + {}`的区别

在`JavaScript`的运算符中，`+`是很重要的一种运算符，不管是数组的运算还是字符串的拼接。在了解本题目之前需要先了解以下两个重点：

1. 加号`+`运算在`JavaScript`中，使用上的规定是什么；
2. 对象在`JavaScript`是怎么转换为原始数据类型的。

### 1. 加号运算符

在标准中转换的规则还有以下几个，要注意它的顺序：

```javascript
operand + operand = result
```

1. 使用`ToPrimitive`运算转换左与右运算元为原始数据类型值(`primitive`)
2. 在第`1`步转换后，如果有运算元出现原始数据类型是"字符串"类型值时，则另一运算元作强制转换为字符串，然后作字符串的连接运算(`concatenation`)
3. 在其他情况时，所有运算元都会转换为原始数据类型的"数字"类型值，然后作数学的相加运算(`addition`)

### 2. ToPrimitive`内部运算

加号运算符只能使用原始数据类型，那么对于对象类型的值就需要先转成原始数据类型。这种情况不止会出现在加号运算中，在关系比较或值相等比较的运算中也是如此。

```javascript
ToPrimitive(input, PreferredType?)
```

`input`代表代入的值，而`PreferredType`可以是数字(Number)或字符串(String)其中一种，这会代表"优先的"、"首选的"的要进行转换到哪一种原始类型，转换的步骤会依这里的值而有所不同。但如果没有提供这个值也就是预设情况，则会设置转换的`hint`值为`"default"`。这个首选的转换原始类型的指示(`hint`值)，是在作内部转换时由 JS 视情况自动加上的，一般情况就是预设值。

而在`JavaScript`的`Object`原型的设计中，都一定会有两个`valueOf`与`toString`方法，所以这两个方法在所有对象里面都会有，不过它们在转换有可能会交换被调用的顺序。

#### 2.1 当`PreferredType`为数字`(Number)`时

当`PreferredType`为数字(Number)时，`input`为要被转换的值，以下是转换这个`input`值的步骤:

1.  如果`input`是原始数据类型，则直接返回`input`。
2.  否则，如果`input`是个对象时，则调用对象的`valueOf()`方法，如果能得到原始数据类型的值，则返回这个值。
3.  否则，如果`input`是个对象时，调用对象的`toString()`方法，如果能得到原始数据类型的值，则返回这个值。
4.  否则，抛出 TypeError 错误。

#### 2.2 当`PreferredType`为字符串`(String)`时

上面的步骤 2 与 3 对调，如同下面所说:

1.  如果`input`是原始数据类型，则直接返回`input`。
2.  否则，如果`input`是个对象时，调用对象的`toString()`方法，如果能得到原始数据类型的值，则返回这个值。
3.  否则，如果`input`是个对象时，则调用对象的`valueOf()`方法，如果能得到原始数据类型的值，则返回这个值。
4.  否则，抛出 TypeError 错误。

#### 2.3 `PreferredType`没提供时，也就是`hint`为`"default"`时

与`PreferredType`为数字`(Number)`时的步骤相同。**数字**其实是预设的首选类型，也就是说在一般情况下，加号运算中的对象要作转型时，都是先调用`valueOf`再调用`toString`。

但这有两个异常，一个是`Date`对象，另一是`Symbol`对象，它们覆盖了原来的`PreferredType`行为，`Date`对象的预设首选类型是字符串`(String)`。因此你会看到在一些教程文件上会区分为两大类对象，一类是 `Date` 对象，另一类叫 非`Date(non-date)` 对象。因为这两大类的对象在进行转换为原始数据类型时，首选类型恰好相反。

### 3. `valueOf`与`toString`方法

在 JS 中所设计的`Object`纯对象类型的`valueOf`与`toString`方法，它们的返回如下:

- `valueOf`方法返回值: 对象本身。
- `toString`方法返回值:` "[object Object]"`字符串值，不同的内建对象的返回值是`"[object type]"`字符串，`"type"`

指的是对象本身的类型识别，例如`Math`对象是返回`"[object Math]"`字符串。但有些内建对象因为覆盖了这个方法，所以直接调用时不是这种值。(注意: 这个返回字符串的前面的`"object"`开头英文是小写，后面开头英文是大写)

​ 你有可能会看过，利用`Object`中的`toString`来进行各种不同对象的判断语法，这在以前 JS 能用的函数库或方法不多的年代经常看到，不过它需要配合使用函数中的`call`方法。

```javascript
Object.prototype.toString.call([]); // "[object Array]"
```

### 4. 实战

#### 4.1 字符串`+`其他原始类型

字符串在加号运算有最高的优先级，与字符串相加必定是字符串连接运算。

```javascript
"1" + 123; // "1123"
"1" + false; // "1false"
"1" + null; // "1null"
"1" + undefined; // "1undefined"
"1" + {}; // "1[object Object]"
"1" + []; // "1"
"1" + "NaN"; // 1NaN
```

#### 4.2 数字`+`其他的非字符串的原始数据类型

数字与其他类型作相加时，除了字符串会优先使用字符串连接运算`(concatenation)`的，其他都要依照数字为优先，所以除了字符串之外的其他原始数据类型，都要转换为数字来进行数学的相加运算。

```javascript
1 + true; // 2
1 + null; // 1
1 + undefined; // NaN
1 + {}; // "1undefined"
1 + []; // "1"
```

#### 4.3 数字/字符串以外的原始数据类型作加法运算

当数字与字符串以外的，其他原始数据类型直接使用加号运算时，就是转为数字再运算，这与字符串完全无关。

```javascript
true + true; // 2
true + null; // 1
undefined + null; // NaN
```

#### 4.4 空数组与空对象

1.  `[] + []`

```javascript
[] + []; // ""
```

两个数组相加，依然按照`valueOf -> toString`的顺序，但因为`valueOf`是数组本身，所以会以`toString`的返回值才是原始数据类型，也就是空字符串，所以这个运算相当于两个空字符串在相加，依照加法运算规则第 2 步骤，是字符串连接运算(concatenation)，两个空字符串连接最后得出一个空字符串。

2.  `{} + {}`

```javascript
{
}
+{}; // "[object Object][object Object]"
```

两个空对象相加，依然按照`valueOf -> toString`的顺序，但因为`valueOf`是对象本身，所以会以`toString`的返回值才是原始数据类型，也就是"[object Object]"字符串，所以这个运算相当于两个"[object Object]"字符串在相加，依照加法运算规则第 2 步骤，是字符串连接运算(concatenation)，最后得出一个"object Object"字符串。

但是这个结果有异常，上面的结果只是在 Chrome 浏览器上的结果(v55)，怎么说呢？

有些浏览器例如`Firefox`、`Edge`浏览器会把`{} + {}`直译为相当于`+{}`语句，因为它们会认为以花括号开头(`{`)的，是一个区块语句的开头，而不是一个对象字面量，所以会认为略过第一个`{}`，把整个语句认为是个`+{}`的语句，也就是相当于强制求出数字值的`Number({})`函数调用运算，相当于`Number("[object Object]")`运算，最后得出的是`NaN`。

如果在第一个(前面)的空对象加上圆括号(`()`)，这样 JS 就会认为前面是个对象，就可以得出同样的结果:

```javascript
({}) + {}; // "[object Object][object Object]"
```

3.  `{} + []`

```javascript
{
}
+[]; // 0
```

上面同样的把`{}`当作区块语句的情况又会发生，不过这次所有的浏览器都会有一致结果，如果`{}`(空对象)在前面，而`[]`(空数组)在后面时，前面(左边)那个运算元会被认为是区块语句而不是对象字面量。

所以`{} + []`相当于`+[]`语句，也就是相当于强制求出数字值的`Number([])`运算，相当于`Number("")`运算，最后得出的是`0`数字。

特别注意: 所以如果第一个(前面)是`{}`时，后面加上其他的像数组、数字或字符串，这时候加号运算会直接变为一元正号运算，也就是强制转为数字的运算。这是个陷阱要小心。

4.  `[] + {}`

```javascript
[] + {}; // "[object Object]"
```

`[]`转为`“”`，`{}`转为`“[object Object]”`
