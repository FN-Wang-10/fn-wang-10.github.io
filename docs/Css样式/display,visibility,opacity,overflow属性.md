> 块状元素：div p h1-h5 ul li 独占一行，可以设置宽高 display:block  
> 行内（内联）元素：span a 不独占一行，不可以设置宽高 display:inline  
> 行内块元素：img input textarea selector 不独占一行，可以设置宽高 display:inline-block

## display 元素转换

1. none 让元素彻底消失,不占据空间
2. block(转为块状元素)
3. inline(转为行内元素)
4. inline-block(转为行内块元素)  
   list-item（列表项）
   display:flex  
   display:inline-flex

## overflow 控制溢出容器的内容是否显示

1. visible 显示 默认值
2. hidden 隐藏
3. scroll 出现滚动条
4. auto 判断容器内容是否显示，溢出展示滚动条

## visibility 用于显示隐藏元素，但是保留原来的位置

1. visible 显示 默认值
2. hidden 隐藏  
   visibility：hidden 让元素消失，并占据空间  
   visibility 可以被继承  
   父元素添加 visibility：hidden，子元素添加 visibility：visible，子元素可以出现

## opacity 透明度 0-1

opacity 不可以被继承  
父元素 opacity 为 0，子元素 opacity 为 1，，子元素不会显示

display:none 是让元素彻底消失  
父元素 display：none,子元素 display:block，不会显示的
