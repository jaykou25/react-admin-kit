import { FileHandler } from '../core/file-handler';
import { PathResolver } from '../utils/path-resolver';
import { DependencyAnalyzer } from '../utils/dependency-analyzer';
import fs from 'fs';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

// 模拟依赖模块
jest.mock('../utils/path-resolver');
jest.mock('../utils/dependency-analyzer');

// 使用 mockImplementation 而不是直接在 mock 定义中使用外部变量
jest.mock('../utils/hash-utils', () => {
  return {
    calculateContentHash: jest
      .fn()
      .mockImplementation((content) => `hash-${content.length}`),
    generateFileHash: jest.fn().mockImplementation((filePath) => {
      const basename = filePath.split('/').pop();
      return `file-hash-${basename}`;
    }),
  };
});

describe('FileHandler', () => {
  let fileHandler;
  let mockPathResolver;
  let mockDependencyAnalyzer;

  beforeEach(() => {
    // 重置所有 mock
    jest.clearAllMocks();

    // 创建 mock 实例
    mockPathResolver = {
      resolvePath: jest.fn(),
      getFullRelPath: jest.fn(),
    };

    mockDependencyAnalyzer = {
      analyzeDependencies: jest.fn(),
    };

    // 模拟构造函数
    PathResolver.mockImplementation(() => mockPathResolver);
    DependencyAnalyzer.mockImplementation(() => mockDependencyAnalyzer);

    fileHandler = new FileHandler(mockPathResolver, mockDependencyAnalyzer);

    // 默认 fs mock 设置
    mockFs.readFileSync.mockReturnValue('test content');
    mockFs.existsSync.mockReturnValue(true);
  });

  describe('processDemo', () => {
    it('应该正确处理单个演示文件', () => {
      const srcPath = '/test/demo.tsx';
      const sourceCode =
        'export default function Demo() { return <div>Test</div>; }';
      const mockDependencies = [
        {
          type: 'FILE',
          source: './styles.css',
          ext: 'css',
          importType: 'side-effect',
          imported: [],
        },
        {
          type: 'NPM',
          source: 'react',
          ext: '',
          importType: 'named',
          imported: ['useState'],
        },
      ];

      // 设置 mock 返回值
      mockFs.readFileSync.mockReturnValue(sourceCode);
      mockDependencyAnalyzer.analyzeDependencies.mockReturnValue(
        mockDependencies,
      );
      mockPathResolver.resolvePath.mockReturnValue('/test/styles.css');
      mockPathResolver.getFullRelPath.mockReturnValue('./styles.css');
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === srcPath) return sourceCode;
        if (filePath === '/test/styles.css') return '.demo { color: red; }';
        return 'default content';
      });

      const result = fileHandler.processDemo(srcPath);

      expect(result).toEqual({
        id: 'file-hash-demo.tsx',
        sourceCode,
        dependencies: [
          {
            type: 'FILE',
            source: 'demo.tsx',
            resolvedSource: 'demo.tsx',
            ext: 'tsx',
            importType: 'default',
            imported: ['default'],
            value: sourceCode,
          },
          {
            type: 'FILE',
            source: './styles.css',
            resolvedSource: './styles.css',
            ext: 'css',
            importType: 'side-effect',
            imported: [],
            value: '.demo { color: red; }',
          },
          {
            type: 'NPM',
            source: 'react',
            ext: '',
            importType: 'named',
            imported: ['useState'],
          },
        ],
      });

      expect(mockFs.readFileSync).toHaveBeenCalledWith(srcPath, 'utf-8');
      expect(mockDependencyAnalyzer.analyzeDependencies).toHaveBeenCalledWith(
        sourceCode,
      );
    });

    it('应该处理没有扩展名的文件', () => {
      const srcPath = '/test/demo';
      const sourceCode =
        'export default function Demo() { return <div>Test</div>; }';

      mockFs.readFileSync.mockReturnValue(sourceCode);
      mockDependencyAnalyzer.analyzeDependencies.mockReturnValue([]);

      const result = fileHandler.processDemo(srcPath);

      expect(result.dependencies[0]).toEqual({
        type: 'FILE',
        source: 'demo',
        resolvedSource: 'demo',
        ext: 'tsx', // 默认扩展名
        importType: 'default',
        imported: ['default'],
        value: sourceCode,
      });
    });

    it('应该处理依赖文件读取失败的情况', () => {
      const srcPath = '/test/demo.tsx';
      const sourceCode =
        'export default function Demo() { return <div>Test</div>; }';
      const mockDependencies = [
        {
          type: 'FILE',
          source: './missing.css',
          ext: 'css',
          importType: 'side-effect',
          imported: [],
        },
      ];

      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === srcPath) return sourceCode;
        throw new Error('File not found');
      });
      mockDependencyAnalyzer.analyzeDependencies.mockReturnValue(
        mockDependencies,
      );
      mockPathResolver.resolvePath.mockReturnValue('/test/missing.css');

      const result = fileHandler.processDemo(srcPath);

      expect(result.dependencies).toHaveLength(2); // 原文件 + 失败的依赖
      expect(result.dependencies[1]).toEqual(mockDependencies[0]); // 保持原样
      expect(consoleSpy).toHaveBeenCalledWith(
        '无法读取依赖文件: ./missing.css',
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });
  });

  describe('calculateFileHash', () => {
    it('应该正确计算文件哈希', () => {
      const filePath = '/test/file.tsx';
      const content = 'test content';

      mockFs.readFileSync.mockReturnValue(content);

      const result = fileHandler.calculateFileHash(filePath);

      expect(result).toBe('hash-12'); // content.length = 12
      expect(mockFs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
    });

    it('应该处理文件读取失败的情况', () => {
      const filePath = '/test/missing.tsx';
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      mockFs.readFileSync.mockImplementation(() => {
        throw new Error('File not found');
      });

      const result = fileHandler.calculateFileHash(filePath);

      expect(result).toBe('');
      expect(consoleSpy).toHaveBeenCalledWith(
        `无法计算文件哈希: ${filePath}`,
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });
  });

  describe('fileExists', () => {
    it('应该正确检查文件是否存在', () => {
      const filePath = '/test/file.tsx';

      mockFs.existsSync.mockReturnValue(true);
      expect(fileHandler.fileExists(filePath)).toBe(true);

      mockFs.existsSync.mockReturnValue(false);
      expect(fileHandler.fileExists(filePath)).toBe(false);

      expect(mockFs.existsSync).toHaveBeenCalledWith(filePath);
    });
  });

  describe('processDemosParallel', () => {
    it('应该并行处理多个演示文件', async () => {
      const filePaths = ['/test/demo1.tsx', '/test/demo2.tsx'];
      const sourceCode1 =
        'export default function Demo1() { return <div>Demo1</div>; }';
      const sourceCode2 =
        'export default function Demo2() { return <div>Demo2</div>; }';

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === '/test/demo1.tsx') return sourceCode1;
        if (filePath === '/test/demo2.tsx') return sourceCode2;
        return 'default content';
      });
      mockDependencyAnalyzer.analyzeDependencies.mockReturnValue([]);

      const results = await fileHandler.processDemosParallel(filePaths);

      expect(results).toHaveLength(2);
      expect(results[0].id).toBe('file-hash-demo1.tsx');
      expect(results[0].sourceCode).toBe(sourceCode1);
      expect(results[1].id).toBe('file-hash-demo2.tsx');
      expect(results[1].sourceCode).toBe(sourceCode2);
    });

    it('应该处理部分文件处理失败的情况', async () => {
      const filePaths = [
        '/test/demo1.tsx',
        '/test/missing.tsx',
        '/test/demo3.tsx',
      ];
      const sourceCode1 =
        'export default function Demo1() { return <div>Demo1</div>; }';
      const sourceCode3 =
        'export default function Demo3() { return <div>Demo3</div>; }';

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === '/test/demo1.tsx') return sourceCode1;
        if (filePath === '/test/missing.tsx') throw new Error('File not found');
        if (filePath === '/test/demo3.tsx') return sourceCode3;
        return 'default content';
      });
      mockDependencyAnalyzer.analyzeDependencies.mockReturnValue([]);

      const results = await fileHandler.processDemosParallel(filePaths);

      expect(results).toHaveLength(2); // 只有成功的文件
      expect(results[0].id).toBe('file-hash-demo1.tsx');
      expect(results[1].id).toBe('file-hash-demo3.tsx');
      expect(consoleSpy).toHaveBeenCalledWith(
        '处理文件失败: /test/missing.tsx',
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });

    it('应该处理空文件列表', async () => {
      const results = await fileHandler.processDemosParallel([]);
      expect(results).toEqual([]);
    });
  });

  describe('calculateFileHashesParallel', () => {
    it('应该并行计算多个文件的哈希', async () => {
      const filePaths = ['/test/file1.tsx', '/test/file2.tsx'];

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === '/test/file1.tsx') return 'content1';
        if (filePath === '/test/file2.tsx') return 'content2';
        return 'default';
      });

      const results = await fileHandler.calculateFileHashesParallel(filePaths);

      expect(results).toEqual({
        '/test/file1.tsx': 'hash-8', // 'content1'.length = 8
        '/test/file2.tsx': 'hash-8', // 'content2'.length = 8
      });
    });

    it('应该处理部分文件哈希计算失败的情况', async () => {
      const filePaths = [
        '/test/file1.tsx',
        '/test/missing.tsx',
        '/test/file3.tsx',
      ];
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === '/test/file1.tsx') return 'content1';
        if (filePath === '/test/missing.tsx') throw new Error('File not found');
        if (filePath === '/test/file3.tsx') return 'content3';
        return 'default';
      });

      const results = await fileHandler.calculateFileHashesParallel(filePaths);

      expect(results).toEqual({
        '/test/file1.tsx': 'hash-8',
        '/test/file3.tsx': 'hash-8',
        // missing.tsx 不在结果中，因为哈希为空
      });
      expect(consoleSpy).toHaveBeenCalledWith(
        '无法计算文件哈希: /test/missing.tsx',
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });

    it('应该处理空文件列表', async () => {
      const results = await fileHandler.calculateFileHashesParallel([]);
      expect(results).toEqual({});
    });

    it('应该过滤掉空哈希值', async () => {
      const filePaths = ['/test/file1.tsx', '/test/file2.tsx'];

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === '/test/file1.tsx') return 'content1';
        if (filePath === '/test/file2.tsx') throw new Error('File not found');
        return 'default';
      });

      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      const results = await fileHandler.calculateFileHashesParallel(filePaths);

      expect(results).toEqual({
        '/test/file1.tsx': 'hash-8',
        // file2.tsx 不在结果中，因为哈希为空
      });

      consoleSpy.mockRestore();
    });
  });

  describe('processDependenciesParallel', () => {
    it('应该正确分离和处理文件依赖与非文件依赖', () => {
      const srcPath = '/test/demo.tsx';
      const rawDependencies = [
        {
          type: 'FILE',
          source: './component.tsx',
          ext: 'tsx',
          importType: 'default',
          imported: ['default'],
        },
        {
          type: 'NPM',
          source: 'react',
          ext: '',
          importType: 'named',
          imported: ['useState'],
        },
        {
          type: 'FILE',
          source: './styles.css',
          ext: 'css',
          importType: 'side-effect',
          imported: [],
        },
      ];

      mockPathResolver.resolvePath.mockImplementation((filePath) => filePath);
      mockPathResolver.getFullRelPath.mockImplementation(
        (resolved, original) => original,
      );
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('component.tsx')) return 'component content';
        if (filePath.includes('styles.css')) return 'css content';
        return 'default content';
      });

      // 通过反射调用私有方法进行测试
      const result = fileHandler['processDependenciesParallel'](
        rawDependencies,
        srcPath,
      );

      expect(result).toHaveLength(3);

      // 检查文件依赖被正确处理
      const fileDeps = result.filter((dep) => dep.type === 'FILE');
      expect(fileDeps).toHaveLength(2);
      expect(fileDeps[0].value).toBe('component content');
      expect(fileDeps[1].value).toBe('css content');

      // 检查非文件依赖保持不变
      const npmDeps = result.filter((dep) => dep.type === 'NPM');
      expect(npmDeps).toHaveLength(1);
      expect(npmDeps[0]).toEqual(rawDependencies[1]);
    });
  });
});
