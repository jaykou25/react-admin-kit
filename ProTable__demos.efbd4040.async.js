"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[843],{56880:function(E,a,e){e.r(a),e.d(a,{FORM_TYPE_MAP:function(){return o}});var g=e(71577),d=e(12461),m=e(67294),s=e(15634),p=e(48186),I=e(70113),u=e(85893),o={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},i=function(){var l=(0,m.useRef)(),n=(0,m.useRef)();return(0,u.jsx)("div",{children:(0,u.jsx)(s.QV,{name:"\u7528\u6237",columns:(0,I.P)(),request:p.P,bordered:!0,innerRef:l,actionRef:n,toolbar:{actions:[(0,u.jsx)(g.Z,{type:"primary",onClick:function(){var r;(r=l.current)===null||r===void 0||r.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:p.R,onFinish:function(r,x){return console.log({values:r}),new Promise(function(v){setTimeout(function(){var f;v(!0),d.ZP.success(o[x]+"\u6210\u529F"),(f=n.current)===null||f===void 0||f.reload()},1e3)})}})})};a.default=i},63783:function(E,a,e){e.r(a),e.d(a,{FORM_TYPE_MAP:function(){return u},default:function(){return i}});var g=e(12461),d=e(67294),m=e(15634),s=e(48186),p=e(85893),I=function(){return[{type:"search",title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"search1",valueType:"dateRange",transform:function(n){return{range:n.join(",")}}},{type:"search",title:"\u641C\u7D22\u4E8C",dataIndex:"search2"},{type:"search",title:"\u641C\u7D22\u4E09",dataIndex:"search3",search:!1,hideInSearch:!0},{title:"\u7528\u6237\u540D",dataIndex:"username"},{type:"form",title:"\u5BC6\u7801",dataIndex:"password",required:!0},{type:"table",title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",valueType:"date"},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(n,c,r,x,v){return[(0,p.jsx)(m.Qj,{onClick:function(){var t;return(t=v.current)===null||t===void 0?void 0:t.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},u={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},o=function(){var l=(0,d.useRef)(),n=(0,d.useRef)();return(0,p.jsx)(m.QV,{name:"\u7528\u6237",defaultHideInSearch:!0,columns:I(),request:function(r){return console.log("\u8BF7\u6C42\u53C2\u6570",r),Promise.resolve({data:[{id:1,username:"\u7528\u62371",passwor:"123456",createTime:1695655397070}]})},bordered:!0,innerRef:l,actionRef:n,toolbar:{actions:[(0,p.jsx)(m.zx,{type:"primary",onClick:function(){var r;(r=l.current)===null||r===void 0||r.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:s.R,onFinish:function(r,x){return console.log({values:r}),new Promise(function(v){setTimeout(function(){var f;v(!0),g.ZP.success(u[x]+"\u6210\u529F"),(f=n.current)===null||f===void 0||f.reload()},1e3)})}})},i=o},16286:function(E,a,e){e.r(a),e.d(a,{default:function(){return c}});var g=e(97857),d=e.n(g),m=e(5574),s=e.n(m),p=e(71577),I=e(12902),u=e(67294),o=e(15634),i=e(65360),R=e(85893),l=function(x){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u51FA\u751F\u65E5\u671F",dataIndex:"birthday",valueType:"date"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(f,t,h,T,y){return[(0,R.jsx)(o.Qj,{onClick:function(){var P;return(P=y.current)===null||P===void 0?void 0:P.openModal("edit",t)},children:"\u7F16\u8F91"},1),(0,R.jsx)(i.Z,{title:"\u786E\u8BA4\u5220\u9664\u5417?",onConfirm:function(){return x(t.id)},children:(0,R.jsx)(o.Qj,{danger:!0,children:"\u5220\u9664"})},2)]}}]},n=function(){var x=(0,u.useRef)(),v=(0,u.useState)([{id:1,name:"\u738B\u5148\u751F",phone:"1596668888",sex:"\u7537"}]),f=s()(v,2),t=f[0],h=f[1],T=function(P,F,j){if(F==="new"&&h(t.concat(d()(d()({},P),{},{id:Date.now()}))),F==="edit"){var M=(0,I.ZP)(t,function(N){var S=N.findIndex(function(D){return D.id===j.id});N[S]=d()(d()({},j),P)});h(M)}},y=function(P){h(t.filter(function(F){return F.id!==P}))};return(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{style:{textAlign:"right",marginBottom:"10px"},children:(0,R.jsx)(p.Z,{type:"primary",onClick:function(){x.current.openModal()},children:"\u65B0\u589E\u7528\u6237"})}),(0,R.jsx)(o.QV,{columns:l(y),dataSource:t,innerRef:x,onFinish:T,bordered:!0,search:!1,pagination:!1,noPadding:!0})]})},c=n},41242:function(E,a,e){e.r(a),e.d(a,{FORM_TYPE_MAP:function(){return u},default:function(){return i}});var g=e(12461),d=e(67294),m=e(15634),s=function(){return new Promise(function(l){setTimeout(function(){return l({data:[{id:"1",name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}]})},1e3)})},p=e(85893),I=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]},renderText:function(n,c){return c.deptName}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeName",hideInForm:!0},{hideInTable:!0,valueType:"dependency",name:["isMember"],columns:function(n){var c=n.isMember;return c?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}},{valueType:"option",title:"\u64CD\u4F5C",render:function(n,c,r,x,v){return[(0,p.jsx)(m.Qj,{onClick:function(){var t;return(t=v.current)===null||t===void 0?void 0:t.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},u={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},o=function(){var l=(0,d.useRef)(),n=(0,d.useRef)(),c=function(x,v,f){return console.log({values:x,type:v,formData:f}),new Promise(function(t){setTimeout(function(){var h;t(!0),g.ZP.success(u[v]+"\u6210\u529F"),(h=n.current)===null||h===void 0||h.reload()},1e3)})};return(0,p.jsx)("div",{children:(0,p.jsx)(m.QV,{name:"\u7528\u6237",columns:I(),innerRef:l,actionRef:n,request:s,onFinish:c,bordered:!0,search:!1,pagination:!1,formProps:{layout:"horizontal",labelCol:{span:4}}})})},i=o},3381:function(E,a,e){e.r(a),e.d(a,{default:function(){return c}});var g=e(15009),d=e.n(g),m=e(99289),s=e.n(m),p=e(67294),I=e(15634),u=function(x){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",x),new Promise(function(v){setTimeout(function(){x.current===1?v({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):v({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},o=function(x){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",x),new Promise(function(v){setTimeout(function(){v(!0)},500)})},i=e(12461),R=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},l=e(85893),n=function(){var x=(0,p.useRef)(null),v=(0,p.useRef)(null);return(0,l.jsx)(I.QV,{columns:R(),request:u,pagination:{pageSize:5},innerRef:x,toolbar:{actions:[(0,l.jsx)(I.zx,{type:"primary",onClick:function(){var t;return(t=x.current)===null||t===void 0?void 0:t.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var f=s()(d()().mark(function t(h,T){var y;return d()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(T!=="new"){P.next=5;break}return P.next=3,o(h);case 3:i.ZP.success("\u65B0\u5EFA\u6210\u529F"),(y=v.current)===null||y===void 0||y.reload();case 5:case"end":return P.stop()}},t)}));return function(t,h){return f.apply(this,arguments)}}()})},c=n},5858:function(E,a,e){e.r(a),e.d(a,{default:function(){return f}});var g=e(15009),d=e.n(g),m=e(97857),s=e.n(m),p=e(99289),I=e.n(p),u=e(67294),o=e(15634),i=function(h){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){h.current===1?T({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):T({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},R=function(h){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},l=function(h){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},n=function(h){return console.log("\u5220\u9664\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},c=e(12461),r=e(85893),x=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:function(){return{danger:!0,btnText:"\u5173\u95ED"}},render:function(T,y,C,P,F){return[(0,r.jsx)(o.Qj,{onClick:function(){var M;console.log("editclick",F),(M=F.current)===null||M===void 0||M.openModal("edit",y)},children:"\u7F16\u8F91"},1)]}}]},v=function(){var h=(0,u.useRef)(null),T=(0,u.useRef)(null);return(0,r.jsx)(o.QV,{actionRef:T,confirmModelType:"modal",confirmModalProps:{title:"\u786E\u5B9A\u5173\u95ED\u5417?"},columns:x(),request:i,pagination:{pageSize:5},innerRef:h,toolbar:{actions:[(0,r.jsx)(o.zx,{type:"primary",onClick:function(){var C;return(C=h.current)===null||C===void 0?void 0:C.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var y=I()(d()().mark(function C(P,F,j){var M,N;return d()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(F!=="new"){D.next=5;break}return D.next=3,R(P);case 3:c.ZP.success("\u65B0\u5EFA\u6210\u529F!"),(M=T.current)===null||M===void 0||M.reload();case 5:if(F!=="edit"){D.next=10;break}return D.next=8,l(s()(s()({},P),{},{id:j.id}));case 8:c.ZP.success("\u66F4\u65B0\u6210\u529F!"),(N=T.current)===null||N===void 0||N.reload();case 10:case"end":return D.stop()}},C)}));return function(C,P,F){return y.apply(this,arguments)}}(),delFunction:n,rowSelection:{},tableAlertOption:{deleteProps:{btnText:"\u6279\u91CF\u5173\u95ED",title:function(C){return"\u786E\u5B9A\u5173\u95ED".concat(C,"\u6761\u6570\u636E\u5417?")}}}})},f=v},35123:function(E,a,e){e.r(a),e.d(a,{default:function(){return u}});var g=e(15634),d=function(){return new Promise(function(i){setTimeout(function(){return i({data:[{id:1,name:"Jack",birthday:1667375314278,sex:"man",type:"1",range:[1667375314278,1667375314278],status:"1",createTime:1667375314278}]})},1e3)})},m=e(20550),s=e(85893),p=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",width:80},{title:"\u751F\u65E5",dataIndex:"birthday",valueType:"date",width:110},{title:"\u6027\u522B",dataIndex:"sex",valueType:"select",valueEnum:{man:{text:"\u7537"},woman:{text:"\u5973"}},width:80},{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",fieldProps:{options:[{label:"\u4F1A\u5458",value:"1"},{label:"\u975E\u4F1A\u5458",value:"2"}]},width:80},{title:"\u4F1A\u5458\u8303\u56F4",dataIndex:"range",valueType:"dateRange",width:130},{title:"\u72B6\u6001",dataIndex:"status",render:function(R){return R?(0,s.jsx)(m.Z,{color:"success",children:"\u5F00\u542F"}):(0,s.jsx)(m.Z,{children:"\u672A\u5F00\u542F"})},renderExport:function(R){return R?"\u5F00\u542F":"\u672A\u5F00\u542F"},width:80},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",valueType:"dateTime",width:100}]},I=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(g.QV,{noPadding:!0,name:"\u7528\u6237",search:!1,columns:p(),request:d,bordered:!0,rowSelection:{},tableAlertOption:{enableExport:!0}})})},u=I},26906:function(E,a,e){e.r(a),e.d(a,{default:function(){return p}});var g=e(67294),d=e(15634),m=e(85893),s=function(){return[{title:"\u5E8F\u53F7",valueType:"index"},{type:"table",title:"\u5458\u5DE5",dataIndex:"userName"},{type:"table",title:"\u90E8\u95E8",dataIndex:"deptName"},{type:"form",title:"\u5458\u5DE5",dataIndex:"userId",valueType:"select",fieldProps:function(o,i){return{options:[{label:"\u5458\u5DE51",value:"user1",userCode:"c01",deptName:"\u90E8\u95E8A",deptId:"1"},{label:"\u5458\u5DE52",value:"user2",userCode:"c02",deptName:"\u90E8\u95E8B",deptId:"2"}],onChange:function(l,n){if(l){var c;(c=i.current)===null||c===void 0||c.setData({deptId:n.deptId}),o.setFieldsValue({deptName:n.deptName})}else{var r;(r=i.current)===null||r===void 0||r.setData({deptId:void 0}),o.setFieldsValue({deptName:void 0})}}}}},{type:"form",name:["userId"],valueType:"dependency",columns:function(o){var i=o.userId;return i?[{title:"\u90E8\u95E8",dataIndex:"deptName",fieldProps:function(l,n){var c;return{disabled:((c=n.current)===null||c===void 0?void 0:c.data.deptId)==="1"}}}]:[]}},{title:"\u64CD\u4F5C",valueType:"option",render:function(o,i,R,l,n){return[(0,m.jsx)(d.Qj,{onClick:function(){var r,x;(r=n.current)===null||r===void 0||r.setData({deptId:i.deptId}),(x=n.current)===null||x===void 0||x.openModal("edit",i)},children:"\u7F16\u8F91"},1),(0,m.jsx)(d.Qj,{onClick:function(){var r;(r=n.current)===null||r===void 0||r.openModal("read",i)},children:"\u67E5\u770B"},2)]}}]};function p(){var I=(0,g.useRef)();return(0,m.jsx)(d.QV,{innerRef:I,search:!1,pagination:!1,request:function(){return Promise.resolve({data:[{id:1,userId:"user1",userName:"\u5F20\u4E09",deptId:"1",deptName:"\u90E8\u95E8A"},{id:2,userId:"user2",userName:"\u674E\u56DB",deptId:"2",deptName:"\u90E8\u95E8B"}]})},columns:s(),toolbar:{actions:[(0,m.jsx)(d.zx,{type:"primary",onClick:function(){var o;(o=I.current)===null||o===void 0||o.openModal("new")},children:"\u65B0\u589E"},1)]},onFinish:function(o){var i;console.log("onFinish",{values:o,data:(i=I.current)===null||i===void 0?void 0:i.data})}})}},3677:function(E,a,e){e.r(a),e.d(a,{default:function(){return i}});var g=e(12461),d=e(71577),m=e(67294),s=e(15634),p=e(48186),I=e(85893),u=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(n,c,r,x,v){return[(0,I.jsx)(s.Qj,{onClick:function(){var t;return(t=v.current)===null||t===void 0?void 0:t.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},o=function(){var l=(0,m.useRef)(),n=(0,m.useRef)(),c=function(x){return console.log({values:x}),new Promise(function(v){setTimeout(function(){var f;v(!0),g.ZP.success("\u64CD\u4F5C\u6210\u529F"),(f=n.current)===null||f===void 0||f.reload()},1e3)})};return(0,I.jsx)(s.QV,{name:"\u7528\u6237",search:!1,columns:u(),innerRef:l,actionRef:n,request:p.P,onFinish:c,bordered:!0,toolbar:{actions:[(0,I.jsx)(d.Z,{type:"primary",onClick:function(){var x;(x=l.current)===null||x===void 0||x.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:p.R,formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}}})},i=o},43057:function(E,a,e){e.r(a),e.d(a,{default:function(){return x}});var g=e(15009),d=e.n(g),m=e(97857),s=e.n(m),p=e(99289),I=e.n(p),u=e(67294),o=e(15634),i=function(){return new Promise(function(f){setTimeout(function(){return f({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},R=function(f){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",f),new Promise(function(t){setTimeout(function(){t(!0)},500)})},l=function(f){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",f),new Promise(function(t){setTimeout(function(){t(!0)},500)})},n=e(85893),c=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(t,h,T,y,C){return[(0,n.jsx)(o.Qj,{onClick:function(){var F;return(F=C.current)===null||F===void 0?void 0:F.openModal("edit",h)},children:"\u7F16\u8F91"},1)]}}]},r=function(){var f=(0,u.useRef)(),t=(0,u.useRef)();return(0,n.jsx)("div",{children:(0,n.jsx)(o.QV,{name:"\u7528\u6237",columns:c(),innerRef:f,actionRef:t,request:i,bordered:!0,search:!1,onFinish:function(){var h=I()(d()().mark(function T(y,C,P){return d()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(C!=="new"){j.next=3;break}return j.next=3,R(y);case 3:if(C!=="edit"){j.next=6;break}return j.next=6,l(s()(s()({},y),{},{id:P.id}));case 6:t.current.reload();case 7:case"end":return j.stop()}},T)}));return function(T,y,C){return h.apply(this,arguments)}}()})})},x=r},53604:function(E,a,e){e.r(a),e.d(a,{default:function(){return R}});var g=e(12461),d=e(71577),m=e(67294),s=e(15634),p=function(){return new Promise(function(n){setTimeout(function(){return n({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},I=function(n){return console.log("request detail for id",n),new Promise(function(c){setTimeout(function(){return c(8888)},500)})},u=e(85893),o=function(){return[{title:"\u989D\u5916\u4FE1\u606F",dataIndex:"extra",hideInTable:!0},{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(c,r,x,v,f){return[(0,u.jsx)(s.Qj,{onClick:function(){var h;return(h=f.current)===null||h===void 0?void 0:h.openModal("edit",r)},children:"\u7F16\u8F91"},1)]}}]},i=function(){var n=(0,m.useRef)(),c=(0,m.useRef)(),r=function(v){return console.log({values:v}),new Promise(function(f){setTimeout(function(){var t;f(!0),g.ZP.success("\u64CD\u4F5C\u6210\u529F"),(t=c.current)===null||t===void 0||t.reload()},1e3)})};return(0,u.jsx)("div",{children:(0,u.jsx)(s.QV,{name:"\u7528\u6237",columns:o(),innerRef:n,actionRef:c,request:p,onFinish:r,bordered:!0,toolbar:{actions:[(0,u.jsx)(d.Z,{type:"primary",onClick:function(){var v;(v=n.current)===null||v===void 0||v.openModal()},children:"\u65B0\u589E"},1)]},search:!1,onOpen:function(v,f,t){if(v==="edit")return I(t.id).then(function(h){var T;(T=f.current)===null||T===void 0||T.setFields([{name:"extra",value:h,touched:!1}])})}})})},R=i},41102:function(E,a,e){e.r(a),e.d(a,{default:function(){return u}});var g=e(67294),d=e(15634),m=e(48186),s=e(85893),p=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u662F\u5426\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:"1"},{label:"\u5426",value:"0"}]}},{valueType:"dependency",type:"form",name:["isMember"],columns:function(R){var l=R.isMember;return l==="1"?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"grade"}]:[]}},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(R,l,n,c,r){return[(0,s.jsx)(d.Qj,{onClick:function(){var v;return(v=r.current)===null||v===void 0?void 0:v.openModal("read",l)},children:"\u67E5\u770B"},1)]}}]},I=function(){var i=(0,g.useRef)(null);return(0,s.jsx)("div",{children:(0,s.jsx)(d.QV,{name:"\u7528\u6237",search:!1,columns:p(),innerRef:i,request:m.P,bordered:!0,formProps:{layout:"horizontal",labelCol:{span:5}}})})},u=I},54486:function(E,a,e){e.r(a),e.d(a,{default:function(){return R}});var g=e(15634),d=e(15009),m=e.n(d),s=e(99289),p=e.n(s),I=function(){var l=p()(m()().mark(function n(){return m()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(x){setTimeout(function(){return x({data:[{id:1,name:"\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u7528\u6237\u540D",phone:15881234567}]})},500)}));case 1:case"end":return r.stop()}},n)}));return function(){return l.apply(this,arguments)}}(),u=e(85893),o=[{title:"\u7528\u6237\u540D",dataIndex:"name",ellipsis:!0,copyable:!0,width:100,render:function(n){return(0,u.jsxs)("div",{children:[(0,u.jsx)("span",{style:{marginRight:"3px"},children:"\u{1F468}"}),n]})}},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0,renderText:function(n){return"+86 "+n}}],i=function(){return(0,u.jsx)(g.QV,{search:!1,pagination:!1,noPadding:!0,columns:o,request:I,bordered:!0})},R=i},26047:function(E,a,e){e.r(a),e.d(a,{default:function(){return I}});var g=e(15634),d=function(o){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",o),new Promise(function(i){setTimeout(function(){o.current===1?i({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):i({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},m=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},s=e(85893),p=function(){return(0,s.jsx)(g.QV,{columns:m(),request:d,pagination:{pageSize:5}})},I=p},66238:function(E,a,e){e.r(a),e.d(a,{FORM_TYPE_MAP:function(){return I},default:function(){return o}});var g=e(15634),d=function(){return new Promise(function(R){setTimeout(function(){return R({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}],success:!0,total:2})},1e3)})},m=function(R){return new Promise(function(l){console.log("delete record",R),setTimeout(function(){return l(!0)},500)})},s=e(85893),p=function(){return[{title:"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber"},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(l,n,c,r,x){return[(0,s.jsx)(g.Qj,{onClick:function(){var f;return(f=x.current)===null||f===void 0?void 0:f.openModal("edit",n)},children:"\u7F16\u8F91"},1)]}}]},I={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},u=function(){return(0,s.jsx)(g.QV,{name:"\u7528\u6237",search:{layout:"horizontal",labelWrap:!0,defaultCollapsed:!1},columns:p(),request:d,bordered:!0})},o=u},45309:function(E,a,e){e.r(a),e.d(a,{default:function(){return v}});var g=e(15009),d=e.n(g),m=e(97857),s=e.n(m),p=e(99289),I=e.n(p),u=e(67294),o=e(15634),i=function(t){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",t),new Promise(function(h){setTimeout(function(){t.current===1?h({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):h({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},R=function(t){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",t),new Promise(function(h){setTimeout(function(){h(!0)},500)})},l=function(t){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",t),new Promise(function(h){setTimeout(function(){h(!0)},500)})},n=e(12461),c=e(85893),r=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(h,T,y,C,P){return[(0,c.jsx)(o.Qj,{onClick:function(){var j;console.log("editclick",P),(j=P.current)===null||j===void 0||j.openModal("edit",T)},children:"\u7F16\u8F91"},1)]}}]},x=function(){var t=(0,u.useRef)(null),h=(0,u.useRef)(null);return(0,c.jsx)(o.QV,{columns:r(),request:i,pagination:{pageSize:5},innerRef:t,toolbar:{actions:[(0,c.jsx)(o.zx,{type:"primary",onClick:function(){var y;return(y=t.current)===null||y===void 0?void 0:y.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var T=I()(d()().mark(function y(C,P,F){var j,M;return d()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(P!=="new"){S.next=5;break}return S.next=3,R(C);case 3:n.ZP.success("\u65B0\u5EFA\u6210\u529F"),(j=h.current)===null||j===void 0||j.reload();case 5:if(P!=="edit"){S.next=10;break}return S.next=8,l(s()(s()({},C),{},{id:F.id}));case 8:n.ZP.success("\u66F4\u65B0\u6210\u529F"),(M=h.current)===null||M===void 0||M.reload();case 10:case"end":return S.stop()}},y)}));return function(y,C,P){return T.apply(this,arguments)}}()})},v=x},77428:function(E,a,e){e.r(a),e.d(a,{default:function(){return I}});var g=e(15634),d=function(o){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",o),new Promise(function(i){setTimeout(function(){i({data:[{id:1,date:1692861082010,dateTime:1692861082010,dateRange:[16908192e5,1692861082010],money:1234,userId:1}],success:!0,total:1})},500)})},m=function(){return[{title:"date",dataIndex:"date",valueType:"date"},{title:"dateTime",dataIndex:"dateTime",valueType:"dateTime"},{title:"dateRange",dataIndex:"dateRange",valueType:"dateRange"},{title:"\u91D1\u989D",dataIndex:"money",valueType:"money"}]},s=e(85893),p=function(){return(0,s.jsx)(g.QV,{columns:m(),request:d,search:!1,pagination:!1})},I=p},48186:function(E,a,e){e.d(a,{P:function(){return g},R:function(){return d}});var g=function(){return new Promise(function(s){setTimeout(function(){return s({data:[{id:1,name:"Jack",phone:133,isMember:"1",grade:"\u4E00\u7EA7"},{id:2,name:"Tom",phone:155,isMember:"0"}],success:!0,total:2})},1e3)})},d=function(s){return new Promise(function(p){console.log("delete record",s),setTimeout(function(){return p(!0)},500)})}},70113:function(E,a,e){e.d(a,{P:function(){return m}});var g=e(15634),d=e(85893),m=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(I,u,o,i,R){return[(0,d.jsx)(g.Qj,{onClick:function(){var n;return(n=R.current)===null||n===void 0?void 0:n.openModal("edit",u)},children:"\u7F16\u8F91"},1)]}}]}}}]);
