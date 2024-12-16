"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[197],{45595:function(_,t,n){n.r(t),n.d(t,{demos:function(){return l}});var d=n(15009),a=n.n(d),u=n(99289),s=n.n(u),o=n(67294),p=n(83567),m=n(95650),r=n(15634),l={"linkbutton-demo-basic":{component:o.memo(o.lazy(function(){return n.e(587).then(n.bind(n,55424))})),asset:{type:"BLOCK",id:"linkbutton-demo-basic",refAtomIds:["LinkButton"],dependencies:{"index.tsx":{type:"FILE",value:n(847).Z},antd:{type:"NPM",value:"5.22.4"},"react-admin-kit":{type:"NPM",value:"0.5.7"}},entry:"index.tsx"},context:{antd:m,"react-admin-kit":r},renderOpts:{compile:function(){var c=s()(a()().mark(function E(){var i,B=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,B));case 3:case"end":return e.stop()}},E)}));function v(){return c.apply(this,arguments)}return v}()}}}},8987:function(_,t,n){n.r(t),n.d(t,{texts:function(){return a}});var d=n(83567);const a=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u4E0E Antd Button \u4E0D\u540C\u7684\u662F\u53BB\u6389\u4E86 padding, \u56FA\u5B9A\u9AD8\u5EA6\u4EE5\u53CA\u767D\u8272\u7684\u5E95\u8272, \u8BA9\u5176\u53EF\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u80CC\u666F\u5E95\u8272, \u540C\u65F6\u8868\u73B0\u66F4\u52A0\u7D27\u51D1. \u9002\u7528\u4E8E\u8868\u683C\u7684\u64CD\u4F5C\u5217\u7B49\u7A7A\u95F4\u4E0D\u5BBD\u88D5\u7684\u5730\u65B9. \u8BE5\u7EC4\u4EF6\u540C\u6837\u6709",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:"\u5C5E\u6027.",paraId:0,tocIndex:0}]},847:function(_,t){t.Z=`import { Space } from 'antd';
import { LinkButton } from 'react-admin-kit';

const Basic = () => {
  return (
    <div style={{ backgroundColor: '#e6f4ff', padding: '10px' }}>
      <Space size={'middle'}>
        <LinkButton>\u7F16\u8F91</LinkButton>
        <LinkButton loading>\u7F16\u8F91</LinkButton>
        <LinkButton disabled>\u7F16\u8F91</LinkButton>
        <LinkButton danger>\u5220\u9664</LinkButton>
      </Space>
    </div>
  );
};

export default Basic;
`}}]);
