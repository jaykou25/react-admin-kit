(self["webpackChunkreact_admin_kit"]=self["webpackChunkreact_admin_kit"]||[]).push([[697],{8036:function(){},22231:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(9684);n(72255)},17955:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(88089),c=n(65659),o=n(4187),m=l.memo((e=>{var t=e.demos,m=t["protable-basic"].component,i=t["protable-modalformlayout"].component,u=t["protable-readonly"].component,d=t["protable-onopen"].component,E=t["protable-controlled"].component,s=t["protable-export"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"protable---\u9ad8\u7ea7\u8868\u683c"},l.createElement(r.AnchorLink,{to:"#protable---\u9ad8\u7ea7\u8868\u683c","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"ProTable - \u9ad8\u7ea7\u8868\u683c"),l.createElement("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u662f ",l.createElement(r.Link,{to:"https://procomponents.ant.design/components/table"},"Antd ProTable")," \u548c",l.createElement("code",null,"ModalForm"),"\u7684\u7ed3\u5408, \u5e76\u4e14\u878d\u5165\u4e86\u5220\u9664, \u524d\u7aef\u5bfc\u51fa\u7b49\u529f\u80fd. \u4f7f\u7528\u4e0a\u4ee3\u7801\u4f1a\u66f4\u52a0\u7b80\u6d01."),l.createElement("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u5e76\u4e0d\u719f\u6089 ProTable \u7684 api, \u5b8c\u5168\u53ef\u4ee5\u76f4\u63a5\u770b\u4f8b\u5b50\u6765\u5f00\u59cb\u4f7f\u7528."),l.createElement("h3",{id:"\u4e00\u4e2a\u57fa\u672c\u7684-crud-\u8868\u683c"},l.createElement(r.AnchorLink,{to:"#\u4e00\u4e2a\u57fa\u672c\u7684-crud-\u8868\u683c","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4e00\u4e2a\u57fa\u672c\u7684 CRUD \u8868\u683c")),l.createElement(a.default,t["protable-basic"].previewerProps,l.createElement(m,null)),l.createElement("div",{className:"markdown"},l.createElement("ul",null,l.createElement("li",null,"\u7528 innerRef \u6765\u63a7\u5236\u5f39\u7a97\u7684\u6253\u5f00\u4ee5\u53ca\u8d4b\u521d\u59cb\u503c"),l.createElement("li",null,"columns \u91cc\u7684",l.createElement("code",null,"render"),"\u65b9\u6cd5\u589e\u52a0\u4e86 innerRef, \u7528\u6765\u63a7\u5236\u5f39\u7a97\u7684\u6253\u5f00\u548c\u8d4b\u503c")),l.createElement(c.Z,{code:"{\n  valueType: 'option',\n  title: '\u64cd\u4f5c',\n  render: (text, record, index, actionRef, innerRef) => [\n    <Button onClick={() => innerRef.current?.openModal('edit', record)}>\u7f16\u8f91</Button>\n  ]\n}",lang:"js"}),l.createElement("ul",null,l.createElement("li",null,"\u4f20\u5165 delFunction \u5e76\u4e14\u5f00\u542f rowSelection \u540e, \u81ea\u52a8\u652f\u6301\u6279\u91cf\u5220\u9664\u529f\u80fd"),l.createElement("li",null,"\u4f20\u5165 delFunction \u5e76\u4e14 columns \u91cc\u5f00\u542f\u5220\u9664\u540e, \u64cd\u4f5c\u5217\u81ea\u52a8\u652f\u6301\u5220\u9664. \u9ed8\u8ba4\u5173\u95ed")),l.createElement(c.Z,{code:"{\n  valueType: 'option',\n  title: '\u64cd\u4f5c',\n  enableDelete: true, // boolean\u6216\u51fd\u6570\n  enabledDelete: () => ({\n    disabled: true,\n    visible: true,\n    danger: true\n  }),\n  render: (text, record, index, actionRef, innerRef) => [\n    <Button onClick={() => innerRef.current?.openModal('edit', record)}>\u7f16\u8f91</Button>\n  ]\n}",lang:"js"}),l.createElement("h3",{id:"\u66f4\u6539\u5f39\u7a97\u8868\u5355\u7684\u5e03\u5c40"},l.createElement(r.AnchorLink,{to:"#\u66f4\u6539\u5f39\u7a97\u8868\u5355\u7684\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u66f4\u6539\u5f39\u7a97\u8868\u5355\u7684\u5e03\u5c40")),l.createElement(a.default,t["protable-modalformlayout"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u53ea\u8bfb\u6a21\u5f0f"},l.createElement(r.AnchorLink,{to:"#\u53ea\u8bfb\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53ea\u8bfb\u6a21\u5f0f")),l.createElement(a.default,t["protable-readonly"].previewerProps,l.createElement(u,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u6253\u5f00\u5f39\u7a97\u540e\u8bf7\u6c42\u6570\u636e\u56de\u663e"},l.createElement(r.AnchorLink,{to:"#\u6253\u5f00\u5f39\u7a97\u540e\u8bf7\u6c42\u6570\u636e\u56de\u663e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6253\u5f00\u5f39\u7a97\u540e\u8bf7\u6c42\u6570\u636e\u56de\u663e"),l.createElement("p",null,"\u53ef\u4ee5\u7528 formType \u5224\u65ad\u53ea\u6709\u5f53\u7f16\u8f91\u65f6\u624d\u8bf7\u6c42")),l.createElement(a.default,t["protable-onopen"].previewerProps,l.createElement(d,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u53d7\u63a7\u8868\u5355"},l.createElement(r.AnchorLink,{to:"#\u53d7\u63a7\u8868\u5355","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53d7\u63a7\u8868\u5355"),l.createElement("p",null,"\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528 request, \u5f53\u6210\u666e\u901a table \u6765\u4f7f\u7528. \u540c\u6837\u96c6\u6210\u4e86\u65b0\u589e\u7f16\u8f91\u529f\u80fd.")),l.createElement(a.default,t["protable-controlled"].previewerProps,l.createElement(E,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u5f00\u542f\u524d\u7aef\u5bfc\u51fa\u5217\u8868"},l.createElement(r.AnchorLink,{to:"#\u5f00\u542f\u524d\u7aef\u5bfc\u51fa\u5217\u8868","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5f00\u542f\u524d\u7aef\u5bfc\u51fa\u5217\u8868"),l.createElement("p",null,"\u53ef\u4ee5\u4f7f\u7528",l.createElement("code",null,"renderExport"),"\u81ea\u5b9a\u4e49\u5bfc\u51fa\u7684\u5185\u5bb9")),l.createElement(a.default,t["protable-export"].previewerProps,l.createElement(s,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u5404\u533a\u57df\u53c2\u8003\u56fe"},l.createElement(r.AnchorLink,{to:"#\u5404\u533a\u57df\u53c2\u8003\u56fe","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5404\u533a\u57df\u53c2\u8003\u56fe"),l.createElement("p",null,"\u4e0b\u9762\u7684\u56fe\u5217\u51fa\u4e86 ProTable \u5404\u533a\u57df\u7684\u540d\u79f0, \u65b9\u4fbf\u7406\u89e3\u5b83\u7684 api ",l.createElement("img",{src:n(23892),alt:"ProTable\u5404\u533a\u57df\u540d\u79f0"})),l.createElement("h3",{id:"protable-\u81ea\u5b9a\u4e49\u7684-api"},l.createElement(r.AnchorLink,{to:"#protable-\u81ea\u5b9a\u4e49\u7684-api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"ProTable \u81ea\u5b9a\u4e49\u7684 API"),l.createElement("p",null,"\u5217\u4e3e\u5728 Form \u6a21\u5f0f\u4e0b\u7279\u6709\u7684"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"name"),l.createElement("td",null,"\u7528\u4e8e\u663e\u793a\u5728\u8868\u683c\u5934\u4e0a\u53ca\u5f39\u7a97\u7684 title \u4e0a"),l.createElement("td",null,"string"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"innerRef"),l.createElement("td",null,"\u7528\u4e8e\u63a7\u5236\u5f39\u7a97\u7684\u6253\u5f00; \u83b7\u53d6 dataSource, \u603b\u9875\u6570\u7b49\u4fe1\u606f"),l.createElement("td",null,"React.MutableRefObject"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"noPadding"),l.createElement("td",null,"\u662f\u5426\u53bb\u6389 table \u5916\u7684\u7684 padding"),l.createElement("td",null,l.createElement("code",null,"Boolean")),l.createElement("td",null,l.createElement("code",null,"false"))),l.createElement("tr",null,l.createElement("td",null,"onFinish"),l.createElement("td",null,"\u70b9\u51fb\u5f39\u7a97\u786e\u8ba4\u6309\u94ae\u540e\u7684\u56de\u8c03"),l.createElement("td",null,"(values, formType, formData) => Promise<any> | void"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"onOpen"),l.createElement("td",null,"\u6253\u5f00\u5f39\u7a97\u540e\u7684\u56de\u8c03"),l.createElement("td",null,"(formType, formRef, formData) => Promise | void"),l.createElement("td",null,"-")),l.createElement("tr",null,l.createElement("td",null,"tableAlertOption"),l.createElement("td",null,"tableAlertOption \u533a\u57df\u7684\u9009\u9879, \u8fd9\u91cc\u9762\u96c6\u6210\u4e86\u5220\u9664, \u5bfc\u51fa\u7b49\u529f\u80fd"),l.createElement("td",null,l.createElement(r.AnchorLink,{to:"/core-components/pro-table#tablealertoption"},"TableAlertOption")),l.createElement("td",null,l.createElement("code",null,"{"," hideDelete: false, hideExport: true ","}"))))),l.createElement("h4",{id:"tablealertoption"},l.createElement(r.AnchorLink,{to:"#tablealertoption","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"TableAlertOption"),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u540d\u79f0"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"hideDelete"),l.createElement("td",null,"\u662f\u5426\u9690\u85cf\u52fe\u9009\u5220\u9664\u529f\u80fd"),l.createElement("td",null,"Boolean"),l.createElement("td",null,l.createElement("code",null,"false"))),l.createElement("tr",null,l.createElement("td",null,"hideExport"),l.createElement("td",null,"\u662f\u5426\u9690\u85cf\u5bfc\u51fa\u529f\u80fd"),l.createElement("td",null,"Boolean"),l.createElement("td",null,l.createElement("code",null,"true"))),l.createElement("tr",null,l.createElement("td",null,"exportName"),l.createElement("td",null,"\u5bfc\u51fa\u6587\u4ef6\u7684\u540d\u5b57"),l.createElement("td",null,"string"),l.createElement("td",null,"\u9ed8\u8ba4\u4ee5 ProTable \u7684 name \u5c5e\u6027\u4e3a\u5bfc\u51fa\u6587\u4ef6\u540d")),l.createElement("tr",null,l.createElement("td",null,"actions"),l.createElement("td",null,"\u5b9a\u4e49\u8be5\u533a\u57df\u989d\u5916\u7684\u6309\u94ae"),l.createElement("td",null,"Array[ReactNode]"),l.createElement("td",null,"-")))),l.createElement("h3",{id:"\u8868\u683c\u573a\u666f\u7684-schema"},l.createElement(r.AnchorLink,{to:"#\u8868\u683c\u573a\u666f\u7684-schema","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8868\u683c\u573a\u666f\u7684 Schema"),l.createElement("p",null,"\u5217\u4e3e\u5728 Table \u6a21\u5f0f\u4e0b\u7279\u6709\u7684. Form \u6a21\u5f0f\u7684\u8bf7\u53c2\u8003",l.createElement(r.AnchorLink,{to:"/core-components/schema-form#%E8%A1%A8%E5%8D%95%E5%9C%BA%E6%99%AF%E7%9A%84-schema"},"SchemaForm")),l.createElement(o.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"renderExport"),l.createElement("td",null,"\u5b9a\u4e49\u524d\u7aef\u5bfc\u51fa\u7684\u5185\u5bb9"),l.createElement("td",null,"(text, record) => string"),l.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(m,{demos:n})}},4187:function(e,t,n){"use strict";var l=n(67294),r=n(97397),a=n.n(r);n(8036);function c(e,t){return d(e)||u(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(m){o=!0,r=m}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),o=c(r,2),m=o[0],i=o[1],u=(0,l.useState)(!1),d=c(u,2),E=d[0],s=d[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){i(e.scrollLeft>0),s(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.createElement("table",null,t)))};t["Z"]=E},23892:function(e,t,n){e.exports=n.p+"static/ProTable.250d9bad.png"}}]);