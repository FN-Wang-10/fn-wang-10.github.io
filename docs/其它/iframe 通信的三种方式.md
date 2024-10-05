概述：在网页开发中，iframe 是一种常用于嵌入另一个 HTML 文档到当前文档中的元素。由于安全原因，iframe 中的文档默认与父文档隔离，但有时候我们需要在 iframe 和其父页面（或不同 iframe 之间）进行通信。有几种方式可以实现这种跨文档通信。

## 一、使用 window.parent 和 window.frames（同源情况下）

如果 iframe 和父页面属于同一源（即协议、域名和端口都相同），你可以通过 window.parent 在 iframe 中访问父页面的 window 对象，或者通过 window.frames（或 window.frames[index]/window.frames[name]）在父页面访问 iframe 的 window 对象。然后，你可以在这些 window 对象上设置属性或调用函数来进行通信。

```js
<!-- 父级html -->

<button onclick="postMessageBtn()">postMessageBtn</button>

<iframe
  id="myIframe"
  src="http://172.30.10.18:8080/#/login"
  width="375"
  height="700"
></iframe>
<script>
  /**
   * 一、 使用 window.parent 和 window.frames（同源情况下）
   */
  function postMessageBtn() {
    let obj = {
      a: "父级发送消息给子级",
      b: {
        c: "22",
      },
    };
    let iframeDom =
      window.frames["myIframe"] || document.getElementById("myIframe");
    let iframeWind = iframeDom.contentWindow;

    iframeWind.parentCall(obj);

}
function childCall(params) {
console.log("子级调用父级方法并传参", params);
}
</script>
```

```js
<!-- iframe -->

<button onclick="sendToOuterWind()">向父级传参</button>

<script>
  function parentCall(data) {
    console.log("父级调用子级方法并传值", data);
  }
  function sendToOuterWind() {
    let params = {
      type: "自定义传递类型，后续可以根据不同类型做不同处理",
      data: "消息内容体",
    };
    // window.parent 直接调用父级方法（同源情况下）
    window.parent.childCall(params);
  }
</script>
```

## 二、使用本地缓存(localStorage\sessionStorage 等)存入和获取（同源情况下）

利用同源情况下缓存共享特性，传递数据；这里就不展开说了，注意存入和取出数据的顺序就好

## 三、使用 window.postMessage（重点）

window.postMessage 方法提供了一种安全的方式来跨源通信。你可以通过这个方法从一个窗口向另一个窗口发送消息，无论这两个窗口是否同源。这个方法接收两个参数：要发送的消息和一个目标窗口的源（可以使用通配符 \* 来指定允许任何源发送消息）。

1.  基础用法：
    window.postMessage 方法接受两个参数：
    message：要发送的数据，该数据将通过事件对象的数据属性传递给监听器。
    targetOrigin：字符串，指定目标窗口的源（origin），其格式必须是一个 URI（例如 “https://example.com”），或者是一个表示不限制 URL 的特殊值 “"（但是，出于安全考虑，不建议在生产环境中使用 "”）。如果指定的源不匹配接收消息窗口的源，则消息不会被发送；这有助于防止跨站点的消息传递。

    ```js
    <!-- 父级html -->

    <button onclick="postMessageBtn()">postMessageBtn</button>
    <iframe
      id="myIframe"
      src="http://127.0.0.1:5501/20240813.html"
      width="375"
      height="700"
    ></iframe>
    <script>
      /**
       * 三、 使用postMessage
       */
      function postMessageBtn() {
        let obj = {
          a: "父级发送消息给子级",
          b: {
            c: "22",
          },
        };
        var iframe = document.getElementById("myIframe").contentWindow;
        iframe.postMessage(obj, "*"); // 发送消息给iframe
      }
      window.addEventListener("message", (e) => {
        // 父级接收子级传入数据
        console.log("父级接收子级传入数据", e.data);
      });
    </script>
    ```

````
 ```js
    <!-- iframe -->
    <button onclick="sendToOuterWind()">向父级传参</button>
    <script>
      // 子页面接收消息
      window.addEventListener("message", function (event) {
        console.log("event", event);
        // 处理接收到的消息
        console.log("Received message:", event.data);

        // 可选：回复消息
        event.source.postMessage("Message received!", event.origin);

    });

function sendToOuterWind() {
let params = {
type: "自定义传递类型，后续可以根据不同类型做不同处理",
data: "消息内容体",
};

    // 三、postMessage
    // 获取父级window
    // window.parent（最近的上一级父页面）window.top （最顶层的父页面，即有多层嵌套iframe的时候使用）
    window.parent.postMessage(params, "*");

}
</script>
````

参考：https://blog.csdn.net/weixin_46544600/article/details/141181647
