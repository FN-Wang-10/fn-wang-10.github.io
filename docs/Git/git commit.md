---
sidebar_position: 3
---

## 1. 文档

基础命令：`git commit`

官方文档地址：[https://git-scm.com/docs/git-commit](https://git-scm.com/docs/git-commit)

功能：主要将暂存区的改动提交到本地版本库。

过程：每次`git commit`过程都会在本地生成一个40位的哈希值，这个哈希值也叫做`commit-id`，`commit-id`相当于一个快照，在版本回退，查看`log`日志的时候很有用。

## 2. 基础命令

### 2.1 `git commit -m`

这是最常见的用法，`-m`参数表示可以直接输入后面的`message`，如果不加`-m`参数，会直接打开一个`vim`编辑器来让你输入这个`message`。

```shell
git commit -m 'xxx'
```

### 2.2 `git commit --amend`

追加提交：将当前代码改动合并到上一个`commit`中，但是不会增加新的提交记录。该操作会改写`git`历史记录，慎用。

```shell
~/workspace/github/git-study(master ✔) git log
commit d2d59b50dd0bf19be050348ed954c5869a0a136c (HEAD -> master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:17:30 2021 +0800

    init
    
~/workspace/github/git-study(master ✗) git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   a.txt

no changes added to commit (use "git add" and/or "git commit -a")

~/workspace/github/git-study(master ✗) git commit --amend -m 'update a.txt'
[master e43d0a6] update a.txt
 Date: Thu Jun 3 16:17:30 2021 +0800
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
 
~/workspace/github/git-study(master ✗) git log
commit e43d0a6132a003375449d1d3114f502743df5375 (HEAD -> master)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:17:30 2021 +0800

    update a.txt
```

可以看到，原来`message`为`init`的`commit`被改写成了`update a.txt`。但是没有新增`commit`。

### 2.3 `git commit -a`

等价于：`git commit --all`

告诉`git`自动暂存所有已修改和删除的文件，适用于没有执行`git add`命令时，注意：这里不会自动暂存未跟踪的文件和忽略的文件。

```shell
~/workspace/github/git-study(dev ✗) git commit -m 'update a.txt'
On branch dev
Changes not staged for commit:
	modified:   a.txt

no changes added to commit

~/workspace/github/git-study(dev ✗) git commit -m 'update a.txt' -a
[dev cb4292f] update a.txt
 1 file changed, 1 deletion(-)

~/workspace/github/git-study(dev ✔) git log
commit cb4292f6dc0c475b23a121160b566fe25097b1ba (HEAD -> dev)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:09:06 2021 +0800

    update a.txt
```

