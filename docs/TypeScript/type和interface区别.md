interface 用于声明对象的类型(对象、函数)  
type 可以声明对象和其他的类型（对象、基本类型）

type 命令用来定义一个类型的别名。

```javascript
type Age = number;
let age: Age = 55;
```

1. 别名不允许重名。
2. 别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。

```javascript
type Color = "red";
if (Math.random() < 0.5) {
  type Color = "blue";
}
```

3. 别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。

```javascript
    type World = "world";
    type Greeting = `hello ${World}`;
```

type 命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。

## 1. interface 可以表示对象的各种语法（5 种）

### 1.对象属性

#### 1.对象属性

```javascript
interface Point {
  x: number;
  y: number;
}
```

#### 2.可选属性

```javascript
interface Foo {
  x?: string;
}
```

#### 3.只读属性（不可修改）

```javascript
 interface A {
          readonly a: string;
        }
```

### 2.对象的属性索引

```javascript
interface A {
  [prop: string]: number;
}
```

### 3.对象方法

```javascript
        // 写法一
        interface A {
          f(x: boolean): string;
        }
        // 写法二
        interface B {
          f: (x: boolean) => string;
        }
        // 写法三
        interface C {
          f: { (x: boolean): string };
        }
        // 属性名可以采用表达式，所以下面的写法也是可以的。
        const f = 'f';
        interface A {
          [f](x: boolean): string;
        }
```

### 4.函数

```javascript
interface Add {
  (x: number, y: number): number;
}
```

### 5.构造函数

```javascript
interface ErrorConstructor {
  new(message?: string): Error;
}
```

## 2.interface 的继承(extends)

1. interface 继承 interface（使用 extends 关键字）  
   `interface Circle extends Style { ... }`  
   interface 允许多重继承  
   `interface Circle extends Style, Shape { ... }`  
    如果子接口与父接口存在同名属性，那么子接口的属性会覆盖父接口的属性  
    子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错  
    多重继承时，如果多个父接口存在同名属性，那么这些同名属性不能有类型冲突，否则会报错。
2. interface 继承 type

```javascript
        interface Circle extends Style（type名称） { ... }
        // 如果type命令定义的类型不是对象，interface 就无法继承
            type Country = {
              name: string;
              capital: string;
            }
            interface CountryWithPop extends Country {
              population: number;
            }
```

3. interface 继承 class

```javascript
        interface Circle extends Style（类名） { ... }
            class A {
              x:string = '';
              y():boolean {
                return true;
              }
            }
            interface B extends A {
              z: number
            }
            const b:B = {
              x: '',
              y: function(){ return true },
              z: 123
            }
```

## 3.接口合并

interface 多个同名接口会合并成一个接口
同名接口合并时，同一个属性如果有多个类型声明，彼此不能有类型冲突

```javascript
interface A {
  a: number;
}
interface A {
  a: string; // 报错
}
```

同名接口合并时，如果同名方法有不同的类型声明，那么会发生函数重载。而且，后面的定义比前面的定义具有更高的优先级。

```javascript
interface Cloner {
  clone(animal: Animal): Animal;
}
interface Cloner {
  clone(animal: Sheep): Sheep;
}
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}
// 等同于
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

同名方法之中，如果有一个参数是字面量类型，字面量类型有更高的优先级。

```javascript
interface A {
  f(x: "foo"): boolean;
}
interface A {
  f(x: any): void;
}
// 等同于
interface A {
  f(x: "foo"): boolean;
  f(x: any): void;
}
```

如果两个 interface 组成的联合类型存在同名属性，那么该属性的类型也是联合类型。

```javascript
            interface Circle {
              area: bigint;
            }
            interface Rectangle {
              area: number;
            }
            declare const s: Circle | Rectangle;
            s.area;   // bigint | number
```

## 4.interface 与 type 的异同

1. type 能够表示非对象类型，而 interface 只能表示对象类型（包括数组、函数等）
2. interface 可以继承其他类型，type 不支持继承（使用 & 运算符）

继承的主要作用是添加属性，type 定义的对象类型如果想要添加属性，只能使用&运算符，重新定义一个类型

```javascript
type Animal = {
  name: string,
};
type Bear = Animal & {
  honey: boolean,
};
```

3. type 和 interface 是可以换用的。interface 可以继承 type，type 也可以继承 interface
   interface 可以同名，会进行合并，type 不允许同名
4. interface 不能包含属性映射，type 可以

```javascript
        interface Point {
          x: number;
          y: number;
        }
        // 正确
        type PointCopy1 = {
          [Key in keyof Point]: Point[Key];
        };
        // 报错
        interface PointCopy2 {
          [Key in keyof Point]: Point[Key];
        };
```

5. this 关键字只能用于 interface

```javascript
// 正确
interface Foo {
  add(num: number): this;
}
// 报错
type Foo = {
  add(num: number): this,
};
```

6. type 可以扩展原始数据类型，interface 不行。

```javascript
        // 正确
        type MyStr = string & {
          type: 'new'
        };
        // 报错
        interface MyStr extends string {
          type: 'new'
        }
```

7. interface 无法表达某些复杂类型（比如交叉类型和联合类型），但是 type 可以。

```javascript
type A = {
  /* ... */
};
type B = {
  /* ... */
};
type AorB = A | B;
type AorBwithName = AorB & {
  name: string,
};
```
