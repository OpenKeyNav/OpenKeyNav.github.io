"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[4102],{9714:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=i(4848),o=i(8453);const a={},r="Performance Optimization",s={id:"best_practices/performance_optimization",title:"Performance Optimization",description:"Optimizing the performance of your website is essential for providing a smooth and responsive user experience. Here are some best practices for ensuring that OpenKeyNav operates efficiently on your website.",source:"@site/docs/6_best_practices/performance_optimization.md",sourceDirName:"6_best_practices",slug:"/best_practices/performance_optimization",permalink:"/docs/best_practices/performance_optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/LDubya/OpenKeyNav/tree/main/packages/create-docusaurus/templates/shared/docs/6_best_practices/performance_optimization.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Common Pitfalls and How to Avoid Them",permalink:"/docs/best_practices/common_pitfalls"},next:{title:"AJAX Content",permalink:"/docs/examples_and_tutorials/ajax_content"}},c={},l=[{value:"Efficient Initialization",id:"efficient-initialization",level:2},{value:"Early Initialization",id:"early-initialization",level:3},{value:"Minimize Impact on Load Time",id:"minimize-impact-on-load-time",level:2},{value:"Asynchronous Loading",id:"asynchronous-loading",level:3},{value:"Code Splitting",id:"code-splitting",level:3},{value:"Optimize Configuration",id:"optimize-configuration",level:2},{value:"Minimal Configuration",id:"minimal-configuration",level:3},{value:"Monitor Performance",id:"monitor-performance",level:2},{value:"Performance Profiling",id:"performance-profiling",level:3},{value:"Example",id:"example",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,t.jsx)(n.p,{children:"Optimizing the performance of your website is essential for providing a smooth and responsive user experience. Here are some best practices for ensuring that OpenKeyNav operates efficiently on your website."}),"\n",(0,t.jsx)(n.h2,{id:"efficient-initialization",children:"Efficient Initialization"}),"\n",(0,t.jsx)(n.h3,{id:"early-initialization",children:"Early Initialization"}),"\n",(0,t.jsx)(n.p,{children:"To ensure click mode works best, initialize OpenKeyNav before any click events are registered in your app. This ensures that all interactive elements are properly configured for keyboard accessibility from the start."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"document.addEventListener('DOMContentLoaded', () => {\n    const openKeyNav = new OpenKeyNav();\n    openKeyNav.init();\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"minimize-impact-on-load-time",children:"Minimize Impact on Load Time"}),"\n",(0,t.jsx)(n.h3,{id:"asynchronous-loading",children:"Asynchronous Loading"}),"\n",(0,t.jsx)(n.p,{children:"Load OpenKeyNav asynchronously to avoid blocking the rendering of your main content. However, ensure that it is initialized early in the document's lifecycle."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/openkeynav/dist/openkeynav.umd.min.js" async onload="initOpenKeyNav()"><\/script>\n<script>\n    function initOpenKeyNav() {\n        const openKeyNav = new OpenKeyNav();\n        openKeyNav.init();\n    }\n<\/script>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"code-splitting",children:"Code Splitting"}),"\n",(0,t.jsx)(n.p,{children:"If you're using a module bundler like Webpack, consider code splitting to load OpenKeyNav efficiently while ensuring it is initialized early."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import(/* webpackChunkName: \"openkeynav\" */ 'openkeynav').then(({ default: OpenKeyNav }) => {\n    const openKeyNav = new OpenKeyNav();\n    openKeyNav.init();\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"optimize-configuration",children:"Optimize Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"minimal-configuration",children:"Minimal Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Use the minimal required configuration to initialize OpenKeyNav. Avoid unnecessary configurations that might add overhead."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const config = {\n    keys: {\n        click: 'c',\n        scroll: 'w'\n    }\n};\n\nconst openKeyNav = new OpenKeyNav();\nopenKeyNav.init(config);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"monitor-performance",children:"Monitor Performance"}),"\n",(0,t.jsx)(n.h3,{id:"performance-profiling",children:"Performance Profiling"}),"\n",(0,t.jsx)(n.p,{children:"Use browser performance profiling tools to monitor and identify performance bottlenecks related to OpenKeyNav."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chrome DevTools:"})," Use the Performance panel to record and analyze the performance of your website."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Lighthouse:"})," Run Lighthouse audits to get insights into performance, accessibility, and best practices."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pro Feature:"})," OpenKeyNav Pro offers advanced performance monitoring and optimization features to help you maintain optimal performance on your website."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a minimal configuration with performance optimization techniques applied:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"document.addEventListener('DOMContentLoaded', () => {\n    import('openkeynav').then(({ default: OpenKeyNav }) => {\n        const config = {\n            keys: {\n                click: 'c',\n                scroll: 'w'\n            }\n        };\n\n        const openKeyNav = new OpenKeyNav();\n        openKeyNav.init(config);\n    });\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"By following these performance optimization best practices, you can ensure that OpenKeyNav operates efficiently and provides a seamless experience for your users."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);