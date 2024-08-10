"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[659],{3461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(4848),a=t(8453);const r={},o="CMS Integration",s={id:"integration_guides/cms_integration",title:"CMS Integration",description:"OpenKeyNav&trade; can be integrated into various Content Management Systems (CMS) to enhance keyboard accessibility. This guide provides a general approach to integrating OpenKeyNav with popular CMS platforms such as WordPress and Joomla.",source:"@site/docs/8_integration_guides/cms_integration.md",sourceDirName:"8_integration_guides",slug:"/integration_guides/cms_integration",permalink:"/docs/integration_guides/cms_integration",draft:!1,unlisted:!1,editUrl:"https://github.com/LDubya/OpenKeyNav/tree/main/packages/create-docusaurus/templates/shared/docs/8_integration_guides/cms_integration.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Form Handling",permalink:"/docs/examples_and_tutorials/form_handling"},next:{title:"Framework Integration",permalink:"/docs/integration_guides/framework_integration"}},d={},p=[{value:"WordPress Integration",id:"wordpress-integration",level:2},{value:"Step 1: Enqueue the OpenKeyNav Script",id:"step-1-enqueue-the-openkeynav-script",level:3},{value:"Step 2: Initialize OpenKeyNav",id:"step-2-initialize-openkeynav",level:3},{value:"Joomla Integration",id:"joomla-integration",level:2},{value:"Step 1: Add the OpenKeyNav Script",id:"step-1-add-the-openkeynav-script",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cms-integration",children:"CMS Integration"}),"\n",(0,i.jsx)(n.p,{children:"OpenKeyNav\u2122 can be integrated into various Content Management Systems (CMS) to enhance keyboard accessibility. This guide provides a general approach to integrating OpenKeyNav with popular CMS platforms such as WordPress and Joomla."}),"\n",(0,i.jsx)(n.h2,{id:"wordpress-integration",children:"WordPress Integration"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-enqueue-the-openkeynav-script",children:"Step 1: Enqueue the OpenKeyNav Script"}),"\n",(0,i.jsxs)(n.p,{children:["To include the OpenKeyNav library in your WordPress site, you need to enqueue the script in your theme's ",(0,i.jsx)(n.code,{children:"functions.php"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"function enqueue_openkeynav_script() {\n    wp_enqueue_script(\n        'openkeynav',\n        'https://cdn.jsdelivr.net/npm/openkeynav/dist/openkeynav.min.js',\n        array(),\n        null,\n        true\n    );\n}\nadd_action('wp_enqueue_scripts', 'enqueue_openkeynav_script');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-initialize-openkeynav",children:"Step 2: Initialize OpenKeyNav"}),"\n",(0,i.jsxs)(n.p,{children:["Add the initialization script to your theme's ",(0,i.jsx)(n.code,{children:"footer.php"})," file to ensure it runs after the page content has loaded."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<script>\n    document.addEventListener('DOMContentLoaded', () => {\n        const openKeyNav = new OpenKeyNav();\n        openKeyNav.init();\n    });\n<\/script>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"joomla-integration",children:"Joomla Integration"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-add-the-openkeynav-script",children:"Step 1: Add the OpenKeyNav Script"}),"\n",(0,i.jsxs)(n.p,{children:["To include the OpenKeyNav library in your Joomla site, add the script to your template's ",(0,i.jsx)(n.code,{children:"index.php"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <jdoc:include type="head" />\n    <script src="https://cdn.jsdelivr.net/npm/openkeynav/dist/openkeynav.min.js"><\/script>\n</head>\n<body>\n    <jdoc:include type="message" />\n    <jdoc:include type="component" />\n\n    <script>\n        document.addEventListener(\'DOMContentLoaded\', () => {\n            const openKeyNav = new OpenKeyNav();\n            openKeyNav.init();\n        });\n    <\/script>\n</body>\n</html>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Integrating OpenKeyNav with your CMS involves including the library script and initializing it after the page content has loaded. This guide covered the basic steps for integrating OpenKeyNav with WordPress and Joomla. For other CMS platforms, the process will be similar: include the script in your template or theme files and initialize OpenKeyNav when the DOM is fully loaded."}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, you can enhance the keyboard accessibility of your CMS-managed website, providing a better user experience for all visitors."})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(6540);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);