"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[781],{92489:function(B,b,r){r.r(b);var A=r(39502),D=r(91898),l=r(37402),s=r(75131),T=r(75208),_=r(70023),d=r(40841),u=r(85956),h=r(67294),i=r(85893);function m(){var v=(0,u.useRouteMeta)(),j=v.texts;return(0,i.jsx)(u.DumiPage,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h1",{id:"linkbutton---\u94FE\u63A5\u6309\u94AE",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#linkbutton---\u94FE\u63A5\u6309\u94AE",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"LinkButton - \u94FE\u63A5\u6309\u94AE"]}),(0,i.jsxs)("p",{children:[j[0].value,(0,i.jsx)("code",{children:j[1].value}),j[2].value]}),(0,i.jsxs)("h3",{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"]})]}),(0,i.jsx)(u.DumiDemo,{demo:{id:"linkbutton-demo-basic"},previewerProps:{filename:"src/LinkButton/demos/basic/index.tsx"}}),(0,i.jsxs)("div",{className:"markdown",children:[(0,i.jsxs)("h3",{id:"api",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,i.jsxs)("h3",{id:"linkbutton",children:[(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#linkbutton",children:(0,i.jsx)("span",{className:"icon icon-link"})}),"LinkButton"]})]}),(0,i.jsx)(A.Z,{name:"ButtonSelf"})]})})}b.default=m},39502:function(B,b,r){var A=r(85956),D=r(70023),l=r(85893),s=function(_){var d=(0,A.useSiteData)(),u=d.themeConfig.apiDoc||[],h=_.name,i=u.find(function(o){return o.displayName===h}),m={name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"};if(!i)return null;var v=Object.values(i.props),j=function(p){return p?p.replace("@description ",""):"--"};return(0,l.jsx)("div",{className:"markdown",children:(0,l.jsxs)(D.Z,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:m.name}),(0,l.jsx)("th",{children:m.description}),(0,l.jsx)("th",{children:m.type}),(0,l.jsx)("th",{children:m.default})]})}),(0,l.jsx)("tbody",{children:v.map(function(o){var p,O;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:o.name}),(0,l.jsx)("td",{children:j(o.description)}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:(p=o.type)===null||p===void 0?void 0:p.name})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:((O=o.defaultValue)===null||O===void 0?void 0:O.value)||o.required&&m.required||"--"})})]},o.name)})})]})})};b.Z=s},70023:function(B,b,r){r.d(b,{Z:function(){return N}});var A=r(97857),D=r.n(A),l=r(5574),s=r.n(l),T=r(13769),_=r.n(T),d=r(44421),u=r(77226),h="Expected a function";function i(M,y,f){var R=!0,x=!0;if(typeof M!="function")throw new TypeError(h);return(0,u.Z)(f)&&(R="leading"in f?!!f.leading:R,x="trailing"in f?!!f.trailing:x),(0,d.Z)(M,y,{leading:R,maxWait:y,trailing:x})}var m=i,v=r(67294),j=r(48119),o=r(85893),p=["children"],O=function(y){var f=y.children,R=_()(y,p),x=(0,v.useRef)(null),U=(0,v.useState)(!1),C=s()(U,2),W=C[0],F=C[1],S=(0,v.useState)(!1),K=s()(S,2),w=K[0],e=K[1];return(0,v.useEffect)(function(){var t=x.current;if(t){var n=m(function(){F(t.scrollLeft>0),e(t.scrollLeft<t.scrollWidth-t.offsetWidth)},100);return n(),t.addEventListener("scroll",n),window.addEventListener("resize",n),function(){t.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}},[]),(0,o.jsx)("div",{className:"dumi-default-table",children:(0,o.jsx)("div",{className:"dumi-default-table-content",ref:x,"data-left-folded":W||void 0,"data-right-folded":w||void 0,children:(0,o.jsx)("table",D()(D()({},R),{},{children:f}))})})},N=O},91898:function(B,b,r){var A=r(67294),D=r(81901);function l(){return l=Object.assign?Object.assign.bind():function(_){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(_[h]=u[h])}return _},l.apply(this,arguments)}var s=function(d){return React.createElement("span",l({className:"dumi-default-badge"},d))},T=null},40841:function(B,b,r){var A=r(70593),D=r(67294),l=r(7043);function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(g){return Object.getOwnPropertyDescriptor(e,g).enumerable})),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(a){d(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function d(e,t,n){return t=u(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=h(e,"string");return s(t)==="symbol"?t:String(t)}function h(e,t){if(s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(s(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function i(e,t){return j(e)||v(e,t)||O(e,t)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,g,c,E,P=[],L=!0,I=!1;try{if(c=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;L=!1}else for(;!(L=(a=c.call(n)).done)&&(P.push(a.value),P.length!==t);L=!0);}catch(k){I=!0,g=k}finally{try{if(!L&&n.return!=null&&(E=n.return(),Object(E)!==E))return}finally{if(I)throw g}}return P}}function j(e){if(Array.isArray(e))return e}function o(e){return M(e)||N(e)||O(e)||p()}function p(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,t){if(e){if(typeof e=="string")return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}}function N(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return y(e)}function y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=[];return[].concat(e).forEach(function(a,g){var c="".concat(t?"".concat(t,"-"):"").concat(g);switch(a==null?void 0:a.type){case"ul":{var E,P=((E=n[n.length-1])===null||E===void 0?void 0:E.children)||n,L=f(a.props.children||[],c);P.push.apply(P,o(L));break}case"li":{var I=f(a.props.children,c);n.push({title:[].concat(a.props.children).filter(function(k){return k.type!=="ul"}),key:c,children:I,isLeaf:!I.length});break}default:}}),n}var R=function(t){var n=useState(f(t)),a=i(n,2),g=a[0],c=a[1];return useEffect(function(){c(f(t))},[t]),g},x=function(t){var n=t.isLeaf,a=t.expanded;return n?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):a?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},U=function(t){var n=t.isLeaf,a=t.expanded;return n?React.createElement("span",{className:"tree-switcher-leaf-line"}):a?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},C=function(){return{height:0,opacity:0}},W=function(t){var n=t.scrollHeight;return{height:n,opacity:1}},F=function(t){return{height:t?t.offsetHeight:0}},S=function(t,n){return(n==null?void 0:n.deadline)===!0||n.propertyName==="height"},K={motionName:"ant-motion-collapse",onAppearStart:C,onEnterStart:C,onAppearActive:W,onEnterActive:W,onLeaveStart:F,onLeaveActive:C,onAppearEnd:S,onEnterEnd:S,onLeaveEnd:S,motionDeadline:500},w=function(e){var t=R(e.children),n=createRef(),a=function(c,E){var P=E.isLeaf;P||c.shiftKey||c.metaKey||c.ctrlKey||n.current.onNodeExpand(c,E)};return React.createElement(Tree,{className:"dumi-default-tree",icon:x,ref:n,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_(_({},K),{},{motionAppear:!1}),onClick:a,treeData:[{key:"0",title:e.title||"<root>",children:t}],defaultExpandAll:!0,switcherIcon:U})}}}]);
