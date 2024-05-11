---
sidebar_position: 9
---

> > 像其他版本控制系统（VCS）一样，Git 可以给仓库历史中的某一个提交打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（ `v1.0` 、 `v2.0` 等等）。

## 1. 文档

基础命令：`git tag`

官方文档地址：[https://git-scm.com/docs/git-tag](https://git-scm.com/docs/git-tag)

功能：创建、列出、删除或验证给某个`commit`打的标签。

## 2. 类型

## 标签分类

`Git`支持两种标签: 轻量标签(`lightweight`)和附注标签(`annotated`).

### 2.1 轻量标签

***轻量标签***很像一个不会改变的分支——它只是某个特定提交的饮用.

```bash
// 创建一个轻量标签
git tag xxx					
```

### 2.2 附注标签

***附注标签***是存储在`Git`数据库中的一个完整对象,他们是可以被校验的,其中包含打标签者的名字,电子邮件地址,日期时间,此外还有一个标签信息.

-   `-a`：标签名
-   `-m`：标签说明

```bash
// 创建一个附注标签
git tag -a xxx -m xxxxxx		
```

## 3. 基础命令

### 3.1 查看所有标签

#### 3.1.1 查看本地所有标签

```shell
git tag

git tag -l
```

#### 3.1.2 过滤查看标签列表

```shell
# 过滤展示以v1开头的标签
git tag -l "v1*"
```

#### 3.1.3 查看远程所有标签

```shell
git ls-remote --tags origin
```

### 3.2 `git tag xxx`

打标签，打一个***轻量标签***。标签总是跟某个`commit`挂钩，打标签时默认是打在最新提交的`commit`上。

```shell
~/workspace/github/git-study(master ✔) git tag v1.0
```

如果忘记了打标签，此时可以指定给某个特定的`commit`打标签，方法是先找到需要打标签的`commit-id`：

```shell
~/workspace/github/git-study(master ✔) git tag v1.0 e43d0a
```

打完标签后在`.git/refs/tags`下会出现对应的标签，查看标签的内容可以知道标签其实就是绑定了一个`commit-id`：

```shell
~/workspace/github/git-study(master ✔) cat .git/refs/tags/v1.0
e43d0a6132a003375449d1d3114f502743df5375

~/workspace/github/git-study(master ✔) git cat-file -t e43d0a6132a003375449d1d3114f502743df5375
commit

~/workspace/github/git-study(master ✔) git cat-file -p e43d0a6132a003375449d1d3114f502743df5375
tree 5141acf70354bf1b033e468457aae1a424c3ff98
author AndyWang <wangyuanwenqi@outlook.com> 1622708250 +0800
committer AndyWang <wangyuanwenqi@outlook.com> 1622708315 +0800

update a.txt
```

也可以通过`git show`命令查看对应的标签内容：

````shell
~/workspace/github/git-study(master ✔) git show v1.0
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:17:30 2021 +0800

    update a.txt

diff --git a/a.txt b/a.txt
new file mode 100644
index 0000000..6857d14
--- /dev/null
+++ b/a.txt
@@ -0,0 +1 @@
+aaandy
````



### 3.3 `git tag -a -m`

创建一个带有说明的标签，也就是***附注标签***，`-a`指定标签名，`-m`指定说明文字。

```shell
~/workspace/github/git-study(master ✔) git tag -a v1.1 -m 'v1.1 description'

~/workspace/github/git-study(master ✔) git show v1.1
tag v1.1
Tagger: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 17:24:24 2021 +0800

v1.1 description

commit e43d0a6132a003375449d1d3114f502743df5375 (HEAD -> master, tag: v1.1, tag: v1.0)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:17:30 2021 +0800

    update a.txt

diff --git a/a.txt b/a.txt
new file mode 100644
index 0000000..6857d14
--- /dev/null
+++ b/a.txt
@@ -0,0 +1 @@
+aaandy
```

查看`.git/refs/tags/`目录会发现多了一个`v1.1`标签文件，查看其内容及其内容的类型为：

```shell
~/workspace/github/git-study(e43d0a6 ✔) cat .git/refs/tags/v1.1
71830b8b2cc24fa3b079e223d71949c43aec46e5

~/workspace/github/git-study(e43d0a6 ✔) git cat-file -t 71830b8b2cc24fa3b079e223d71949c43aec46e5
tag

~/workspace/github/git-study(e43d0a6 ✔) git cat-file -p 71830b8b2cc24fa3b079e223d71949c43aec46e5
object e43d0a6132a003375449d1d3114f502743df5375
type commit
tag v1.1
tagger AndyWang <wangyuanwenqi@outlook.com> 1622712264 +0800

v1.1 description
```

可以看出，`id`为`71830b`的`object`是一种`tag`类型的`object`，这是`git`中一种新的`object`。

### 3.4 查看标签详情

#### 3.4.1 `git show <tagname>`

查看本地某个`tag`的详细信息.

```shell
~/workspace/github/git-study(master ✔) git show v1.1
tag v1.1
Tagger: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 17:24:24 2021 +0800

v1.1 description

commit e43d0a6132a003375449d1d3114f502743df5375 (HEAD -> master, tag: v1.1)
Author: AndyWang <wangyuanwenqi@outlook.com>
Date:   Thu Jun 3 16:17:30 2021 +0800

    update a.txt

diff --git a/a.txt b/a.txt
new file mode 100644
index 0000000..6857d14
--- /dev/null
+++ b/a.txt
@@ -0,0 +1 @@
+aaandy
```

#### 3.4.2 `git cat-file -p <commit-id>`

这种方案并不是官方推荐的，只是我在学习`git tag`原理时发现的一种方案：

首先当我们打了一个标签后，会在当前工程的`.git/refs/tags/`下新增一个标签文件：

```shell
~/workspace/github/git-study(e43d0a6 ✔) ls .git/refs/tags
v1.1
```

然后我们查看这个文件的内容：

```shell
~/workspace/github/git-study(e43d0a6 ✔) cat .git/refs/tags/v1.1
e43d0a6132a003375449d1d3114f502743df5375
```

可以看出这一串正好是40位的哈希编码，盲猜这应该是`git`中的一种`object`，查看其类型和内容：

```shell
~/workspace/github/git-study(e43d0a6 ✔) git cat-file -t e43d0a6132a003375449d1d3114f502743df5375
commit
~/workspace/github/git-study(e43d0a6 ✔) git cat-file -p e43d0a6132a003375449d1d3114f502743df5375
tree 5141acf70354bf1b033e468457aae1a424c3ff98
author AndyWang <wangyuanwenqi@outlook.com> 1622708250 +0800
committer AndyWang <wangyuanwenqi@outlook.com> 1622708315 +0800

update a.txt
```

由此可以看出，所谓`tag`，其实只是保存了一个`commit`类型的`object`,它是一种指针的形式，指向某个特定的`commit-id`，这里就能联想到当我们查看某个`tag`对应的代码时，其实就是查看的对应`commit-id`下的代码。

需要注意的是，当我们以`git cat-file -t <commit-id>`查看类型时，会存在两种情况：

1.  `commit`：当我们打了一个轻量标签时类型就是`commit`；
2.  `tag`：当我们打了一个附注标签时类型就是`tag`，这是一种新的`object`。

但是其原理都是相同的，都是一个指向`<commit-id>`的指针。

### 3.5 推送标签

打了的标签一般都是保存在本地，可在`.git/refs/tags/`下查看，他们不会自动推送到远程，如果要将本地标签推送到远程可以执行以下命令：

#### 1. 推送一个标签

以下命令只会推送一个名为`xxx`的标签到远程。

```shell
git push origin xxx
```

#### 2. 推送所有标签

以下命令会将本地所有标签都推送到远程。

```shell
git push --tags
git push origin --tags
```

### 3.6 删除标签

删除标签分为两种情况：

#### 1. 标签只存在本地

当标签只在本地保存是，只需要执行`git tag -d`即可删除；

```shell
~/workspace/github/git-study(master ✔) git tag -d v1.0
Deleted tag 'v1.0' (was e43d0a6)
```

#### 2. 本地和远程都有标签

当标签也存在于远程时，还要删除远程的标签。

```shell
// 将冒号前面的空值推送到远程标签名,从而高效的删除它
git push origin :refs/tags/xxx 

// 另一种方式删除远程标签
git push opigin --delete xxx
```

### 3.7 检出标签

#### 3.7.1 `git checkout <tagname>`

如果你想查看某个标签指向的文件版本，可以使用`git checkout <tagname>`命令。`Git`会检出指定版本，大事并没有在分支内，这叫做一个`detached HEAD`，会使仓库处于**分离头指针**状态，这意味着`HEAD`指向一个提交，而不是一个符号引用。

```shell
~/workspace/github/git-study(master ✔) git checkout v1.1
Note: switching to 'v1.1'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at e43d0a6 update a.txt
~/workspace/github/git-study(e43d0a6 ✔)
```

可以看到最后一行`HEAD`指向`e43d0a6`这个`commie-id`，而不是`master`分支。

需要注意的是：在`detached HEAD`状态下，如果做了某些更改并提交它们，标签并不会发生变化，但你的提交将不属于任何分支，并且无法访问，除非确认地提交哈希。因此当你需要在代码上进行一些更改时，建议你采用下面的方案：新建一个基于`tag`的分支。

#### 3.7.2 `git checkout -b <branchname> <tagname>`

是当你真的想要检出一个标签上的代码，并需要进行一些改动时，可以通过创建一个基于这个标签的分支来查看。

因为`tag`本身指向的就是一个`commit`，所以和根据`commit-id`检出分支是一个道理。还有一点需要注意，当我们根据标签检出代码后，如果原来分支的代码发生了改变，`tag`检出的代码是不会变的，这是因为`tag`标记的`commit-id`还是同一个，这个标记是不变的。

格式为：`git checkout -b <branch_name> <tag_name>`

```shell
~/workspace/github/git-study(master ✔) git checkout -b branch_v1.0 v1.0
Switched to a new branch 'branch_v1.0'
```
