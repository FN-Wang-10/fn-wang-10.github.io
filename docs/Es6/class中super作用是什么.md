> 1. **继承父类的属性和方法**
> 2. **调用父类的构造函数**

1. 调用父类的构造函数：在子类的构造函数中，使用 super() 调用父类的构造函数。这样可以保证在创建子类实例时，父类的属性和方法也被正确初始化。

```javascript
class Parent {
  constructor() {
    this.name = "parent";
  }
}
class Child extends Parent {
  constructor() {
    super(); // 调用父类的构造函数
    this.name = "child";
  }
}
const child = new Child();
console.log(child.name); // 输出：child
```

2. 调用父类的方法：在子类中，使用 super 调用父类的方法。这样可以实现方法的重写（Override），子类可以根据需要覆盖或扩展父类的方法。

````javascript
class Parent {
 sayHello() {
   console.log('Hello from Parent');
 }
}
class Child extends Parent {
 sayHello() {
   super.sayHello(); // 调用父类的方法
   console.log('Hello from Child');
 }
}
const child = new Child();
child.sayHello(); // 输出：Hello from Parent
                     //        Hello from Child
                     ```
````

3. 调用父类的属性：在子类中，使用 super 调用父类的属性。这样可以实现属性的继承，子类可以访问父类的属性。

```javascript
class Parent {
  constructor() {
    this.message = "Hello from Parent";
  }
}
class Child extends Parent {
  constructor() {
    super(); // 调用父类的构造函数
    console.log(this.message); // 输出：Hello from Parent
  }
}
const child = new Child();
console.log(child.message); // 输出：Hello from Parent
```
