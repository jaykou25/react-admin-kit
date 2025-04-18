import resultObj from '@site/.docusaurus-previewer-cache/result.json';
import { demos } from '@site/.docusaurus-previewer-cache/demos';
import { createElement } from 'react';
import classnames from 'classnames';

import './index.less';
import PreviewerActions from '../PreviewerActions';

const Previewer = (props: any) => {
  console.log('src', props.src);
  const { src } = props;

  const info = resultObj[src] || {};

  const demo = demos[src];

  const demoNode = demo ? createElement(demo) : null;

  console.log('info', info);

  return (
    <div
      className={classnames('dumi-default-previewer', props.className)}
      style={props.style}
    >
      <div
        className="dumi-default-previewer-demo"
        style={{ background: props.background }}
      >
        {demoNode}
      </div>

      <div className="dumi-default-previewer-meta">
        {props.title && (
          <div className="dumi-default-previewer-desc">
            <h5>
              <a href={link}>{props.title}</a>
            </h5>
            {props.description && (
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: props.description }}
              />
            )}
          </div>
        )}
        <PreviewerActions {...props} />
      </div>
    </div>
  );
};

export default Previewer;
