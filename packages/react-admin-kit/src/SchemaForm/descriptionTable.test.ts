/**
 * SchemaForm Description Table 测试用例
 */
import {
  extractSpanFromClassName,
  scanFormItems,
  calculateTableLayout,
  buildTableElement,
  FormItemInfo,
} from './descriptionTable';

describe('SchemaForm Description Table', () => {
  describe('extractSpanFromClassName', () => {
    it('should extract span value from className', () => {
      expect(extractSpanFromClassName('ant-col ant-col-8 ant-form-item')).toBe(
        8,
      );
      expect(extractSpanFromClassName('ant-col-12')).toBe(12);
      expect(extractSpanFromClassName('ant-col-24')).toBe(24);
    });

    it('should return default value for invalid className', () => {
      expect(extractSpanFromClassName('')).toBe(8);
      expect(extractSpanFromClassName('invalid-class')).toBe(8);
      expect(extractSpanFromClassName('ant-col-0')).toBe(8);
      expect(extractSpanFromClassName('ant-col-25')).toBe(8);
    });

    it('should handle edge cases', () => {
      expect(extractSpanFromClassName(null as any)).toBe(8);
      expect(extractSpanFromClassName(undefined as any)).toBe(8);
    });
  });

  describe('calculateTableLayout', () => {
    it('should calculate single row layout', () => {
      const items: FormItemInfo[] = [
        {
          label: 'Field 1',
          content: 'Value 1',
          span: 8,
          element: document.createElement('div'),
        },
        {
          label: 'Field 2',
          content: 'Value 2',
          span: 8,
          element: document.createElement('div'),
        },
      ];

      const rows = calculateTableLayout(items);
      expect(rows).toHaveLength(1);
      expect(rows[0].items).toHaveLength(2);
      expect(rows[0].totalSpan).toBe(16);
    });

    it('should calculate multiple row layout', () => {
      const items: FormItemInfo[] = [
        {
          label: 'Field 1',
          content: 'Value 1',
          span: 12,
          element: document.createElement('div'),
        },
        {
          label: 'Field 2',
          content: 'Value 2',
          span: 12,
          element: document.createElement('div'),
        },
        {
          label: 'Field 3',
          content: 'Value 3',
          span: 8,
          element: document.createElement('div'),
        },
      ];

      const rows = calculateTableLayout(items);
      expect(rows).toHaveLength(2);
      expect(rows[0].items).toHaveLength(2);
      expect(rows[0].totalSpan).toBe(24);
      expect(rows[1].items).toHaveLength(1);
      expect(rows[1].totalSpan).toBe(8);
    });

    it('should filter out empty items', () => {
      const items: FormItemInfo[] = [
        {
          label: 'Field 1',
          content: 'Value 1',
          span: 8,
          element: document.createElement('div'),
        },
        {
          label: '',
          content: '',
          span: 8,
          element: document.createElement('div'),
          isEmpty: true,
        },
        {
          label: 'Field 2',
          content: 'Value 2',
          span: 8,
          element: document.createElement('div'),
        },
      ];

      const rows = calculateTableLayout(items);
      expect(rows).toHaveLength(1);
      expect(rows[0].items).toHaveLength(2);
    });
  });

  describe('buildTableElement', () => {
    it('should build table element with correct structure', () => {
      const rows = [
        {
          items: [
            {
              label: 'Field 1',
              content: 'Value 1',
              span: 8,
              element: document.createElement('div'),
            },
          ],
          totalSpan: 8,
          index: 0,
        },
      ];

      const table = buildTableElement(rows);
      expect(table.tagName).toBe('TABLE');
      expect(table.querySelector('tbody')).toBeTruthy();
      expect(table.querySelectorAll('tr')).toHaveLength(1);
      expect(table.querySelectorAll('th')).toHaveLength(1);
      expect(table.querySelectorAll('td')).toHaveLength(1);
    });

    it('should apply custom styles and options', () => {
      const rows = [
        {
          items: [
            {
              label: 'Field 1',
              content: 'Value 1',
              span: 8,
              element: document.createElement('div'),
            },
          ],
          totalSpan: 8,
          index: 0,
        },
      ];

      const table = buildTableElement(rows, {
        className: 'custom-table',
        bordered: false,
      });

      expect(table.className).toContain('custom-table');
    });
  });
});
