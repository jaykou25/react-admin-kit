"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[809],{20463:function(p,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(15634),d=e(67294),o=e(85893),a=function(){var h=(0,d.useRef)(null);return(0,o.jsx)(n.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(s){return{id:s==null?void 0:s.data.id}}},children:(0,o.jsx)(n.LH,{formRef:h,columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,o.jsx)(n.mL,{children:function(c){var f=c.loading;return(0,o.jsx)(n.Qj,{children:f?"\u4E0A\u4F20\u4E2D":"\u4E0A\u4F20\u9644\u4EF6"})}})}}],submitter:!0,onFinish:console.log})})},r=a,i=function(){return(0,o.jsx)(n.oh,{formUploadSetting:{headers:{authorization:"authorization-text"}},children:(0,o.jsx)(r,{})})},l=i},90054:function(p,t,e){e.r(t),e.d(t,{default:function(){return m}});var n=e(5574),d=e.n(n),o=e(67294),a=e(15634),r=e(44458),i=e(85893),l=function(){var c=(0,o.useState)(!1),f=d()(c,2),u=f[0],j=f[1],F=function(P){console.log({values:P})};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{textAlign:"start"},children:(0,i.jsx)(a.zx,{type:"primary",onClick:function(){return j(!0)},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,i.jsx)(a.Yr,{title:"\u57FA\u672C\u8868\u5355",open:u,onCancel:function(){return j(!1)},onFinish:F,columns:r.z})]})},v=l,h=function(){return(0,i.jsx)(a.oh,{modalFormSetting:{formProps:{layout:"horizontal",labelCol:{span:4}}},children:(0,i.jsx)(v,{})})},m=h},16898:function(p,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(67294),d=e(15634),o=e(14726),a=e(50380),r=e(85893),i=function(){var s=(0,n.useRef)(),c=function(u){console.log({values:u})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(d.LH,{onFinish:c,formRef:s,columns:a.z,autoFocusFirstInput:!1,initialValues:{sex:"\u7537"}}),(0,r.jsxs)("div",{style:{textAlign:"end"},children:[(0,r.jsx)(o.ZP,{style:{marginRight:"10px"},onClick:function(){var u;return(u=s.current)===null||u===void 0?void 0:u.resetFields()},children:"\u91CD\u7F6E"}),(0,r.jsx)(o.ZP,{type:"primary",onClick:function(){var u;return(u=s.current)===null||u===void 0?void 0:u.submit()},children:"\u63D0\u4EA4"})]})]})},l=i,v=function(){return(0,r.jsx)(d.oh,{schemaFormSetting:{validateMessages:{required:"${label}\u4E3A\u5FC5\u586B\u9879"}},children:(0,r.jsx)(l,{})})},h=v},19699:function(p,t,e){e.r(t),e.d(t,{default:function(){return c}});var n=e(15634),d=e(14726),o=e(68872),a=e(67294),r=e(48186),i=e(70113),l=e(85893),v={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},h=function(){var u=(0,a.useRef)(),j=(0,a.useRef)();return(0,l.jsx)("div",{children:(0,l.jsx)(n.QV,{name:"\u7528\u6237",columns:(0,i.P)(),request:r.P,bordered:!0,innerRef:u,actionRef:j,toolbar:{actions:[(0,l.jsx)(d.ZP,{type:"primary",onClick:function(){var x;(x=u.current)===null||x===void 0||x.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:r.R,onFinish:function(x,P){return console.log({values:x}),new Promise(function(g){setTimeout(function(){var R;g(!0),o.ZP.success(v[P]+"\u6210\u529F"),(R=j.current)===null||R===void 0||R.reload()},1e3)})}})})},m=h,s=function(){return(0,l.jsx)(n.oh,{proTableSetting:{size:"middle",searchConfig:{defaultCollapsed:!1},modalProps:{width:680},formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}},confirmModalType:"modal",confirmModalProps:{title:"\u5168\u5C40\u5B9A\u5236\u7684title"},tableAlertOption:{deleteProps:{btnText:"\u6279\u91CF\u5173\u95ED",title:function(j){return"\u786E\u8BA4\u5173\u95ED".concat(j,"\u6761\u5417?")}}},optionColumnSpaceProps:{size:"small"},options:{density:!1,reload:!0,fullScreen:!0}},children:(0,l.jsx)(m,{})})},c=s},44458:function(p,t,e){e.d(t,{z:function(){return n}});var n=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",required:!0}]},48186:function(p,t,e){e.d(t,{P:function(){return n},R:function(){return d}});var n=function(){return new Promise(function(a){setTimeout(function(){return a({data:[{id:1,name:"Jack",phone:133,isMember:"1",grade:"\u4E00\u7EA7"},{id:2,name:"Tom",phone:155,isMember:"0"}],success:!0,total:2})},1e3)})},d=function(a){return new Promise(function(r){console.log("delete record",a),setTimeout(function(){return r(!0)},500)})}},70113:function(p,t,e){e.d(t,{P:function(){return o}});var n=e(15634),d=e(85893),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"time",valueType:"dateRange",transform:function(i){return{startTime:i[0],endTime:i[1]}}},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(i,l,v,h,m){return[(0,d.jsx)(n.Qj,{onClick:function(){var c;return(c=m.current)===null||c===void 0?void 0:c.openModal("edit",l)},children:"\u7F16\u8F91"},1)]}}]}},50380:function(p,t,e){e.d(t,{z:function(){return n}});var n=[{title:"\u7528\u6237\u540D",dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},formItemProps:{rules:[{required:!0}]}},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}}]}}]);