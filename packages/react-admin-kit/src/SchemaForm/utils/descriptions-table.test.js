import { extractSpanFromClassName, mergeEmptyItems, scanFormItems } from './descriptions-table';

describe('extractSpanFromClassName', () => {
  test('should return default value 24 for invalid input', () => {
    expect(extractSpanFromClassName(null)).toBe(24);
    expect(extractSpanFromClassName(undefined)).toBe(24);
    expect(extractSpanFromClassName('')).toBe(24);
    expect(extractSpanFromClassName('invalid-class')).toBe(24);
  });

  test('should extract traditional span value', () => {
    expect(extractSpanFromClassName('ant-col ant-col-8 ant-form-item')).toBe(8);
    expect(extractSpanFromClassName('ant-col-12')).toBe(12);
    expect(extractSpanFromClassName('some-class ant-col-16 other-class')).toBe(16);
  });

  test('should return default value for invalid traditional span', () => {
    expect(extractSpanFromClassName('ant-col-0')).toBe(24);
    expect(extractSpanFromClassName('ant-col-25')).toBe(24);
    expect(extractSpanFromClassName('ant-col-abc')).toBe(24);
  });

  test('should extract responsive breakpoint values', () => {
    const result1 = extractSpanFromClassName('ant-col-xs-24 ant-col-md-8');
    expect(result1).toEqual({ xs: 24, md: 8 });

    const result2 = extractSpanFromClassName('ant-col-sm-12 ant-col-lg-6 ant-col-xl-4');
    expect(result2).toEqual({ sm: 12, lg: 6, xl: 4 });

    const result3 = extractSpanFromClassName('ant-col-xxl-24 ant-col-xs-12');
    expect(result3).toEqual({ xxl: 24, xs: 12 });
  });

  test('should handle mixed traditional and responsive classes', () => {
    const result = extractSpanFromClassName('ant-col-8 ant-col-xs-24 ant-col-md-12');
    expect(result).toEqual({ xs: 24, md: 12 });
  });

  test('should ignore invalid responsive span values', () => {
    const result1 = extractSpanFromClassName('ant-col-xs-0 ant-col-md-25');
    expect(result1).toBe(24);

    const result2 = extractSpanFromClassName('ant-col-xs-abc ant-col-md-8');
    expect(result2).toEqual({ md: 8 });
  });

  test('should prioritize responsive breakpoints over traditional span', () => {
    const result = extractSpanFromClassName('ant-col-8 ant-col-xs-24');
    expect(result).toEqual({ xs: 24 });
  });

  test('should handle multiple breakpoints with same name', () => {
    const result = extractSpanFromClassName('ant-col-xs-12 ant-col-xs-24');
    expect(result).toEqual({ xs: 24 });
  });

  test('should return default value when no valid spans found', () => {
    expect(extractSpanFromClassName('ant-col-xs-0 ant-col-md-25')).toBe(24);
    expect(extractSpanFromClassName('ant-col-invalid-8')).toBe(24);
  });

  test('should handle all breakpoint types', () => {
    const className = 'ant-col-xs-24 ant-col-sm-20 ant-col-md-16 ant-col-lg-12 ant-col-xl-8 ant-col-xxl-4';
    const result = extractSpanFromClassName(className);
    expect(result).toEqual({
      xs: 24,
      sm: 20,
      md: 16,
      lg: 12,
      xl: 8,
      xxl: 4
    });
  });
});

