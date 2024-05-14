/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  htmlSidebar: [{type: 'autogenerated', dirName: 'Html'}],
  cssSidebar: [{type: 'autogenerated', dirName: 'Css样式'}],
  javascriptSidebar: [{ type: 'autogenerated', dirName: 'JavaScript' }],
  es6Sidebar: [{ type: 'autogenerated', dirName: 'Es6' }],
  typeScriptSidebar: [{ type: 'autogenerated', dirName: 'TypeScript' }],
  reactSidebar: [{ type: 'autogenerated', dirName: 'React' }],
  vueSidebar: [{ type: 'autogenerated', dirName: 'Vue' }],
  vue3Sidebar: [{ type: 'autogenerated', dirName: 'Vue3' }],
  nodeSidebar: [{ type: 'autogenerated', dirName: 'Node' }],
  smallSidebar: [{ type: 'autogenerated', dirName: '小程序' }],
  webpackSidebar: [{ type: 'autogenerated', dirName: 'Webpack' }],
  browserSidebar: [{ type: 'autogenerated', dirName: '浏览器' }],
  httpSidebar: [{ type: 'autogenerated', dirName: 'Http' }],
  algorithmSidebar: [{ type: 'autogenerated', dirName: '算法和数据结构' }],
  gitSidebar: [{ type: 'autogenerated', dirName: 'Git' }],
  networkSidebar: [{ type: 'autogenerated', dirName: '网络' }],
  nginxSidebar: [{ type: 'autogenerated', dirName: 'Nginx' }],
  charlesSidebar: [{ type: 'autogenerated', dirName: 'Charles' }],
  terminalSidebar: [{ type: 'autogenerated', dirName: '终端' }],
  vimSidebar: [{ type: 'autogenerated', dirName: 'Vim' }],
  designModeSidebar: [{ type: 'autogenerated', dirName: '设计模式' }],
  operatingSystemSidebar: [{ type: 'autogenerated', dirName: '操作系统' }],
  otherSidebar: [{ type: 'autogenerated', dirName: '其它' }],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
