---
sidebar_position: 2
---

## 1. 文档

基础命令：`git add`

官方文档地址：[https://git-scm.com/docs/git-add](https://git-scm.com/docs/git-add)

功能：将当前工作目录的**新建/修改/删除的文件内容**添加到暂存区，当我们使用`git commit`时，`git`将依据索引库中的内容来进行文件的提交。

## 2. 基础命令

### 2.1 `git add xxx`

此为不加参数的`git add`用法，默认将修改操作的文件和未跟踪新添加的文件添加到`git `暂存区，不包括删除的文件。

-   `git add file1`：只添加`file1`一个文件：
-   `git add file1 file2`：添加`file1`和`file2`两个文件；
-   `git add *.html`：使用通配符，添加所有后缀名为`html`的文件；
-   `git add dir1`：添加目录`dir1`下的所有文件；
-   `git add dir1/git-*.sh`：添加`dir1`目录下所有`git-`开头的`sh`文件；
-   `git add .`：默认添加所有文件，注意是所有文件，包括以`.`开头的文件；
-   `git add *`：默认添加所有文件，但是以`.`开头的文件除外。

### 2.2 `git add -u`

以上命令等同于：`git add --update`。

该命令表示将修改的文件和删除的文件添加到`git`暂存区，不包括新增加的文件。注意这些被删除的文件提交到本地仓库再推送到远程仓库后，文件就会从`git`系统中消失。

### 2.3 `git add -A`

以上命令等同于：`git add --all`。

该命令表示将所有已跟踪的修改的文件、新增的文件、已删除的文件添加到暂存区。

### 2.4 `git add -i`

以上命令等同于：`git add --interactive`。

进入一个可以进行交互的`shell`界面，如下所示：

```shell
~/workspace/github/git-study(dev ✔) git add -i

*** Commands ***
  1: status	  2: update	  3: revert	  4: add untracked
  5: patch	  6: diff	  7: quit	  8: help
What now>
```

选择对应的数字或单词的首字母即可执行对应的操作。
