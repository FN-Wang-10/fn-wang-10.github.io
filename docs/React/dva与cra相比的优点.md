umi 脚手架：内置了 router,antd,ts,umi-request  
dva 是一个状态管理工具:内置了 router,redux-saga,fetch

## dva
 dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。--- 来自官方。  
 相比于 cra 只是多了内置的 redux 和 redux-saga，帮我们处理了数据流这方面的需求而已。如果只是想要达到这个效果的话，直接在 cra 中增加 dva-core 的依赖也是可以做到的。

## umi
 是一个可插拔的企业级 react 应用框架。umi 和 cra 都是应用框架，可能相比 cra 来说 umi 的功能点更多一些，只能说是功能性的话 umi 要相对来说更胜一筹
