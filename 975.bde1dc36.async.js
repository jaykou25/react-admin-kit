"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[975],{52975:function(yt,oe,C){C.d(oe,{Z:function(){return at}});var r=C(67294),le=C(93967),g=C.n(le),F=C(98423),O=C(53124),ce=C(98675),V=e=>{const{prefixCls:t,className:a,style:n,size:s,shape:i}=e,c=g()({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),l=g()({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),o=r.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return r.createElement("span",{className:g()(t,c,l,a),style:Object.assign(Object.assign({},o),n)})},d=C(54548),_=C(92030),ee=C(45503);const de=new d.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),q=e=>({height:e,lineHeight:(0,d.bf)(e)}),z=e=>Object.assign({width:e},q(e)),ge=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:de,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),X=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},q(e)),me=e=>{const{skeletonAvatarCls:t,gradientFromColor:a,controlHeight:n,controlHeightLG:s,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:a},z(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},z(s)),[`${t}${t}-sm`]:Object.assign({},z(i))}},ue=e=>{const{controlHeight:t,borderRadiusSM:a,skeletonInputCls:n,controlHeightLG:s,controlHeightSM:i,gradientFromColor:c,calc:l}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:a},X(t,l)),[`${n}-lg`]:Object.assign({},X(s,l)),[`${n}-sm`]:Object.assign({},X(i,l))}},te=e=>Object.assign({width:e},q(e)),be=e=>{const{skeletonImageCls:t,imageSizeBase:a,gradientFromColor:n,borderRadiusSM:s,calc:i}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:s},te(i(a).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},te(a)),{maxWidth:i(a).mul(4).equal(),maxHeight:i(a).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},k=(e,t,a)=>{const{skeletonButtonCls:n}=e;return{[`${a}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${a}${n}-round`]:{borderRadius:t}}},J=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},q(e)),he=e=>{const{borderRadiusSM:t,skeletonButtonCls:a,controlHeight:n,controlHeightLG:s,controlHeightSM:i,gradientFromColor:c,calc:l}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:l(n).mul(2).equal(),minWidth:l(n).mul(2).equal()},J(n,l))},k(e,n,a)),{[`${a}-lg`]:Object.assign({},J(s,l))}),k(e,s,`${a}-lg`)),{[`${a}-sm`]:Object.assign({},J(i,l))}),k(e,i,`${a}-sm`))},fe=e=>{const{componentCls:t,skeletonAvatarCls:a,skeletonTitleCls:n,skeletonParagraphCls:s,skeletonButtonCls:i,skeletonInputCls:c,skeletonImageCls:l,controlHeight:o,controlHeightLG:m,controlHeightSM:b,gradientFromColor:u,padding:$,marginSM:v,borderRadius:x,titleHeight:p,blockRadius:j,paragraphLiHeight:E,controlHeightXS:I,paragraphMarginTop:N}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:$,verticalAlign:"top",[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:u},z(o)),[`${a}-circle`]:{borderRadius:"50%"},[`${a}-lg`]:Object.assign({},z(m)),[`${a}-sm`]:Object.assign({},z(b))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:p,background:u,borderRadius:j,[`+ ${s}`]:{marginBlockStart:b}},[`${s}`]:{padding:0,"> li":{width:"100%",height:E,listStyle:"none",background:u,borderRadius:j,"+ li":{marginBlockStart:I}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${s} > li`]:{borderRadius:x}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:v,[`+ ${s}`]:{marginBlockStart:N}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},he(e)),me(e)),ue(e)),be(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${s} > li,
        ${a},
        ${i},
        ${c},
        ${l}
      `]:Object.assign({},ge(e))}}},pe=e=>{const{colorFillContent:t,colorFill:a}=e,n=t,s=a;return{color:n,colorGradientEnd:s,gradientFromColor:n,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}};var P=(0,_.I$)("Skeleton",e=>{const{componentCls:t,calc:a}=e,n=(0,ee.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:a(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[fe(n)]},pe,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),$e=e=>{const{prefixCls:t,className:a,rootClassName:n,active:s,shape:i="circle",size:c="default"}=e,{getPrefixCls:l}=r.useContext(O.E_),o=l("skeleton",t),[m,b,u]=P(o),$=(0,F.Z)(e,["prefixCls","className"]),v=g()(o,`${o}-element`,{[`${o}-active`]:s},a,n,b,u);return m(r.createElement("div",{className:v},r.createElement(V,Object.assign({prefixCls:`${o}-avatar`,shape:i,size:c},$))))},ve=e=>{const{prefixCls:t,className:a,rootClassName:n,active:s,block:i=!1,size:c="default"}=e,{getPrefixCls:l}=r.useContext(O.E_),o=l("skeleton",t),[m,b,u]=P(o),$=(0,F.Z)(e,["prefixCls"]),v=g()(o,`${o}-element`,{[`${o}-active`]:s,[`${o}-block`]:i},a,n,b,u);return m(r.createElement("div",{className:v},r.createElement(V,Object.assign({prefixCls:`${o}-button`,size:c},$))))};const Ce="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var Se=e=>{const{prefixCls:t,className:a,rootClassName:n,style:s,active:i}=e,{getPrefixCls:c}=r.useContext(O.E_),l=c("skeleton",t),[o,m,b]=P(l),u=g()(l,`${l}-element`,{[`${l}-active`]:i},a,n,m,b);return o(r.createElement("div",{className:u},r.createElement("div",{className:g()(`${l}-image`,a),style:s},r.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${l}-image-svg`},r.createElement("path",{d:Ce,className:`${l}-image-path`})))))},ye=e=>{const{prefixCls:t,className:a,rootClassName:n,active:s,block:i,size:c="default"}=e,{getPrefixCls:l}=r.useContext(O.E_),o=l("skeleton",t),[m,b,u]=P(o),$=(0,F.Z)(e,["prefixCls"]),v=g()(o,`${o}-element`,{[`${o}-active`]:s,[`${o}-block`]:i},a,n,b,u);return m(r.createElement("div",{className:v},r.createElement(V,Object.assign({prefixCls:`${o}-input`,size:c},$))))},xe=C(87462),Oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},je=Oe,Ee=C(42135),Ne=function(t,a){return r.createElement(Ee.Z,(0,xe.Z)({},t,{ref:a,icon:je}))},we=r.forwardRef(Ne),ze=we,Pe=e=>{const{prefixCls:t,className:a,rootClassName:n,style:s,active:i,children:c}=e,{getPrefixCls:l}=r.useContext(O.E_),o=l("skeleton",t),[m,b,u]=P(o),$=g()(o,`${o}-element`,{[`${o}-active`]:i},b,a,n,u),v=c!=null?c:r.createElement(ze,null);return m(r.createElement("div",{className:$},r.createElement("div",{className:g()(`${o}-image`,a),style:s},v)))},Be=C(74902);const Ie=(e,t)=>{const{width:a,rows:n=2}=t;if(Array.isArray(a))return a[e];if(n-1===e)return a};var He=e=>{const{prefixCls:t,className:a,style:n,rows:s}=e,i=(0,Be.Z)(Array(s)).map((c,l)=>r.createElement("li",{key:l,style:{width:Ie(l,e)}}));return r.createElement("ul",{className:g()(t,a),style:n},i)},Te=e=>{let{prefixCls:t,className:a,width:n,style:s}=e;return r.createElement("h3",{className:g()(t,a),style:Object.assign({width:n},s)})};function Q(e){return e&&typeof e=="object"?e:{}}function Me(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Re(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function Le(e,t){const a={};return(!e||!t)&&(a.width="61%"),!e&&t?a.rows=3:a.rows=2,a}const B=e=>{const{prefixCls:t,loading:a,className:n,rootClassName:s,style:i,children:c,avatar:l=!1,title:o=!0,paragraph:m=!0,active:b,round:u}=e,{getPrefixCls:$,direction:v,skeleton:x}=r.useContext(O.E_),p=$("skeleton",t),[j,E,I]=P(p);if(a||!("loading"in e)){const N=!!l,H=!!o,T=!!m;let Z;if(N){const R=Object.assign(Object.assign({prefixCls:`${p}-avatar`},Me(H,T)),Q(l));Z=r.createElement("div",{className:`${p}-header`},r.createElement(V,Object.assign({},R)))}let M;if(H||T){let R;if(H){const D=Object.assign(Object.assign({prefixCls:`${p}-title`},Re(N,T)),Q(o));R=r.createElement(Te,Object.assign({},D))}let K;if(T){const D=Object.assign(Object.assign({prefixCls:`${p}-paragraph`},Le(N,H)),Q(m));K=r.createElement(He,Object.assign({},D))}M=r.createElement("div",{className:`${p}-content`},R,K)}const G=g()(p,{[`${p}-with-avatar`]:N,[`${p}-active`]:b,[`${p}-rtl`]:v==="rtl",[`${p}-round`]:u},x==null?void 0:x.className,n,s,E,I);return j(r.createElement("div",{className:G,style:Object.assign(Object.assign({},x==null?void 0:x.style),i)},Z,M))}return c!=null?c:null};B.Button=ve,B.Avatar=$e,B.Input=ye,B.Image=Se,B.Node=Pe;var Ae=B,Ge=Ae,De=C(56140),We=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a},ae=e=>{var{prefixCls:t,className:a,hoverable:n=!0}=e,s=We(e,["prefixCls","className","hoverable"]);const{getPrefixCls:i}=r.useContext(O.E_),c=i("card",t),l=g()(`${c}-grid`,a,{[`${c}-grid-hoverable`]:n});return r.createElement("div",Object.assign({},s,{className:l}))},w=C(14747);const Fe=e=>{const{antCls:t,componentCls:a,headerHeight:n,cardPaddingBase:s,tabsMarginBottom:i}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:n,marginBottom:-1,padding:`0 ${(0,d.bf)(s)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,d.bf)(e.borderRadiusLG)} ${(0,d.bf)(e.borderRadiusLG)} 0 0`},(0,w.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},w.vS),{[`
          > ${a}-typography,
          > ${a}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:i,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},Ve=e=>{const{cardPaddingBase:t,colorBorderSecondary:a,cardShadow:n,lineWidth:s}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${(0,d.bf)(s)} 0 0 0 ${a},
      0 ${(0,d.bf)(s)} 0 0 ${a},
      ${(0,d.bf)(s)} ${(0,d.bf)(s)} 0 0 ${a},
      ${(0,d.bf)(s)} 0 0 0 ${a} inset,
      0 ${(0,d.bf)(s)} 0 0 ${a} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:n}}},qe=e=>{const{componentCls:t,iconCls:a,actionsLiMargin:n,cardActionsIconSize:s,colorBorderSecondary:i,actionsBg:c}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:c,borderTop:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${(0,d.bf)(e.borderRadiusLG)} ${(0,d.bf)(e.borderRadiusLG)}`},(0,w.dF)()),{"& > li":{margin:n,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${a}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,d.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${a}`]:{fontSize:s,lineHeight:(0,d.bf)(e.calc(s).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${i}`}}})},Ze=e=>Object.assign(Object.assign({margin:`${(0,d.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,w.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},w.vS),"&-description":{color:e.colorTextDescription}}),Ke=e=>{const{componentCls:t,cardPaddingBase:a,colorFillAlter:n}=e;return{[`${t}-head`]:{padding:`0 ${(0,d.bf)(a)}`,background:n,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${(0,d.bf)(e.padding)} ${(0,d.bf)(a)}`}}},Xe=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},ke=e=>{const{antCls:t,componentCls:a,cardShadow:n,cardHeadPadding:s,colorBorderSecondary:i,boxShadowTertiary:c,cardPaddingBase:l,extraColor:o}=e;return{[a]:Object.assign(Object.assign({},(0,w.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${a}-bordered)`]:{boxShadow:c},[`${a}-head`]:Fe(e),[`${a}-extra`]:{marginInlineStart:"auto",color:o,fontWeight:"normal",fontSize:e.fontSize},[`${a}-body`]:Object.assign({padding:l,borderRadius:`0 0 ${(0,d.bf)(e.borderRadiusLG)} ${(0,d.bf)(e.borderRadiusLG)}`},(0,w.dF)()),[`${a}-grid`]:Ve(e),[`${a}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${(0,d.bf)(e.borderRadiusLG)} ${(0,d.bf)(e.borderRadiusLG)} 0 0`}},[`${a}-actions`]:qe(e),[`${a}-meta`]:Ze(e)}),[`${a}-bordered`]:{border:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${i}`,[`${a}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${a}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:n}},[`${a}-contain-grid`]:{borderRadius:`${(0,d.bf)(e.borderRadiusLG)} ${(0,d.bf)(e.borderRadiusLG)} 0 0 `,[`${a}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${a}-loading) ${a}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${a}-contain-tabs`]:{[`> ${a}-head`]:{minHeight:0,[`${a}-head-title, ${a}-extra`]:{paddingTop:s}}},[`${a}-type-inner`]:Ke(e),[`${a}-loading`]:Xe(e),[`${a}-rtl`]:{direction:"rtl"}}},Je=e=>{const{componentCls:t,cardPaddingSM:a,headerHeightSM:n,headerFontSizeSM:s}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:n,padding:`0 ${(0,d.bf)(a)}`,fontSize:s,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:a}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},Qe=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText});var Ue=(0,_.I$)("Card",e=>{const t=(0,ee.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[ke(t),Je(t)]},Qe),ne=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Ye=e=>{const{actionClasses:t,actions:a=[],actionStyle:n}=e;return r.createElement("ul",{className:t,style:n},a.map((s,i)=>{const c=`action-${i}`;return r.createElement("li",{style:{width:`${100/a.length}%`},key:c},r.createElement("span",null,s))}))};var _e=r.forwardRef((e,t)=>{const{prefixCls:a,className:n,rootClassName:s,style:i,extra:c,headStyle:l={},bodyStyle:o={},title:m,loading:b,bordered:u=!0,size:$,type:v,cover:x,actions:p,tabList:j,children:E,activeTabKey:I,defaultActiveTabKey:N,tabBarExtraContent:H,hoverable:T,tabProps:Z={},classNames:M,styles:G}=e,R=ne(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:K,direction:D,card:y}=r.useContext(O.E_),nt=S=>{var h;(h=e.onTabChange)===null||h===void 0||h.call(e,S)},L=S=>{var h;return g()((h=y==null?void 0:y.classNames)===null||h===void 0?void 0:h[S],M==null?void 0:M[S])},A=S=>{var h;return Object.assign(Object.assign({},(h=y==null?void 0:y.styles)===null||h===void 0?void 0:h[S]),G==null?void 0:G[S])},st=r.useMemo(()=>{let S=!1;return r.Children.forEach(E,h=>{h&&h.type&&h.type===ae&&(S=!0)}),S},[E]),f=K("card",a),[rt,it,ot]=Ue(f),lt=r.createElement(Ge,{loading:!0,active:!0,paragraph:{rows:4},title:!1},E),se=I!==void 0,ct=Object.assign(Object.assign({},Z),{[se?"activeKey":"defaultActiveKey"]:se?I:N,tabBarExtraContent:H});let re;const W=(0,ce.Z)($),dt=!W||W==="default"?"large":W,ie=j?r.createElement(De.Z,Object.assign({size:dt},ct,{className:`${f}-head-tabs`,onChange:nt,items:j.map(S=>{var{tab:h}=S,Y=ne(S,["tab"]);return Object.assign({label:h},Y)})})):null;if(m||c||ie){const S=g()(`${f}-head`,L("header")),h=g()(`${f}-head-title`,L("title")),Y=g()(`${f}-extra`,L("extra")),St=Object.assign(Object.assign({},l),A("header"));re=r.createElement("div",{className:S,style:St},r.createElement("div",{className:`${f}-head-wrapper`},m&&r.createElement("div",{className:h,style:A("title")},m),c&&r.createElement("div",{className:Y,style:A("extra")},c)),ie)}const gt=g()(`${f}-cover`,L("cover")),mt=x?r.createElement("div",{className:gt,style:A("cover")},x):null,ut=g()(`${f}-body`,L("body")),bt=Object.assign(Object.assign({},o),A("body")),ht=r.createElement("div",{className:ut,style:bt},b?lt:E),ft=g()(`${f}-actions`,L("actions")),pt=p&&p.length?r.createElement(Ye,{actionClasses:ft,actionStyle:A("actions"),actions:p}):null,$t=(0,F.Z)(R,["onTabChange"]),vt=g()(f,y==null?void 0:y.className,{[`${f}-loading`]:b,[`${f}-bordered`]:u,[`${f}-hoverable`]:T,[`${f}-contain-grid`]:st,[`${f}-contain-tabs`]:j&&j.length,[`${f}-${W}`]:W,[`${f}-type-${v}`]:!!v,[`${f}-rtl`]:D==="rtl"},n,s,it,ot),Ct=Object.assign(Object.assign({},y==null?void 0:y.style),i);return rt(r.createElement("div",Object.assign({ref:t},$t,{className:vt,style:Ct}),re,mt,ht,pt))}),et=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a},tt=e=>{const{prefixCls:t,className:a,avatar:n,title:s,description:i}=e,c=et(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:l}=r.useContext(O.E_),o=l("card",t),m=g()(`${o}-meta`,a),b=n?r.createElement("div",{className:`${o}-meta-avatar`},n):null,u=s?r.createElement("div",{className:`${o}-meta-title`},s):null,$=i?r.createElement("div",{className:`${o}-meta-description`},i):null,v=u||$?r.createElement("div",{className:`${o}-meta-detail`},u,$):null;return r.createElement("div",Object.assign({},c,{className:m}),b,v)};const U=_e;U.Grid=ae,U.Meta=tt;var at=U}}]);