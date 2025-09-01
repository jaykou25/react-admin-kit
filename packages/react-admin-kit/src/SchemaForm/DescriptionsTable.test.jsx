import React from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionsTable from './DescriptionsTable';

// Mock Antd Descriptions component
jest.mock('antd', () => ({
  Descriptions: jest.fn(({ items }) => (
    <div data-testid="descriptions">
      {items?.map((item, index) => (
        <div key={index} data-testid="description-item">
          <span data-testid="label">{item.label}</span>
          <span
            data-testid="content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      ))}
    </div>
  )),
  Grid: {
    useBreakpoint: jest.fn(() => ({})),
  },
}));

// Mock the scanFormItems utility
jest.mock('./utils/descriptions-table', () => ({
  scanFormItems: jest.fn(),
  mergeEmptyItems: jest.fn((items) => items),
}));

describe('DescriptionsTable', () => {
  const mockFormContainerRef = {
    current: document.createElement('div'),
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock scanFormItems to return sample form items
    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([
      {
        label: 'Username',
        content: '<span>john_doe</span>',
        span: 8,
        element: document.createElement('div'),
        isEmpty: false,
      },
      {
        label: 'Email',
        content: '<span>john@example.com</span>',
        span: 8,
        element: document.createElement('div'),
        isEmpty: false,
      },
    ]);
  });

  test('should render descriptions with form items', () => {
    render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
      />,
    );

    // Check that Descriptions component was called with correct items
    const { Descriptions } = require('antd');
    expect(Descriptions).toHaveBeenCalled();

    const lastCall = Descriptions.mock.calls[0][0];
    expect(lastCall.items).toHaveLength(2);
    expect(lastCall.items[0].label).toBe('Username');
    expect(lastCall.items[1].label).toBe('Email');
    expect(lastCall.column).toBe(3); // 24 / 8 = 3
  });

  test('should return null when no form items are found', () => {
    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([]);

    const { container } = render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  test('formContainerRef 无值时返回空', () => {
    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([]);

    const { container } = render(
      <DescriptionsTable
        formContainerRef={{ current: null }}
        grid={false}
        embed={false}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  test('should handle responsive breakpoints', () => {
    const { useBreakpoint } = require('antd').Grid;
    useBreakpoint.mockReturnValue({ md: true });

    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([
      {
        label: 'Test Field',
        content: '<span>Test Value</span>',
        span: { xs: 24, md: 12 },
        element: document.createElement('div'),
        isEmpty: false,
      },
    ]);

    render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
      />,
    );

    const { Descriptions } = require('antd');
    const lastCall = Descriptions.mock.calls[0][0];
    expect(lastCall.column).toBe(2); // 24 / 12 = 2
  });

  test('响应式有继承特性', () => {
    const { useBreakpoint } = require('antd').Grid;
    useBreakpoint.mockReturnValue({
      xs: false,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: false,
    });

    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([
      {
        label: 'Test Field',
        content: '<span>Test Value</span>',
        span: { xs: 24, md: 12 },
        element: document.createElement('div'),
        isEmpty: false,
      },
    ]);

    render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
      />,
    );

    const { Descriptions } = require('antd');
    const lastCall = Descriptions.mock.calls[0][0];
    expect(lastCall.column).toBe(2); // 24 / 12 = 2
  });

  test('响应式匹配不到', () => {
    const { useBreakpoint } = require('antd').Grid;
    useBreakpoint.mockReturnValue({
      xs: false,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: false,
    });

    const { scanFormItems } = require('./utils/descriptions-table');
    scanFormItems.mockReturnValue([
      {
        label: 'Test Field',
        content: '<span>Test Value</span>',
        span: { xxl: 12 },
        element: document.createElement('div'),
        isEmpty: false,
      },
    ]);

    render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
      />,
    );

    const { Descriptions } = require('antd');
    const lastCall = Descriptions.mock.calls[0][0];
    expect(lastCall.column).toBe(1); // 24 / 24 = 1
  });

  test('should pass through descriptionsProps', () => {
    const descriptionsProps = {
      title: 'User Information',
      bordered: true,
      layout: 'vertical',
    };

    render(
      <DescriptionsTable
        formContainerRef={mockFormContainerRef}
        grid={false}
        embed={false}
        descriptionsProps={descriptionsProps}
      />,
    );

    const { Descriptions } = require('antd');
    const lastCall = Descriptions.mock.calls[0][0];

    expect(lastCall.title).toBe('User Information');
    expect(lastCall.bordered).toBe(true);
    expect(lastCall.layout).toBe('vertical');
  });
});
