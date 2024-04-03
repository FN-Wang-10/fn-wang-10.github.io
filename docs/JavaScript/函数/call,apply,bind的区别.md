---
tags:
  - call
  - apply
  - bind
---

## 总结

### 三者相同点

> call、apply、bind 都是用于修改 this 指向，同时也可以传参  
> apply、call、bind 都是函数内置 API。

### 三者区别：

> call、apply 立即调用函数  
> call 函数的参数以原有的顺序依次传入  
> apply 函数的参数以数组或类数组的形式传入  
> bind 方法返回的是一个修改过后的函数，不会立即执行，需调用后执行
>
> 通过 call,apply,bind 修改 this 的指向。
>
> call 方法：第一个参数就是 this 的指向，从第二个参数开始就是函数自身的参数。  
> apply 方法：第一个参数就是 this 的指向，第二个参数是一个数组或者类数组，数组项就是函数自身的参数。  
> bind 方法：第一个参数就是 this 的指向，从第二个参数开始就是函数自身的参数，返回的是函数体，需要再次调用。  
> bind 会产生一个新的函数，会将 bind 的第二个参数，作为新函数的第一个参数,并且新函数不会立马调用

## 一、作用

`call `、`apply `、`bind `作用是改变函数执行时的上下文，简而言之就是改变函数运行时的`this`指向

那么什么情况下需要改变`this`的指向呢？下面举个例子

```js
var name = "lucy";
var obj = {
  name: "martin",
  say: function () {
    console.log(this.name);
  },
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say, 0); // lucy，this 指向 window 对象
```

从上面可以看到，正常情况`say`方法输出`martin`

但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`lucy`

我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了

```js
setTimeout(obj.say.bind(obj), 0); //martin，this指向obj对象
```

## 二、区别

下面再来看看`apply`、`call`、`bind`的使用

### apply

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args) {
  console.log(this, args);
}
let obj = {
  myname: "张三",
};

fn.apply(obj, [1, 2]); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```js
fn.apply(null, [1, 2]); // this指向window
fn.apply(undefined, [1, 2]); // this指向window
```

### call

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
function fn(...args) {
  console.log(this, args);
}
let obj = {
  myname: "张三",
};

fn.call(obj, 1, 2); // this会变成传入的obj，传入的参数必须是一个数组；
fn(1, 2); // this指向window
```

同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

```js
fn.call(null, [1, 2]); // this指向window
fn.call(undefined, [1, 2]); // this指向window
```

### bind

bind 方法和 call 很相似，第一参数也是`this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数

```js
function fn(...args) {
  console.log(this, args);
}
let obj = {
  myname: "张三",
};

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1, 2); // this指向obj
fn(1, 2); // this指向window
```

### 小结

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind `是返回绑定 this 之后的函数，`apply `、`call` 则是立即执行

## 三、实现

实现`bind`的步骤，我们可以分解成为三部分：

- 修改`this`指向
- 动态传递参数

```js
// 方式一：只在bind中传递函数参数
fn.bind(obj, 1, 2)();

// 方式二：在bind中传递函数参数，也在返回函数中传递参数
fn.bind(obj, 1)(2);
```

- 兼容`new`关键字

整体实现代码如下：

```js
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 获取参数
  const args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? new fn(...arguments) : context,
      args.concat(...arguments)
    );
  };
};
```

如果你对`JavaScript`对象有研究的话你应该知道，在`JavaScript`中，函数也是一种对象。那么既然函数也是对象的话，它就存在属于它的方法：`call`，`apply`, `bind`等。这些方法都是为了改变函数运行时的上下文`（context）`而存在的，换句话说，就是为了改变函数体内部 `this` 的指向。`JavaScript` 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

![](https://static.vue-js.com/a900e460-7be4-11eb-ab90-d9ae814b240d.png)

## 一、区别

### 1. `bind` 方法

`call`和`apply`改变了函数的`this`,并且执行了该函数。`bind`只是改变了函数的`this`，并返回一个函数，但不执行该函数。

```javascript
var fn = func.bind(window);
fn();
```

### 2. `apply`，`call` 的区别

对于 `apply`、`call` 二者而言，作用完全一样，只是接受参数的方式不太一样。`apply`接受一个数组作为被调用函数的参数，`call`接受不定量的参数作为被调用函数的参数。

```javascript
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2]);
```

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind `是返回绑定 this 之后的函数，`apply `、`call` 则是立即执行

