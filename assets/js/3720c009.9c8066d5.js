"use strict";(self.webpackChunkfn_wang_10_github_io=self.webpackChunkfn_wang_10_github_io||[]).push([[84787],{12194:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});a(96540);var s=a(34164),n=a(61213),r=a(17559),l=a(26820),i=a(62557),c=a(41463),g=a(51107),o=a(74848);function u(t){let{title:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.be,{title:e}),(0,o.jsx)(c.A,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:a}=t;return(0,o.jsx)(n.e3,{className:(0,s.A)(r.G.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(g.A,{as:"h1",children:a}),(0,o.jsx)(i.A,{tags:e})]})})})})}function d(t){const e=(0,l.b)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...t,title:e}),(0,o.jsx)(h,{...t,title:e})]})}},56133:(t,e,a)=>{a.d(e,{A:()=>i});a(96540);var s=a(34164),n=a(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(74848);function i(t){let{permalink:e,label:a,count:i,description:c}=t;return(0,l.jsxs)(n.A,{href:e,title:c,className:(0,s.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},62557:(t,e,a)=>{a.d(e,{A:()=>g});a(96540);var s=a(26820),n=a(56133),r=a(51107);const l={tag:"tag_Nnez"};var i=a(74848);function c(t){let{letterEntry:e}=t;return(0,i.jsxs)("article",{children:[(0,i.jsx)(r.A,{as:"h2",id:e.letter,children:e.letter}),(0,i.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,{...t})},t.permalink)))}),(0,i.jsx)("hr",{})]})}function g(t){let{tags:e}=t;const a=(0,s.Q)(e);return(0,i.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,i.jsx)(c,{letterEntry:t},t.letter)))})}},26820:(t,e,a)=>{a.d(e,{Q:()=>r,b:()=>n});var s=a(21312);const n=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);