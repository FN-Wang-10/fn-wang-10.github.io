1. 创建一个空对象
2. 将对象和构造函数通过原型链连接起来，（将对象的`__proto__`指向构造函数的`prototype`属性）使对象可以访问构造函数上的属性和方法
   `person.__proto__ = Person.prototype` // 设置原型链
3. 将构造函数中的 this 绑定到实例对象上
4. 如果该函数没有返回对象，则返回 this  
   如果该函数返回一个基本类型，则 this 指向实例对象  
   如果函数返回一个复杂类型，则 this 指向该函数返回的对象  
   如果该函数返回 null,则 this 指向实例对象

es6 中的箭头函数是否可以使用 new 实例化？  
箭头函数、没有 prototype、没有自己的 this 指向、不可以使用 arguments、自然不可以 new。

## 一、是什么

在`JavaScript`中，`new`操作符用于创建一个给定构造函数的实例对象

例子

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};
const person1 = new Person("Tom", 20);
console.log(person1); // Person {name: "Tom", age: 20}
t.sayName(); // 'Tom'
```

从上面可以看到：

- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数中的属性
- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

现在在构建函数中显式加上返回值，并且这个返回值是一个原始类型

```js
function Test(name) {
  this.name = name;
  return 1;
}
const t = new Test("xxx");
console.log(t.name); // 'xxx'
```

可以发现，构造函数中返回一个原始值，然而这个返回值并没有作用

下面在构造函数中返回一个对象

```js
function Test(name) {
  this.name = name;
  console.log(this); // Test { name: 'xxx' }
  return { age: 26 };
}
const t = new Test("xxx");
console.log(t); // { age: 26 }
console.log(t.name); // 'undefined'
```

从上面可以发现，构造函数如果返回值为一个对象，那么这个返回值会被正常使用

## 二、流程

从上面介绍中，我们可以看到`new`关键字主要做了以下的工作：

- 创建一个新的对象`obj`
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的`this`绑定到新建的对象`obj`上

- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

举个例子：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Tom", 20);
console.log(person1); // Person {name: "Tom", age: 20}
t.sayName(); // 'Tom'
```

流程图如下：

![](https://static.vue-js.com/b429b990-7a39-11eb-85f6-6fac77c0c9b3.png)

## 三、手写 new 操作符

现在我们已经清楚地掌握了`new`的执行过程

那么我们就动手来实现一下`new`

```js
function mynew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {};
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype;
  // 3.将构建函数的this指向新对象
  let result = Func.apply(obj, args);
  // 4.根据返回值判断
  return result instanceof Object ? result : obj;
}
```

测试一下

```js
function mynew(func, ...args) {
  const obj = {};
  obj.__proto__ = func.prototype;
  let result = func.apply(obj, args);
  return result instanceof Object ? result : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
};

let p = mynew(Person, "huihui", 123);
console.log(p); // Person {name: "huihui", age: 123}
p.say(); // huihui
```

可以发现，代码虽然很短，但是能够模拟实现`new`
