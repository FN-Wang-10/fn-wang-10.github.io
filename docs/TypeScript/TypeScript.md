## 前言

> ts 是 js(EcmaScript) 的超集(ts 就是强类型版的 js)。  
> ts 是 js 的超集，是 ECMA 语法的超集，是基于语法的，ES6 的语法  
> **TypeScript 它不是一门新的语言，它是用来规范 js 的写法的**。

> EcmaScript(es)可以用来规范 js，js 始终是一门弱类型语言。  
> 广义的 js 是由三部分组成: ECMAScript(js 的语法规范), DOM(document object model), BOM(browser object model)

> 主要是用于大型项目的开发，代码更加规范，协作更加友好，维护起来会更加方便  
> 增加了**静态类型检查**  
> **编写时报错**  
> 重构起来更加安全（项目某一个东西需要重写）  
> **类型擦除**（在 ts 文件转 js 文件时，会将 ts 中声明的类型去掉，称为类型擦除）如何将 ts 转为 js（babel tsc swc esbuild）

> 浏览器是不支持 ts，需要将 ts 转为 js

> 安装 ts: `cnpm i typescript -g` 全局安装（cmd 使用管理员身份运行）  
> 检测 ts 是否安装成功:打开终端，输入 tsc  
> 编译 ts: `tsc ./src/index.ts --outFile ./dist/index.js`  
> 实时监听  
> tsc --init 能够生成 ts 的配置文件  
> tsc --watch 监听

强类型语言，变量需要声明类型，java,c++  
弱类型语言，变量不用声明类型，js  
TypeScript 是微软出的  
vsCode 也是微弱出的  
vue3 的底层源码全部使用 ts 进行了重写  
vue3 的项目使用 ts 进行开发，配合程度会比较好

## 字符串类型

```typescript
let str: string = 'hello';
let str2: string;
str2 = 'world';
// str2=111; // 不行
```

## 数字类型

```typescript
let num: number = 100;
num = 12;
num += 11;
// num+="11";// 不行
```

## 布尔类型

```typescript
let done: boolean = true;
done = false;
// done='aaa';//不行
```

## undefined

```typescript
let udf: undefined = undefined;
// udf='aaa';//不行
```

## null

```typescript
let nl: null = null;
// nl='aaa';//不行
```

## any

```typescript
let arr1: any = [1, 2, 3, 4];
arr1 = '3';
arr1 = true;
arr1 = {};
arr1 = undefined;
```

## 自动类型推断

```typescript
let str3 = 'hi';
// str3=122// 不行
str3 = 'abc';
```

## 联合类型

```typescript
let a: number | boolean | string = 3;
a = 2;
a = true;
a = 'true';
// const token :string | null=localStorage.getItem("token");
// // token.split("");// 不行
// if(token){
//     token.split("");
// }
```

## 数组

```typescript
// 由数字组成的数组
let arr2: number[] = [1, 2, 3, 4];
// 字符串组成的数组
let arr3: string[] = ['1', '2', '3'];
// 还可以这样写(泛型的写法)
let arr4: Array<string> = ['1', '2', '3'];
// 数字或者布尔值组成的数组
let arr5: (number | boolean)[] = [1, 3, true];
// 还可以这样写(泛型的写法)
let arr6: Array<number | boolean> = [1, 2, true];
// 二维数组
let arr7: (number | boolean | string[])[] = [1, true, ['2', '12', '3']];
// 还可以这样写
let arr8: any[] = [1, true, ['2', '12', '3']];
let arr9: any = [1, true, ['2', '12', '3']];
```

## 元组

```typescript
// 特殊的数组，规定了数组的长度，并且规定了里面的每一项的数据类型
let arr11: [number, string] = [123, 'abc'];
// arr11[2];//不能进行越界访问
// console.log(arr11[2]);
```

## 枚举 enum

