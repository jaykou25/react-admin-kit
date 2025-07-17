/**
 * @jest-environment jsdom
 */

const React = require('react');
const {
  render,
  screen,
  fireEvent,
  waitFor,
} = require('@testing-library/react');
const SourceCode = require('../components/SourceCode').default;

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

describe('SourceCode Component', () => {
  const mockCode = `function hello() {
  console.log('Hello World');
}`;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders code content correctly', () => {
    render(
      React.createElement(SourceCode, {
        lang: 'javascript',
        children: mockCode,
      }),
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
    expect(screen.getByText('function hello() {')).toBeInTheDocument();
  });

  test('shows title when provided', () => {
    render(
      React.createElement(SourceCode, {
        lang: 'javascript',
        children: mockCode,
        title: 'Test Code',
      }),
    );

    expect(screen.getByText('Test Code')).toBeInTheDocument();
  });

  test('highlights specified lines', () => {
    render(
      React.createElement(SourceCode, {
        lang: 'javascript',
        children: mockCode,
        highlightLines: [1],
      }),
    );

    const highlightedLine = document.querySelector(
      '.source-code-line.highlighted',
    );
    expect(highlightedLine).toBeInTheDocument();
  });

  test('copy button works correctly', async () => {
    render(
      React.createElement(SourceCode, {
        lang: 'javascript',
        children: mockCode,
      }),
    );

    const copyButton = screen.getByTitle('复制代码');
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockCode);

    await waitFor(() => {
      expect(screen.getByTitle('已复制!')).toBeInTheDocument();
    });
  });

  test('processes shell commands correctly', () => {
    const shellCode = '$ npm install\n> git status';
    render(
      React.createElement(SourceCode, {
        lang: 'bash',
        children: shellCode,
      }),
    );

    // The component should process shell commands by removing $ and > prefixes
    expect(screen.getByText('npm install')).toBeInTheDocument();
    expect(screen.getByText('git status')).toBeInTheDocument();
  });

  test('renders extra content when provided', () => {
    const extraContent = React.createElement(
      'div',
      { 'data-testid': 'extra-content' },
      'Extra',
    );

    render(
      React.createElement(SourceCode, {
        lang: 'javascript',
        children: mockCode,
        extra: extraContent,
      }),
    );

    expect(screen.getByTestId('extra-content')).toBeInTheDocument();
  });
});
