在 ES6 的 class 中，static 是一个关键字，用于定义静态属性和静态方法。

静态属性和静态方法属于类本身，而不是类的实例。静态属性在类被创建时就已经初始化，静态方法可以直接通过类名调用，而无需先创建类的实例。以下是 static 在 ES6 类中的特性：

### 1.静态属性：

静态属性使用 static 关键字定义。

静态属性的值在整个类实例中共享，不会因为实例创建而改变。

静态属性的值在类创建时分配内存，并且只分配一次，直到程序结束才被释放。

静态属性可以通过类名直接访问，例如：ClassName.staticProperty。

### 2.静态方法：

静态方法也使用 static 关键字定义。

静态方法可以直接通过类名调用，无需先创建类的实例。

静态方法不能访问非静态属性和方法，因为它们需要通过实例访问。

以下是一个示例：

```javascript
class Animal {
  static name = "Animal";
  constructor() {
    console.log("Instance created:", this.name);
  }
  static sayHello() {
    console.log("Hello from", Animal.name);
  }
}
// 访问静态属性
console.log(Animal.name); // 输出：Animal
// 访问静态方法
Animal.sayHello(); // 输出：Hello from Animal
const dog = new Animal();
console.log(dog.name); // 输出：
```
