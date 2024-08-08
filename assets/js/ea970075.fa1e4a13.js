"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[7729],{1237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(4848),a=t(8453);const o={},s="AJAX Content",l={id:"examples_and_tutorials/ajax_content",title:"AJAX Content",description:"OpenKeyNav can be used effectively with dynamically loaded content via AJAX. This ensures that all newly added interactive elements are accessible through the keyboard.",source:"@site/docs/7_examples_and_tutorials/ajax_content.md",sourceDirName:"7_examples_and_tutorials",slug:"/examples_and_tutorials/ajax_content",permalink:"/docs/examples_and_tutorials/ajax_content",draft:!1,unlisted:!1,editUrl:"https://github.com/LDubya/OpenKeyNav/tree/main/packages/create-docusaurus/templates/shared/docs/7_examples_and_tutorials/ajax_content.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Performance Optimization",permalink:"/docs/best_practices/performance_optimization"},next:{title:"Basic Example",permalink:"/docs/examples_and_tutorials/basic_example"}},r={},d=[{value:"Ensuring Accessibility for AJAX-loaded Content",id:"ensuring-accessibility-for-ajax-loaded-content",level:2},{value:"Example",id:"example",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Summary",id:"summary",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ajax-content",children:"AJAX Content"}),"\n",(0,i.jsx)(n.p,{children:"OpenKeyNav can be used effectively with dynamically loaded content via AJAX. This ensures that all newly added interactive elements are accessible through the keyboard."}),"\n",(0,i.jsxs)(n.p,{children:["This approach applies not only to vanilla JavaScript and AJAX but also to modern JavaScript frameworks such as ",(0,i.jsx)("strong",{children:"React"}),", ",(0,i.jsx)("strong",{children:"Vue"}),", and ",(0,i.jsx)("strong",{children:"Angular"}),". These frameworks often update the DOM dynamically, similar to AJAX. OpenKeyNav will automatically recognize new elements added by these frameworks on the next mode initiation, ensuring seamless keyboard accessibility without additional configuration."]}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s how to configure OpenKeyNav to work with AJAX content."}),"\n",(0,i.jsx)(n.h2,{id:"ensuring-accessibility-for-ajax-loaded-content",children:"Ensuring Accessibility for AJAX-loaded Content"}),"\n",(0,i.jsx)(n.p,{children:"When content is loaded dynamically via AJAX, OpenKeyNav does not need to be reinitialized to recognize the new elements. It will automatically recognize all new elements the next time a mode is entered. If it's in the middle of a mode, it won't recognize new elements until the next time the mode is initiated."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Here's an example demonstrating how to use OpenKeyNav with AJAX-loaded content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>OpenKeyNav with AJAX Content</title>\n    <script src="https://cdn.jsdelivr.net/npm/openkeynav/dist/openkeynav.min.js"><\/script>\n</head>\n<body>\n    <button id="loadContentBtn">Load More Content</button>\n    <div id="contentContainer">\n        \x3c!-- Initial content here --\x3e\n    </div>\n\n    <script>\n        // Initialize OpenKeyNav\n        const openKeyNav = new OpenKeyNav();\n        openKeyNav.init();\n\n        document.getElementById(\'loadContentBtn\').addEventListener(\'click\', () => {\n            // Simulate AJAX content loading\n            setTimeout(() => {\n                const newContent = `\n                    <div class="new-content">\n                        <button>New Button 1</button>\n                        <button>New Button 2</button>\n                    </div>\n                `;\n                document.getElementById(\'contentContainer\').insertAdjacentHTML(\'beforeend\', newContent);\n\n                // No need to update OpenKeyNav, it will recognize new elements on the next mode initiation\n            }, 1000); // Simulate network delay\n        });\n    <\/script>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Initialization"}),": OpenKeyNav is initialized when the page loads."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AJAX Content Loading"}),': When the "Load More Content" button is clicked, new content is added to the ',(0,i.jsx)(n.code,{children:"contentContainer"})," after a simulated network delay."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automatic Recognition"}),": OpenKeyNav will automatically recognize the new elements the next time a mode is entered. If a mode is currently active, it will recognize the new elements when the mode is re-initiated."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"OpenKeyNav simplifies handling dynamically loaded content by automatically recognizing new elements upon the next mode initiation. This approach helps maintain a seamless and accessible user experience as your content changes dynamically without requiring reinitialization."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);