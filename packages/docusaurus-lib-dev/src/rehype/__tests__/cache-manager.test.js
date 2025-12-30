import { CacheManager } from '../core/cache-manager';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
jest.mock('file-system-cache');

const mockFs = fs;
const { FileSystemCache } = require('file-system-cache');

// 创建 FileSystemCache 的模拟实现
const mockCache = {
  getSync: jest.fn(),
  setSync: jest.fn(),
  clear: jest.fn(),
  keys: jest.fn().mockReturnValue([]),
};

FileSystemCache.mockImplementation(() => mockCache);

describe('CacheManager', () => {
  let cacheManager;
  let tempDir;

  beforeEach(() => {
    tempDir = path.join(process.cwd(), '.test-cache');
    cacheManager = new CacheManager(tempDir);

    // 重置 fs mock
    jest.clearAllMocks();
    mockFs.existsSync.mockReturnValue(false);
    mockFs.readFileSync.mockReturnValue('{}');
    mockFs.writeFileSync.mockImplementation(() => {});
    mockFs.mkdirSync.mockImplementation(() => {});
    mockFs.unlinkSync.mockImplementation(() => {});
    mockFs.rmSync.mockImplementation(() => {});
    mockFs.readdirSync.mockReturnValue([]);
    mockFs.statSync.mockReturnValue({ size: 1024, isDirectory: () => false });
  });

  describe('isCacheValid', () => {
    it('应该在缓存不存在时返回 false', () => {
      mockCache.getSync.mockReturnValue(undefined);
      const result = cacheManager.isCacheValid('./test.tsx', 'hash123');
      expect(result).toBe(false);
    });

    it('应该在内容哈希不匹配时返回 false', () => {
      // 模拟缓存条目存在但哈希不匹配
      const entry = {
        contentHash: 'oldHash',
        dependencyHashes: {},
        demoInfo: { id: 'test123', sourceCode: 'test code', dependencies: [] },
        timestamp: Date.now(),
      };
      mockCache.getSync.mockReturnValue(entry);

      const result = cacheManager.isCacheValid('./test.tsx', 'newHash');
      expect(result).toBe(false);
    });

    it('应该在内容哈希匹配且无依赖时返回 true', () => {
      const hash = 'hash123';
      const entry = {
        contentHash: hash,
        dependencyHashes: {},
        demoInfo: { id: 'test123', sourceCode: 'test code', dependencies: [] },
        timestamp: Date.now(),
      };
      mockCache.getSync.mockReturnValue(entry);

      const result = cacheManager.isCacheValid('./test.tsx', hash);
      expect(result).toBe(true);
    });
  });

  describe('setCachedDemo and getCachedDemo', () => {
    it('应该能够保存和获取缓存的演示信息', () => {
      const demoInfo = {
        id: 'test123',
        sourceCode:
          'export default function Test() { return <div>Test</div>; }',
        dependencies: [
          {
            type: 'FILE',
            source: './styles.css',
            ext: 'css',
            importType: 'side-effect',
            imported: [],
            value: '.test { color: red; }',
          },
        ],
      };

      cacheManager.setCachedDemo('./test.tsx', demoInfo, 'hash123');

      // 模拟 getSync 返回保存的条目
      const expectedEntry = {
        contentHash: 'hash123',
        dependencyHashes: {},
        demoInfo,
        timestamp: expect.any(Number),
      };
      mockCache.getSync.mockReturnValue(expectedEntry);

      const retrieved = cacheManager.getCachedDemo('./test.tsx');

      expect(retrieved).toEqual(demoInfo);
      expect(mockCache.setSync).toHaveBeenCalled();
    });

    it('应该在缓存不存在时返回 null', () => {
      mockCache.getSync.mockReturnValue(undefined);
      const result = cacheManager.getCachedDemo('./nonexistent.tsx');
      expect(result).toBeNull();
    });
  });

  describe('cleanupExpiredCache', () => {
    it('应该清理过期的缓存条目', () => {
      const now = Date.now();
      const oldTimestamp = now - 8 * 24 * 60 * 60 * 1000; // 8天前
      const newTimestamp = now - 1 * 24 * 60 * 60 * 1000; // 1天前

      // 模拟缓存目录存在并包含过期文件
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['old.json', 'new.json']);

      // 模拟读取缓存文件内容
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('old.json')) {
          return JSON.stringify({
            contentHash: 'oldHash',
            dependencyHashes: {},
            demoInfo: {
              id: 'old123',
              sourceCode: 'old code',
              dependencies: [],
            },
            timestamp: oldTimestamp,
          });
        } else if (filePath.includes('new.json')) {
          return JSON.stringify({
            contentHash: 'newHash',
            dependencyHashes: {},
            demoInfo: {
              id: 'new123',
              sourceCode: 'new code',
              dependencies: [],
            },
            timestamp: newTimestamp,
          });
        }
        return '{}';
      });

      cacheManager.cleanupExpiredCache(7 * 24 * 60 * 60 * 1000); // 7天

      // 验证删除过期文件
      expect(mockFs.unlinkSync).toHaveBeenCalledWith(
        expect.stringContaining('old.json'),
      );
      // 新文件不应该被删除
      expect(mockFs.unlinkSync).not.toHaveBeenCalledWith(
        expect.stringContaining('new.json'),
      );
    });
  });

  describe('getCacheStats', () => {
    it('应该返回正确的缓存统计信息', () => {
      // 模拟缓存目录存在
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['file1.json', 'file2.json']);
      mockFs.statSync.mockReturnValue({ size: 1024, isDirectory: () => false });

      const now = Date.now();

      // 模拟读取缓存文件内容
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('file1.json')) {
          return JSON.stringify({
            contentHash: 'hash1',
            dependencyHashes: {},
            demoInfo: { id: 'test1', sourceCode: 'code1', dependencies: [] },
            timestamp: now - 1000,
          });
        } else if (filePath.includes('file2.json')) {
          return JSON.stringify({
            contentHash: 'hash2',
            dependencyHashes: {},
            demoInfo: { id: 'test2', sourceCode: 'code2', dependencies: [] },
            timestamp: now,
          });
        }
        return '{}';
      });

      const stats = cacheManager.getCacheStats();

      expect(stats.totalEntries).toBe(2);
      expect(stats.totalSize).toBeGreaterThan(0);
      expect(stats.oldestEntry).toBe(now - 1000);
      expect(stats.newestEntry).toBe(now);
    });

    it('应该在没有缓存条目时返回零值', () => {
      const stats = cacheManager.getCacheStats();

      expect(stats.totalEntries).toBe(0);
      expect(stats.totalSize).toBe(0);
      expect(stats.oldestEntry).toBe(0);
      expect(stats.newestEntry).toBe(0);
    });
  });

  describe('clearAllCache', () => {
    it('应该清空所有缓存', () => {
      cacheManager.clearAllCache();

      // 验证调用了 file-system-cache 的 clear 方法
      expect(mockCache.clear).toHaveBeenCalled();
    });
  });

  describe('依赖哈希验证', () => {
    it('应该正确计算和验证依赖文件哈希', () => {
      const demoInfo = {
        id: 'test123',
        sourceCode: 'test code',
        dependencies: [
          {
            type: 'FILE',
            source: './dep.tsx',
            resolvedSource: './dep.tsx',
            ext: 'tsx',
            importType: 'default',
            imported: ['default'],
            value: 'dependency content',
          },
        ],
      };

      // 模拟依赖文件存在
      mockFs.existsSync.mockImplementation(
        (filePath) =>
          filePath.includes('./dep.tsx') || filePath.includes('.test-cache'),
      );

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('./dep.tsx')) {
          return 'dependency content';
        }
        return '{}';
      });

      cacheManager.setCachedDemo('./test.tsx', demoInfo, 'mainHash');

      // 模拟缓存条目存在，包含依赖哈希
      const expectedEntry = {
        contentHash: 'mainHash',
        dependencyHashes: {},
        demoInfo,
        timestamp: Date.now(),
      };
      mockCache.getSync.mockReturnValue(expectedEntry);

      // 验证缓存有效性
      const isValid = cacheManager.isCacheValid('./test.tsx', 'mainHash');
      expect(isValid).toBe(true);
    });
  });
});
