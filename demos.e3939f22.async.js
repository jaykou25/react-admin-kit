"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[433],{83720:function(R,f,n){n.r(f),n.d(f,{default:function(){return o}});var x=n(67294),l=n(15634),u=n(85893),d=function(){return[{title:"\u5BA2\u6237",dataIndex:"customer",valueType:"select",fieldProps:function(i){return{options:[{label:"A",value:"1",address:"\u65E0\u9521"},{label:"B",value:"2",address:"\u5C71\u4E1C"}],onChange:function(r,e){i.setFieldsValue({address:e.address,name:e.address})}}}},{title:"\u5730\u5740",dataIndex:"address"}]},s=function(t){var i=t.myFormRef;return[{title:"\u5BA2\u6237",dataIndex:"customer",valueType:"select",fieldProps:function(){return{options:[{label:"A",value:"1",address:"\u65E0\u9521"},{label:"B",value:"2",address:"\u5C71\u4E1C"}],onChange:function(e,c){console.log("myformref",i),i.current.setFieldsValue({address:c.address,name:c.address})}}}},{title:"\u5730\u5740",dataIndex:"address"}]};function o(){var m=(0,x.useRef)(),t=(0,x.useRef)(),i=(0,x.useRef)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:"\u975E formRef"}),(0,u.jsxs)(l.A9,{children:[(0,u.jsx)(l.LH,{embed:!0,columns:[{title:"\u540D\u5B57",dataIndex:"name"}]}),(0,u.jsx)(l.QV,{innerRef:m,search:!1,toolbar:{actions:[(0,u.jsx)(l.zx,{onClick:function(){return m.current.openModal()},type:"primary",children:"\u65B0\u589E"})]},columns:d()})]})]})}},28804:function(R,f,n){n.r(f),n.d(f,{default:function(){return s}});var x=n(67294),l=n(15634),u=n(85893),d=function(m){var t=m.myFormRef;return[{title:"\u5BA2\u6237",dataIndex:"customer",valueType:"select",fieldProps:function(){return{options:[{label:"A",value:"1",address:"\u65E0\u9521"},{label:"B",value:"2",address:"\u5C71\u4E1C"}],onChange:function(r,e){console.log("myformref",t),t.current.setFieldsValue({address:e.address,name:e.address})}}}},{title:"\u5730\u5740",dataIndex:"address"}]};function s(){var o=(0,x.useRef)(),m=(0,x.useRef)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{marginTop:"20px"},children:"formRef"}),(0,u.jsxs)(l.A9,{children:[(0,u.jsx)(l.LH,{embed:!0,columns:[{title:"\u540D\u5B57",dataIndex:"name"}]}),(0,u.jsx)(l.QV,{innerRef:o,search:!1,formProps:{formRef:m},toolbar:{actions:[(0,u.jsx)(l.zx,{onClick:function(){return o.current.openModal()},type:"primary",children:"\u65B0\u589E"})]},columns:d({myFormRef:m})})]})]})}},96555:function(R,f,n){n.r(f),n.d(f,{default:function(){return m}});var x=n(67294),l=n(15634),u=[{title:"\u7528\u6237",dataIndex:"userId,userName",valueType:"select",fieldProps:{labelInValue:!0,options:[{label:"\u5F20\u4E09",value:"1"},{label:"\u674E\u56DB",value:"2"}]}}],d=n(78957),s=n(85893),o=function(){var i=(0,x.useRef)(),v=function(e){console.log({values:e})};return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.LH,{grid:!0,colProps:{span:12},onFinish:v,formRef:i,columns:u,autoFocusFirstInput:!1,initialValues:{userId:"2",userName:"\u674E\u56DB"}}),(0,s.jsx)("div",{style:{textAlign:"end"},children:(0,s.jsxs)(d.Z,{wrap:!0,children:[(0,s.jsx)(l.zx,{onClick:function(){var e;return(e=i.current)===null||e===void 0?void 0:e.submit()},children:"onFinish"}),(0,s.jsx)(l.zx,{onClick:function(){var e;return console.log("getFieldsValue:",(e=i.current)===null||e===void 0?void 0:e.getFieldsValue())},children:"getFieldsValue"}),(0,s.jsx)(l.zx,{onClick:function(){var e;return(e=i.current)===null||e===void 0?void 0:e.validateFields().then(function(c){console.log("validateFields:",c)})},children:"validateFields"}),(0,s.jsx)(l.zx,{onClick:function(){var e,c;return console.log("getFieldsFormatValue:",(e=i.current)===null||e===void 0||(c=e.getFieldsFormatValue)===null||c===void 0?void 0:c.call(e))},children:"getFieldsFormatValue"}),(0,s.jsx)(l.zx,{onClick:function(){var e,c;return(e=i.current)===null||e===void 0||(c=e.validateFieldsReturnFormatValue)===null||c===void 0?void 0:c.call(e).then(function(h){console.log("validateFieldsReturnFormatValue:",h)})},children:"validateFieldsReturnFormatValue"})]})})]})},m=o},47317:function(R,f,n){n.r(f),n.d(f,{default:function(){return o}});var x=n(67294),l=n(15634),u=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:["isMember"],columns:function(t){var i=t.isMember;return i?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],d=n(85893),s=function(){var t=(0,x.useRef)(),i=function(r){console.log({values:r})};return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.LH,{onFinish:i,formRef:t,columns:u,autoFocusFirstInput:!1,initialValues:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}}),(0,d.jsxs)("div",{style:{textAlign:"end"},children:[(0,d.jsx)(l.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=t.current)===null||r===void 0?void 0:r.setFieldsValue({name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"})},children:"\u8D4B\u503C"}),(0,d.jsx)(l.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=t.current)===null||r===void 0?void 0:r.resetFields(["deptId,deptName"])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,d.jsx)(l.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=t.current)===null||r===void 0?void 0:r.resetFields(["deptId,deptName","gradeId,gradeName"])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,d.jsx)(l.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=t.current)===null||r===void 0?void 0:r.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,d.jsx)(l.zx,{type:"primary",onClick:function(){var r;return(r=t.current)===null||r===void 0?void 0:r.submit()},children:"\u63D0\u4EA4"})]})]})},o=s},64862:function(R,f,n){n.r(f),n.d(f,{default:function(){return v}});var x=n(15009),l=n.n(x),u=n(99289),d=n.n(u),s=n(67294),o=n(15634),m=[{title:"\u57FA\u672C\u4FE1\u606F - \u5185\u5D4C\u6A21\u5F0F(valueBaseName)",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:[["info","isMember"]],columns:function(e){var c=e.info.isMember;return c?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],t=n(85893),i=function(){var e=(0,s.useRef)(),c=function(){var h=d()(l()().mark(function a(g){return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:console.log({values:g});case 1:case"end":return p.stop()}},a)}));return function(g){return h.apply(this,arguments)}}();return(0,t.jsxs)(o.A9,{onFinish:c,formRef:e,autoFocusFirstInput:!1,submitter:!1,initialValues:{info:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}},children:[(0,t.jsx)(o.LH,{embed:!0,valueBaseName:"info",columns:m}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=e.current)===null||a===void 0?void 0:a.setFieldsValue({info:{name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"}})},children:"\u8D4B\u503C"}),(0,t.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=e.current)===null||a===void 0?void 0:a.resetFields([["info","deptId,deptName"]])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,t.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=e.current)===null||a===void 0?void 0:a.resetFields([["info","deptId,deptName"],["info","gradeId,gradeName"]])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,t.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=e.current)===null||a===void 0?void 0:a.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,t.jsx)(o.zx,{type:"primary",onClick:function(){var a;return(a=e.current)===null||a===void 0?void 0:a.submit()},children:"\u63D0\u4EA4"})]})]})},v=i}}]);
