### 缓存组件(`<keep-alive />`)

vue 提供的组件,keep-alive 是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建

动态组件（问题）  
我刚进来时，vue 只渲染显示的组件，其他的组件不会渲染  
当我点击某个组件时，它会对这个组件进行渲染，当我离开的时候，它会自动销毁,里面的定时器还在运行
当我再次点击上一个组件的时候，这个组件又重新渲染，里面的数据又重新加载，又开了一个定时器

解决  
vue 提供了一个`<keep-alive></keep-alive>`组件(keep-alive 的意思是保持生机)，也叫缓存组件  
当组件进行切换的时候，不会被销毁和重新创建

应用（猫眼电影手机端）  
我现在点击一个页面查看页面内容，会有数据请请求，并且我现在把页面往下滚动了
当我切换到另一个页面时，另一个页面在做数据请求，上一个页面组件会被销毁，再次点击的时候再次创建  
我现在又回到第一个页面，可以不用去数据请求数据（组件不会被销毁重新创建），并且还保持在我上一次查看的地方（滚动的地方），这样可以提高用户体验感  
前提条件是需要使用`<keep-alive></keep-alive>`缓存组件，当组件进行切换的时候，不会被销毁和重新创建

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <!-- 这种方法比较蠢 -->
        <!-- <button @click="show=1">按钮1</button>
        <button @click="show=2">按钮2</button>
        <button @click="show=3">按钮3</button>
        <child1 v-if="show===1"></child1>
        <child2 v-if="show===2"></child2>
        <child3 v-if="show===3"></child3> -->

        <hr>

        <button @click="show='child1'">按钮1</button>
        <button @click="show='child2'">按钮2</button>
        <button @click="show='child3'">按钮3</button>

        <!-- 动态组件（问题）
        我刚进来时，vue只渲染显示的组件，其他的组件不会渲染
        当我点击某个组件时，它会对这个组件进行渲染，当我离开的时候，它会自动销毁,里面的定时器还在运行
        当我再次点击上一个组件的时候，这个组件又重新渲染，里面的数据又重新加载，又开了一个定时器

        解决
        vue提供了一个<keep-alive></keep-alive>组件(keep-alive的意思是保持生机)，也叫缓存组件
        当组件进行切换的时候，不会被销毁和重新创建
            -->

        <!-- 应用（猫眼电影手机端）
        我现在点击一个页面查看页面内容，会有数据请请求，并且我现在把页面往下滚动了
        当我切换到另一个页面时，另一个页面在做数据请求，上一个页面组件会被销毁，再次点击的时候再次创建
        我现在又回到第一个页面，可以不用去数据请求数据（组件不会被销毁重新创建），并且还保持在我上一次查看的地方（滚动的地方），这样可以提高用户体验感
        前提条件是需要使用<keep-alive></keep-alive>缓存组件，当组件进行切换的时候，不会被销毁和重新创建 -->


        <!-- vue提供的组件, 需要配合is属性, is里面写的是组件名称 -->
        <!-- keep-alive是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建 -->
        <keep-alive>
            <component :is="show"></component>
        </keep-alive>

    </div>

    <script src="../../Vue.js"></script>
    <script>
        Vue.component('child1', {
            template: `
                <div>child1组件</div>
            `,
            mounted() {
                console.log('child2 mounted');
            },
            beforeDestroy() {
                console.log('child2 destroy');
            }
        });
        Vue.component('child2', {
            template: `
                <div>child2组件</div>
            `,
        });



        Vue.component('child3', {
            data() {
                return {
                    count: 0,
                }
            },
            template: `
                <div>child3组件-{{ count }}</div>
            `,

            mounted() {
                console.log('child3 mounted');
                setInterval(() => {
                    this.count++;
                }, 1000);
            },
            beforeDestroy() {
                console.log('child3 destroy');
            }
        });
        new Vue({
            el: '#app',
            // vue是以组件为单位进行开发的
            // 组件一般按功能进行划分，最少一个功能
            // 根组件里面的data选项对象也可以写成函数返回对象的形式
            data() {
                return {
                    // show: 1,
                    show: "child1",
                }
            }
        });
    </script>
</body>