```typescript
// 非常类似于对象，不仅可以通过key去找value,也可以通过value去找key
enum Color {
  Red = 10,
  Green = 20,
  Blue = 30
}
let g: Color = Color.Green;
console.log(g); //20
let colorname: string = Color[30];
console.log(colorname); //Blue

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
// 上面，我们有一个数字枚举，其中 Up 用 1 初始化。从那时起，以下所有成员都会自动递增。换句话说，Direction.Up 的值为 1，Down 的值为 2，Left 的值为 3，Right 的值为 4。

enum Direction {
  Up,
  Down,
  Left,
  Right
}
// 在这里，Up 的值为 0，Down 的值为 1，以此类推。这种自动递增行为对于我们可能不关心成员值本身但要注意每个值与同一个中的其他值不同的情况很有用枚举。
```

参考：https://ts.nodejs.cn/docs/handbook/enums.html#%E6%95%B0%E5%AD%97%E6%9E%9A%E4%B8%BE

## 函数

```typescript
// 函数声明
function(x:number,y:number){return x+y}

// 函数表达式
const fn=function(x:number,y:number){return x+y}
const fn:(x:number,y:number)=>number=function(x:number,y:number){return x+y}

// Promise
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// 指的是函数的返回值类型
function add(): number {
  return 5;
}
add();

// 函数的参数是没有自动类型推断的
// 函数参数也可以加？表示可选参数
// 可选参数一定要放在必选参数的后面
function add2(x: number, y?: string): string {
  // x,y表示参数类型，string表示函数返回值的类型,?表示可选参数
  return y ? x + y : x + '';
}
add2(3, '4');
add2(3);
console.log(add2(3, '4'));
console.log(add2(3));
```

### 函数类型表达式

```js
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// 语法 (a: string) => void 的意思是“一个带有一个参数、名为 a、类型为 string、没有返回值的函数”。就像函数声明一样，如果未指定参数类型，则隐式为 any。
// 请注意，参数名称是必需的。函数类型 (string) => void 的意思是“一个带有名为 string、类型为 any 的参数的函数”！

当然，我们可以使用类型别名来命名函数类型：

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

### 泛型函数

```js
通常会编写一个函数，其中输入的类型与输出的类型相关，或者两个输入的类型以某种方式相关。让我们考虑一个返回数组第一个元素的函数：

function firstElement(arr: any[]) {
  return arr[0];
}

这个函数完成了它的工作，但不幸的是返回类型为 any。如果函数返回数组元素的类型会更好。

在 TypeScript 中，当我们想要描述两个值之间的对应关系时，会使用泛型。我们通过在函数签名中声明一个类型参数来做到这一点：
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

通过向该函数添加类型参数 Type 并在两个地方使用它，我们在函数的输入（数组）和输出（返回值）之间创建了一个链接。现在当我们调用它时，会出现一个更具体的类型：

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
```

#### 推断

```js
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
```

#### 约束条件

```js
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```

#### 使用约束值

```js
这是使用泛型约束时的一个常见错误：

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
Type '{ length: number; }' is not assignable to type 'Type'.
  '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
  }
}
// 看起来这个函数似乎还可以 - Type 被约束为 { length: number }，并且该函数返回 Type 或与该约束匹配的值。问题是该函数 promise 返回与传入相同类型的对象，而不仅仅是与约束匹配的某个对象。如果这段代码是合法的，你可以编写绝对行不通的代码：

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));
```

#### 指定类型参数

```js
TypeScript 通常可以在泛型调用中推断出预期的类型参数，但并非总是如此。例如，假设你编写了一个函数来组合两个数组：

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

通常使用不匹配的数组调用此函数会出错：

const arr = combine([1, 2, 3], ["hello"]);
Type 'string' is not assignable to type 'number'.

但是，如果你打算这样做，你可以手动指定 Type：

const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

#### 下推类型参数

```js
以下是编写看起来相似的函数的两种方法：

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

乍一看，这些似乎相同，但 firstElement1 是编写此函数的更好方法。它推断的返回类型是 Type，但 firstElement2 的推断返回类型是 any，因为 TypeScript 必须使用约束类型来解析 arr[0] 表达式，而不是 “等待” 在调用期间解析元素。

规则：如果可能，使用类型参数本身而不是约束它
```

### 可选参数

```js
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

#### 回调中的可选参数

```js
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