describe('mergeEmptyItems', () => {
  test('should merge empty items at the end of a row', () => {
    const items = [
      { label: 'Name', content: 'John', span: 8, isEmpty: false },
      { label: '', content: '', span: 8, isEmpty: true },
      { label: 'Age', content: '30', span: 8, isEmpty: false },
      { label: '', content: '', span: 8, isEmpty: true }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual([
      { label: 'Name', content: 'John', span: 16, isEmpty: false },
      { label: 'Age', content: '30', span: 8, isEmpty: false },
      { label: '', content: '', span: 8, isEmpty: true }
    ]);
  });

  test('should not merge empty items at the beginning of a row', () => {
    const items = [
      { label: '', content: '', span: 8, isEmpty: true },
      { label: 'Name', content: 'John', span: 8, isEmpty: false },
      { label: 'Age', content: '30', span: 8, isEmpty: false }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual([
      { label: '', content: '', span: 8, isEmpty: true },
      { label: 'Name', content: 'John', span: 8, isEmpty: false },
      { label: 'Age', content: '30', span: 8, isEmpty: false }
    ]);
  });

  test('should handle multiple empty items in sequence', () => {
    const items = [
      { label: 'Name', content: 'John', span: 8, isEmpty: false },
      { label: '', content: '', span: 4, isEmpty: true },
      { label: '', content: '', span: 4, isEmpty: true },
      { label: 'Age', content: '30', span: 8, isEmpty: false }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual([
      { label: 'Name', content: 'John', span: 16, isEmpty: false },
      { label: 'Age', content: '30', span: 8, isEmpty: false }
    ]);
  });

  test('should handle row boundaries correctly', () => {
    const items = [
      { label: 'Field1', content: 'Value1', span: 12, isEmpty: false },
      { label: '', content: '', span: 6, isEmpty: true },
      { label: 'Field2', content: 'Value2', span: 6, isEmpty: false },
      { label: '', content: '', span: 12, isEmpty: true }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual([
      { label: 'Field1', content: 'Value1', span: 18, isEmpty: false },
      { label: 'Field2', content: 'Value2', span: 6, isEmpty: false },
      { label: '', content: '', span: 12, isEmpty: true }
    ]);
  });

  test('should handle empty array', () => {
    const result = mergeEmptyItems([], 24);
    expect(result).toEqual([]);
  });

  test('should handle all non-empty items', () => {
    const items = [
      { label: 'Name', content: 'John', span: 8, isEmpty: false },
      { label: 'Age', content: '30', span: 8, isEmpty: false },
      { label: 'City', content: 'NY', span: 8, isEmpty: false }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual(items);
  });

  test('should handle all empty items', () => {
    const items = [
      { label: '', content: '', span: 8, isEmpty: true },
      { label: '', content: '', span: 8, isEmpty: true },
      { label: '', content: '', span: 8, isEmpty: true }
    ];

    const result = mergeEmptyItems(items, 24);
    expect(result).toEqual([
      { label: '', content: '', span: 24, isEmpty: true }
    ]);
  });

  test('should work with different column values', () => {
    const items = [
      { label: 'Name', content: 'John', span: 6, isEmpty: false },
      { label: '', content: '', span: 6, isEmpty: true },
      { label: 'Age', content: '30', span: 6, isEmpty: false }
    ];

    const result = mergeEmptyItems(items, 12);
    expect(result).toEqual([
      { label: 'Name', content: 'John', span: 12, isEmpty: false },
      { label: 'Age', content: '30', span: 6, isEmpty: false }
    ]);
  });
});

describe('scanFormItems', () => {
  test('should return empty array for invalid container', () => {
    expect(scanFormItems(null)).toEqual([]);
    expect(scanFormItems(undefined)).toEqual([]);
  });

  test('should handle regular form items', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <form>
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Username</label>
          </div>
          <div class="ant-form-item-control">
            <div class="ant-form-item-control-input">
              <div class="ant-form-item-control-input-content">
                <span>john_doe</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Email</label>
          </div>
          <div class="ant-form-item-control">
            <div class="ant-form-item-control-input">
              <div class="ant-form-item-control-input-content">
                <span>john@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    const result = scanFormItems(container);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      label: 'Username',
      content: expect.stringContaining('john_doe'),
      span: 24,
      element: expect.any(HTMLElement),
      isEmpty: false
    });
    expect(result[1]).toEqual({
      label: 'Email',
      content: expect.stringContaining('john@example.com'),
      span: 24,
      element: expect.any(HTMLElement),
      isEmpty: false
    });
  });

  test('should handle grid layout items', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-8">
            <div class="ant-form-item">
              <div class="ant-form-item-label">
                <label>Name</label>
              </div>
              <div class="ant-form-item-control">
                <span>John Doe</span>
              </div>
            </div>
          </div>
          <div class="ant-col ant-col-16">
            <div class="ant-form-item">
              <div class="ant-form-item-label">
                <label>Description</label>
              </div>
              <div class="ant-form-item-control">
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    const result = scanFormItems(container, true);
    expect(result).toHaveLength(2);
    expect(result[0].span).toBe(8);
    expect(result[1].span).toBe(16);
  });

  test('should handle embed mode with grid', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="form-item-wrapper">
        <div class="ant-row">
          <div class="ant-col ant-col-12">
            <div class="ant-form-item">
              <div class="ant-form-item-label">
                <label>Field 1</label>
              </div>
              <div class="ant-form-item-control">
                <span>Value 1</span>
              </div>
            </div>
          </div>
          <div class="ant-col ant-col-12">
            <div class="ant-form-item">
              <div class="ant-form-item-label">
                <label>Field 2</label>
              </div>
              <div class="ant-form-item-control">
                <span>Value 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const result = scanFormItems(container, true, true);
    expect(result).toHaveLength(2);
    expect(result[0].span).toBe(12);
    expect(result[1].span).toBe(12);
  });

  test('should handle embed mode without grid', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="form-item-wrapper">
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Username</label>
          </div>
          <div class="ant-form-item-control">
            <span>john_doe</span>
          </div>
        </div>
      </div>
    `;

    const result = scanFormItems(container, false, true);
    expect(result).toHaveLength(1);
    expect(result[0].label).toBe('Username');
  });

  test('should handle empty items correctly', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <form>
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Username</label>
          </div>
          <div class="ant-form-item-control">
            <span>john_doe</span>
          </div>
        </div>
        <div class="ant-form-item">
          <div class="ant-form-item-label"></div>
          <div class="ant-form-item-control"></div>
        </div>
      </form>
    `;

    const result = scanFormItems(container);
    expect(result).toHaveLength(2);
    expect(result[0].isEmpty).toBe(false);
    expect(result[1].isEmpty).toBe(true);
  });

  test('should handle items without control element', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <form>
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Username</label>
          </div>
          <!-- Missing control element -->
        </div>
        <div class="ant-form-item">
          <div class="ant-form-item-label">
            <label>Email</label>
          </div>
          <div class="ant-form-item-control">
            <span>test@example.com</span>
          </div>
        </div>
      </form>
    `;

    const result = scanFormItems(container);
    expect(result).toHaveLength(1);
    expect(result[0].label).toBe('Email');
  });

  test('should handle responsive span classes', () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <form>
        <div class="ant-row">
          <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8">
            <div class="ant-form-item">
              <div class="ant-form-item-label">
                <label>Field</label>
              </div>
              <div class="ant-form-item-control">
                <span>Value</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;

    const result = scanFormItems(container, true);
    expect(result).toHaveLength(1);
    expect(result[0].span).toEqual({
      xs: 24,
      md: 12,
      lg: 8
    });
  });

  test('should handle error gracefully', () => {
    // Mock a container that will cause an error
    const container = {};
    
    const result = scanFormItems(container);
    expect(result).toEqual([]);
  });
});
