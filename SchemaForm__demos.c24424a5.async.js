"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[216],{96749:function(x,l,e){e.r(l);var u=e(97857),o=e.n(u),d=e(67294),a=e(75244),t=e(85893),m=function(){var s=(0,d.useRef)(),i=function(r){console.log({values:r})};return(0,d.useEffect)(function(){var c;(c=s.current)===null||c===void 0||c.setFieldsValue({fileList:[{id:1,fileName:"\u7167\u72471",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:2,fileName:"\u7167\u72472",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]})},[]),(0,t.jsx)(a.LH,{columns:[{title:"\u9644\u4EF6",dataIndex:"fileList",convertValue:function(r){return r&&r.map(function(n){return o()(o()({},n),{},{name:n.fileName,url:n.filePath})})},transform:function(r){return{fileIds:r.map(function(n){return n.id}).join(",")}},renderFormItem:function(){return(0,t.jsx)(a.mL,{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",responseToFileList:function(n){return n.data},children:(0,t.jsx)(a.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:{},onFinish:i})};l.default=m},22308:function(x,l,e){e.r(l);var u=e(67294),o=e(75244),d=e(71577),a=e(50380),t=e(85893),m=function(){var s=(0,u.useRef)(),i=function(r){console.log({values:r})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.LH,{onFinish:i,formRef:s,columns:a.z,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(d.Z,{type:"primary",onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.submit()},children:"\u63D0\u4EA4"})]})]})};l.default=m},6191:function(x,l,e){e.r(l),e.d(l,{default:function(){return c}});var u=e(15009),o=e.n(u),d=e(99289),a=e.n(d),t=e(67294),m=e(75244),v=[{title:"\u57FA\u672C\u4FE1\u606F - \u5185\u5D4C\u6A21\u5F0F(valueBaseName)",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:[["info","isMember"]],columns:function(n){var f=n.info.isMember;return f?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],s=e(85893),i=function(){var n=(0,t.useRef)(),f=function(){var g=a()(o()().mark(function p(P){return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:console.log({values:P});case 1:case"end":return I.stop()}},p)}));return function(P){return g.apply(this,arguments)}}();return(0,s.jsxs)(m.A9,{onFinish:f,formRef:n,autoFocusFirstInput:!1,submitter:!1,initialValues:{info:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}},children:[(0,s.jsx)(m.LH,{embed:!0,valueBaseName:"info",columns:v}),(0,s.jsxs)("div",{style:{textAlign:"end"},children:[(0,s.jsx)(m.zx,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.setFieldsValue({info:{name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"}})},children:"\u8D4B\u503C"}),(0,s.jsx)(m.zx,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.resetFields([["info","deptId,deptName"]])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,s.jsx)(m.zx,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.resetFields([["info","deptId,deptName"],["info","gradeId,gradeName"]])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,s.jsx)(m.zx,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,s.jsx)(m.zx,{type:"primary",onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.submit()},children:"\u63D0\u4EA4"})]})]})},c=i},47010:function(x,l,e){e.r(l),e.d(l,{default:function(){return m}});var u=e(67294),o=e(75244),d=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:["isMember"],columns:function(s){var i=s.isMember;return i?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],a=e(85893),t=function(){var s=(0,u.useRef)(),i=function(r){console.log({values:r})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.LH,{onFinish:i,formRef:s,columns:d,autoFocusFirstInput:!1,initialValues:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}}),(0,a.jsxs)("div",{style:{textAlign:"end"},children:[(0,a.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.setFieldsValue({name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"})},children:"\u8D4B\u503C"}),(0,a.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.resetFields(["deptId,deptName"])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,a.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.resetFields(["deptId,deptName","gradeId,gradeName"])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,a.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,a.jsx)(o.zx,{type:"primary",onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.submit()},children:"\u63D0\u4EA4"})]})]})},m=t},84300:function(x,l,e){e.r(l);var u=e(75244),o=e(85893),d=function(){var t=[{title:"\u662F\u5426\u663E\u793A\u7535\u8BDD",dataIndex:"showPhone",valueType:"select",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{valueType:"dependency",name:["showPhone"],columns:function(v){var s=v.showPhone;return s?[{title:"\u7535\u8BDD",dataIndex:"phone"}]:[]}}];return(0,o.jsx)("div",{children:(0,o.jsx)(u.LH,{columns:t,autoFocusFirstInput:!1})})};l.default=d},48971:function(x,l,e){e.r(l),e.d(l,{default:function(){return F}});var u=e(5574),o=e.n(u),d=e(15009),a=e.n(d),t=e(99289),m=e.n(t),v=e(59652),s=e(71577),i=e(67294),c=e(75244),r=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{valueType:"dependency",name:[["business","serviceName"]],columns:function(C){var j,R=C==null||(j=C.business)===null||j===void 0?void 0:j.serviceName;return R==="1"?[]:[{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:16},formItemProps:{labelCol:{flex:"0 0 18.75%"}}},{fieldProps:{hidden:!0}}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u51FA\u751F\u65E5\u671F",dataIndex:"birthday",valueType:"dateMonth"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:["\u7537","\u5973"]}}]},n=e(34041),f=e(85893),g=function(){return[{title:"\u516C\u53F8\u540D",dataIndex:"company",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0}]},renderFormItem:function(){return(0,f.jsx)(n.Z,{options:[{label:"A\u516C\u53F8",value:"1",address:"\u6C5F\u82CF\u7701\u65E0\u9521\u5E02",otherKey:"1a"}]})},fieldProps:function(C){return{onChange:function(R,T){R?C.setFieldsValue({business:{address:T.address}}):C.setFieldsValue({business:{address:void 0}})}}}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u529E\u7406\u4E1A\u52A1",dataIndex:"serviceName",renderFormItem:function(){return(0,f.jsx)(n.Z,{options:[{label:"\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1",value:"1"},{label:"\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1",value:"2"}]})},render:function(C){return C==="1"?"\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1":C==="2"?"\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1":"-"}}]},p=g,P=function(){var h=(0,i.useRef)(),C=function(){var E=m()(a()().mark(function y(b){return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return console.log({values:b}),D.abrupt("return",!0);case 2:case"end":return D.stop()}},y)}));return function(b){return E.apply(this,arguments)}}(),j=(0,i.useState)(!1),R=o()(j,2),T=R[0],B=R[1],$=(0,i.useState)(!1),A=o()($,2),L=A[0],N=A[1],V=function(){N(!0),setTimeout(function(){var y;(y=h.current)===null||y===void 0||y.setFieldsValue({base:{username:"\u738B\u5148\u751F",phone:"15588888",nickName:"wang",sex:"\u7537",idNumber:3202335566},business:{company:"\u4FE1\u606F\u6280\u672F\u6709\u9650\u516C\u53F8",address:"\u6C5F\u82CF\u7701\u65E0\u9521\u5E02",serviceName:"1"}}),N(!1)},500)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)(c.A9,{layout:"horizontal",onFinish:C,submitter:!1,formRef:h,readonly:T,initialValues:{base:{username:"\u9AD8\u5148\u751F"}},children:[(0,f.jsx)(v.Z,{style:{marginBottom:"24px"},size:"small",headStyle:{background:"#ebebeb"},title:"\u57FA\u672C\u4FE1\u606F",children:(0,f.jsx)(c.LH,{embed:!0,grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},columns:r(),valueBaseName:"base"})}),(0,f.jsx)(v.Z,{size:"small",title:"\u4E1A\u52A1\u4FE1\u606F",headStyle:{background:"#ebebeb"},children:(0,f.jsx)(c.LH,{embed:!0,columns:p(),labelCol:{span:3},valueBaseName:"business"})})]}),(0,f.jsxs)("div",{style:{marginTop:"10px",textAlign:"end"},children:[(0,f.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){return B(function(y){return!y})},children:"\u5207\u6362\u53EA\u8BFB"}),(0,f.jsx)(s.Z,{loading:L,style:{marginRight:"20px"},onClick:V,children:"\u56DE\u663E\u6570\u636E"}),(0,f.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var y;return(y=h.current)===null||y===void 0?void 0:y.resetFields()},children:"\u91CD\u7F6E"}),(0,f.jsx)(s.Z,{type:"primary",onClick:function(){var y;return(y=h.current)===null||y===void 0?void 0:y.submit()},children:"\u63D0\u4EA4"})]})]})},F=P},71655:function(x,l,e){e.r(l),e.d(l,{default:function(){return t}});var u=e(75244),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},dataIndex:"idNumber"}]},d=e(85893),a=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(u.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[8,0]},colProps:{span:8},columns:o(),autoFocusFirstInput:!1})})},t=a},6222:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",formItemProps:{labelCol:{span:9}}},{title:"\u6635\u79F0",formItemProps:{},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},formItemProps:{labelCol:{flex:"0 0 18.75%"}},dataIndex:"idNumber"}]},t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:c,formRef:i,columns:a(),autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},901:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},dataIndex:"idNumber"}],t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{grid:!0,rowProps:{gutter:[8,0]},colProps:{span:8},onFinish:c,formRef:i,columns:a,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},93996:function(x,l,e){e.r(l),e.d(l,{default:function(){return s}});var u=e(71577),o=e(67294),d=e(75244),a=e(27049),t=e(85893),m=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",colProps:{span:11},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}}]},{renderFormItem:function(){return(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(a.Z,{type:"vertical",style:{height:"50px"}})})},fieldProps:{style:{width:"100%"}},colProps:{span:2,style:{alignSelf:"center"}}},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",colProps:{span:11},columns:[{title:"\u6635\u79F0",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",colProps:{span:24},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879"}]}}]}],v=function(){var c=(0,o.useRef)(),r=function(f){console.log({values:f})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{grid:!0,onFinish:r,formRef:c,columns:m,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var f;return(f=c.current)===null||f===void 0?void 0:f.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var f;return(f=c.current)===null||f===void 0?void 0:f.submit()},children:"\u63D0\u4EA4"})]})]})},s=v},60689:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}}]},{valueType:"divider"},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",columns:[{title:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",colProps:{span:12},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:12},formItemProps:{rules:[{required:!0,message:"\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879"}]}}]}],t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{grid:!0,colProps:{span:24},onFinish:c,formRef:i,columns:a,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},91440:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",fieldProps:{size:"small"},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"}]},{valueType:"divider"},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",columns:[{title:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}]}],t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{onFinish:c,formRef:i,columns:a,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},62907:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}],t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{layout:"horizontal",labelCol:{span:3},onFinish:c,formRef:i,columns:a,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},91944:function(x,l,e){e.r(l),e.d(l,{default:function(){return c}});var u=e(5574),o=e.n(u),d=e(71577),a=e(67294),t=e(75244),m=e(34041),v=e(85893),s=function(){return[{title:"\u662F\u5426\u663E\u793A\u7535\u8BDD",dataIndex:"showPhone",renderFormItem:function(){return(0,v.jsx)(m.Z,{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]})},render:function(f){return f?"\u662F":"\u5426"}},{valueType:"dependency",name:["showPhone"],columns:function(f){var g=f.showPhone;return g?[{title:"\u7535\u8BDD",dataIndex:"phone"}]:[]}}]},i=function(){var n=(0,a.useRef)(),f=(0,a.useState)(!1),g=o()(f,2),p=g[0],P=g[1],F=function(h){console.log({values:h})};return(0,v.jsxs)("div",{children:[(0,v.jsx)(t.LH,{onFinish:F,formRef:n,columns:s(),autoFocusFirstInput:!1,initialValues:{showPhone:0},readonly:p}),(0,v.jsxs)("div",{style:{textAlign:"end"},children:[(0,v.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){return P(!p)},children:"\u5207\u6362\u53EA\u8BFB"}),(0,v.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.setFieldsValue({showPhone:1,phone:15800012345})},children:"\u8D4B\u503C"}),(0,v.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.resetFields()},children:"\u91CD\u7F6E"}),(0,v.jsx)(d.Z,{type:"primary",onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.submit()},children:"\u63D0\u4EA4"})]})]})},c=i},64857:function(x,l,e){e.r(l),e.d(l,{default:function(){return c}});var u=e(15009),o=e.n(u),d=e(99289),a=e.n(d),t=e(67294),m=e(75244),v=function(){return[{title:"\u5458\u5DE5",dataIndex:"userId",valueType:"select",fieldProps:function(f,g){return{options:[{label:"\u5458\u5DE51",value:"user1",userCode:"c01"},{label:"\u5458\u5DE52",value:"user2",userCode:"c02"}],onChange:function(P,F){var I;(I=g.current)===null||I===void 0||I.setData({userCode:F.userCode})}}}},{title:"\u662F\u5426\u5C55\u793A\u90E8\u95E8",dataIndex:"showDept",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{name:["showDept"],valueType:"dependency",columns:function(f){var g=f.showDept;return g?[{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"select",fieldProps:function(P,F){return{labelInValue:!0,options:[{label:"\u9500\u552E\u90E8",value:"1",deptCode:"A"},{label:"\u6280\u672F\u90E8",value:"2",deptCode:"B"}],onChange:function(h,C){var j;(j=F.current)===null||j===void 0||j.setData({deptCode:C.deptCode})}}}}]:[]}}]},s=e(85893),i=function(){var n=(0,t.useRef)(null),f=function(){var g=a()(o()().mark(function p(P){var F;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:console.log({values:P,otherValues:(F=n.current)===null||F===void 0?void 0:F.data});case 1:case"end":return h.stop()}},p)}));return function(P){return g.apply(this,arguments)}}();return(0,s.jsx)(m.LH,{columns:v(),innerRef:n,onFinish:f,submitter:{},autoFocusFirstInput:!1})},c=i},18546:function(x,l,e){e.r(l),e.d(l,{default:function(){return v}});var u=e(71577),o=e(67294),d=e(75244),a=[{title:"\u8054\u7CFB\u4EBA",dataIndex:"name"},{title:"\u7535\u8BDD",dataIndex:"phone"},{fieldProps:{hidden:!0}},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"chargeName"},{title:"\u7535\u8BDD",dataIndex:"chargePhone"},{title:"\u90AE\u7BB1",dataIndex:"mail"}],t=e(85893),m=function(){var i=(0,o.useRef)(),c=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(d.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:c,formRef:i,columns:a,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(u.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(u.Z,{type:"primary",onClick:function(){var n;return(n=i.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},v=m},9960:function(x,l,e){e.r(l),e.d(l,{default:function(){return m}});var u=e(67294),o=e(75244),d=[{title:"\u8054\u7CFB\u4EBA",dataIndex:"name"},{title:"\u7535\u8BDD",dataIndex:"phone"},{fieldProps:{hidden:!0},render:function(){return null}},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"chargeName"},{title:"\u7535\u8BDD",dataIndex:"chargePhone"},{title:"\u81EA\u5B9A\u4E49",dataIndex:"mail",render:function(s,i){return i.mode==="read"?"\u{1F4E7}"+i.value:s}}],a=e(85893),t=function(){var s=(0,u.useRef)(),i=function(r){console.log({values:r})};return(0,a.jsx)("div",{children:(0,a.jsx)(o.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:i,formRef:s,columns:d,readonly:!0,initialValues:{name:"\u738B\u5148\u751F",phone:1202228888,sex:"\u7537",mail:"mail.com"}})})},m=t},63306:function(x,l,e){e.r(l),e.d(l,{default:function(){return t}});var u=e(75244),o=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}}],d=e(85893),a=function(){return(0,d.jsx)(u.LH,{columns:o,autoFocusFirstInput:!1,submitter:{style:{justifyContent:"end"},submitButtonProps:{loading:!0},resetButtonProps:{danger:!0}},onFinish:console.log})},t=a},30715:function(x,l,e){e.r(l),e.d(l,{default:function(){return t}});var u=e(75244),o=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}}],d=e(85893),a=function(){return(0,d.jsx)(u.LH,{columns:o,autoFocusFirstInput:!1,submitter:!0,onFinish:console.log})},t=a},23292:function(x,l,e){e.r(l),e.d(l,{default:function(){return t}});var u=e(75244),o=[{title:"money",dataIndex:"money",valueType:"money",initialValue:1234.25,fieldProps:{precision:2,style:{width:"80%"}}},{title:"digit",dataIndex:"digit",valueType:"digit",initialValue:8},{title:"date",dataIndex:"date",valueType:"date",initialValue:new Date},{title:"dateRange",dataIndex:"dateRange",valueType:"dateRange",initialValue:["2023-8-1",new Date],colProps:{span:16}},{title:"select",dataIndex:"select",valueType:"select",fieldProps:{options:[{label:"\u9009\u62E91",value:1},{label:"\u9009\u62E92",value:2}]},initialValue:1},{title:"radio",dataIndex:"radio",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]},initialValue:1},{title:"textarea",dataIndex:"textarea",valueType:"textarea",initialValue:"\u6587\u672C\u57DF"}],d=e(85893),a=function(){return(0,d.jsx)(u.LH,{columns:o,grid:!0,colProps:{span:8},autoFocusFirstInput:!1})},t=a},50380:function(x,l,e){e.d(l,{z:function(){return u}});var u=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}]}}]);