### 函数重载

```js
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
```

### void

void 表示不返回值的函数的返回值。只要函数没有任何 return 语句，或者没有从这些返回语句返回任何显式值，它就是推断类型：

```js
// The inferred return type is void
function noop() {
  return;
}
```

### unknown

unknown 类型代表任何值。这类似于 any 类型，但更安全，因为使用 unknown 值做任何事情都是不合法的：

```js
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
'a' is of type 'unknown'.
}
```

这在描述函数类型时很有用，因为你可以描述接受任何值而不在函数体中包含 any 值的函数。

相反，你可以描述一个返回未知类型值的函数：

```js
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
```

### never

有些函数从不返回值：

```js
function fail(msg: string): never {
  throw new Error(msg);
}
```

### Function

全局类型 Function 描述了 bind、call、apply 等属性，以及 JavaScript 中所有函数值上的其他属性。它还具有 Function 类型的值始终可以被调用的特殊属性；这些调用返回 any：

```js
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

这是一个无类型的函数调用，通常最好避免，因为不安全的 any 返回类型。

如果你需要接受任意函数但不打算调用它，则类型 () => void 通常更安全。

### 剩余形参和实参

```js
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

### 参数解构

```js
你可以使用参数解构来方便地将作为参数提供的对象解包到函数体中的一个或多个局部变量中。在 JavaScript 中，它看起来像这样：

function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
对象的类型注释遵循解构语法：

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

这看起来有点冗长，但你也可以在此处使用命名类型：

// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

参考：https://ts.nodejs.cn/docs/handbook/2/functions.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%A1%A8%E8%BE%BE%E5%BC%8F

## 对象

在 JavaScript 中，我们分组和传递数据的基本方式是通过对象。在 TypeScript 中，我们通过对象类型来表示它们。

正如我们所见，它们可以是匿名的：

```js
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

或者它们可以通过使用接口来命名：

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

或类型别名：

type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```

在上述所有三个示例中，我们编写的函数接受包含属性 name（必须是 string）和 age（必须是 number）的对象。

### 属性修饰符

### 可选属性（？）

```js
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

### readonly 属性

```js
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  obj.prop = "hello";
Cannot assign to 'prop' because it is a read-only property.
}
```

使用 readonly 修饰符并不一定意味着值是完全不可变的 - 或者换句话说，其内部内容无法更改。这只是意味着属性本身不能被重写。

```js
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
```

管理对 readonly 含义的期望很重要。在 TypeScript 的开发期间触发关于如何使用对象的意图很有用。TypeScript 在检查两种类型是否兼容时不会考虑这两种类型的属性是否为 readonly，因此 readonly 属性也可以通过别名来更改。

```js
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

### 索引签名([index: number]: xxx)

有时你并不提前知道类型属性的所有名称，但你确实知道值的形状。

在这些情况下，你可以使用索引签名来描述可能值的类型，例如：

```js
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

const secondItem: string
```

上面，我们有一个 StringArray 接口，它有一个索引签名。这个索引签名表明当一个 StringArray 被一个 number 索引时，它将返回一个 string。

索引签名属性只允许使用某些类型：string、number、symbol、模板字符串模式以及仅由这些组成的联合类型。

可以支持多种类型的索引器...
虽然字符串索引签名是描述 “dictionary” 模式的强大方式，但它们还强制所有属性与其返回类型匹配。这是因为字符串索引声明 obj.property 也可用作 obj["property"]。在下面的例子中，name 的类型与字符串索引的类型不匹配，类型检查器给出错误：

```js
interface NumberDictionary {
  [index: string]: number;

