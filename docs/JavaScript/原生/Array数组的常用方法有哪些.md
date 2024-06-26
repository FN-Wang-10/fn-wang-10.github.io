原型方法  
栈方法：push/pop  
队列方法：unshift/shift  
重排序方法：reverse/sort  
操作方法：concat/slice/splice  
转换方法：join **toString**  
位置方法：indexOf/lastIndexOf 返回索引,没有返回-1  
迭代方法：forEach/filter/map/some/every  
归并方法：reduce/reduceRight 第一个回调函数的参数是 a,b,index,array 第二个参数是初始值  
扁平化方法：flat （Infinity） includes（返回布尔值）

静态方法  
检测方法：Array.isArray 静态方法  
Array.from——ES6——用于将对象转为真正的数组(类数组转数组)

concat slice join toString flat 不修改原数组

indexof 没有查找到返回-1  
foeEach 没有返回值  
some every includes 返回布尔值  
reduce 返回计算的值  
find 返回第一个匹配的元素  
给定条件，返回数组中第一个满足该条件的值，之后的值不再进行检测，当没有找到满足该条件的值时，返回 undefined

```jsx
people.find((element, index, array) => element.age < 28); // // {name: "Matt", age: 27}
```

## 一、操作方法

数组基本操作可以归纳为 增、删、改、查，需要留意的是哪些方法会对原数组产生影响，哪些方法不会

下面对数组常用的操作方法做一个归纳

### 增

下面前三种是对原数组产生影响的增添方法，第四种则不会对原数组产生影响

- push()
- unshift()
- splice()
- concat()

#### push()

`push()`方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度

```js
let colors = []; // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
console.log(count); // 2
```

#### unshift()

unshift()在数组开头添加任意多个值，然后返回新的数组长度

```js
let colors = new Array(); // 创建一个数组
let count = colors.unshift("red", "green"); // 从数组开头推入两项
alert(count); // 2
```

#### splice

传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 0, "yellow", "orange");
console.log(colors); // red,yellow,orange,green,blue
console.log(removed); // []
```

#### concat()

首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组

```js
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
```

### 删

下面三种都会影响原数组，最后一项不影响原数组：

- pop()
- shift()
- splice()
- slice()

#### pop()

`pop()` 方法用于删除数组的最后一项，同时减少数组的` length` 值，返回被删除的项

```js
let colors = ["red", "green"];
let item = colors.pop(); // 取得最后一项
console.log(item); // green
console.log(colors.length); // 1
```

#### shift()

`shift()`方法用于删除数组的第一项，同时减少数组的` length` 值，返回被删除的项

```js
let colors = ["red", "green"];
let item = colors.shift(); // 取得第一项
console.log(item); // red
console.log(colors.length); // 1
```

#### splice()

传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(0, 1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，只有一个元素的数组
```

### slice()

slice() 用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组

```js
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
console.log(colors); // red,green,blue,yellow,purple
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
```

#### 改

即修改原来数组的内容，常用`splice`

#### splice()

传入三个参数，分别是开始位置，要删除元素的数量，要插入的任意多个元素，返回删除元素的数组，对原数组产生影响

```js
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
console.log(colors); // red,red,purple,blue
console.log(removed); // green，只有一个元素的数组
```

#### 查

即查找元素，返回元素坐标或者元素值

- indexOf()
- includes()
- find()

#### indexOf()

返回要查找的元素在数组中的位置，如果没找到则返回 -1

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4); // 3
```

#### includes()

返回要查找的元素在数组中的位置，找到返回`true`，否则`false`

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4); // true
```

#### find()

返回第一个匹配的元素

```js
const people = [
  {
    name: "Matt",
    age: 27,
  },
  {
    name: "Nicholas",
    age: 29,
  },
];
people.find((element, index, array) => element.age < 28); // // {name: "Matt", age: 27}
```

## 二、排序方法

数组有两个方法可以用来对元素重新排序：

- reverse()
- sort()

### reverse()

顾名思义，将数组元素方向反转

```js
let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1
```

### sort()

sort()方法接受一个比较函数，用于判断哪个值应该排在前面

```js
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15
```

## 三、转换方法

常见的转换方法有：

### join()

join() 方法接收一个参数，即字符串分隔符，返回包含所有项的字符串

```js
let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue
alert(colors.join("||")); // red||green||blue
```

## 四、迭代方法

常用来迭代数组的方法（都不改变原数组）有如下：

- some()
- every()
- forEach()
- filter()
- map()

### some()

对数组每一项都运行传入的测试函数，如果至少有 1 个元素返回 true ，则这个方法返回 true

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult); // true
```

### every()

对数组每一项都运行传入的测试函数，如果所有元素都返回 true ，则这个方法返回 true

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult); // false
```

### forEach()

对数组每一项都运行传入的函数，没有返回值

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.forEach((item, index, array) => {
  // 执行某些操作
});
```

### filter()

对数组每一项都运行传入的函数，函数返回 `true` 的项会组成数组之后返回

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // 3,4,5,4,3
```

### map()

对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组

```js
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult); // 2,4,6,8,10,8,6,4,2
```

### splice() 方法

### 1 定义和用法

splice() 方法用于插入、删除或替换数组的元素。

### 2 语法

```javascript
arrayObject.splice(index,howmany,element1,.....,elementX)
```

#### 3 参数 描述

index 必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。

howmany 必需。规定应该删除多少元素。必须是数字，但可以是 “0”。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。

element1 可选。规定要添加到数组的新元素。从 index 所指的下标处开始插入。

elementX 可选。可向数组添加若干元素。

### 4 返回值

如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。

### 5 说明

splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

### 6 在处理数组的一些方法中，该方法可以发挥它很大的用途：（重点）

a、删除——只需要声明两个参数，就可以从数组中删除任意多个项，这两个参数分别指代要删除的第一项的位置以及要删除的个数  
例如 arr.splice(0,2)将删除数组 arr 的前两项。

b、插入而不删除——声明三个参数就可以把数据插入到指定的位置，这三个参数是起始位置、0（要删除的数组项的个数）和要插入的项。
此外，还可以用第四个、第五个或更多个参数指定其他要删除的项。

例如，arr.splice(2,0,"red","blue")将在位置 2 处插入“red”和“blue”。

c、替换并删除——声明三个参数就可以实现数组的删除并插入，这三个参数是起始位置，要删除的项的个数，要插入的内容。
要插入的项的个数不必等于删除的项的个数。

例如 arr.splice(2,1,"red","blue")将删除数组 arr 在位置 2 处的项并插入“red”和“blue”。

### 7 示例演示：

例子 1  
在本例中，我们将创建一个新数组，并向其添加一个元素：

```javascript

var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"
document.write(arr + "
")
arr.splice(2,0,"William")
document.write(arr + "
")
输出：

George,John,Thomas,James,Adrew,Martin
George,John,William,Thomas,James,Adrew,Martin
```

例子 2  
在本例中我们将删除位于 index 2 的元素，并添加一个新元素来替代被删除的元素：

```javascript
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"
document.write(arr + "
")
arr.splice(2,1,"William")
document.write(arr)
```

输出：  
George,John,Thomas,James,Adrew,MartinGeorge,John,William,James,Adrew,Martin

例子 3  
在本例中我们将删除从 index 2 (“Thomas”) 开始的三个元素，并添加一个新元素 (“William”) 来替代被删除的元素：

```javascript
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"
document.write(arr + "
")
arr.splice(2,3,"William")
document.write(arr)
```

输出：  
George,John,Thomas,James,Adrew,MartinGeorge,John,William,Martin
