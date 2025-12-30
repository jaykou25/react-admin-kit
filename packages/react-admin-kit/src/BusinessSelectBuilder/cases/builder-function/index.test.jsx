/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import BusinessSelectBuilder, {
  clearSelectCache,
  BizApi,
  BusinessSelectSelf,
} from '../../index';

// Mock the utils functions
jest.mock('react-admin-kit/utils', () => ({
  delGlobal: jest.fn(),
  getGlobal: jest.fn(() => []),
  setGlobal: jest.fn(),
}));

describe('BusinessSelectBuilder Function', () => {
  const mockApi = jest.fn().mockResolvedValue({
    data: [{ id: 1, name: 'Test' }],
    total: 1,
  });

  it('creates a BusinessSelect component with basic config', () => {
    const BusinessSelect = BusinessSelectBuilder({
      apis: [
        {
          type: 'test',
          api: mockApi,
        },
      ],
    });

    expect(typeof BusinessSelect).toBe('function');
  });

  it('creates a BusinessSelect component with pagination config', () => {
    const BusinessSelect = BusinessSelectBuilder({
      apis: [
        {
          type: 'test-pagination',
          api: mockApi,
          pagination: true,
        },
      ],
    });

    expect(typeof BusinessSelect).toBe('function');
  });

  it('creates a BusinessSelect component with default props', () => {
    const BusinessSelect = BusinessSelectBuilder({
      apis: [
        {
          type: 'test-default',
          api: mockApi,
          defaultProps: {
            placeholder: 'Test placeholder',
          },
        },
      ],
      defaultProps: {
        size: 'large',
      },
    });

    expect(typeof BusinessSelect).toBe('function');
  });

  it('exports clearSelectCache function', () => {
    expect(typeof clearSelectCache).toBe('function');
  });

  it('exports BizApi component for documentation', () => {
    expect(typeof BizApi).toBe('function');
  });

  it('exports BusinessSelectSelf component for documentation', () => {
    expect(typeof BusinessSelectSelf).toBe('function');
  });
});
