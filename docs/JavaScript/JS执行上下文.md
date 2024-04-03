---
tags:
  - context
  - 执行上下文
---

对于每个执行上下文，都会有三个重要属性：变量对象、作用域链、this。

## 一、什么是执行上下文

**_执行上下文_** 是评估和执行 JavaScript 代码的环境的抽象。可以理解为 JavaScript 代码是在其对应的执行上下文中执行的。

执行上下文为一个对象，包含 **_变量对象（VO）_**，**_作用域链_** 和 **_this_**。

```javascript
executionContextObj = {
  variableObject: {},
  ScopeChain: {},
  this: {},
};
```

## 二、执行上下文的类型

- **_全局执行上下文_**：这是默认的基础的上下文，任何不在函数内部的代码都是在全局执行上下文中，一个程序只会有一个全局执行上下文。它会做两件事，一是创建一个全局的 window 对象（浏览器环境），二是设置 this 等于这个全局环境。
- **_函数执行上下文_**：每个函数都有它自己的执行上下文，当函数被调用时会创建其执行上下文，当函数调用完成时销毁，可以有任意多个函数执行上下文。
- **_Eval 函数执行上下文_**：`eval`函数内部的代码有它自己的执行上下文。

## 三、执行栈

栈是一种后进先出的数据结构，执行栈也是如此。当 JavaScript 代码第一次执行的时候会创建一个全局执行上下文并压入栈中，每当遇到一个函数调用就会创建一个该函数的函数执行上下文并压入栈中。引擎会执行那些位于栈顶的执行上下文，每执行完一个，就弹出一个，将控制流程转交到下一个栈顶的执行上下文中，当所有的代码执行完毕，执行栈中的执行上下文也会全部弹出。

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}

checkscope(); 

// 其上下文入栈出栈顺序为
// push(<checkscope> functionContext);
// push(<f> functionContext);
// pop();
// pop();
```

```javascript
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}

checkscope()(); 