  length: number; // ok
  name: string;
  // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
```

但是，如果索引签名是属性类型的联合，则可以接受不同类型的属性：

```js
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

最后，你可以使索引签名 readonly 以防止分配给它们的索引：

```js
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
// Index signature in type 'ReadonlyStringArray' only permits reading.
```

### 溢出属性检查([propName: xxx]:xxx)

在何处以及如何为对象分配类型可以在类型系统中产生差异。这方面的一个关键示例是溢出属性检查，它会在创建对象时更彻底地验证对象并在创建期间将其分配给对象类型。

```js
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  return {
    color: config.color || 'red',
    area: config.width ? config.width * config.width : 20
  };
}

let mySquare = createSquare({ colour: 'red', width: 100 });
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

请注意，createSquare 的给定参数拼写为 colour 而不是 color。在普通的 JavaScript 中，这种事情会悄无声息地失败。

你可能会争辩说这个程序的类型是正确的，因为 width 属性是兼容的，没有 color 属性存在，额外的 colour 属性是微不足道的。

但是，TypeScript 认为这段代码中可能存在错误。对象字面在将它们分配给其他变量或将它们作为参数传递时会得到特殊处理并进行额外的属性检查。如果一个对象字面量有任何 “目标类型” 没有的属性，你会得到一个错误：

```js
let mySquare = createSquare({ colour: 'red', width: 100 });
// Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

绕过这些检查实际上非常简单。最简单的方法是只使用类型断言：

```js
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

```

但是，如果你确定该对象可以具有一些以某种特殊方式使用的额外属性，则更好的方法可能是添加字符串索引签名。如果 SquareConfig 可以具有上述类型的 color 和 width 属性，但也可以具有任意数量的其他属性，那么我们可以这样定义它：

```js
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

这里我们说 SquareConfig 可以有任意数量的属性，只要它们不是 color 或 width，它们的类型并不重要。

绕过这些检查的最后一种方法（可能有点令人惊讶）是将对象分配给另一个变量：由于分配 squareOptions 不会进行溢出属性检查，因此编译器不会给你错误：

```js
let squareOptions = { colour: 'red', width: 100 };
let mySquare = createSquare(squareOptions);
```

只要你在 squareOptions 和 SquareConfig 之间具有共同属性，上述变通方法就会起作用。在此示例中，它是属性 width。但是，如果变量没有任何公共对象属性，它将失败。例如：

```js
let squareOptions = { colour: 'red' };
let mySquare = createSquare(squareOptions);
// Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.
```

请记住，对于像上面这样的简单代码，你可能不应该尝试对这些检查进行 “到处走走”。对于具有方法和保持状态的更复杂的对象字面量，你可能需要牢记这些技术，但大多数溢出属性错误实际上是错误。

这意味着如果你遇到诸如选项包之类的溢出属性检查问题，你可能需要修改一些类型声明。在这种情况下，如果可以将具有 color 或 colour 属性的对象传递给 createSquare，则应该修改 SquareConfig 的定义以反映这一点。

### 扩展类型(extends)

```js
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42
};
```

### 交叉类型(&)

交叉类型是使用 & 运算符定义的。

```js
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

在这里，我们将 Colorful 和 Circle 相交以生成一个包含 Colorful 和 Circle 的所有成员的新类型。

```js
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: 'blue', radius: 42 });
```

### 接口与交叉

我们只是研究了两种组合相似但实际上略有不同的类型的方法。使用接口，我们可以使用 extends 子句从其他类型扩展，我们可以对交叉做类似的事情，并用类型别名命名结果。两者之间的主要区别在于冲突的处理方式，这种区别通常是你在接口和交叉类型的类型别名之间选择一个而不是另一个的主要原因之一。

如果接口使用相同的名称定义，则 TypeScript 将尝试在属性兼容的情况下合并它们。如果属性不兼容（即，它们具有相同的属性名称但类型不同），TypeScript 将引发错误。

在交叉类型的情况下，具有不同类型的属性将自动合并。当稍后使用该类型时，TypeScript 将期望该属性同时满足两种类型，这可能会产生意外结果。

### 泛型对象类型

```js
interface Box<Type> {
  contents: Type;
}

let boxA: Box<string> = { contents: 'hello' };
// boxA.contents;
// (property) Box<string>.contents: string
```

### Array 类型

```js
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ['hello', 'world'];

// either of these work!
doSomething(myArray);
doSomething(new Array('hello', 'world'));
```

### ReadonlyArray 类型

```js
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push('hello!');
  // Property 'push' does not exist on type 'readonly string[]'.
}
```