</html>
```

### 缓存组件(activated,deactivated)

解决上面的问题（切换的时候关闭定时器，再次回来的时候开启定时器）  
这里需要添加两个生命周期钩子 activated 和 deactivated  
activated 钩子：被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。  
deactivated 钩子：被 keep-alive 缓存的组件失活时调用。该钩子在服务器端渲染期间不被调用

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <!-- 这种方法比较蠢 -->
        <!-- <button @click="show=1">按钮1</button>
        <button @click="show=2">按钮2</button>
        <button @click="show=3">按钮3</button>
        <child1 v-if="show===1"></child1>
        <child2 v-if="show===2"></child2>
        <child3 v-if="show===3"></child3> -->

        <hr>

        <button @click="show='child1'">按钮1</button>
        <button @click="show='child2'">按钮2</button>
        <button @click="show='child3'">按钮3</button>

        <!-- 动态组件（问题）
        我刚进来时，vue只渲染显示的组件，其他的组件不会渲染
        当我点击某个组件时，它会对这个组件进行渲染，当我离开的时候，它会自动销毁,里面的定时器还在运行
        当我再次点击上一个组件的时候，这个组件又重新渲染，里面的数据又重新加载，又开了一个定时器

        解决
        vue提供了一个<keep-alive></keep-alive alive>组件(keep-alive的意思是保持生机)，也叫缓存组件
        当组件进行切换的时候，不会被销毁和重新创建
            -->

        <!-- 应用（猫眼电影手机端）
        我现在点击一个页面查看页面内容，会有数据请请求，并且我现在把页面往下滚动了
        当我切换到另一个页面时，另一个页面在做数据请求，上一个页面组件会被销毁，再次点击的时候再次创建
        我现在又回到第一个页面，可以不用去数据请求数据（组件不会被销毁重新创建），并且还保持在我上一次查看的地方（滚动的地方），这样可以提高用户体验感
        前提条件是需要使用<keep-alive></keep-alive>缓存组件，当组件进行切换的时候，不会被销毁和重新创建 -->


        <!-- vue提供的组件, 需要配合is属性, is里面写的是组件名称 -->
        <!-- keep-alive是叫缓存组件, 当组件进行切换的时候，不会被销毁和重新创建 -->
        <keep-alive>
            <component :is="show"></component>
        </keep-alive>

    </div>

    <script src="../../Vue.js"></script>
    <script>
        Vue.component('child1', {
            template: `
                <div>child1组件</div>
            `,
            mounted() {
                console.log('child2 mounted');
            },
            beforeDestroy() {
                console.log('child2 destroy');
            }
        });
        Vue.component('child2', {
            template: `
                <div>child2组件</div>
            `,
        });


        let timer;
        Vue.component('child3', {
            data() {
                return {
                    count: 0,
                }
            },
            template: `
                <div>child3组件-{{ count }}</div>
            `,

            mounted() {
                console.log('child3 mounted');
                // timer = setInterval(() => {
                //     this.count++;
                // }, 1000);
            },
            beforeDestroy() {
                console.log('child3 destroy');
                clearInterval(timer); //在动态组件里这里的定时器并没有被销毁
            },

            // 解决上面的问题（切换的时候关闭定时器，再次回来的时候开启定时器）
            // 这里需要添加两个生命周期钩子activated和deactivated
            // activated钩子：被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。
            // deactivated钩子：被 keep-alive 缓存的组件失活时调用。该钩子在服务器端渲染期间不被调用。

            activated() {
                // console.log('child3 activated');//测试
                timer = setInterval(() => { //激活时开启定时器
                    this.count++;
                }, 1000);
            },
            deactivated() {
                // console.log('child3 deactivated');//测试
                clearInterval(timer); //失活时关闭定时器
            }


        });
        new Vue({
            el: '#app',
            // vue是以组件为单位进行开发的
            // 组件一般按功能进行划分，最少一个功能
            // 根组件里面的data选项对象也可以写成函数返回对象的形式
            data() {
                return {
                    // show: 1,
                    show: "child1",
                }
            }
        });
    </script>
</body>

</html>
```

## 一、Keep-alive 是什么

`keep-alive`是`vue`中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`DOM`

`keep-alive` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们

`keep-alive`可以设置以下`props`属性：

- `include` \- 字符串或正则表达式。只有名称匹配的组件会被缓存

- `exclude` \- 字符串或正则表达式。任何名称匹配的组件都不会被缓存

- `max` \- 数字。最多可以缓存多少组件实例

关于`keep-alive`的基本用法：

```go
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

使用`includes`和`exclude`：

```go
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```

匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 \(父组件 `components` 选项的键值\)，匿名组件不能被匹配

设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（`activated`与`deactivated`）：

- 首次进入组件时：`beforeRouteEnter` > `beforeCreate` > `created`\> `mounted` > `activated` > ... ... > `beforeRouteLeave` > `deactivated`

- 再次进入组件时：`beforeRouteEnter` >`activated` > ... ... > `beforeRouteLeave` > `deactivated`

## 二、使用场景

使用原则：当我们在某些场景下不需要让页面重新加载时我们可以使用`keepalive`

举个栗子:

当我们从`首页`–>`列表页`–>`商详页`–>`再返回`，这时候列表页应该是需要`keep-alive`

从`首页`–>`列表页`–>`商详页`–>`返回到列表页(需要缓存)`–>`返回到首页(需要缓存)`–>`再次进入列表页(不需要缓存)`，这时候可以按需来控制页面的`keep-alive`

在路由中设置`keepAlive`属性判断是否需要缓存

```go
{
  path: 'list',
  name: 'itemList', // 列表页
  component (resolve) {
    require(['@/pages/item/list'], resolve)
 },
 meta: {
  keepAlive: true,
  title: '列表页'
 }
}
```

使用`<keep-alive>`

```go
<div id="app" class='wrapper'>
    <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
      <!-- 不需要缓存的视图组件 -->
     <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>
