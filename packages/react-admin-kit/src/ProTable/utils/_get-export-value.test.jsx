import { _getExportValue } from './index';

describe('_getExportValue', () => {
  const mockRecord = {
    name: 'John Doe',
    age: 30,
    status: 'active',
    date: '2023-01-01',
    dateTime: '2023-01-01T10:30:00',
    dateRange: ['2023-01-01', '2023-01-31'],
    dateTimeRange: ['2023-01-01T10:30:00', '2023-01-31T18:45:00'],
    money: 1000,
    objectValue: { value: 'object text', label: 'Object Label' },
    emptyValue: null,
    nested: {
      level1: {
        level2: 'nested value',
        info: {
          title: 'Deep nested title',
        },
      },
      user: {
        profile: {
          email: 'user@example.com',
        },
      },
    },
  };

  describe('basic text extraction', () => {
    it('should return text value when dataIndex is string', () => {
      const col = { dataIndex: 'name' };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('John Doe');
    });

    it('should return nested value when dataIndex is string array', () => {
      const col = { dataIndex: ['nested', 'level1', 'level2'] };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('nested value');
    });

    it('should return deeply nested value when dataIndex is string array', () => {
      const col = { dataIndex: ['nested', 'level1', 'info', 'title'] };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('Deep nested title');
    });

    it('should return nested value with different path', () => {
      const col = { dataIndex: ['nested', 'user', 'profile', 'email'] };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('user@example.com');
    });

    it('should return undefined when nested path does not exist', () => {
      const col = { dataIndex: ['nested', 'nonexistent', 'field'] };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBeUndefined();
    });

    it('should return undefined when intermediate path is null', () => {
      const recordWithNull = {
        ...mockRecord,
        nested: {
          level1: null,
        },
      };
      const col = { dataIndex: ['nested', 'level1', 'level2'] };
      const result = _getExportValue(recordWithNull, col);
      expect(result).toBeUndefined();
    });

    it('should return empty string when dataIndex is not string or array', () => {
      const col = { dataIndex: 123 };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('');
    });
  });

  describe('renderExport function', () => {
    it('should use renderExport when provided', () => {
      const col = {
        dataIndex: 'name',
        renderExport: (text, record) => `Exported: ${text}`,
      };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('Exported: John Doe');
    });

    it('should use renderExport with nested dataIndex', () => {
      const col = {
        dataIndex: ['nested', 'level1', 'level2'],
        renderExport: (text, record) => `Exported nested: ${text}`,
      };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('Exported nested: nested value');
    });

    it('should prioritize renderExport over other render functions', () => {
      const col = {
        dataIndex: 'name',
        renderExport: (text) => `Export: ${text}`,
        render: (text) => `Render: ${text}`,
        renderText: (text) => `Text: ${text}`,
      };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('Export: John Doe');
    });
  });

  describe('render function', () => {
    it('should use render function when renderExport is not provided', () => {
      const col = {
        dataIndex: 'name',
        render: (text, record, index) => `Rendered: ${text} (${index})`,
      };
      const result = _getExportValue(mockRecord, col, 5);
      expect(result).toBe('Rendered: John Doe (5)');
    });
  });

  describe('renderText function', () => {
    it('should use renderText when render and renderExport are not provided', () => {
      const col = {
        dataIndex: 'name',
        renderText: (text, record, index) => `Text: ${text} at ${index}`,
      };
      const result = _getExportValue(mockRecord, col, 2);
      expect(result).toBe('Text: John Doe at 2');
    });
  });

  describe('valueType handling', () => {
    describe('select/radio/checkbox types', () => {
      it('should handle select valueType with options', () => {
        const col = {
          dataIndex: 'status',
          valueType: 'select',
          valueEnum: {
            active: { text: 'Active' },
            inactive: { text: 'Inactive' },
          },
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('Active');
      });

      it('should handle select valueType with nested dataIndex', () => {
        const recordWithNestedStatus = {
          ...mockRecord,
          nested: {
            ...mockRecord.nested,
            status: 'active',
          },
        };
        const col = {
          dataIndex: ['nested', 'status'],
          valueType: 'select',
          valueEnum: {
            active: { text: 'Active Nested' },
            inactive: { text: 'Inactive Nested' },
          },
        };
        const result = _getExportValue(recordWithNestedStatus, col);
        expect(result).toBe('Active Nested');
      });

      it('should handle radio valueType', () => {
        const col = {
          dataIndex: 'status',
          valueType: 'radio',
          valueEnum: {
            active: { text: 'Active Status' },
          },
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('Active Status');
      });

      it('should handle radioButton valueType', () => {
        const col = {
          dataIndex: 'status',
          valueType: 'radioButton',
          valueEnum: {
            active: { text: 'Active Button' },
          },
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('Active Button');
      });

      it('should handle checkbox valueType', () => {
        const col = {
          dataIndex: 'status',
          valueType: 'checkbox',
          valueEnum: {
            active: { text: 'Active Checkbox' },
          },
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('Active Checkbox');
      });
    });

    describe('date types', () => {
      it('should format date valueType', () => {
        const col = {
          dataIndex: 'date',
          valueType: 'date',
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('2023-01-01');
      });

      it('should format dateTime valueType', () => {
        const col = {
          dataIndex: 'dateTime',
          valueType: 'dateTime',
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('2023-01-01 10:30:00');
      });

      it('should format dateRange valueType', () => {
        const col = {
          dataIndex: 'dateRange',
          valueType: 'dateRange',
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('2023-01-01 - 2023-01-31');
      });

      it('should format dateTimeRange valueType', () => {
        const col = {
          dataIndex: 'dateTimeRange',
          valueType: 'dateTimeRange',
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe('2023-01-01 10:30:00 - 2023-01-31 18:45:00');
      });

      it('should handle empty dateRange', () => {
        const recordWithEmptyRange = { ...mockRecord, dateRange: null };
        const col = {
          dataIndex: 'dateRange',
          valueType: 'dateRange',
        };
        const result = _getExportValue(recordWithEmptyRange, col);
        expect(result).toBeNull();
      });

      it('should handle empty dateTimeRange', () => {
        const recordWithEmptyRange = { ...mockRecord, dateTimeRange: null };
        const col = {
          dataIndex: 'dateTimeRange',
          valueType: 'dateTimeRange',
        };
        const result = _getExportValue(recordWithEmptyRange, col);
        expect(result).toBeNull();
      });
    });

    describe('money valueType', () => {
      it('should return money value as is', () => {
        const col = {
          dataIndex: 'money',
          valueType: 'money',
        };
        const result = _getExportValue(mockRecord, col);
        expect(result).toBe(1000);
      });

      it('should return empty string for empty money value', () => {
        const recordWithEmptyMoney = { ...mockRecord, money: null };
        const col = {
          dataIndex: 'money',
          valueType: 'money',
        };
        const result = _getExportValue(recordWithEmptyMoney, col);
        expect(result).toBe('');
      });

      it('should return empty string for undefined money value', () => {
        const recordWithEmptyMoney = { ...mockRecord, money: undefined };
        const col = {
          dataIndex: 'money',
          valueType: 'money',
        };
        const result = _getExportValue(recordWithEmptyMoney, col);
        expect(result).toBe('');
      });
    });
  });

  describe('object value handling', () => {
    it('should extract value property from object', () => {
      const col = { dataIndex: 'objectValue' };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('object text');
    });

    it('should handle object without value property', () => {
      const recordWithPlainObject = {
        ...mockRecord,
        objectValue: { label: 'Only Label' },
      };
      const col = { dataIndex: 'objectValue' };
      const result = _getExportValue(recordWithPlainObject, col);
      expect(result).toBeUndefined();
    });
  });

  describe('edge cases', () => {
    it('should handle null values', () => {
      const col = { dataIndex: 'emptyValue' };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBeNull();
    });

    it('should handle undefined dataIndex', () => {
      const col = { dataIndex: 'nonExistentField' };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBeUndefined();
    });

    it('should use default index of 0 when not provided', () => {
      const col = {
        dataIndex: 'name',
        render: (text, record, index) => `Index: ${index}`,
      };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe('Index: 0');
    });

    it('should handle empty string values', () => {
      const recordWithEmptyString = { ...mockRecord, name: '' };
      const col = { dataIndex: 'name' };
      const result = _getExportValue(recordWithEmptyString, col);
      expect(result).toBe('');
    });

    it('should handle numeric values', () => {
      const col = { dataIndex: 'age' };
      const result = _getExportValue(mockRecord, col);
      expect(result).toBe(30);
    });

    it('should handle boolean values', () => {
      const recordWithBoolean = { ...mockRecord, isActive: true };
      const col = { dataIndex: 'isActive' };
      const result = _getExportValue(recordWithBoolean, col);
      expect(result).toBe(true);
    });
  });

  describe('function parameter validation', () => {
    it('should pass correct parameters to renderExport', () => {
      const renderExportSpy = jest.fn(
        (text, record) => `${text}-${record.age}`,
      );
      const col = {
        dataIndex: 'name',
        renderExport: renderExportSpy,
      };

      _getExportValue(mockRecord, col, 3);

      expect(renderExportSpy).toHaveBeenCalledWith('John Doe', mockRecord);
    });

    it('should pass correct parameters to render function', () => {
      const renderSpy = jest.fn((text, record, index) => `${text}-${index}`);
      const col = {
        dataIndex: 'name',
        render: renderSpy,
      };

      _getExportValue(mockRecord, col, 5);

      expect(renderSpy).toHaveBeenCalledWith(
        'John Doe',
        mockRecord,
        5,
        undefined,
        undefined,
      );
    });

    it('should pass correct parameters to renderText function', () => {
      const renderTextSpy = jest.fn(
        (text, record, index) => `${text}-${index}`,
      );
      const col = {
        dataIndex: 'name',
        renderText: renderTextSpy,
      };

      _getExportValue(mockRecord, col, 7);

      expect(renderTextSpy).toHaveBeenCalledWith('John Doe', mockRecord, 7);
    });
  });
});