最后要注意的一点是，与 readonly 属性修饰符不同，可赋值性在常规 Array 和 ReadonlyArray 之间不是双向的。

```js
let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x;
The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
```

### 元组类型

```js
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  const a = pair[0];
  // const a: string
  const b = pair[1];
  // const b: number
  // ...
}

doSomething(['hello', 42]);
```

### readonly 元组类型

```js
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
// Cannot assign to '0' because it is a read-only property.
}
```

## 类型别名 type

```js
type Point = {
  x: number,
  y: number
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;
```

## 接口 interface

```js
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

## 类型断言 as

```js
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

const a = expr as any as T;
```

## 非空断言运算符（后缀!）

```js
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

## 泛型

```js
function identity<Type>(arg: Type): Type {
  return arg;
}

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

```js
泛型函数的类型和非泛型函数的类型一样，类型参数先列出，类似于函数声明：
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;

我们也可以为类型中的泛型类型参数使用不同的名称，只要类型变量的数量和类型变量的使用方式一致。

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;

我们还可以将泛型类型写为对象字面量类型的调用签名：

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: { <Type>(arg: Type): Type } = identity;

这导致我们编写我们的第一个泛型接口。让我们从前面的示例中获取对象字面量并将其移动到接口：

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;

在类似的示例中，我们可能希望将泛型参数移动为整个接口的参数。这让我们可以看到我们是泛型的类型（例如 Dictionary<string> 而不仅仅是 Dictionary）。这使得类型参数对接口的所有其他成员可见。

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

参考：https://ts.nodejs.cn/docs/handbook/2/generics.html#%E4%BD%A0%E5%A5%BD%E6%B3%9B%E5%9E%8B%E4%B8%96%E7%95%8C

## keyof 类型运算符

```js
keyof 运算符采用对象类型并生成其键的字符串或数字字面联合。以下类型 P 与 type P = "x" | "y" 类型相同：

type Point = { x: number; y: number };
type P = keyof Point;

type P = keyof Point

如果该类型具有 string 或 number 索引签名，则 keyof 将返回这些类型：

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type M = string | number

请注意，在这个例子中，M 是 string | number - 这是因为 JavaScript 对象键总是被强制转换为字符串，所以 obj[0] 总是与 obj["0"] 相同。
```

参考：https://ts.nodejs.cn/docs/handbook/2/keyof-types.html

## typeof 类型运算符

```js
JavaScript 已经有一个可以在表达式上下文中使用的 typeof 运算符：

// Prints "string"
console.log(typeof "Hello world");

TypeScript 添加了一个 typeof 运算符，你可以在类型上下文中使用它来引用变量或属性的类型：

let s = "hello";
let n: typeof s;

let n: string

这对于基本类型不是很有用，但结合其他类型运算符，你可以使用 typeof 方便地表达许多模式。例如，让我们从查看预定义类型 ReturnType<T> 开始。它接受一个函数类型并产生它的返回类型：

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

type K = boolean

如果我们尝试在函数名上使用 ReturnType，我们会看到一个指导性错误：

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

请记住，值和类型不是一回事。要引用值 f 所具有的类型，我们使用 typeof：

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

type P = {
    x: number;
    y: number;
}
```

## 索引访问类型

```js
type Person = { age: number, name: string, alive: boolean };
type Age = Person['age'];
// type Age = number
```

参考：https://ts.nodejs.cn/docs/handbook/2/indexed-access-types.html

## 条件类型

```js
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example1 = number

type Example2 = RegExp extends Animal ? number : string;

type Example2 = string

条件类型的形式看起来有点像 JavaScript 中的条件表达式 (condition ? trueExpression : falseExpression)：

  SomeType extends OtherType ? TrueType : FalseType;

当 extends 左边的类型可以赋值给右边的类型时，就会得到第一个分支（“true” 分支）的类型；否则，你将在后一个分支（“false” 分支）中获得类型。
```

参考：https://ts.nodejs.cn/docs/handbook/2/conditional-types.html

## 映射类型