```

## 三、原理分析

`keep-alive`是`vue`中内置的一个组件

源码位置：src/core/components/keep-alive.js

```go
export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },

  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render() {
    /* 获取默认插槽中的第一个组件节点 */
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    /* 获取该组件节点的componentOptions */
    const componentOptions = vnode && vnode.componentOptions

    if (componentOptions) {
      /* 获取该组件节点的名称，优先获取组件的name字段，如果name不存在则获取组件的tag */
      const name = getComponentName(componentOptions)

      const { include, exclude } = this
      /* 如果name不在inlcude中或者存在于exlude中则表示不缓存，直接返回vnode */
      if (
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      /* 获取组件的key值 */
      const key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
     /*  拿到key值后去this.cache对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存 */
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      }
        /* 如果没有命中缓存，则将其设置进缓存 */
        else {
        cache[key] = vnode
        keys.push(key)
        // prune oldest entry
        /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```

可以看到该组件没有`template`，而是用了`render`，在组件渲染的时候会自动执行`render`函数

`this.cache`是一个对象，用来存储需要缓存的组件，它将以如下形式存储：

```go
this.cache = {
    'key1':'组件1',
    'key2':'组件2',
    // ...
}
```

在组件销毁的时候执行`pruneCacheEntry`函数

```go
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  /* 判断当前没有处于被渲染状态的组件，将其销毁*/
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}
```

在`mounted`钩子函数中观测 `include` 和 `exclude` 的变化，如下：

```go
mounted () {
    this.$watch('include', val => {
        pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
        pruneCache(this, name => !matches(val, name))
    })
}
```

如果`include` 或`exclude` 发生了变化，即表示定义需要缓存的组件的规则或者不需要缓存的组件的规则发生了变化，那么就执行`pruneCache`函数，函数如下：

```go
function pruneCache (keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode = cache[key]
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}
```

在该函数内对`this.cache`对象进行遍历，取出每一项的`name`值，用其与新的缓存规则进行匹配，如果匹配不上，则表示在新的缓存规则下该组件已经不需要被缓存，则调用`pruneCacheEntry`函数将其从`this.cache`对象剔除即可

关于`keep-alive`的最强大缓存功能是在`render`函数中实现

首先获取组件的`key`值：

```go
const key = vnode.key == null?
componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
: vnode.key
```

拿到`key`值后去`this.cache`对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存，如下：

```go
/* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */
if (cache[key]) {
    vnode.componentInstance = cache[key].componentInstance
    /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */
    remove(keys, key)
    keys.push(key)
}
```

直接从缓存中拿 `vnode` 的组件实例，此时重新调整该组件`key`的顺序，将其从原来的地方删掉并重新放在`this.keys`中最后一个

`this.cache`对象中没有该`key`值的情况，如下：

```go
/* 如果没有命中缓存，则将其设置进缓存 */
else {
    cache[key] = vnode
    keys.push(key)
    /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
    if (this.max && keys.length > parseInt(this.max)) {
        pruneCacheEntry(cache, keys[0], keys, this._vnode)
    }
}
```

表明该组件还没有被缓存过，则以该组件的`key`为键，组件`vnode`为值，将其存入`this.cache`中，并且把`key`存入`this.keys`中

此时再判断`this.keys`中缓存组件的数量是否超过了设置的最大缓存数量值`this.max`，如果超过了，则把第一个缓存组件删掉

## 四、思考题：缓存后如何获取数据

解决方案可以有以下两种：

- beforeRouteEnter

- actived

### beforeRouteEnter

每次组件渲染的时候，都会执行`beforeRouteEnter`

```go
beforeRouteEnter(to, from, next){
    next(vm=>{
        console.log(vm)
        // 每次进入路由执行
        vm.getData()  // 获取数据
    })
},
```

### actived

在`keep-alive`缓存的组件被激活的时候，都会执行`actived`钩子

```go
activated(){
   this.getData() // 获取数据
},
```

注意：服务器端渲染期间`avtived`不被调用

## 参考文献

- https://www.cnblogs.com/dhui/p/13589401.html
- https://www.cnblogs.com/wangjiachen666/p/11497200.html
- https://vue3js.cn/docs/zh