// 其入栈出栈顺序为
// push(<checkscope> functionContext);
// pop();
// push(<f> functionContext);
// pop();
```

## 四、怎么创建执行上下文

执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段

### 1. 创建阶段

创建阶段即当函数被调用，但未执行任何其内部代码之前

创建阶段做了三件事：

- 确定 this 的值，也被称为 `This Binding`
- LexicalEnvironment（词法环境） 组件被创建
- VariableEnvironment（变量环境） 组件被创建

伪代码如下：

```javascript
ExecutionContext = {
  ThisBinding = <this value>,     // 确定this
  LexicalEnvironment = { ... },   // 词法环境
  VariableEnvironment = { ... },  // 变量环境
}
```

#### This Binding

确定`this`的值我们前面讲到，`this`的值是在执行的时候才能确认，定义的时候不能确认

#### 词法环境

词法环境有两个组成部分：

- 全局环境：是一个没有外部环境的词法环境，其外部环境引用为` null`，有一个全局对象，`this` 的值指向这个全局对象

- 函数环境：用户在函数中定义的变量被存储在环境记录中，包含了`arguments` 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境

伪代码如下：

```javascript
GlobalExectionContext = {  // 全局执行上下文
  LexicalEnvironment: {       // 词法环境
    EnvironmentRecord: {     // 环境记录
      Type: "Object",           // 全局环境
      // 标识符绑定在这里
      outer: <null>           // 对外部环境的引用
  }
}

FunctionExectionContext = { // 函数执行上下文
  LexicalEnvironment: {     // 词法环境
    EnvironmentRecord: {    // 环境记录
      Type: "Declarative",      // 函数环境
      // 标识符绑定在这里      // 对外部环境的引用
      outer: <Global or outer function environment reference>
  }
}
```

#### 变量环境

变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性

在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ `let` 和 `const` ）绑定，而后者仅用于存储变量（ `var` ）绑定

举个例子

```javascript
let a = 20;
const b = 30;
var c;

function multiply(e, f) {
  var g = 20;
  return e * f * g;
}

c = multiply(20, 30);
```

执行上下文如下：

```javascript
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {  // 词法环境
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },

  VariableEnvironment: {  // 变量环境
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

留意上面的代码，`let`和`const`定义的变量`a`和`b`在创建阶段没有被赋值，但`var`声明的变量从在创建阶段被赋值为`undefined`

这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中

但变量会被初始化为`undefined`(`var`声明的情况下)和保持`uninitialized`(未初始化状态)(使用`let`和`const`声明的情况下)

这就是变量提升的实际原因

### 2. 执行阶段

在此阶段，完成对所有这些变量的分配并执行

如果 `Javascript` 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 `undefined` 值

### 3. 回收阶段

执行上下文出栈等待虚拟机回收执行上下文

### 具体步骤

1. 找到当前上下文调用函数的代码；
2. 执行代码之前，先创建执行上下文；
3. 创建阶段；
   1. 创建变量对象（VO）；
      1. 创建 arguments 对象，检查当前上下文参数，建立该对象下的属性和属性值；
      2. 扫描上下文的函数声明；
         1. 每扫描到一个函数，就会在变量对象（VO）里面用函数名创建一个属性，为一个指针，指向该函数在内存中的地址；
         2. 如果函数名在 VO 中已经存在，对应的属性值会被新的引用覆盖。
      3. 扫描上下文的变量声明。
         1. 每扫描到一个变量会用变量名作为属性名，起初始值为 undefined；
         2. 如果变量名在 VO 中已经存在，则跳过继续扫描。
   2. 初始化作用域链；
   3. 确定 this 的指向。
4. 执行阶段。

## 五、执行栈

执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文

![](https://static.vue-js.com/9eda0310-74c1-11eb-ab90-d9ae814b240d.png)

当`Javascript`引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中

每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中

引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文

举个例子：

```javascript
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
```

转化成图的形式

![](https://static.vue-js.com/ac11a600-74c1-11eb-ab90-d9ae814b240d.png)

简单分析一下流程：

- 创建全局上下文请压入执行栈
- `first`函数被调用，创建函数执行上下文并压入栈
- 执行`first`函数过程遇到`second`函数，再创建一个函数执行上下文并压入栈
- `second`函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文`first`函数
- `first`函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文
- 所有代码执行完毕，全局上下文也会被推出栈中，程序结束

## 六、变量对象

变量对象是执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。根据上下文的不同可以分为全局上下文的变量对象和函数上下文的变量对象。

### 1. 全局上下文变量对象

> 在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。

在客户端 JavaScript 中，全局对象就是 window 对象。

### 2. 函数上下文变量对象

在函数上下文中，我们用活动对象(`activation object`, AO)来表示变量对象。

活动对象是进入函数上下文时被创建，它通过函数的`arguments`属性初始化。

当进入一个函数执行上下文中时，变量对象会包括

- 函数的所有形参
  - 由名称和对应值组成的一个变量对象的属性被创建
  - **_没有实参，属性值设为 undefined_**
- 函数声明
  - 由名称和对应值（函数对象(`function-object`)）组成一个变量对象的属性被创建
  - **_如果变量对象已经存在相同名称的属性，则完全替换这个属性_**
- 变量声明
  - 由名称和对应值（`undefined`）组成一个变量对象的属性被创建；
  - **_如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性_**

```javascript
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

// 在进入执行上下文后，此时的AO是
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}

// 在代码开始执行时，会修改对应变量对象的值
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}

// 稍微修改上述代码
function foo(a) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

// 执行结果为
// 1
// undefined
// f c() {}
// undefined
```

思考题：

```javascript
function foo() {
  console.log(a);
  a = 1;
}

foo(); // 此段代码执行会报错，因为a关键字并没有通过关键字var声明，所以不会有变量提升，执行的时候找不到a变量
```

```javascript
console.log(foo);

function foo() {
  console.log('foo');
}

var foo = 1; // 执行结果会打印"foo"， 这是因为进入函数执行上下文时，已经有了函数声明foo，此时变量声明foo不会再去覆盖原来的生命
```

## 七、作用域链

`JavaScript`中没有块级作用域，取而代之的是函数作用域。变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的。

### 1. 作用域

指的是程序源代码中定义变量的区域。它规定了如何查找变量，也就是确定了当前执行代码对变量的访问权限。

### 2. 静态作用域

`JavaScript`采用的是词法作用域，也就是静态作用域，由此，函数的作用域在函数定义的时候就决定了。

### 3. [[作用域链]]

函数内部有一个[[作用域链]]属性，在函数创建的时候就会保存所有父变量对象到其中。

### 4. 作用域链

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## 八、this

this 并不是在编写时绑定的，而是在运行时绑定的。它的上下文取决于函数调用时的各种条件。this 一旦被确定，就不可更改了。

箭头函数没有自己的 this，都指向外层，MDN 中对于箭头函数的描述是这样的：

> 箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值

this 的绑定规则有以下四种：

### 1. 默认绑定

不加修饰符，直接调用 this

```javascript
// 非严格模式
function foo() {
  console.log(this.a); // 此时this指向window
}
var a = 2;
foo();
```

```javascript
// 严格模式
function foo() {
  'use strict';
  console.log(this);
}

fn(); // undefined，fn是调用者，独立调用
window.fn(); // 指向window，fn是调用者，被window所拥有
```

### 2. 隐式绑定

这种情况发生在调用位置存在上下文对象的情况。

```javascript
function foo() {
  console.log(this.a);
}

let obj1 = {
  a: 1,
  foo,
};

let obj2 = {
  a: 2,
  foo,
};

obj1.foo(); // 输出 1
obj2.foo(); // 输出 2
```

```javascript
var a = 20;
var obj = {
  a: 10,
  c: this.a + 20, // 此时this指向全局
  fn: function () {
    return this.a;
  },
};

console.log(obj.c); // 40
console.log(obj.fn()); // 10
```

### 3. 显式绑定

这种就是使用 `Function.prototype` 中的三个方法 `call()`, `apply()`, `bind()` 了

```javascript
call(this, arg1, arg2, ...)
apply(this, [arg1, arg2, ...])
bind(this, arg1, arg2, ...)
```

### 4. new 绑定

new 操作符执行过程如下。

1. 创建一个全新的对象。
2. 这个新对象会被执行 [[JavaScript/JavaScript原型与原型链]] 连接。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

### 5.DOM 事件处理函数

this 指向触发事件的元素，也就是事件处理程序所绑定到的 DOM 节点。

```javascript
var ele = document.getElementById('id');
ele.addEventListener('click', function(e) {
  console.log(this);
  console.log(this === e.target); // true
})s
```

如果要判断一个函数的 this 绑定，就需要找到这个函数的的直接调用位置，然后可以按照下面四条来判断 this 的绑定对象：

1. 由 `new`调用：绑定到新创建的对象；
2. 由`call`或`apply`,`bind`调用：绑定到指定的对象；
3. 由上下文对象调用：绑定到上下文对象；
4. 默认：全局对象。

<!-- more -->
