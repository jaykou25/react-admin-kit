import { FileHandler } from '../core/file-handler';
import { PathResolver } from '../utils/path-resolver';
import { DependencyAnalyzer } from '../utils/dependency-analyzer';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

// 模拟依赖模块
jest.mock('../utils/path-resolver');
jest.mock('../utils/dependency-analyzer');

// 模拟哈希工具
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

    // 创建 FileHandler 实例
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

      // 验证基本属性
      expect(result.id).toBe('file-hash-demo.tsx');
      expect(result.sourceCode).toBe(sourceCode);

      // 验证包含主文件
      const mainFileDep = result.dependencies.find(
        (dep) => dep.source === 'demo.tsx',
      );
      expect(mainFileDep).toEqual({
        type: 'FILE',
        source: 'demo.tsx',
        resolvedSource: 'demo.tsx',
        ext: 'tsx',
        importType: 'default',
        imported: ['default'],
        value: sourceCode,
        depth: 0,
        parent: undefined,
      });

      // 验证包含CSS依赖
      const cssDep = result.dependencies.find(
        (dep) =>
          dep.source === './styles.css' &&
          dep.value === '.demo { color: red; }',
      );
      expect(cssDep).toEqual({
        type: 'FILE',
        source: './styles.css',
        resolvedSource: './styles.css',
        ext: 'css',
        importType: 'side-effect',
        imported: [],
        value: '.demo { color: red; }',
        depth: 1,
        parent: srcPath,
      });

      // 验证包含React依赖
      const reactDep = result.dependencies.find(
        (dep) => dep.source === 'react' && dep.type === 'NPM',
      );
      expect(reactDep).toMatchObject({
        type: 'NPM',
        source: 'react',
        ext: '',
        importType: 'named',
        imported: ['useState'],
        depth: 1,
        parent: srcPath,
      });

      // 验证至少包含这些核心依赖
      expect(result.dependencies.length).toBeGreaterThanOrEqual(3);

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
        depth: 0,
        parent: undefined,
      });
    });

    it('应该正确处理递归依赖', () => {
      const srcPath = '/test/main.tsx';
      const mainCode =
        'import Button from "./Button"; export default function Main() { return <Button />; }';
      const buttonCode =
        'import "./button.css"; export default function Button() { return <button>Click</button>; }';
      const cssCode = '.button { color: blue; }';

      // Mock 文件读取
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === srcPath) return mainCode;
        if (filePath === '/test/Button.tsx') return buttonCode;
        if (filePath === '/test/button.css') return cssCode;
        return 'default content';
      });

      // Mock 依赖分析
      mockDependencyAnalyzer.analyzeDependencies.mockImplementation((code) => {
        if (code === mainCode) {
          return [
            {
              type: 'FILE',
              source: './Button',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ];
        }
        if (code === buttonCode) {
          return [
            {
              type: 'FILE',
              source: './button.css',
              ext: 'css',
              importType: 'side-effect',
              imported: [],
            },
          ];
        }
        return [];
      });

      // Mock 路径解析
      mockPathResolver.resolvePath.mockImplementation((filePath) => {
        if (filePath.includes('Button')) return '/test/Button.tsx';
        if (filePath.includes('button.css')) return '/test/button.css';
        return filePath;
      });

      mockPathResolver.getFullRelPath.mockImplementation(
        (resolved, original) => {
          if (original === './Button') return './Button.tsx';
          if (original === './button.css') return './button.css';
          return original;
        },
      );

      const result = fileHandler.processDemo(srcPath);

      // 验证结果包含所有层级的依赖
      expect(result.dependencies.length).toBeGreaterThanOrEqual(3);

      // 验证深度信息
      const mainDep = result.dependencies.find(
        (dep) => dep.source === 'main.tsx',
      );
      const buttonDep = result.dependencies.find(
        (dep) => dep.source === './Button',
      );
      const cssDep = result.dependencies.find(
        (dep) => dep.source === './button.css',
      );

      expect(mainDep?.depth).toBe(0);
      expect(buttonDep?.depth).toBe(1);
      expect(cssDep?.depth).toBe(2);

      // 验证父文件信息
      expect(buttonDep?.parent).toBe(srcPath);
      expect(cssDep?.parent).toBe('/test/Button.tsx');
    });

    it('应该正确处理递归依赖中的重复项依赖', () => {
      const srcPath = '/test/main.tsx';
      const mainCode =
        'import Button1 from "./Button1"; import Button2 from "./Button2"; export default function Main() { return <div><Button1 /><Button2 /></div>; }';

      const button1Code =
        'import Button from "./Button"; export default function Main() { return <Button />; }';
      const button2Code =
        'import Button from "./Button"; export default function Main() { return <Button />; }';

      const buttonCode =
        'import "./button.css"; export default function Button() { return <button>Click</button>; }';
      const cssCode = '.button { color: blue; }';

      // Mock 文件读取
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === srcPath) return mainCode;
        if (filePath === '/test/Button1.tsx') return button1Code;
        if (filePath === '/test/Button2.tsx') return button2Code;
        if (filePath === '/test/Button.tsx') return buttonCode;
        if (filePath === '/test/button.css') return cssCode;
        return 'default content';
      });

      // Mock 依赖分析
      mockDependencyAnalyzer.analyzeDependencies.mockImplementation((code) => {
        if (code === mainCode) {
          return [
            {
              type: 'FILE',
              source: './Button1',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
            {
              type: 'FILE',
              source: './Button2',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ];
        }

        if (code === button1Code) {
          return [
            {
              type: 'FILE',
              source: './Button',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ];
        }

        if (code === button2Code) {
          return [
            {
              type: 'FILE',
              source: './Button',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ];
        }

        if (code === buttonCode) {
          return [
            {
              type: 'FILE',
              source: './button.css',
              ext: 'css',
              importType: 'side-effect',
              imported: [],
            },
          ];
        }
        return [];
      });

      // Mock 路径解析
      mockPathResolver.resolvePath.mockImplementation((filePath) => {
        if (filePath.includes('Button1')) return '/test/Button1.tsx';
        if (filePath.includes('Button2')) return '/test/Button2.tsx';
        if (filePath.includes('Button')) return '/test/Button.tsx';
        if (filePath.includes('button.css')) return '/test/button.css';
        return filePath;
      });

      mockPathResolver.getFullRelPath.mockImplementation(
        (resolved, original) => {
          if (original === './Button') return './Button.tsx';
          if (original === './Button1') return './Button1.tsx';
          if (original === './Button2') return './Button2.tsx';
          if (original === './button.css') return './button.css';
          return original;
        },
      );

      const result = fileHandler.processDemo(srcPath);

      // 验证结果包含所有层级的依赖
      expect(result.dependencies.length).toBe(5);
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
      expect(result.dependencies[1]).toEqual({
        ...mockDependencies[0],
        depth: 1,
        parent: srcPath,
        value: '// 读取文件失败: File not found',
      }); // 包含错误处理信息
      expect(consoleSpy).toHaveBeenCalledWith(
        '无法读取依赖文件: ./missing.css',
        expect.any(Error),
      );

      consoleSpy.mockRestore();
    });

    it('应该处理子依赖分析失败的情况', () => {
      const srcPath = '/test/main.tsx';
      const mainCode =
        'import Button from "./Button"; export default function Main() { return <Button />; }';
      const buttonCode =
        'import "./button.css"; export default function Button() { return <button>Click</button>; }';

      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      // Mock 文件读取
      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath === srcPath) return mainCode;
        if (filePath === '/test/Button.tsx') return buttonCode;
        return 'default content';
      });

      // Mock 依赖分析 - 第一次成功，第二次失败
      let analyzeCallCount = 0;
      mockDependencyAnalyzer.analyzeDependencies.mockImplementation((code) => {
        analyzeCallCount++;
        if (analyzeCallCount === 1 && code === mainCode) {
          return [
            {
              type: 'FILE',
              source: './Button',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ];
        }
        if (analyzeCallCount === 2 && code === buttonCode) {
          throw new Error('Dependency analysis failed');
        }
        return [];
      });

      // Mock 路径解析
      mockPathResolver.resolvePath.mockReturnValue('/test/Button.tsx');
      mockPathResolver.getFullRelPath.mockReturnValue('./Button.tsx');

      const result = fileHandler.processDemo(srcPath);

      // 验证子依赖分析失败警告
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('分析子依赖失败'),
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

    it('应该处理 calculateFileHash 方法抛出异常的情况', async () => {
      const filePaths = ['/test/file1.tsx'];
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      // 模拟 calculateFileHash 方法直接抛出异常
      const originalCalculateFileHash = fileHandler.calculateFileHash;
      fileHandler.calculateFileHash = jest.fn().mockImplementation(() => {
        throw new Error('Calculate hash failed');
      });

      const results = await fileHandler.calculateFileHashesParallel(filePaths);

      expect(results).toEqual({});
      expect(consoleSpy).toHaveBeenCalledWith(
        '计算文件哈希失败: /test/file1.tsx',
        expect.any(Error),
      );

      // 恢复原始方法
      fileHandler.calculateFileHash = originalCalculateFileHash;
      consoleSpy.mockRestore();
    });
  });
});
