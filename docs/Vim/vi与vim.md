<!-- ---
slug: /vim
sidebar_position: 1
tags:
  - vi
  - vim
---
## 一、什么是vi

**vi**是一种[计算机](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA)[文本编辑器](https://zh.wikipedia.org/wiki/%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8)，由美国计算机科学家[比尔·乔伊](https://zh.wikipedia.org/wiki/%E6%AF%94%E5%B0%94%C2%B7%E4%B9%94%E4%BC%8A)（Bill Joy）完成编写，并于1976年以[BSD协议](https://zh.wikipedia.org/wiki/BSD)授权发布。

vi是一种模式编辑器。不同的按钮和键击可以更改不同的“模式”。在“插入模式”下，输入的文本会直接被插入到文档；当按下“[退出键](https://zh.wikipedia.org/wiki/%E9%80%80%E5%87%BA%E9%94%AE)”，“插入模式”就会更改为“命令模式”，并且光标的移动和功能的编辑都由字母来响应，例如：“j”用来移动光标到下一行；“k”用来移动光标到上一行，“x”可以删除当前光标处的字符，“i”可以返回到“插入模式”（也可以使用方向键）。在“命令模式”下，敲入的键（字母）并不会插入到文档，这给新接触vi的用户带来混乱。

在“命令模式”下，多重文本编辑操作是由一组键（字母）来执行，而不是同时按下`<Alt>`、`<Ctrl>`和其他特殊键来完成。更多复杂的编辑操作可以使用多重功能基元的组合，比如说“dw”用来删除一个单词，“c2fa”可以更改当前的光标处中“a”之前的文本。这就是说：对于熟练的vi用户可以更快的操作，因为双手就可以不必离开键盘。

早期的版本中，vi并没有指示出当前的模式，用户必须按下“退出键”来确认编辑器返回“命令模式”（会有声音提示）。当前的vi版本可以在“状态条”中（或用图形显示）。最新的版本中，用户可以在“终端”中设置并使用除主键盘以外的其他键，例如：PgUp，PgDn，Home，End和Del键。图形化界面的vi（如[gvim](https://zh.wikipedia.org/wiki/Gvim)）可以很好的支持鼠标和菜单。

直到[Emacs](https://zh.wikipedia.org/wiki/Emacs)的出现（1984年以后），vi几乎是所有“[黑客](https://zh.wikipedia.org/wiki/%E9%BB%91%E5%AE%A2)”所使用的标准[UNIX](https://zh.wikipedia.org/wiki/UNIX)编辑器。从2006年开始，作为“[单一UNIX规范](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%B8%80UNIX%E8%A7%84%E8%8C%83)”（Single UNIX Specification）的一部分，vi或vi的一种变形版本一定会在UNIX中找到。

直到现在，vi仍然被广泛的使用，并且赢得1991年在[USENET](https://zh.wikipedia.org/wiki/USENET)的票选；vi比[Emacs](https://zh.wikipedia.org/wiki/Emacs)的Bulkier版本启动的更快，并且占内存更少。因此，甚至Emacs的追随者又重新使用vi，并且作为邮件编辑器和其他小型编辑工作的首选。1999年时，著名的[欧莱礼出版社](https://zh.wikipedia.org/wiki/%E6%AD%90%E8%90%8A%E7%A6%AE)（O'reilly）卖出了比emacs更多的vi参考书。

当救急软盘作为恢复硬盘崩溃的介质以来，vi通常被用户选择，因为一张软盘正好存储下vi，并且几乎所有人都可以很轻松的使用vi。

## 二、什么是vim

**Vim**是从[vi](https://zh.wikipedia.org/wiki/Vi)发展出来的一个[文本编辑器](https://zh.wikipedia.org/wiki/%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8)。其代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。和[Emacs](https://zh.wikipedia.org/wiki/Emacs)并列成为[类Unix系统](https://zh.wikipedia.org/wiki/%E7%B1%BBUnix%E7%B3%BB%E7%BB%9F)用户最喜欢的编辑器。

Vim的第一个版本由[布莱姆·米勒](https://zh.wikipedia.org/wiki/%E5%B8%83%E8%90%8A%E5%A7%86%C2%B7%E7%B1%B3%E5%8B%92)在1991年发布。最初的简称是**V**i **IM**itation，随着功能的不断增加，正式名称改成了**V**i **IM**proved。现在是在[开放源代码](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%94%BE%E6%BA%90%E4%BB%A3%E7%A0%81)方式下发行的[自由软件](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E8%BD%AF%E4%BB%B6)。

对于大多数用户来说，Vim有着一个比较陡峭的[学习曲线](https://zh.wikipedia.org/wiki/%E7%BB%8F%E9%AA%8C%E5%AD%A6%E4%B9%A0%E6%9B%B2%E7%BA%BF)。这意味着开始学习的时候可能会进展缓慢，但是一旦掌握一些基本操作之后，能大幅度提高编辑效率。为了帮助学习，Vim为初学者准备了Vim教学。通常可以在Unix系统命令行下输入"`vimtutor`"或者点击Windows系统桌面上的Vim教学图标进入。在Vim用户手册中更加详细的描述了Vim的基础和进阶功能。可以在Vim中输入"`:help user-manual`"进入用户手册。手册除了原始的英文版本之外，也被志愿者翻译成了各国文字，其中包括中文。

新用户也应该学习Vim的帮助系统。可以在Vim中输入不带参数的"help"来阅读主帮助文件。

## 三、vi与vim区别

`Vim` 是从 `vi` 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富。

简单的来说， `vi` 是老式的字处理器，虽然功能已经很齐全了，但是还是有可以进步的地方。 `vim` 是 `vi` 的升级版，它不仅兼容 `vi` 的所有指令，而且还有一些新的特性在里面。

所有的 `Unix Like` 系统都会内建 `vi` 文书编辑器，其他的文书编辑器则不一定会存在。

`vim`对`vi`的升级主要在以下几个方面：

1. ***多级撤销***：在`vi`里，按`u`只能撤销上次命令，而在`vim`里可以无限制的撤销；
2. ***易用性***：`vi`只能运行在`unix`中，而`vim`不仅可以运行在`unix`，还可以运行在`windows`、`mac`等操作平台；
3. ***语法高亮***：`vim`可以用不同的颜色来高亮你的代码；
4. ***可视化操作***：`vim`不仅可以在终端运行，也可以运行于`x window`、 `mac os`、 `windows`；
5. ***对vi的完全兼容***：几乎所有的情况，你可以把`vim`当成`vi`来使用；
6. ***模式增加***：`vi`只有三种模式：命令行模式、文本输入模式、末行模式，`vim`除了实现了上述三种模式，还增加了可视模式、替换模式等等；

## 四、vim键盘图

![vim中文键位图](https://www.runoob.com/wp-content/uploads/2015/10/vi-vim-cheat-sheet-sch.gif)

vim中文键位图

## 参考文档：

- [welcome home : vim online](https://www.vim.org/)
- [vi - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/Vi)
- [Vim - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/Vim)-  -->
