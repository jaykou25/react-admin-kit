import { getAreaFields } from './index';

describe('getAreaFields for form', () => {
  it('should include columns with type "form"', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' },
      { dataIndex: 'age', type: 'table' },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(1);
    expect(result[0].dataIndex).toBe('name');
  });

  it('should include columns with undefined type', () => {
    const columns = [
      { dataIndex: 'name' },
      { dataIndex: 'age', type: 'table' },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(1);
    expect(result[0].dataIndex).toBe('name');
  });

  it('type form is higher than hideInForm', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' },
      { dataIndex: 'age', type: 'form', hideInForm: true },
      { dataIndex: 'age2', hideInForm: true },
      { dataIndex: 'email', hideInForm: false },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(3);
    expect(result.map((col) => col.dataIndex)).toEqual([
      'name',
      'age',
      'email',
    ]);
  });

  it('should exclude columns with valueType "option"', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' },
      { dataIndex: 'actions', type: 'form', valueType: 'option' },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(1);
    expect(result[0].dataIndex).toBe('name');
  });

  it('should exclude columns with valueType "index"', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' },
      { dataIndex: 'index', type: 'form', valueType: 'index' },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(1);
    expect(result[0].dataIndex).toBe('name');
  });

  it('should handle valueType as object and not filter it', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' },
      { dataIndex: 'complex', type: 'form', valueType: { type: 'select' } },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(2);
    expect(result.map((col) => col.dataIndex)).toEqual(['name', 'complex']);
  });

  it('should apply all filters together', () => {
    const columns = [
      { dataIndex: 'name', type: 'form' }, // should include
      { dataIndex: 'age' }, // should include (undefined type)
      { dataIndex: 'email', type: 'table' }, // should exclude (wrong type)
      { dataIndex: 'phone', type: 'form', hideInForm: true }, // hideInForm 被忽略了
      { dataIndex: 'actions', type: 'form', valueType: 'option' }, // should exclude (valueType option)
      { dataIndex: 'index', valueType: 'index' }, // should exclude (valueType index)
      { dataIndex: 'status', type: 'form', valueType: 'select' }, // should include
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(4);
    expect(result.map((col) => col.dataIndex)).toEqual([
      'name',
      'age',
      'phone',
      'status',
    ]);
  });

  it('should handle empty columns array', () => {
    const result = getAreaFields([], 'form');

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('should handle columns with all properties set correctly', () => {
    const columns = [
      {
        dataIndex: 'name',
        type: 'form',
        hideInForm: false,
        valueType: 'text',
      },
      {
        dataIndex: 'description',
        hideInForm: false,
        valueType: 'textarea',
      },
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(2);
    expect(result.map((col) => col.dataIndex)).toEqual(['name', 'description']);
  });

  it('should handle mixed valueType formats', () => {
    const columns = [
      { dataIndex: 'name', type: 'form', valueType: 'text' }, // string - should include
      { dataIndex: 'age', type: 'form', valueType: { type: 'number' } }, // object - should include
      { dataIndex: 'actions', type: 'form', valueType: 'option' }, // string option - should exclude
      { dataIndex: 'index', type: 'form', valueType: 'index' }, // string index - should exclude
    ];

    const result = getAreaFields(columns, 'form');

    expect(result).toHaveLength(2);
    expect(result.map((col) => col.dataIndex)).toEqual(['name', 'age']);
  });
});
