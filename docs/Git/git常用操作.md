## 1. `.gitignore`文件用法
| 配置 | 功能 |
| :--: | :--- |
|	`#` | 所有空行或者以#开头的行都会被git忽略|
|	`*.log` | 忽略所有日志文件|
|	`/TODO` | 忽略项目根目录下的TODO文件，防止递归|
|	`.idea/` | 忽略指定的idea目录|
|	`doc/**/*.doc` | 忽略doc目录下的所有doc文件|
|	`!` | 忽略置顶模式以外的文件或目录|

## 2. `Git`全局配置

不同配置文件：

| 文件 | 功能 | 命令|
|  :--: | :--:  | :--: |
|	`/etc/gitconfig` | 对系统所有用户有效 | `git config --system` |
|	`~/.gitconfig` | 对当前用户有效 | `git config --global` |
|	`.git/config` | 当前仓库目录下的仅对该仓库有效||

```bash
# 查看全局配置
git config --list

# 配置全局用户名
git config --global user.name 'aaaaaAndy'

# 配置全局邮箱
git config --global user.email '980381110@qq.com'
```



## 3. 新建项目

### 3.1 本地项目推送到远程

本方式适用于本地已经新建存在了项目，且工作区已经有了修改行为，那么就需要在远程管理平台（如`github`）新建一个空项目。

```bash
# 初始化工程.git目录
git init				

# 添加所有文件到暂存区，也可单独指定文件添加
git add .	

# 提交暂存区文件问本地仓库
git commit -m 'xxx'			

# 添加远程仓库，名为origin，链接为git@github.xxx
git remote add origin git@github.xxx	

# 将本地仓库的文件推送到名为origin的远程仓库的master分支 
git push -u origin master  		
```

### 3.2 克隆远程项目

本方式适合本地没有项目，那么就可以先在远程管理平台（如`github`）新建一个空项目，然后`clone`到本地，此时本地仓库与远程仓库已经建立了连接，可直接提交代码。

```bash
git clone git@github.xxx
```

## 4. 提交代码

```bash
# 添加所有文件到暂存区，也可单独指定文件添加
git add .

# 提交暂存区文件问本地仓库
git commit -m 'xxx'

# 从远程仓库拉下最新代码，并与本地代码合并
git pull

# 将本地仓库同步到远程仓库
git push
```

## 5. 新建与切换分支

```bash
# 查看当前分支
git branch

# 切换分支
git checkout <branch_name>

# 新建并切换到该分支
# checkout是切换，-b是新建
git checkout -b <brandh_name>

# 将新建分支推送远程仓库，建立追踪关系
git push -u origin <branch_name>
```

## 6. 合并代码

如果将`brandh_B`分支代码合并到`brandh_A`分支上

```bash
# 先切换A分支上
git checkout <brandh_A>

# 将B分支代码合并到A分支上
# 此时可能会有冲突，需要先解决冲突才能继续下一步
git merge <branch_B>

# 将本地代码推送到远程分支
git push
```

## 7. 删除分支

### 7.1 删除本地分支

```shell
# 删除本地分支
git branch -d <branch_name>
```

### 7.2 删除远程分支

```bash
# 删除远程分支
git push origin -d <branch_name>
git push origin –-delete <branch_name>
```

## 8. 撤销回滚

### 8.1 只修改未`add`

```shell
# 撤销所有的修改
git checkout .

# 撤销未add的文件修改，红字变无
git checkout -- <filename>
```

### 8.2 已`add`未`commit`

```shell
# 撤销所有的已经add的文件
git reset HEAD .

# 撤销某个文件或文件夹
git reset HEAD <filename>
```

### 8.3 已`commit`未`push`

```bash
# 回退内容到上一次提交
git reset --hard HEAD^

# 回退内容到指定的提交
git reset --hard <commit-id>
```

### 8.4 已`push`

* 方法一：使用`revert`
    `revert`是放弃指定提交的修改，但是会生成一次新的提交，需要填写提交注释，以前的历史记录都在；

```bash
# 撤销前一次提交
git revert HEAD

# 撤销前前一次提交
git revert HEAD^

# 撤销指定的提交
git revert <commit-id>
```

上述命令选一个执行就好，执行完之后还需要推送到远程：

```shell
git push origin master
```

* 方法二：使用`reset`
    `reset`是指将HEAD指针指到指定提交，历史记录中不会出现放弃的提交记录。

```bash
# 回退内容到上一次提交
git reset --hard HEAD^

# 回退内容到指定的提交
git reset --hard <commit-id>
```

上述命令选一个执行就好，执行完之后还需要推送到远程：

```shell
git push origin master -f
```

### 8.5 git reset参数问题

```bash
# 回退一个版本,且会将暂存区的内容和本地已提交的内容全部恢复到未暂存的状态,不影响原来本地文件(未提交的也不受影响)
git reset (-–mixed) HEAD~1

# 回退一个版本,不清空暂存区,将已提交的内容恢复到暂存区,不影响原来本地的文件(未提交的也不受影响)
git reset -–soft HEAD~1

# 回退一个版本,清空暂存区,将已提交的内容的版本恢复到本地,本地的文件也将被恢复的版本替换
git reset -–hard HEAD~1
```
