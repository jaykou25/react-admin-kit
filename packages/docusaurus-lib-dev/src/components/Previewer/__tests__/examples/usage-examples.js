/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const Previewer = require('../../index').default;
const BasicButton = require('./BasicButton').default;

// 示例组件信息
const basicButtonInfo = {
  id: 'basic-button-example',
  sourceCode: `import React from 'react';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const BasicButton: React.FC<BasicButtonProps> = ({ 
  children, 
  onClick, 
  type = 'primary',
  disabled = false 
}) => {
  // ... 组件实现
  return <button>{children}</button>;
};

export default BasicButton;`,
  dependencies: [
    {
      type: 'FILE',
      resolvedSource: './BasicButton.tsx',
      ext: 'tsx',
      value: `import React from 'react';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const BasicButton: React.FC<BasicButtonProps> = ({ 
  children, 
  onClick, 
  type = 'primary',
  disabled = false 
}) => {
  const baseStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    opacity: disabled ? 0.6 : 1,
  };

  const typeStyles = {
    primary: {
      backgroundColor: '#1890ff',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#f0f0f0',
      color: '#333',
    },
  };

  return (
    <button
      style={{ ...baseStyles, ...typeStyles[type] }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BasicButton;`,
    },
    {
      type: 'FILE',
      resolvedSource: './BasicButton.css',
      ext: 'css',
      value: `.basic-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.basic-button.primary {
  background-color: #1890ff;
  color: white;
}

.basic-button.secondary {
  background-color: #f0f0f0;
  color: #333;
}`,
    },
  ],
};

describe('Previewer Usage Examples', () => {
  test('内联模式示例', () => {
    const InlineButtonExample = () =>
      React.createElement(BasicButton, { type: 'primary' }, 'Inline Button');

    render(
      React.createElement(Previewer, {
        component: InlineButtonExample,
        componentInfo: { ...basicButtonInfo, inline: true },
      }),
    );

    expect(screen.getByText('Inline Button')).toBeInTheDocument();
    expect(
      screen.getByText('Inline Button').closest('.previewer-inline'),
    ).toBeInTheDocument();
  });

  test('完整模式示例', () => {
    const FullButtonExample = () =>
      React.createElement(
        BasicButton,
        { type: 'secondary' },
        'Full Mode Button',
      );

    render(
      React.createElement(Previewer, {
        component: FullButtonExample,
        componentInfo: basicButtonInfo,
        title: 'Basic Button Component',
        description:
          'A simple button component with different types and states',
      }),
    );

    expect(screen.getByText('Full Mode Button')).toBeInTheDocument();
    expect(screen.getByText('Basic Button Component')).toBeInTheDocument();
    expect(
      screen.getByText(
        'A simple button component with different types and states',
      ),
    ).toBeInTheDocument();
  });

  test('多文件示例', () => {
    const MultiFileExample = () =>
      React.createElement(BasicButton, { disabled: true }, 'Disabled Button');

    render(
      React.createElement(Previewer, {
        component: MultiFileExample,
        componentInfo: basicButtonInfo,
        title: 'Multi-file Example',
      }),
    );

    // 点击展开代码按钮
    const toggleButton = screen.getByTitle('展开代码');
    fireEvent.click(toggleButton);

    // 应该显示文件标签
    expect(screen.getByText('BasicButton.tsx')).toBeInTheDocument();
    expect(screen.getByText('BasicButton.css')).toBeInTheDocument();

    // 点击 CSS 文件标签
    fireEvent.click(screen.getByText('BasicButton.css'));

    // 应该显示 CSS 内容
    expect(screen.getByText('.basic-button {')).toBeInTheDocument();
  });

  test('自定义样式示例', () => {
    const CustomStyledExample = () =>
      React.createElement(BasicButton, { type: 'primary' }, 'Custom Styled');

    render(
      React.createElement(Previewer, {
        component: CustomStyledExample,
        componentInfo: basicButtonInfo,
        className: 'custom-previewer',
        style: { border: '2px solid red' },
        background: '#f5f5f5',
      }),
    );

    const previewerElement = document.getElementById(basicButtonInfo.id);
    expect(previewerElement).toHaveClass('previewer', 'custom-previewer');
    expect(previewerElement).toHaveStyle('border: 2px solid red');

    const demoArea = previewerElement.querySelector('.previewer-demo');
    expect(demoArea).toHaveStyle('background: #f5f5f5');
  });

  test('错误处理示例', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    render(
      React.createElement(Previewer, {
        component: ErrorComponent,
        componentInfo: basicButtonInfo,
        title: 'Error Handling Example',
      }),
    );

    expect(screen.getByText(/组件渲染出错/)).toBeInTheDocument();
    expect(screen.getByText('重试')).toBeInTheDocument();
  });

  test('交互功能验证', () => {
    let clickCount = 0;
    const InteractiveExample = () =>
      React.createElement(
        BasicButton,
        {
          onClick: () => {
            clickCount++;
          },
        },
        `Clicked ${clickCount} times`,
      );

    const { rerender } = render(
      React.createElement(Previewer, {
        component: InteractiveExample,
        componentInfo: basicButtonInfo,
        title: 'Interactive Example',
      }),
    );

    const button = screen.getByText('Clicked 0 times');
    fireEvent.click(button);

    // 重新渲染以反映状态变化
    rerender(
      React.createElement(Previewer, {
        component: InteractiveExample,
        componentInfo: basicButtonInfo,
        title: 'Interactive Example',
      }),
    );

    expect(clickCount).toBe(1);
  });
});
