---
sidebar_position: 6
---

## 1. 文档

基础命令：`git log`

官方文档地址：[https://git-scm.com/docs/git-log](https://git-scm.com/docs/git-log)

功能：主要用来查看提交历史。

## 2. 基础命令

### 2.1 `git log [xxx]`

不加任何参数的默认情况下，`git log`会按时间先后顺序列出所有的提交，最近的提交排在最上面。

-   `git log`：默认真是所有的提交历史；
-   `git log file1`：查看指定文件`file1`的提交历史；
-   `git log dir1/`：查看指定`dir1`目录下所有文件的提交历史；
-   `git log dev`：查看`dev`分支所有的提交历史；
-   `git log v2.0`：查看`v2.0`对应的`tag`下的提交历史；
-   `git log eb1aab29a`：查看某次`commit`之前的提交历史，包括这次`commit`；
-   `git log eb1aab29a 335a360`：查看某两次`commit`之间的提交历史，包括这两次`commit`；
-   `git log eb1aab29a..335a360`：查看某两次`commit`之间的提交历史，不包括这两次`commit`；

### 2.2 `git log -2`

查看最近的两个提交记录，可以与其他命名模式或参数组合使用。

-   `git log -n`：查看最近的`n`个提交记录。

### 2.3 `git log -p`

以上命令等同于`git log --patch`。

它会显示每次提交所引入的差异（按补丁的格式输出）。

```shell
~/workspace/github/git-study(dev ✔) git log -p
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

diff --git a/a.txt b/a.txt
index 72943a1..6857d14 100644
--- a/a.txt
+++ b/a.txt
@@ -1 +1 @@
-aaa
+aaandy
```

### 2.4 `git log --stat`

显示每次提交的简略统计信息：包括修改过的文件，以及其中添加和移除的行数，并在最后列出所有增减行数的统计。

```shell
~/workspace/github/git-study(dev ✔) git log --stat
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

 a.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

### 2.5 `git log --shortstat`

只显示`--stat`中最后的行数添加修改删除统计

```shell
~/workspace/github/git-study(dev ✔) git log --shortstat
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

 1 file changed, 1 insertion(+), 1 deletion(-)
```

### 2.6 `git log --merges`

查看所有合并过的提交历史记录。

```shell
~/workspace/github/git-study(dev ✔) git log --merges
commit eedc4316a67fee2177dcb9e971a5583252cdf902 (HEAD -> dev_20210203_17539, origin/dev_20210203_17539)
Merge: 83f41a9 b12154b
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Tue Mar 23 17:53:34 2021 +0800

    Merge branch 'master' into dev_20210203_17539
....
```

### 2.7 `git log --no-merges`

```shell
~/workspace/github/git-study(dev ✔) git log --no-merges
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 13:45:26 2021 +0800

    init
```

### 2.8 `git log --name-status`

显示新增、修改和删除的文件清单。

```shell
~/workspace/github/git-study(dev ✔) git log --name-status
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

M       a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt

A       c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 13:45:26 2021 +0800

    init

A       a.txt
A       b.txt
```

### 2.9 `git log --name-only`

只在已修改的提交信息后显示文件清单。

```shell
~/workspace/github/git-study(dev ✔) git log --name-only
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

a.txt
```

### 2.10 `git log --graph`

显示`ASCII`图形表示的分支合并历史

```shell
~/workspace/github/git-study(dev ✔) git log --graph
* commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
| Author: AndyWang <wangyuanwenqi@outlook.com>
| Date:   Thu May 20 16:09:06 2021 +0800
|
|     update a.txt
|
* commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
| Author: AndyWang <wangyuanwenqi@outlook.com>
| Date:   Thu May 20 15:06:55 2021 +0800
|
|     add c.txt
|
* commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
  Author: AndyWang <wangyuanwenqi@outlook.com>
  Date:   Thu May 20 13:45:26 2021 +0800

      init
```

### 2.11 `git log --abbrev-commit`

仅显示`SHA-1`的前几个字符，而非所有的40个字符。

```shell
~/workspace/github/git-study(dev ✔) git log --abbrev-commit
commit f9651a1 (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt
```

### 2.12 `git log --relative-date`

使用相对时间表示历史

```shell
~/workspace/github/git-study(dev ✔) git log --relative-date
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   12 days ago

    update a.txt
```

### 2.13 `git log --author`

根据`author`进行匹配，这里不需要精确匹配，只需要包含就可以。

-   `git log --author='AndyWang'`：获取所有作者是`AndyWang`的`commit`；
-   `git log --author='andy \| qiqi'`：获取作者是`andy`或`qiqi`的提交；
-   `git log --author='xxx@outlook.com’`：`author`也可以用来查询`email`。

### 2.14 `git log -S`

根据内容查询，如下，用来查询内容`aaa`什么时候被加入到文件中。

```shell
~/workspace/github/git-study(dev ✔) git log -S 'aaa'
commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 13:45:26 2021 +0800

    init
```

### 2.15 `git log -G`

与`git log -S`类似，只是`-G`是用正则匹配来查询。

### 2.16 `git log --before`

查看在某个时间点之前的`commit`

```shell
~/workspace/github/git-study(dev ✔) git log --before='Thu May 20 15:06:55'
commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 13:45:26 2021 +0800

    init
```

也可以使用相对时间表示，如：

```shell
git log --before='yesterday'
git log --before='1 week ago'
```

### 2.17 `git log --after`

查看在某个时间点之后的`commit`。

```shell
~/workspace/github/git-study(dev ✔) git log --after='Thu May 20 15:06:55'
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt
```

`--before`与`--after`可以结合使用，表示在两个时间区间之内的提交。

```shell
~/workspace/github/git-study(dev ✔) git log --before='Thu May 20 16:09:06 2021 +0800' --after='Thu May 20 15:06:55 2021 +0800'
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt
```



### 2.18 `git log --date`

定制输出日期格式。

#### 2.18.1 `--date=relative`

以相对时间格式显示。

```shell
~/workspace/github/git-study(dev ✔) git log --date=relative
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   12 days ago

    update a.txt
```

#### 2.18.2 `--date=local`

以`Thu May 20 16:09:06 2021`格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=local
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021

    update a.txt
```

#### 2.18.3 `--date=iso`

以`2021-05-20 16:09:06 +0800`格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=iso
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   2021-05-20 16:09:06 +0800

    update a.txt
```

#### 2.18.4 `--date=rfc`

以`Thu, 20 May 2021 16:09:06 +0800`格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=rfc
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu, 20 May 2021 16:09:06 +0800

    update a.txt
```

#### 2.18.5 `--date=short`

以`2021-05-20`格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=short
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   2021-05-20

    update a.txt
```

#### 2.18.6 `--date=raw`

以`1621498146 +0800`格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=raw
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   1621498146 +0800

    update a.txt
```

#### 2.18.7 `--date=default`

以默认格式显示

```shell
~/workspace/github/git-study(dev ✔) git log --date=default
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt
```

#### 2.18.8 `--date=format`

自定义格式显示。

```shell
~/workspace/github/git-study(dev ✔) git log --date=format:'%Y-%m-%d %H:%M:%S'
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   2021-05-20 16:09:06

    update a.txt
```

格式占位符如下：

| 占位符 | 占位符代表含义                                               |
| :----: | ------------------------------------------------------------ |
|   %a   | `Abbreviated weekday name`                                   |
|   %A   | `Full weekday name`                                          |
|   %b   | `Abbreviated month name`                                     |
|   %B   | `Full month name`                                            |
|   %c   | `Date and time representation appropriate for locale`        |
|   %d   | `Day of month as decimal number (01 – 31)`                   |
|   %H   | `Hour in 24-hour format (00 – 23)`                           |
|   %I   | `Hour in 12-hour format (01 – 12)`                           |
|   %j   | `Day of year as decimal number (001 – 366)`                  |
|   %m   | `Month as decimal number (01 – 12)`                          |
|   %M   | `Minute as decimal number (00 – 59)`                         |
|   %p   | `Current locale's A.M./P.M. indicator for 12-hour clock`     |
|   %S   | `Second as decimal number (00 – 59)`                         |
|   %U   | `Week of year as decimal number, with Sunday as first day of week (00 – 53)` |
|   %w   | `Weekday as decimal number (0 – 6; Sunday is 0)`             |
|   %W   | `Week of year as decimal number, with Monday as first day of week (00 – 53)` |
|   %x   | `Date representation for current locale`                     |
|   %X   | `Time representation for current locale`                     |
|   %y   | `Year without century, as decimal number (00 – 99)`          |
|   %Y   | `Year with century, as decimal number`                       |
| %z, %Z | `Either the time-zone name or time zone abbreviation, depending on registry settings; no characters if time zone is unknown` |
|   %%   | Percent sign                                                 |

### 2.19 `git log --pretty`

使用不同的默认格式展示提交历史。

#### 2.19.1 `--pretty=oneline`

在一行展示提交历史的简要信息；

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=oneline
f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master) update a.txt
64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05 add c.txt
1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f init
```

#### 2.19.2 `--pretty=short`

展示提交历史的简短信息，一般只展示`Author`和提交信息；

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=short
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>

    init
```

#### 2.19.3 `--pretty=medium`

与`git log`效果相同，展示`Author`、`Date`和提交信息；

```sh
~/workspace/github/git-study(dev ✔) git log --pretty=medium
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 16:09:06 2021 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 15:06:55 2021 +0800

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu May 20 13:45:26 2021 +0800

    init
```

#### 2.19.4 `--pretty=full`

只展示`Author`、`Commit`和提交信息；

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=full
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Commit: AndyWang <wangyuanwenqi@outlook.com>

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author: AndyWang <wangyuanwenqi@outlook.com>
Commit: AndyWang <wangyuanwenqi@outlook.com>

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author: AndyWang <wangyuanwenqi@outlook.com>
Commit: AndyWang <wangyuanwenqi@outlook.com>

    init
```

#### 2.19.5 `--pretty=fuller`

展示比较全面的信息，包括`Author`、`AuthorDate`、`Commit`、`CommitDate`和提交信息；

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=fuller
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd (HEAD -> dev, master)
Author:     AndyWang <wangyuanwenqi@outlook.com>
AuthorDate: Thu May 20 16:09:06 2021 +0800
Commit:     AndyWang <wangyuanwenqi@outlook.com>
CommitDate: Thu May 20 16:09:06 2021 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
Author:     AndyWang <wangyuanwenqi@outlook.com>
AuthorDate: Thu May 20 15:06:55 2021 +0800
Commit:     AndyWang <wangyuanwenqi@outlook.com>
CommitDate: Thu May 20 15:06:55 2021 +0800

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
Author:     AndyWang <wangyuanwenqi@outlook.com>
AuthorDate: Thu May 20 13:45:26 2021 +0800
Commit:     AndyWang <wangyuanwenqi@outlook.com>
CommitDate: Thu May 20 13:45:26 2021 +0800

    init
```

#### 2.19.6 `--pretty=email`

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=email
From f9651a1b2b64ea26b960983845a3b7443e81cdcd Mon Sep 17 00:00:00 2001
From: AndyWang <wangyuanwenqi@outlook.com>
Date: Thu, 20 May 2021 16:09:06 +0800
Subject: [PATCH] update a.txt


From 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05 Mon Sep 17 00:00:00 2001
From: AndyWang <wangyuanwenqi@outlook.com>
Date: Thu, 20 May 2021 15:06:55 +0800
Subject: [PATCH] add c.txt


From 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f Mon Sep 17 00:00:00 2001
From: AndyWang <wangyuanwenqi@outlook.com>
Date: Thu, 20 May 2021 13:45:26 +0800
Subject: [PATCH] init
```

#### 2.19.7 `--pretty=raw`

```shell
~/workspace/github/git-study(dev ✔) git log --pretty=raw
commit f9651a1b2b64ea26b960983845a3b7443e81cdcd
tree 96a8112ff305a9d8c94985eba8c25bb4c296d43e
parent 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
author AndyWang <wangyuanwenqi@outlook.com> 1621498146 +0800
committer AndyWang <wangyuanwenqi@outlook.com> 1621498146 +0800

    update a.txt

commit 64bf692c4b951d90a9eaa2f29d9a8776fe9f6d05
tree 15b6c2b4cbb04ddb97da706346ed34086664309d
parent 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
author AndyWang <wangyuanwenqi@outlook.com> 1621494415 +0800
committer AndyWang <wangyuanwenqi@outlook.com> 1621494415 +0800

    add c.txt

commit 1c68353f1c7f17b91032e02f605d3b6e1cdb4f2f
tree 65b70c81bbedd324eb1d79c90a72ea2bddae82b4
author AndyWang <wangyuanwenqi@outlook.com> 1621489526 +0800
committer AndyWang <wangyuanwenqi@outlook.com> 1621489526 +0800

    init
```

#### 2.19.8 `--pretty=format`

使用其他格式显示历史提交信息。

```shell
git log --pretty=format:"%h" 
git log --pretty=format:'%s %C(bold blue)(%an)%Creset'
git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset'
```

其他占位符的含义：

| 占位符 | 占位符含义 |
| :----: | :--------- |
| %H | 提交对象（commit）的完整哈希字串 |
| %h| 提交对象的简短哈希字串|
| %T| 树对象（tree）的完整哈希字串|
|%t| 树对象的简短哈希字串|
|%P| 父对象（parent）的完整哈希字串|
| %p| 父对象的简短哈希字串|
|%an| 作者（author）的名字|
|%ae| 作者的电子邮件地址|
| %ad| 作者修订日期（可以用 -date= 选项定制格式）|
|%ar| 作者修订日期，按多久以前的方式显示|
|%cn| 提交者(committer)的名字|
|%ce| 提交者的电子邮件地址|
|%cd| 提交日期（可以用 -date= 选项定制格式）|
|%cr| 提交日期，按多久以前的方式显示|
| %s| 提交说明|

<!-- more -->
