"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[749],{2030:function(c,r,e){e.r(r);var m=e(67294),n=e(15634),t=e(85893),i=function(){var s=(0,m.useRef)(null);return(0,t.jsx)(n.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(a){return{id:a==null?void 0:a.data.id}}},children:(0,t.jsx)(n.LH,{formRef:s,columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,t.jsx)(n.mL,{children:function(_){var l=_.loading;return(0,t.jsx)(n.Qj,{children:l?"\u4E0A\u4F20\u4E2D":"\u4E0A\u4F20\u9644\u4EF6"})}})}}],submitter:!0,onFinish:console.log})})};r.default=i},86251:function(c,r,e){e.r(r);var m=e(67294),n=e(15634),t=e(85893),i=function(){var s=(0,m.useRef)();return(0,m.useEffect)(function(){var o;(o=s.current)===null||o===void 0||o.setFieldsValue({fileList:[{id:1,fileName:"\u7167\u72471",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:2,fileName:"\u7167\u72472",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]})},[]),(0,t.jsx)(n.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",responseToFileList:function(a){return a.data},nameKey:"fileName",urlKey:"filePath"},children:(0,t.jsx)(n.LH,{formRef:s,columns:[{title:"\u9644\u4EF6",dataIndex:"fileList",transform:function(a){return{fileIds:a.map(function(_){return _.id}).join(",")}},renderFormItem:function(){return(0,t.jsx)(n.mL,{children:(0,t.jsx)(n.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:!0,onFinish:console.log})})};r.default=i},6118:function(c,r,e){e.r(r);var m=e(97857),n=e.n(m),t=e(67294),i=e(15634),u=e(85893),s=function(){var a=(0,t.useRef)(),_=function(d){console.log({values:d})};return(0,t.useEffect)(function(){var l;(l=a.current)===null||l===void 0||l.setFieldsValue({fileList:[{id:1,fileName:"\u7167\u72471",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:2,fileName:"\u7167\u72472",filePath:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]})},[]),(0,u.jsx)(i.LH,{columns:[{title:"\u9644\u4EF6",dataIndex:"fileList",convertValue:function(d){return d&&d.map(function(f){return n()(n()({},f),{},{name:f.fileName,url:f.filePath})})},transform:function(d){return{fileIds:d.map(function(f){return f.id}).join(",")}},renderFormItem:function(){return(0,u.jsx)(i.mL,{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",responseToFileList:function(f){return f.data},children:(0,u.jsx)(i.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:!0,onFinish:_})};r.default=s},95895:function(c,r,e){e.r(r);var m=e(12461),n=e(15634),t=e(85893),i=function(){return(0,t.jsx)(n.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUploadFailed",headers:{Authorization:"myToken"},responseToFileList:function(o){var a;return{id:o==null||(a=o.data)===null||a===void 0?void 0:a.id}},errorHandle:function(o){m.ZP.error("\u4E0A\u4F20\u5931\u8D25 "+(o==null?void 0:o.message)||0)}},children:(0,t.jsx)(n.LH,{columns:[{title:"\u9644\u4EF6",dataIndex:"files",formItemProps:{rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u9644\u4EF6"}]},renderFormItem:function(){return(0,t.jsx)(n.mL,{children:(0,t.jsx)(n.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:!0,onFinish:console.log})})};r.default=i},47872:function(c,r,e){e.r(r);var m=e(5574),n=e.n(m),t=e(12461),i=e(67294),u=e(15634),s=e(85893),o=function(){var _=(0,i.useRef)(null),l=(0,i.useState)([]),d=n()(l,2),f=d[0],j=d[1];return(0,s.jsx)(u.oh,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(E){return{id:E==null?void 0:E.data.id}}},children:(0,s.jsx)(u.QV,{actionRef:_,toolbar:{actions:[(0,s.jsx)(u.mL,{multiple:!1,showUploadList:!1,value:f,onFinish:function(){t.ZP.success("\u5BFC\u5165\u6210\u529F!"),_.current.reload(),j([])},children:(0,s.jsx)(u.zx,{type:"primary",children:"\u5BFC\u5165"})})]},columns:[{title:"\u5E8F\u53F7",valueType:"index"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u89C4\u683CA",dataIndex:"specA"},{title:"\u89C4\u683CB",dataIndex:"specB"}]})})};r.default=o},87436:function(c,r,e){e.r(r);var m=e(12461),n=e(67294),t=e(15634),i=e(85893),u=function(){var o=(0,n.useRef)();return(0,i.jsx)(t.LH,{formRef:o,initialValues:{files:[{id:1,name:"\u7167\u72471",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{id:2,name:"\u7167\u72472",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]},columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,i.jsx)(t.mL,{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",listType:"picture-card",beforeUpload:function(l){var d=l.type==="image/jpeg"||l.type==="image/png";if(!d)return m.ZP.error("\u8BF7\u4E0A\u4F20 JPG/PNG \u6587\u4EF6!"),!1},children:(0,i.jsx)(t.Qj,{children:"\u4E0A\u4F20\u9644\u4EF6"})})}}],submitter:{},onFinish:console.log})};r.default=u}}]);
