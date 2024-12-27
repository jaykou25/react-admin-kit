"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[461],{14361:function(d,n,t){var a;t.r(n),t.d(n,{demos:function(){return c}});var _=t(15009),i=t.n(_),r=t(99289),m=t.n(r),o=t(67294),y=t(4497),u=t(95650),l=t(15634),c={"button-demo-basic":{component:o.memo(o.lazy(function(){return t.e(570).then(t.bind(t,5811))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:t(31816).Z},antd:{type:"NPM",value:"5.22.4"},react:{type:"NPM",value:"18.3.1"},"react-admin-kit":{type:"NPM",value:"0.5.8"}},entry:"index.tsx"},context:{antd:u,react:a||(a=t.t(o,2)),"react-admin-kit":l},renderOpts:{compile:function(){var v=m()(i()().mark(function p(){var s,B=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,B));case 3:case"end":return e.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},73120:function(d,n,t){t.r(n),t.d(n,{texts:function(){return _}});var a=t(4497);const _=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:" \u5C5E\u6027, \u7528\u4E8E\u66F4\u65B9\u4FBF\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF. \u9002\u7528\u4E8E\u6BD4\u5982\u6309\u94AE\u6743\u9650\u7B49\u573A\u666F.",paraId:0,tocIndex:0}]},31816:function(d,n){n.Z=`import { Space } from 'antd';
import { useState } from 'react';
import { Button } from 'react-admin-kit';

const Basic = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>\u5207\u6362</Button>

      <div style={{ marginTop: '20px' }}>
        <Space>
          <Button visible={visible} type="primary">
            \u6743\u9650\u6309\u94AE
          </Button>
          <Button visible={() => visible} danger type="primary">
            \u6743\u9650\u6309\u94AE2
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Basic;
`}}]);
