---
sidebar_position: 20
tags:
  - String
  - concat
  - slice
  - substr
  - substring
  - trim
  - trimLeft
  - trimRight
  - repeat
  - padEnd
  - toLowerCase
  - toUpperCase
  - charAt
  - indexOf
  - startWith
  - includes
  - split
  - match
  - replace
  - search
---

我们也可将字符串常用的操作方法归纳为 ***增、删、改、查***，需要知道字符串的特点是一旦创建了，就不可变

## 增

这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作

除了常用`+`以及`${}`进行字符串拼接之外，还可通过`concat`

### `concat()`

> 语法：`concat(str1, str2, /* …, */ strN)`

用于将一个或多个字符串拼接成一个新字符串

```javascript
let stringValue = 'hello ';
let result = stringValue.concat('world');
console.log(result); // "hello world"
console.log(stringValue); // "hello"
```

## 删

这里的删的意思并不是说删除原字符串的内容，而是创建字符串的一个副本，再进行操作。

下面三个方法都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数。

### `slice()`

`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

> 语法：`str.slice(beginIndex[, endIndex])`

```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

```


### `substr()`

`substr()` 方法返回一个字符串中从指定位置开始到指定字符数的字符。

:::danger
警告： 尽管 `String.prototype.substr(…)` 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非 JavaScript 核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 `substring()` 替代它。
:::

> 语法：`str.substr(start[, length])`

```javascript
var str = "abcdefghij";

console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):
```


### `substring()`

`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。

> 语法：`str.substring(indexStart[, indexEnd])`

```javascript
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));

// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// 输出 ""
console.log(anyString.substring(4,4));

// 输出 "Mozill"
console.log(anyString.substring(0,6));

// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

## 改

这里改的意思也不是改变原字符串，而是创建字符串的一个副本，再进行操作

### `trim()`、`trimLeft()`、`trimRight()`

删除前、后或前后所有空格符，再返回新的字符串

```javascript
let stringValue = ' hello world ';
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"
```

### `repeat()`

接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果

```javascript
let stringValue = 'na ';
let copyResult = stringValue.repeat(2); // na na
```

### `padEnd()`

复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件

```javascript
let stringValue = 'foo';
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, '.')); // "......foo"
```

### `toLowerCase()`、 `toUpperCase()`

大小写转化

```javascript
let stringValue = 'hello world';
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLowerCase()); // "hello world"
```

## 查

除了通过索引的方式获取字符串的值，还可通过：

### `charAt()`

返回给定索引位置的字符，由传给方法的整数参数指定

```javascript
let message = 'abcde';
console.log(message.charAt(2)); // "c"
```

### `indexOf()`

从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）

```javascript
let stringValue = 'hello world';
console.log(stringValue.indexOf('o')); // 4
```

### `startWith()`、`includes()`

从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值

```javascript
let message = 'foobarbaz';
console.log(message.startsWith('foo')); // true
console.log(message.startsWith('bar')); // false
console.log(message.includes('bar')); // true
console.log(message.includes('qux')); // false
```

## 转换

### `split()`

把字符串按照指定的分割符，拆分成数组中的每一项

```javascript
let str = '12+23+34';
let arr = str.split('+'); // [12,23,34]
```

## 模板匹配

针对正则表达式，字符串设计了几个方法：

### `match()`

接收一个参数，可以是一个正则表达式字符串，也可以是一个`RegExp`对象，返回数组

```javascript
let text = 'cat, bat, sat, fat';
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches[0]); // "cat"
```

### `search()`

接收一个参数，可以是一个正则表达式字符串，也可以是一个`RegExp`对象，找到则返回匹配索引，否则返回 -1

```javascript
let text = 'cat, bat, sat, fat';
let pos = text.search(/at/);
console.log(pos); // 1
```

### `replace()`

接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）

```javascript
let text = 'cat, bat, sat, fat';
let result = text.replace('at', 'ond');
console.log(result); // "cond, bat, sat, fat"
```
