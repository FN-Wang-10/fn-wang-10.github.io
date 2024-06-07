````javascript
var url = 'https://www.baidu.com?a=1&b=2&c=3&d=4';
    console.log(url.indexOf('?')); //21
    console.log(url.substring(url.indexOf('?'))); //?a=1&b=2&c=3&d=4
    console.log(url.substring(url.indexOf('?') + 1)); //a=1&b=2&c=3&d=4
    url = url.substring(url.indexOf('?') + 1); //a=1&b=2&c=3&d=4
    1.1.普通方式
    var arr = url.split('&'); //['a=1', 'b=2', 'c=3', 'd=4']
    var obj = {};
    arr.forEach(function(value) {
        var newarr = value.split('='); //将上面的一个数组变成四个数组
        //数组的第一项是对象的属性，数组的第二项就是对象的值
        obj[newarr[0]] = newarr[1];
    });
    console.log(obj); //{a:1,b:2,c:3,d:4}
    1.2.正则实现
    console.log(eval('({' + url.replace(/&/g, ',').replace(/=/g, ':') + '})'));
    {a: 1, b: 2, c: 3, d: 4}
    ```
````
