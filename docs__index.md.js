(self["webpackChunkreact_admin_kit"]=self["webpackChunkreact_admin_kit"]||[]).push([[935],{35956:function(e,n,t){"use strict";t.r(n);var a=t(67294),l=t(96089),r=t(65659),o=a.memo((e=>{e.demos;return a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"\u7b80\u4ecb"},a.createElement(l.AnchorLink,{to:"#\u7b80\u4ecb","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u7b80\u4ecb"),a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u5957\u7ec4\u4ef6\u5e93"},a.createElement(l.AnchorLink,{to:"#\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u5957\u7ec4\u4ef6\u5e93","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u5957\u7ec4\u4ef6\u5e93"),a.createElement("p",null,"\u6216\u8005\u8bf4\u5df2\u7ecf\u6709\u4e86 ProComponent \u4e3a\u4ec0\u4e48\u8fd8\u8981\u6709\u8fd9\u5957 ReactAdminKit(RAK)?"),a.createElement("p",null,"\u5bf9\u4e8e\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf(\u7b80\u79f0 admin \u7cfb\u7edf), ProComponent \u7684",a.createElement("code",null,"ProLayout"),", ",a.createElement("code",null,"ProTable"),"\u7b49\u7ec4\u4ef6\u5df2\u7ecf\u6210\u4e3a\u4e86\u4e00\u4e2a\u5178\u8303, \u5b83\u4eec\u6781\u5927\u7684\u65b9\u4fbf\u4e86\u6211\u4eec\u524d\u7aef\u5f00\u53d1\u8005."),a.createElement("p",null,"\u7136\u800c, ProComponent \u8fd8\u662f\u5b58\u5728\u7740\u4e00\u4e9b\u95ee\u9898, \u6216\u8005\u8bf4\u5b83\u603b\u662f\u8fbe\u4e0d\u5230\u50cf Antd \u4e00\u6837\u7684\u4f7f\u7528\u4f53\u9a8c. \u7a76\u5176\u539f\u56e0, \u5bf9\u6211\u800c\u8a00, \u662f\u5728\u6587\u6863\u7684\u9605\u8bfb\u548c\u7ec4\u4ef6\u7684\u9009\u62e9\u4e0a\u9700\u8981\u8f83\u591a\u7684\u65f6\u95f4\u6210\u672c..."),a.createElement("p",null,"\u6211\u4eec\u53ea\u60f3\u628a\u89c6\u89d2\u805a\u7126\u5728\u4e24\u4e2a\u70b9\u4e0a, \u8868\u683c(Table)\u548c\u8868\u5355(Form), \u4e5f\u662f admin \u7cfb\u7edf\u4e2d\u4f7f\u7528\u6700\u591a\u7684\u9875\u9762\u7ed3\u6784, \u4ee5 schema \u4e3a\u6838\u5fc3\u628a Table \u548c Form \u4e32\u8054\u8d77\u6765. \u5e76\u4ee5\u6b64\u884d\u751f\u51fa\u4e00\u4e9b\u5176\u5b83\u7684\u7ec4\u4ef6."),a.createElement("p",null,"\u5982\u679c\u4f60\u662f ProComponent \u7528\u6237, \u90a3\u5927\u90e8\u5206\u7684 api \u90fd\u53ef\u4ee5\u900f\u4f20\u7ed9 RAK. \u5982\u679c\u4f60\u4e4b\u524d\u672a\u4f7f\u7528\u8fc7 ProComponent, \u90a3\u4e5f\u5b8c\u5168\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 RAK \u7684\u7528\u4f8b\u548c\u6587\u6863\u6765\u5f00\u59cb\u4f7f\u7528, \u6e10\u8fd1\u5f0f\u7684\u4f7f\u7528\u5176\u5b83\u7684 api."),a.createElement("h3",{id:"\u5982\u4f55\u4f7f\u7528"},a.createElement(l.AnchorLink,{to:"#\u5982\u4f55\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u4f7f\u7528"),a.createElement(r.Z,{code:"$ yarn add react-admin-kit",lang:"bash"}),a.createElement("h4",{id:"\u5b9a\u4e49-schema"},a.createElement(l.AnchorLink,{to:"#\u5b9a\u4e49-schema","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5b9a\u4e49 Schema"),a.createElement(r.Z,{code:"const columns = [\n  {\n    title: '\u59d3\u540d',\n    dataIndex: 'name',\n  },\n  {\n    title: '\u6027\u522b',\n    dataIndex: 'sex',\n    valueType: 'select',\n    fieldProps: { options: ['\u7537', '\u5973'] },\n  },\n];",lang:"js"}),a.createElement("h4",{id:"\u751f\u6210\u8868\u5355"},a.createElement(l.AnchorLink,{to:"#\u751f\u6210\u8868\u5355","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u751f\u6210\u8868\u5355"),a.createElement(r.Z,{code:"import { SchemaForm } from 'react-admin-kit';\n\n// \u5177\u4f53\u8bf7\u53c2\u8003\u5404\u7ec4\u4ef6\u6587\u6863\nconst Demo = () => {\n  return <SchemaForm columns={columns} onFinish={onFinish} />;\n};",lang:"js"}),a.createElement("h4",{id:"\u751f\u6210\u8868\u683c"},a.createElement(l.AnchorLink,{to:"#\u751f\u6210\u8868\u683c","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u751f\u6210\u8868\u683c"),a.createElement(r.Z,{code:"import { ProTable } from 'react-admin-kit';\n\n// \u5177\u4f53\u8bf7\u53c2\u8003\u5404\u7ec4\u4ef6\u6587\u6863\nconst Demo = () => {\n  return <ProTable columns={columns} />;\n};",lang:"js"}),a.createElement("h3",{id:"\u6838\u5fc3-schema-\u4ecb\u7ecd"},a.createElement(l.AnchorLink,{to:"#\u6838\u5fc3-schema-\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u6838\u5fc3 Schema \u4ecb\u7ecd"),a.createElement("p",null,"RAK \u7684\u6838\u5fc3\u662f Schema, \u7528 Schema \u53ef\u4ee5\u751f\u6210\u8868\u5355(Form), \u4e5f\u53ef\u4ee5\u751f\u6210\u8868\u683c(Table). \u751a\u81f3\u540c\u4e00\u4e2a Schema \u5373\u4f1a\u88ab\u7528\u5728\u8868\u5355\u573a\u666f\u4e5f\u4f1a\u88ab\u7528\u5728\u8868\u683c\u573a\u666f(ProTable)."),a.createElement("p",null,"\u5728\u4e0d\u540c\u7684\u573a\u666f\u4e0b, Schema \u7684 api \u4f1a\u7a0d\u6709\u4e0d\u540c. \u4ee5\u4e0b\u5217\u51fa\u4e00\u4e9b\u5e38\u7528\u7684\u533a\u522b."),a.createElement("h4",{id:"\u8868\u5355\u573a\u666fform"},a.createElement(l.AnchorLink,{to:"#\u8868\u5355\u573a\u666fform","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u573a\u666f(Form)"),a.createElement(r.Z,{code:"{\n  title: '\u90e8\u95e8',\n  dataIndex: 'dept',\n\n  // \u6839\u636e\u4e0d\u540c\u7684valueType\u751f\u6210\u4e0d\u540c\u7684\u8868\u5355\u63a7\u4ef6.\n  valueType: 'select',\n\n  // valueType\u66f4\u591a\u53ef\u9009\u7684\u503c\u53ef\u53c2\u89c1(https://procomponents.ant.design/components/schema/#api)\n\n  // \u5982\u679cvalueType\u4e3aselect, checkbox, radio\u7b49\u7c7b\u578b, \u9009\u9879\u53ef\u4ee5\u901a\u8fc7fieldProps\u4f20\u8fdb\u53bb\n  fieldProps: {\n    options: [\n      {label: '\u9009\u9879A', value: 'A'},\n      {label: '\u9009\u9879B', value: 'B'},\n    ]\n  }\n\n  // fieldProps\u8fd8\u53ef\u4ee5\u7ed9\u8868\u5355\u63a7\u4ef6\u4f20\u5165\u5176\u5b83\u5c5e\u6027\n  fieldProps: (form) =>  ({\n    style: {width: '100%'},\n    placeholder: '\u8bf7\u9009\u62e9\u90e8\u95e8'\n    onChange: (val) => {\n      console.log({val})\n    }\n  }),\n\n  // formItemProps\u662f\u4f20\u7ed9formItem\u7684\u5c5e\u6027, \u6bd4\u5982\u662f\u5426\u5fc5\u9009\n  formItemProps: {\n    rules: [\n      {\n        required: true\n      }\n    ]\n  },\n\n  // \u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6\n  renderFormItem: () => {\n    return <Select option=[] />\n  }\n\n  // \ud83d\udc49readonly\u6a21\u5f0f\u4e0b\u8868\u5355\u9879\u7684\u663e\u793a\u8d70\u7684render\u65b9\u6cd5\u800c\u4e0d\u662frenderFormItem\n  readonly: true;\n  render: (text, {mode}) => {\n    return text\n  }\n}",lang:"js"}),a.createElement("h4",{id:"\u8868\u683c\u573a\u666ftable"},a.createElement(l.AnchorLink,{to:"#\u8868\u683c\u573a\u666ftable","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u8868\u683c\u573a\u666f(Table)"),a.createElement(r.Z,{code:"{\n  title: '\u90e8\u95e8',\n  dataIndex: 'dept',\n\n  // valueType\u8ddf\u8868\u5355\u573a\u666f\u7684\u4e00\u81f4\n  valueType: 'select',\n\n  // renderText\u7528\u4e8e\u81ea\u5b9a\u4e49\u8868\u683c\u4e0a\u7684\u6587\u5b57\u663e\u793a; renderText\u4f1a\u4fdd\u7559\u7701\u7565\u53f7, \u56fe\u6807\u7b49\n  renderText: (text, record) => {\n    return text\n  }\n\n  // render\u53ef\u4ee5\u5b8c\u5168\u81ea\u5b9a\u4e49\u8868\u683c\u4e0a\u7684\u663e\u793a; \u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2aReactNode, \u5b83\u91cc\u9762\u5305\u542b\u4e86\u7701\u7565\u53f7, \u590d\u5236\u56fe\u6807\u7b49\u5185\u5bb9.\n  render: (dom, record) => {\n    return dom\n  }\n}",lang:"js"}),a.createElement("p",null,"\u6240\u4ee5\u6838\u5fc3\u7ec4\u4ef6\u7684\u63cf\u8ff0\u5c31\u5f88\u7b80\u5355:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("code",null,"SchemaForm"),": \u7528 Schema \u751f\u6210 Form"),a.createElement("li",null,a.createElement("code",null,"ModalForm"),": Modal + SchemaForm"),a.createElement("li",null,a.createElement("code",null,"ProTable"),": Antd ProTable + ModalForm")),a.createElement("p",null,"\u6240\u4ee5\u5728",a.createElement("code",null,"ModalForm"),"\u4e2d\u53ef\u4ee5\u900f\u4f20",a.createElement("code",null,"SchemaForm"),"\u7684\u5c5e\u6027. \u5728",a.createElement("code",null,"ProTable"),"\u4e2d\u53ef\u4ee5\u900f\u4f20",a.createElement("code",null,"Modal"),"\u548c",a.createElement("code",null,"SchemaForm"),"\u7684\u5c5e\u6027.")))}));n["default"]=e=>{var n=a.useContext(l.context),t=n.demos;return a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(o,{demos:t})}}}]);