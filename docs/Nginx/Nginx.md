nginx 是一款轻量级的 web 服务器/反向代理服务器/电子邮件代理服务器

## 配置文件的结构

nginx 由由配置文件中指定的指令控制的模块组成。指令分为简单指令和块指令。简单的指令由名称和参数组成，名称和参数之间用空格分隔，并以分号 ( ;) 结尾。
块指令具有与简单指令相同的结构，但它不是以分号结尾，而是以一组由大括号 ({ }) 包围的附加指令结尾。如果块指令可以在大括号内包含其他指令，则称为上下文（例如： events、 http、 server 和 location）。

## 1.正向代理与反向代理

### 正向代理

正向代理（forward）意思是一个位于客户端和原始服务器 (origin server) 之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标 (原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。  
正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。  
正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。

### 反向代理

反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。  
反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。
反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。

## 2.负载均衡（分摊压力）

一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。  
这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。  
很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。  
请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是负载均衡，核心是「分摊压力」。Nginx 实现负载均衡，一般来说指的是将请求转发给服务器集群。

如果请求数过大，单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器的情况改为请求分发到多个服务器上，就是负载均衡。  
Nginx 实现负载均衡，一般来说指的是将请求转发给服务器集群。

```nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;

    server 10.1.22.35:12345;
}

server {
    server_name  fe.server.com;
    listen 80;
    location /api {
        proxy_pass http://balanceServer;
  }
}
```

上面的配置只是指定了 nginx 需要转发的服务端列表，并没有指定分配策略。  
默认情况下采用的是轮询策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。

Nginx 支持的负载均衡调度算法方式如下：

weight 轮询(默认，常用)：接收到的请求按照权重分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，Nginx 会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。这种方式下，可以给不同的后端服务器设置一个权重值(weight)，用于调整不同的服务器上请求的分配率；权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。

ip_hash（常用）：每个请求按照发起客户端的 ip 的 hash 结果进行匹配，这样的算法下一个固定 ip 地址的客户端总会访问到同一个后端服务器，这也在一定程度上解决了集群部署环境下 session 共享的问题。

fair：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；结合了前两者的优点的一种调度算法。但是需要注意的是 Nginx 默认不支持 fair 算法，如果要使用这种调度算法，请安装 upstream_fair 模块。

url_hash：按照访问的 url 的 hash 结果分配请求，每个请求的 url 会指向后端固定的某个服务器，可以在 Nginx 作为静态服务器的情况下提高缓存效率。同样要注意 Nginx 默认不支持这种调度算法，要使用的话需要安装 Nginx 的 hash 软件包。

## 3.动静分离

为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。  
一般来说，都需要将动态资源和静态资源分开，由于 Nginx 的高并发和静态资源缓存等特性，经常将静态资源部署在 Nginx 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。  
使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。

## 4.Nginx 常用命令

```nginx
    nginx -s reload # 向主进程发送信号，重新加载配置文件，热重启
    nginx -s reopen # 重启 Nginx（重新打开日志文件）
    nginx -s stop # 快速关闭（ 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务）
    nginx -s quit # 等待工作进程处理完成后关闭（稳关闭Nginx，保存相关信息，有安排的结束web服务）
    nginx -T # 查看当前 Nginx 最终的配置
    nginx -t -c <配置路径> # 检查配置是否有问题，如果已经在配置目录，则不需要-c
``

## 5.配置文件结构

nginx.conf  
main # 全局配置，对全局生效  
├── events # 配置影响 Nginx 服务器或与用户的网络连接  
├── http # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置  
│ ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分  
│ ├── server # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块  
│ ├── server  
│ │ ├── location # server 块可以包含多个 location 块，location 指令用于匹配 uri  
│ │ ├── location  
│ │ └── ...  
│ └── ...  
└── ...

一个 Nginx 配置文件的结构就像 nginx.conf 显示的那样，配置文件的语法规则：  
配置文件由指令与指令块构成；  
每条指令以 ; 分号结尾，指令与参数间以空格符号分隔；  
指令块以 {} 大括号将多条指令组织在一起；  
include 语句允许组合多个配置文件以提升可维护性；  
使用 # 符号添加注释，提高可读性；  
使用 $ 符号使用变量；  
部分指令的参数支持正则表达式；

```nginx
——————————————————————
user nginx; # 运行用户，默认即是nginx，可以不进行设置（设置nginx服务的系统使用用户）
worker_processes 1; # Nginx 进程数，一般设置为和 CPU 核数一样
error_log /var/log/nginx/error.log warn; # Nginx 的错误日志存放目录
pid /var/run/nginx.pid; # Nginx 服务启动时的 pid 存放位置
——————————————————————
events {
    use epoll; # 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)
    worker_connections 1024; # 每个进程允许最大并发数
}
——————————————————————
我们使用 nginx 的 http 服务，在配置文件 nginx.conf 中的 http 区域内，配置无数个 server ，每一个 server 对应这一个虚拟主机或者域名。
http {
    ... ...        #后面再详细介绍 http 配置项目

    server {
        listen 80                          #监听端口;
        server_name localhost              #地址

        location / {                       #访问首页路径
            root /xxx/xxx/index.html       #默认目录
            index index.html index.htm     #默认文件
        }

        error_page  500 504   /50x.html    #当出现以上状态码时从新定义到50x.html
        location = /50x.html {             #当访问50x.html时
            root /xxx/xxx/html             #50x.html 页面所在位置
        }
    }

    server {
        ... ...
    }
}
一个 server 可以出现多个 location ，我们对不同的访问路径进行不同情况的配置。
我们再来看看 http 的配置详情
http {
    sendfile  on                  #高效传输文件的模式 一定要开启
    keepalive_timeout   65        #客户端服务端请求超时时间
    log_format  main   XXX        #定义日志格式 代号为main
    access_log  /usr/local/access.log  main     #日志保存地址 格式代码 main
}
http { # 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
# 设置日志模式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main; # Nginx访问日志存放位置
    sendfile on; # 开启高效传输模式
    tcp_nopush on; # 减少网络报文段的数量
    tcp_nodelay on;
    keepalive_timeout 65; # 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size 2048;
    include /etc/nginx/mime.types; # 文件扩展名与类型映射表
    default_type application/octet-stream; # 默认文件类型
    include /etc/nginx/conf.d/*.conf; # 加载子配置项
    server {
        listen 80; # 配置监听的端口
        server_name localhost; # 配置的域名
            location / {
                root /usr/share/nginx/html; # 网站根目录
                index index.html index.htm; # 默认首页文件
                deny 172.168.22.11; # 禁止访问的ip地址，可以为all
                allow 172.168.33.44； # 允许访问的ip地址，可以为all
        }
        error_page 500 502 503 504 /50x.html; # 默认50x对应的访问页面
        error_page 400 404 error.html; # 同上
    }
}
```

——————————————————————————————————————————————————————————————————————————  
https://blog.csdn.net/zxd1435513775/article/details/102508463

Nginx 配置文件  
在学习 Nginx 之前，要熟知它的配置文件，毕竟，下面需要做的所有配置（反向代理、负载均衡、动静分离等），都是基于它的配置文件。

Nginx 默认的配置文件是在安装目录下的 conf 目录下，后续对 Nginx 的使用基本上都是对此配置文件进行相应的修改。完整的配置文件，可以看一下文章最后。修改过 nginx.conf 配置文件，记得要重启 Nginx 服务

配置文件中有很多#号，该符号表示注释内容，去掉所有以 #开头的段落，精简之后的配置文件内容如下（PS：其实注释掉的地方，都是一些功能的使用代码，需要用到的时候，取消注释即可）：

```nginx
# 主进程叫master，负责管理子进程，子进程叫worker
# worker_processes配置项表示开启几个业务进程，一般和cpu核数有关
    worker_processes  1;

    events {
        worker_connections  1024;
    }

    http {
        # include表示可以引入其他文件，此处表示引入http mime类型
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;

        # 虚拟主机，可以配置多个
        server {
            listen       80;
            server_name  localhost;

            location / {
                # 路径匹配之后，哪个目录下去匹配相应的网页,html是相对路径
                root   html;
                index  index.html index.htm;
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }
        }
```

去掉注释信息后，可以将 nginx.conf 配置文件分为三部分：

2.1 第一部分：全局块

```nginx
     worker_processes  1;
```

从配置文件开始到 events 块之间的内容，主要会设置一些影响 Nginx 服务器整体运行的配置指令，主要包括：配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。

上面这行 worker_processes 配置，是 Nginx 服务器并发处理服务的关键配置，该值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的约束。

2.2 第二部分：events 块

```nginx
    events {
        worker_connections  1024;
    }
```

events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括：是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 work process 可以同时支持的最大连接数等

上述例子就表示每个 work process 支持的最大连接数为 1024。这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。

2.3 第三部分：http 块

```nginx
    http {
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;

        server {
            listen       80;
            server_name  localhost;

            location / {
                root   html;
                index  index.html index.htm;
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
        }
    }
```

这部分是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。需要注意的是：http 块也可以包括 http 全局块、server 块。下面的反向代理、动静分离、负载均衡都是在这部分中配置

http 全局块：http 全局块配置的指令包括：文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。

server 块：这块和虚拟主机有密切关系，从用户角度看，虚拟主机和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。

每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。而每个 server 块也分为全局 server 块，以及可以同时包含多个 location 块。

2.3.1 全局 server 块  
最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置。

2.3.2 location 块  
一个 server 块可以配置多个 location 块。

这块的主要作用是：基于 Nginx 服务器接收到的请求字符串（例如 server_name/uri-string），对虚拟主机名称（也可以是 IP 别名）之外的字符串（例如 前面的 /uri-string）进行匹配，对特定的请求进行处理。地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行。

```nginx
    http {
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;

        server {
            listen       80;
            server_name  localhost;

            # 若请求路径像这样：www.xxxx/img/example.png
            # 则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件
            location /img/ {
                root /var/www/image;
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
        }
    }
```

## 反向代理如何配置

### 反向代理实例一

实现效果：使用 Nginx 反向代理，访问www.123.com直接跳转到127.0.0.1:8080  
注意：此处如果要想从www.123.com跳转到本机指定的ip，需要修改本机的hosts文件。此处略过  
配置代码

```nginx
    server {
        listen       80;
        server_name  192.168.17.129;

        location / {
            root   html;
            index  index.html index.htm;
            proxy_pass  http://127.0.0.1:8080
        }
    }
```

如上配置，Nginx 监听 80 端口，访问域名为www.123.com（不加端口号时默认为 80 端口），故访问该域名时会跳转到 127.0.0.1:8080 路径上。  
此处的意思为：nginx 反向代理服务监听 192.168.17.129 的 80 端口，如果有请求过来，则转到 proxy_pass 配置的对应服务器上，仅此而已。  
在 location 下，同时配置 root 和 proxy_pass 选项时，两个选项只会二选一执行  
此处不能配置 https 反向代理

### 反向代理实例二

实现效果：使用 Nginx 反向代理，根据访问的路径跳转到不同端口的服务中，Nginx 监听端口为 9001  
访问http://192.168.17.129/edu/直接跳转到 127.0.0.1:8080  
访问http://192.168.17.129/vod/直接跳转到 127.0.0.1:8081  
第一步，需要准备两个 tomcat，一个 8080 端口，一个 8081 端口，并准备好测试的页面  
第二步，修改 nginx 的配置文件，在 http 块中配置 server

```nginx
    server {
        listen       9001;
        server_name  192.168.17.129;

        location ~ /edu/ {
            proxy_pass  http://127.0.0.1:8080
        }

        location ~ /vod/ {
            proxy_pass  http://127.0.0.1:8081
        }
    }
```

根据上面的配置，当请求到达 Nginx 反向代理服务器时，会根据请求路径不同进行分发到不同的服务上。

补充：location 指令说明  
该指令用于匹配 URL， 语法如下：

```nginx
    location [ = | ~ | ~* | ^~] uri {

    }
```

= ：用于不含正则表达式的 uri 前，要求请求字符串与 uri 严格匹配，如果匹配成功，就停止继续向下搜索并立即处理该请求  
~：用于表示 uri 包含正则表达式，并且区分大小写  
~_：用于表示 uri 包含正则表达式，并且不区分大小写  
^~：用于不含正则表达式的 uri 前，要求 Nginx 服务器找到标识 uri 和请求。字符串匹配度最高的 location 后，立即使用此 location 处理请求，而不再使用 location 块中的正则 uri 和请求字符串做匹配。  
注意：如果 uri 包含正则表达式，则必须要有 ~ 或者 ~_ 标识、

————————————————————————————————————————————————————————————————————    
https://www.cnblogs.com/wx170119/p/11349475.html    
nginx 反向代理原理及配置详解  
