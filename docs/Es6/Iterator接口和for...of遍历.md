任何数据结构只要部署 Iterator 接口，就可以完成遍历操作

ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性(是一个函数)，或者说，一个数据结构只要具有 Symbol.iterator 属性（是一个函数），就可以认为是“可遍历的”谁具有 Iterator 接口(属性)，就可以使用 for...of...遍历。

总结：字符串，数组,类数组可以使用 for...of 遍历，对象不能使用

1. 遍历器（Iterator）它是一种接口，为各种不同的数据结构提供统一的访问机制。  
   任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
2. ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费。  
   结果：谁具有 Iterator 接口(属性)，就可以使用 for...of...遍历。
3. Symbol.iterator
   一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 for...of 循环遍历它的成员。也就是说，for...of 循环内部调用的是数据结构的 Symbol.iterator 方法。

```javascript
let str = "hello";
console.log(str[Symbol.iterator]()); //StringIterator {}
let arr = [1, 2, 3, 4];
console.log(arr[Symbol.iterator]()); //Array Iterator {}
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj[Symbol.iterator]); //undefined 证明对象不能使用for...of...
```

总结：字符串，数组,类数组可以使用 for...of 遍历，对象不能使用

**Iterator 的作用有三个：**

> 1.  一是为各种数据结构，提供一个统一的、简便的访问接口；
> 2.  二是使得数据结构的成员能够按某种次序排列；
> 3.  三是 ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费

原生具备 Iterator 接口的数据结构如下。
Array
Map
Set
String
函数的 arguments 对象

示例

```javascript
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
var nextIndex = 0;
return { 返回一个遍历器对象
next: function() {
return nextIndex < array.length ?
{value: array[nextIndex++], done: false} :
{value: undefined, done: true};
}
};
}
```

```javascript
// Symbol.iterator 方法
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator](); iter 就是一个遍历器对象

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }
```
