## 1.TypeScript

- TypeScript 它不是一门新的语言，它是用来规范 js 的写法的。
- EcmaScript(es)可以用来规范 js，js 始终是一门弱类型语言。
- ts 就是强类型版的 js.
- ts 是 js(EcmaScript) 的超集。
- 广义的 js 是由三部分组成: ECMAScript(js 的语法规范), DOM(document object model), BOM(browser object model)
- ts 是 js 的超集，是 ECMA 语法的超集，是基于语法的，ES6 的语法
- 主要是用于大型项目的开发，代码更加规范，协作更加友好，维护起来会更加方便
- 增加了静态类型检查
- 编写时报错
- 重构起来更加安全（项目某一个东西需要重写）
- 浏览器是不支持 ts，需要将 ts 转为 js
- 安装 ts: `cnpm i typescript -g` 全局安装（cmd 使用管理员身份运行）
- 检测 ts 是否安装成功:打开终端，输入 tsc
- 编译 ts: `tsc ./src/index.ts --outFile ./dist/index.js`
- 实时监听
- tsc --init 能够生成 ts 的配置文件
- tsc --watch 监听

强类型语言，变量需要声明类型，java,c++  
弱类型语言，变量不用声明类型，js  
TypeScript 是微软出的  
vsCode 也是微弱出的  
vue3 的底层源码全部使用 ts 进行了重写  
vue3 的项目使用 ts 进行开发，配合程度会比较好  
一个项目要有一个 src 文件（开发目录）

## 2.TypeScript 语法

### 01.定义字符串变量

```typescript
let str: string = "hello";
let str2: string;
str2 = "world";
```

### 02.自动类型推断

```typescript
let str3 = "hi";
// str3=122// 不行
str3 = "abc";
```

### 03.定义数字类型

```typescript
let num: number = 100;
num = 12;
num += 11;
// num+="11";// 不行
```

### 04.布尔类型

```typescript
let done: boolean = true;
done = false;
// done=a;//不行
```

### 05.定义 undefined 类型就是 undefined

```typescript
let udf: undefined = undefined;
// udf=a;//不行
```

### 07.定义 null

```typescript
let nl: null = null;
// nl=1;//不行
```

### 08.联合类型

```typescript
let a: number | boolean | string = 3;
a = 2;
a = true;
a = "true";
// const token :string | null=localStorage.getItem("token");
// // token.split("");// 不行
// if(token){
//     token.split("");
// }
```

### 09.任意类型 any 类型(平时工作中是不能用的，需要报备)

```typescript
let arr1: any = [1, 2, 3, 4];
arr1 = "3";
arr1 = true;
arr1 = {};
arr1 = undefined;
```

### 10.数组的定义

```typescript
// 由数字组成的数组
let arr2: number[] = [1, 2, 3, 4];
// 字符串组成的数组
let arr3: string[] = ["1", "2", "3"];
// 还可以这样写(泛型的写法)
let arr4: Array<string> = ["1", "2", "3"];
// 数字或者布尔值组成的数组
let arr5: (number | boolean)[] = [1, 3, true];
// 还可以这样写(泛型的写法)
let arr6: Array<number | boolean> = [1, 2, true];
// 二维数组
let arr7: (number | boolean | string[])[] = [1, true, ["2", "12", "3"]];
// 还可以这样写
let arr8: any[] = [1, true, ["2", "12", "3"]];
let arr9: any = [1, true, ["2", "12", "3"]];
```

### 11.元组的定义

```typescript
// 特殊的数组，规定了数组的长度，并且规定了里面的每一项的数据类型
let arr11: [number, string] = [123, "abc"];
// arr11[2];//不能进行越界访问
// console.log(arr11[2]);
```

### 12.对象类型

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
  name: "zhangsan",
  age: 18,
};
let obj2: ObjTpye = {
  name: "zhangsan",
  age: 18,
  // sex:1,
  sex: "男",
  a: 3,
  b: 4,
  c: true,
};

interface Obj3Type {
  id: number;
  name: string;
  // likes:number[];
  likes: Array<number>;
}
let obj3: Obj3Type = {
  id: 1,
  name: "zhangsan",
  likes: [299, 399, 699],
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
    name: "zhangsan",
    likes: [299, 399, 699],
  },
  {
    id: 2,
    name: "lisi",
  },
];

interface Obj4Type {
  name: string;
  age: number;
  // children?:Obj4Type[];
  children?: Array<Obj4Type>;
}
let obj4: Obj4Type = {
  name: "laozhang",
  age: 50,
  children: [
    {
      name: "xiaozhang",
      age: 25,
    },
    {
      name: "xxzhang",
      age: 20,
    },
  ],
};
```

### 13.枚举类型

```typescript
非常类似于对象，不仅可以通过key去找value,也可以通过value去找key
  enum Color {
      Red=10,
      Green=20,
      Blue=30,
  }
  let g:Color=Color.Green;
  console.log(g);//20
  let colorname:string=Color[30];
  console.log(colorname);//Blue
```

### 14.函数类型

```typescript
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
  return y ? x + y : x + "";
}
add2(3, "4");
add2(3);
console.log(add2(3, "4"));
console.log(add2(3));
```

### void

void 表示没有类型，只能给函数用，表示函数没有返回值

```typescript
function add3(a: number, b: number): void {
  console.log(a + b);
}
add3(3, 4);
```

### never

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

### 函数表达式写法

`(x:string,y:string)=>string`表示函数类型，写法很像箭头函数，x,y 表示参数类型，string 表示函数返回值的类型

```typescript
const add6: (x: string, y: string) => string = (
  x: string,
  y: string
): string => {
  return x + y;
};
add6("1", "2");
```

### 泛型类型

T 相当于是函数参数类型的形参

```typescript
function add7<T>(x: T, y: T) {
  //   return x+y;
  return `${x}${y}`;
}
add7<number>(3, 4);
console.log(add7<number>(3, 4));
```

### VUE3 定义响应式数据

`const count =ref<number>(5);`count 并不是一个变量，而是一个对象，对象里面有一个 value 属性是 5  
一般我们自己定义的函数很少使用泛型，但是别人写的函数有可能使用泛型

### 15.类（ES6 中的面向对象 class）的定义

```typescript
interface Type {
  name: string;
}

// 父类
class Animal {
  constructor(obj: Type) {
    console.log("Animal");
    this.name = obj.name;
  }
  name: string = "dog"; // 属性
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
    console.log("cat");
    // 不是最大的类的constructor，需要里面调用super函数
    // 调用super函数，相当于调用了父类的constructor
    super(obj);
  }
}
// 子类的实例化
const cat = new Cat({
  name: "cat",
});
console.log(cat.name); // cat
```

子类继承父类  
子类通过 extends 关键字`class Cat extends Animal{}`，通过实例化后就可以访问父类的属性和方法了，除了 static 静态方法以外  
子类里面有一个构造函数 constructor 函数，当这个类被实例化的时候就会自动触发  
子类实例化可以传入参数（对象），就是子类自己的属性和方法，在子类中通过 constructor 函数接收(obj),子类的 constructor 函数中使用 super 函数（不是最大的类的 constructor，需要里面调用 super 函数，调用 super 函数，相当于调用了父类的 constructor），将 obj 传给父类的 constructor 函数，就可以在父类的 constructor 函数中替换和子类相同的属性和方法了
