---
sidebar_position: 3
---

## 1. 文档

基础命令：`git pull`

官方文档地址：[https://git-scm.com/docs/git-pull](https://git-scm.com/docs/git-pull)

功能：取出远程仓库某个分支的更新，再与本地某个分支进行合并。

语法：`git pull [options] [<repository> [<refspec>…]]`。

区别：`git fetch`主要与`git pull`作对比，常说的一句话是`git pull = git fetch + git merge`。也就是说`git fetch`只是把最新代码更新到本地的`origin/xxx`分支，但是不会与本地的`xxx`分支进行代码合并，而`git pull`则是直接拉取最新代码并与本地的`xxx`分支进行代码合并。

## 2. 基础命令

### 2.1 `git pull`

取回远程主机与当前分支存在最终关系的分支的更新，再与本地的当前分支进行合并。

### 2.2 `git pull origin`

等同于`git pull`。

### 2.3 `git pull origin master`

取回远程主机`origin`上的`master`分支上的更新，再与本地的`master`分支进行代码合并。注意：如果本地分支已经与远程分支存在追踪关系，则可以省略冒号后的本地名。

### 2.4 `git pull origin master:temp`

取回远程主机`origin`上`master`分支的更新，并与本地的`temp`分支进行合并。

它的完整格式如下：

```shell
git pull <远程主机名> <远程分支名>:<本地分支名>
```

### 2.5 `git pull --rebase`

如果合并需要采用`rebase`模式，可以使用`—rebase`选项，默认使用`merge`模式。

该命令等同于：`git fetch` + `git rebase`。

### 2.6 `git pull -p`

如果远程主机删除了某个分支，默认情况下，`git pull`不会再拉取分支的时候，删除对应的本地峰值，这是为了防止其他人在误操作远程主机时对我们的本地代码产生影响。当然，也可以通过命令来改变这一行为：`-p`命令会在本地删除远程已经删除的分支。

该命令等同于：

```shell
git fetch --prune origin
git fetch -p
```



