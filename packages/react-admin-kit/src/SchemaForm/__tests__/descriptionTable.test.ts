import {
  extractSpanFromClassName,
  scanFormItems,
  calculateTableLayout,
  buildTableElement,
  FormItemInfo,
  TableRow,
} from '../descriptionTable';

describe('extractSpanFromClassName', () => {
  it('should extract span value from valid className', () => {
    expect(extractSpanFromClassName('ant-col ant-col-8')).toBe(8);
    expect(extractSpanFromClassName('ant-col-12 ant-form-item')).toBe(12);
    expect(extractSpanFromClassName('some-class ant-col-24 other-class')).toBe(
      24,
    );
    expect(extractSpanFromClassName('ant-col-1')).toBe(1);
  });

  it('should return default value for invalid className', () => {
    expect(extractSpanFromClassName('')).toBe(8);
    expect(extractSpanFromClassName('no-span-class')).toBe(8);
    expect(extractSpanFromClassName('ant-col-invalid')).toBe(8);
    expect(extractSpanFromClassName('ant-col-')).toBe(8);
  });

  it('should return default value for out-of-range span values', () => {
    expect(extractSpanFromClassName('ant-col-0')).toBe(8);
    expect(extractSpanFromClassName('ant-col-25')).toBe(8);
    expect(extractSpanFromClassName('ant-col-100')).toBe(8);
    expect(extractSpanFromClassName('ant-col--1')).toBe(8);
  });

  it('should handle null or undefined input', () => {
    expect(extractSpanFromClassName(null as any)).toBe(8);
    expect(extractSpanFromClassName(undefined as any)).toBe(8);
  });

  it('should handle multiple ant-col classes and use the first valid one', () => {
    expect(extractSpanFromClassName('ant-col-6 ant-col-12')).toBe(6);
    expect(extractSpanFromClassName('ant-col-invalid ant-col-16')).toBe(16);
  });
});

/**
 * @jest-environment jsdom
 */

describe('scanFormItems', () => {
  let container: HTMLElement;

  beforeEach(() => {
    // 创建一个模拟的表单容器
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  });

  it('should scan and extract form items correctly', () => {
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-8">
            <div class="ant-form-item-label">
              <label>Name:</label>
            </div>
            <div class="ant-form-item-control">
              <span>John Doe</span>
            </div>
          </div>
          <div class="ant-col ant-col-12">
            <div class="ant-form-item-label">
              <label>Email</label>
            </div>
            <div class="ant-form-item-control">
              <span>john@example.com</span>
            </div>
          </div>
        </div>
      </form>
    `;

    const items = scanFormItems(container);

    expect(items).toHaveLength(2);
    expect(items[0]).toMatchObject({
      label: 'Name',
      content: '<span>John Doe</span>',
      span: 8,
      isEmpty: false,
    });
    expect(items[1]).toMatchObject({
      label: 'Email',
      content: '<span>john@example.com</span>',
      span: 12,
      isEmpty: false,
    });
  });

  it('should handle items without labels', () => {
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-6">
            <div class="ant-form-item-control">
              <span>Content without label</span>
            </div>
          </div>
        </div>
      </form>
    `;

    const items = scanFormItems(container);

    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      label: '',
      content: '<span>Content without label</span>',
      span: 6,
      isEmpty: false,
    });
  });

  it('should skip items without control elements', () => {
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-8">
            <div class="ant-form-item-label">
              <label>Label Only</label>
            </div>
          </div>
          <div class="ant-col ant-col-8">
            <div class="ant-form-item-control">
              <span>Valid Item</span>
            </div>
          </div>
        </div>
      </form>
    `;

    const items = scanFormItems(container);

    expect(items).toHaveLength(1);
    expect(items[0].content).toBe('<span>Valid Item</span>');
  });

  it('should identify empty items', () => {
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-8">
            <div class="ant-form-item-control">
              <span></span>
            </div>
          </div>
        </div>
      </form>
    `;

    const items = scanFormItems(container);

    expect(items).toHaveLength(1);
    expect(items[0].isEmpty).toBe(true);
  });

  it('should handle empty container gracefully', () => {
    container.innerHTML = '<div>No form here</div>';

    const items = scanFormItems(container);

    expect(items).toHaveLength(0);
  });

  it('should handle nested structures', () => {
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-24">
            <div class="ant-form-item-label">
              <label>Complex Field</label>
            </div>
            <div class="ant-form-item-control">
              <div class="nested-content">
                <span>Nested</span>
                <strong>Content</strong>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    const items = scanFormItems(container);

    expect(items).toHaveLength(1);
    expect(items[0].content).toContain('Nested');
    expect(items[0].content).toContain('Content');
    expect(items[0].span).toBe(24);
  });
});

