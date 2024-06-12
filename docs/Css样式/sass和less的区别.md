less 和 sass 的区别 Less 和 Sass 的主要不同就是他们的实现方式。

1. Less 在 JS 上运行，Sass 在 Ruby 上使用。  
   Less 是基于 JavaScript，是在客户端处理的。
2. Sass 是基于 Ruby 的，是在服务器端处理的。
3. 关于变量在 Less 和 Sass 中的唯一区别就是 Less 用@，Sass 用$。
4. Sass 支持条件语句，可以使用 if{}else{},for{}循环等等，而 Less 不支持

总体优点

1. 提供 CSS 缺失的样式层复用机制
2. 减少冗余代码
3. 提高样式代码的可维护性
4. 结构清晰，便于扩展可以方便的屏蔽浏览器私有的语法差异
5. 轻松实现多重继承，完全兼容了 CSS 代码，提高了开发效率。
