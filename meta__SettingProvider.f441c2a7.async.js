"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[3657],{36601:function(f,e,n){var i;n.r(e),n.d(e,{demos:function(){return g}});var d=n(15009),o=n.n(d),u=n(99289),a=n.n(u),r=n(67294),E=n(94923),l=n(15634),_=n(43756),v=n(70427),s=n(20420),P=n(47166),g={"settingprovider-demo-table":{component:r.memo(r.lazy(function(){return n.e(3809).then(n.bind(n,79478))})),asset:{type:"BLOCK",id:"settingprovider-demo-table",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(74957).Z},"react-admin-kit":{type:"NPM",value:"0.5.10"}},entry:"index.tsx"},context:{"react-admin-kit":l,"@/ProTable/demos/basic":_},renderOpts:{compile:function(){var m=a()(o()().mark(function h(){var c,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(c=t.sent).default.apply(c,M));case 3:case"end":return t.stop()}},h)}));function p(){return m.apply(this,arguments)}return p}()}},"settingprovider-demo-modalform":{component:r.memo(r.lazy(function(){return n.e(3809).then(n.bind(n,77604))})),asset:{type:"BLOCK",id:"settingprovider-demo-modalform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(17121).Z},"react-admin-kit":{type:"NPM",value:"0.5.10"}},entry:"index.tsx"},context:{"@/ModalForm/demos/basic":v,"react-admin-kit":l},renderOpts:{compile:function(){var m=a()(o()().mark(function h(){var c,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(c=t.sent).default.apply(c,M));case 3:case"end":return t.stop()}},h)}));function p(){return m.apply(this,arguments)}return p}()}},"settingprovider-demo-schemaform":{component:r.memo(r.lazy(function(){return n.e(3809).then(n.bind(n,12578))})),asset:{type:"BLOCK",id:"settingprovider-demo-schemaform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(73774).Z},"react-admin-kit":{type:"NPM",value:"0.5.10"}},entry:"index.tsx"},context:{"@/SchemaForm/demos/basic":s,"react-admin-kit":l},renderOpts:{compile:function(){var m=a()(o()().mark(function h(){var c,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(c=t.sent).default.apply(c,M));case 3:case"end":return t.stop()}},h)}));function p(){return m.apply(this,arguments)}return p}()}},"settingprovider-demo-formupload":{component:r.memo(r.lazy(function(){return n.e(3809).then(n.bind(n,893))})),asset:{type:"BLOCK",id:"settingprovider-demo-formupload",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(81537).Z},"react-admin-kit":{type:"NPM",value:"0.5.10"},"../../../FormUpload/demos/basic.tsx":{type:"FILE",value:n(53230).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"../../../FormUpload/demos/basic.tsx":P,"react-admin-kit":l,"/home/jaygao/code/react-admin-kit-v0.4/src/FormUpload/demos/basic/index.tsx":P,react:i||(i=n.t(r,2))},renderOpts:{compile:function(){var m=a()(o()().mark(function h(){var c,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(c=t.sent).default.apply(c,M));case 3:case"end":return t.stop()}},h)}));function p(){return m.apply(this,arguments)}return p}()}}}},47166:function(f,e,n){n.r(e);var i=n(67294),d=n(15634),o=n(85893),u=function(){var r=(0,i.useRef)(null);return(0,o.jsx)(d.SettingProvider,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(l){return{id:l==null?void 0:l.data.id}}},children:(0,o.jsx)(d.SchemaForm,{formRef:r,columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,o.jsx)(d.FormUpload,{children:function(_){var v=_.loading;return(0,o.jsx)(d.LinkButton,{children:v?"\u4E0A\u4F20\u4E2D":"\u4E0A\u4F20\u9644\u4EF6"})}})}}],submitter:!0,onFinish:console.log})})};e.default=u},44458:function(f,e,n){n.r(e),n.d(e,{columns:function(){return i}});var i=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",required:!0}]},70427:function(f,e,n){n.r(e);var i=n(5574),d=n.n(i),o=n(67294),u=n(15634),a=n(44458),r=n(85893),E=function(){var _=(0,o.useState)(!1),v=d()(_,2),s=v[0],P=v[1],g=function(p){console.log({values:p})};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{textAlign:"start"},children:(0,r.jsx)(u.Button,{type:"primary",onClick:function(){return P(!0)},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,r.jsx)(u.ModalForm,{title:"\u57FA\u672C\u8868\u5355",open:s,onCancel:function(){return P(!1)},onFinish:g,columns:a.columns})]})};e.default=E},48186:function(f,e,n){n.r(e),n.d(e,{delelteRecord:function(){return d},mockRequest:function(){return i}});var i=function(){return new Promise(function(u){setTimeout(function(){return u({data:[{id:1,name:"Jack",phone:133,isMember:"1",grade:"\u4E00\u7EA7"},{id:2,name:"Tom",phone:155,isMember:"0"}],success:!0,total:2})},1e3)})},d=function(u){return new Promise(function(a){console.log("delete record",u),setTimeout(function(){return a(!0)},500)})}},70113:function(f,e,n){n.r(e),n.d(e,{getColumns:function(){return o}});var i=n(15634),d=n(85893),o=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"time",valueType:"dateRange",transform:function(r){return{startTime:r[0],endTime:r[1]}}},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(r,E,l,_,v){return[(0,d.jsx)(i.LinkButton,{onClick:function(){var P;return(P=v.current)===null||P===void 0?void 0:P.openModal("edit",E)},children:"\u7F16\u8F91"},1)]}}]}},43756:function(f,e,n){n.r(e),n.d(e,{FORM_TYPE_MAP:function(){return l}});var i=n(28036),d=n(45360),o=n(67294),u=n(15634),a=n(48186),r=n(70113),E=n(85893),l={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},_=function(){var s=(0,o.useRef)(),P=(0,o.useRef)();return(0,E.jsx)("div",{children:(0,E.jsx)(u.ProTable,{name:"\u7528\u6237",columns:(0,r.getColumns)(),request:a.mockRequest,bordered:!0,innerRef:s,actionRef:P,toolbar:{actions:[(0,E.jsx)(i.ZP,{type:"primary",onClick:function(){var m;(m=s.current)===null||m===void 0||m.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:a.delelteRecord,onFinish:function(m,p){return console.log({values:m}),new Promise(function(h){setTimeout(function(){var c;h(!0),d.ZP.success(l[p]+"\u6210\u529F"),(c=P.current)===null||c===void 0||c.reload()},1e3)})}})})};e.default=_},50380:function(f,e,n){n.r(e),n.d(e,{columns:function(){return i}});var i=[{title:"\u7528\u6237\u540D",dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},formItemProps:{rules:[{required:!0}]}},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}}]},20420:function(f,e,n){n.r(e);var i=n(67294),d=n(15634),o=n(28036),u=n(50380),a=n(85893),r=function(){var l=(0,i.useRef)(),_=function(s){console.log({values:s})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(d.SchemaForm,{onFinish:_,formRef:l,columns:u.columns,autoFocusFirstInput:!1,initialValues:{sex:"\u7537"}}),(0,a.jsxs)("div",{style:{textAlign:"end"},children:[(0,a.jsx)(o.ZP,{style:{marginRight:"10px"},onClick:function(){var s;return(s=l.current)===null||s===void 0?void 0:s.resetFields()},children:"\u91CD\u7F6E"}),(0,a.jsx)(o.ZP,{type:"primary",onClick:function(){var s;return(s=l.current)===null||s===void 0?void 0:s.submit()},children:"\u63D0\u4EA4"})]})]})};e.default=r},89523:function(f,e,n){n.r(e),n.d(e,{texts:function(){return d}});var i=n(94923);const d=[{value:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u9ED8\u8BA4\u8BBE\u7F6E, \u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548.",paraId:0,tocIndex:0},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ProTable \u7684\u9ED8\u8BA4\u5927\u5C0F\u4E3A middle; search \u533A\u57DF\u7684\u8868\u5355\u9ED8\u8BA4\u5C55\u5F00; \u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40\u9ED8\u8BA4\u4E00\u884C\u4E24\u5217; \u5220\u9664\u5F39\u6846\u9ED8\u8BA4\u4E3A Modal.confirm, \u5220\u9664\u6587\u5B57\u9ED8\u8BA4\u4E3A\u5173\u95ED.",paraId:1,tocIndex:1},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ModalForm \u7684\u9ED8\u8BA4\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40\u4E3A\u6C34\u5E73\u6A21\u5F0F.",paraId:2,tocIndex:2},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E SchemaForm \u7684\u9ED8\u8BA4\u9A8C\u8BC1\u63D0\u793A.",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u7ED9 FormUpload \u7EC4\u4EF6\u9ED8\u8BA4\u5E26\u4E0A token.",paraId:4,tocIndex:4}]},53230:function(f,e){e.Z=`import { useRef } from 'react';
import {
  FormUpload,
  LinkButton,
  SchemaForm,
  SettingProvider,
} from 'react-admin-kit';

const Basic = () => {
  const formRef = useRef<any>(null);
  return (
    <SettingProvider
      formUploadSetting={{
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',
        headers: { Authorization: 'myToken' },
        responseToFileList: (res) => ({ id: res?.data.id }), // \u5C06\u540E\u53F0\u8FD4\u56DE\u503C\u5408\u5E76\u8FDBfile\u5BF9\u8C61
      }}
    >
      <SchemaForm
        formRef={formRef}
        columns={[
          {
            title: '\u9644\u4EF6',
            dataIndex: 'files',
            renderFormItem: () => (
              <FormUpload>
                {({ loading }) => (
                  <LinkButton>{loading ? '\u4E0A\u4F20\u4E2D' : '\u4E0A\u4F20\u9644\u4EF6'}</LinkButton>
                )}
              </FormUpload>
            ),
          },
        ]}
        submitter
        onFinish={console.log}
      />
    </SettingProvider>
  );
};

export default Basic;
`},81537:function(f,e){e.Z=`import { SettingProvider } from 'react-admin-kit';
import Example from '../../../FormUpload/demos/basic';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      formUploadSetting={{ headers: { authorization: 'authorization-text' } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
`},17121:function(f,e){e.Z=`import Example from '@/ModalForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const ModalDemo = () => {
  return (
    <SettingProvider
      modalFormSetting={{
        formProps: { layout: 'horizontal', labelCol: { span: 4 } },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default ModalDemo;
`},73774:function(f,e){e.Z=`import Example from '@/SchemaForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const SchemaFormDemo = () => {
  return (
    <SettingProvider
      schemaFormSetting={{ validateMessages: { required: '\${label}\u4E3A\u5FC5\u586B\u9879' } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default SchemaFormDemo;
`},74957:function(f,e){e.Z=`import { SettingProvider } from 'react-admin-kit';

import Example from '@/ProTable/demos/basic';

const Basic = () => {
  return (
    <SettingProvider
      proTableSetting={{
        size: 'middle',
        searchConfig: { defaultCollapsed: false },
        modalProps: { width: 680 },
        formProps: {
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        },
        confirmModalType: 'modal',
        confirmModalProps: { title: '\u5168\u5C40\u5B9A\u5236\u7684title' },
        tableAlertOption: {
          deleteProps: {
            btnText: '\u6279\u91CF\u5173\u95ED',
            title: (n) => \`\u786E\u8BA4\u5173\u95ED\${n}\u6761\u5417?\`,
          },
        },
        optionColumnSpaceProps: {
          size: 'small',
        },
        options: { density: false, reload: true, fullScreen: true },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default Basic;
`}}]);
