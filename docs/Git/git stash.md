---
sidebar_position: 10
---

我们经常会遇到这样一种情况, 当我们做到需求做到一半,有人反馈了一个bug,这时我们不得不切换到另一个分支上去解决这个bug,而我们这一期的需求还没有做完,又不想提交,于是我们就设想有这样一个功能, 可以把我们的工作进度临时保存在本地,等我们解决完bug回来再取出这期需求,`git stash`就是帮我们做这样事情的一个命令 

## 1. 文档

基础命令：`git stash`

官方文档地址：[https://git-scm.com/docs/git-stash](https://git-scm.com/docs/git-stash)

功能：保存工作目录的更改到本地缓存中，同时将工作目录恢复到`git`最新状态。

## 2. 基础命令

### 2.1 `git stash`

#### 1. 功能

把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录，但是保存的`message`很长，不方便区分，建议使用`git stash save 'xxx'`。

默认情况下，`git stash`会缓存下列文件：

-   添加到暂存区的修改（staged changes）
-   Git跟踪的但并未添加到暂存区的修改（unstaged changes）

但不会缓存一下文件：

-   在工作目录中新的文件（untracked files）
-   被忽略的文件（ignored files）

#### 2. `-a --all`

`git stash`命令提供了参数用于缓存上面两种类型的文件。使用`-u`或者`--include-untracked`可以stash untracked文件。使用`-a`或者`--all`命令可以stash当前目录下的所有修改。

#### 3. `--keep-index`

常规 `git stash` 的一个限制是它会一下暂存所有的文件。有时，只备份某些文件更为方便，让另外一些与代码库保持一致。一个非常有用的技巧，用来备份部分文件：

1.  `add` 那些你不想备份的文件（例如： `git add file1.js, file2.js`）
2.  调用 `git stash –-keep-index`。只会备份那些没有被`add`的文件。
3.  调用 `git reset` 取消已经`add`的文件的备份，继续自己的工作。

#### 4. 示例

如下图所示：

```shell
~/workspace/github/git-study(dev ✗) git status
On branch dev
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")

~/workspace/github/git-study(dev ✗) git stash
Saved working directory and index state WIP on dev: f9651a1 update a.txt

~/workspace/github/git-study(dev ✔) git status
On branch dev
nothing to commit, working tree clean
~/workspace/github/git-study(dev ✔)

~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: WIP on dev: f9651a1 update a.txt
```

### 2.2 `git stash save 'xxx'`

保存当前工作内容，且可以指定保存的`message`。

```shell
~/workspace/github/git-study(dev ✗) git status
On branch dev
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")

~/workspace/github/git-study(dev ✗) git stash save 'update c.txt'
Saved working directory and index state On dev: update c.txt

~/workspace/github/git-study(dev ✔) git status
On branch dev
nothing to commit, working tree clean

~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: update c.txt
```

### 2.3 `git stash push`

与`git stash save`类似，是`git stash save`的替代品。

`git stash push`与`git stash save`主要有两点不同：

1.  `git stash push`接收参数模式的`message`，而`git stash save`接收非参数模式的`message`；
2.  `git stash push`可以接受文件列表作为参数，用来具体选择暂存哪些文件，跳过哪些文件，而`git stash save`不行。

```shell
~/workspace/github/git-study(dev ✗) git stash push -m 'test'
~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: test
```

### 2.4 `git stash list`

显示`git`栈内所有备份，可以利用这个列表来决定从从哪个地方恢复。

```shell
~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: update c.txt
```

### 2.5 `git stash pop`

将git栈中保存的最新一条修改记录弹出，即恢复之前的工作装填，并删除git栈中对应记录。

```shell
~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: update c.txt

~/workspace/github/git-study(dev ✔) git stash pop
On branch dev
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (7bd48f3314c6e4f492d6047d167c539b49e52871)

~/workspace/github/git-study(dev ✗) git stash list
~/workspace/github/git-study(dev ✗)
```

### 2.6 `git stash apply`

-   `git stash apply`：将`git`栈中保存的一条修改记录弹出，但不删除`git`栈中对应记录；
-   `git stash apply stash@{1}`：将`git`栈中对应`id`为`stash@{1}`的记录应用到工作区，但不删除`git`栈中的记录。

```shell
~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: update c.txt

~/workspace/github/git-study(dev ✔) git stash apply
On branch dev
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")

~/workspace/github/git-study(dev ✗) git stash list
stash@{0}: On dev: update c.txt
```

### 2.7 `git stash drop`

-   `git stash drop`：删除最新的一条记录；
-   `git stash drop stash@{1}`：删除对应的记录。

```shell
~/workspace/github/git-study(dev ✗) git stash list
stash@{0}: On dev: update c.txt

~/workspace/github/git-study(dev ✗) git stash drop
Dropped refs/stash@{0} (f41c1ded0443d0af7d832011823967e9ccf8153e)

~/workspace/github/git-study(dev ✗) git stash list
~/workspace/github/git-study(dev ✗)
```

### 2.8 `git stash show`

-   `git stash show`：显示做了哪些改动，默认`show`第一个存储；
-   `git stash show stash@{1}` ：显示`id`为`1`的记录做了哪些改动。
-   `git stash show stash@{1} -p`  ：显示`id`为`1`的记录的全部改动。

```shell
~/workspace/github/git-study(dev ✗) git stash show
 c.txt | 1 +
 1 file changed, 1 insertion(+)
```

```shell
~/workspace/github/git-study(dev ✔) git stash show -p
diff --git a/c.txt b/c.txt
index b2a7546..5669b2d 100644
--- a/c.txt
+++ b/c.txt
@@ -1 +1,2 @@
 ccc
+stash
```

### 2.9 `git stash clear`

清空`git`栈。

```shell
~/workspace/github/git-study(dev ✔) git stash list
stash@{0}: On dev: update c.txt

~/workspace/github/git-study(dev ✔) git stash clear

~/workspace/github/git-study(dev ✔) git stash list
~/workspace/github/git-study(dev ✔)

~/workspace/github/git-study(dev ✔) git status
On branch dev
nothing to commit, working tree clean
```

### 2.10 `git stash branch`

从`stash`创建分支。

如果`stash`储藏了很多工作，而我们的工作目录已经有了很大范围的修改时，当我们重新应用工作时很可能会发生冲突，那么我们就必须去解决这些冲突。如果你想用更方便的方法来重新检验你储藏的变更，你可以运行 git stash branch，这会创建一个新的分支，检出你储藏工作时的所处的提交，重新应用你的工作，如果成功，将会丢弃储藏。

```shell
~/workspace/github/git-study(dev ✔) git stash branch dev_ccc
Switched to a new branch 'dev_ccc'
On branch dev_ccc
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (15466def3ef76efb1190824d11b96439435e26d8)

~/workspace/github/git-study(dev_ccc ✗) git status
On branch dev_ccc
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   c.txt

no changes added to commit (use "git add" and/or "git commit -a")

~/workspace/github/git-study(dev_ccc ✗) git checkout dev
M	c.txt
Switched to branch 'dev'

~/workspace/github/git-study(dev ✗) git stash list
~/workspace/github/git-study(dev ✗)
```



<!-- more -->
