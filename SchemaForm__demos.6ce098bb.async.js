"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[216],{96749:function(y,r,e){e.r(r);var s=e(97857),o=e.n(s),i=e(67294),l=e(38942),t=e(85893),v=function(){var d=(0,i.useRef)(),u=function(a){console.log({values:a})};return(0,i.useEffect)(function(){var m;(m=d.current)===null||m===void 0||m.setFieldsValue({fileList:[{id:1,fileName:"\u7167\u72471",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:2,fileName:"\u7167\u72472",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]})},[]),(0,t.jsx)(l.LH,{columns:[{title:"\u9644\u4EF6",dataIndex:"fileList",convertValue:function(a){return a&&a.map(function(n){return o()(o()({},n),{},{name:n.fileName,url:n.filePath})})},transform:function(a){return{fileIds:a.map(function(n){return n.id}).join(",")}},renderFormItem:function(){return(0,t.jsx)(l.mL,{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",responseToFileList:function(n){return n.data},children:(0,t.jsx)(l.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:{},onFinish:u})};r.default=v},22308:function(y,r,e){e.r(r);var s=e(67294),o=e(38942),i=e(71577),l=e(50380),t=e(85893),v=function(){var d=(0,s.useRef)(),u=function(a){console.log({values:a})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.LH,{onFinish:u,formRef:d,columns:l.z,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(i.Z,{style:{marginRight:"10px"},onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(i.Z,{type:"primary",onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.submit()},children:"\u63D0\u4EA4"})]})]})};r.default=v},47010:function(y,r,e){e.r(r),e.d(r,{default:function(){return v}});var s=e(67294),o=e(38942),i=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:["isMember"],columns:function(d){var u=d.isMember;return u?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],l=e(85893),t=function(){var d=(0,s.useRef)(),u=function(a){console.log({values:a})};return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.LH,{onFinish:u,formRef:d,columns:i,autoFocusFirstInput:!1,initialValues:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}}),(0,l.jsxs)("div",{style:{textAlign:"end"},children:[(0,l.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.setFieldsValue({name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"})},children:"\u8D4B\u503C"}),(0,l.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.resetFields(["deptId,deptName"])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,l.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.resetFields(["deptId,deptName","gradeId,gradeName"])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,l.jsx)(o.zx,{style:{marginRight:"10px"},onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,l.jsx)(o.zx,{type:"primary",onClick:function(){var a;return(a=d.current)===null||a===void 0?void 0:a.submit()},children:"\u63D0\u4EA4"})]})]})},v=t},6191:function(y,r,e){e.r(r),e.d(r,{default:function(){return m}});var s=e(15009),o=e.n(s),i=e(99289),l=e.n(i),t=e(67294),v=e(38942),c=[{title:"\u57FA\u672C\u4FE1\u606F - \u5185\u5D4C\u6A21\u5F0F(valueBaseName)",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{valueType:"dependency",name:[["info","isMember"]],columns:function(n){var f=n.info.isMember;return f?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}}]}],d=e(85893),u=function(){var n=(0,t.useRef)(),f=function(){var x=l()(o()().mark(function h(I){return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:console.log({values:I});case 1:case"end":return g.stop()}},h)}));return function(I){return x.apply(this,arguments)}}();return(0,d.jsxs)(v.A9,{onFinish:f,formRef:n,autoFocusFirstInput:!1,submitter:!1,initialValues:{info:{name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}},children:[(0,d.jsx)(v.LH,{embed:!0,valueBaseName:"info",columns:c}),(0,d.jsxs)("div",{style:{textAlign:"end"},children:[(0,d.jsx)(v.zx,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.setFieldsValue({info:{name:"jack",deptId:"2",deptName:"\u6280\u672F\u90E8",isMember:1,gradeId:"1",gradeName:"A"}})},children:"\u8D4B\u503C"}),(0,d.jsx)(v.zx,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.resetFields([["info","deptId,deptName"]])},children:"\u91CD\u7F6E\u90E8\u95E8"}),(0,d.jsx)(v.zx,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.resetFields([["info","deptId,deptName"],["info","gradeId,gradeName"]])},children:"\u91CD\u7F6E\u90E8\u95E8\u7B49\u7EA7"}),(0,d.jsx)(v.zx,{style:{marginRight:"10px"},onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.resetFields()},children:"\u91CD\u7F6E\u6240\u6709"}),(0,d.jsx)(v.zx,{type:"primary",onClick:function(){var h;return(h=n.current)===null||h===void 0?void 0:h.submit()},children:"\u63D0\u4EA4"})]})]})},m=u},84300:function(y,r,e){e.r(r);var s=e(38942),o=e(85893),i=function(){var t=[{title:"\u662F\u5426\u663E\u793A\u7535\u8BDD",dataIndex:"showPhone",valueType:"radio",initialValue:0,fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{valueType:"dependency",name:["showPhone"],columns:function(c){var d=c.showPhone;return d?[{title:"\u7535\u8BDD",dataIndex:"phone"}]:[]}}];return(0,o.jsx)("div",{children:(0,o.jsx)(s.LH,{columns:t,autoFocusFirstInput:!1})})};r.default=i},48971:function(y,r,e){e.r(r),e.d(r,{default:function(){return P}});var s=e(5574),o=e.n(s),i=e(15009),l=e.n(i),t=e(99289),v=e.n(t),c=e(59652),d=e(71577),u=e(67294),m=e(38942),a=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{valueType:"dependency",name:[["business","serviceName"]],columns:function(F){var C,R=F==null||(C=F.business)===null||C===void 0?void 0:C.serviceName;return R==="1"?[]:[{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:16},formItemProps:{labelCol:{flex:"0 0 18.75%"}}},{fieldProps:{hidden:!0}}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u51FA\u751F\u65E5\u671F",dataIndex:"birthday",valueType:"dateMonth"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:["\u7537","\u5973"]}}]},n=e(34041),f=e(85893),x=function(){return[{title:"\u516C\u53F8\u540D",dataIndex:"company",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0}]},renderFormItem:function(){return(0,f.jsx)(n.Z,{options:[{label:"A\u516C\u53F8",value:"1",address:"\u6C5F\u82CF\u7701\u65E0\u9521\u5E02",otherKey:"1a"}]})},fieldProps:function(F){return{onChange:function(R,E){R?F.setFieldsValue({business:{address:E.address}}):F.setFieldsValue({business:{address:void 0}})}}}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u529E\u7406\u4E1A\u52A1",dataIndex:"serviceName",renderFormItem:function(){return(0,f.jsx)(n.Z,{options:[{label:"\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1",value:"1"},{label:"\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1",value:"2"}]})},render:function(F){return F==="1"?"\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1":F==="2"?"\u9700\u8981\u8EAB\u4EFD\u8BC1\u4E1A\u52A1":"-"}}]},h=x,I=function(){var p=(0,u.useRef)(),F=function(){var S=v()(l()().mark(function j(b){return l()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log({values:b}),B.abrupt("return",!0);case 2:case"end":return B.stop()}},j)}));return function(b){return S.apply(this,arguments)}}(),C=(0,u.useState)(!1),R=o()(C,2),E=R[0],D=R[1],T=(0,u.useState)(!1),L=o()(T,2),A=L[0],N=L[1],V=function(){N(!0),setTimeout(function(){var j;(j=p.current)===null||j===void 0||j.setFieldsValue({base:{username:"\u738B\u5148\u751F",phone:"15588888",nickName:"wang",sex:"\u7537",idNumber:3202335566},business:{company:"\u4FE1\u606F\u6280\u672F\u6709\u9650\u516C\u53F8",address:"\u6C5F\u82CF\u7701\u65E0\u9521\u5E02",serviceName:"1"}}),N(!1)},500)};return(0,f.jsxs)("div",{children:[(0,f.jsxs)(m.A9,{layout:"horizontal",onFinish:F,submitter:!1,formRef:p,readonly:E,initialValues:{base:{username:"\u9AD8\u5148\u751F"}},children:[(0,f.jsx)(c.Z,{style:{marginBottom:"24px"},size:"small",headStyle:{background:"#ebebeb"},title:"\u57FA\u672C\u4FE1\u606F",children:(0,f.jsx)(m.LH,{embed:!0,grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},columns:a(),valueBaseName:"base"})}),(0,f.jsx)(c.Z,{size:"small",title:"\u4E1A\u52A1\u4FE1\u606F",headStyle:{background:"#ebebeb"},children:(0,f.jsx)(m.LH,{embed:!0,columns:h(),labelCol:{span:3},valueBaseName:"business"})})]}),(0,f.jsxs)("div",{style:{marginTop:"10px",textAlign:"end"},children:[(0,f.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){return D(function(j){return!j})},children:"\u5207\u6362\u53EA\u8BFB"}),(0,f.jsx)(d.Z,{loading:A,style:{marginRight:"20px"},onClick:V,children:"\u56DE\u663E\u6570\u636E"}),(0,f.jsx)(d.Z,{style:{marginRight:"10px"},onClick:function(){var j;return(j=p.current)===null||j===void 0?void 0:j.resetFields()},children:"\u91CD\u7F6E"}),(0,f.jsx)(d.Z,{type:"primary",onClick:function(){var j;return(j=p.current)===null||j===void 0?void 0:j.submit()},children:"\u63D0\u4EA4"})]})]})},P=I},34733:function(y,r,e){e.r(r),e.d(r,{default:function(){return n}});var s=e(38942),o=e(97857),i=e.n(o),l=e(57069),t=e(34041),v=e(67294),c=e(85893),d=function(x){var h=(0,v.useContext)(l.J),I=x.value,P=x.onChange,g=x.form;return(0,c.jsx)(t.Z,{value:I,onChange:function(F,C){P(F,C);var R=C.area,E=C.contacts,D=g.getFieldValue("shopList"),T=h.name;D[T]=i()(i()({},D[T]),{},{area:R,contacts:E}),g.setFieldsValue({shopList:D})},options:[{label:"\u5E97\u94FAA",value:"a",area:10,contacts:"\u5F20\u7ECF\u7406"},{label:"\u5E97\u94FAB",value:"b",area:20,contacts:"\u738B\u7ECF\u7406"}]})},u=d,m=[{dataIndex:"shopList",valueType:"formList",fieldProps:{alwaysShowItemLabel:!0,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5E97\u94FA"}},columns:[{title:"\u5E97\u94FA",dataIndex:"shop",renderFormItem:function(x,h,I){return(0,c.jsx)(u,{form:I})},formItemProps:{rules:[{required:!0}]}},{title:"\u5E97\u94FA\u9762\u79EF",dataIndex:"area",valueType:"digit"},{title:"\u5E97\u94FA\u8054\u7CFB\u4EBA",dataIndex:"contacts"},{title:"\u8054\u7CFB\u4EBA\u7535\u8BDD",dataIndex:"contactsPhone"}]}],a=function(){return(0,c.jsx)(s.LH,{onFinish:console.log,columns:m,submitter:!0,autoFocusFirstInput:!1})},n=a},69380:function(y,r,e){e.r(r),e.d(r,{default:function(){return n}});var s=e(38942),o=e(97857),i=e.n(o),l=e(57069),t=e(34041),v=e(67294),c=e(85893),d=function(x){var h=(0,v.useContext)(l.J),I=x.value,P=x.onChange,g=x.form;return(0,c.jsx)(t.Z,{value:I,onChange:function(F,C){P(F,C);var R=C.area,E=C.contacts,D=g.getFieldValue("shopList"),T=h.name;D[T]=i()(i()({},D[T]),{},{area:R,contacts:E}),g.setFieldsValue({shopList:D})},options:[{label:"\u5E97\u94FAA",value:"a",area:10,contacts:"\u5F20\u7ECF\u7406"},{label:"\u5E97\u94FAB",value:"b",area:20,contacts:"\u738B\u7ECF\u7406"}]})},u=d,m=[{dataIndex:"shopList",valueType:"formList",fieldProps:{alwaysShowItemLabel:!0,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5E97\u94FA"}},columns:[{valueType:"group",rowProps:{gutter:[16,0]},columns:[{title:"\u5E97\u94FA",dataIndex:"shop",renderFormItem:function(x,h,I){return(0,c.jsx)(u,{form:I})},formItemProps:{rules:[{required:!0}]},colProps:{span:16}},{title:"\u5E97\u94FA\u9762\u79EF",dataIndex:"area",valueType:"digit",colProps:{span:8},fieldProps:{style:{width:"100%"}}},{title:"\u5E97\u94FA\u8054\u7CFB\u4EBA",dataIndex:"contacts",colProps:{span:12}},{title:"\u8054\u7CFB\u4EBA\u7535\u8BDD",dataIndex:"contactsPhone",colProps:{span:12}}]}]}],a=function(){return(0,c.jsx)(s.LH,{onFinish:console.log,columns:m,submitter:!0,autoFocusFirstInput:!1,grid:!0,colProps:{span:24}})},n=a},28877:function(y,r,e){e.r(r),e.d(r,{default:function(){return x}});var s=e(38942),o=e(63922),i=e(71577),l=e(97857),t=e.n(l),v=e(57069),c=e(34041),d=e(67294),u=e(85893),m=function(I){var P=(0,d.useContext)(v.J),g=I.value,p=I.onChange,F=I.form;return(0,u.jsx)(c.Z,{value:g,onChange:function(R,E){p(R,E);var D=E.area,T=E.contacts,L=F.getFieldValue("shopList"),A=P.name;L[A]=t()(t()({},L[A]),{},{area:D,contacts:T}),F.setFieldsValue({shopList:L})},options:[{label:"\u5E97\u94FAA",value:"a",area:10,contacts:"\u5F20\u7ECF\u7406"},{label:"\u5E97\u94FAB",value:"b",area:20,contacts:"\u738B\u7ECF\u7406"}]})},a=m,n=[{dataIndex:"shopList",valueType:"formList",fieldProps:{alwaysShowItemLabel:!0,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5E97\u94FA",type:"primary"},itemRender:function(I,P){var g=I.listDom,p=I.action,F=P.index,C=P.operation;return(0,u.jsxs)("div",{style:{border:"1px dashed rgba(0,0,0,0.6)",padding:"15px",borderRadius:"5px",marginBottom:"20px"},children:[(0,u.jsx)(o.Z,{color:"black",count:F+1}),g,(0,u.jsx)(i.Z,{danger:!0,block:!0,type:"primary",onClick:function(){return C.remove(F)},children:"\u5220\u9664\u5E97\u94FA"})]})}},columns:[{valueType:"group",rowProps:{gutter:[16,0]},columns:[{title:"\u5E97\u94FA",dataIndex:"shop",renderFormItem:function(I,P,g){return(0,u.jsx)(a,{form:g})},formItemProps:{rules:[{required:!0}]},colProps:{span:16}},{title:"\u5E97\u94FA\u9762\u79EF",dataIndex:"area",valueType:"digit",colProps:{span:8},fieldProps:{style:{width:"100%"}}},{title:"\u5E97\u94FA\u8054\u7CFB\u4EBA",dataIndex:"contacts",colProps:{span:12}},{title:"\u8054\u7CFB\u4EBA\u7535\u8BDD",dataIndex:"contactsPhone",colProps:{span:12}}]}]}],f=function(){return(0,u.jsx)(s.LH,{onFinish:console.log,columns:n,submitter:!0,autoFocusFirstInput:!1,grid:!0,colProps:{span:24}})},x=f},901:function(y,r,e){e.r(r),e.d(r,{default:function(){return c}});var s=e(71577),o=e(67294),i=e(38942),l=[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},dataIndex:"idNumber"}],t=e(85893),v=function(){var u=(0,o.useRef)(),m=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{grid:!0,rowProps:{gutter:[8,0]},colProps:{span:8},onFinish:m,formRef:u,columns:l,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},c=v},6222:function(y,r,e){e.r(r),e.d(r,{default:function(){return c}});var s=e(71577),o=e(67294),i=e(38942),l=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{labelCol:{span:3},rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",formItemProps:{labelCol:{span:9}}},{title:"\u6635\u79F0",formItemProps:{},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},formItemProps:{labelCol:{flex:"0 0 18.75%"}},dataIndex:"idNumber"}]},t=e(85893),v=function(){var u=(0,o.useRef)(),m=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:m,formRef:u,columns:l(),autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},c=v},71655:function(y,r,e){e.r(r),e.d(r,{default:function(){return t}});var s=e(38942),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",colProps:{span:16},dataIndex:"idNumber"}]},i=e(85893),l=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(s.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[8,0]},colProps:{span:8},columns:o(),autoFocusFirstInput:!1})})},t=l},91440:function(y,r,e){e.r(r),e.d(r,{default:function(){return t}});var s=e(38942),o=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",fieldProps:{size:"small"},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"}]},{valueType:"divider"},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",columns:[{title:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}]}],i=e(85893),l=function(){var c=function(u){console.log({values:u})};return(0,i.jsx)(s.LH,{onFinish:c,columns:o,autoFocusFirstInput:!1,submitter:!0})},t=l},60689:function(y,r,e){e.r(r),e.d(r,{default:function(){return c}});var s=e(71577),o=e(67294),i=e(38942),l=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}}]},{valueType:"divider"},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",columns:[{title:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",colProps:{span:12},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:12},formItemProps:{rules:[{required:!0,message:"\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879"}]}}]}],t=e(85893),v=function(){var u=(0,o.useRef)(),m=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{grid:!0,colProps:{span:24},onFinish:m,formRef:u,columns:l,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},c=v},93996:function(y,r,e){e.r(r),e.d(r,{default:function(){return d}});var s=e(71577),o=e(67294),i=e(38942),l=e(27049),t=e(85893),v=[{title:"\u57FA\u672C\u4FE1\u606F",valueType:"group",colProps:{span:11},columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}}]},{renderFormItem:function(){return(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)(l.Z,{type:"vertical",style:{height:"50px"}})})},fieldProps:{style:{width:"100%"}},colProps:{span:2,style:{alignSelf:"center"}}},{title:"\u989D\u5916\u4FE1\u606F",valueType:"group",colProps:{span:11},columns:[{title:"\u6635\u79F0",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",colProps:{span:24},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",colProps:{span:24},formItemProps:{rules:[{required:!0,message:"\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879"}]}}]}],c=function(){var m=(0,o.useRef)(),a=function(f){console.log({values:f})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{grid:!0,onFinish:a,formRef:m,columns:v,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var f;return(f=m.current)===null||f===void 0?void 0:f.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var f;return(f=m.current)===null||f===void 0?void 0:f.submit()},children:"\u63D0\u4EA4"})]})]})},d=c},62907:function(y,r,e){e.r(r),e.d(r,{default:function(){return c}});var s=e(71577),o=e(67294),i=e(38942),l=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}],t=e(85893),v=function(){var u=(0,o.useRef)(),m=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{layout:"horizontal",labelCol:{span:3},onFinish:m,formRef:u,columns:l,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},c=v},91944:function(y,r,e){e.r(r),e.d(r,{default:function(){return m}});var s=e(5574),o=e.n(s),i=e(71577),l=e(67294),t=e(38942),v=e(34041),c=e(85893),d=function(){return[{title:"\u662F\u5426\u663E\u793A\u7535\u8BDD",dataIndex:"showPhone",renderFormItem:function(){return(0,c.jsx)(v.Z,{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]})},render:function(f){return f?"\u662F":"\u5426"}},{valueType:"dependency",name:["showPhone"],columns:function(f){var x=f.showPhone;return x?[{title:"\u7535\u8BDD",dataIndex:"phone"}]:[]}}]},u=function(){var n=(0,l.useRef)(),f=(0,l.useState)(!1),x=o()(f,2),h=x[0],I=x[1],P=function(p){console.log({values:p})};return(0,c.jsxs)("div",{children:[(0,c.jsx)(t.LH,{onFinish:P,formRef:n,columns:d(),autoFocusFirstInput:!1,initialValues:{showPhone:0},readonly:h}),(0,c.jsxs)("div",{style:{textAlign:"end"},children:[(0,c.jsx)(i.Z,{style:{marginRight:"10px"},onClick:function(){return I(!h)},children:"\u5207\u6362\u53EA\u8BFB"}),(0,c.jsx)(i.Z,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.setFieldsValue({showPhone:1,phone:15800012345})},children:"\u8D4B\u503C"}),(0,c.jsx)(i.Z,{style:{marginRight:"10px"},onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.resetFields()},children:"\u91CD\u7F6E"}),(0,c.jsx)(i.Z,{type:"primary",onClick:function(){var p;return(p=n.current)===null||p===void 0?void 0:p.submit()},children:"\u63D0\u4EA4"})]})]})},m=u},64857:function(y,r,e){e.r(r),e.d(r,{default:function(){return m}});var s=e(15009),o=e.n(s),i=e(99289),l=e.n(i),t=e(67294),v=e(38942),c=function(){return[{title:"\u5458\u5DE5",dataIndex:"userId",valueType:"select",fieldProps:function(f,x){return{options:[{label:"\u5458\u5DE51",value:"user1",userCode:"c01"},{label:"\u5458\u5DE52",value:"user2",userCode:"c02"}],onChange:function(I,P){var g;(g=x.current)===null||g===void 0||g.setData({userCode:P.userCode})}}}},{title:"\u662F\u5426\u5C55\u793A\u90E8\u95E8",dataIndex:"showDept",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{name:["showDept"],valueType:"dependency",columns:function(f){var x=f.showDept;return x?[{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"select",fieldProps:function(I,P){return{labelInValue:!0,options:[{label:"\u9500\u552E\u90E8",value:"1",deptCode:"A"},{label:"\u6280\u672F\u90E8",value:"2",deptCode:"B"}],onChange:function(p,F){var C;(C=P.current)===null||C===void 0||C.setData({deptCode:F.deptCode})}}}}]:[]}}]},d=e(85893),u=function(){var n=(0,t.useRef)(null),f=function(){var x=l()(o()().mark(function h(I){var P;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:console.log({values:I,otherValues:(P=n.current)===null||P===void 0?void 0:P.data});case 1:case"end":return p.stop()}},h)}));return function(I){return x.apply(this,arguments)}}();return(0,d.jsx)(v.LH,{columns:c(),innerRef:n,onFinish:f,submitter:{},autoFocusFirstInput:!1})},m=u},18546:function(y,r,e){e.r(r),e.d(r,{default:function(){return c}});var s=e(71577),o=e(67294),i=e(38942),l=[{title:"\u8054\u7CFB\u4EBA",dataIndex:"name"},{title:"\u7535\u8BDD",dataIndex:"phone"},{fieldProps:{hidden:!0}},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"chargeName"},{title:"\u7535\u8BDD",dataIndex:"chargePhone"},{title:"\u90AE\u7BB1",dataIndex:"mail"}],t=e(85893),v=function(){var u=(0,o.useRef)(),m=function(n){console.log({values:n})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:m,formRef:u,columns:l,autoFocusFirstInput:!1}),(0,t.jsxs)("div",{style:{textAlign:"end"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"},onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.resetFields()},children:"\u91CD\u7F6E"}),(0,t.jsx)(s.Z,{type:"primary",onClick:function(){var n;return(n=u.current)===null||n===void 0?void 0:n.submit()},children:"\u63D0\u4EA4"})]})]})},c=v},9960:function(y,r,e){e.r(r),e.d(r,{default:function(){return v}});var s=e(67294),o=e(38942),i=[{title:"\u8054\u7CFB\u4EBA",dataIndex:"name"},{title:"\u7535\u8BDD",dataIndex:"phone"},{fieldProps:{hidden:!0},render:function(){return null}},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"chargeName"},{title:"\u7535\u8BDD",dataIndex:"chargePhone"},{title:"\u81EA\u5B9A\u4E49",dataIndex:"mail",render:function(d,u){return u.mode==="read"?"\u{1F4E7}"+u.value:d}}],l=e(85893),t=function(){var d=(0,s.useRef)(),u=function(a){console.log({values:a})};return(0,l.jsx)("div",{children:(0,l.jsx)(o.LH,{layout:"horizontal",grid:!0,rowProps:{gutter:[0,0]},colProps:{span:8},labelCol:{span:9},onFinish:u,formRef:d,columns:i,readonly:!0,initialValues:{name:"\u738B\u5148\u751F",phone:1202228888,sex:"\u7537",mail:"mail.com"}})})},v=t},50403:function(y,r,e){e.r(r);var s=e(38942),o=e(85893),i=function(){return(0,o.jsx)(s.LH,{onFinish:console.log,columns:[{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u90AE\u7BB1",dataIndex:"email",required:!0}],autoFocusFirstInput:!1,submitter:!0})};r.default=i},30715:function(y,r,e){e.r(r),e.d(r,{default:function(){return t}});var s=e(38942),o=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}}],i=e(85893),l=function(){return(0,i.jsx)(s.LH,{columns:o,autoFocusFirstInput:!1,submitter:!0,onFinish:console.log})},t=l},63306:function(y,r,e){e.r(r),e.d(r,{default:function(){return t}});var s=e(38942),o=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}}],i=e(85893),l=function(){return(0,i.jsx)(s.LH,{columns:o,autoFocusFirstInput:!1,submitter:{style:{justifyContent:"end"},submitButtonProps:{loading:!0},resetButtonProps:{danger:!0}},onFinish:console.log})},t=l},23292:function(y,r,e){e.r(r),e.d(r,{default:function(){return t}});var s=e(38942),o=[{title:"money",dataIndex:"money",valueType:"money",initialValue:1234.25,fieldProps:{precision:2,style:{width:"80%"}}},{title:"digit",dataIndex:"digit",valueType:"digit",initialValue:8},{title:"date",dataIndex:"date",valueType:"date",initialValue:new Date},{title:"dateRange",dataIndex:"dateRange",valueType:"dateRange",initialValue:["2023-8-1",new Date],colProps:{span:16}},{title:"select",dataIndex:"select",valueType:"select",fieldProps:{options:[{label:"\u9009\u62E91",value:1},{label:"\u9009\u62E92",value:2}]},initialValue:1},{title:"radio",dataIndex:"radio",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]},initialValue:1},{title:"textarea",dataIndex:"textarea",valueType:"textarea",initialValue:"\u6587\u672C\u57DF"}],i=e(85893),l=function(){return(0,i.jsx)(s.LH,{columns:o,grid:!0,colProps:{span:8},autoFocusFirstInput:!1})},t=l},50380:function(y,r,e){e.d(r,{z:function(){return s}});var s=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}]}}]);