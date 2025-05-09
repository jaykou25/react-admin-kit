import { useState, type FC } from 'react';
import Tabs from '../Tab';
import CodeBlock from '@theme/CodeBlock';
import { translate } from '@docusaurus/Translate';
import classNames from 'classnames';
import './index.less';
import SourceCode from '../SourceCode';
import RcTooltip from 'rc-tooltip';
import type { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';

export interface TooltipProps extends Omit<RcTooltipProps, 'overlay'> {
  placement?: 'top' | 'bottom';
  title?: React.ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { title, placement = 'top', ...rest } = props;
  return (
    <RcTooltip
      prefixCls="dumi-theme-default-tooltip"
      placement={placement}
      {...rest}
      overlay={title}
    />
  );
};

const IconCode: FC = () => (
  <svg viewBox="0 0 200 117">
    <path d="M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z" />
  </svg>
);

const IconCodeExpand: FC = () => (
  <svg viewBox="0 0 200 117">
    <path d="M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z" />
  </svg>
);

const PreviewerActions = (props: any) => {
  const [showCode, setShowCode] = useState(
    props.forceShowCode || props.defaultShowCode,
  );
  const [activeKey, setActiveKey] = useState(0);

  const files = (props.dependencies || []).filter(
    ({ type }) => type === 'FILE',
  );
  const isSingleFile = files.length === 1;

  return (
    <>
      <div className="dumi-default-previewer-actions">
        <button
          className="dumi-default-previewer-action-btn"
          type="button"
          onClick={() => setShowCode((prev) => !prev)}
          data-dumi-tooltip={translate({
            id: `previewer.actions.code.${showCode ? 'shrink' : 'expand'}`,
          })}
        >
          {showCode ? <IconCodeExpand /> : <IconCode />}
        </button>
      </div>
      {showCode && (
        <>
          <div className="dumi-default-previewer-sources">
            <Tabs
              className={classNames(
                'dumi-default-previewer-tabs',
                isSingleFile && 'dumi-default-previewer-tabs-single',
              )}
              defaultActiveKey={String(activeKey)}
              onChange={(key) => setActiveKey(Number(key))}
              items={files.map(({ resolvedSource, ext }, i) => ({
                key: String(i),
                // remove leading ./ prefix
                label: resolvedSource.replace(/^\.\//, ''),
                children: (
                  <SourceCode lang={ext}>
                    {files[activeKey].value.trim()}
                  </SourceCode>
                ),
              }))}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PreviewerActions;
