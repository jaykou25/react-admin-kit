import resultObj from '@site/.docusaurus-previewer-cache/result.json';
import { demos } from '@site/.docusaurus-previewer-cache/demos';
import React, { createElement } from 'react';

const Previewer = (props: any) => {
  console.log('src', props.src);
  const { src } = props;

  const info = resultObj[src] || {};

  const demo = demos[src];

  const demoNode = demo ? createElement(demo) : null;

  console.log('info', info);

  return (
    <div>
      <div>previewer 测试</div>
      {/* 展示组件 */}
      <div>组件:</div>
      {demoNode}

      {/* 展示源源码码 */}
      <div>源码:</div>
      <pre style={{ color: 'black' }}>{info.sourceCode}</pre>
    </div>
  );
};

export default Previewer;
