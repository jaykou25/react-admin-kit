"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[544],{24253:function(P,r,_){_.r(r);var c=_(39502),m=_(91898),t=_(19532),j=_(533),v=_(60037),h=_(44476),D=_(50473),n=_(61748),f=_(67294),e=_(85893);function l(){var a=(0,n.eL)(),u=a.texts;return(0,e.jsx)(n.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"button---\u6309\u94AE",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#button---\u6309\u94AE",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Button - \u6309\u94AE"]}),(0,e.jsxs)("p",{children:[u[0].value,(0,e.jsx)("code",{children:u[1].value}),u[2].value]}),(0,e.jsxs)("h3",{id:"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u672C\u7684\u4F7F\u7528\u65B9\u6CD5"]})]}),(0,e.jsx)(n.Dl,{demo:{id:"button-demo-basic"},previewerProps:{filename:"src/Button/demos/basic/index.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h3",{id:"api",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"button",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#button",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Button"]})]}),(0,e.jsx)(c.Z,{name:"Self",filePath:"src/Button/index.tsx",filepath:"src/Button/index.tsx"})]})})}r.default=l},39502:function(P,r,_){var c=_(61748),m=_(44476),t=_(85893),j=function(h){var D=(0,c.WF)(),n=D.themeConfig.apiDoc||[],f=h.name,e=h.filePath,l=n.find(function(s){return s.displayName===f&&s.filePath===e}),a={name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"};if(!l)return null;var u=Object.values(l.props),x=function(d){return d?d.replace("@description ",""):"--"};return(0,t.jsx)("div",{className:"markdown",children:(0,t.jsxs)(m.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:a.name}),(0,t.jsx)("th",{children:a.description}),(0,t.jsx)("th",{children:a.type}),(0,t.jsx)("th",{children:a.default})]})}),(0,t.jsx)("tbody",{children:u.map(function(s){var d,o;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s.name}),(0,t.jsx)("td",{children:x(s.description)}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:(d=s.type)===null||d===void 0?void 0:d.name})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:((o=s.defaultValue)===null||o===void 0?void 0:o.value)||s.required&&a.required||"--"})})]},s.name)})})]})})};r.Z=j},44476:function(P,r,_){var c=_(97857),m=_.n(c),t=_(5574),j=_.n(t),v=_(13769),h=_.n(v),D=_(111),n=_(67294),f=_(48119),e=_(85893),l=["children"],a=function(x){var s=x.children,d=h()(x,l),o=(0,n.useRef)(null),b=(0,n.useState)(!1),M=j()(b,2),p=M[0],U=M[1],A=(0,n.useState)(!1),O=j()(A,2),C=O[0],B=O[1];return(0,n.useEffect)(function(){var i=o.current;if(i){var E=(0,D.Z)(function(){U(i.scrollLeft>0),B(i.scrollLeft<i.scrollWidth-i.offsetWidth)},100);return E(),i.addEventListener("scroll",E),window.addEventListener("resize",E),function(){i.removeEventListener("scroll",E),window.removeEventListener("resize",E)}}},[]),(0,e.jsx)("div",{className:"dumi-default-table",children:(0,e.jsx)("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":p||void 0,"data-right-folded":C||void 0,children:(0,e.jsx)("table",m()(m()({},d),{},{children:s}))})})};r.Z=a}}]);