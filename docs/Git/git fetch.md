---
sidebar_position: 4
---

## 1. 文档

基础命令：`git fetch`

官方文档地址：[https://git-scm.com/docs/git-fetch](https://git-scm.com/docs/git-fetch)

功能：用于从另一个远程仓库下载最新的对象和引用，但是不与本地分支进行合并。如果要查看下载下来的最新代码，可以在`origin/xxx`分支里查看。

区别：`git fetch`主要与`git pull`作对比，常说的一句话是`git pull = git fetch + git merge`。也就是说`git fetch`只是把最新代码更新到本地的`origin/xxx`分支，但是不会与本地的`xxx`分支进行代码合并，而`git pull`则是直接拉取最新代码并与本地的`xxx`分支进行代码合并。

## 2. 概念原理

### 2.1 `FETCH_HEAD`概念

指定某个`branch`在服务器上的最新状态。

```shell
~/workspace/github/git-study(dev ✔)cat .git/FETCH_HEAD
f715a6d5196fae48d0be4e5e163d3a35cc6f6bc1    branch 'dev' of git@github.com:aaaaaAndy/git-study.git
```

第一列是版本号，第二列是当前`FETCH_HEAD`将要被合并的本地分支，第三列是`git`版本库路径。

此时可以在`dev`分支直接执行`git merge`，即可将本地`origin/dev`分支的代码合并到`dev`分支上。

### 2.2 执行过程

`get fetch`的执行过程具体可分为两步：

1.  创建并更新本地远程分支`origin/xxx`，即当不存在本地远程分支时先创建本地远程分支`origin/xxx`，然后将远程仓库代码更新到本地远程分支`origin/xxx`上；
2.  在`FETCH_HEAD`中设定当前远程分支`origin/xxx`对应的本地分支，这样就可以直接执行`git merge`，`git`就会将远程分支`origin/xxx`上的更新合并到本地分支`xxx`上。

## 3. 基础命令

### 3.1 `git fetch`

获取远程所有分支更新到本地。

### 3.2 `git fetch origin`

获取某个远程主机的代码到本地，与`git fetch`功能相同,只是指定了要`fetch`的`remote`。

### 3.3 `git fetch origin master`

设定当前分支的 `FETCH_HEAD`为远程服务器的`master`分支。注意: 在这种情况下, 不会在本地创建本地远程分支, 这是因为：这个操作是`git pull origin master`的第一步, 而对应的`pull`操作,并不会在本地创建新的`branch`。

一个附加效果是：这个命令可以用来测试远程主机的远程分支`xxx`是否存在, 如果存在, 返回0, 如果不存在, 返回128, 抛出一个异常。

一般来说，我们本地都会存在存在`origin/xxx`分支，所以也并不需要创建一个新的`origin/xxx`分支。

### 3.4 `git fetch origin master:temp`

首先执行上面的`fetch`操作， 使用远程`master`分支在本地创建`temp`分支(但不会切换到该分支)， 如果本地不存在`temp`分支, 则会自动创建一个新的`temp`分支， 如果本地存在`temp`分支, 并且是`fast forward'`, 则自动合并两个分支, 否则, 会阻止以上操作。

### 3.5 `git fetch origin :temp`

等价于`git fetch origin master:temp`。

<!-- more -->
