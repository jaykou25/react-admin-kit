import { _getValueByDataIndex } from './index';

describe('getValueByDataIndex', () => {
  const mockRecord = {
    name: 'John Doe',
    age: 30,
    user: {
      profile: {
        email: 'user@example.com',
        settings: {
          theme: 'dark',
          notifications: {
            email: true,
            sms: false,
          },
        },
      },
      permissions: ['read', 'write'],
    },
    company: {
      name: 'Tech Corp',
      address: {
        street: '123 Main St',
        city: 'New York',
        coordinates: {
          lat: 40.7128,
          lng: -74.006,
        },
      },
    },
    tags: ['frontend', 'react', 'javascript'],
    metadata: null,
    emptyObject: {},
  };

  describe('string dataIndex', () => {
    it('should get top-level string value', () => {
      const result = _getValueByDataIndex(mockRecord, 'name');
      expect(result).toBe('John Doe');
    });

    it('should get top-level number value', () => {
      const result = _getValueByDataIndex(mockRecord, 'age');
      expect(result).toBe(30);
    });

    it('should get top-level array value', () => {
      const result = _getValueByDataIndex(mockRecord, 'tags');
      expect(result).toEqual(['frontend', 'react', 'javascript']);
    });

    it('should get top-level null value', () => {
      const result = _getValueByDataIndex(mockRecord, 'metadata');
      expect(result).toBeNull();
    });

    it('should return undefined for non-existent key', () => {
      const result = _getValueByDataIndex(mockRecord, 'nonExistent');
      expect(result).toBeUndefined();
    });
  });

  describe('array dataIndex - 2 levels', () => {
    it('should get nested object value', () => {
      const result = _getValueByDataIndex(mockRecord, ['user', 'profile']);
      expect(result).toEqual({
        email: 'user@example.com',
        settings: {
          theme: 'dark',
          notifications: {
            email: true,
            sms: false,
          },
        },
      });
    });

    it('should get nested string value', () => {
      const result = _getValueByDataIndex(mockRecord, ['company', 'name']);
      expect(result).toBe('Tech Corp');
    });

    it('should return undefined for non-existent nested key', () => {
      const result = _getValueByDataIndex(mockRecord, ['user', 'nonExistent']);
      expect(result).toBeUndefined();
    });

    it('should return undefined when parent is null', () => {
      const result = _getValueByDataIndex(mockRecord, ['metadata', 'value']);
      expect(result).toBeUndefined();
    });
  });

  describe('array dataIndex - 3+ levels', () => {
    it('should get deeply nested string value', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'user',
        'profile',
        'email',
      ]);
      expect(result).toBe('user@example.com');
    });

    it('should get deeply nested string value from settings', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'user',
        'profile',
        'settings',
        'theme',
      ]);
      expect(result).toBe('dark');
    });

    it('should get 4-level nested boolean value', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'user',
        'profile',
        'settings',
        'notifications',
        'email',
      ]);
      expect(result).toBe(true);
    });

    it('should get 4-level nested boolean value (false)', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'user',
        'profile',
        'settings',
        'notifications',
        'sms',
      ]);
      expect(result).toBe(false);
    });

    it('should get nested address value', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'company',
        'address',
        'street',
      ]);
      expect(result).toBe('123 Main St');
    });

    it('should get 4-level nested number value', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'company',
        'address',
        'coordinates',
        'lat',
      ]);
      expect(result).toBe(40.7128);
    });
  });

  describe('edge cases', () => {
    it('should handle empty array dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, []);
      expect(result).toBe(mockRecord);
    });

    it('should handle single-element array dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, ['name']);
      expect(result).toBe('John Doe');
    });

    it('should return undefined when accessing property of empty object', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'emptyObject',
        'property',
      ]);
      expect(result).toBeUndefined();
    });

    it('should handle array access by index', () => {
      const result = _getValueByDataIndex(mockRecord, ['tags', '0']);
      expect(result).toBe('frontend');
    });

    it('should handle mixed path with array access', () => {
      const result = _getValueByDataIndex(mockRecord, [
        'user',
        'permissions',
        '1',
      ]);
      expect(result).toBe('write');
    });
  });

  describe('null and undefined handling', () => {
    it('should return undefined when intermediate value is null', () => {
      const recordWithNull = {
        ...mockRecord,
        user: {
          profile: null,
        },
      };
      const result = _getValueByDataIndex(recordWithNull, [
        'user',
        'profile',
        'email',
      ]);
      expect(result).toBeUndefined();
    });

    it('should return undefined when intermediate value is undefined', () => {
      const recordWithUndefined = {
        ...mockRecord,
        user: {
          profile: undefined,
        },
      };
      const result = _getValueByDataIndex(recordWithUndefined, [
        'user',
        'profile',
        'email',
      ]);
      expect(result).toBeUndefined();
    });

    it('should return undefined when root object is null', () => {
      const result = _getValueByDataIndex(null, ['user', 'profile']);
      expect(result).toBeUndefined();
    });

    it('should return undefined when root object is undefined', () => {
      const result = _getValueByDataIndex(undefined, ['user', 'profile']);
      expect(result).toBeUndefined();
    });
  });

  describe('invalid dataIndex types', () => {
    it('should return undefined for number dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, 123);
      expect(result).toBeUndefined();
    });

    it('should return undefined for object dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, { key: 'value' });
      expect(result).toBeUndefined();
    });

    it('should return undefined for null dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, null);
      expect(result).toBeUndefined();
    });

    it('should return undefined for undefined dataIndex', () => {
      const result = _getValueByDataIndex(mockRecord, undefined);
      expect(result).toBeUndefined();
    });
  });
});
