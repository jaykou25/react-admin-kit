"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[364],{4218:function(c,r,e){e.r(r),e.d(r,{BusinessSelect:function(){return u}});var d=e(15634),n=e(96527),t=e(85893),u=(0,d.BusinessSelectBuilder)({apis:[{api:n.queryColor,type:"color",pagination:!1},{api:n.queryBrand,type:"brand",pagination:!0},{api:n.queryUser,type:"user"}],defaultProps:{placeholder:"\u8BF7\u9009\u62E9"}}),a=function(){return(0,t.jsx)(d.SchemaForm,{grid:!0,colProps:{span:8},onFinish:function(m){return console.log({values:m})},autoFocusFirstInput:!1,submitter:!0,columns:[{title:"\u989C\u8272-\u4E0D\u5206\u9875",dataIndex:"color",renderFormItem:function(){return(0,t.jsx)(u,{type:"color",placeholder:"\u8BF7\u9009\u62E9\u989C\u8272"})}},{title:"\u54C1\u724C-\u5206\u9875(\u5E26\u641C\u7D22)",dataIndex:"brand",renderFormItem:function(){return(0,t.jsx)(u,{labelInValue:!0,type:"brand",placeholder:"\u8BF7\u9009\u62E9\u54C1\u724C"})}}]})};r.default=a},401:function(c,r,e){e.r(r);var d=e(45360),n=e(67294),t=e(15634),u=e(86735),a=e(85893),s=function(){var m=(0,n.useRef)();return(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Button,{onClick:function(){(0,t.clearSelectCache)("user"),d.ZP.info("\u7F13\u5B58\u6E05\u9664\u6210\u529F")},children:"\u6E05\u9664\u7F13\u5B58"}),(0,a.jsx)(t.Button,{type:"primary",style:{marginLeft:"10px"},onClick:function(){var _;return(_=m.current)===null||_===void 0?void 0:_.openModal("new")},children:"\u6253\u5F00\u5F39\u7A97"}),(0,a.jsx)(t.ModalForm,{innerRef:m,columns:[{title:"\u4EBA\u5458\u6240\u6709 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)",renderFormItem:function(){return(0,a.jsx)(u.BusinessSelect,{type:"user"})}}]})]})};r.default=s},23679:function(c,r,e){e.r(r);var d=e(5574),n=e.n(d),t=e(42075),u=e(67294),a=e(86735),s=e(85893),i=function(){var E=(0,u.useState)(),_=n()(E,2),B=_[0],O=_[1],M=(0,u.useState)(),I=n()(M,2),D=I[0],y=I[1],F=(0,u.useState)(),P=n()(F,2),j=P[0],x=P[1],C=(0,u.useState)(),f=n()(C,2),L=f[0],S=f[1];return(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(a.BusinessSelect,{style:{width:"120px"},value:B,type:"user",onLoad:function(l){var o;O((o=l[0])===null||o===void 0?void 0:o.id)}}),(0,s.jsx)(a.BusinessSelect,{style:{width:"120px"},type:"user",value:D,queryParams:{type:1},onLoad:function(l){var o;y((o=l[0])===null||o===void 0?void 0:o.id)}}),(0,s.jsx)(a.BusinessSelect,{style:{width:"120px"},type:"brand",value:j,onLoad:function(l){var o;x((o=l[0])===null||o===void 0?void 0:o.id)}}),(0,s.jsx)(a.BusinessSelect,{style:{width:"120px"},type:"brand",labelInValue:!0,value:L,onLoad:function(l){var o=l[0];S({label:o.name,value:o.id})}})]})};r.default=i},80873:function(c,r,e){e.r(r);var d=e(15634),n=e(86735),t=e(85893),u=function(){return(0,t.jsx)(d.SchemaForm,{grid:!0,colProps:{span:8},onFinish:function(i){return console.log({values:i})},autoFocusFirstInput:!1,columns:[{title:"\u989C\u8272",dataIndex:"color",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"color"})}},{title:"\u989C\u82722",dataIndex:"color2",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"color"})}},{title:"\u989C\u82723",dataIndex:"color3",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"color"})}}]})};r.default=u},66937:function(c,r,e){e.r(r);var d=e(15634),n=e(86735),t=e(85893),u=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(d.SchemaForm,{grid:!0,colProps:{span:8},autoFocusFirstInput:!1,columns:[{title:"\u4EBA\u5458\u6240\u6709",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"user"})}},{title:"\u4EBA\u5458A",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"user",queryParams:{type:1}})}},{title:"\u4EBA\u5458B",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"user",queryParams:{type:2}})}}]})})};r.default=u},38384:function(c,r,e){e.r(r);var d=e(15634),n=e(86735),t=e(85893),u=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(d.SchemaForm,{grid:!0,colProps:{span:8},autoFocusFirstInput:!1,columns:[{title:"\u5206\u9875\u67E5\u8BE2",renderFormItem:function(){return(0,t.jsx)(n.BusinessSelect,{type:"brand"})}}]})})};r.default=u}}]);
