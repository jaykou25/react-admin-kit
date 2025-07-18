import { CacheManager } from '../core/cache-manager';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

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
      const result = cacheManager.isCacheValid('./test.tsx', 'hash123');
      expect(result).toBe(false);
    });

    it('应该在内容哈希不匹配时返回 false', () => {
      // 模拟缓存条目存在
      cacheManager.setCachedDemo(
        './test.tsx',
        {
          id: 'test123',
          sourceCode: 'test code',
          dependencies: [],
        },
        'oldHash',
      );

      const result = cacheManager.isCacheValid('./test.tsx', 'newHash');
      expect(result).toBe(false);
    });

    it('应该在内容哈希匹配且无依赖时返回 true', () => {
      const hash = 'hash123';
      cacheManager.setCachedDemo(
        './test.tsx',
        {
          id: 'test123',
          sourceCode: 'test code',
          dependencies: [],
        },
        hash,
      );

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
      const retrieved = cacheManager.getCachedDemo('./test.tsx');

      expect(retrieved).toEqual(demoInfo);
      expect(mockFs.writeFileSync).toHaveBeenCalled();
    });

    it('应该在缓存不存在时返回 null', () => {
      const result = cacheManager.getCachedDemo('./nonexistent.tsx');
      expect(result).toBeNull();
    });
  });

  describe('generateCacheFiles', () => {
    it('应该生成兼容的缓存文件', () => {
      const allDemos = {
        './demo1.tsx': {
          id: 'demo1',
          sourceCode: 'demo1 code',
          dependencies: [],
        },
        './demo2.tsx': {
          id: 'demo2',
          sourceCode: 'demo2 code',
          dependencies: [],
        },
      };

      cacheManager.generateCacheFiles(allDemos);

      // 验证创建目录
      expect(mockFs.mkdirSync).toHaveBeenCalledWith(tempDir, {
        recursive: true,
      });

      // 验证写入文件
      expect(mockFs.writeFileSync).toHaveBeenCalledTimes(2); // result.json + demos.ts

      // 验证 result.json 内容
      const resultCall = mockFs.writeFileSync.mock.calls.find((call) =>
        call[0].includes('result.json'),
      );
      expect(resultCall).toBeDefined();
      expect(resultCall[1]).toContain('demo1');
      expect(resultCall[1]).toContain('demo2');

      // 验证 demos.ts 内容
      const demosCall = mockFs.writeFileSync.mock.calls.find((call) =>
        call[0].includes('demos.ts'),
      );
      expect(demosCall).toBeDefined();
      expect(demosCall[1]).toContain('React.lazy');
      expect(demosCall[1]).toContain('import');
    });
  });

  describe('cleanupExpiredCache', () => {
    it('应该清理过期的缓存条目', () => {
      const now = Date.now();
      const oldTimestamp = now - 8 * 24 * 60 * 60 * 1000; // 8天前
      const newTimestamp = now - 1 * 24 * 60 * 60 * 1000; // 1天前

      // 添加一个过期的缓存条目
      cacheManager.setCachedDemo(
        './old.tsx',
        {
          id: 'old123',
          sourceCode: 'old code',
          dependencies: [],
        },
        'oldHash',
      );

      // 手动设置时间戳为过期时间
      cacheManager.cacheIndex = {
        './old.tsx': {
          contentHash: 'oldHash',
          dependencyHashes: {},
          demoInfo: { id: 'old123', sourceCode: 'old code', dependencies: [] },
          timestamp: oldTimestamp,
        },
        './new.tsx': {
          contentHash: 'newHash',
          dependencyHashes: {},
          demoInfo: { id: 'new123', sourceCode: 'new code', dependencies: [] },
          timestamp: newTimestamp,
        },
      };

      // 模拟文件存在
      mockFs.existsSync.mockImplementation((filePath) =>
        filePath.includes('old123.json'),
      );

      cacheManager.cleanupExpiredCache(7 * 24 * 60 * 60 * 1000); // 7天

      // 验证删除过期文件
      expect(mockFs.unlinkSync).toHaveBeenCalled();
      expect(mockFs.writeFileSync).toHaveBeenCalled(); // 保存更新的索引
    });
  });

  describe('getCacheStats', () => {
    it('应该返回正确的缓存统计信息', () => {
      // 模拟缓存目录存在
      mockFs.existsSync.mockReturnValue(true);
      mockFs.readdirSync.mockReturnValue(['file1.json', 'file2.json']);
      mockFs.statSync.mockReturnValue({ size: 1024, isDirectory: () => false });

      const now = Date.now();
      cacheManager.cacheIndex = {
        './test1.tsx': {
          contentHash: 'hash1',
          dependencyHashes: {},
          demoInfo: { id: 'test1', sourceCode: 'code1', dependencies: [] },
          timestamp: now - 1000,
        },
        './test2.tsx': {
          contentHash: 'hash2',
          dependencyHashes: {},
          demoInfo: { id: 'test2', sourceCode: 'code2', dependencies: [] },
          timestamp: now,
        },
      };

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
      // 模拟缓存目录存在
      mockFs.existsSync.mockReturnValue(true);

      cacheManager.clearAllCache();

      // 验证删除缓存目录
      expect(mockFs.rmSync).toHaveBeenCalledWith(tempDir, {
        recursive: true,
        force: true,
      });
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

      // 验证缓存有效性
      const isValid = cacheManager.isCacheValid('./test.tsx', 'mainHash');
      expect(isValid).toBe(true);
    });
  });
});
