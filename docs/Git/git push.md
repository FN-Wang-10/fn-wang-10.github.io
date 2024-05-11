---
sidebar_position: 5
---

## 1. 文档

基础命令：`git push`

官方文档地址：[https://git-scm.com/docs/git-push](https://git-scm.com/docs/git-push)

功能：用于将本地分支的更新，推送到远程主机。

语法：`git push <远程主机名> <本地主机名>:<远程分支名>`

## 2. 基础命令

### 2.1 `git push`

将当前分支推送到默认远程主机且与当前分支存在追踪关系的远程分支上。这个命令使用条件是只有一个默认远程主机且当前分支有且只有一个追踪分支，此时主机名和分支名都可以省略。

### 2.2 `git push origin`

将当前分支推送到`origin`分支的对应分支。

### 2.3 `git push origin master`

将本地的`master`分支推送到`origin`主机的`master`分支，如果`master`不存在，则会被新建。

### 2.4 `git push origin master:master`

将本地的`master`分支推送到`origin`主机的`master`分支，如果`master`不存在，则会被新建。是`git push`命令的完全体。

### 2.5 `git push origin :master`

此命令省略了本地分支名，那么久表示删除远程分支，因为这等同于推送一个空的本地分支到远程分支。

### 2.6 `git push origin --delete master`

等同于：`git push origin -d master`

以明确的删除参数`—delete`指定了删除远程`master`分支。

### 2.7 `git push -u origin master`

使用`-u`参数指定一个默认主机。常用于第一次将本地项目推送到远程仓库时。

### 2.8 `git push --all origin`

将所有本地分支都推送到`origin`主机，默认只推送当前分支。

### 2.9 `git push --force origin`

等同于：`git push -f origin`

如果远程主机的版本比本地版本新，推送是`Git`会报错，要求现在本地做`git pull`合并差异，然后再推送，这时，如果你非要推送，可以使用`—force`选项。这样会导致在远程主机产生一个“非直进式”的合并，应该避免这样使用。

### 2.10 `git push origin --tags`

将本地所有`tags`推送到远程`origin`主机。

### 2.11 `git push origin <tag_name>`

将本地特定某个`tag`推送到远程`origin`主机。

### 2.12 `git push origin :<tag_name>`

推送一个空`tag`到远程，即删除一个远程`tag`。

### 2.13 `git push origin HEAD`

将当前分支推送到远程主机的同名分支的简单方法。

### 2.14 `git push origin HEAD:master`

将当前分支推送到远程主机的同名分支的简单方法，这种方式方便推送当前分支，而不用考虑本地分支名称。
