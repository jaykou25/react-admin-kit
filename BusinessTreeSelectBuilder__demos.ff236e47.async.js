"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[438],{23444:function(c,o,n){n.r(o),n.d(o,{BusinessTreeSelect:function(){return e}});var u=n(15634),d=n(97579),r=n(85893),e=(0,u.t4)({apis:[{api:d.E,type:"company"},{api:d.m,type:"dept"}]}),t=function(){return(0,r.jsx)(u.LH,{grid:!0,colProps:{span:8},onFinish:function(s){return console.log({values:s})},autoFocusFirstInput:!1,columns:[{title:"\u516C\u53F8",dataIndex:"company",renderFormItem:function(){return(0,r.jsx)(e,{type:"company"})}},{valueType:"dependency",name:["company"],columns:function(s){var a=s.company;return a?[{title:"\u90E8\u95E8",dataIndex:"dept",renderFormItem:function(){return(0,r.jsx)(e,{queryParams:{id:a},type:"dept"})}}]:[{title:"\u90E8\u95E8",dataIndex:"dept",fieldProps:{disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u516C\u53F8"}}]}}]})};o.default=t},19135:function(c,o,n){n.r(o);var u=n(12461),d=n(67294),r=n(15634),e=n(66675),t=n(85893),m=function(){var s=(0,d.useRef)();return(0,t.jsxs)("div",{children:[(0,t.jsx)(r.zx,{onClick:function(){(0,r.Mb)("company"),u.ZP.info("\u7F13\u5B58\u6E05\u9664\u6210\u529F")},children:"\u6E05\u9664\u7F13\u5B58"}),(0,t.jsx)(r.zx,{type:"primary",style:{marginLeft:"10px"},onClick:function(){var i;return(i=s.current)===null||i===void 0?void 0:i.openModal("new")},children:"\u6253\u5F00\u5F39\u7A97"}),(0,t.jsx)(r.Yr,{innerRef:s,onFinish:function(i){return console.log({values:i})},columns:[{title:"\u516C\u53F8 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)",dataIndex:"company",renderFormItem:function(){return(0,t.jsx)(e.i,{type:"company"})}}]})]})};o.default=m},66546:function(c,o,n){n.r(o);var u=n(5574),d=n.n(u),r=n(26713),e=n(67294),t=n(66675),m=n(85893),_=function(){var a=(0,e.useState)(),i=d()(a,2),E=i[0],f=i[1];return(0,m.jsx)(r.Z,{children:(0,m.jsx)(t.i,{style:{width:"150px"},type:"company",value:E,onLoad:function(y){var l;console.log("tree onload options",y),f((l=y[0])===null||l===void 0?void 0:l.id)}})})};o.default=_},66675:function(c,o,n){n.d(o,{i:function(){return e}});var u=n(15634),d=n(97579),r=n(85893),e=(0,u.t4)({apis:[{api:d.E,type:"company"},{api:d.m,type:"dept"}]}),t=function(){return _jsx(SchemaForm,{grid:!0,colProps:{span:8},onFinish:function(a){return console.log({values:a})},autoFocusFirstInput:!1,columns:[{title:"\u516C\u53F8",dataIndex:"company",renderFormItem:function(){return _jsx(e,{type:"company"})}},{valueType:"dependency",name:["company"],columns:function(a){var i=a.company;return i?[{title:"\u90E8\u95E8",dataIndex:"dept",renderFormItem:function(){return _jsx(e,{queryParams:{id:i},type:"dept"})}}]:[{title:"\u90E8\u95E8",dataIndex:"dept",fieldProps:{disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u516C\u53F8"}}]}}]})},m=null},97579:function(c,o,n){n.d(o,{E:function(){return u},m:function(){return d}});var u=function(){return new Promise(function(e){console.log("queryOrg only once"),setTimeout(function(){e([{name:"\u96C6\u56E2\u516C\u53F8",id:1,children:[{name:"\u4E1A\u52A1\u5B50\u516C\u53F8A",id:2},{name:"\u4E1A\u52A1\u5B50\u516C\u53F8B",id:3}]},{name:"\u5176\u5B83\u516C\u53F8",id:-1}])},1200)})},d=function(e){return new Promise(function(t){console.log("queryDept",e),setTimeout(function(){e.id===1?t([{name:"\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4",id:1},{name:"\u96C6\u56E2 - \u9500\u552E\u90E8",id:2,children:[{name:"\u96C6\u56E2 - \u9500\u552E\u90E81",id:3},{name:"\u96C6\u56E2 - \u9500\u552E\u90E82",id:4}]}]):e.id===2||e.id===3?t([{name:"\u5B50\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82",id:3}]}]):t([{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82",id:3}]},{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82",id:-1}])},1e3)})}}}]);
