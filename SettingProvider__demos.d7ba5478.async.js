"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[809],{73712:function(p,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(38942),d=e(67294),r=e(85893),i=function(){var h=(0,d.useRef)(null);return(0,r.jsx)(n.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(s){return{id:s==null?void 0:s.data.id}}},children:(0,r.jsx)(n.LH,{formRef:h,columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,r.jsx)(n.mL,{children:function(c){var f=c.loading;return(0,r.jsx)(n.Qj,{children:f?"\u4E0A\u4F20\u4E2D":"\u4E0A\u4F20\u9644\u4EF6"})}})}}],submitter:!0,onFinish:console.log})})},o=i,u=function(){return(0,r.jsx)(n.oh,{formUploadSetting:{headers:{authorization:"authorization-text"}},children:(0,r.jsx)(o,{})})},l=u},40912:function(p,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(5574),d=e.n(n),r=e(67294),i=e(38942),o=e(44458),u=e(85893),l=function(){var c=(0,r.useState)(!1),f=d()(c,2),a=f[0],j=f[1],F=function(I){console.log({values:I})};return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{textAlign:"start"},children:(0,u.jsx)(i.zx,{type:"primary",onClick:function(){return j(!0)},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,u.jsx)(i.Yr,{title:"\u57FA\u672C\u8868\u5355",open:a,onCancel:function(){return j(!1)},onFinish:F,columns:o.z})]})},v=l,h=function(){return(0,u.jsx)(i.oh,{modalFormSetting:{formProps:{layout:"horizontal",labelCol:{span:4}}},children:(0,u.jsx)(v,{})})},m=h},66107:function(p,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(67294),d=e(38942),r=e(71577),i=e(50380),o=e(85893),u=function(){var s=(0,n.useRef)(),c=function(a){console.log({values:a})};return(0,o.jsxs)("div",{children:[(0,o.jsx)(d.LH,{onFinish:c,formRef:s,columns:i.z,autoFocusFirstInput:!1}),(0,o.jsxs)("div",{style:{textAlign:"end"},children:[(0,o.jsx)(r.Z,{style:{marginRight:"10px"},onClick:function(){var a;return(a=s.current)===null||a===void 0?void 0:a.resetFields()},children:"\u91CD\u7F6E"}),(0,o.jsx)(r.Z,{type:"primary",onClick:function(){var a;return(a=s.current)===null||a===void 0?void 0:a.submit()},children:"\u63D0\u4EA4"})]})]})},l=u,v=function(){return(0,o.jsx)(d.oh,{schemaFormSetting:{validateMessages:{required:"${label}\u4E3A\u5FC5\u586B\u9879"}},children:(0,o.jsx)(l,{})})},h=v},88304:function(p,t,e){e.r(t),e.d(t,{default:function(){return c}});var n=e(38942),d=e(71577),r=e(12461),i=e(67294),o=e(48186),u=e(70113),l=e(85893),v={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},h=function(){var a=(0,i.useRef)(),j=(0,i.useRef)();return(0,l.jsx)("div",{children:(0,l.jsx)(n.QV,{name:"\u7528\u6237",columns:(0,u.P)(),request:o.P,bordered:!0,innerRef:a,actionRef:j,toolbar:{actions:[(0,l.jsx)(d.Z,{type:"primary",onClick:function(){var x;(x=a.current)===null||x===void 0||x.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:o.R,onFinish:function(x,I){return console.log({values:x}),new Promise(function(g){setTimeout(function(){var P;g(!0),r.ZP.success(v[I]+"\u6210\u529F"),(P=j.current)===null||P===void 0||P.reload()},1e3)})}})})},m=h,s=function(){return(0,l.jsx)(n.oh,{proTableSetting:{size:"middle",searchConfig:{defaultCollapsed:!1},modalProps:{width:680},formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}},confirmModalType:"modal",confirmModalProps:{title:"\u5168\u5C40\u5B9A\u5236\u7684title"},tableAlertOption:{deleteProps:{btnText:"\u6279\u91CF\u5173\u95ED",title:function(j){return"\u786E\u8BA4\u5173\u95ED".concat(j,"\u6761\u5417?")}}},optionColumnSpaceProps:{size:"small"},options:{density:!1,reload:!0,fullScreen:!0}},children:(0,l.jsx)(m,{})})},c=s},44458:function(p,t,e){e.d(t,{z:function(){return n}});var n=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone",formItemProps:{rules:[{required:!0,message:"\u7535\u8BDD\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u6635\u79F0",formItemProps:{rules:[{required:!0,message:"\u6635\u79F0\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",formItemProps:{rules:[{required:!0,message:"\u8EAB\u4EFD\u8BC1\u4E3A\u5FC5\u586B\u9879"}]},dataIndex:"idNumber"}]},48186:function(p,t,e){e.d(t,{P:function(){return n},R:function(){return d}});var n=function(){return new Promise(function(i){setTimeout(function(){return i({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}],success:!0,total:2})},1e3)})},d=function(i){return new Promise(function(o){console.log("delete record",i),setTimeout(function(){return o(!0)},500)})}},70113:function(p,t,e){e.d(t,{P:function(){return r}});var n=e(38942),d=e(85893),r=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(u,l,v,h,m){return[(0,d.jsx)(n.Qj,{onClick:function(){var c;return(c=m.current)===null||c===void 0?void 0:c.openModal("edit",l)},children:"\u7F16\u8F91"},1)]}}]}},50380:function(p,t,e){e.d(t,{z:function(){return n}});var n=[{title:"\u7528\u6237\u540D",dataIndex:"username",formItemProps:{rules:[{required:!0}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"}]}}]);
