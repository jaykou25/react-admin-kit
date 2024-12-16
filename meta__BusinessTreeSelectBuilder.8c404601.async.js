"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[488],{91941:function(c,n,e){var s;e.r(n),e.d(n,{demos:function(){return x}});var u=e(15009),a=e.n(u),r=e(99289),o=e.n(r),d=e(67294),B=e(46323),m=e(15634),i=e(97579),T=e(95650),I=e(66675),x={"businesstreeselectbuilder-demo-basic":{component:d.memo(d.lazy(function(){return e.e(438).then(e.bind(e,30916))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-basic",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(57818).Z},"react-admin-kit":{type:"NPM",value:"0.5.6"},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"./query.ts":i,"react-admin-kit":m,"/home/jaygao/code/react-admin-kit-v0.4/src/BusinessTreeSelectBuilder/demos/basic/query.ts":i},renderOpts:{compile:function(){var p=o()(a()().mark(function v(){var l,f=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,f));case 3:case"end":return t.stop()}},v)}));function y(){return p.apply(this,arguments)}return y}()}},"businesstreeselectbuilder-demo-clearcache":{component:d.memo(d.lazy(function(){return e.e(438).then(e.bind(e,37381))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-clearcache",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(62453).Z},antd:{type:"NPM",value:"5.22.4"},react:{type:"NPM",value:"18.3.1"},"react-admin-kit":{type:"NPM",value:"0.5.6"},"../basic.tsx":{type:"FILE",value:e(57818).Z},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"../basic.tsx":I,"./query.ts":i,antd:T,react:s||(s=e.t(d,2)),"react-admin-kit":m,"/home/jaygao/code/react-admin-kit-v0.4/src/BusinessTreeSelectBuilder/demos/basic/index.tsx":I,"/home/jaygao/code/react-admin-kit-v0.4/src/BusinessTreeSelectBuilder/demos/basic/query.ts":i},renderOpts:{compile:function(){var p=o()(a()().mark(function v(){var l,f=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,f));case 3:case"end":return t.stop()}},v)}));function y(){return p.apply(this,arguments)}return y}()}},"businesstreeselectbuilder-demo-onload":{component:d.memo(d.lazy(function(){return e.e(438).then(e.bind(e,11435))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-onload",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(63438).Z},antd:{type:"NPM",value:"5.22.4"},react:{type:"NPM",value:"18.3.1"},"../basic/index.tsx":{type:"FILE",value:e(57818).Z},"react-admin-kit":{type:"NPM",value:"0.5.6"},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"../basic/index.tsx":I,"./query.ts":i,antd:T,react:s||(s=e.t(d,2)),"/home/jaygao/code/react-admin-kit-v0.4/src/BusinessTreeSelectBuilder/demos/basic/index.tsx":I,"react-admin-kit":m,"/home/jaygao/code/react-admin-kit-v0.4/src/BusinessTreeSelectBuilder/demos/basic/query.ts":i},renderOpts:{compile:function(){var p=o()(a()().mark(function v(){var l,f=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,f));case 3:case"end":return t.stop()}},v)}));function y(){return p.apply(this,arguments)}return y}()}}}},66675:function(c,n,e){e.r(n),e.d(n,{BusinessTreeSelect:function(){return r}});var s=e(15634),u=e(97579),a=e(85893),r=(0,s.BusinessTreeSelectBuilder)({apis:[{api:u.queryCompany,type:"company"},{api:u.queryDept,type:"dept"}]}),o=function(){return(0,a.jsx)(s.SchemaForm,{grid:!0,colProps:{span:8},onFinish:function(m){return console.log({values:m})},autoFocusFirstInput:!1,columns:[{title:"\u516C\u53F8",dataIndex:"company",renderFormItem:function(){return(0,a.jsx)(r,{type:"company"})}},{valueType:"dependency",name:["company"],columns:function(m){var i=m.company;return i?[{title:"\u90E8\u95E8",dataIndex:"dept",renderFormItem:function(){return(0,a.jsx)(r,{queryParams:{id:i},type:"dept"})}}]:[{title:"\u90E8\u95E8",dataIndex:"dept",fieldProps:{disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u516C\u53F8"}}]}}]})};n.default=o},97579:function(c,n,e){e.r(n),e.d(n,{queryCompany:function(){return s},queryDept:function(){return u}});var s=function(){return new Promise(function(r){console.log("queryOrg only once"),setTimeout(function(){r([{name:"\u96C6\u56E2\u516C\u53F8",id:1,children:[{name:"\u4E1A\u52A1\u5B50\u516C\u53F8A",id:2},{name:"\u4E1A\u52A1\u5B50\u516C\u53F8B",id:3}]},{name:"\u5176\u5B83\u516C\u53F8",id:-1}])},1200)})},u=function(r){return new Promise(function(o){console.log("queryDept",r),setTimeout(function(){r.id===1?o([{name:"\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4",id:1},{name:"\u96C6\u56E2 - \u9500\u552E\u90E8",id:2,children:[{name:"\u96C6\u56E2 - \u9500\u552E\u90E81",id:3},{name:"\u96C6\u56E2 - \u9500\u552E\u90E82",id:4}]}]):r.id===2||r.id===3?o([{name:"\u5B50\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82",id:3}]}]):o([{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82",id:3}]},{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82",id:-1}])},1e3)})}},44979:function(c,n,e){e.r(n),e.d(n,{texts:function(){return u}});var s=e(46323);const u=[{value:"\u4E0E BusinessSelect \u4E00\u6837, \u53EF\u4EE5\u5C06\u7CFB\u7EDF\u91CC\u6240\u6709\u7684\u6811\u4E0B\u62C9\u90FD\u5B9A\u4E49\u5230\u4E00\u8D77. \u53EA\u9700\u4E00\u6B21\u5B9A\u4E49, \u5168\u9875\u9762\u90FD\u80FD\u65B9\u4FBF\u4F7F\u7528.",paraId:0,tocIndex:0},{value:"\u5148\u521D\u59CB\u5316\u7EC4\u4EF6.",paraId:1,tocIndex:0},{value:`import { BusinessTreeSelectBuilder } from 'react-admin-kit';

// \u5B9A\u4E49 type \u7C7B\u578B
type TreeSelectType = 'org';

const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>(
  {
    apis: [
      {
        type: 'org',
        api: queryOrgFunction,
      },
    ],
  })

// \u5728\u9875\u9762\u4E2D\u4F7F\u7528
<BusinessTreeSelect type="org" />;
`,paraId:2,tocIndex:0},{value:"\u8BE5\u4F8B\u5B50\u4E2D\u90E8\u95E8\u4F1A\u6839\u636E\u516C\u53F8\u7EA7\u8054",paraId:3,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"BusinessSelect",paraId:4,tocIndex:1},{value:"\u4E00\u6837, \u540C\u6837\u652F\u6301",paraId:4,tocIndex:1},{value:"queryParams",paraId:4,tocIndex:1},{value:", \u53EF\u4EE5\u4F20\u5165\u8BF7\u6C42\u53C2\u6570.",paraId:4,tocIndex:1},{value:"\u6570\u636E\u540C\u6837\u4F1A\u9ED8\u8BA4\u7F13\u5B58.",paraId:5,tocIndex:1},{value:"BusinessTreeSelect",paraId:6,tocIndex:1},{value:"\u53EF\u4EE5\u900F\u4F20 Antd TreeSelect \u7684\u6240\u6709\u5C5E\u6027.",paraId:6,tocIndex:1},{value:"\u4F7F\u7528",paraId:7,tocIndex:2},{value:"clearTreeSelectCache(type: string)",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u6E05\u9664\u7F13\u5B58. type \u4E0D\u4F20\u6E05\u9664\u6240\u6709\u7C7B\u578B\u7684\u7F13\u5B58.",paraId:7,tocIndex:2},{value:"\u5F53\u4E0B\u62C9\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1 onLoad \u4E8B\u4EF6. \u8FD9\u4E2A\u4E8B\u4EF6\u5BF9\u4E8E\u67D0\u4E9B\u573A\u666F\u975E\u5E38\u6709\u7528, \u4F8B\u5982\u53EF\u4EE5\u7528\u5B83\u5B9E\u73B0\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u6761\u6570\u636E.",paraId:8,tocIndex:3}]},57818:function(c,n){n.Z=`import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';
import { queryCompany, queryDept } from './query';

// \u5B9A\u4E49 type \u7C7B\u578B, \u65B9\u4FBF ts \u63D0\u793A
type TreeSelectType = 'company' | 'dept';

export const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
    {
      api: queryDept,
      type: 'dept',
    },
  ],
});

const Basic = () => {
  return (
    <SchemaForm
      grid
      colProps={{ span: 8 }}
      onFinish={(values) => console.log({ values })}
      autoFocusFirstInput={false}
      columns={[
        {
          title: '\u516C\u53F8',
          dataIndex: 'company',
          renderFormItem: () => <BusinessTreeSelect type="company" />,
        },
        {
          valueType: 'dependency',
          name: ['company'],
          columns: ({ company }) => {
            if (company) {
              return [
                {
                  title: '\u90E8\u95E8',
                  dataIndex: 'dept',
                  renderFormItem: () => (
                    <BusinessTreeSelect
                      queryParams={{ id: company }}
                      type="dept"
                    />
                  ),
                },
              ];
            } else {
              return [
                {
                  title: '\u90E8\u95E8',
                  dataIndex: 'dept',
                  fieldProps: { disabled: true, placeholder: '\u8BF7\u9009\u62E9\u516C\u53F8' },
                },
              ];
            }
          },
        },
      ]}
    />
  );
};

export default Basic;
`},83272:function(c,n){n.Z=`export const queryCompany = () => {
  return new Promise((resolve) => {
    console.log('queryOrg only once');
    setTimeout(() => {
      resolve([
        {
          name: '\u96C6\u56E2\u516C\u53F8',
          id: 1,
          children: [
            {
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8A',
              id: 2,
            },
            {
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8B',
              id: 3,
            },
          ],
        },
        { name: '\u5176\u5B83\u516C\u53F8', id: -1 },
      ]);
    }, 1200);
  });
};

export const queryDept = (params): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryDept', params);
    setTimeout(() => {
      if (params.id === 1) {
        resolve([
          { name: '\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4', id: 1 },
          {
            name: '\u96C6\u56E2 - \u9500\u552E\u90E8',
            id: 2,
            children: [
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E81', id: 3 },
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E82', id: 4 },
            ],
          },
        ]);
      } else if (params.id === 2 || params.id === 3) {
        resolve([
          {
            name: '\u5B50\u516C\u53F8 - \u90E8\u95E81',
            id: 1,
            children: [
              {
                name: '\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81',
                id: 2,
              },
              {
                name: '\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82',
                id: 3,
              },
            ],
          },
        ]);
      } else {
        resolve([
          {
            name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81',
            id: 1,
            children: [
              {
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81',
                id: 2,
              },
              {
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82',
                id: 3,
              },
            ],
          },
          { name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82', id: -1 },
        ]);
      }
    }, 1000);
  });
};
`},62453:function(c,n){n.Z=`import { message } from 'antd';
import { useRef } from 'react';
import { Button, ModalForm, clearTreeSelectCache } from 'react-admin-kit';
import { BusinessTreeSelect } from '../basic';

const ClearCacheDemo = () => {
  const innerRef = useRef<any>();

  return (
    <div>
      <Button
        onClick={() => {
          clearTreeSelectCache('company');
          message.info('\u7F13\u5B58\u6E05\u9664\u6210\u529F');
        }}
      >
        \u6E05\u9664\u7F13\u5B58
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => innerRef.current?.openModal('new')}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>

      <ModalForm
        innerRef={innerRef}
        onFinish={(values) => console.log({ values })}
        columns={[
          {
            title: '\u516C\u53F8 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)',
            dataIndex: 'company',
            renderFormItem: () => <BusinessTreeSelect type="company" />,
          },
        ]}
      />
    </div>
  );
};

export default ClearCacheDemo;
`},63438:function(c,n){n.Z=`import { Space } from 'antd';
import { useState } from 'react';
import { BusinessTreeSelect } from '../basic/index';

const OnLoad = () => {
  const [companyId, setCompanyId] = useState();

  return (
    <Space>
      <BusinessTreeSelect
        style={{ width: '150px' }}
        type="company"
        value={companyId}
        onLoad={(options) => {
          console.log('tree onload options', options);
          setCompanyId(options[0]?.id);
        }}
      />
    </Space>
  );
};

export default OnLoad;
`}}]);
