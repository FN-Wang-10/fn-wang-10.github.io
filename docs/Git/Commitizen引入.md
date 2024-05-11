---
sidebar_position: 30
---

在代码提交执行`git commit`时，引入`Commitizen`工具，以`git cz`替代`git commit -m 'msg'`，同时修改默认的`angular`代码`commit`标准。

##  1. `Commitizen`引入配置流程：

### 1.1. 安装依赖

本地安装`commitizen`和``cz-customizable``

```shell
yarn add commitizen cz-customizable -D
```

### 1.2. 添加`config`配置

项目`package.json`中添加配置

```json
"config": {
	"commitizen": {
		"path": "node_modules/cz-customizable"
	}
}
```

### 1.3. 新增配置文件

项目根目录下新增`.cz-config.js`文件，并添加配置如下：


```js
module.exports = {
  types: [
    { value: 'feat', name: '特性:     一个新功能' },
    { value: 'fix', name: '修复:     修复一个bug' },
    { value: 'style', name: '样式:     文件格式修改，不影响逻辑' },
    { value: 'docs', name: '文档:     仅仅是文档修改' },
    { value: 'other', name: '其他:     其他修改' },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "选择本次修改的类型:",
    subject: '请输入本次提交的简短描述:',
    body: '请输入本次提交的详细描述:',
  },

  skipQuestions: [
    'scope',
    'ticketNumber',
    'breaking',
    'footer',
  ]
};

```

### 1.4. 开心使用

步骤到这里已经可以使用`git cz`替代`git commit`命令进行提交，但是此时不会强制使用`git cz`，也就是说使用`git commit`也是可以提交成功的。



## 2. 引入`commitlint`

引入`commitlint`之后就必须使用`git cz`提交，其实不然，`commitlint`只是检查你提交的`message`信息格式，大部分情况下是会被拒绝的，那你就只能使用`git cz`进行提交。

### 2.1. 安装依赖

```shell
yarn add @commitlint/cli @commitlint/config-conventional husky -D
```
### 2.2. 新增`husky`配置

`package.json`新增配置项
```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

### 2.3. 新增配置文件

在项目根目录下新增文件`commitlint.config.js`，并写入：


```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性
        'fix', // 修补bug
        'docs', // 文档
        'style', // 格式需改
        'other', // 其他修改
      ],
    ],
    'type-empty': [2, 'never'], // type不能为空
    'type-case': [0, 'always', 'lower-case'], // type不限制大小写
    'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
  },
};
```




<!-- more -->