```js
当你不想重复自己时，有时一种类型需要基于另一种类型。

映射类型建立在索引签名的语法之上，用于声明未提前声明的属性类型：

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

映射类型是一种泛型类型，它使用 PropertyKey 的联合（经常创建的 通过 keyof）来迭代键来创建类型：

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

在此示例中，OptionsFlags 将获取 Type 类型的所有属性并将其值更改为布尔值。

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
```

参考：https://ts.nodejs.cn/docs/handbook/2/mapped-types.html

## 模板字面类型

```js
type World = "world";

type Greeting = `hello ${World}`;
// type Greeting = "hello world"
```

参考：https://ts.nodejs.cn/docs/handbook/2/template-literal-types.html

## 工具类型

### `Awaited<Type>`

此类型旨在对 async 函数中的 await 或 Promise 中的 .then() 方法等操作进行建模 - 具体来说，他们递归地解开 Promise 的方式。

```js
type A = Awaited<Promise<string>>;

// type A = string

type B = Awaited<Promise<Promise<number>>>;

// type B = number

type C = Awaited<boolean | Promise<number>>;

// type C = number | boolean
```

### `Partial<Type>`

构造一个将 Type 的所有属性设置为可选的类型。此工具将返回一个表示给定类型的所有子集的类型。

示例

```js
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter'
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash'
});
```

### `Required<Type>`

构造一个由设置为 required 的 Type 的所有属性组成的类型。与 Partial 相反。

示例

```js
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

### `Readonly<Type>`

构造一个将 Type 的所有属性设置为 readonly 的类型，这意味着构造类型的属性不能重新分配。

示例

```js
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
Cannot assign to 'title' because it is a read-only property.
```

### `Record<Keys, Type>`

构造一个对象类型，其属性键为 Keys，其属性值为 Type。此工具可用于将一种类型的属性映射到另一种类型。

示例

```js
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

const cats: Record<CatName, CatInfo>
```

参考：https://ts.nodejs.cn/docs/handbook/utility-types.html#awaitedtype

### `Pick<Type, Keys>`

通过从 Type 中选取一组属性 Keys（字符串字面或字符串字面的并集）来构造一个类型。

示例

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
};

todo;

// const todo: TodoPreview
```

### `Omit<Type, Keys>`

通过从 Type 中选择所有属性然后删除 Keys（字符串字面或字符串字面的并集）来构造一个类型。与 Pick 相反。

示例

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770
};

// todo;

// const todo: TodoPreview

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm'
};

// todoInfo;

// const todoInfo: TodoInfo
```

### `Exclude<UnionType, ExcludedMembers>`

通过从 UnionType 中排除所有可分配给 ExcludedMembers 的联合成员来构造一个类型。

示例

```js
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T0 = 'b' | 'c';
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T1 = 'c';
type T2 = Exclude<string | number | (() => void), Function>;

type T2 = string | number;

type Shape =
  | { kind: 'circle', radius: number }
  | { kind: 'square', x: number }
  | { kind: 'triangle', x: number, y: number };

type T3 = Exclude<Shape, { kind: 'circle' }>;

type T3 =
  | {
      kind: 'square',
      x: number
    }
  | {
      kind: 'triangle',
      x: number,
      y: number
    };
```

### `Extract<Type, Union>`

通过从 Type 中提取所有可分配给 Union 的联合成员来构造一个类型。

示例

```js
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

type T0 = 'a';
type T1 = Extract<string | number | (() => void), Function>;

type T1 = () => void;

type Shape =
  | { kind: 'circle', radius: number }
  | { kind: 'square', x: number }
  | { kind: 'triangle', x: number, y: number };

type T2 = Extract<Shape, { kind: 'circle' }>;

type T2 = {
  kind: 'circle',
  radius: number
};
```

### `NonNullable<Type>`

通过从 Type 中排除 null 和 undefined 来构造一个类型。

示例

```js
type T0 = NonNullable<string | number | undefined>;

type T0 = string | number;
type T1 = NonNullable<string[] | null | undefined>;

