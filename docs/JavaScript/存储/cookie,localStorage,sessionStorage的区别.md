## 相同点：

cookie、sessionStorage 和 localStorage 都用在客户端存储数据，每一个都有自己的存储大小和到期限制

## 不同点：

1. 存储大小   
   cookie 数据大小不能大于 4K；   
   localStorage 和 sessionStorage 则可以达到 5M；
2. 有效时间   
   cookie 需设置有效时间，在设置的有效期内一直有效；  
   localStorage 存储持久数据，只要不手动清除则一直存在；  
   sessionStorage 数据在当前浏览器关闭后就会被自动清除  
3. 数据与服务器间的交互方式  
   cookie 的数据会自动传递到服务器端，服务器端也可以写 cookie 到客户端  
   localStorage 和 sessionStorage 不会把数据自动传到服务器端，仅在本地存储  

4. sessionStorage 不同页面不能进行相互访问，localStorage 可以

设置 cookie

```javascript
document.cookie = 'name=wangwu;expires=' + d; d 为过期时间
```

## cookie 的使用及封装

1. Cookie 以字符串的形式进行存储的。Key 值相同，存储时就会覆盖。
2. Cookie 名称和值可以自己定义,存储的是字符串。不能超过 4KB
3. 如果 cookie 不存在，输出空白

```javascript
alert(document.cookie); //获取所有的 cookie 'name=zhangsan; age=18; sex=男'
```

### cookie 的使用

添加 cookie

```javascript
1. 直接存储 cookie
document.cookie = 'name=wangwu'; //添加 cookie，没有过期时间，关闭浏览器 cookie 不存在。
2. 带过期时间存储 cookie,利用日期对象,以天为单位。
expires
path
let d = new Date(); //创建日期对象
d.setDate(d.getDate() + 10); //获取今天的日期+10，重新设置回去，变成 10 天后的日期。
console.log(d); //2022-3-10
document.cookie = 'name=wangwu;expires=' + d; 3.带过期时间+带路径存储 cookie
路径：不同文件夹存储的 cookie 不能互相访问，除非将 cookie 存储到根文件夹上面
document.cookie = `name=wangwu;expires=${d};path=/`;
```

### 1.封装函数实现 cookie 存储

```javascript
function setCookie(key, value, day) {
  //day:存储的天数
  let d = new Date();
  d.setDate(d.getDate() + day);
  document.cookie = `${key}=${value};expires=${d};path=/`;
}
setCookie('name', 'zhangsan', 30);
setCookie('age', '19', 30);
setCookie('sex', '男', 30);
如何存储对象, 将对象转换成字符串格式存储 - JSON.stringify();
let obj = {
a: 1,
b: 2,
c: 3
};
setCookie('objData', JSON.stringify(obj), 30);`
```

### 2. 封装函数获取 cookie

```javascript
alert(document.cookie); //name=zhangsan; age=19; sex=男 获取所有
// 希望通过设定 key 获取对应的 value
// 通过前面的算法进行拆分，将获取的所有字符串拆分成对应的 key 和 value
function getCookie(key) {
console.log(document.cookie.split('; ')); //['name=zhangsan', 'age=19', 'sex=男']
let arr = document.cookie.split('; '); //注意分号后面的空格
for (let value of arr) { //遍历将一个数组变成三个数组
let newArr = value.split('='); // ['name', 'zhangsan'] ['age', '19'] ['sex', '男']
// 每一个数组项再拆分，拆分的一个新的数组，新的数组的第一项就是 key，第二项就是 value
if (key === newArr[0]) {
return newArr[1];
}
}
}
console.log(getCookie('name'));
console.log(getCookie('age'));
console.log(getCookie('sex'));
```

### 3.删除 cookie

```javascript
添加相同的 key,将过期时间改成一个过去的时间。
相同的 key 覆盖
function delCookie(key) {
setCookie(key, '', -1); //添加一个相同的 key，但是时间是过去的时间
}
delCookie('name');
```

## localStorage 的使用

### 1.本地存储 - 存 - 二种方式

1. 利用自定义对象的写法(点和中括号),key-value 的形式，key 和 value 都是自定义的。
2. 利用本地存储提供的方法 - 推荐
   格式：window.localStorage.setItem('key','value');
3. 存储对象，获取对象
   注意：存储的数据如果是对象，必须将对象转换成字符串，否则存储的值都会变成[object Object]
   存储对象

```javascript
  const obj = {
  title: '标题',
  price: '100'
  }
  localStorage.setItem('oObj', obj); //[object Object]
  localStorage.setItem('oObj', JSON.stringify(obj));//'{"name":"小李","age":18,"sex":"男"}'
  获取对象
  console.log(localStorage.getItem('oObj')); //'{"title":"标题","price":"100"}'
  console.log(JSON.parse(localStorage.getItem('oObj'))); //{title: '标题', price: '100'}
  解决方式：JSON.parse/JSON.stringify - 重点关注 4.存储数组，获取数组
  数组存储没有问题，获取进行转换
  存储数组
  const arr = ['apple', 'pear', 'orange'];
  localStorage.setItem('fruit', arr); //'apple,pear,orange'
  获取数组
  console.log(localStorage.getItem('fruit')); //'apple,pear,orange'
  console.log([localStorage.getItem('fruit')]); //['apple,pear,orange']
  console.log(localStorage.getItem('fruit').split(','));//['apple', 'pear', 'orange']
```

### 2.获取本地存储的值 - 二种方式

1. 利用自定义对象的写法(点和中括号)
2. 利用本地存储提供的方法

```javascript
格式：window.localStorage.getItem('key');
```

3. 修改 - 覆盖
   如果 key 值相同，后面覆盖前面的，可以此特点进行修改。

4. 删除本地存储
   1. 手动删除，利用控制面板进行删除。(删除选中的，删除所有)
   2. 利用方法进行对应的删除。
      格式：window.localStorage.removeItem('sex'); //参数就是对应的 key 3.利用方法进行删除所有的本地存储
      格式：window.localStorage.clear(); //没有参数

## cookie 的特点。

1. 禁用 Cookie 后，无法正常注册登陆。
2. cookie 是与浏览器相关的，不同浏览器之间所保存的 cookie 也是不能互相访问的；
3. cookie 可以被删除。因为每个 cookie 都是硬盘上的一个文件；
4. cookie 安全性不够高-xss 攻击
5. cookie 存储大小一般是 4kb 存储的格式是字符串 浏览器存储 cookie 自由约定存储时间。

## LocalStorage 的特点

1. localStorage 永久存储，除非手动删除.
2. localStorage 会将一个不超过 5MB 数据直接存储到本地，但只有在高版本的浏览器中才支持的。
3. 目前所有的浏览器中都会把 localStorage 的值类型限定为 string 类型,仅支持存储字符串。
4. 不同的浏览器本地存储不能相互进行访问。
   整理一下：html5 新增，永久存储，5MB 大小，字符串格式 存储到本地。
