"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[942],{38942:function(Qn,ot,v){v.d(ot,{$f:function(){return Tn},t4:function(){return Ln},zx:function(){return Ge},mL:function(){return kn},Qj:function(){return ue},Yr:function(){return Ye},A9:function(){return Rt},QV:function(){return cn},LH:function(){return ke},oh:function(){return Wn},Mh:function(){return Rn},Mb:function(){return jn}});var it=v(5574),ne=v.n(it),lt=v(15009),ae=v.n(lt),st=v(99289),Pe=v.n(st),ut=v(97857),u=v.n(ut),dt=v(13769),E=v.n(dt),ft=v(97269),R=v(67294),ct=v(9783),h=v.n(ct),pt=v(52677),ce=v.n(pt);function xe(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n={};return Object.keys(a).forEach(function(r){var l=a[r];ce()(l)==="object"&&!Array.isArray(l)&&(l=xe(l));var e=r.split("_"),t=ne()(e,2),o=t[0],i=t[1],s=o.split(",");if(s.length>1){var d,f,c=ne()(s,2),y=c[0],p=c[1],m=i?i.split(","):[],C=ne()(m,2),$=C[0],F=$===void 0?"value":$,S=C[1],P=S===void 0?"label":S;n[y]=(d=l)===null||d===void 0?void 0:d[F],n[p]=(f=l)===null||f===void 0?void 0:f[P]}else n[r]=l}),n}function vt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=n.split("_"),l=ne()(r,2),e=l[0],t=l[1],o=e.split(",");if(o.length>1){var i,s=ne()(o,2),d=s[0],f=s[1],c=t?t.split(","):[],y=ne()(c,2),p=y[0],m=p===void 0?"value":p,C=y[1],$=C===void 0?"label":C;return i={},h()(i,m,a[d]),h()(i,$,a[f]),i}else return a[n]}function Me(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return a&&(Object.keys(n).forEach(function(r){var l=n[r];ce()(l)==="object"&&Me(a[r],l),a[r]=vt(a,r)}),a)}var mt=v(31757),De=v(12902),ht=v(62199),yt=v(71230),we=R.createContext(void 0),Ee=R.createContext(void 0),Ae=R.createContext(void 0),Ne=R.createContext(void 0),gt=v(25175),Fe=v(22270),St=v(12795),Ct=v(51812),Pt=v(15746),b=v(85893),Ue=function a(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"form",l=arguments.length>2?arguments[2]:void 0,e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},t=e.labelCol,o=t===void 0?{}:t,i=e.valueBaseName,s=e.grid,d=e.colProps,f=d===void 0?{}:d,c=e.readonly,y=c===void 0?!1:c;return n.filter(function(p){return!(p.hideInForm&&r==="form")}).sort(function(p,m){return m.order||p.order?(m.order||0)-(p.order||0):(m.index||0)-(p.index||0)}).map(function(p,m){var C,$=(0,Fe.h)(p.title,p,"form",(0,b.jsx)(St.G,{label:p.title,tooltip:p.tooltip||p.tip})),F=function(D,O){if(O){if(typeof D=="string")return[O,D];if(Array.isArray(D))return[O].concat(D)}return D},S=(0,Ct.Y)(u()(u()({},p),{},{title:$,label:$,valueType:(0,Fe.h)(p.valueType,{}),dataIndex:F(p.key||p.dataIndex,i),readonly:p.readonly||y,tooltip:p.tooltip||p.tip,getFieldProps:p.fieldProps?function(){return(0,Fe.h)(p.fieldProps,l,p)}:void 0,getFormItemProps:p.formItemProps?function(){return(0,Fe.h)(u()({labelCol:o},p.formItemProps),l,p)}:function(){return{labelCol:o}}})),P=S.key||((C=S.dataIndex)===null||C===void 0?void 0:C.toString())||m;S.key=P,S.name=S.name||S.dataIndex;var x=(0,gt.E)(S,{action:void 0,type:"form",originItem:p,formRef:{current:l},genItems:function(D){return a(D,r,l,{labelCol:o,valueBaseName:i,grid:s,colProps:f,readonly:y})}});return s&&x&&S.valueType!=="dependency"?(0,b.jsx)(Pt.Z,u()(u()(u()({},f),S.colProps),{},{children:x}),P):x}).filter(function(p){return!!p})},Ft=["embed","readonly","submitter","columns","valueBaseName","initialValues","onFinish","formRef","innerRef"],pe=function(n,r){var l=r.isInit,e=l===void 0?!1:l,t=r.getFieldsValue,o=r.setFieldsValue,i=r.setInitialValuesInner,s=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,c=t(!0,function(){return!0}),y=Me(n,c);if(e&&f){i(y);return}o(y)};s(),setTimeout(function(){return s(!0)},50)},bt=function(n){var r=n.embed,l=r===void 0?!1:r,e=n.readonly,t=e===void 0?!1:e,o=n.submitter,i=o===void 0?!1:o,s=n.columns,d=s===void 0?[]:s,f=n.valueBaseName,c=n.initialValues,y=n.onFinish,p=n.formRef,m=n.innerRef,C=E()(n,Ft),$=(0,R.createRef)();$.current={data:{},setData:function(){}};var F=function(j){if(m!=null&&m.current){var K=m.current.data;m.current.data=u()(u()({},K),j)}};(0,R.useEffect)(function(){m&&(m.current||(m.current={data:{},setData:F}),m.current.data={},m.current.setData=F)},[]);var S=(0,R.useState)(void 0),P=ne()(S,2),x=P[0],T=P[1];(0,R.useEffect)(function(){if(c&&D.current){var L=D.current,j=L.getFieldsValue,K=L.setFieldsValue;pe(c,{getFieldsValue:j,setFieldsValue:K,setInitialValuesInner:T,isInit:!0})}},[]);var D=(0,R.useRef)(),O=(0,R.useRef)();(0,R.useImperativeHandle)(p,function(){if(!x&&D.current){var L=D.current,j=L.getFieldsValue,K=L.setFieldsValue;return u()(u()({},D.current),{},{setFieldsValue:function(H){return pe(H,{getFieldsValue:j,setFieldsValue:K})}})}if(!O.current)return O.current;var w=O.current,V=w.getFieldsValue,k=w.setFieldsValue;return u()(u()({},O.current),{},{setFieldsValue:function(H){return pe(H,{getFieldsValue:V,setFieldsValue:k})}})},[!x]);var A=(0,R.useContext)(Ae)||{},U=function(){var L=Pe()(ae()().mark(function j(K){return ae()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(!y){V.next=2;break}return V.abrupt("return",y(xe(K)));case 2:case"end":return V.stop()}},j)}));return function(K){return L.apply(this,arguments)}}(),Y=(0,R.useContext)(Ze),M=function L(j){var K=n.innerRef,w=K===void 0?$:K,V=Y||w;return(0,De.Uy)(j,function(k){k.forEach(function(B){var H=B.renderFormItem,le=B.fieldProps,de=B.valueType,ee=B.columns,W=B.formItemProps,Oe=W===void 0?{}:W,Ve=B.required;Ve&&!Oe.rules&&(B.formItemProps=u()(u()({},Oe),{},{rules:[{required:!0}]})),le&&typeof le=="function"&&(B.fieldProps=function(se,Se){return le(se,V,Se)}),H&&(B.renderFormItem=function(se,Se,Le){return H(se,Se,Le,V)}),ee&&Array.isArray(ee)&&(B.columns=L(ee)),de==="dependency"&&ee&&typeof ee=="function"&&(B.columns=function(se){return L(ee(se))})})})},Z=ht.Z.useFormInstance();if(l){var te=n.grid,G=n.rowProps,Q=n.colProps,J=n.labelCol;return te?(0,b.jsx)(yt.Z,u()(u()({},G),{},{children:Ue(M(d),"form",Z,{labelCol:J,valueBaseName:f,colProps:Q,grid:te,readonly:t})})):Ue(M(d),"form",Z,{labelCol:J,valueBaseName:f,readonly:t})}var z=function(){if(ce()(i)==="object"){var j=i.render,K=i.style,w=K===void 0?{}:K;return j||(i.render=function(V,k){return(0,b.jsx)("div",{style:u()({display:"flex",alignItems:"center",gap:"8px"},w),children:k})}),i}return i},X=x?"hasInitial":"noInitial";return(0,b.jsx)(mt.Z,u()(u()(u()({},A),{},{onFinish:U,submitter:z(),formRef:X==="hasInitial"?O:D,readonly:t,initialValues:x},C),{},{columns:M(d),layoutType:"Form"}),X)},ke=bt,Jn=function(){return null},$t=["onFinish","formRef","initialValues","children","innerRef"],Ze=(0,R.createContext)(void 0),Tt=function(n){var r=n.onFinish,l=n.formRef,e=n.initialValues,t=n.children,o=n.innerRef,i=E()(n,$t),s=function(S){if(o!=null&&o.current){var P=o.current.data;o.current.data=u()(u()({},P),S)}};(0,R.useImperativeHandle)(o,function(){return{data:{},setData:s}});var d=function(){var F=Pe()(ae()().mark(function S(P){return ae()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(!r){T.next=4;break}return T.next=3,r(xe(P));case 3:return T.abrupt("return");case 4:return T.abrupt("return",new Promise(function(D){D(!0)}));case 5:case"end":return T.stop()}},S)}));return function(P){return F.apply(this,arguments)}}(),f=(0,R.useState)(void 0),c=ne()(f,2),y=c[0],p=c[1];(0,R.useEffect)(function(){if(e&&m.current){var F=m.current,S=F.getFieldsValue,P=F.setFieldsValue;pe(e,{getFieldsValue:S,setFieldsValue:P,isInit:!0,setInitialValuesInner:p})}},[]);var m=(0,R.useRef)(),C=(0,R.useRef)();(0,R.useImperativeHandle)(l,function(){if(!y)return m.current;if(!C.current)return C.current;var F=C.current,S=F.getFieldsValue,P=F.setFieldsValue;return u()(u()({},C.current),{},{setFieldsValue:function(T){return pe(T,{getFieldsValue:S,setFieldsValue:P})}})},[!y]);var $=y?"hasInitial":"noInitial";return(0,b.jsx)(Ze.Provider,{value:o,children:(0,b.jsx)(ft.A,u()(u()({onFinish:d,formRef:$==="hasInitial"?C:m,initialValues:y},i),{},{children:t}),$)})},Rt=Tt,xt=v(12444),ve=v.n(xt),Dt=v(72004),me=v.n(Dt),Kt=v(25098),g=v.n(Kt),It=v(31996),he=v.n(It),Ot=v(26037),ye=v.n(Ot),Ke=v(85402),Vt=v(97435),Lt=["columns","onFinish","onCancel","formProps","bodyStyle","innerRef","open"],jt=["isKeyPressSubmit","autoFocusFirstInput","initialValues"],We=function(a){he()(r,a);var n=ye()(r);function r(l){var e,t;return ve()(this,r),t=n.call(this,l),h()(g()(t),"formRef",void 0),h()(g()(t),"context",void 0),h()(g()(t),"componentDidUpdate",function(){var o=Pe()(ae()().mark(function i(s,d){return ae()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(!s.open&&t.props.open)){c.next=6;break}if(!t.props.onOpen){c.next=6;break}return t.setState({loading:!0}),c.next=5,t.props.onOpen(t.state.formType,t.formRef,t.state.formData);case 5:t.setState({loading:!1});case 6:if(!(!d.visible&&t.state.visible)){c.next=12;break}if(!t.props.onOpen){c.next=12;break}return t.setState({loading:!0}),c.next=11,t.props.onOpen(t.state.formType,t.formRef,t.state.formData);case 11:t.setState({loading:!1});case 12:case"end":return c.stop()}},i)}));return function(i,s){return o.apply(this,arguments)}}()),h()(g()(t),"openModal",function(){var o,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"new",s=arguments.length>1?arguments[1]:void 0;if(t.props.innerRef&&t.props.innerRef.current&&(t.props.innerRef.current.formType=i),s){t.setState({visible:!0,formType:i,formData:s});return}t.setState({visible:!0,formType:i,formData:((o=t.props.formProps)===null||o===void 0?void 0:o.initialValues)||{}})}),h()(g()(t),"onOk",function(){if(t.formRef.current){var o=t.formRef.current.submit;o()}}),h()(g()(t),"onFinish",function(){var o=Pe()(ae()().mark(function i(s){var d,f,c,y;return ae()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(d=t.props.onFinish,f=t.state,c=f.formType,y=f.formData,t.setState({loading:!0}),!d){m.next=15;break}return m.prev=4,m.next=7,d(s,c,y);case 7:t.setState({loading:!1}),t.getOnCancel(),m.next=15;break;case 11:m.prev=11,m.t0=m.catch(4),console.log("onFinishError",m.t0),t.setState({loading:!1});case 15:case"end":return m.stop()}},i,null,[[4,11]])}));return function(i){return o.apply(this,arguments)}}()),h()(g()(t),"handleOnCancel",function(){var o,i=t.props,s=i.getContainer,d=i.confirmOnClose,f=d===void 0?!0:d,c=(o=t.formRef.current)===null||o===void 0?void 0:o.isFieldsTouched();f&&c?Ke.Z.confirm({title:"\u786E\u8BA4\u5173\u95ED\u5F39\u7A97\u5417?",content:"\u5173\u95ED\u5F39\u7A97\u540E\u60A8\u6240\u66F4\u6539\u7684\u5185\u5BB9\u5C06\u4E0D\u4F1A\u4FDD\u5B58!",centered:!0,closable:!0,onOk:function(){t.getOnCancel()},getContainer:s}):t.getOnCancel()}),h()(g()(t),"getOnCancel",function(){var o=t.props,i=o.onCancel,s=o.open;s?i&&i():t.setState({visible:!1})}),h()(g()(t),"getColumns",function(){var o=t.state.formType,i=t.props.columns.map(function(s){return(0,Vt.Z)(s,["width"])});return o==="read"&&i.forEach(function(s){return s.readonly=!0}),i}),t.state={visible:!1,formData:((e=l.formProps)===null||e===void 0?void 0:e.initialValues)||{},formType:"new",loading:!1},l.innerRef&&(l.innerRef.current||(l.innerRef.current={}),l.innerRef.current.openModal=t.openModal),t.formRef=(0,R.createRef)(),t}return me()(r,[{key:"render",value:function(){var e=this.props,t=e.columns,o=e.onFinish,i=e.onCancel,s=e.formProps,d=e.bodyStyle,f=d===void 0?{}:d,c=e.innerRef,y=e.open,p=E()(e,Lt),m=s||{},C=m.isKeyPressSubmit,$=C===void 0?!0:C,F=m.autoFocusFirstInput,S=F===void 0?!0:F,P=m.initialValues,x=E()(m,jt),T=this.context||{},D=T.modalProps,O=D===void 0?{}:D,A=T.formProps,U=A===void 0?{}:A,Y=c,M=u()(u()({},U),{},{innerRef:Y},x),Z=u()(u()({},O),p);return(0,b.jsx)(Ke.Z,u()(u()({destroyOnClose:!0,bodyStyle:u()(u()({},f),{},{maxHeight:"calc(100vh - 108px - 100px - 25px)",overflow:"auto"}),open:y||this.state.visible},Z),{},{onCancel:this.handleOnCancel,onOk:this.onOk,okButtonProps:{loading:this.state.loading},children:(0,b.jsx)(ke,u()({scrollToFirstError:!0,formRef:this.formRef,columns:this.getColumns(),onFinish:this.onFinish,autoFocusFirstInput:S,isKeyPressSubmit:$,initialValues:y?P:u()({},this.state.formData)},M))}))}}]),r}(R.Component);h()(We,"contextType",Ee);var Ye=We,Xn=function(){return null},Bt=v(40328),ze=v(26713),He=v(65360),Mt=v(12461),wt=v(71577),Et=["visible"],At=function(n){var r=n.visible,l=r===void 0?!0:r,e=E()(n,Et);return typeof l=="function"&&!l()||!l?null:(0,b.jsx)(wt.Z,u()({},e))},Ge=At,qn=function(){return null},_n=v(97560),Nt=["className"],Ut=function(n){var r=n.className,l=E()(n,Nt);return(0,b.jsx)(Ge,u()(u()({className:"rak-link-btn "+(r||"")},l),{},{type:"link"}))},ue=Ut,kt=null,Zt=function(n){return n.filter(function(r){return!r.hideInTable}).filter(function(r){var l=typeof r.valueType=="string"?r.valueType:"";return!["option","index"].includes(l)})},er=function(n){return n.filter(function(r){return!r.hideInSearch}).filter(function(r){var l=typeof r.valueType=="string"?r.valueType:"";return!["option","index"].includes(l)}).map(function(r){var l=r.hideInForm,e=r.formItemProps,t=_objectWithoutProperties(r,kt);return t})},tr=function(n){return n.filter(function(r){return!r.hideInForm}).filter(function(r){var l=typeof r.valueType=="string"?r.valueType:"";return!["option","index"].includes(l)})},nr=function(n){return n.filter(function(r){return!r.hideInTable})},rr=function(n){var r={};return n.filter(function(l){return l.sorter===!0}).forEach(function(l){var e=l.defaultSortOrder||"descend";r[l.dataIndex]=e}),r},Qe=function(n,r){if(Object.keys(r).length<1)return n;var l={ascend:"asc",descend:"desc"},e=Object.keys(r)[0],t={sort:"".concat(e,",").concat(l[r[e]])};return u()(u()({},n),t)},ar=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"asc",l={asc:"ascend",desc:"descend"},e=r==="asc"?["ascend","descend","ascend"]:["descend","ascend","descend"];return{defaultSortOrder:l[r],sortDirections:e,sorter:!0}},Wt=v(94184),Yt=v.n(Wt),zt=v(74295),Ht=v(93162),Gt=v(30381),Qt=v.n(Gt),Jt=20;function be(a,n){return a?typeof a=="string"?a:Qt()(a).format(n):""}function Xt(a,n){if(n.valueEnum){var r;return(r=n.valueEnum[a])===null||r===void 0?void 0:r.text}if(n.fieldProps)if(typeof n.fieldProps=="function"){var l,e,t=((l=n.fieldProps({},{current:{}}))===null||l===void 0?void 0:l.options)||[];return(e=t.find(function(s){return s.value==a}))===null||e===void 0?void 0:e.label}else{var o,i=n.fieldProps.options||[];return(o=i.find(function(s){return s.value==a}))===null||o===void 0?void 0:o.label}}function qt(a,n){var r=a[n.dataIndex];return n.renderExport?n.renderExport(r,a):n.render?n.render(r,a):n.renderText?n.renderText(r,a):["select","radio","radioButton","checkbox"].includes(n.valueType)?Xt(r,n):n.valueType==="date"?be(r,"YYYY-MM-DD"):n.valueType==="dateTime"?be(r,"YYYY-MM-DD HH:mm:ss"):n.valueType==="dateRange"&&r?r.map(function(l){return be(l,"YYYY-MM-DD")}).join(" - "):n.valueType==="dateTimeRange"&&r?r.map(function(l){return be(l,"YYYY-MM-DD HH:mm:ss")}).join(" - "):n.valueType==="money"?r||"":r&&ce()(r)==="object"?r.value:r}function _t(a,n){a.xlsx.writeBuffer().then(function(r){var l=new Blob([r],{type:""});(0,Ht.saveAs)(l,n)})}var en=function(n,r){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"\u9ED8\u8BA4\u5BFC\u51FA",e=new zt.Workbook,t=e.addWorksheet("sheet1");t.properties.defaultRowHeight=20,t.columns=n.map(function(i){return{header:typeof i.title=="function"?"":i.title,key:i.dataIndex,width:i.width?i.width/5:Jt}}),t.columns.forEach(function(i){i.alignment={vertical:"middle"}}),console.log("\u5BFC\u51FA",r);var o=(r||[]).map(function(i){return n.map(function(s){return qt(i,s)})});t.addRows(o),(r||[]).forEach(function(i,s){n.forEach(function(d,f){var c=d.onCell?d.onCell(i)||{}:{},y=c.rowSpan;if(y>1){var p=s+2,m=f+1;t.mergeCells(p,m,p+y-1,m)}})}),_t(e,l+".xlsx")},tn=["children","title","content","onOk"],nn=Ke.Z.confirm,rn=function(n){var r=n.children,l=n.title,e=n.content,t=n.onOk,o=E()(n,tn),i=function(){nn(u()({title:l,content:e,onOk:t},o))};return R.cloneElement(r,{onClick:i})},Je=rn,an=v(70942);function q(a,n){typeof window!="undefined"?(window[a]||(window[a]={}),window[a]=u()(u()({},window[a]),n)):(v.g[a]||(v.g[a]={}),v.g[a]=u()(u()({},v.g[a]),n))}function I(){for(var a=typeof window!="undefined"?window:v.g,n=0;n<arguments.length;n++){var r=n<0||arguments.length<=n?void 0:arguments[n];if(!a[r])return;a=a[r]}return a}function re(){for(var a=typeof window!="undefined"?window:v.g,n=0;n<arguments.length;n++){var r=n<0||arguments.length<=n?void 0:arguments[n];if(!a[r])return;n===arguments.length-1&&delete a[r],a=a[r]}}var $e=an.bind({ignoreUndefined:!0});function Te(a){if(ce()(a)!=="object"||a===null)return!1;var n=Object.getPrototypeOf(a);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}var on=function(n,r,l){var e=n||l;if(r===!1)return!1;if(r===void 0)return n||l;if(Te(r)&&!Te(e))return r;if(Te(r)&&Te(e))return $e(e,r)},or=v(59700),ln=["title"],sn=["btnText","title"],un=["rowKey","name","columns","options","pagination","formColumns","scroll","onFinish","tableAlertOption","rowSelection","sticky","className","optionColSpaceSize","noPadding","search","request","onOpen","modalProps","formProps","confirmModalProps","confirmModelType","optionColumnSpaceProps","actionRef"],dn=["modalProps","formProps","searchConfig","options","confirmModalType","confirmModalProps","tableAlertOption"],fn={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},Xe=function(a){he()(r,a);var n=ye()(r);function r(l){var e;return ve()(this,r),e=n.call(this,l),h()(g()(e),"targetId",void 0),h()(g()(e),"modalFormRef",void 0),h()(g()(e),"selfInnerRef",void 0),h()(g()(e),"selfActionRef",void 0),h()(g()(e),"context",void 0),h()(g()(e),"getTitle",function(){var t=e.props,o=t.name,i=t.toolbar,s=i===void 0?{}:i,d=s.title;return d||(o?"".concat(o,"\u5217\u8868"):!1)}),h()(g()(e),"getModalTitle",function(){var t=e.props.name,o=t===void 0?"":t,i=e.state.formType;return"".concat(fn[i]).concat(o)||""}),h()(g()(e),"setData",function(t){var o;if((o=e.props.innerRef)!==null&&o!==void 0&&o.current){var i=e.props.innerRef.current.data;e.props.innerRef.current.data=u()(u()({},i),t)}}),h()(g()(e),"openModal",function(){var t,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"new",i=arguments.length>1?arguments[1]:void 0;e.setState({formType:o}),(t=e.modalFormRef.current)===null||t===void 0||t.openModal(o,i)}),h()(g()(e),"patchColumn",function(t){var o=e.context||{},i=o.optionColumnSpaceProps,s=e.props,d=s.innerRef,f=d===void 0?e.selfInnerRef:d,c=s.optionColumnSpaceProps,y=c===void 0?{}:c,p=$e({size:"small"},i,y);return(0,De.ZP)(t,function(m){m.forEach(function(C){var $=C.renderFormItem,F=C.render,S=C.fieldProps;S&&typeof S=="function"&&(C.fieldProps=function(P){return S(P,f)}),$&&(C.renderFormItem=function(P,x,T){return $(P,x,T,f)}),C.valueType==="option"&&F&&(C.render=function(P,x,T,D){var O=F(P,x,T,D,f);return Array.isArray(O)?(0,b.jsx)(ze.Z,u()(u()({},p),{},{children:O})):O})})})}),h()(g()(e),"enableDelete",function(t){var o=e.context||{},i=o.confirmModalType,s=o.confirmModalProps,d=e.props,f=d.rowKey,c=f===void 0?"id":f,y=d.delPermission,p=d.delFunction,m=d.confirmModelType,C=m===void 0?i||"popconfirm":m,$=d.confirmModalProps,F=$===void 0?{}:$,S=$e(s,F),P=y?y():!0,x=e.state.delLoading;return(0,De.ZP)(t,function(T){T.forEach(function(D){var O=D.render,A=D.enableDelete,U=A===void 0?!1:A;D.valueType==="option"&&p&&P&&U&&O&&(D.render=function(Y,M,Z,te,G){var Q=typeof c=="function"?c(M):c,J=typeof U=="function"?U(M,Z):{},z=J.disabled,X=z===void 0?!1:z,L=J.visible,j=L===void 0?!0:L,K=J.danger,w=J.btnText,V=w===void 0?"\u5220\u9664":w,k=O(Y,M,Z,te,G);if(Array.isArray(k)&&j){var B,H=S.title,le=H===void 0?"\u786E\u5B9A\u5220\u9664\u5417?":H,de=E()(S,ln);C==="modal"?B=(0,b.jsx)(Je,u()(u()({title:le},de),{},{onOk:function(){e.handleDelete([M[Q]],M)},children:(0,b.jsx)(ue,{disabled:X,onClick:function(W){return W.stopPropagation()},loading:x&&M[Q]===e.targetId,danger:K,children:V})}),k.length+1):B=(0,b.jsx)(He.Z,u()(u()({title:le},de),{},{onConfirm:function(W){W==null||W.stopPropagation(),e.handleDelete([M[Q]],M)},onCancel:function(W){return W==null?void 0:W.stopPropagation()},children:(0,b.jsx)(ue,{disabled:X,onClick:function(W){return W.stopPropagation()},loading:x&&M[Q]===e.targetId,danger:K,children:V})}),k.length+1),k.push(B)}return k})})})}),h()(g()(e),"getRowSelection",function(){var t=e.props.rowSelection,o=e.state.selectedRowKeys;return t&&!t.selectedRowKeys?u()(u()({},t),{},{selectedRowKeys:o,onChange:function(s,d){return e.setState({selectedRowKeys:s,selectedRows:d})}}):t}),h()(g()(e),"handleDelete",function(t,o,i){var s=e.props,d=s.rowKey,f=d===void 0?"id":d,c=s.delFunction,y=s.rowSelection,p=y===void 0?{}:y,m=s.actionRef,C=m===void 0?e.selfActionRef:m,$=typeof f=="function"?f(o):f;e.setState({delLoading:!0}),o[$]&&(e.targetId=o[$]),c&&c(t,o).then(function(){if(Mt.ZP.success("\u5220\u9664\u6210\u529F!"),i&&i(),o[$]){var F=(t||[]).filter(function(U){return U!==o[$]});p.selectedRowKeys?p.onChange&&p.onChange(F):e.setState({selectedRowKeys:F})}var S=C.current;if(S){var P=S.pageInfo,x=P.current,T=P.total,D=P.pageSize,O=o.id?1:(t||[]).length,A=T-O===(x-1)*D;if(x>1&&A){S.setPageInfo({current:x-1});return}S.reload()}}).finally(function(){e.setState({delLoading:!1})})}),h()(g()(e),"tableAlertOptionRender",function(t){var o=t.selectedRowKeys,i=t.onCleanSelected,s=e.state,d=s.delLoading,f=s.selectedRows,c=e.context||{},y=c.tableAlertOption,p=e.props,m=p.tableAlertOption,C=m===void 0?{}:m,$=p.columns,F=p.name,S=p.delFunction,P=p.delPermission,x=p.confirmModelType,T=$e(y,C),D=T.hideDelete,O=D===void 0?!1:D,A=T.enableExport,U=A===void 0?!1:A,Y=T.actions,M=Y===void 0?[]:Y,Z=T.exportName,te=T.deleteProps,G=te||{},Q=G.btnText,J=Q===void 0?"\u6279\u91CF\u5220\u9664":Q,z=G.title,X=E()(G,sn),L=P?P():!0,j=function(){if(!O&&S&&L){var w=z?z(o.length):"\u786E\u5B9A\u5220\u9664".concat(o.length,"\u6761\u6570\u636E\u5417?");return x==="modal"?(0,b.jsx)(Je,u()(u()({title:w},X),{},{onOk:function(){e.handleDelete(o,{},i)},okButtonProps:{loading:d},children:(0,b.jsx)(ue,{loading:d,children:J})})):(0,b.jsx)(He.Z,u()(u()({overlayStyle:{width:"180px"},title:w},X),{},{onConfirm:function(){e.handleDelete(o,{},i)},okButtonProps:{loading:d},children:(0,b.jsx)(ue,{loading:d,children:J})}))}};return(0,b.jsxs)(ze.Z,{size:"middle",children:[U&&(0,b.jsx)(ue,{onClick:function(){en(Zt($),f,Z||"".concat(F?F+"\u5217\u8868":"","\u5BFC\u51FA")),i(),console.log("exportclick",f)},children:"\u5BFC\u51FA\u6240\u9009"}),j(),M,(0,b.jsx)("a",{onClick:i,children:"\u53D6\u6D88\u9009\u62E9"})]})}),e.state={formType:"",delLoading:!1,selectedRowKeys:[],selectedRows:[]},e.targetId="",e.modalFormRef=(0,R.createRef)(),e.selfInnerRef=(0,R.createRef)(),e.selfActionRef=(0,R.createRef)(),l.innerRef&&(l.innerRef.current={},l.innerRef.current.data={},l.innerRef.current.openModal=e.openModal,l.innerRef.current.setData=e.setData),e}return me()(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,o=t.rowKey,i=o===void 0?"id":o,s=t.name,d=t.columns,f=t.options,c=t.pagination,y=c===void 0?{}:c,p=t.formColumns,m=t.scroll,C=m===void 0?{x:"100%"}:m,$=t.onFinish,F=t.tableAlertOption,S=t.rowSelection,P=t.sticky,x=P===void 0?!0:P,T=t.className,D=t.optionColSpaceSize,O=t.noPadding,A=O===void 0?!1:O,U=t.search,Y=t.request,M=t.onOpen,Z=t.modalProps,te=Z===void 0?{}:Z,G=t.formProps,Q=G===void 0?{}:G,J=t.confirmModalProps,z=t.confirmModelType,X=t.optionColumnSpaceProps,L=t.actionRef,j=E()(t,un),K=this.context||{},w=K.modalProps,V=w===void 0?{}:w,k=K.formProps,B=k===void 0?{}:k,H=K.searchConfig,le=H===void 0?{}:H,de=K.options,ee=K.confirmModalType,W=K.confirmModalProps,Oe=K.tableAlertOption,Ve=E()(K,dn),se=u()(u()({},Ve),j),Se=u()(u()({},V),te),Le=u()(u()({},le),{},{className:"searchFormStyleFix"}),Yn=on(de,f,!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Bt.ZP,u()({className:Yt()(T,D==="small"&&"myTableSmallOptionCol",A&&"rak-protable-no-padding"),rowKey:i,headerTitle:this.getTitle(),columns:this.patchColumn(this.enableDelete(d)).filter(function(fe){return fe.type!=="form"}),options:Yn,pagination:y,scroll:C,tableAlertOptionRender:this.tableAlertOptionRender,rowSelection:this.getRowSelection(),sticky:x,search:U===!1?!1:u()(u()({},Le),U),request:Y?function(fe,je,zn){return new Promise(function(Hn,Gn){Y(Qe(fe,je),je,zn).then(function(Ce){var Be;(Be=e.props.innerRef)!==null&&Be!==void 0&&Be.current&&(e.props.innerRef.current.total=Ce.total,e.props.innerRef.current.dataSource=Ce.data,e.props.innerRef.current.params=Qe(fe,je)),Hn(Ce)}).catch(function(Ce){return Gn(Ce)})})}:void 0,actionRef:L||this.selfActionRef},se)),(0,b.jsx)(Ye,u()({innerRef:this.modalFormRef,title:this.getModalTitle(),columns:this.patchColumn(p||d).filter(function(fe){return fe.type!=="table"}),onFinish:$,onOpen:M,formProps:u()(u()({},B),Q)},Se))]})}}]),r}(R.Component);h()(Xe,"contextType",we);var cn=Xe,qe=v(34041),Ie=v(66690),pn=v(44421);function _e(a,n,r,l){var e=l||{},t=e.parentKey,o=e.icon,i=e.isTop;return a.children?_objectSpread(_objectSpread({},a),{},{key:a[r],title:a[n],nodeId:t,isTop:i,icon:o,children:a.children.map(function(s){return _e(s,n,r,{parentKey:a[r],icon:o})})}):_objectSpread(_objectSpread({},a),{},{key:a[r],title:a[n],nodeId:t,isTop:i})}function ir(a,n){var r=n||{},l=r.titleKey,e=l===void 0?"title":l,t=r.valueKey,o=t===void 0?"id":t,i=r.icon;return a.map(function(s){return _e(s,e,o,{parentKey:"",icon:i||s.icon,isTop:!0})})}function et(a,n,r){return a.children?u()(u()({},a),{},{value:a[r],title:a[n],children:a.children.map(function(l){return et(l,n,r)})}):u()(u()({},a),{},{value:a[r],title:a[n]})}function Re(a,n){var r=n||{},l=r.titleKey,e=l===void 0?"label":l,t=r.valueKey,o=t===void 0?"id":t;return a.map(function(i){return et(i,e,o)})}function tt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=n||{},l=r.labelKey,e=l===void 0?"name":l,t=r.valueKey,o=t===void 0?"id":t,i=r.renderLabel;return a.map(function(s){var d;return i?d=i(s):d=s[e],{label:d,value:s[o]}})}function nt(a,n){return a.children?u()(u()({},a),{},{disabled:n&&n(a),children:a.children.map(function(r){return nt(r,n)})}):u()(u()({},a),{},{disabled:n&&n(a)})}function vn(a,n){return n?a.map(function(r){return nt(r,n)}):a}function rt(a,n){return a.children?_objectSpread(_objectSpread({},a),{},{checkable:n&&n(a),children:a.children.map(function(r){return rt(r,n)})}):_objectSpread(_objectSpread({},a),{},{checkable:n&&n(a)})}function lr(a,n){return n?a.map(function(r){return rt(r,n)}):a}function mn(){for(var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",l,e=0;e<a.length;e++){var t=hn(a[e],n,r);if(t){l=t;break}}return l}function hn(a,n,r){if(a[r]===n)return a;if(a.children&&a.children.length)return mn(a.children,n,r)}var yn=["type","loadFunction","labelKey","valueKey","renderLabel","onChange","queryParams","noCache","showSearch","optionFilterProp","allowClear"],gn=function(a){he()(r,a);var n=ye()(r);function r(l){var e;return ve()(this,r),e=n.call(this,l),h()(g()(e),"reRender",function(t){t.detail.type===e.props.type&&!e.isNoCache()&&(e.setState({loading:!1,dataSource:I(N,e.props.type)||[],total:I(_,e.props.type)||0}),e.props.onLoad&&e.props.onLoad(I(N,e.props.type)||[],I(_,e.props.type)||0),q(oe,h()({},e.props.type,!1)))}),h()(g()(e),"isNoCache",function(){var t=e.props,o=t.queryParams,i=o===void 0?{}:o,s=t.noCache;return Object.keys(i).length>0||s}),h()(g()(e),"handleLoadData",function(){e.isNoCache()?e.loadDataWithoutCache():e.loadDataForCache()}),h()(g()(e),"loadDataForCache",function(){var t=e.props,o=t.type,i=t.loadFunction,s=t.onLoad;if(I(oe,o)){e.setState({loading:!0});return}if(I(N,o)){s&&s(I(N,o)||[],I(_,o));return}q(oe,h()({},o,!0)),e.setState({loading:!0}),i({}).then(function(d){q(N,h()({},o,d.data)),q(_,h()({},o,d.total)),s&&s(d.data,d.total);var f=new CustomEvent("selectGlobalUpdate",{detail:{type:o}});document.dispatchEvent(f)}).finally(function(){e.setState({loading:!1})})}),h()(g()(e),"loadDataWithoutCache",function(){var t=e.props,o=t.loadFunction,i=t.queryParams,s=i===void 0?{}:i,d=t.onLoad;e.setState({loading:!0}),o(s).then(function(f){e.setState({dataSource:f.data,total:f.total}),d&&d(f.data,f.total)}).finally(function(){e.setState({loading:!1})})}),h()(g()(e),"getTotal",function(){return e.isNoCache()?e.state.total:I(_,e.props.type)}),h()(g()(e),"reset",function(){var t=e.props.type;e.setState({searchValue:void 0,dataSource:I(N,t)||[],total:I(_,t),current:1}),e.isNoCache()&&e.handleLoadData()}),h()(g()(e),"handleOnChange",function(t){var o=e.props,i=o.onChange,s=o.valueKey,d=s===void 0?"id":s,f=o.labelInValue;if(!t){e.reset(),i&&i(t,{});return}t&&e.state.searchValue&&e.reset(),i&&i(t,e.state.dataSource.find(function(c){return f?c[d]===(t==null?void 0:t.value):c[d]===t}))}),h()(g()(e),"handleUpdateData",function(){var t=e.state,o=t.current,i=t.searchValue,s=t.dataSource,d=e.props.queryParams,f=d===void 0?{}:d;e.setState({loading:!0}),e.props.loadFunction(u()(u()({},f),{},{current:o,searchValue:i})).then(function(c){e.setState({dataSource:s.concat(c.data),loading:!1,total:c.total}),i||q(N,h()({},e.props.type,s.concat(c.data)))})}),h()(g()(e),"handleSearchData",function(){var t=e.state.searchValue,o=e.props.queryParams,i=o===void 0?{}:o;e.setState({loading:!0}),e.props.loadFunction(u()(u()({},i),{},{current:1,searchValue:t})).then(function(s){e.setState({dataSource:s.data,loading:!1,total:s.total})})}),h()(g()(e),"handlePopupScroll",function(t){t.persist();var o=t.target,i=e.state.current;e.toBottomNeedLoad(o)&&e.setState({current:i+1},e.handleUpdateData)}),h()(g()(e),"toBottomNeedLoad",function(t){var o=e.state,i=o.dataSource,s=o.loading;return!s&&e.toBottom(t)&&i.length<e.getTotal()}),h()(g()(e),"toBottom",function(t){return t.scrollTop+t.clientHeight+10>t.scrollHeight}),h()(g()(e),"handleSearch",function(t){if(t){e.setState({searchValue:t,current:1},function(){return e.handleSearchData()});return}e.reset()}),e.state={dataSource:I(N,l.type)||[],total:I(_,l.type)||0,loading:!1,searchValue:"",current:1},e}return me()(r,[{key:"componentDidMount",value:function(){this.handleLoadData(),document.addEventListener("selectGlobalUpdate",this.reRender)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectGlobalUpdate",this.reRender)}},{key:"componentDidUpdate",value:function(e){(0,Ie.Z)(e.queryParams,this.props.queryParams)||this.handleLoadData()}},{key:"render",value:function(){var e=this.props,t=e.type,o=e.loadFunction,i=e.labelKey,s=i===void 0?"name":i,d=e.valueKey,f=d===void 0?"id":d,c=e.renderLabel,y=e.onChange,p=e.queryParams,m=e.noCache,C=e.showSearch,$=e.optionFilterProp,F=e.allowClear,S=E()(e,yn),P=C!==void 0?C:!0,x=F!==void 0?F:!0;return(0,b.jsx)(qe.Z,u()(u()({},S),{},{loading:this.state.loading,onChange:this.handleOnChange,options:tt(this.state.dataSource,{labelKey:s,valueKey:f,renderLabel:c}),showSearch:P,allowClear:x,filterOption:!1,onPopupScroll:this.handlePopupScroll,onSearch:(0,pn.Z)(this.handleSearch,500)}))}}]),r}(R.Component),Sn=gn,Cn=["type","loadFunction","labelKey","valueKey","renderLabel","onChange","queryParams","noCache","showSearch","optionFilterProp","allowClear"],Pn=function(a){he()(r,a);var n=ye()(r);function r(l){var e;return ve()(this,r),e=n.call(this,l),h()(g()(e),"reRender",function(t){t.detail.type===e.props.type&&!e.isNoCache()&&(e.setState({loading:!1,dataSource:I(N,e.props.type)||[],total:I(_,e.props.type)||0}),e.props.onLoad&&e.props.onLoad(I(N,e.props.type)||[],I(_,e.props.type)||0),q(oe,h()({},e.props.type,!1)))}),h()(g()(e),"isNoCache",function(){var t=e.props,o=t.queryParams,i=o===void 0?{}:o,s=t.noCache;return Object.keys(i).length>0||s}),h()(g()(e),"handleLoadData",function(){e.isNoCache()?e.loadDataWithoutCache():e.loadDataForCache()}),h()(g()(e),"loadDataForCache",function(){var t=e.props,o=t.type,i=t.loadFunction,s=t.onLoad;if(I(oe,o)){e.setState({loading:!0});return}if(I(N,o)){s&&s(I(N,o)||[]);return}q(oe,h()({},o,!0)),e.setState({loading:!0}),i({}).then(function(d){q(N,h()({},o,d.data)),q(_,h()({},o,d.total)),s&&s(d.data,d.total);var f=new CustomEvent("selectGlobalUpdate",{detail:{type:o}});document.dispatchEvent(f)}).finally(function(){e.setState({loading:!1})})}),h()(g()(e),"loadDataWithoutCache",function(){var t=e.props,o=t.loadFunction,i=t.queryParams,s=i===void 0?{}:i,d=t.onLoad;e.setState({loading:!0}),o(s).then(function(f){e.setState({dataSource:f.data,total:f.total}),d&&d(f.data,f.total)}).finally(function(){e.setState({loading:!1})})}),h()(g()(e),"handleOnChange",function(t){var o=e.props,i=o.onChange,s=o.valueKey,d=s===void 0?"id":s,f=o.labelInValue;if(!t){i&&i(t,{});return}i&&i(t,e.state.dataSource.find(function(c){return f?c[d]===(t==null?void 0:t.value):c[d]===t}))}),e.state={loading:!1,dataSource:I(N,l.type)||[]},e}return me()(r,[{key:"componentDidMount",value:function(){this.handleLoadData(),document.addEventListener("selectGlobalUpdate",this.reRender)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectGlobalUpdate",this.reRender)}},{key:"componentDidUpdate",value:function(e){(0,Ie.Z)(e.queryParams,this.props.queryParams)||this.handleLoadData()}},{key:"render",value:function(){var e=this.props,t=e.type,o=e.loadFunction,i=e.labelKey,s=i===void 0?"name":i,d=e.valueKey,f=d===void 0?"id":d,c=e.renderLabel,y=e.onChange,p=e.queryParams,m=e.noCache,C=e.showSearch,$=e.optionFilterProp,F=e.allowClear,S=E()(e,Cn),P=C!==void 0?C:!0,x=$!==void 0?$:"label",T=F!==void 0?F:!0;return(0,b.jsx)(qe.Z,u()(u()({},S),{},{loading:this.state.loading,onChange:this.handleOnChange,options:tt(this.state.dataSource,{labelKey:s,valueKey:f,renderLabel:c}),showSearch:P,optionFilterProp:x,allowClear:T}))}}]),r}(R.Component),Fn=Pn,bn=["type"],N="@@selectData",oe="@@selectDataIsStart",_="@@selectDataTotal";function $n(a){var n=a.apis,r=n===void 0?[]:n,l=a.defaultProps,e=l===void 0?{}:l;return function(t){var o=t.type,i=E()(t,bn),s=r.find(function(d){return d.type===o});return s?s.pagination?(0,b.jsx)(Sn,u()(u()(u()({type:o},e),s.defaultProps||{}),{},{loadFunction:s.api},i)):(0,b.jsx)(Fn,u()(u()(u()({type:o},e),s.defaultProps||{}),{},{loadFunction:s.api},i)):null}}var Tn=$n,Rn=function(n){n?(re(N,n),re(oe,n),re(_,n)):(re(N),re(oe),re(_))},sr=function(){return null},ur=function(){return null},xn=v(45278),Dn=["labelKey","valueKey","type","loadFunction","nodeDisabled","style","value","onChange","queryParams","noCache"],Kn=function(a){he()(r,a);var n=ye()(r);function r(l){var e;return ve()(this,r),e=n.call(this,l),h()(g()(e),"reRender",function(t){t.detail.type===e.props.type&&!e.isNoCache()&&(e.setState({loading:!1,dataSource:I(ie,e.props.type)||[]}),q(ge,h()({},e.props.type,!1)),e.props.onLoad&&e.props.onLoad(I(ie,e.props.type)||[]))}),h()(g()(e),"isNoCache",function(){var t=e.props,o=t.queryParams,i=o===void 0?{}:o,s=t.noCache;return Object.keys(i).length>0||s}),h()(g()(e),"handleLoadData",function(){e.isNoCache()?e.loadDataWithoutCache():e.loadDataForCache()}),h()(g()(e),"loadDataForCache",function(){var t=e.props,o=t.type,i=t.loadFunction,s=t.valueKey,d=s===void 0?"id":s,f=t.labelKey,c=f===void 0?"name":f,y=t.onLoad;if(I(ge,o)){e.setState({loading:!0});return}if(I(ie,o)){y&&y(I(ie,o));return}q(ge,h()({},o,!0)),e.setState({loading:!0}),i({}).then(function(p){q(ie,h()({},o,Re(p,{titleKey:c,valueKey:d}))),y&&y(Re(p,{titleKey:c,valueKey:d}));var m=new CustomEvent("treeSelectGlobalUpdate",{detail:{type:o}});document.dispatchEvent(m)}).finally(function(){e.setState({loading:!1})})}),h()(g()(e),"loadDataWithoutCache",function(){var t=e.props,o=t.loadFunction,i=t.queryParams,s=t.valueKey,d=s===void 0?"id":s,f=t.labelKey,c=f===void 0?"name":f,y=t.onLoad;e.setState({loading:!0}),o(i).then(function(p){e.setState({dataSource:Re(p,{titleKey:c,valueKey:d})}),y&&y(Re(p,{titleKey:c,valueKey:d}))}).finally(function(){e.setState({loading:!1})})}),e.state={loading:!1,dataSource:I(ie,l.type)||[]},e}return me()(r,[{key:"componentDidMount",value:function(){this.handleLoadData(),document.addEventListener("treeSelectGlobalUpdate",this.reRender)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("treeSelectGlobalUpdate",this.reRender)}},{key:"componentDidUpdate",value:function(e){(0,Ie.Z)(e.queryParams,this.props.queryParams)||this.handleLoadData()}},{key:"render",value:function(){var e=this.props,t=e.labelKey,o=e.valueKey,i=e.type,s=e.loadFunction,d=e.nodeDisabled,f=e.style,c=f===void 0?{}:f,y=e.value,p=e.onChange,m=e.queryParams,C=e.noCache,$=E()(e,Dn);return(0,b.jsx)(xn.Z,u()(u()({showSearch:!0,treeNodeFilterProp:"title",allowClear:!0,placeholder:"\u8BF7\u9009\u62E9"},$),{},{style:u()({width:"100%"},c),loading:this.state.loading,value:y,onChange:function(S,P,x){p&&p(S,P,x)},treeData:vn(this.state.dataSource||[],d)}))}}]),r}(R.Component),In=Kn,On=["type"],ie="@@treeSelectData",ge="@@treeSelectDataIsStart";function Vn(a){var n=a.apis,r=n===void 0?[]:n,l=a.defaultProps,e=l===void 0?{}:l;return function(t){var o=t.type,i=E()(t,On),s=r.find(function(d){return d.type===o});return s?(0,b.jsx)(In,u()(u()(u()({type:o},e),s.defaultProps||{}),{},{loadFunction:s.api},i)):null}}var Ln=Vn,jn=function(n){n?(re(ie,n),re(ge,n)):(re(ie),re(ge))},dr=function(){return null},fr=function(){return null},Bn=v(19632),Mn=v.n(Bn),wn=v(58938),En=v(73935),An=["value","onChange","multiple","children","onFinish","errorHandle","responseToFileList","nameKey","urlKey"],Nn=["urlKey","nameKey","responseToFileList","errorHandle"];function at(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=a||[];return n.map(function(r){return r.status||(r.status="done"),r})}function Un(a){var n=a.value,r=a.onChange,l=a.multiple,e=l===void 0?!0:l,t=a.children,o=a.onFinish,i=a.errorHandle,s=a.responseToFileList,d=a.nameKey,f=a.urlKey,c=E()(a,An),y=(0,R.useContext)(Ne)||{},p=y.urlKey,m=y.nameKey,C=y.responseToFileList,$=y.errorHandle,F=E()(y,Nn),S=d||m||"name",P=f||p||"url",x=n&&n.filter(Boolean).map(function(z){return u()(u()({},z),{},{name:z[S],url:z[P]})}),T=(0,R.useRef)(null),D=(0,R.useRef)(!0),O=(0,R.useState)(at(x)),A=ne()(O,2),U=A[0],Y=A[1],M=(0,R.useState)(!1),Z=ne()(M,2),te=Z[0],G=Z[1];(0,R.useEffect)(function(){if(D.current){D.current=!1;return}T.current||Y(at(x)),T.current=!1},[n]);var Q=function(X){G(!0);var L=Mn()(X.fileList),j=L.map(function(V){if(V.response){var k=V.response,B=s||C,H=B?B(k):{};return u()(u()({},V),H)}return V});if(X.file.status==="error"){var K=i||$;K&&K(X.file.response||{})}if((0,En.flushSync)(function(){return Y(j)}),j.every(function(V){return V.status!=="uploading"})){var w=j.filter(function(V){return["done","success"].includes(V.status)});r&&(r(w),T.current=!0),o&&o(w),G(!1)}},J=function(){return t&&(typeof t=="function"?t({loading:te}):(0,R.cloneElement)(t,{loading:te}))};return(0,b.jsx)(wn.Z,u()(u()(u()({multiple:e},F),{},{fileList:U,onChange:Q},c),{},{children:J()}))}var kn=Un,cr=function(){return null},Zn=function(n){var r=n.proTableSetting,l=n.modalFormSetting,e=n.schemaFormSetting,t=n.formUploadSetting,o=n.children;return(0,b.jsx)(we.Provider,{value:r,children:(0,b.jsx)(Ee.Provider,{value:l,children:(0,b.jsx)(Ae.Provider,{value:e,children:(0,b.jsx)(Ne.Provider,{value:t,children:o})})})})},Wn=Zn}}]);
