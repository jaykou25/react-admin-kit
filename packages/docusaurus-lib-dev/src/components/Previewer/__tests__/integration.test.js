/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { Previewer } = require('../../index');

// 简单的测试组件
const TestComponent = ({ message = 'Hello World' }) =>
  React.createElement('div', { 'data-testid': 'test-component' }, message);

const testComponentInfo = {
  id: 'integration-test',
  sourceCode: 'const TestComponent = ({ message }) => <div>{message}</div>;',
  dependencies: [
    {
      type: 'FILE',
      resolvedSource: './TestComponent.tsx',
      ext: 'tsx',
      value:
        'const TestComponent = ({ message = "Hello World" }) => <div>{message}</div>;',
    },
  ],
};

describe('Previewer Integration Tests', () => {
  test('完整的组件集成测试', () => {
    render(
      React.createElement(Previewer, {
        component: TestComponent,
        componentInfo: testComponentInfo,
        title: 'Integration Test',
        description: 'Testing full component integration',
      }),
    );

    // 验证组件渲染
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    // 验证标题和描述
    expect(screen.getByText('Integration Test')).toBeInTheDocument();
    expect(
      screen.getByText('Testing full component integration'),
    ).toBeInTheDocument();

    // 验证代码展开功能
    const toggleButton = screen.getByTitle('展开代码');
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);

    // 验证代码内容显示
    expect(screen.getByText('TestComponent.tsx')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('内联模式集成测试', () => {
    render(
      React.createElement(Previewer, {
        component: TestComponent,
        componentInfo: { ...testComponentInfo, inline: true },
      }),
    );

    // 验证内联模式渲染
    const component = screen.getByTestId('test-component');
    expect(component).toBeInTheDocument();
    expect(component.closest('.previewer-inline')).toBeInTheDocument();

    // 内联模式不应该有操作按钮
    expect(screen.queryByTitle('展开代码')).not.toBeInTheDocument();
  });

  test('错误边界集成测试', () => {
    const ErrorComponent = () => {
      throw new Error('Integration test error');
    };

    render(
      React.createElement(Previewer, {
        component: ErrorComponent,
        componentInfo: testComponentInfo,
      }),
    );

    // 验证错误处理
    expect(screen.getByText(/组件渲染出错/)).toBeInTheDocument();
    expect(screen.getByText(/Integration test error/)).toBeInTheDocument();
    expect(screen.getByText('重试')).toBeInTheDocument();
  });

  test('Props 验证集成测试', () => {
    // 测试缺少必需 props
    render(
      React.createElement(Previewer, {
        component: null,
        componentInfo: testComponentInfo,
      }),
    );

    expect(
      screen.getByText(/错误: 缺少必需的 component 属性/),
    ).toBeInTheDocument();
  });

  test('复制功能集成测试', async () => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(() => Promise.resolve()),
      },
    });

    render(
      React.createElement(Previewer, {
        component: TestComponent,
        componentInfo: testComponentInfo,
      }),
    );

    // 展开代码
    fireEvent.click(screen.getByTitle('展开代码'));

    // 点击复制按钮
    const copyButton = screen.getByTitle('复制代码');
    fireEvent.click(copyButton);

    // 验证复制功能调用
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      testComponentInfo.dependencies[0].value,
    );
  });

  test('多文件切换集成测试', () => {
    const multiFileInfo = {
      ...testComponentInfo,
      dependencies: [
        {
          type: 'FILE',
          resolvedSource: './Component.tsx',
          ext: 'tsx',
          value: 'const Component = () => <div>Component</div>;',
        },
        {
          type: 'FILE',
          resolvedSource: './styles.css',
          ext: 'css',
          value: '.component { color: red; }',
        },
      ],
    };

    render(
      React.createElement(Previewer, {
        component: TestComponent,
        componentInfo: multiFileInfo,
      }),
    );

    // 展开代码
    fireEvent.click(screen.getByTitle('展开代码'));

    // 验证文件标签
    expect(screen.getByText('Component.tsx')).toBeInTheDocument();
    expect(screen.getByText('styles.css')).toBeInTheDocument();

    // 默认显示第一个文件
    expect(screen.getByText('const Component = () =>')).toBeInTheDocument();

    // 切换到 CSS 文件
    fireEvent.click(screen.getByText('styles.css'));
    expect(screen.getByText('.component { color: red; }')).toBeInTheDocument();
  });
});
