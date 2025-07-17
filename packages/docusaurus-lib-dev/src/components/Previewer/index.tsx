import React, { type ReactNode } from 'react';
import PreviewerActions from './components/PreviewerActions';
import classnames from 'classnames';

/**
 * 错误边界组件
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: (error: Error) => void },
  { hasError: boolean; error?: Error }
> {
  constructor(props: {
    children: React.ReactNode;
    onError?: (error: Error) => void;
  }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(
      'Previewer Error Boundary caught an error:',
      error,
      errorInfo,
    );
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="previewer-error">
          <p>组件渲染出错: {this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="previewer-retry-btn"
          >
            重试
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * 依赖文件信息
 */
export interface DependencyInfo {
  /** 依赖类型 */
  type: 'FILE' | 'NPM';
  source?: string;
  /** 文件路径或包名 */
  resolvedSource: string;
  /** 文件扩展名 */
  ext: string;
  /** 文件内容 */
  value: string;
}

/**
 * 组件信息
 */
export interface ComponentInfo {
  /** 组件唯一标识 */
  id: string;
  /** 源代码字符串 */
  sourceCode: string;
  /** 依赖文件信息 */
  dependencies?: DependencyInfo[];
  /** 是否为内联模式 */
  inline?: boolean;
}

/**
 * Previewer 组件属性
 */
export interface PreviewerProps {
  /** 要预览的 React 组件 */
  component: ReactNode;
  /** 组件相关信息 */
  componentInfo: ComponentInfo;
  /** 是否为内联模式，仅渲染组件本身 */
  inline?: boolean;
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 预览区域背景色 */
  background?: string;
  /** 标题 */
  title?: string;
  /** 描述信息 */
  description?: string;
  isBrowser: boolean;
  tooltipRender: (show: boolean) => string;
  colorMode: string;
}

/**
 * PreviewerActions 组件属性
 */
export interface PreviewerActionsProps {
  /** 依赖文件列表 */
  dependencies?: DependencyInfo[];
  /** 是否强制显示代码 */
  forceShowCode?: boolean;
  /** 默认是否显示代码 */
  defaultShowCode?: boolean;

  tooltipRender: (show: boolean) => string;
  colorMode: string;
}

/**
 * SourceCode 组件属性
 */
export interface SourceCodeProps {
  /** 代码内容 */
  children: string;
  /** 语言类型 */
  lang: string;
  /** 高亮行号 */
  highlightLines?: number[];
  /** 额外内容 */
  extra?: React.ReactNode;
  /** 标题 */
  title?: string;
}

/**
 * 错误展示组件属性
 */
export interface ErrorDisplayProps {
  error: Error;
  onRetry?: () => void;
  showRetry?: boolean;
}

const Previewer: React.FC<PreviewerProps> = (props) => {
  const {
    component: Component,
    componentInfo,
    inline,
    className,
    style,
    background,
    title,
    description,
    isBrowser,
  } = props;

  const link = `#${componentInfo.id}`;
  const hash = isBrowser ? window.location.hash : '';

  // Props 验证
  if (!Component) {
    console.error('Previewer: component prop is required');
    return (
      <div className="previewer-error">
        <p>错误: 缺少必需的 component 属性</p>
      </div>
    );
  }

  if (!componentInfo || !componentInfo.id) {
    console.error('Previewer: componentInfo with id is required');
    return (
      <div className="previewer-error">
        <p>错误: 缺少必需的 componentInfo 或 componentInfo.id</p>
      </div>
    );
  }

  // 判断是否为内联模式
  const isInlineMode = inline || componentInfo.inline;

  // 错误处理回调
  const handleError = (error: Error) => {
    console.error('Previewer component error:', error);
  };

  // 如果是内联模式，直接渲染组件
  if (isInlineMode) {
    return (
      <div style={style}>
        <ErrorBoundary onError={handleError}>{Component}</ErrorBoundary>
      </div>
    );
  }

  // 完整模式渲染
  return (
    <div
      id={componentInfo.id}
      className={classnames('dumi-default-previewer', className)}
      style={style}
      data-active={hash === link || undefined}
    >
      <div className="dumi-default-previewer-demo" style={{ background }}>
        <ErrorBoundary onError={handleError}>{Component}</ErrorBoundary>
      </div>

      <div className="dumi-default-previewer-meta">
        {title && (
          <div className="dumi-default-previewer-desc">
            <h5>
              <a href={link}>{title}</a>
            </h5>
            {description && (
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}
        <PreviewerActions
          colorMode={props.colorMode}
          tooltipRender={props.tooltipRender}
          dependencies={componentInfo.dependencies}
        />
      </div>
    </div>
  );
};

export default Previewer;
