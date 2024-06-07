```javascript
const BASE_URL = "http://www.pudge.wang:3080/api";
const http = {
  get(url, params) {
    return;
    fetch(BASE_URL + url)
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 0) {
          return res;
        }
      });
  },
  post(url, data) {
    NProgress.start();
    return fetch(BASE_URL + url, {
      // fetch方法（请求和响应）使用的是promise,后面可以使用链式操作.then((response)=>{})
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // 关闭进度条
        NProgress.done();
        return response.json();
      })
      .then((res) => {
        if (res.status === 0) {
          return res;
        }
      });
  },
};

export default http;

const BASE_URL = "http://www.pudge.wang:3080/api";
fetch(BASE_URL + url).then();
// fetch方法（请求和响应）使用的是promise,后面可以使用链式操作
// 一般来说，post请求习惯用data表示参数的形参，get请求习惯使用params
get;
fetch("http://localhost:5555/dictItem/getAll")
  .then(function (response) {
    return response.json();
  })
  .then((myJson) => {
    //相关逻辑
  });

post;
fetch("http://localhost:5555/dictItem/addDict", {
  method: "POST",
  body: JSON.stringify(this.itemDialog),
  headers: {
    "content-Type": "application/json",
  },
})
  .then((data) => {
    return data.text();
  })
  .then((ret) => {
    //相关逻辑
  });
```
