"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[424],{64566:function(F,a,e){e.r(a);var m=e(5574),u=e.n(m),x=e(67294),l=e(15634),c=e(44458),t=e(85893),I=function(){var h=(0,x.useState)(!1),i=u()(h,2),n=i[0],o=i[1],r=function(v){console.log({values:v})};return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{textAlign:"start"},children:(0,t.jsx)(l.zx,{type:"primary",onClick:function(){return o(!0)},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,t.jsx)(l.Yr,{title:"\u57FA\u672C\u8868\u5355",open:n,onCancel:function(){return o(!1)},onFinish:r,columns:c.z})]})};a.default=I},20165:function(F,a,e){e.r(a),e.d(a,{default:function(){return o}});var m=e(15009),u=e.n(m),x=e(99289),l=e.n(x),c=e(78957),t=e(14726),I=e(67294),s=e(15634),h=[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:["isMember"],columns:function(f){var v=f.isMember;return v?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}],i=e(85893),n=function(){var f=(0,I.useRef)(),v=function(){var d=l()(u()().mark(function p(y,j,R){return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:console.log({values:y,formType:j,formData:R});case 1:case"end":return C.stop()}},p)}));return function(y,j,R){return d.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{children:(0,i.jsx)(t.ZP,{type:"primary",onClick:function(){var p;return(p=f.current)===null||p===void 0?void 0:p.openModal("edit",{id:"1",name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"})},children:"\u7F16\u8F91"})}),(0,i.jsx)(s.Yr,{title:"\u57FA\u672C\u8868\u5355",innerRef:f,onFinish:v,columns:h})]})},o=n},60017:function(F,a,e){e.r(a),e.d(a,{default:function(){return I}});var m=e(14726),u=e(67294),x=e(15634),l=function(){return[{title:"\u662F\u5426\u663E\u793A\u7535\u8BDD",dataIndex:"showPhone",valueType:"select",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{valueType:"dependency",name:["showPhone"],columns:function(i){var n=i.showPhone;return n?[{title:"\u7535\u8BDD",dataIndex:"phone"}]:[]}}]},c=e(85893),t=function(){var h=(0,u.useRef)(),i=function(o){console.log({values:o})};return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{style:{textAlign:"start"},children:(0,c.jsx)(m.ZP,{type:"primary",onClick:function(){var o;return(o=h.current)===null||o===void 0?void 0:o.openModal()},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,c.jsx)(x.Yr,{title:"\u57FA\u672C\u8868\u5355",innerRef:h,onFinish:i,columns:l(),formProps:{initialValues:{showPhone:0}}})]})},I=t},13244:function(F,a,e){e.r(a),e.d(a,{default:function(){return t}});var m=e(67294),u=e(15634),x=[{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0}],l=e(85893),c=function(){var s=(0,m.useRef)(),h=function(n){console.log({values:n})};return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{textAlign:"start"},children:(0,l.jsx)(u.zx,{type:"primary",onClick:function(){var n;return(n=s.current)===null||n===void 0?void 0:n.openModal()},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,l.jsx)(u.Yr,{innerRef:s,title:"\u57FA\u672C\u8868\u5355\u975E\u53D7\u63A7",onFinish:h,columns:x})]})},t=c},42526:function(F,a,e){e.r(a),e.d(a,{default:function(){return i}});var m=e(15009),u=e.n(m),x=e(99289),l=e.n(x),c=e(67294),t=e(15634),I=function(){return[{title:"\u5458\u5DE5",dataIndex:"userId",valueType:"select",fieldProps:function(r,f){return{options:[{label:"\u5458\u5DE51",value:"user1",userCode:"c01",deptName:"\u90E8\u95E8A",deptId:"1"},{label:"\u5458\u5DE52",value:"user2",userCode:"c02",deptName:"\u90E8\u95E8B",deptId:"2"}],onChange:function(d,p){if(d){var y;(y=f.current)===null||y===void 0||y.setData({deptId:p.deptId}),r.setFieldsValue({deptName:p.deptName})}else{var j;(j=f.current)===null||j===void 0||j.setData({deptId:void 0}),r.setFieldsValue({deptName:void 0})}}}}},{name:["userId"],valueType:"dependency",columns:function(r){var f=r.userId;return f?[{title:"\u90E8\u95E8",dataIndex:"deptName",fieldProps:function(d,p){var y;return{disabled:((y=p.current)===null||y===void 0?void 0:y.data.deptId)==="1"}}}]:[]}}]},s=e(85893),h=function(){var o=(0,c.useRef)(),r=function(){var f=l()(u()().mark(function v(d){var p;return u()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:console.log({values:d,data:(p=o.current)===null||p===void 0?void 0:p.data});case 1:case"end":return j.stop()}},v)}));return function(d){return f.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsx)(t.zx,{type:"primary",onClick:function(){var v;return(v=o.current)===null||v===void 0?void 0:v.openModal()},children:"\u65B0\u5EFA\u8868\u5355"}),(0,s.jsx)(t.Yr,{columns:I(),innerRef:o,onFinish:r})]})},i=h},85677:function(F,a,e){e.r(a),e.d(a,{default:function(){return t}});var m=e(67294),u=e(15634),x=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username"},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u804C\u4E1A",dataIndex:"profession"},{title:"\u7231\u597D",dataIndex:"hobby"},{title:"\u6027\u522B",dataIndex:"sex",valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",required:!0}],l=e(85893),c=function(){var s=(0,m.useRef)(),h=function(n){console.log({values:n})};return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{textAlign:"start"},children:(0,l.jsx)(u.zx,{type:"primary",onClick:function(){var n;return(n=s.current)===null||n===void 0?void 0:n.openModal()},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,l.jsx)(u.Yr,{title:"\u957F\u8868\u5355\u9A8C\u8BC1",innerRef:s,onFinish:h,columns:x})]})},t=c},22264:function(F,a,e){e.r(a),e.d(a,{default:function(){return t}});var m=e(67294),u=e(15634),x=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u804C\u4E1A",dataIndex:"profession"},{title:"\u7231\u597D",dataIndex:"hobby"},{title:"\u6027\u522B",dataIndex:"sex",valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",required:!0,dataIndex:"idNumber"}],l=e(85893),c=function(){var s=(0,m.useRef)(null),h=function(n){console.log({values:n})};return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{style:{textAlign:"start"},children:(0,l.jsx)(u.zx,{type:"primary",onClick:function(){var n;return(n=s.current)===null||n===void 0?void 0:n.openModal()},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,l.jsx)(u.Yr,{width:600,title:"\u591A\u5217\u6392\u5E03",innerRef:s,onFinish:h,columns:x,formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}}})]})},t=c},3313:function(F,a,e){e.r(a),e.d(a,{default:function(){return s}});var m=e(78957),u=e(14726),x=e(67294),l=e(15634),c=[{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0}],t=e(85893),I=function(){var i=(0,x.useRef)(),n=function(r,f,v){console.log({values:r,formType:f,formData:v})};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var r;return(r=i.current)===null||r===void 0?void 0:r.openModal("new")},children:"\u65B0\u589E"}),(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var r;return(r=i.current)===null||r===void 0?void 0:r.openModal("edit",{id:"1",username:"\u738B\u5148\u751F",phone:"15800018888"})},children:"\u7F16\u8F91"})]}),(0,t.jsx)(l.Yr,{title:"\u57FA\u672C\u8868\u5355",innerRef:i,onFinish:n,columns:c})]})},s=I},64713:function(F,a,e){e.r(a),e.d(a,{default:function(){return h}});var m=e(78957),u=e(14726),x=e(67294),l=e(15634),c=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}}],t=e(85893),I={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},s=function(){var n,o=(0,x.useRef)(),r=function(d){console.log({values:d})},f=function(){return new Promise(function(d){setTimeout(d,800)})};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var d;(d=o.current)===null||d===void 0||d.openModal("new")},children:"\u65B0\u589E"}),(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var d;(d=o.current)===null||d===void 0||d.openModal("edit")},children:"\u7F16\u8F91"}),(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var d;(d=o.current)===null||d===void 0||d.openModal("read")},children:"\u67E5\u770B"})]}),(0,t.jsx)(l.Yr,{title:I[((n=o.current)===null||n===void 0?void 0:n.formType)||"new"],innerRef:o,onFinish:r,columns:c,onOpen:function(d,p){if(d==="edit"||d==="read")return f().then(function(){var y;(y=p.current)===null||y===void 0||y.setFields([{name:"username",value:"\u738B\u5148\u751F",touched:!1},{name:"phone",value:"15800018888",touched:!1}])})}})]})},h=s},92490:function(F,a,e){e.r(a),e.d(a,{default:function(){return s}});var m=e(78957),u=e(14726),x=e(67294),l=e(15634),c=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u662F\u5426\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:"1"},{label:"\u5426",value:"0"}]}},{valueType:"dependency",name:["isMember"],columns:function(i){var n=i.isMember;return n==="1"?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"grade"}]:[]}}],t=e(85893),I=function(){var i=(0,x.useRef)(),n=function(r){console.log({values:r})};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.Z,{children:[(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var r;return(r=i.current)===null||r===void 0?void 0:r.openModal()},children:"\u6253\u5F00\u5F39\u7A97"}),(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var r;return(r=i.current)===null||r===void 0?void 0:r.openModal("read",{username:"\u738B\u5148\u751F",phone:134,isMember:"1",grade:"\u4E00\u7EA7"})},children:"\u53EA\u8BFB\u6A21\u5F0F"})]}),(0,t.jsx)(l.Yr,{innerRef:i,title:"\u57FA\u672C\u8868\u5355\u975E\u53D7\u63A7",onFinish:n,columns:c,formProps:{layout:"horizontal",labelCol:{span:4}}})]})},s=I},44458:function(F,a,e){e.d(a,{z:function(){return m}});var m=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",required:!0}]}}]);
