<!-- 📆: 2023-03-27 07:57:12 
🏷: #nginx 

## 一、常用配置

### 1. gzip压缩

```nginx
http {
    include          mime.conf;
    default_type     application/octet-stream;
    # ....

    gzip             on;
    gzip_min_length  1k;
    gzip_comp_level  5;
    gzip_types       text/plain text/css application/x-javascript application/javascript text/javascript;

    server {
        # ....
    }
```

部分参数含义：

| 参数 | 含义 |
| --- | --- |
| gzip_min_length | 正整数，单位为字节，也可用k表示千字节，比如写成1024与1k都可以，效果是一样的，表示当资源大于1k时才进行压缩，资源大小取响应头中的Content-Length进行比较，经测试如果响应头不存在Content_length信息，该限制参数对于这个响应包是不起作用的；另外此处参数值不建议设的太小，因为设的太小，一些本来很小的文件经过压缩后反而变大了，官网没有给出建议值，在此建议1k起，因为小于1k的也没必要压缩，并根据实际情况来调整设定。 |
| gzip_comp_level | 1-9的正整数，1最低，压缩时间短，9最高，压缩时间长，吃cpu，但是压缩效果好，实质是用cpu换流量，视情况而用。 |
| gzip_types | 响应报文数据格式，或者说类型，对应http响应头中的Content-type字段，如常见的有text/html、text/css、application/json、application/javaScript等。用于指定要压缩的响应报文类型。”*”表示压缩所有格式的响应报文，多种格式用空格隔开。如text/html text/css。———————————————— |
| gzip_http_version | 默认为1.1，此处只能是1.0，或者1.1。设置压缩响应所需的最小http协议版本。|

### 2. 配置https

```nginx
server {
    listen       80;
    server_name  127.0.0.1;

		# 以下是支持https的配置，其中pem和key证书文件需要去CA机构申请，
		# 申请后会获得这两个文件，将这两个放在服务器指定目录，如此配置能访问到即可
    ssl_certificate      /etc/nginx/ssl_certs/draw.lyan.me.pem;
    ssl_certificate_key  /etc/nginx/ssl_certs/draw.lyan.me.key;
    ssl_session_timeout  5m;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;
}
```

### 3. 允许跨域访问

可将下面配置添加到指定`location`中或者`server`中。

```nginx
# *表示允许所有站跨域访问（不安全，建议指定具体允许的域名如：http://b.domain.com:9000（注意格式：http(s):// + domain + port，末尾也不能加/）
add_header Access-Control-Allow-Origin *;  

#此项为允许带cookie跨域访问，若设置true，上面域名配置不能为*，必须指定具体域名
add_header Access-Control-Allow-Credentials true;  
```

### 4. iframe同源策略限制

限制iframe插入，可设置为非同源不插入，指定origin插入，默认为不限制

```nginx
# 限制为同源可用
add_header X-Frame-Options SAMEORIGIN

# 指定网站可用
add_header X-Frame-Options "ALLOW-FROM http://xxx.com:8000";
add_header Content-Security-Policy "frame-ancestors http://xxx.com:8000"; # 兼容chrome
```

### 5. 标准root页面配置

一般用在官网等能直接通过域名就打开的项目，不需要添加其他的location配置，只匹配根路径，如以下项目可直接通过`http://www.xxx.com`访问。

```nginx
server {
    listen       80;
    server_name  www.xxx.com;

    location / {
        root   /app/xxx;  # 项目所在目录
        index  index.html index.htm;
        try_files  $uri $uri/ /index.html;  # vue单页应用需要路由始终指向index.html
    }
}
```

### 6. 根据路径访问不同前端静态页面项目

匹配特殊路径，用在当前域名下有多个项目，需要通过路径来区分访问的情况，如以下配置则需要通过`http://www.xxx.com/app-h5`才能访问。

```nginx
server {
		listen       80;
    server_name  www.xxx.com;

    location /app-h5 {
			  try_files $uri $uri/ /app-h5/index.html;
			  alias /usr/share/nginx/html/h5/mobile/app-h5;
			  index index.html index.htm;
		}
}
```

### 7. 接口反向代理

```nginx
location /app-api {
    proxy_pass   http://b.domain.com:9000;  # 相对路径，最终地址会加上/app-api，变成 /app-api/xxx
    
		# proxy_pass   http://b.domain.com:9000/;  # 绝对地址，最终地址会舍弃/app-api，变成 /xxx
    
		# proxy_cookie_domain   b.domain.com a.domain.com; # 需要修改接口返回的cookie域名时使用
}
```

### 8. upstream负载均衡

<aside>
💡 upstream 用来配置负载均衡，需要注意的是 upstream 不能配置在 server 块内，即不能跟 location 在同一级别，需要配置在 http 块内，server 块外，否则会报错。

</aside>

```nginx
# 默认轮询配置
upstream appServer {
    server 10.0.0.80:5000;
    server 10.0.0.81:5000;
}

server {
    listen       80;
    server_name  127.0.0.1;

    location /app-api {
        proxy_pass   http://appServer;
    }
}
```

- 六大负载均衡调度策略配置

```nginx
# 加权轮询
upstream appServer {
    server 10.0.0.80:5000 weight=10;
    server 10.0.0.81:5000 weight=20; # 该服务器收到的连接数占2/3
}

# ip_hash，不可给服务器加权重
upstream appServer {
    ip_hash;
    server 10.0.0.80:5000;
    server 10.0.0.81:5000;
}

# url_hash
upstream appServer {
    server 10.0.0.80:5000;
    server 10.0.0.81:5000;
    hash $request_uri;
}

# fair(第三方)
upstream appServer {
    server 10.0.0.80:5000;
    server 10.0.0.81:5000;
    fair;
}

# least_conn，最少连接数
upstream appServer {
    least_conn;
    server 10.0.0.80:5000;
    server 10.0.0.81:5000;
}
```

