import { _getTextByOptions } from './index';

// Mock FormStore since it's used internally
jest.mock('rc-field-form/lib/useForm', () => ({
  FormStore: jest.fn().mockImplementation(() => ({})),
}));

describe('_getTextByOptions', () => {
  describe('valueEnum scenarios', () => {
    it('should return text from valueEnum when text key exists', () => {
      const col = {
        valueEnum: {
          active: { text: 'Active' },
          inactive: { text: 'Inactive' },
        },
      };

      expect(_getTextByOptions('active', col)).toBe('Active');
      expect(_getTextByOptions('inactive', col)).toBe('Inactive');
    });

    it('should return undefined when text key does not exist in valueEnum', () => {
      const col = {
        valueEnum: {
          active: { text: 'Active' },
        },
      };

      expect(_getTextByOptions('nonexistent', col)).toBeUndefined();
    });

    it('should handle valueEnum with null/undefined text values', () => {
      const col = {
        valueEnum: {
          empty: { text: null },
          undefined: {},
        },
      };

      expect(_getTextByOptions('empty', col)).toBeNull();
      expect(_getTextByOptions('undefined', col)).toBeUndefined();
    });
  });

  describe('fieldProps as object scenarios', () => {
    it('should return label from options when value matches', () => {
      const col = {
        fieldProps: {
          options: [
            { value: 1, label: 'Option 1' },
            { value: 2, label: 'Option 2' },
            { value: 'string', label: 'String Option' },
          ],
        },
      };

      expect(_getTextByOptions(1, col)).toBe('Option 1');
      expect(_getTextByOptions(2, col)).toBe('Option 2');
      expect(_getTextByOptions('string', col)).toBe('String Option');
    });

    it('should handle loose equality comparison (== instead of ===)', () => {
      const col = {
        fieldProps: {
          options: [
            { value: '1', label: 'String One' },
            { value: 1, label: 'Number One' },
          ],
        },
      };

      // Should match first option due to loose equality
      expect(_getTextByOptions(1, col)).toBe('String One');
      expect(_getTextByOptions('1', col)).toBe('String One');
    });

    it('should return undefined when no matching value found', () => {
      const col = {
        fieldProps: {
          options: [{ value: 1, label: 'Option 1' }],
        },
      };

      expect(_getTextByOptions(999, col)).toBeUndefined();
    });

    it('should handle empty options array', () => {
      const col = {
        fieldProps: {
          options: [],
        },
      };

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });

    it('should handle missing options property', () => {
      const col = {
        fieldProps: {},
      };

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });
  });

  describe('fieldProps as function scenarios', () => {
    it('should return label from function-generated options', () => {
      const mockOptions = [
        { value: 'a', label: 'Label A' },
        { value: 'b', label: 'Label B' },
      ];

      const col = {
        fieldProps: jest.fn().mockReturnValue({
          options: mockOptions,
        }),
      };

      expect(_getTextByOptions('a', col)).toBe('Label A');
      expect(_getTextByOptions('b', col)).toBe('Label B');
    });

    it('should call fieldProps function with correct parameters', () => {
      const mockFieldProps = jest.fn().mockReturnValue({
        options: [{ value: 'test', label: 'Test Label' }],
      });

      const col = { fieldProps: mockFieldProps };

      _getTextByOptions('test', col);

      expect(mockFieldProps).toHaveBeenCalledWith(
        expect.any(Object), // FormStore instance
        { current: {} },
        col,
      );
    });

    it('should handle function returning null/undefined', () => {
      const col = {
        fieldProps: jest.fn().mockReturnValue(null),
      };

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });

    it('should handle function returning object without options', () => {
      const col = {
        fieldProps: jest.fn().mockReturnValue({}),
      };

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });

    it('should handle function returning empty options array', () => {
      const col = {
        fieldProps: jest.fn().mockReturnValue({
          options: [],
        }),
      };

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });
  });

  describe('priority and edge cases', () => {
    it('should prioritize valueEnum over fieldProps', () => {
      const col = {
        valueEnum: {
          test: { text: 'From ValueEnum' },
        },
        fieldProps: {
          options: [{ value: 'test', label: 'From FieldProps' }],
        },
      };

      expect(_getTextByOptions('test', col)).toBe('From ValueEnum');
    });

    it('should return undefined when neither valueEnum nor fieldProps exist', () => {
      const col = {};

      expect(_getTextByOptions('any', col)).toBeUndefined();
    });

    it('should handle null/undefined column', () => {
      expect(_getTextByOptions('any', null)).toBeUndefined();
      expect(_getTextByOptions('any', undefined)).toBeUndefined();
    });

    it('should handle various text input types', () => {
      const col = {
        fieldProps: {
          options: [
            { value: 0, label: 'Zero' },
            { value: false, label: 'False' },
            { value: '', label: 'Empty String' },
            { value: null, label: 'Null Value' },
          ],
        },
      };

      expect(_getTextByOptions(0, col)).toBe('Zero');
      expect(_getTextByOptions(false, col)).toBe('False');
      expect(_getTextByOptions('', col)).toBe('Empty String');
      expect(_getTextByOptions(null, col)).toBe('Null Value');
    });
  });
});