describe('calculateTableLayout', () => {
  const createMockItem = (
    label: string,
    span: number,
    isEmpty = false,
  ): FormItemInfo => ({
    label,
    content: `Content for ${label}`,
    span,
    element: document.createElement('div'),
    isEmpty,
  });

  it('should create single row for items that fit within 24 span', () => {
    const items = [
      createMockItem('Item1', 8),
      createMockItem('Item2', 8),
      createMockItem('Item3', 8),
    ];

    const rows = calculateTableLayout(items);

    expect(rows).toHaveLength(1);
    expect(rows[0].items).toHaveLength(3);
    expect(rows[0].totalSpan).toBe(24);
    expect(rows[0].index).toBe(0);
  });

  it('should create multiple rows when span exceeds 24', () => {
    const items = [
      createMockItem('Item1', 12),
      createMockItem('Item2', 12),
      createMockItem('Item3', 8),
    ];

    const rows = calculateTableLayout(items);

    expect(rows).toHaveLength(2);
    expect(rows[0].items).toHaveLength(2);
    expect(rows[0].totalSpan).toBe(24);
    expect(rows[1].items).toHaveLength(1);
    expect(rows[1].totalSpan).toBe(8);
  });

  it('should handle single large item that exceeds 24 span', () => {
    const items = [
      createMockItem('Item1', 8),
      createMockItem('Item2', 24), // This will force a new row
      createMockItem('Item3', 8),
    ];

    const rows = calculateTableLayout(items);

    expect(rows).toHaveLength(3);
    expect(rows[0].items).toHaveLength(1);
    expect(rows[0].totalSpan).toBe(8);
    expect(rows[1].items).toHaveLength(1);
    expect(rows[1].totalSpan).toBe(24);
    expect(rows[2].items).toHaveLength(1);
    expect(rows[2].totalSpan).toBe(8);
  });

  it('should filter out empty items', () => {
    const items = [
      createMockItem('Item1', 8),
      createMockItem('', 8, true), // Empty item
      createMockItem('Item2', 8),
    ];

    const rows = calculateTableLayout(items);

    expect(rows).toHaveLength(1);
    expect(rows[0].items).toHaveLength(2);
    expect(rows[0].items[0].label).toBe('Item1');
    expect(rows[0].items[1].label).toBe('Item2');
  });

  it('should handle empty input', () => {
    const rows = calculateTableLayout([]);
    expect(rows).toHaveLength(0);
  });

  it('should handle all empty items', () => {
    const items = [createMockItem('', 8, true), createMockItem('', 12, true)];

    const rows = calculateTableLayout(items);
    expect(rows).toHaveLength(0);
  });

  it('should handle complex layout with irregular spans', () => {
    const items = [
      createMockItem('Item1', 6),
      createMockItem('Item2', 10),
      createMockItem('Item3', 12), // This will cause a new row (6+10+12 > 24)
      createMockItem('Item4', 4),
      createMockItem('Item5', 8),
    ];

    const rows = calculateTableLayout(items);

    expect(rows).toHaveLength(2);
    expect(rows[0].items).toHaveLength(2); // Item1 + Item2 = 16
    expect(rows[0].totalSpan).toBe(16);
    expect(rows[1].items).toHaveLength(3); // Item3 + Item4 + Item5 = 24
    expect(rows[1].totalSpan).toBe(24);
  });
});