| 调度算法 | 概述 |
| --- | --- |
| 轮询 | 逐一轮询，默认算法 |
| weight轮询 | 加权轮询，weight越大，轮询到的几率越大 |
| fair | 根据后端服务器的响应时间来分配，响应时间短的优先分配 |
| ip_hash | 根据ip的hash结果进行分配，来自同一客户端的请求可以打在同一台机器上，能解决后台session不共享的问题 |
| url_hash | 根据访问的url进行hash分配 |
| least_conn | 最小连接数，哪个服务器连接数少分配给哪个服务器 |
| hash关键数值 | hash自定义key |
- nginx负载均衡配置状态

```nginx
# 加权轮询
upstream appServer {
    server 10.0.0.80:5000 weight=10;
    server 10.0.0.81:5000 weight=20; # 该服务器收到的连接数占2/3
}

# max_fails  fail_timeout，允许请求失败次数和失败之后等待时间，两个必须同时配置
# 一下配置代表80的服务器允许失败3次，超过3次后，在15秒内请求将不再发送给该服务器
upstream appServer {
    server 10.0.0.80:5000 weight=10 max_fails=3 fail_timeout=15;
    server 10.0.0.81:5000 weight=20;
}

# backup 备份机，所有服务挂了之后才会生效
upstream appServer {
    server 10.0.0.80:5000 weight=10;
    server 10.0.0.81:5000 weight=20;
    server 10.0.0.82:5000 backup;
}

# down 标识一台服务器不可用，貌似没啥用
upstream appServer {
    server 10.0.0.80:5000 weight=10;
    server 10.0.0.81:5000 weight=20;
        server 10.0.0.81:5000 down;
}

# max_conn 最大连接数，超过这个连接数量，将不会分配新的连接给它，默认为0，没有限制
upstream appServer {
    server 10.0.0.80:5000 weight=10;
    server 10.0.0.81:5000 max_conn=1000;
}
```

| 状态 | 概述 |
| --- | --- |
| down | 当前的server暂不参与负载均衡 |
| backup | 预留的备份服务器，当其他服务器都挂了的时候启用 |
| max_fails | 允许请求失败的次数 ，如果请求失败次数超过限制，则进过fail_timeout 时间后从虚拟服务池中kill掉该服务器 |
| fail_timeout | 经过max_fails失败后，服务暂停时间，max_fails设置后，必须设置fail_timeout 值 |
| max_conn | 限制最大的连接数，用于服务器硬件配置不同的情况下 |

### 9. 配置长连接

```nginx
# 需要注意的是，以下实现的是一个维持90秒的长连接
# 如果想实现一个永久不断的链接，有两种方案：一是直连后端服务，不经过nginx；二是用下面的配置，同时要实现一个90秒以内的心跳，保证连接不断开
http {
  keepalive_timeout  90s 90s; # 此两个参数主要实现从客户端到nginx的长连接
  keepalive_requests 10000;

  server {
    listen       80;
    server_name  www.xxx.com;

    client_max_body_size    100m;

    upstream  BACKEND {
      server   192.168.0.1：8080  weight=1 max_fails=2 fail_timeout=30s;
        server   192.168.0.2：8080  weight=1 max_fails=2 fail_timeout=30s;
      keepalive 300;        // 这个很重要！
    }

    location / {
      root   /app/xxx;  # 项目所在目录
      index  index.html index.htm;
      try_files  $uri $uri/ /index.html;  # vue单页应用需要路由始终指向index.html
    }

    location /mqtt {
       proxy_pass http://BACKEND;
       proxy_http_version 1.1;  # 此处两个参数实现nginx到后端的长连接
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection "upgrade";
       proxy_read_timeout 90;
       proxy_send_timeout 90;
       proxy_connect_timeout 90;
    }
    }
}
```

### 10. 限制ip访问

```nginx
#限制IP访问
location / {
    deny 192.168.0.2；
    allow 192.168.0.0/24;
    allow 192.168.1.1;
    deny all;
}
```

### 11. 配置移动端访问

此配置可以用来做不同端的自适应，即通过`$http_user_agent`判断设备类型，返回不同的文件，或者重定向到不同的网址。

```nginx
# 放在server里
if ($http_user_agent !~* (mobile|nokia|iphone|ipad|android|samsung|htc|blackberry)) {
  rewrite  ^(.*)    http://www.abc.com$1 permanent;
}
```

### 12. 配置文件服务器

所谓文件服务器就是通过浏览器可以直接打开服务器的文件，点击可以直接下载，这样就不用专门写下载的页面，简单明了。

```nginx
# 需要注意的是配置文件需要以root用户启动
user root root;

# 配置目录树页面url
location /download {
        alias /home/download/;
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        charset utf-8,gbk;
    }

# 修改头部字段Content-Disposition，直接打开下载框
location ~ ^/home/download(.*)$ {
        add_header Content-Disposition "attachment;
        filename=$1";
    }
```

## 二、具体参数含义

### location路径匹配

| 开头 | 功能 |
| --- | --- |
| 以 = 开头 | 表示精确匹配；如只匹配根目录结尾的请求，后面不能带任何字符串 |
| 以 ~ 开头 | 表示区分大小写的正则匹配 |
| 以 ~* 开头 | 表示不区分大小写的正则匹配 |
| 以 ^~ 开头 | 表示uri以某个常规字符串开头，不是正则匹配 |
| 以 / 开头 | 通用匹配, 如果没有其它匹配,任何请求都会匹配到 |
 -->
