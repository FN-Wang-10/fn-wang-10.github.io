1. 语法  
   require('module')  
   import module from 'module';    
   import './module';  
   import 支持相对路径，require 不支持相对路径，需要使用绝对路径  
2. require 是 commonjs 语法，import 是 ES6 语法
3. require 是（运行）时加载模块的所有方法，import 是（编译）的时候调用
4. require 引入的是（整个模块里的对象），import 可以（按需引入）
5. require 导入的是（值的拷贝），import 导入的是（值的引用）

```javascript
export { firstName, lastName, year };
export { v1 as streamV1, v2 as streamV2, v2 as streamLatestVersion };

import { firstName, lastName, year } from "./profile.js";
import { lastName as surname } from "./profile.js"; // as 表示重命名
import * as circle from "./circle"; // *代表加在整个模块

export default function () {
  console.log("foo");
}
import customName from "./export-default";

动态加载;
import("/modules/myModule.mjs").then((module) => {
  // Do something with the module.
});

复合写法;
export { foo, bar } from "my_module";

// 可以简单理解为
import { foo, bar } from "my_module";
export { foo, bar };
```
