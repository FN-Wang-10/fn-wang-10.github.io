## 总结

forEach 更多的用来遍历数组

**for...in 用于遍历对象的属性**,for...in 不能遍历对象的原型链上的属性

**for...of 用于遍历可迭代对象**（包括数组、字符串、Set 和 Map 等）的元素，**谁具有 Iterator 接口(属性)(是一个方法)，就可以使用 for...of...遍历**。

1. for 循环的写法比较麻烦，因此数组提供内置的 forEach 方法。
2. forEach 问题在于，无法中途跳出 forEach 循环，break 命令或 return 命令都不能奏效。
3. for...in 循环主要是为遍历对象而设计的，不适用于遍历数组.
4. for...of 循环,有着同 for...in 一样的简洁语法，但是没有 for...in 那些缺点,不同于 forEach 方法，它可以与 break、continue 和 return 配合使用.
