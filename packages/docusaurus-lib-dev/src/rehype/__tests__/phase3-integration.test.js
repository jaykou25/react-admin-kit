import { CacheManager } from '../core/cache-manager';
import { FileHandler } from '../core/file-handler';
import { ComponentGenerator } from '../core/component-generator';
import { PathResolver } from '../utils/path-resolver';
import { DependencyAnalyzer } from '../utils/dependency-analyzer';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

describe('Phase 3: 缓存机制集成测试', () => {
  let cacheManager;
  let fileHandler;
  let componentGenerator;
  let tempDir;

  beforeEach(() => {
    tempDir = path.join(process.cwd(), '.test-cache');

    // 重置 fs mock
    jest.clearAllMocks();

    // 模拟文件系统基本操作
    mockFs.existsSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx') || filePath.includes('styles.css')) {
        return true;
      }
      if (filePath.includes('.test-cache')) {
        return true;
      }
      return false;
    });

    mockFs.statSync.mockImplementation(() => ({
      isFile: () => true,
      isDirectory: () => false,
      size: 1024,
    }));

    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx')) {
        return `
import React from 'react';
import './styles.css';

export default function Demo() {
  return <div className="demo">Hello World</div>;
}`;
      }
      if (filePath.includes('styles.css')) {
        return '.demo { color: blue; }';
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    mockFs.mkdirSync.mockImplementation(() => {});
    mockFs.writeFileSync.mockImplementation(() => {});
    mockFs.unlinkSync.mockImplementation(() => {});
    mockFs.rmSync.mockImplementation(() => {});
    mockFs.readdirSync.mockReturnValue(['file1.json', 'file2.json']);

    // 初始化各个模块
    const pathResolver = new PathResolver();
    const dependencyAnalyzer = new DependencyAnalyzer();
    cacheManager = new CacheManager(tempDir);
    fileHandler = new FileHandler(pathResolver, dependencyAnalyzer);
    componentGenerator = new ComponentGenerator(tempDir);
  });

  it('应该实现完整的缓存验证流程', () => {
    const filePath = './demo.tsx';
    const basePath = '/test/file.mdx';

    // 1. 第一次处理文件（无缓存）
    const demoInfo1 = fileHandler.processDemo(filePath, basePath);
    const contentHash1 = fileHandler.calculateFileHash(filePath);

    // 验证缓存不存在
    expect(cacheManager.isCacheValid(filePath, contentHash1)).toBe(false);
    expect(cacheManager.getCachedDemo(filePath)).toBeNull();

    // 2. 保存到缓存
    cacheManager.setCachedDemo(filePath, demoInfo1, contentHash1);

    // 验证缓存有效
    expect(cacheManager.isCacheValid(filePath, contentHash1)).toBe(true);
    expect(cacheManager.getCachedDemo(filePath)).toEqual(demoInfo1);

    // 3. 模拟文件内容变化
    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx')) {
        return `
import React from 'react';
import './styles.css';

export default function Demo() {
  return <div className="demo">Hello World - Modified</div>;
}`;
      }
      if (filePath.includes('styles.css')) {
        return '.demo { color: blue; }';
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    const contentHash2 = fileHandler.calculateFileHash(filePath);

    // 验证缓存失效
    expect(cacheManager.isCacheValid(filePath, contentHash2)).toBe(false);

    // 4. 重新处理并更新缓存
    const demoInfo2 = fileHandler.processDemo(filePath, basePath);
    cacheManager.setCachedDemo(filePath, demoInfo2, contentHash2);

    // 验证新缓存有效
    expect(cacheManager.isCacheValid(filePath, contentHash2)).toBe(true);
    expect(cacheManager.getCachedDemo(filePath)).toEqual(demoInfo2);
  });

  it('应该正确处理依赖文件变化的缓存失效', () => {
    const filePath = './demo.tsx';
    const basePath = '/test/file.mdx';

    // 1. 处理文件并缓存
    const demoInfo = fileHandler.processDemo(filePath, basePath);
    const contentHash = fileHandler.calculateFileHash(filePath);
    cacheManager.setCachedDemo(filePath, demoInfo, contentHash);

    // 验证缓存有效
    expect(cacheManager.isCacheValid(filePath, contentHash)).toBe(true);

    // 2. 模拟依赖文件内容变化
    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx')) {
        return `
import React from 'react';
import './styles.css';

export default function Demo() {
  return <div className="demo">Hello World</div>;
}`;
      }
      if (filePath.includes('styles.css')) {
        return '.demo { color: red; }'; // 依赖文件内容变化
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    // 验证缓存因依赖变化而失效
    expect(cacheManager.isCacheValid(filePath, contentHash)).toBe(false);
  });

  it('应该支持并行处理多个文件', async () => {
    const filePaths = ['./demo1.tsx', './demo2.tsx', './demo3.tsx'];
    const basePath = '/test/file.mdx';

    // 扩展 fs mock 以支持多个文件
    mockFs.existsSync.mockImplementation((filePath) => {
      return (
        filePaths.some((fp) => filePath.includes(fp.replace('./', ''))) ||
        filePath.includes('.test-cache')
      );
    });

    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo1.tsx')) {
        return 'export default function Demo1() { return <div>Demo 1</div>; }';
      }
      if (filePath.includes('demo2.tsx')) {
        return 'export default function Demo2() { return <div>Demo 2</div>; }';
      }
      if (filePath.includes('demo3.tsx')) {
        return 'export default function Demo3() { return <div>Demo 3</div>; }';
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    // 并行处理多个文件
    const results = await fileHandler.processDemosParallel(filePaths, basePath);

    // 验证处理结果
    expect(results).toHaveLength(3);
    expect(results[0].sourceCode).toContain('Demo1');
    expect(results[1].sourceCode).toContain('Demo2');
    expect(results[2].sourceCode).toContain('Demo3');

    // 并行计算文件哈希
    const hashes = await fileHandler.calculateFileHashesParallel(filePaths);
    expect(Object.keys(hashes)).toHaveLength(3);
  });

  it('应该支持缓存统计和清理功能', () => {
    const filePath1 = './demo1.tsx';
    const filePath2 = './demo2.tsx';
    const basePath = '/test/file.mdx';

    // 添加多个缓存条目
    const demoInfo1 = fileHandler.processDemo(filePath1, basePath);
    const demoInfo2 = fileHandler.processDemo(filePath2, basePath);

    cacheManager.setCachedDemo(filePath1, demoInfo1, 'hash1');
    cacheManager.setCachedDemo(filePath2, demoInfo2, 'hash2');

    // 获取缓存统计
    const stats = cacheManager.getCacheStats();
    expect(stats.totalEntries).toBe(2);
    expect(stats.totalSize).toBeGreaterThan(0);

    // 清理过期缓存
    cacheManager.cleanupExpiredCache(1000); // 1秒过期时间

    // 清空所有缓存
    cacheManager.clearAllCache();
    expect(mockFs.rmSync).toHaveBeenCalledWith(tempDir, {
      recursive: true,
      force: true,
    });
  });

  it('应该集成组件生成和缓存机制', () => {
    const filePath = './demo.tsx';
    const basePath = '/test/file.mdx';

    // 1. 处理文件
    const demoInfo = fileHandler.processDemo(filePath, basePath);
    const contentHash = fileHandler.calculateFileHash(filePath);

    // 2. 生成组件
    const componentInfo = componentGenerator.generateComponent(demoInfo, {
      inline: false,
      componentId: 'Demo_basic',
      mdxFilePath: basePath,
    });

    // 3. 写入组件文件
    componentGenerator.writeComponentFile(componentInfo);

    // 4. 缓存演示信息
    cacheManager.setCachedDemo(filePath, demoInfo, contentHash);

    // 5. 生成缓存文件
    const allDemos = {
      [componentInfo.filePath]: demoInfo,
    };
    cacheManager.generateCacheFiles(allDemos);

    // 验证整个流程
    expect(mockFs.writeFileSync).toHaveBeenCalledTimes(5); // 组件文件 + 缓存条目 + 缓存索引 + result.json + demos.ts
    expect(cacheManager.isCacheValid(filePath, contentHash)).toBe(true);
  });

  it('应该优雅处理缓存错误', () => {
    // 模拟文件系统错误
    mockFs.readFileSync.mockImplementation(() => {
      throw new Error('File system error');
    });

    mockFs.writeFileSync.mockImplementation(() => {
      throw new Error('Write error');
    });

    // 验证错误处理不会导致崩溃
    expect(() => {
      const filePath = './demo.tsx';
      const demoInfo = {
        id: 'test123',
        sourceCode: 'test code',
        dependencies: [],
      };

      cacheManager.setCachedDemo(filePath, demoInfo, 'hash123');
      cacheManager.getCachedDemo(filePath);
      cacheManager.isCacheValid(filePath, 'hash123');
      cacheManager.getCacheStats();
    }).not.toThrow();
  });
});
