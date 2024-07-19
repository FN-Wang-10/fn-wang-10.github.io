## 1.Vue3.0 六大亮点

- Performance: 性能比 Vue 2.x 快了 1.2-2 倍
- Tree shaking support: 按需编译，体积比 Vue 2.x 更小
- Composition API: 组合 API（类似 React Hooks）
- Better TypeScript support： 更好的 Ts 支持
- Custom Renderer API： 暴露了自定义的渲染 API
- Fragment， Teleport（Protal），Suspense： 更先进的组件

## 2.Vue3.0 为什么更快

- https://vue-next-template-explorer.netlify.app/

- diff 算法优化

  - Vue3.0 中新增了虚拟 dom 的静态标记（PatchFlag）enum
    在与上次虚拟节点进行对比时候，只对比带有 patch flag 的节点
    并且可以通过 flag 的信息得知当前节点要对比的具体内容

    ```
      export const enum PatchFlags {
        // 动态文字内容
        TEXT = 1,

        // 动态 class
        CLASS = 1 << 1,  // 2    << 位运算符  二进制 1向左移1位 代表2

        // 动态样式
        STYLE = 1 << 2,  // 4  二进制 1向左移2位 代表4

        // 动态 props
        PROPS = 1 << 3,  // 8  二进制 1向左移3位 代表8

        // 有动态的key，也就是说props对象的key不是确定的
        FULL_PROPS = 1 << 4,  // 16

        // 合并事件
        HYDRATE_EVENTS = 1 << 5, // 32

        // children 顺序确定的 fragment
        STABLE_FRAGMENT = 1 << 6, // 64

        // children中有带有key的节点的fragment
        KEYED_FRAGMENT = 1 << 7,

        // 没有key的children的fragment
        UNKEYED_FRAGMENT = 1 << 8,

        // 只有非props需要patch的，比如`ref`
        NEED_PATCH = 1 << 9,

        // 动态的插槽
        DYNAMIC_SLOTS = 1 << 10,

        // SPECIAL FLAGS -------------------------------------------------------------

        // 以下是特殊的flag，不会在优化中被用到，是内置的特殊flag

        // 表示他是静态节点，他的内容永远不会改变，对于hydrate的过程中，不会需要再对其子节点进行diff
        HOISTED = -1,

        // 用来表示一个节点的diff应该结束
        BAIL = -2,
      }
    ```

- hoistStatic 静态提升

  - 在 Vue2.x 中无论元素是否参与更新，每次都会重新创建，然后再渲染
  - 在 Vue3 中对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可

- cacheHandlers 事件侦听器缓存

  - 默认情况下 onClick 会被视为动态绑定，所以每次都会去追踪它的变化，但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可

## 3.Vue3.0 快速上手

- 1. 使用 vue-cli，选择 3.x 版本构建

- 2. 使用 Vite 构建项目

  - Vite 是 Vue 作者开发的一款意图取代 webpack 的工具
  - 其实现原理是利用 ES6 的 import 会发送请求去加载文件的特性，拦截这些请求，做一些预编译，省去 webpack 冗长的打包时间
  - 安装 Vite
    - npm install -g create-vite-app
  - 构建项目
    - create-vite-app projectName
  - 安装依赖运行项目
    - cd projectName
    - npm install
    - npm run dev

- Vue3.0 的写法是完全兼容 Vue2.x 的

## 4. Composition API
