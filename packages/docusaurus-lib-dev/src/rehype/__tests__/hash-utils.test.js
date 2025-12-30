import {
  calculateContentHash,
  generateShortHash,
  generateFileHash,
} from '../utils/hash-utils';

describe('hash-utils', () => {
  describe('calculateContentHash', () => {
    it('应该为相同内容生成相同哈希', () => {
      const content = 'test content';
      const hash1 = calculateContentHash(content);
      const hash2 = calculateContentHash(content);

      expect(hash1).toBe(hash2);
      expect(hash1).toHaveLength(64); // SHA-256 哈希长度
    });

    it('应该为不同内容生成不同哈希', () => {
      const hash1 = calculateContentHash('content1');
      const hash2 = calculateContentHash('content2');

      expect(hash1).not.toBe(hash2);
    });
  });

  describe('generateShortHash', () => {
    it('应该生成指定长度的短哈希', () => {
      const hash = generateShortHash('test input', 8);

      expect(hash).toHaveLength(8);
      expect(hash).toMatch(/^[A-Za-z0-9]+$/); // 只包含字母和数字
    });

    it('应该为相同输入生成相同短哈希', () => {
      const input = 'test input';
      const hash1 = generateShortHash(input, 6);
      const hash2 = generateShortHash(input, 6);

      expect(hash1).toBe(hash2);
    });
  });

  describe('generateFileHash', () => {
    it('应该为文件路径生成8位哈希', () => {
      const hash = generateFileHash('/path/to/file.tsx');

      expect(hash).toHaveLength(8);
      expect(hash).toMatch(/^[A-Za-z0-9]+$/);
    });
  });
});