describe('buildTableElement', () => {
  const createMockRow = (
    items: Array<{ label: string; content: string; span: number }>,
  ): TableRow => ({
    items: items.map((item, index) => ({
      ...item,
      element: document.createElement('div'),
      isEmpty: false,
    })),
    totalSpan: items.reduce((sum, item) => sum + item.span, 0),
    index: 0,
  });

  it('should create table with correct structure', () => {
    const rows = [
      createMockRow([
        { label: 'Name', content: 'John Doe', span: 8 },
        { label: 'Email', content: 'john@example.com', span: 16 },
      ]),
    ];

    const table = buildTableElement(rows);

    expect(table.tagName).toBe('TABLE');
    expect(table.className).toContain('schema-form-description-table');

    const tbody = table.querySelector('tbody');
    expect(tbody).toBeTruthy();

    const rows_elements = tbody!.querySelectorAll('tr');
    expect(rows_elements).toHaveLength(2); // 2 items = 2 rows

    // Check first row
    const firstRow = rows_elements[0];
    const firstTh = firstRow.querySelector('th');
    const firstTd = firstRow.querySelector('td');
    expect(firstTh?.textContent).toBe('Name');
    expect(firstTd?.innerHTML).toBe('John Doe');

    // Check second row
    const secondRow = rows_elements[1];
    const secondTh = secondRow.querySelector('th');
    const secondTd = secondRow.querySelector('td');
    expect(secondTh?.textContent).toBe('Email');
    expect(secondTd?.innerHTML).toBe('john@example.com');
  });

  it('should apply custom styles and options', () => {
    const rows = [
      createMockRow([{ label: 'Test', content: 'Content', span: 12 }]),
    ];

    const options = {
      className: 'custom-class',
      style: { backgroundColor: 'red' },
      bordered: false,
    };

    const table = buildTableElement(rows, options);

    expect(table.className).toContain('custom-class');
    expect(table.style.backgroundColor).toBe('red');

    const th = table.querySelector('th');
    const td = table.querySelector('td');

    // When bordered is false, borders should be 'none' (or empty in jsdom)
    expect(th?.style.border).toBe('');
    expect(td?.style.border).toBe('');
  });

  it('should handle empty rows', () => {
    const table = buildTableElement([]);

    expect(table.tagName).toBe('TABLE');
    const tbody = table.querySelector('tbody');
    expect(tbody).toBeTruthy();
    expect(tbody!.children).toHaveLength(0);
  });

  it('should handle multiple rows correctly', () => {
    const rows = [
      createMockRow([
        { label: 'Row1 Item1', content: 'Content1', span: 12 },
        { label: 'Row1 Item2', content: 'Content2', span: 12 },
      ]),
      createMockRow([{ label: 'Row2 Item1', content: 'Content3', span: 24 }]),
    ];

    const table = buildTableElement(rows);

    const tbody = table.querySelector('tbody');
    const tableRows = tbody!.querySelectorAll('tr');

    // Should have 3 table rows total (2 from first row + 1 from second row)
    expect(tableRows).toHaveLength(3);

    // Check content
    expect(tableRows[0].querySelector('th')?.textContent).toBe('Row1 Item1');
    expect(tableRows[1].querySelector('th')?.textContent).toBe('Row1 Item2');
    expect(tableRows[2].querySelector('th')?.textContent).toBe('Row2 Item1');
  });

  it('should handle HTML content correctly', () => {
    const rows = [
      createMockRow([
        {
          label: 'Rich Content',
          content: '<strong>Bold</strong> and <em>italic</em>',
          span: 12,
        },
      ]),
    ];

    const table = buildTableElement(rows);

    const td = table.querySelector('td');
    expect(td?.innerHTML).toBe('<strong>Bold</strong> and <em>italic</em>');

    // Verify HTML is preserved
    const strong = td?.querySelector('strong');
    const em = td?.querySelector('em');
    expect(strong?.textContent).toBe('Bold');
    expect(em?.textContent).toBe('italic');
  });
});