## 二、JS 原生实现

### 1. apply

```javascript
Function.prototype.apply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  var result;

  if (!arr) {
    result = context.fn(); // 没有传入参数，直接执行
  } else {
    var args = [];
    for (var i = 0; i < arr.length; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")"); // 默认调用arr.toString()方法
  }

  // 将this指向销毁
  delete context.fn;
  return result;
};
```

### 2. call

```javascript
Function.prototype.call = function (context) {
  var context = context || window; // 第一个参数为调用call方法的函数中的this指向
  context.fn = this; // 此处this是指调用call的function

  var arr = [];
  for (var i = 1; i < arguments.length; i++) {
    arr.push("arguments[" + i + "]");
  }

  //执行函数，并返回结果，其中 arr 默认会调用toString()，此处可作参数
  var result = eval("context.fn(" + arr + ")");
  delete context.fn; // 将this指向销毁
  return result;
};
```

### 3. bind

#### 3.1 在不考虑构造函数的情况下

```javascript
Function.prototype.bind = function () {
  var _this = this;
  var context = [].shift.call(arguments); // 保存需要绑定的this上下文
  var args = [].slice.call(arguments); // 剩下参数转为数组

  return function () {
    return _this.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};
```

#### 3.2 在考虑构造函数的情况下

```javascript
Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this, // 此处的 this 指向目标函数
    fNOP = function () {},
    fBound = function () {
      return fToBind.apply(
        this instanceof fNOP
          ? this // 此处 this 为 调用 new obj() 时所生成的 obj 本身
          : oThis || this, // 若 oThis 无效则将 fBound 绑定到 this
        // 将通过 bind 传递的参数和调用时传递的参数进行合并, 并作为最终的参数传递
        aArgs.concat(Array.prototype.slice.call(arguments))
      );
    };

  // 将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
};
```

> 注意：绑定函数(bind 函数返回的新函数)不可以再通过 apply 和 call 改变其 this 指向，即当绑定函数调用 apply 和 call 改变其 this 指向时，并不能达到预期效果。

## 三、应用实例

### 1. 数组之间追加

将数组 array2 拼接到 array1 后边。

```javascript
Array.prototype.push.apply(array1, array2);
```

### 2. 获取数组中的最大值和最小值

```javascript
var numbers = [5, 458, 120, -215];
var maxInNumbers = Math.max.apply(Math, numbers), // 458
  maxInNumbers = Math.max.call(Math, 5, 458, 120, -215); //458
```

number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。

### 3. 验证是否是数组

```javascript
functionisArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```

### 4. 类（伪）数组使用数组方法

```javascript
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
```

`Javascript`中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 `getElementsByTagName` , `document.childNodes` 之类的，它们返回`NodeList`对象都属于伪数组。不能应用 `Array`下的 `push` , `pop` 等方法。

但是我们能通过 `Array.prototype.slice.call` 转换为真正的数组的带有 `length` 属性的对象，这样 `domNodes` 就可以应用 `Array` 下的所有方法了。

### 5. 偏函数

所谓偏函数，就是固定一个函数的一个或者多个参数，返回一个新的函数，这个函数用于接受剩余的参数，

假设我们有一个相加的函数

```javascript
function add(a, b) {
  return a + b;
}
```

而当我们进行多次有规律的计算时：

```javascript
add(1, 2);
add(1, 3);
add(1, 4);
add(1, 5);
add(1, 6);
```

我们发现，调用 add 方法时，第一个参数相同，但是我们写了 5 遍，鉴于此种情况，我们可以将 add 方法封装成偏函数的形式来实现更加简洁的代码。

```javascript
var parAdd = add.bind(null, 1);

parAdd(2);
parAdd(3);
parAdd(4);
parAdd(5);
parAdd(6);
```

如上代码所示，parAdd 就被成为一个偏函数。

另一种使用偏函数情况是，当我们有一个很通用的函数，为了方便提供一个较常用的变体。举例来说，假设我们有一个函数 send(from, to, text)，那么使用偏函数可以创建一个从当前用户发送的变体：sendTo(to, text)

### 6. 实现继承

通过 call 调用父类构造函数实现继承.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name + ":" + this.age);
  };
}
function Student(name, age, job) {
  Person.call(this, name, age);
  this.job = job;
  this.say = function () {
    console.log(this.name + ":" + this.age + ":" + this.job);
  };
}

var me = new Student("andy", 12, "fe");
me.say(); // andy:12:fe
```
