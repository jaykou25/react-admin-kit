"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[843],{56880:function(b,u,e){e.r(u),e.d(u,{FORM_TYPE_MAP:function(){return l}});var I=e(14726),m=e(68872),o=e(67294),p=e(15634),g=e(48186),R=e(70113),i=e(85893),l={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},v=function(){var d=(0,o.useRef)(),t=(0,o.useRef)();return(0,i.jsx)("div",{children:(0,i.jsx)(p.QV,{name:"\u7528\u6237",columns:(0,R.P)(),request:g.P,bordered:!0,innerRef:d,actionRef:t,toolbar:{actions:[(0,i.jsx)(I.ZP,{type:"primary",onClick:function(){var a;(a=d.current)===null||a===void 0||a.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:g.R,onFinish:function(a,x){return console.log({values:a}),new Promise(function(s){setTimeout(function(){var f;s(!0),m.ZP.success(l[x]+"\u6210\u529F"),(f=t.current)===null||f===void 0||f.reload()},1e3)})}})})};u.default=v},63783:function(b,u,e){e.r(u),e.d(u,{FORM_TYPE_MAP:function(){return i},default:function(){return v}});var I=e(68872),m=e(67294),o=e(15634),p=e(48186),g=e(85893),R=function(){return[{type:"search",title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"search1",valueType:"dateRange",transform:function(t){return{range:t.join(",")}}},{type:"search",title:"\u641C\u7D22\u4E8C",dataIndex:"search2"},{type:"search",title:"\u641C\u7D22\u4E09",dataIndex:"search3",search:!1,hideInSearch:!0},{title:"\u7528\u6237\u540D",dataIndex:"username"},{type:"form",title:"\u5BC6\u7801",dataIndex:"password",required:!0},{type:"table",title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",valueType:"date"},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(t,c,a,x,s){return[(0,g.jsx)(o.Qj,{onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},i={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},l=function(){var d=(0,m.useRef)(),t=(0,m.useRef)();return(0,g.jsx)(o.QV,{name:"\u7528\u6237",defaultHideInSearch:!0,columns:R(),request:function(a){return console.log("\u8BF7\u6C42\u53C2\u6570",a),Promise.resolve({data:[{id:1,username:"\u7528\u62371",passwor:"123456",createTime:1695655397070}]})},bordered:!0,innerRef:d,actionRef:t,toolbar:{actions:[(0,g.jsx)(o.zx,{type:"primary",onClick:function(){var a;(a=d.current)===null||a===void 0||a.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:p.R,onFinish:function(a,x){return console.log({values:a}),new Promise(function(s){setTimeout(function(){var f;s(!0),I.ZP.success(i[x]+"\u6210\u529F"),(f=t.current)===null||f===void 0||f.reload()},1e3)})}})},v=l},16286:function(b,u,e){e.r(u),e.d(u,{default:function(){return c}});var I=e(97857),m=e.n(I),o=e(5574),p=e.n(o),g=e(14726),R=e(12902),i=e(67294),l=e(15634),v=e(86738),C=e(85893),d=function(x){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u51FA\u751F\u65E5\u671F",dataIndex:"birthday",valueType:"date"},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(f,r,h,T,E){return[(0,C.jsx)(l.Qj,{onClick:function(){var P;return(P=E.current)===null||P===void 0?void 0:P.openModal("edit",r)},children:"\u7F16\u8F91"},1),(0,C.jsx)(v.Z,{title:"\u786E\u8BA4\u5220\u9664\u5417?",onConfirm:function(){return x(r.id)},children:(0,C.jsx)(l.Qj,{danger:!0,children:"\u5220\u9664"})},2)]}}]},t=function(){var x=(0,i.useRef)(),s=(0,i.useState)([{id:1,name:"\u738B\u5148\u751F",phone:"1596668888",sex:"\u7537"}]),f=p()(s,2),r=f[0],h=f[1],T=function(P,O,$){if(O==="new"&&h(r.concat(m()(m()({},P),{},{id:Date.now()}))),O==="edit"){var D=(0,R.ZP)(r,function(z){var N=z.findIndex(function(A){return A.id===$.id});z[N]=m()(m()({},$),P)});h(D)}},E=function(P){h(r.filter(function(O){return O.id!==P}))};return(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{style:{textAlign:"right",marginBottom:"10px"},children:(0,C.jsx)(g.ZP,{type:"primary",onClick:function(){x.current.openModal()},children:"\u65B0\u589E\u7528\u6237"})}),(0,C.jsx)(l.QV,{columns:d(E),dataSource:r,innerRef:x,onFinish:T,bordered:!0,search:!1,pagination:!1,noPadding:!0})]})},c=t},41242:function(b,u,e){e.r(u),e.d(u,{FORM_TYPE_MAP:function(){return i},default:function(){return v}});var I=e(68872),m=e(67294),o=e(15634),p=function(){return new Promise(function(d){setTimeout(function(){return d({data:[{id:"1",name:"tom",deptId:"3",deptName:"\u9500\u552E\u90E8",isMember:1,gradeId:"2",gradeName:"B"}]})},1e3)})},g=e(85893),R=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name"},{title:"\u90E8\u95E8",dataIndex:"deptId,deptName",valueType:"treeSelect",width:"sm",fieldProps:{placeholder:"\u8BF7\u9009\u62E9",labelInValue:!0,options:[{value:"1",label:"A\u516C\u53F8",children:[{value:"2",label:"\u6280\u672F\u90E8"},{value:"3",label:"\u9500\u552E\u90E8"}]}]},renderText:function(t,c){return c.deptName}},{title:"\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u5426",value:0},{label:"\u662F",value:1}]}},{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeName",type:"table"},{type:"form",valueType:"dependency",name:["isMember"],columns:function(t){var c=t.isMember;return c?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"gradeId,gradeName",valueType:"select",fieldProps:{labelInValue:!0,options:[{value:"1",label:"A"},{value:"2",label:"B"}]}}]:[]}},{valueType:"option",title:"\u64CD\u4F5C",render:function(t,c,a,x,s){return[(0,g.jsx)(o.Qj,{onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},i={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},l=function(){var d=(0,m.useRef)(),t=(0,m.useRef)(),c=function(x,s,f){return console.log({values:x,type:s,formData:f}),new Promise(function(r){setTimeout(function(){var h;r(!0),I.ZP.success(i[s]+"\u6210\u529F"),(h=t.current)===null||h===void 0||h.reload()},1e3)})};return(0,g.jsx)("div",{children:(0,g.jsx)(o.QV,{name:"\u7528\u6237",columns:R(),innerRef:d,actionRef:t,request:p,onFinish:c,bordered:!0,search:!1,pagination:!1,formProps:{layout:"horizontal",labelCol:{span:4}}})})},v=l},3381:function(b,u,e){e.r(u),e.d(u,{default:function(){return c}});var I=e(15009),m=e.n(I),o=e(99289),p=e.n(o),g=e(67294),R=e(15634),i=function(x){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",x),new Promise(function(s){setTimeout(function(){x.current===1?s({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):s({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},l=function(x){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",x),new Promise(function(s){setTimeout(function(){s(!0)},500)})},v=e(68872),C=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},d=e(85893),t=function(){var x=(0,g.useRef)(),s=(0,g.useRef)();return(0,d.jsx)(R.QV,{columns:C(),request:i,pagination:{pageSize:5},innerRef:x,toolbar:{actions:[(0,d.jsx)(R.zx,{type:"primary",onClick:function(){var r;return(r=x.current)===null||r===void 0?void 0:r.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var f=p()(m()().mark(function r(h,T){var E;return m()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(T!=="new"){P.next=5;break}return P.next=3,l(h);case 3:v.ZP.success("\u65B0\u5EFA\u6210\u529F"),(E=s.current)===null||E===void 0||E.reload();case 5:case"end":return P.stop()}},r)}));return function(r,h){return f.apply(this,arguments)}}()})},c=t},5858:function(b,u,e){e.r(u),e.d(u,{default:function(){return f}});var I=e(15009),m=e.n(I),o=e(97857),p=e.n(o),g=e(99289),R=e.n(g),i=e(67294),l=e(15634),v=function(h){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){h.current===1?T({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):T({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},C=function(h){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},d=function(h){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},t=function(h){return console.log("\u5220\u9664\u7528\u6237\u53C2\u6570:",h),new Promise(function(T){setTimeout(function(){T(!0)},500)})},c=e(68872),a=e(85893),x=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:function(){return{danger:!0,btnText:"\u5173\u95ED"}},render:function(T,E,F,P,O){return[(0,a.jsx)(l.Qj,{onClick:function(){var D;console.log("editclick",O),(D=O.current)===null||D===void 0||D.openModal("edit",E)},children:"\u7F16\u8F91"},1)]}}]},s=function(){var h=(0,i.useRef)(null),T=(0,i.useRef)(null);return(0,a.jsx)(l.QV,{actionRef:T,confirmModelType:"modal",confirmModalProps:{title:"\u786E\u5B9A\u5173\u95ED\u5417?"},columns:x(),request:v,pagination:{pageSize:5},innerRef:h,toolbar:{actions:[(0,a.jsx)(l.zx,{type:"primary",onClick:function(){var F;return(F=h.current)===null||F===void 0?void 0:F.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var E=R()(m()().mark(function F(P,O,$){var D,z;return m()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(O!=="new"){A.next=5;break}return A.next=3,C(P);case 3:c.ZP.success("\u65B0\u5EFA\u6210\u529F!"),(D=T.current)===null||D===void 0||D.reload();case 5:if(O!=="edit"){A.next=10;break}return A.next=8,d(p()(p()({},P),{},{id:$.id}));case 8:c.ZP.success("\u66F4\u65B0\u6210\u529F!"),(z=T.current)===null||z===void 0||z.reload();case 10:case"end":return A.stop()}},F)}));return function(F,P,O){return E.apply(this,arguments)}}(),delFunction:t,rowSelection:{},tableAlertOption:{deleteProps:{btnText:"\u6279\u91CF\u5173\u95ED",title:function(F){return"\u786E\u5B9A\u5173\u95ED".concat(F,"\u6761\u6570\u636E\u5417?")}}}})},f=s},61716:function(b,u,e){e.r(u),e.d(u,{default:function(){return ve}});var I=e(15634),m=function(){return new Promise(function(j){setTimeout(function(){return j({data:[{id:1,name:"Jack",birthday:1667375314278,sex:"man",type:"1",range:[1667375314278,1667375314278],status:"1",createTime:1667375314278}]})},1e3)})},o=e(67294),p=e(13144),g=e.n(p),R=e(10366),i=e(98787),l=e(69760),v=e(96159),C=e(45353),d=e(53124),t=e(88422),c=e(10274),a=e(14747),x=e(45503),s=e(52395);const f=n=>{const{paddingXXS:j,lineWidth:M,tagPaddingHorizontal:y,componentCls:S,calc:V}=n,B=V(y).sub(M).equal(),J=V(j).sub(M).equal();return{[S]:Object.assign(Object.assign({},(0,a.Wf)(n)),{display:"inline-block",height:"auto",marginInlineEnd:n.marginXS,paddingInline:B,fontSize:n.tagFontSize,lineHeight:n.tagLineHeight,whiteSpace:"nowrap",background:n.defaultBg,border:`${(0,t.bf)(n.lineWidth)} ${n.lineType} ${n.colorBorder}`,borderRadius:n.borderRadiusSM,opacity:1,transition:`all ${n.motionDurationMid}`,textAlign:"start",position:"relative",[`&${S}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:n.defaultColor},[`${S}-close-icon`]:{marginInlineStart:J,fontSize:n.tagIconSize,color:n.colorTextDescription,cursor:"pointer",transition:`all ${n.motionDurationMid}`,"&:hover":{color:n.colorTextHeading}},[`&${S}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${n.iconCls}-close, ${n.iconCls}-close:hover`]:{color:n.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${S}-checkable-checked):hover`]:{color:n.colorPrimary,backgroundColor:n.colorFillSecondary},"&:active, &-checked":{color:n.colorTextLightSolid},"&-checked":{backgroundColor:n.colorPrimary,"&:hover":{backgroundColor:n.colorPrimaryHover}},"&:active":{backgroundColor:n.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${n.iconCls} + span, > span + ${n.iconCls}`]:{marginInlineStart:B}}),[`${S}-borderless`]:{borderColor:"transparent",background:n.tagBorderlessBg}}},r=n=>{const{lineWidth:j,fontSizeIcon:M,calc:y}=n,S=n.fontSizeSM;return(0,x.TS)(n,{tagFontSize:S,tagLineHeight:(0,t.bf)(y(n.lineHeightSM).mul(S).equal()),tagIconSize:y(M).sub(y(j).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:n.defaultBg})},h=n=>({defaultBg:new c.C(n.colorFillQuaternary).onBackground(n.colorBgContainer).toHexString(),defaultColor:n.colorText});var T=(0,s.I$)("Tag",n=>{const j=r(n);return f(j)},h),E=function(n,j){var M={};for(var y in n)Object.prototype.hasOwnProperty.call(n,y)&&j.indexOf(y)<0&&(M[y]=n[y]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,y=Object.getOwnPropertySymbols(n);S<y.length;S++)j.indexOf(y[S])<0&&Object.prototype.propertyIsEnumerable.call(n,y[S])&&(M[y[S]]=n[y[S]]);return M},P=o.forwardRef((n,j)=>{const{prefixCls:M,style:y,className:S,checked:V,onChange:B,onClick:J}=n,Z=E(n,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:G,tag:U}=o.useContext(d.E_),K=X=>{B==null||B(!V),J==null||J(X)},L=G("tag",M),[w,q,k]=T(L),_=g()(L,`${L}-checkable`,{[`${L}-checkable-checked`]:V},U==null?void 0:U.className,S,q,k);return w(o.createElement("span",Object.assign({},Z,{ref:j,style:Object.assign(Object.assign({},y),U==null?void 0:U.style),className:_,onClick:K})))}),O=e(98719);const $=n=>(0,O.Z)(n,(j,M)=>{let{textColor:y,lightBorderColor:S,lightColor:V,darkColor:B}=M;return{[`${n.componentCls}${n.componentCls}-${j}`]:{color:y,background:V,borderColor:S,"&-inverse":{color:n.colorTextLightSolid,background:B,borderColor:B},[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}});var D=(0,s.bk)(["Tag","preset"],n=>{const j=r(n);return $(j)},h);function z(n){return typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1)}const N=(n,j,M)=>{const y=z(M);return{[`${n.componentCls}${n.componentCls}-${j}`]:{color:n[`color${M}`],background:n[`color${y}Bg`],borderColor:n[`color${y}Border`],[`&${n.componentCls}-borderless`]:{borderColor:"transparent"}}}};var A=(0,s.bk)(["Tag","status"],n=>{const j=r(n);return[N(j,"success","Success"),N(j,"processing","Info"),N(j,"error","Error"),N(j,"warning","Warning")]},h),ce=function(n,j){var M={};for(var y in n)Object.prototype.hasOwnProperty.call(n,y)&&j.indexOf(y)<0&&(M[y]=n[y]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,y=Object.getOwnPropertySymbols(n);S<y.length;S++)j.indexOf(y[S])<0&&Object.prototype.propertyIsEnumerable.call(n,y[S])&&(M[y[S]]=n[y[S]]);return M};const se=(n,j)=>{const{prefixCls:M,className:y,rootClassName:S,style:V,children:B,icon:J,color:Z,onClose:G,bordered:U=!0,visible:K}=n,L=ce(n,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:w,direction:q,tag:k}=o.useContext(d.E_),[_,X]=o.useState(!0),he=(0,R.Z)(L,["closeIcon","closable"]);o.useEffect(()=>{K!==void 0&&X(K)},[K]);const oe=(0,i.o2)(Z),ae=(0,i.yT)(Z),ee=oe||ae,xe=Object.assign(Object.assign({backgroundColor:Z&&!ee?Z:void 0},k==null?void 0:k.style),V),Q=w("tag",M),[pe,ge,Ce]=T(Q),Re=g()(Q,k==null?void 0:k.className,{[`${Q}-${Z}`]:ee,[`${Q}-has-color`]:Z&&!ee,[`${Q}-hidden`]:!_,[`${Q}-rtl`]:q==="rtl",[`${Q}-borderless`]:!U},y,S,ge,Ce),ue=H=>{H.stopPropagation(),G==null||G(H),!H.defaultPrevented&&X(!1)},[,Ie]=(0,l.Z)((0,l.w)(n),(0,l.w)(k),{closable:!1,closeIconRender:H=>{const Pe=o.createElement("span",{className:`${Q}-close-icon`,onClick:ue},H);return(0,v.wm)(H,Pe,W=>({onClick:de=>{var ne;(ne=W==null?void 0:W.onClick)===null||ne===void 0||ne.call(W,de),ue(de)},className:g()(W==null?void 0:W.className,`${Q}-close-icon`)}))}}),ye=typeof L.onClick=="function"||B&&B.type==="a",ie=J||null,Te=ie?o.createElement(o.Fragment,null,ie,B&&o.createElement("span",null,B)):B,le=o.createElement("span",Object.assign({},he,{ref:j,className:Re,style:xe}),Te,Ie,oe&&o.createElement(D,{key:"preset",prefixCls:Q}),ae&&o.createElement(A,{key:"status",prefixCls:Q}));return pe(ye?o.createElement(C.Z,{component:"Tag"},le):le)},te=o.forwardRef(se);te.CheckableTag=P;var re=te,Y=e(85893),fe=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",width:80},{title:"\u751F\u65E5",dataIndex:"birthday",valueType:"date",width:110},{title:"\u6027\u522B",dataIndex:"sex",valueType:"select",valueEnum:{man:{text:"\u7537"},woman:{text:"\u5973"}},width:80},{title:"\u7C7B\u578B",dataIndex:"type",valueType:"select",fieldProps:{options:[{label:"\u4F1A\u5458",value:"1"},{label:"\u975E\u4F1A\u5458",value:"2"}]},width:80},{title:"\u4F1A\u5458\u8303\u56F4",dataIndex:"range",valueType:"dateRange",width:130},{title:"\u72B6\u6001",dataIndex:"status",render:function(M){return M?(0,Y.jsx)(re,{color:"success",children:"\u5F00\u542F"}):(0,Y.jsx)(re,{children:"\u672A\u5F00\u542F"})},renderExport:function(M){return M?"\u5F00\u542F":"\u672A\u5F00\u542F"},width:80},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"createTime",valueType:"dateTime",width:100}]},me=function(){return(0,Y.jsx)("div",{children:(0,Y.jsx)(I.QV,{noPadding:!0,name:"\u7528\u6237",search:!1,columns:fe(),request:m,bordered:!0,rowSelection:{},tableAlertOption:{enableExport:!0}})})},ve=me},26906:function(b,u,e){e.r(u),e.d(u,{default:function(){return g}});var I=e(67294),m=e(15634),o=e(85893),p=function(){return[{title:"\u5E8F\u53F7",valueType:"index"},{type:"table",title:"\u5458\u5DE5",dataIndex:"userName"},{type:"table",title:"\u90E8\u95E8",dataIndex:"deptName"},{type:"form",title:"\u5458\u5DE5",dataIndex:"userId",valueType:"select",fieldProps:function(l,v){return{options:[{label:"\u5458\u5DE51",value:"user1",userCode:"c01",deptName:"\u90E8\u95E8A",deptId:"1"},{label:"\u5458\u5DE52",value:"user2",userCode:"c02",deptName:"\u90E8\u95E8B",deptId:"2"}],onChange:function(d,t){if(d){var c;(c=v.current)===null||c===void 0||c.setData({deptId:t.deptId}),l.setFieldsValue({deptName:t.deptName})}else{var a;(a=v.current)===null||a===void 0||a.setData({deptId:void 0}),l.setFieldsValue({deptName:void 0})}}}}},{type:"form",name:["userId"],valueType:"dependency",columns:function(l){var v=l.userId;return v?[{title:"\u90E8\u95E8",dataIndex:"deptName",fieldProps:function(d,t){var c;return{disabled:((c=t.current)===null||c===void 0?void 0:c.data.deptId)==="1"}}}]:[]}},{title:"\u64CD\u4F5C",valueType:"option",render:function(l,v,C,d,t){return[(0,o.jsx)(m.Qj,{onClick:function(){var a,x;(a=t.current)===null||a===void 0||a.setData({deptId:v.deptId}),(x=t.current)===null||x===void 0||x.openModal("edit",v)},children:"\u7F16\u8F91"},1),(0,o.jsx)(m.Qj,{onClick:function(){var a;(a=t.current)===null||a===void 0||a.openModal("read",v)},children:"\u67E5\u770B"},2)]}}]};function g(){var R=(0,I.useRef)();return(0,o.jsx)(m.QV,{innerRef:R,search:!1,pagination:!1,request:function(){return Promise.resolve({data:[{id:1,userId:"user1",userName:"\u5F20\u4E09",deptId:"1",deptName:"\u90E8\u95E8A"},{id:2,userId:"user2",userName:"\u674E\u56DB",deptId:"2",deptName:"\u90E8\u95E8B"}]})},columns:p(),toolbar:{actions:[(0,o.jsx)(m.zx,{type:"primary",onClick:function(){var l;(l=R.current)===null||l===void 0||l.openModal("new")},children:"\u65B0\u589E"},1)]},onFinish:function(l){var v;console.log("onFinish",{values:l,data:(v=R.current)===null||v===void 0?void 0:v.data})}})}},3677:function(b,u,e){e.r(u),e.d(u,{default:function(){return v}});var I=e(68872),m=e(14726),o=e(67294),p=e(15634),g=e(48186),R=e(85893),i=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(t,c,a,x,s){return[(0,R.jsx)(p.Qj,{onClick:function(){var r;return(r=s.current)===null||r===void 0?void 0:r.openModal("edit",c)},children:"\u7F16\u8F91"},1)]}}]},l=function(){var d=(0,o.useRef)(),t=(0,o.useRef)(),c=function(x){return console.log({values:x}),new Promise(function(s){setTimeout(function(){var f;s(!0),I.ZP.success("\u64CD\u4F5C\u6210\u529F"),(f=t.current)===null||f===void 0||f.reload()},1e3)})};return(0,R.jsx)(p.QV,{name:"\u7528\u6237",search:!1,columns:i(),innerRef:d,actionRef:t,request:g.P,onFinish:c,bordered:!0,toolbar:{actions:[(0,R.jsx)(m.ZP,{type:"primary",onClick:function(){var x;(x=d.current)===null||x===void 0||x.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:g.R,formProps:{grid:!0,rowProps:{gutter:[24,0]},colProps:{span:12}}})},v=l},43057:function(b,u,e){e.r(u),e.d(u,{default:function(){return x}});var I=e(15009),m=e.n(I),o=e(97857),p=e.n(o),g=e(99289),R=e.n(g),i=e(67294),l=e(15634),v=function(){return new Promise(function(f){setTimeout(function(){return f({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},C=function(f){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",f),new Promise(function(r){setTimeout(function(){r(!0)},500)})},d=function(f){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",f),new Promise(function(r){setTimeout(function(){r(!0)},500)})},t=e(85893),c=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(r,h,T,E,F){return[(0,t.jsx)(l.Qj,{onClick:function(){var O;return(O=F.current)===null||O===void 0?void 0:O.openModal("edit",h)},children:"\u7F16\u8F91"},1)]}}]},a=function(){var f=(0,i.useRef)(),r=(0,i.useRef)();return(0,t.jsx)("div",{children:(0,t.jsx)(l.QV,{name:"\u7528\u6237",columns:c(),innerRef:f,actionRef:r,request:v,bordered:!0,search:!1,onFinish:function(){var h=R()(m()().mark(function T(E,F,P){return m()().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(F!=="new"){$.next=3;break}return $.next=3,C(E);case 3:if(F!=="edit"){$.next=6;break}return $.next=6,d(p()(p()({},E),{},{id:P.id}));case 6:r.current.reload();case 7:case"end":return $.stop()}},T)}));return function(T,E,F){return h.apply(this,arguments)}}()})})},x=a},53604:function(b,u,e){e.r(u),e.d(u,{default:function(){return C}});var I=e(68872),m=e(14726),o=e(67294),p=e(15634),g=function(){return new Promise(function(t){setTimeout(function(){return t({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}]})},1e3)})},R=function(t){return console.log("request detail for id",t),new Promise(function(c){setTimeout(function(){return c(8888)},500)})},i=e(85893),l=function(){return[{title:"\u989D\u5916\u4FE1\u606F",dataIndex:"extra",hideInTable:!0},{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(c,a,x,s,f){return[(0,i.jsx)(p.Qj,{onClick:function(){var h;return(h=f.current)===null||h===void 0?void 0:h.openModal("edit",a)},children:"\u7F16\u8F91"},1)]}}]},v=function(){var t=(0,o.useRef)(),c=(0,o.useRef)(),a=function(s){return console.log({values:s}),new Promise(function(f){setTimeout(function(){var r;f(!0),I.ZP.success("\u64CD\u4F5C\u6210\u529F"),(r=c.current)===null||r===void 0||r.reload()},1e3)})};return(0,i.jsx)("div",{children:(0,i.jsx)(p.QV,{name:"\u7528\u6237",columns:l(),innerRef:t,actionRef:c,request:g,onFinish:a,bordered:!0,toolbar:{actions:[(0,i.jsx)(m.ZP,{type:"primary",onClick:function(){var s;(s=t.current)===null||s===void 0||s.openModal()},children:"\u65B0\u589E"},1)]},search:!1,onOpen:function(s,f,r){if(s==="edit")return R(r.id).then(function(h){var T;(T=f.current)===null||T===void 0||T.setFields([{name:"extra",value:h,touched:!1}])})}})})},C=v},41102:function(b,u,e){e.r(u),e.d(u,{default:function(){return i}});var I=e(67294),m=e(15634),o=e(48186),p=e(85893),g=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u662F\u5426\u4F1A\u5458",dataIndex:"isMember",valueType:"radio",fieldProps:{options:[{label:"\u662F",value:"1"},{label:"\u5426",value:"0"}]}},{valueType:"dependency",type:"form",name:["isMember"],columns:function(C){var d=C.isMember;return d==="1"?[{title:"\u4F1A\u5458\u7B49\u7EA7",dataIndex:"grade"}]:[]}},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(C,d,t,c,a){return[(0,p.jsx)(m.Qj,{onClick:function(){var s;return(s=a.current)===null||s===void 0?void 0:s.openModal("read",d)},children:"\u67E5\u770B"},1)]}}]},R=function(){var v=(0,I.useRef)(null);return(0,p.jsx)("div",{children:(0,p.jsx)(m.QV,{name:"\u7528\u6237",search:!1,columns:g(),innerRef:v,request:o.P,bordered:!0,formProps:{layout:"horizontal",labelCol:{span:5}}})})},i=R},54486:function(b,u,e){e.r(u),e.d(u,{default:function(){return C}});var I=e(15634),m=e(15009),o=e.n(m),p=e(99289),g=e.n(p),R=function(){var d=g()(o()().mark(function t(){return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(x){setTimeout(function(){return x({data:[{id:1,name:"\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u7684\u7528\u6237\u540D",phone:15881234567}]})},500)}));case 1:case"end":return a.stop()}},t)}));return function(){return d.apply(this,arguments)}}(),i=e(85893),l=[{title:"\u7528\u6237\u540D",dataIndex:"name",ellipsis:!0,copyable:!0,width:100,render:function(t){return(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{style:{marginRight:"3px"},children:"\u{1F468}"}),t]})}},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0,renderText:function(t){return"+86 "+t}}],v=function(){return(0,i.jsx)(I.QV,{search:!1,pagination:!1,noPadding:!0,columns:l,request:R,bordered:!0})},C=v},26047:function(b,u,e){e.r(u),e.d(u,{default:function(){return R}});var I=e(15634),m=function(l){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",l),new Promise(function(v){setTimeout(function(){l.current===1?v({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):v({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0}]},p=e(85893),g=function(){return(0,p.jsx)(I.QV,{columns:o(),request:m,pagination:{pageSize:5}})},R=g},66238:function(b,u,e){e.r(u),e.d(u,{FORM_TYPE_MAP:function(){return R},default:function(){return l}});var I=e(15634),m=function(){return new Promise(function(C){setTimeout(function(){return C({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155}],success:!0,total:2})},1e3)})},o=function(C){return new Promise(function(d){console.log("delete record",C),setTimeout(function(){return d(!0)},500)})},p=e(85893),g=function(){return[{title:"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",hideInSearch:!0,valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(d,t,c,a,x){return[(0,p.jsx)(I.Qj,{onClick:function(){var f;return(f=x.current)===null||f===void 0?void 0:f.openModal("edit",t)},children:"\u7F16\u8F91"},1)]}}]},R={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},i=function(){return(0,p.jsx)(I.QV,{name:"\u7528\u6237",search:{layout:"horizontal",labelWrap:!0,defaultCollapsed:!1,span:12},columns:g(),request:m,bordered:!0})},l=i},45309:function(b,u,e){e.r(u),e.d(u,{default:function(){return s}});var I=e(15009),m=e.n(I),o=e(97857),p=e.n(o),g=e(99289),R=e.n(g),i=e(67294),l=e(15634),v=function(r){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",r),new Promise(function(h){setTimeout(function(){r.current===1?h({data:[{id:1,name:"Jack",phone:133},{id:2,name:"Tom",phone:155},{id:3,name:"Jeff",phone:133},{id:4,name:"Janni",phone:155},{id:5,name:"Tim",phone:155}],success:!0,total:6}):h({data:[{id:6,name:"Steve",phone:133}],success:!0,total:6})},1e3)})},C=function(r){return console.log("\u521B\u5EFA\u7528\u6237\u53C2\u6570:",r),new Promise(function(h){setTimeout(function(){h(!0)},500)})},d=function(r){return console.log("\u66F4\u65B0\u7528\u6237\u53C2\u6570:",r),new Promise(function(h){setTimeout(function(){h(!0)},500)})},t=e(68872),c=e(85893),a=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",formItemProps:{rules:[{required:!0,message:"\u7528\u6237\u540D\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",formItemProps:{},valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(h,T,E,F,P){return[(0,c.jsx)(l.Qj,{onClick:function(){var $;console.log("editclick",P),($=P.current)===null||$===void 0||$.openModal("edit",T)},children:"\u7F16\u8F91"},1)]}}]},x=function(){var r=(0,i.useRef)(null),h=(0,i.useRef)(null);return(0,c.jsx)(l.QV,{columns:a(),request:v,pagination:{pageSize:5},innerRef:r,toolbar:{actions:[(0,c.jsx)(l.zx,{type:"primary",onClick:function(){var E;return(E=r.current)===null||E===void 0?void 0:E.openModal()},children:"\u65B0\u589E"},1)]},onFinish:function(){var T=R()(m()().mark(function E(F,P,O){var $,D;return m()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(P!=="new"){N.next=5;break}return N.next=3,C(F);case 3:t.ZP.success("\u65B0\u5EFA\u6210\u529F"),($=h.current)===null||$===void 0||$.reload();case 5:if(P!=="edit"){N.next=10;break}return N.next=8,d(p()(p()({},F),{},{id:O.id}));case 8:t.ZP.success("\u66F4\u65B0\u6210\u529F"),(D=h.current)===null||D===void 0||D.reload();case 10:case"end":return N.stop()}},E)}));return function(E,F,P){return T.apply(this,arguments)}}()})},s=x},77428:function(b,u,e){e.r(u),e.d(u,{default:function(){return R}});var I=e(15634),m=function(l){return console.log("\u8BF7\u6C42\u6570\u636E\u53C2\u6570:",l),new Promise(function(v){setTimeout(function(){v({data:[{id:1,date:1692861082010,dateTime:1692861082010,dateRange:[16908192e5,1692861082010],money:1234,userId:1}],success:!0,total:1})},500)})},o=function(){return[{title:"date",dataIndex:"date",valueType:"date"},{title:"dateTime",dataIndex:"dateTime",valueType:"dateTime"},{title:"dateRange",dataIndex:"dateRange",valueType:"dateRange"},{title:"\u91D1\u989D",dataIndex:"money",valueType:"money"}]},p=e(85893),g=function(){return(0,p.jsx)(I.QV,{columns:o(),request:m,search:!1,pagination:!1})},R=g},48186:function(b,u,e){e.d(u,{P:function(){return I},R:function(){return m}});var I=function(){return new Promise(function(p){setTimeout(function(){return p({data:[{id:1,name:"Jack",phone:133,isMember:"1",grade:"\u4E00\u7EA7"},{id:2,name:"Tom",phone:155,isMember:"0"}],success:!0,total:2})},1e3)})},m=function(p){return new Promise(function(g){console.log("delete record",p),setTimeout(function(){return g(!0)},500)})}},70113:function(b,u,e){e.d(u,{P:function(){return o}});var I=e(15634),m=e(85893),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(R,i,l,v,C){return[(0,m.jsx)(I.Qj,{onClick:function(){var t;return(t=C.current)===null||t===void 0?void 0:t.openModal("edit",i)},children:"\u7F16\u8F91"},1)]}}]}}}]);