"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[843],{33732:function(S,t,e){e.r(t),e.d(t,{FORM_TYPE_MAP:function(){return c}});var g=e(71577),d=e(12461),s=e(67294),u=e(75244),v=e(48186),p=e(70113),o=e(85893),c={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},R=function(){var f=(0,s.useRef)(),r=(0,s.useRef)();return(0,o.jsx)("div",{children:(0,o.jsx)(u.QV,{name:"\u7528\u6237",columns:(0,p.P)(),request:v.P,bordered:!0,innerRef:f,actionRef:r,toolbar:{actions:[(0,o.jsx)(g.Z,{type:"primary",onClick:function(){var x;(x=f.current)===null||x===void 0||x.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:v.R,onFinish:function(x,m){return console.log({values:x}),new Promise(function(i){setTimeout(function(){var l;i(!0),d.ZP.success(c[m]+"\u6210\u529F"),(l=r.current)===null||l===void 0||l.reload()},1e3)})}})})};t.default=R},39111:function(S,t,e){e.r(t),e.d(t,{default:function(){return h}});var g=e(97857),d=e.n(g),s=e(5574),u=e.n(s),v=e(71577),p=e(12902),o=e(67294),c=e(75244),R=e(65360),I=e(85893),f=function(m){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u51FA\u751F\u65E5\u671F",dataIndex:"birthday",valueType:"date"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(l,n,a,T,C){return[(0,I.jsx)(c.Qj,{onClick:function(){var P;return(P=C.current)===null||P===void 0?void 0:P.openModal("edit",n)},children:"\u7F16\u8F91"},1),(0,I.jsx)(R.Z,{title:"\u786E\u8BA4\u5220\u9664\u5417?",onConfirm:function(){return m(n.id)},children:(0,I.jsx)(c.Qj,{danger:!0,children:"\u5220\u9664"})},2)]}}]},r=function(){var m=(0,o.useRef)(),i=(0,o.useState)([{id:1,name:"\u738B\u5148\u751F",phone:"1596668888",sex:"\u7537"}]),l=u()(i,2),n=l[0],a=l[1],T=function(P,E,j){if(E==="new"&&a(n.concat(d()(d()({},P),{},{id:Date.now()}))),E==="edit"){var F=(0,p.ZP)(n,function(O){var M=O.findIndex(function(D){return D.id===j.id});O[M]=d()(d()({},j),P)});a(F)}},C=function(P){a(n.filter(function(E){return E.id!==P}))};return(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{style:{textAlign:"right",marginBottom:"10px"},children:(0,I.jsx)(v.Z,{type:"primary",onClick:function(){m.current.openModal()},children:"\u65B0\u589E\u7528\u6237"})}),(0,I.jsx)(c.QV,{columns:f(C),dataSource:n,innerRef:m,onFinish:T,bordered:!0,search:!1,pagination:!1,noPadding:!0})]})},h=r},33517:function(S,t,e){e.r(t),e.d(t,{FORM_TYPE_MAP:function(){return o},default:function(){return R}});var g=e(12461),d=e(67294),s=e(75244),u=function(){return new Promise(function(f){setTimeout(function(){return f({data:[{id:"1",name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}]})},1e3)})},v=e(85893),p=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]},renderText:function(r,h){return h.deptName}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeName",hideInForm:!0},{hideInTable:!0,valueType:"dependency",name:["isMember"],columns:function(r){var h=r.isMember;return h?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}},{valueType:"option",title:"\u64CD\u4F5C",render:function(r,h,x,m,i){return[(0,v.jsx)(s.Qj,{onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.openModal("edit",h)},children:"\u7F16\u8F91"},1)]}}]},o={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},c=function(){var f=(0,d.useRef)(),r=(0,d.useRef)(),h=function(m,i,l){return console.log({values:m,type:i,formData:l}),new Promise(function(n){setTimeout(function(){var a;n(!0),g.ZP.success(o[i]+"\u6210\u529F"),(a=r.current)===null||a===void 0||a.reload()},1e3)})};return(0,v.jsx)("div",{children:(0,v.jsx)(s.QV,{name:"\u7528\u6237",columns:p(),innerRef:f,actionRef:r,request:u,onFinish:h,bordered:!0,search:!1,pagination:!1,formProps:{layout:"horizontal",labelCol:{span:4}}})})},R=c},25985:function(S,t,e){e.r(t),e.d(t,{default:function(){return h}});var g=e(15009),d=e.n(g),s=e(99289),u=e.n(s),v=e(67294),p=e(75244),o=function(m){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",m),new Promise(function(i){setTimeout(function(){m.current===1?i({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):i({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},c=function(m){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",m),new Promise(function(i){setTimeout(function(){i(!0)},500)})},R=e(12461),I=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},f=e(85893),r=function(){var m=(0,v.useRef)(null),i=(0,v.useRef)(null);return(0,f.jsx)(p.QV,{columns:I(),request:o,pagination:{pageSize:5},innerRef:m,toolbar:{actions:[(0,f.jsx)(p.zx,{type:"primary",onClick:function(){var n;return(n=m.current)===null||n===void 0?void 0:n.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var l=u()(d()().mark(function n(a,T){var C;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(T!=="new"){P.next=5;break}return P.next=3,c(a);case 3:R.ZP.success("\u65B0\u5EFA\u6210\u529F!"),(C=i.current)===null||C===void 0||C.reload();case 5:case"end":return P.stop()}},n)}));return function(n,a){return l.apply(this,arguments)}}()})},h=r},15992:function(S,t,e){e.r(t),e.d(t,{default:function(){return l}});var g=e(15009),d=e.n(g),s=e(97857),u=e.n(s),v=e(99289),p=e.n(v),o=e(67294),c=e(75244),R=function(a){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",a),new Promise(function(T){setTimeout(function(){a.current===1?T({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):T({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},I=function(a){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",a),new Promise(function(T){setTimeout(function(){T(!0)},500)})},f=function(a){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",a),new Promise(function(T){setTimeout(function(){T(!0)},500)})},r=function(a){return console.log("\u5220\u9664\u7528\u6237\u53C2\u6570:",a),new Promise(function(T){setTimeout(function(){T(!0)},500)})},h=e(12461),x=e(85893),m=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(T,C,y,P,E){return[(0,x.jsx)(c.Qj,{onClick:function(){var F;console.log("editclick",E),(F=E.current)===null||F===void 0||F.openModal("edit",C)},children:"\u7F16\u8F91"},1)]}}]},i=function(){var a=(0,o.useRef)(null),T=(0,o.useRef)(null);return(0,x.jsx)(c.QV,{columns:m(),request:R,pagination:{pageSize:5},innerRef:a,toolbar:{actions:[(0,x.jsx)(c.zx,{type:"primary",onClick:function(){var y;return(y=a.current)===null||y===void 0?void 0:y.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var C=p()(d()().mark(function y(P,E,j){var F,O;return d()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(E!=="new"){D.next=5;break}return D.next=3,I(P);case 3:h.ZP.success("\u65B0\u5EFA\u6210\u529F!"),(F=T.current)===null||F===void 0||F.reload();case 5:if(E!=="edit"){D.next=10;break}return D.next=8,f(u()(u()({},P),{},{id:j.id}));case 8:h.ZP.success("\u66F4\u65B0\u6210\u529F!"),(O=T.current)===null||O===void 0||O.reload();case 10:case"end":return D.stop()}},y)}));return function(y,P,E){return C.apply(this,arguments)}}(),delFunction:r,rowSelection:{}})},l=i},3463:function(S,t,e){e.r(t),e.d(t,{default:function(){return o}});var g=e(75244),d=function(){return new Promise(function(R){setTimeout(function(){return R({data:[{id:1,name:"Jack",birthday:1667375314278,sex:"man",type:"1",range:[1667375314278,1667375314278],status:"1",createTime:1667375314278}]})},1e3)})},s=e(20550),u=e(85893),v=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",width:80},{title:"\u751F\u65E5",dataIndex:"birthday",valueType:"date",width:110},{title:"\u6027\u522B",dataIndex:"sex",valueType:"select",valueEnum:{man:{text:"\u7537"},woman:{text:"\u5973"}},width:80},{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",fieldProps:{options:[{label:"\u4F1A\u5458",value:"1"},{label:"\u975E\u4F1A\u5458",value:"2"}]},width:80},{title:"\u4F1A\u5458\u8303\u56F4",dataIndex:"range",valueType:"dateRange",width:130},{title:"\u72B6\u6001",dataIndex:"status",render:function(I){return I?(0,u.jsx)(s.Z,{color:"success",children:"\u5F00\u542F"}):(0,u.jsx)(s.Z,{children:"\u672A\u5F00\u542F"})},renderExport:function(I){return I?"\u5F00\u542F":"\u672A\u5F00\u542F"},width:80},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",valueType:"dateTime",width:100}]},p=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(g.QV,{noPadding:!0,name:"\u7528\u6237",search:!1,columns:v(),request:d,bordered:!0,rowSelection:{},tableAlertOption:{enableExport:!0}})})},o=p},44106:function(S,t,e){e.r(t),e.d(t,{default:function(){return R}});var g=e(12461),d=e(71577),s=e(67294),u=e(75244),v=e(48186),p=e(85893),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(r,h,x,m,i){return[(0,p.jsx)(u.Qj,{onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.openModal("edit",h)},children:"\u7F16\u8F91"},1)]}}]},c=function(){var f=(0,s.useRef)(),r=(0,s.useRef)(),h=function(m){return console.log({values:m}),new Promise(function(i){setTimeout(function(){var l;i(!0),g.ZP.success("\u64CD\u4F5C\u6210\u529F"),(l=r.current)===null||l===void 0||l.reload()},1e3)})};return(0,p.jsx)(u.QV,{name:"\u7528\u6237",search:!1,columns:o(),innerRef:f,actionRef:r,request:v.P,onFinish:h,bordered:!0,toolbar:{actions:[(0,p.jsx)(d.Z,{type:"primary",onClick:function(){var m;(m=f.current)===null||m===void 0||m.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:v.R,formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}}})},R=c},20212:function(S,t,e){e.r(t),e.d(t,{default:function(){return m}});var g=e(15009),d=e.n(g),s=e(97857),u=e.n(s),v=e(99289),p=e.n(v),o=e(67294),c=e(75244),R=function(){return new Promise(function(l){setTimeout(function(){return l({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},I=function(l){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",l),new Promise(function(n){setTimeout(function(){n(!0)},500)})},f=function(l){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",l),new Promise(function(n){setTimeout(function(){n(!0)},500)})},r=e(85893),h=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(n,a,T,C,y){return[(0,r.jsx)(c.Qj,{onClick:function(){var E;return(E=y.current)===null||E===void 0?void 0:E.openModal("edit",a)},children:"\u7F16\u8F91"},1)]}}]},x=function(){var l=(0,o.useRef)(),n=(0,o.useRef)();return(0,r.jsx)("div",{children:(0,r.jsx)(c.QV,{name:"\u7528\u6237",columns:h(),innerRef:l,actionRef:n,request:R,bordered:!0,search:!1,onFinish:function(){var a=p()(d()().mark(function T(C,y,P){return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(y!=="new"){j.next=3;break}return j.next=3,I(C);case 3:if(y!=="edit"){j.next=6;break}return j.next=6,f(u()(u()({},C),{},{id:P.id}));case 6:n.current.reload();case 7:case"end":return j.stop()}},T)}));return function(T,C,y){return a.apply(this,arguments)}}()})})},m=x},32413:function(S,t,e){e.r(t),e.d(t,{default:function(){return I}});var g=e(12461),d=e(71577),s=e(67294),u=e(75244),v=function(){return new Promise(function(r){setTimeout(function(){return r({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},p=function(r){return console.log("request detail for id",r),new Promise(function(h){setTimeout(function(){return h(8888)},500)})},o=e(85893),c=function(){return[{title:"\u989D\u5916\u4FE1\u606F",dataIndex:"extra",hideInTable:!0},{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(h,x,m,i,l){return[(0,o.jsx)(u.Qj,{onClick:function(){var a;return(a=l.current)===null||a===void 0?void 0:a.openModal("edit",x)},children:"\u7F16\u8F91"},1)]}}]},R=function(){var r=(0,s.useRef)(),h=(0,s.useRef)(),x=function(i){return console.log({values:i}),new Promise(function(l){setTimeout(function(){var n;l(!0),g.ZP.success("\u64CD\u4F5C\u6210\u529F"),(n=h.current)===null||n===void 0||n.reload()},1e3)})};return(0,o.jsx)("div",{children:(0,o.jsx)(u.QV,{name:"\u7528\u6237",columns:c(),innerRef:r,actionRef:h,request:v,onFinish:x,bordered:!0,toolbar:{actions:[(0,o.jsx)(d.Z,{type:"primary",onClick:function(){var i;(i=r.current)===null||i===void 0||i.openModal()},children:"\u65B0\u589E"},1)]},search:!1,onOpen:function(i,l,n){if(i==="edit")return p(n.id).then(function(a){var T;(T=l.current)===null||T===void 0||T.setFields([{name:"extra",value:a,touched:!1}])})}})})},I=R},60491:function(S,t,e){e.r(t),e.d(t,{default:function(){return o}});var g=e(67294),d=e(75244),s=e(48186),u=e(85893),v=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(I,f,r,h,x){return[(0,u.jsx)(d.Qj,{onClick:function(){var i;return(i=x.current)===null||i===void 0?void 0:i.openModal("read",f)},children:"\u67E5\u770B"},1)]}}]},p=function(){var R=(0,g.useRef)(null);return(0,u.jsx)("div",{children:(0,u.jsx)(d.QV,{name:"\u7528\u6237",search:!1,columns:v(),innerRef:R,request:s.P,bordered:!0,formProps:{layout:"horizontal",labelCol:{span:5}}})})},o=p},71742:function(S,t,e){e.r(t),e.d(t,{default:function(){return I}});var g=e(75244),d=e(15009),s=e.n(d),u=e(99289),v=e.n(u),p=function(){var f=v()(s()().mark(function r(){return s()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",new Promise(function(m){setTimeout(function(){return m({data:[{id:1,name:"\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u7528\u6237\u540D",phone:15881234567}]})},500)}));case 1:case"end":return x.stop()}},r)}));return function(){return f.apply(this,arguments)}}(),o=e(85893),c=[{title:"\u7528\u6237\u540D",dataIndex:"name",ellipsis:!0,copyable:!0,width:100,render:function(r){return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{style:{marginRight:"3px"},children:"\u{1F468}"}),r]})}},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0,renderText:function(r){return"+86 "+r}}],R=function(){return(0,o.jsx)(g.QV,{search:!1,pagination:!1,noPadding:!0,columns:c,request:p,bordered:!0})},I=R},62898:function(S,t,e){e.r(t),e.d(t,{default:function(){return p}});var g=e(75244),d=function(c){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",c),new Promise(function(R){setTimeout(function(){c.current===1?R({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):R({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},s=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},u=e(85893),v=function(){return(0,u.jsx)(g.QV,{columns:s(),request:d,pagination:{pageSize:5}})},p=v},62376:function(S,t,e){e.r(t),e.d(t,{default:function(){return i}});var g=e(15009),d=e.n(g),s=e(97857),u=e.n(s),v=e(99289),p=e.n(v),o=e(67294),c=e(75244),R=function(n){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",n),new Promise(function(a){setTimeout(function(){n.current===1?a({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):a({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},I=function(n){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",n),new Promise(function(a){setTimeout(function(){a(!0)},500)})},f=function(n){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",n),new Promise(function(a){setTimeout(function(){a(!0)},500)})},r=e(12461),h=e(85893),x=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(a,T,C,y,P){return[(0,h.jsx)(c.Qj,{onClick:function(){var j;console.log("editclick",P),(j=P.current)===null||j===void 0||j.openModal("edit",T)},children:"\u7F16\u8F91"},1)]}}]},m=function(){var n=(0,o.useRef)(null),a=(0,o.useRef)(null);return(0,h.jsx)(c.QV,{columns:x(),request:R,pagination:{pageSize:5},innerRef:n,toolbar:{actions:[(0,h.jsx)(c.zx,{type:"primary",onClick:function(){var C;return(C=n.current)===null||C===void 0?void 0:C.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var T=p()(d()().mark(function C(y,P,E){var j,F;return d()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(P!=="new"){M.next=5;break}return M.next=3,I(y);case 3:r.ZP.success("\u65B0\u5EFA\u6210\u529F!"),(j=a.current)===null||j===void 0||j.reload();case 5:if(P!=="edit"){M.next=10;break}return M.next=8,f(u()(u()({},y),{},{id:E.id}));case 8:r.ZP.success("\u66F4\u65B0\u6210\u529F!"),(F=a.current)===null||F===void 0||F.reload();case 10:case"end":return M.stop()}},C)}));return function(C,y,P){return T.apply(this,arguments)}}()})},i=m},98064:function(S,t,e){e.r(t),e.d(t,{default:function(){return p}});var g=e(75244),d=function(c){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",c),new Promise(function(R){setTimeout(function(){R({data:[{id:1,date:1692861082010,dateTime:1692861082010,dateRange:[16908192e5,1692861082010],money:1234,userId:1}],success:!0,total:1})},500)})},s=function(){return[{title:"date",dataIndex:"date",valueType:"date"},{title:"dateTime",dataIndex:"dateTime",valueType:"dateTime"},{title:"dateRange",dataIndex:"dateRange",valueType:"dateRange"},{title:"\u91D1\u989D",dataIndex:"money",valueType:"money"}]},u=e(85893),v=function(){return(0,u.jsx)(g.QV,{columns:s(),request:d,search:!1,pagination:!1})},p=v},48186:function(S,t,e){e.d(t,{P:function(){return g},R:function(){return d}});var g=function(){return new Promise(function(u){setTimeout(function(){return u({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}],success:!0,total:2})},1e3)})},d=function(u){return new Promise(function(v){console.log("delete record",u),setTimeout(function(){return v(!0)},500)})}},70113:function(S,t,e){e.d(t,{P:function(){return s}});var g=e(75244),d=e(85893),s=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(p,o,c,R,I){return[(0,d.jsx)(g.Qj,{onClick:function(){var r;return(r=I.current)===null||r===void 0?void 0:r.openModal("edit",o)},children:"\u7F16\u8F91"},1)]}}]}}}]);