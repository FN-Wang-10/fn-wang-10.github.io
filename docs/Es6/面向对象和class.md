## 前言

面向对象的二种写法

1. 构造函数+原型(作者通过此方式实现类和对象的)
2. class 写法 - 语法糖 - 更适合开发

## 1.构造函数+原型

(作者通过此方式实现类和对象的)

1. 构造函数+原型

```javascript
function Abc() {
  //私有的
  this.a = 1; //this 指向实例对象
  this.b = 2;
}
Abc.prototype.init = function () {
  //公有
  return this.a; //this 指向实例对象
};
new Abc().init();
```

2. class 写法 - 语法糖 - 更适合开发

```javascript
class Abc {
  constructor() {
    // 构造函数
    this.a = 1; // this 指向实例对象
    this.b = 2;
  }
  init() {
    //方法，类似原型
  }
}
new Abc().init();
```

### prototype

ES 规定，每一个函数都有一个 prototype（构造器的原型），指向另一个对象。

prototype 的所有属性和方法都会被构造函数的实例继承,我们可以把那些不变(公用)的属性和方法，直接定义在 prototype 对象属性上。

prototype 里面的 this 依然指向实例对象。 构造函数里面 this 指向实例对象。

### 原型链

概念：实例对象与原型(prototype)之间的连接，叫做原型链，原型链依靠`**proto**`(新版浏览器中采用`[[Prototype]]`)进行连接。
每个对象都有一个`**proto**`（内部原型）属性,原型链上的对象正是依靠这个属性连结在一起.

<!-- ### 面向对象的继承

面向对象继承的概念：子类继承父类，但是子类不能影响父类。

1. 面向对象的继承 - 混合继承 1.构造函数继承通过 call/apply 实现继承
子类继承父类，通过 call/apply 实现继承，修改 this。

```javascript
function Student(name, age, sex, pro) {
  Person.apply(this, arguments); //继承父类(构造函数)的属性和方法
  this.pro = pro;
}
```

2. 原型的继承(拷贝继承)
Student.prototype = Person.prototype; //引用传递，两个对象指向一个地址。错误的继承方式。 1.对象的浅拷贝，拷贝一层
Object.assign(Student.prototype, Person.prototype); 2.原型链继承
将父类的实例给子类的原型。
有影响,覆盖子类的构造函数。
Student.prototype = new Person();
Student.prototype.constructor = Student; //将子类的构造函数变回来

constructor:本意是构造函数，其实也是实例对象的属性，通过这个属性获取构造函数体。
函数的名称也是函数体
构造函数原型的 constructor 也是函数体
// let p1 = new Person();
// alert(p1.constructor);
// alert(Person);
// alert(Person.prototype.constructor) 2.面向对象继承 - class 继承

1.extends 关键字：继承
class 可以通过 extends 关键字实现继承， 这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
2.super 关键字
子类必须在 constructor 方法中调用 super 方法，才能继承父类的相关属性和方法，而且子类在调用 super 方法之前，不能使用 this，否则会报错。这是因为子类自己的 this 对象，必须先通过父类的构造函数完成塑造。
super 关键字既可以当作函数使用，也可以当作对象使用。
第一种情况，super 作为函数调用时，代表父类的构造函数。
第二种情况，super 作为对象时，在普通方法中，指向父类的原型对象；
class Student extends Person {
constructor(name, age, sex, pro) {
super(name, age, sex); //继承属性和方法,代表父类的构造函数
this.pro = pro;
}
show() { //如果子类存在和父类相同的方法，子类的方法优先。
return super.show() + ',我是' + this.pro + '专业的';
}
static hehe() { //定义静态方法
return '我是静态方法';
}
} 5.面向对象相关的属性和方法
1.toString()
系统对象下都是自带的,自己写的对象都是通过原型链继承 Object 的，可以把对象转成字符串，进制转换或者类型的判断。
1.1.类型判断最好的方式
// console.log(Object.prototype.toString.call('abc')); //[object String]
// console.log(Object.prototype.toString.call(null)); //[object Null]
// console.log(Object.prototype.toString.call(undefined)); //[object Undefined]
// console.log(Object.prototype.toString.call(123)); //[object Number]
// console.log(Object.prototype.toString.call(true)); //[object Boolean]
// let arr = [];
// console.log(Object.prototype.toString.call(arr)); //[object Array]
// let obj = {};
// console.log(Object.prototype.toString.call(obj)); //[object Object]
// let m = new Date();
// console.log(Object.prototype.toString.call(m)); //[object Date]
// let s = new Set();
// console.log(Object.prototype.toString.call(s)); //[object Set]
1.2.将对象转换成字符串。
案例：数组扁平化，将多维数组转成一维数组。
// var arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// console.log(arr.toString().split(',').map(v => +v));
// console.log(arr.flat(Infinity));
1.3.进制转换
// let num = 10;
// console.log(num.toString(2));//1010
// console.log(num.toString(8));//12
// console.log(num.toString(16));//a
2.constructor：实例对象的构造函数
输出构造函数结构体有三种方式。 1.利用 constructor 2.构造函数名称，函数名等于函数体 3.构造函数的原型 Fn.prototype.constructor
// let arr = [1, 2, 3];
// let str = 'hello';
// let obj = {
// abc: 1
// }
// console.log(arr.constructor); //ƒ Array() { [native code] }
// console.log(str.constructor); //ƒ String() { [native code] }
// console.log(obj.constructor); //ƒ Object() { [native code] }
// console.log(Array); //ƒ Array() { [native code] }
// console.log(String); //ƒ String() { [native code] }
// console.log(Object); //ƒ Object() { [native code] }
// console.log(Array.prototype.constructor); //ƒ Array() { [native code] }
// console.log(String.prototype.constructor); //ƒ String() { [native code] }
// console.log(Object.prototype.constructor); //ƒ Object() { [native code] }
检测数据类型的方法
// console.log(arr.constructor.toString().includes('Array'));//true
// console.log(str.constructor.toString().includes('String'));//true
// console.log(obj.constructor.toString().includes('Object'));//true
3.instanceof
判断一个对象是否是一个构造函数（类）的实例,验证包含关系。返回布尔值
// let arr = [1, 2, 3];
// console.log(arr instanceof Array); //true
// console.log(arr instanceof Object); //true
// console.log(Array instanceof Object); //true 函数从属于对象
// console.log(Array instanceof Function); //true 函数从属于 Function 类
// console.log(arr instanceof Function); //false 对象不从属于函数
特殊
console.log(Function instanceof Object);//true Object 和 Function 类是平级关系
console.log(Object instanceof Function);//true Object 和 Function 类是平级关系
4.hasOwnProperty()
看是不是实例对象自身（构造函数）下面的属性， 只在属性存在于实例中时才返回 true，不会继承原型链上面的。
// function Person(name, age, sex) { //人类
// this.name = name;
// this.age = age;
// this.sex = sex;
// }
// Person.prototype.hehe = 'haha';
// Person.prototype.show = function() {
// return `我的姓名是${this.name}，我今年${this.age}岁，我是${this.sex}的`;
// }
// let p1 = new Person();
// console.log(p1.hasOwnProperty('name')); //true
// console.log(p1.hasOwnProperty('hehe')); //false
// console.log(p1.hasOwnProperty('show')); //false -->
