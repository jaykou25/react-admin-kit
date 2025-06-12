import { _genDataIndex } from './index';

describe('_genDataIndex 测试', () => {
  describe('不带 baseName', () => {
    it('key 为字符串时应直接返回', () => {
      expect(_genDataIndex('user')).toBe('user');
    });

    it('key 为数组时应直接返回', () => {
      expect(_genDataIndex(['info', 'name'])).toEqual(['info', 'name']);
    });
  });

  describe('带 baseName', () => {
    it('key 为字符串时应在前面加上 baseName', () => {
      expect(_genDataIndex('name', 'baseInfo')).toEqual(['baseInfo', 'name']);
    });

    it('key 为数组时应在前面加上 baseName', () => {
      expect(_genDataIndex(['user', 'name'], 'baseInfo')).toEqual([
        'baseInfo',
        'user',
        'name',
      ]);
    });

    it('baseName 为数字时也应正常工作', () => {
      expect(_genDataIndex('name', 0)).toEqual([0, 'name']);
    });
  });

  describe('特殊情况', () => {
    it('key 为空时应正常工作', () => {
      expect(_genDataIndex(undefined, 'baseInfo')).toEqual([
        'baseInfo',
        undefined,
      ]);
    });

    it('baseName 为空时应正常工作', () => {
      expect(_genDataIndex('name', undefined)).toBe('name');
    });

    it('都为空时应返回 undefined', () => {
      expect(_genDataIndex(undefined, undefined)).toBe(undefined);
    });
  });
});
