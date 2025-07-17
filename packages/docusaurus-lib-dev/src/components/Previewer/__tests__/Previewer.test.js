/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const Previewer = require('../index').default;

// Mock 组件用于测试
const MockComponent = () =>
  React.createElement(
    'div',
    { 'data-testid': 'mock-component' },
    'Mock Component',
  );

const mockComponentInfo = {
  id: 'test-component',
  sourceCode: 'const Test = () => <div>Test</div>;',
  dependencies: [
    {
      type: 'FILE',
      resolvedSource: './test.tsx',
      ext: 'tsx',
      value: 'const Test = () => <div>Test</div>;',
    },
  ],
};

describe('Previewer Component', () => {
  test('renders component in inline mode', () => {
    render(
      React.createElement(Previewer, {
        component: MockComponent,
        componentInfo: { ...mockComponentInfo, inline: true },
      }),
    );

    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
    expect(
      screen.getByTestId('mock-component').closest('.previewer-inline'),
    ).toBeInTheDocument();
  });

  test('renders component in full mode', () => {
    render(
      React.createElement(Previewer, {
        component: MockComponent,
        componentInfo: mockComponentInfo,
      }),
    );

    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
    expect(document.getElementById('test-component')).toBeInTheDocument();
  });

  test('shows title and description when provided', () => {
    render(
      React.createElement(Previewer, {
        component: MockComponent,
        componentInfo: mockComponentInfo,
        title: 'Test Title',
        description: 'Test Description',
      }),
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('handles missing component prop', () => {
    render(
      React.createElement(Previewer, {
        component: null,
        componentInfo: mockComponentInfo,
      }),
    );

    expect(
      screen.getByText(/错误: 缺少必需的 component 属性/),
    ).toBeInTheDocument();
  });

  test('handles missing componentInfo', () => {
    render(
      React.createElement(Previewer, {
        component: MockComponent,
        componentInfo: null,
      }),
    );

    expect(
      screen.getByText(/错误: 缺少必需的 componentInfo/),
    ).toBeInTheDocument();
  });

  test('applies custom className and style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      React.createElement(Previewer, {
        component: MockComponent,
        componentInfo: mockComponentInfo,
        className: 'custom-class',
        style: customStyle,
      }),
    );

    const previewerElement = document.getElementById('test-component');
    expect(previewerElement).toHaveClass('previewer', 'custom-class');
    expect(previewerElement).toHaveStyle('background-color: red');
  });
});
