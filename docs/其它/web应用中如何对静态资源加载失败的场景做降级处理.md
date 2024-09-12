## 场景

1. 图片
2. css 文件
3. javascript 文件
4. CDN
5. 字体文件
6. 服务端渲染失败

## 解决方案

### 图片处理

1. 占位图，alt 属性描述图片
2. 重置机制（404、无权限）
3. 上报

```html
<img src="xxx" alt="暂无图片" onerror="handleImageError(this)" />
```

```js
function handleImageError(image) {
  image.onerror = null;
  image.src = 'xxx.jpg'; // 使用占位图
}
```

### css 文件处理

1. 关键性样式，通过内联
2. 备用样式
3. 上报

```html
<head>
  <style>
    body {
      /* xxx:yyy */
    }
  </style>
  <link rel="stylesheet" href="xxx.css" onerror="handleCssError" />
</head>
```

```js
function handleCssError() {
  // 加载备用样式
  const fallbackCss = document.createElement('link');
  fallbackCss.rel = 'stylesheet';
  fallbackCss.href = 'xxx.css';
  document.head.appendChild(fallbackCss);
}
```

### javascript 文件处理

1. 内联脚本
2. 备用脚本处理
3. 上报

```html
<head>
  <script>
    // 内敛关键脚本
    function fn() {}
    fn();
  </script>
  <script src="xxx.js" onerror="handleJSError"></script>
</head>
```

```js
function handleJSError() {
  // 加载备用脚本
  const fallbackScript = document.createElement('script');
  fallbackScript.src = 'xxx.js';
  document.head.appendChild(fallbackScript);
}
```

### CDN 处理

1. 本地备份，如果 cdn 出错了就是用本地备份
2. 动态切换，切换到另一个有用的 cnd 服务

```html
<head>
  <script src="xxx.js" onerror="handleCDNError"></script>
</head>
```

```js
function handleCDNError() {
  // 加载备用脚本
  const fallbackScript = document.createElement('script');
  fallbackScript.src = 'xxx.js';
  document.head.appendChild(fallbackScript);
}
```

### 字体文件处理

1. 使用降级字体 apple 微软雅黑
2. webfont 处理字体问题

```css
@font-face {
  font-family: 'CustomFont';
  src: url('customfont.woff2') .format('woff2');
  font-display: swap;
}
body {
  font-family: 'CustomFont', Arial, sans-serify;
}
```

### ssr 处理

1. 降级的 html 用作渲染
2. 改用客户端渲染
