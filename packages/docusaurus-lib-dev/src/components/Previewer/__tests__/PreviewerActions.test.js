/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const PreviewerActions = require('../components/PreviewerActions').default;

describe('PreviewerActions Component', () => {
  const mockDependencies = [
    {
      type: 'FILE',
      resolvedSource: './component.tsx',
      ext: 'tsx',
      value: 'const Component = () => <div>Component</div>;',
    },
    {
      type: 'FILE',
      resolvedSource: './styles.css',
      ext: 'css',
      value: '.component { color: red; }',
    },
  ];

  test('renders toggle button', () => {
    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
      }),
    );

    expect(screen.getByTitle('展开代码')).toBeInTheDocument();
  });

  test('toggles code visibility', () => {
    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
      }),
    );

    const toggleButton = screen.getByTitle('展开代码');
    fireEvent.click(toggleButton);

    expect(screen.getByTitle('收起代码')).toBeInTheDocument();
    expect(screen.getByText('Component')).toBeInTheDocument();
  });

  test('shows file tabs for multiple files', () => {
    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
        defaultShowCode: true,
      }),
    );

    expect(screen.getByText('component.tsx')).toBeInTheDocument();
    expect(screen.getByText('styles.css')).toBeInTheDocument();
  });

  test('switches between file tabs', () => {
    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
        defaultShowCode: true,
      }),
    );

    // Initially shows first file
    expect(screen.getByText('Component')).toBeInTheDocument();

    // Click on CSS tab
    fireEvent.click(screen.getByText('styles.css'));

    // Should show CSS content
    expect(screen.getByText('.component { color: red; }')).toBeInTheDocument();
  });

  test('calls onToggleCode callback', () => {
    const mockOnToggleCode = jest.fn();

    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
        onToggleCode: mockOnToggleCode,
      }),
    );

    const toggleButton = screen.getByTitle('展开代码');
    fireEvent.click(toggleButton);

    expect(mockOnToggleCode).toHaveBeenCalledWith(true);
  });

  test('calls onFileChange callback', () => {
    const mockOnFileChange = jest.fn();

    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mockDependencies,
        defaultShowCode: true,
        onFileChange: mockOnFileChange,
      }),
    );

    fireEvent.click(screen.getByText('styles.css'));

    expect(mockOnFileChange).toHaveBeenCalledWith(1);
  });

  test('handles single file without tabs', () => {
    const singleDependency = [mockDependencies[0]];

    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: singleDependency,
        defaultShowCode: true,
      }),
    );

    // Should not show tabs for single file
    expect(screen.queryByText('component.tsx')).not.toBeInTheDocument();
    // But should show the code
    expect(screen.getByText('Component')).toBeInTheDocument();
  });

  test('filters FILE type dependencies only', () => {
    const mixedDependencies = [
      ...mockDependencies,
      {
        type: 'NPM',
        resolvedSource: 'react',
        ext: 'js',
        value: 'npm package',
      },
    ];

    render(
      React.createElement(PreviewerActions, {
        id: 'test',
        dependencies: mixedDependencies,
        defaultShowCode: true,
      }),
    );

    // Should only show FILE dependencies
    expect(screen.getByText('component.tsx')).toBeInTheDocument();
    expect(screen.getByText('styles.css')).toBeInTheDocument();
    expect(screen.queryByText('react')).not.toBeInTheDocument();
  });
});
