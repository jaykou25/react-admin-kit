import { filteExportCols } from './index';

describe('filteExportCols', () => {
  it('should filter out columns with hideInTable = true', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'age', title: 'Age', hideInTable: true },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'email', title: 'Email' },
    ]);
  });

  it('should filter out columns with valueType = "option"', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'actions', title: 'Actions', valueType: 'option' },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'email', title: 'Email' },
    ]);
  });

  it('should filter out columns with valueType = "index"', () => {
    const columns = [
      { dataIndex: 'index', title: 'Index', valueType: 'index' },
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'email', title: 'Email' },
    ]);
  });

  it('should handle columns with both hideInTable and excluded valueType', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'age', title: 'Age', hideInTable: true },
      { dataIndex: 'actions', title: 'Actions', valueType: 'option' },
      { dataIndex: 'index', title: 'Index', valueType: 'index' },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'email', title: 'Email' },
    ]);
  });

  it('should keep columns with other valueType values', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name', valueType: 'text' },
      { dataIndex: 'age', title: 'Age', valueType: 'digit' },
      { dataIndex: 'date', title: 'Date', valueType: 'date' },
      { dataIndex: 'money', title: 'Money', valueType: 'money' },
      { dataIndex: 'select', title: 'Select', valueType: 'select' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(5);
    expect(result).toEqual(columns);
  });

  it('should handle columns with valueType as object', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name' },
      {
        dataIndex: 'config',
        title: 'Config',
        valueType: { type: 'select', options: [] },
      },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(3);
    expect(result).toEqual(columns);
  });

  it('should handle columns without valueType', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name' },
      { dataIndex: 'age', title: 'Age' },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(3);
    expect(result).toEqual(columns);
  });

  it('should handle empty columns array', () => {
    const columns = [];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('should handle columns with hideInTable = false', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name', hideInTable: false },
      { dataIndex: 'age', title: 'Age', hideInTable: true },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name', hideInTable: false },
      { dataIndex: 'email', title: 'Email' },
    ]);
  });

  it('should handle complex scenario with mixed conditions', () => {
    const columns = [
      { dataIndex: 'id', title: 'ID', valueType: 'index' },
      { dataIndex: 'name', title: 'Name', valueType: 'text' },
      { dataIndex: 'age', title: 'Age', hideInTable: true, valueType: 'digit' },
      { dataIndex: 'email', title: 'Email', valueType: 'text' },
      { dataIndex: 'actions', title: 'Actions', valueType: 'option' },
      { dataIndex: 'status', title: 'Status', valueType: 'select' },
      { dataIndex: 'hidden', title: 'Hidden', hideInTable: true },
      { dataIndex: 'date', title: 'Date', valueType: 'date' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(4);
    expect(result).toEqual([
      { dataIndex: 'name', title: 'Name', valueType: 'text' },
      { dataIndex: 'email', title: 'Email', valueType: 'text' },
      { dataIndex: 'status', title: 'Status', valueType: 'select' },
      { dataIndex: 'date', title: 'Date', valueType: 'date' },
    ]);
  });

  it('should handle null or undefined valueType', () => {
    const columns = [
      { dataIndex: 'name', title: 'Name', valueType: null },
      { dataIndex: 'age', title: 'Age', valueType: undefined },
      { dataIndex: 'email', title: 'Email' },
    ];

    const result = filteExportCols(columns);

    expect(result).toHaveLength(3);
    expect(result).toEqual(columns);
  });
});
