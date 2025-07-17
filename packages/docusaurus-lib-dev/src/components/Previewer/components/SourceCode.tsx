import classNames from 'classnames';
import { Highlight, type Language, themes } from 'prism-react-renderer';
import 'prism-themes/themes/prism-one-light.css';
import React, {
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

/**
 * define DSL which can be highlighted as similar language
 */
const SIMILAR_DSL: Record<string, Language> = {
  less: 'css',
  acss: 'css',
  axml: 'markup',
  vue: 'markup',
};

export interface ISourceCodeProps {
  children: string;
  lang: Language;
  highlightLines?: number[];
  extra?: ReactNode;
  textarea?: ReactNode;
  title?: string;
  themeConfig?: any;
  colorMode: string;
}

const IconCheck = () => (
  <svg viewBox="64 64 896 896" focusable="false">
    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
  </svg>
);

const IconCopy = () => (
  <svg viewBox="64 64 896 896" focusable="false">
    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
  </svg>
);

const SourceCode: FC<ISourceCodeProps> = (props) => {
  const {
    children = '',
    lang,
    highlightLines = [],
    themeConfig = {},
    colorMode = 'light',
    extra,
    textarea,
    title,
  } = props;

  const timer = useRef<number>();
  const [isCopied, setIsCopied] = useState(false);
  const [text, setText] = useState(children);

  useEffect(() => {
    const isShell = /shellscript|shell|bash|sh|zsh/.test(lang);
    if (isShell) {
      const text = children.replace(/^(\$|>)\s/gm, '');
      setText(text);
    } else {
      setText(children);
    }
  }, [lang, children]);

  const code = (
    <Highlight
      code={textarea ? children : children.trim()}
      language={SIMILAR_DSL[lang] || lang}
      theme={colorMode === 'light' ? themes.oneLight : themes.vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {title && <div className="code-title">{title}</div>}
          {tokens.map((line, i) => (
            <div
              key={String(i)}
              className={classNames('source-code-line', {
                highlighted: highlightLines.includes(i + 1),
                wrap: themeConfig.showLineNum,
              })}
            >
              {themeConfig.showLineNum && (
                <span className="token-line-num">{i + 1}</span>
              )}
              <div
                {...getLineProps({
                  line,
                  key: i,
                })}
                className={classNames({
                  'line-cell': themeConfig.showLineNum,
                })}
                key={i}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return (
    <div className="dumi-default-source-code">
      <CopyToClipboard
        text={text}
        onCopy={() => {
          setIsCopied(true);
          clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setIsCopied(false), 2000);
        }}
      >
        <button
          type="button"
          className="dumi-default-source-code-copy"
          data-copied={isCopied || undefined}
          title={isCopied ? '已复制!' : '复制代码'}
        >
          {isCopied ? <IconCheck /> : <IconCopy />}
        </button>
      </CopyToClipboard>
      {textarea ? (
        <div className="dumi-default-source-code-scroll-container">
          <div className="dumi-default-source-code-scroll-content">
            {code}
            {textarea}
          </div>
        </div>
      ) : (
        code
      )}
      {extra}
    </div>
  );
};

export default SourceCode;