type T1 = string[];
```

## -----------

## 对象

```typescript
// interface接口，可以使用interface来自己定义类型
// 首字母大写，用分号结束
interface ObjTpye {
  name: string;
  age: number;
  // 问号表示可选参数
  sex?: number | string;
  // 索引签名
  // 这个对象可以任意扩展了
  [propname: string]: any;
}
let obj1: ObjTpye = {
  name: 'zhangsan',
  age: 18
};
let obj2: ObjTpye = {
  name: 'zhangsan',
  age: 18,
  // sex:1,
  sex: '男',
  a: 3,
  b: 4,
  c: true
};

interface Obj3Type {
  id: number;
  name: string;
  // likes:number[];
  likes: Array<number>;
}
let obj3: Obj3Type = {
  id: 1,
  name: 'zhangsan',
  likes: [299, 399, 699]
};

interface ItemType {
  id: number;
  name: string;
  // likes?:number[];
  likes?: Array<number>;
}
let list: ItemType[] = [
  {
    id: 1,
    name: 'zhangsan',
    likes: [299, 399, 699]
  },
  {
    id: 2,
    name: 'lisi'
  }
];

interface Obj4Type {
  name: string;
  age: number;
  // children?:Obj4Type[];
  children?: Array<Obj4Type>;
}
let obj4: Obj4Type = {
  name: 'laozhang',
  age: 50,
  children: [
    {
      name: 'xiaozhang',
      age: 25
    },
    {
      name: 'xxzhang',
      age: 20
    }
  ]
};
```

## void

void 表示没有类型，只能给函数用，表示函数没有返回值

```typescript
function add3(a: number, b: number): void {
  console.log(a + b);
}
add3(3, 4);
```

## never

never 表示从不（从来没有），只能给函数用，死循环和报错的时候用

```typescript
// 声明式函数写法
function add4(): never {
  while (true) {}
}
function add5(): never {
  throw new Error();
}
```

## 函数表达式写法

`(x:string,y:string)=>string`表示函数类型，写法很像箭头函数，x,y 表示参数类型，string 表示函数返回值的类型

```typescript
const add6: (x: string, y: string) => string = (
  x: string,
  y: string
): string => {
  return x + y;
};
add6('1', '2');
```

## 泛型类型

T 相当于是函数参数类型的形参

```typescript
function add7<T>(x: T, y: T) {
  //   return x+y;
  return `${x}${y}`;
}
add7<number>(3, 4);
console.log(add7<number>(3, 4));
```

## VUE3 定义响应式数据

`const count =ref<number>(5);`count 并不是一个变量，而是一个对象，对象里面有一个 value 属性是 5  
一般我们自己定义的函数很少使用泛型，但是别人写的函数有可能使用泛型

## 15.类（ES6 中的面向对象 class）的定义

```typescript
interface Type {
  name: string;
}

// 父类
class Animal {
  constructor(obj: Type) {
    console.log('Animal');
    this.name = obj.name;
  }
  name: string = 'dog'; // 属性
  sayName(): string {
    // 方法
    return this.name;
  }
}

// 类的继承，会继承里面的属性和方法，除了static静态方法以外

// 子类
class Cat extends Animal {
  // 类里面有一个构造函数constructor函数，当这个类被实例化的时候就会自动触发
  constructor(obj: Type) {
    console.log('cat');
    // 不是最大的类的constructor，需要里面调用super函数
    // 调用super函数，相当于调用了父类的constructor
    super(obj);
  }
}
// 子类的实例化
const cat = new Cat({
  name: 'cat'
});
console.log(cat.name); // cat
```

子类继承父类  
子类通过 extends 关键字`class Cat extends Animal{}`，通过实例化后就可以访问父类的属性和方法了，除了 static 静态方法以外  
子类里面有一个构造函数 constructor 函数，当这个类被实例化的时候就会自动触发  
子类实例化可以传入参数（对象），就是子类自己的属性和方法，在子类中通过 constructor 函数接收(obj),子类的 constructor 函数中使用 super 函数（不是最大的类的 constructor，需要里面调用 super 函数，调用 super 函数，相当于调用了父类的 constructor），将 obj 传给父类的 constructor 函数，就可以在父类的 constructor 函数中替换和子类相同的属性和方法了
