import useIsBrowser from '@docusaurus/useIsBrowser';
import resultObj from '@site/.docusaurus-previewer-cache/result.json';
import { demos } from '@site/.docusaurus-previewer-cache/demos';
import React, { Suspense } from 'react';
import classnames from 'classnames';

import './index.less';
import PreviewerActions from '../PreviewerActions';

const Previewer = (props: any) => {
  const { src, inline } = props;
  const info = resultObj[src] || {};

  const Demo = demos[src];

  const demoNode = Demo ? (
    <Suspense
      fallback={
        <div style={{ textAlign: 'center', color: '#777' }}>loading...</div>
      }
    >
      <Demo />
    </Suspense>
  ) : null;

  if (inline) {
    return demoNode;
  }

  return <PluginPreviewer {...props} {...info} demoNode={demoNode} />;
};

const PluginPreviewer = (props: any) => {
  const { demoNode, id } = props;
  const isBrowser = useIsBrowser();

  const link = `#${id}`;
  const hash = isBrowser ? window.location.hash : '';

  return (
    <div
      id={id}
      className={classnames('dumi-default-previewer', props.className)}
      style={props.style}
      data-active={hash === link || undefined}
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
