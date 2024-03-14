---
title: CSS都有哪些滤镜
tags: [css, 滤镜]
categories: css 
date: 2018-08-28 14:02:06
---

![css-filter](https://raw.githubusercontent.com/aaaaaAndy/picture/main/images/20210129114930.png)

css滤镜（filter）定义了元素的可视效果，如：模糊和饱和度。

[npm滤镜库](https://www.npmjs.com/package/cssgram)

## 一、基本用法

修改所有的图片为黑白（灰度100%）

css语法

```css
img {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
```



JavaScript语法

```javascript
document.getElementById('grayImg').style.WebkitFilter = "grayscale(100%)";                                     
```

## 二、常用参数

Filter | 描述
-|-
none | 默认值，没有效果
blur(%) | 高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊。如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。 
brightness(%) | 给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1 
contrast(%) | 调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。 
drop-shadow(*h-shadow v-shadow blur spread color*) | 给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。 
grayscale | 将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0； 
hue-rotate(*deg*) | 给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。 
invert(*%*) | 反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。 
opacity(*%*) | 转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。 
saturate(*%*) | 转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。 
sepia(*%*) | 将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0； 
url() | URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。 
inherit | 从父元素继承该属性 

## 三、应用

### 1. 特殊日期给网站设置灰色主题

```css
html {
	-webkit-filter: grayscale(100%); /* webkit */
	-moz-filter: grayscale(100%); /*firefox*/
	-ms-filter: grayscale(100%); /*ie9*/
	-o-filter: grayscale(100%); /*opera*/
	filter: grayscale(100%);
	filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); 
	filter:gray; /*ie9- */
}
```


### 2. drop-shadow设置更真实的阴影

```css
div {
  -webkit-filter: drop-shadow(0px 0px 4px gray); /* Chrome, Safari, Opera */
   filter: drop-shadow(0px 0px 4px gray);
}
```

drop-shadow更像自然界的真实阴影，可以理解为立体阴影，它只有外阴影，且不能叠加；box-shadow，可理解为单边阴影，若想实现四周阴影需要用叠加方式处理。

<!-- more -->

