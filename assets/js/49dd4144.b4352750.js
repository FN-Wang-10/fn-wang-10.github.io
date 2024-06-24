"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[74101],{136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var s=r(85893),l=r(11151);const c={},a=void 0,i={id:"Webpack/webpack\u603b\u7ed3",title:"webpack\u603b\u7ed3",description:"webpack-dev-server \u542f\u52a8\u672c\u5730\u670d\u52a1\uff0c\u4ee3\u7406 http-proxy-middleware node \u4e2d\u95f4\u4ef6",source:"@site/docs/Webpack/webpack\u603b\u7ed3.md",sourceDirName:"Webpack",slug:"/Webpack/webpack\u603b\u7ed3",permalink:"/docs/Webpack/webpack\u603b\u7ed3",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"webpackSidebar",previous:{title:"webpack\u4e2d\u5e38\u89c1\u7684Plugin",permalink:"/docs/Webpack/webpack\u4e2d\u5e38\u89c1\u7684Plugin"},next:{title:"webpack\u6307\u5357",permalink:"/docs/Webpack/webpack\u6307\u5357"}},o={},t=[{value:"loader",id:"loader",level:2},{value:"plugin",id:"plugin",level:2},{value:"webpack \u6027\u80fd\u4f18\u5316",id:"webpack-\u6027\u80fd\u4f18\u5316",level:2},{value:"module,chunk,bundle \u7684\u533a\u522b",id:"modulechunkbundle-\u7684\u533a\u522b",level:2},{value:"Tree Shaking(\u5220\u9664\u65e0\u6548\u4ee3\u7801)",id:"tree-shaking\u5220\u9664\u65e0\u6548\u4ee3\u7801",level:2},{value:"Scope Hositing",id:"scope-hositing",level:2},{value:"source map(\u6e90\u7801\u6620\u5c04)",id:"source-map\u6e90\u7801\u6620\u5c04",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["webpack-dev-server \u542f\u52a8\u672c\u5730\u670d\u52a1\uff0c\u4ee3\u7406 http-proxy-middleware node \u4e2d\u95f4\u4ef6",(0,s.jsx)(n.br,{}),"\n","\u542f\u52a8 gzip \u538b\u7f29",(0,s.jsx)(n.br,{}),"\n","\u7f13\u5b58",(0,s.jsx)(n.br,{}),"\n","\u9700\u5728 nginx \u4e2d\u914d\u7f6e\u8bf7\u6c42\u5934"]}),"\n",(0,s.jsx)(n.h2,{id:"loader",children:"loader"}),"\n",(0,s.jsxs)(n.p,{children:["Loader \u672c\u8eab\u4e5f\u662f\u8fd0\u884c\u5728 node.js \u73af\u5883\u4e2d\u7684 JavaScript \u6a21\u5757",(0,s.jsx)(n.br,{}),"\n","\u5b83\u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7\u6e90\u6587\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u8f6c\u6362\u7684\u7ed3\u679c",(0,s.jsx)(n.br,{}),"\n","webpack \u63d2\u4ef6\u662f\u4e00\u4e2a\u5177\u6709 apply \u65b9\u6cd5\u7684 JavaScript \u5bf9\u8c61\u3002apply \u65b9\u6cd5\u4f1a\u88ab webpack compiler \u8c03\u7528\uff0c\u5e76\u4e14\u5728 \u6574\u4e2a \u7f16\u8bd1\u751f\u547d\u5468\u671f\u90fd\u53ef\u4ee5\u8bbf\u95ee compiler \u5bf9\u8c61"]}),"\n",(0,s.jsxs)(n.p,{children:["babel-loader \u5904\u7406 es6 @babel/polyfill @babel/core @babel/preset-env\r\nstyle-loader",(0,s.jsx)(n.br,{}),"\n","css-loader",(0,s.jsx)(n.br,{}),"\n","less-loader",(0,s.jsx)(n.br,{}),"\n","sass-loader",(0,s.jsx)(n.br,{}),"\n","postcss-loader \u5904\u7406\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u95ee\u9898",(0,s.jsx)(n.br,{}),"\n","file-loader",(0,s.jsx)(n.br,{}),"\n","url-loader\uff0climit \u5c06\u5c0f\u56fe\u7247\u8f6c\u4e3a base64 \u51cf\u5c11\u4e00\u6b21\u8d44\u6e90\u8bf7\u6c42",(0,s.jsx)(n.br,{}),"\n","contenthash\uff0chash \u503c\u53d8\u4e86\uff0c\u5c31\u4e0d\u8d70\u7f13\u5b58",(0,s.jsx)(n.br,{}),"\n","MiniCssExtractPlugin.loader \u4ee3\u66ff style-loader\uff0c\u62bd\u79bb css \u4e3a\u5355\u72ec\u6587\u4ef6",(0,s.jsx)(n.br,{}),"\n","optimization.minimizer \u538b\u7f29 css\r\nhtml-loader \u6253\u5305 html \u4e2d\u56fe\u7247\u8d44\u6e90,html \u4e2d\u7684\u56fe\u7247 url-loader \u6ca1\u6cd5\u5904\u7406\uff0c\u5b83\u53ea\u80fd\u5904\u7406 js \u4e2d\u5f15\u5165\u7684\u56fe\u7247 / \u6837\u5f0f\u4e2d\u56fe\u7247\uff0c\u4e0d\u80fd\u5904\u7406 html \u4e2d img \u6807\u7b7e\uff0c\u9700\u8981\u5f15\u5165\u5176\u4ed6 html-loader \u5904\u7406\u3002",(0,s.jsx)(n.br,{}),"\n","eslint-loader \u5bf9 js \u57fa\u672c\u8bed\u6cd5\u9519\u8bef/\u9690\u60a3\uff0c\u8fdb\u884c\u63d0\u524d\u68c0\u67e5"]}),"\n",(0,s.jsx)(n.h2,{id:"plugin",children:"plugin"}),"\n",(0,s.jsx)(n.p,{children:"\u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u63d2\u4ef6\u7684\u8303\u56f4\u5305\u62ec\uff0c\u4ece\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29\uff0c\u4e00\u76f4\u5230\u91cd\u65b0\u5b9a\u4e49\u73af\u5883\u4e2d\u7684\u53d8\u91cf"}),"\n",(0,s.jsxs)(n.p,{children:["webpack.DefinePlugin",(0,s.jsx)(n.br,{}),"\n","HtmlWebpackPlugin",(0,s.jsx)(n.br,{}),"\n","CleanWebpackPlugin \u6e05\u7a7a\u6253\u5305\u6587\u4ef6",(0,s.jsx)(n.br,{}),"\n","SplitChunksPlugin \u62bd\u79bb\u516c\u5171\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u7b2c\u4e09\u65b9\u5305\u548c\u516c\u7528\u903b\u8f91\u4f5c\u4e3a\u5355\u72ec\u6a21\u5757\u5f15\u7528\uff0c\u52a8\u6001\u5f15\u5165",(0,s.jsx)(n.br,{}),"\n","DllPlugin \u52a8\u6001\u94fe\u63a5\u5e93\u63d2\u4ef6\uff0c\u914d\u7f6e webpack.dll.js \u6587\u4ef6\uff08react\u3001react-dom\uff09\uff0c\u6253\u5305\u51fa dll \u6587\u4ef6\uff0c\u5728 html \u6a21\u677f\u4e2d\u5f15\u5165 dll \u6587\u4ef6\uff0c\u7528 webpack \u5185\u7f6e\u7684 DllReferencePlugin \u505a\u4e00\u4e2a\u6620\u5c04,\u63d0\u9ad8\u7f16\u8bd1\u901f\u5ea6\r\nOptimizeCssAssetsPlugin \u538b\u7f29 css"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5904\u7406 jsx @babel/preset-react \u9884\u8bbe",(0,s.jsx)(n.br,{}),"\n","\u5904\u7406 vue vue-loader"]}),"\n",(0,s.jsx)(n.h2,{id:"webpack-\u6027\u80fd\u4f18\u5316",children:"webpack \u6027\u80fd\u4f18\u5316"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f18\u5316\u6253\u5305\u6784\u5efa\u901f\u5ea6\uff0c\u5f00\u53d1\u548c\u4f53\u9a8c\u6548\u7387",(0,s.jsx)(n.br,{}),"\n","\u4f18\u5316\u4ea7\u51fa\u4ee3\u7801\uff0c\u4ea7\u54c1\u6027\u80fd"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"[name].contenthash"}),(0,s.jsx)(n.br,{}),"\n",'babel-loader, use: ["babel-loader?cacheDirectory"], cacheDirectory \u5bf9\u4e8e es6\uff0c\u7f16\u8bd1\u8fc7\u7684\u4e0d\u7528\u91cd\u65b0\u7f16\u8bd1',(0,s.jsx)(n.br,{}),"\n","happyPack \u5f00\u542f\u591a\u8fdb\u7a0b\u6253\u5305",(0,s.jsx)(n.br,{}),"\n","ParallelUglifyPlugin \u5f00\u542f\u591a\u8fdb\u7a0b\u538b\u7f29 js",(0,s.jsx)(n.br,{}),"\n","Ignore-Plugin \u907f\u514d\u5f15\u5165\u65e0\u7528\u6a21\u5757\uff0c\u76f4\u63a5\u4e0d\u5f15\u5165\uff0c\u4ee3\u7801\u4e2d\u6ca1\u6709",(0,s.jsx)(n.br,{}),"\n","noParse \u907f\u514d\u91cd\u590d\u6253\u5305\uff0c\u5f15\u5165\uff0c\u4f46\u4e0d\u6253\u5305",(0,s.jsx)(n.br,{}),"\n","DllPlugin \u5bf9\u4e8e\u7b2c\u4e09\u65b9\u7684\u5305\u5728\u751f\u4ea7\u73af\u5883\u6ca1\u5fc5\u8981\u6bcf\u6b21\u90fd\u7f16\u8bd1",(0,s.jsx)(n.br,{}),"\n","\u61d2\u52a0\u8f7d import()",(0,s.jsx)(n.br,{}),"\n","\u81ea\u52a8\u5237\u65b0 watch",(0,s.jsx)(n.br,{}),"\n","\u70ed\u66f4\u65b0 HotModuleReplacementPlugin hot \u9700\u8981\u6307\u5b9a\u54ea\u4e9b\u6587\u4ef6\u9700\u8981\u70ed\u66f4\u65b0",(0,s.jsx)(n.br,{}),"\n","cdn \u52a0\u901f \u5c06\u6253\u5305\u540e\u7684\u6587\u4ef6\u4e0a\u4e0a\u4f20\u5230 cdn \u670d\u52a1\u5668"]}),"\n",(0,s.jsxs)(n.p,{children:["\u81ea\u52a8\u5237\u65b0\uff1b\u6574\u4e2a\u7f51\u9875\u5168\u90e8\u5237\u65b0\uff0c\u901f\u5ea6\u8f83\u6162\uff0c\u72b6\u6001\u4e22\u5931",(0,s.jsx)(n.br,{}),"\n","\u70ed\u66f4\u65b0\uff1a\u65b0\u4ee3\u7801\u751f\u6548\uff0c\u7f51\u9875\u4e0d\u5237\u65b0\uff0c\u72b6\u6001\u4e0d\u4e22\u5931"]}),"\n",(0,s.jsx)(n.h2,{id:"modulechunkbundle-\u7684\u533a\u522b",children:"module,chunk,bundle \u7684\u533a\u522b"}),"\n",(0,s.jsxs)(n.p,{children:["module \u662f\u5404\u4e2a\u6e90\u7801\u6587\u4ef6\uff08\u4e00\u4e2a\u6587\u4ef6\u5c31\u662f\u4e00\u4e2a module\uff09\uff0cwebpack \u4e2d\u4e00\u5207\u6a21\u5757",(0,s.jsx)(n.br,{}),"\n","chunk \u662f\u591a\u6a21\u5757\u5408\u6210\u7684\uff0c\u5982 entry\uff0cimport() splitChunk\uff08chunk \u662f webpack \u5185\u5b58\u4e2d\u7684\u4e00\u4e2a\u6982\u5ff5\uff0cwebpack \u4e2d\u4e00\u5207\u8fd8\u6ca1\u6709\u5904\u7406\u7684 module \u7684\u4e00\u4e2a\u96c6\u5408\uff09",(0,s.jsx)(n.br,{}),"\n","bundle \u662f\u6700\u7ec8\u8f93\u51fa\u7684\u6587\u4ef6\uff08\u901a\u8fc7 webpack \u7684\u5904\u7406\u6700\u7ec8\u8f93\u51fa\u7684\u6587\u4ef6\uff09",(0,s.jsx)(n.br,{}),"\n","\u4e00\u4e2a chunk \u5bf9\u5e94\u4e00\u4e2a bundle\uff0c\u4e00\u4e2a chunk \u53ef\u80fd\u5305\u542b\u591a\u4e2a module"]}),"\n",(0,s.jsx)(n.h2,{id:"tree-shaking\u5220\u9664\u65e0\u6548\u4ee3\u7801",children:"Tree Shaking(\u5220\u9664\u65e0\u6548\u4ee3\u7801)"}),"\n",(0,s.jsxs)(n.p,{children:["ES6Module \u53ef\u4ee5\u5b9e\u73b0 Tree Shaking \u800c Commonjs \u4e0d\u884c",(0,s.jsx)(n.br,{}),"\n","ES6Module \u9759\u6001\u5f15\u5165\uff0c\u7f16\u8bd1\u65f6\u5f15\u5165",(0,s.jsx)(n.br,{}),"\n","Commonjs \u52a8\u6001\u5f15\u5165\uff0c\u6267\u884c\u65f6\u5f15\u5165",(0,s.jsx)(n.br,{}),"\n","webpack \u6253\u5305\u7684\u8fc7\u7a0b\u662f\u4ee3\u7801\u7684\u5206\u6790\u548c\u7f16\u8bd1\u7684\u8fc7\u7a0b\uff0c\u8fd8\u6ca1\u6709\u771f\u6b63\u7684\u6267\u884c\uff0c\u662f\u9759\u6001\u5206\u6790\uff0c\u8981\u628a\u65e0\u7528\u7684\u4ee3\u7801\u5220\u6389\uff0c\u6253\u5305\u6210\u7ebf\u4e0a\u7684\u4ee3\u7801\u5728\u8fd0\u884c\u3002\u5728\u4f7f\u7528 Tree Shaking \u7684\u65f6\u5019\uff0c\u524d\u63d0\u662f\u4ee3\u7801\u9700\u8981\u56fa\u5b9a\uff0c\u4e0d\u80fd\u6709\u903b\u8f91"]}),"\n",(0,s.jsx)(n.h2,{id:"scope-hositing",children:"Scope Hositing"}),"\n",(0,s.jsxs)(n.p,{children:["\u76f4\u8bd1\uff1a\u4f5c\u7528\u57df\u63d0\u5347\uff0cwebpack3 \u5c31\u6709\u4e86",(0,s.jsx)(n.br,{}),"\n","\u4ee3\u7801\u4f53\u79ef\u66f4\u5c0f\uff0c\u8fd0\u884c\u66f4\u5feb",(0,s.jsx)(n.br,{}),"\n","\u521b\u5efa\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5c11\uff0c\u5185\u5b58\u5f00\u9500\u4e5f\u968f\u4e4b\u53d8\u5c0f",(0,s.jsx)(n.br,{}),"\n","\u4ee3\u7801\u53ef\u8bfb\u6027\u66f4\u597d"]}),"\n",(0,s.jsxs)(n.p,{children:["Scope Hoisting \u539f\u7406",(0,s.jsx)(n.br,{}),"\n","\u5206\u6790\u51fa\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5c3d\u53ef\u80fd\u5c06\u6253\u6563\u7684\u6a21\u5757\u5408\u5e76\u5230\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u524d\u63d0\u662f\u4e0d\u80fd\u9020\u6210\u4ee3\u7801\u5197\u4f59\u3002\u56e0\u6b64\uff0c\u53ea\u6709\u90a3\u4e9b\u88ab\u5f15\u7528\u4e00\u6b21\u7684\u6a21\u5757\u624d\u80fd\u88ab\u5408\u5e76\u3002",(0,s.jsx)(n.br,{}),"\n","\u7531\u4e8e Scope Hoisting \u9700\u8981\u5206\u6790\u51fa\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u56e0\u6b64\u6e90\u7801\u5fc5\u987b\u91c7\u7528 ES6 \u6a21\u5757\u5316\u8bed\u6cd5\uff0c\u4e0d\u7136\u5979\u8bb2\u65e0\u6cd5\u751f\u6548\u3002\u548c\u4f7f\u7528 TreeShaking \u4e2d\u4ecb\u7ecd\u7684\u7c7b\u4f3c"]}),"\n",(0,s.jsxs)(n.p,{children:["\u542f\u52a8 Scope Hoisting",(0,s.jsx)(n.br,{}),"\n","\u7b2c\u4e00\u79cd\uff1amode:'production'",(0,s.jsx)(n.br,{}),"\n","\u7b2c\u4e8c\u79cd\uff1a\u624b\u52a8\u542f\u52a8 \u5728 webpack \u4e2d\u5df2\u7ecf\u5185\u7f6e Scope Hoisting,\u53ea\u9700\u8981\u914d\u7f6e ModuleConcatenationPlugin \u63d2\u4ef6\u5373\u53ef"]}),"\n",(0,s.jsx)(n.h2,{id:"source-map\u6e90\u7801\u6620\u5c04",children:"source map(\u6e90\u7801\u6620\u5c04)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'module.exports = {\r\n  devtool: "inline-source-map", // \u5173\u952e\u4ee3\u7801\r\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(67294);const l={},c=s.createContext(l);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);