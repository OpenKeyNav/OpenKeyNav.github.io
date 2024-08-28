"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[2953],{9478:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=o(4848),i=o(8453);const l={sidebar_position:2},s="Drag-and-drop Mode",d={id:"usage/drag_mode",title:"Drag-and-drop Mode",description:"Drag-and-drop mode enables keyboard-accessible drag-and-drop interactions, allowing users to move elements between containers using keyboard shortcuts.",source:"@site/docs/4_usage/drag_mode.md",sourceDirName:"4_usage",slug:"/usage/drag_mode",permalink:"/docs/usage/drag_mode",draft:!1,unlisted:!1,editUrl:"https://github.com/LDubya/OpenKeyNav/tree/main/packages/create-docusaurus/templates/shared/docs/4_usage/drag_mode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Click Mode",permalink:"/docs/usage/click_mode"},next:{title:"Heading Navigation",permalink:"/docs/usage/heading_navigation"}},t={},a=[{value:"How to Activate Drag-and-drop Mode",id:"how-to-activate-drag-and-drop-mode",level:2},{value:"How to Drag and Drop",id:"how-to-drag-and-drop",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Simple Configuration",id:"simple-configuration",level:3},{value:"Configuration Options for Drag-and-drop Mode",id:"configuration-options-for-drag-and-drop-mode",level:3},{value:"Configuration Options",id:"configuration-options",level:4},{value:"<code>fromContainer</code>",id:"fromcontainer",level:5},{value:"<code>fromElements</code>",id:"fromelements",level:5},{value:"<code>resolveFromElements</code>",id:"resolvefromelements",level:5},{value:"<code>fromExclude</code>",id:"fromexclude",level:5},{value:"<code>toElements</code>",id:"toelements",level:5},{value:"<code>callback</code>",id:"callback",level:5},{value:"In-depth Configuration",id:"in-depth-configuration",level:4},{value:"Requirements and Optional Fields",id:"requirements-and-optional-fields",level:3},{value:"Summary",id:"summary",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"drag-and-drop-mode",children:"Drag-and-drop Mode"}),"\n",(0,r.jsx)(n.p,{children:"Drag-and-drop mode enables keyboard-accessible drag-and-drop interactions, allowing users to move elements between containers using keyboard shortcuts."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-activate-drag-and-drop-mode",children:"How to Activate Drag-and-drop Mode"}),"\n",(0,r.jsxs)(n.p,{children:["To activate drag-and-drop mode, press the ",(0,r.jsx)(n.code,{children:"m"})," key. Draggable elements and their drop zones will be labeled with keyboard shortcuts."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Drag-and-drop must be configured. See ",(0,r.jsx)(n.a,{href:"#",children:"Configuration"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-drag-and-drop",children:"How to Drag and Drop"}),"\n",(0,r.jsx)(n.p,{children:"Once drag-and-drop mode is activated:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Look for the labels on draggable elements."}),"\n",(0,r.jsx)(n.li,{children:"Press the key combination displayed on the label of the draggable element to select it."}),"\n",(0,r.jsx)(n.li,{children:"Look for the labels on the drop zones."}),"\n",(0,r.jsx)(n.li,{children:"Press the key combination displayed on the label of the drop zone to move the selected element to the drop zone."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Drag-and-drop mode must be configured for use with OpenKeyNav. The configuration tells OpenKeyNav which elements are draggable and where they can be dropped."}),"\n",(0,r.jsx)(n.h3,{id:"simple-configuration",children:"Simple Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const openKeyNav = new OpenKeyNav();\n\nconst moveConfig = [\n  {\n    fromElements: ".moveableElement",\n    toElements: ".dropZoneTarge",\n    callback: (elMoveable, elDropZoneTarget) => {\n      // Your callback logic, if necessary\n    }\n  }\n];\n\nopenKeyNav.init({\n    modesConfig: {\n        move: {\n            config: moveConfig\n        }\n    }\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"configuration-options-for-drag-and-drop-mode",children:"Configuration Options for Drag-and-drop Mode"}),"\n",(0,r.jsxs)(n.p,{children:["OpenKeyNav allows you to customize the drag-and-drop functionality with various configuration options. Here\u2019s a detailed description of each configuration option available for the ",(0,r.jsx)(n.code,{children:"move"})," mode."]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,r.jsx)(n.h5,{id:"fromcontainer",children:(0,r.jsx)(n.code,{children:"fromContainer"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Selector for the container that holds the draggable elements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'".classContainerFrom1"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"fromelements",children:(0,r.jsx)(n.code,{children:"fromElements"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Selector for the specific draggable elements within the ",(0,r.jsx)(n.code,{children:"fromContainer"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'".classElementFrom1"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"resolvefromelements",children:(0,r.jsx)(n.code,{children:"resolveFromElements"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"() => NodeList"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Optional callback function to dynamically resolve the draggable elements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"resolveFromElements: function() { return document.querySelectorAll('.classElementFrom1'); }"})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"fromexclude",children:(0,r.jsx)(n.code,{children:"fromExclude"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Selector for elements within ",(0,r.jsx)(n.code,{children:"fromContainer"})," to exclude from being draggable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'".excludeThisElement"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"toelements",children:(0,r.jsx)(n.code,{children:"toElements"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Selector for the drop zone targets."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:'".classToA, .classToD, .classToE"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"callback",children:(0,r.jsx)(n.code,{children:"callback"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"(el: HTMLElement, target: HTMLElement) => void"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Optional callback function that is called when a draggable element is moved to a drop zone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example:"})," ",(0,r.jsx)(n.code,{children:"callback: (el, target) => { console.log('Moved', el, 'to', target); }"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"in-depth-configuration",children:"In-depth Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of how to configure the drag-and-drop mode with OpenKeyNav:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const openKeyNav = new OpenKeyNav();\n\nconst moveConfig = [\n  {\n    fromContainer: ".classContainerFrom1",\n    fromElements: ".classElementFrom1",\n    resolveFromElements: function() { \n        return document.querySelectorAll(\'.classElementFrom1\'); \n    },\n    fromExclude: ".excludeThisElement",\n    toElements: ".classToA, .classToD, .classToE", \n    callback: (el, target) => {\n      console.log(\'Moved\', el, \'to\', target);\n    }\n  },\n  {\n    fromContainer: ".classContainerFrom2",\n    toElements: ".classToB"\n  },\n  {\n    resolveFromElements: function() { \n        return document.querySelectorAll(\'.classElementFrom3\'); \n    },\n    toElements: ".classToC"\n  }\n];\n\nopenKeyNav.init({\n    modesConfig: {\n        move: {\n            config: moveConfig\n        }\n    }\n});\n'})}),"\n",(0,r.jsx)(n.h3,{id:"requirements-and-optional-fields",children:"Requirements and Optional Fields"}),"\n",(0,r.jsxs)(n.p,{children:["For each ",(0,r.jsx)(n.code,{children:"moveConfig"})," object:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["At least one of ",(0,r.jsx)(n.code,{children:"fromContainer"}),", ",(0,r.jsx)(n.code,{children:"fromElements"}),", or ",(0,r.jsx)(n.code,{children:"resolveFromElements"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"toElements"})," must be specified."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fromExclude"})," is optional."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"callback"})," is optional."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These configuration options provide flexibility in defining how draggable elements and their target drop zones are identified and interacted with, enhancing the keyboard accessibility of drag-and-drop interactions on your website."}),"\n",(0,r.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Activate Drag-and-drop Mode"}),": Press the ",(0,r.jsx)(n.code,{children:"m"})," key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select a Draggable Element"}),": Press the key combination on the label of the draggable element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Move the Element to a Drop Zone"}),": Press the key combination on the label of the drop zone."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using drag-and-drop mode, you can create a fully keyboard-accessible drag-and-drop experience on your website, enhancing usability for keyboard users."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var r=o(6540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);