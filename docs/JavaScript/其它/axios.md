fetch() —— h5 自带的，只能用在浏览器 4kb  
axios —— 是第三方的插件，包体积大一点，14kb  
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。  
axios 执行也会返回 promise  
功能方面比 fetch 牛逼，工作中用的多  
安装 yarn add axios  
axios 真正好的一点是在于封装方便  
fetch 封装的时候只能在后面拼接，fetch 封装的时候要先把对象装换成字符串进行拼接  
axios 可以直接传一个对象，第二个参数是对象，不用转换  
axios 比 fetch 少一一步操作，fetch 需要两个.then()，第一个.then()里面需要转 json，第二个.then()里面可以拿到转换格式后的数据，axios 就不需要了，只需要一个.then()

axios 支持  
从浏览器中创建  XMLHttpRequests  
从 node.js 创建  http  请求  
支持  Promise API  
拦截请求和响应  
转换请求数据和响应数据  
取消请求  
自动转换 JSON 数据  
客户端支持防御  XSRF

面试：如果我写了 async await 的语法，怎样去处理他的容错  
用 try.....catch......容错处理

axios 两种写法  
写法一

```javascript
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

写法二

```javascript
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }，

});
axios({
  method: 'get',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }，
  params:{
        a:20022002
      }
});
```

执行多个并发请求

```javascript
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  })
);
```

创建实例  
创建一个 axios 实例（里面可以加请求配置）

```javascript
// 使用实例就不能用axios了，直接用实例instance（下面的所有axios全部使用instance）
var instance = axios.create({
  // url的前缀
  baseURL: "http://www.pudge.wang:3080/api",
  // 设置超时时间（超时请求就会自动关掉，一般设置10s）
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
默认传参
  // 加了params,只要我做请求，不管我有没有传参，他都会在url后面拼接这个params
  // params只会在get请求的时候帮我们加进去，data只会在post请求的时候帮我们加进去
  params: {
    // ID: 12345
    token: localStorage.getItem("token"), // 他会判断我有没有token，有了会进行拼接，没有则不会
  },
  // data: {
  //   firstName: 'Fred'
  // },
});
```

添加请求拦截器 （判断是 get 还是 post 请求，挂载 token 信息）  
我页面的任何一个地方如果要请求接口，只要是通过 axios 请求的接口，它都会走这一步  
我再发送请求之前，只要 return 了 config，这个请求就给他发送  
config 就是我们要发送给后端的请求信息  
现在我们有机会在请求之前去做统一的一些操作  
我可以在 return 之前，config.params 去挂载 token 信息  
如果这样加会有个问题，只有 get 请求有用，post 请求是在 data 里面的  
有一种最好的写法（判断是 get 还是 post 请求，再添加）  
有的公司是加在 headers 里面的

```javascript
instance.interceptors.request.use(
  function (config) {
    // console.log(config); //config就是我们要发送给后端的请求信息
    // 在发送请求之前做些什么
    // params只对get请求有效
    // post请求需要加在data里面
    // config.params.token = localStorage.getItem("token");
    // 有的公司是加在headers里面的
    // 更好的写法
    if (config.method === "get") {
      config.params.token = localStorage.getItem("token");
    } else {
      config.data.token = localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
```

添加响应拦截器 (判断状态码)  
是在刚拿到数据的时候执行，刚拿到数据之后，先执行响应拦截器  
response 和.then()里面的结果 res 是一摸一样的  
结论:响应拦截器里面 return 的内容，会作为请求里面.then()的结果  
响应拦截器可以做状态码的判定（在这里做状态码的判定，404 是没有办法判断到的）  
状态码  
100 —— 继续  
200 —— 成功  
300 —— 重定向  
400 —— 没找到  
500 —— 服务器错误

```javascript
instance.interceptors.response.use(
  function (response) {
    // 在刚拿到数据的时候执行（刚拿到数据，先执行相应拦截器里面的内容）
    // response和.then()里面的结果res是一摸一样的
    // console.log(response);
    // 对响应数据做点什么
    // return response;
    // return response.data;

    // 在这里面还可以做状态码的判断（404在这里是判断不到的）404网址都没找到，就没有状态码
    if (response.status === 200) {
      console.log("ok");
    } else if (response.status === 500) {
      console.log("服务器错误");
    }
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```
