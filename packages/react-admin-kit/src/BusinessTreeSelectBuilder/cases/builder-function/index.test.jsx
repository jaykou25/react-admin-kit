/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import BusinessTreeSelectBuilder, { clearTreeSelectCache } from '../../index';

describe('BusinessTreeSelectBuilder Function', () => {
  const mockApi = jest.fn().mockResolvedValue([{ id: 1, name: 'Test' }]);

  it('creates a BusinessSelect component with basic config', () => {
    const BusinessTreeSelect = BusinessTreeSelectBuilder({
      apis: [
        {
          type: 'test',
          api: mockApi,
        },
      ],
    });

    expect(typeof BusinessTreeSelect).toBe('function');
  });

  it('creates a BusinessTreeSelect component with default props', () => {
    const BusinessTreeSelect = BusinessTreeSelectBuilder({
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

    expect(typeof BusinessTreeSelect).toBe('function');
  });

  it('exports clearSelectCache function', () => {
    expect(typeof clearTreeSelectCache).toBe('function');
  });
});
