---
title: charles系统证书安装
date: 2021-02-01 10:24:45
tags: 
  - Charles
  - 证书
  - 系统证书
categories: Charles
slug: /charles
---

:::tip 注意
Android7.0以上的系统安装完证书后，抓包时可能会遇到显示unknown的状况。这是因为我们安装的证书为用户证书，而Android7.0 之后默认不再信任用户证书，也就是说对基于 SDK24 及以上的APP来说，即使你在手机上安装了抓包工具的证书也无法抓取 https 请求 。所以需要抓包软件的证书安装成系统证书。
:::

### 1. 手机要`Root`

需要先获取`android`手机的`Root`权限，不`Root`是无法安装为系统证书的。这里用的是魅族pro7。

### 2. 下载并重命名证书

在 http://chls.pro/ssl 下载手机证书(该手机证书可通过手机下载，然后再拷贝到电脑上)，将下载好的 .pem 文件拷贝到电脑上，并用命令行执行找到该文件，执行以下命令:

```shell
openssl x509 -subject_hash_old -in xxx.pem
```



![adbhash](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201102608.png)


由执行结果可以得到一个 `ab3d948a` 的 hash 值，将刚才下载的 .pem 文件改为 `ab3d948a.0` 即可，并将该证书发送到安卓设备。

后缀名的数字是为了防止文件名冲突的，比如如果两个证书算出的Hash值是一样的话，那么一个证书的后缀名数字可以设置成0，而另一个证书的后缀名数字可以设置成1

### 3. 移动证书到安卓系统

使用数据线将手机与电脑连接，手机打开 usb 调试，打开pc的命令行，按顺序执行以下操作

```shell
adb devices  # 检测是否有安卓设备连接
```

![adbdevices](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201102925.png)

```shell
adb shell  # shell连接安卓系统
su  # 获取root权限，当你看到提示符由 $ 变为 # 的时候，说明权限获取成功
mount -o rw,remount /system	 # 修改system文件夹的读写权限
mv /sdcard/ab3d948a.0 /system/etc/security/cacerts/  # 复制ab3d948a.0证书文件到cacerts目录下
```

![adbls](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210201102952.png)

### 4. 设置权限

```shell
chmod 644 /system/etc/security/cacerts/ab3d948a.0  # 设置权限
reboot  ## 重启
```

### 5. 愉快玩耍

最后就可以开心心地抓包啦！！！

