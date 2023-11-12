"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[283],{8938:function(P,o,_){_.r(o);var c=_(39502),u=_(91898),s=_(19532),j=_(533),f=_(60037),h=_(44476),v=_(50473),t=_(61748),D=_(67294),e=_(85893);function l(){var i=(0,t.eL)(),a=i.texts;return(0,e.jsx)(t.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"settingprovider---\u7EC4\u4EF6\u9ED8\u8BA4\u8BBE\u7F6E",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#settingprovider---\u7EC4\u4EF6\u9ED8\u8BA4\u8BBE\u7F6E",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SettingProvider - \u7EC4\u4EF6\u9ED8\u8BA4\u8BBE\u7F6E"]}),(0,e.jsx)("p",{children:a[0].value}),(0,e.jsxs)("h3",{id:"protable",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#protable",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ProTable"]}),(0,e.jsx)("p",{children:a[1].value})]}),(0,e.jsx)(t.Dl,{demo:{id:"settingprovider-demo-table"},previewerProps:{filename:"src/SettingProvider/demos/table/index.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"modalform",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#modalform",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ModalForm"]}),(0,e.jsx)("p",{children:a[2].value})]}),(0,e.jsx)(t.Dl,{demo:{id:"settingprovider-demo-modalform"},previewerProps:{filename:"src/SettingProvider/demos/modalForm/index.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"schemaform",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#schemaform",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SchemaForm"]}),(0,e.jsx)("p",{children:a[3].value})]}),(0,e.jsx)(t.Dl,{demo:{id:"settingprovider-demo-schemaform"},previewerProps:{filename:"src/SettingProvider/demos/schemaForm/index.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"formupload",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#formupload",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FormUpload"]}),(0,e.jsx)("p",{children:a[4].value})]}),(0,e.jsx)(t.Dl,{demo:{id:"settingprovider-demo-formupload"},previewerProps:{filename:"src/SettingProvider/demos/formUpload/index.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,e.jsx)(c.Z,{name:"SettingProvider",filePath:"src/SettingProvider/index.tsx",filepath:"src/SettingProvider/index.tsx"})]})})}o.default=l},39502:function(P,o,_){var c=_(61748),u=_(44476),s=_(85893),j=function(h){var v=(0,c.WF)(),t=v.themeConfig.apiDoc||[],D=h.name,e=h.filePath,l=t.find(function(d){return d.displayName===D&&d.filePath===e}),i={name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"};if(!l)return null;var a=Object.values(l.props),E=function(n){return n?n.replace("@description ",""):"--"};return(0,s.jsx)("div",{className:"markdown",children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:i.name}),(0,s.jsx)("th",{children:i.description}),(0,s.jsx)("th",{children:i.type}),(0,s.jsx)("th",{children:i.default})]})}),(0,s.jsx)("tbody",{children:a.map(function(d){var n,m;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:d.name}),(0,s.jsx)("td",{children:E(d.description)}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:(n=d.type)===null||n===void 0?void 0:n.name})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:((m=d.defaultValue)===null||m===void 0?void 0:m.value)||d.required&&i.required||"--"})})]},d.name)})})]})})};o.Z=j},44476:function(P,o,_){var c=_(97857),u=_.n(c),s=_(5574),j=_.n(s),f=_(13769),h=_.n(f),v=_(111),t=_(67294),D=_(48119),e=_(85893),l=["children"],i=function(E){var d=E.children,n=h()(E,l),m=(0,t.useRef)(null),O=(0,t.useState)(!1),p=j()(O,2),b=p[0],U=p[1],g=(0,t.useState)(!1),M=j()(g,2),I=M[0],T=M[1];return(0,t.useEffect)(function(){var r=m.current;if(r){var x=(0,v.Z)(function(){U(r.scrollLeft>0),T(r.scrollLeft<r.scrollWidth-r.offsetWidth)},100);return x(),r.addEventListener("scroll",x),window.addEventListener("resize",x),function(){r.removeEventListener("scroll",x),window.removeEventListener("resize",x)}}},[]),(0,e.jsx)("div",{className:"dumi-default-table",children:(0,e.jsx)("div",{className:"dumi-default-table-content",ref:m,"data-left-folded":b||void 0,"data-right-folded":I||void 0,children:(0,e.jsx)("table",u()(u()({},n),{},{children:d}))})})};o.Z=i}}]);