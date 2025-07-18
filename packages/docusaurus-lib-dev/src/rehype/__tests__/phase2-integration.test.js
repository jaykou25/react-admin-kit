import { ComponentGenerator } from '../core/component-generator';
import { CacheManager } from '../core/cache-manager';
import { FileHandler } from '../core/file-handler';
import { PathResolver } from '../utils/path-resolver';
import { DependencyAnalyzer } from '../utils/dependency-analyzer';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

describe('Phase 2: 独立组件生成机制集成测试', () => {
  let componentGenerator;
  let fileHandler;
  let cacheManager;
  let tempDir;

  beforeEach(() => {
    tempDir = path.join(process.cwd(), '.test-cache');

    // 重置 fs mock
    jest.clearAllMocks();

    // 模拟文件系统基本操作
    mockFs.existsSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx') || filePath.includes('basic.tsx')) {
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
    }));

    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx') || filePath.includes('basic.tsx')) {
        return `
import React from 'react';
import { Button } from 'antd';
import './styles.less';

export default function Demo() {
  return <Button type="primary">Hello World</Button>;
}`;
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    mockFs.mkdirSync.mockImplementation(() => {});
    mockFs.writeFileSync.mockImplementation(() => {});

    // 初始化各个模块
    const pathResolver = new PathResolver();
    const dependencyAnalyzer = new DependencyAnalyzer();
    cacheManager = new CacheManager(tempDir);
    fileHandler = new FileHandler(pathResolver, dependencyAnalyzer);
    const alias = { '@@': '/src/components' };
    componentGenerator = new ComponentGenerator(tempDir, alias);
  });

  it('应该完整处理从文件到组件的流程', () => {
    // 1. 使用 FileHandler 处理演示文件
    const demoInfo = fileHandler.processDemo('./demo.tsx', '/test/file.mdx');

    // 验证文件处理结果
    expect(demoInfo.id).toBeDefined();
    expect(demoInfo.sourceCode).toContain('export default function Demo');
    expect(demoInfo.dependencies).toBeInstanceOf(Array);

    // 2. 使用 ComponentGenerator 生成组件
    const srcPath = '@@/Button/demos/basic';
    const componentInfo = componentGenerator.generateComponent(
      demoInfo,
      {
        inline: false,
        componentId: 'Demo_basic',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath,
    );

    // 验证组件信息
    expect(componentInfo.componentName).toMatch(/^PreviewerDemo_basic_/);
    expect(componentInfo.inline).toBe(false);
    expect(componentInfo.demoInfo).toBe(demoInfo);

    // 3. 写入组件文件
    const filePath = componentGenerator.writeComponentFile(componentInfo);

    // 验证文件写入
    expect(mockFs.writeFileSync).toHaveBeenCalled();
    expect(filePath).toBe(componentInfo.filePath);

    // 4. 生成导入语句
    const importStatement = componentGenerator.generateImportStatement(
      componentInfo,
      '/test/file.mdx',
    );

    // 验证导入语句
    expect(importStatement.componentName).toBe(componentInfo.componentName);
    expect(importStatement.importPath).toMatch(/^\./);

    // 5. 验证缓存操作
    const contentHash = fileHandler.calculateFileHash('./demo.tsx');
    expect(contentHash).toBeDefined();

    cacheManager.setCachedDemo('./demo.tsx', demoInfo, contentHash);
    const cachedDemo = cacheManager.getCachedDemo('./demo.tsx');
    expect(cachedDemo).toEqual(demoInfo);
  });

  it('应该处理带 inline 属性的组件生成', () => {
    // 1. 处理演示文件
    const demoInfo = fileHandler.processDemo('./demo.tsx', '/test/file.mdx');

    // 2. 生成带 inline 属性的组件
    const srcPath = '@@/Button/demos/inline';
    const componentInfo = componentGenerator.generateComponent(
      demoInfo,
      {
        inline: true,
        componentId: 'Demo_inline',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath,
    );

    // 验证 inline 属性被正确处理
    expect(componentInfo.inline).toBe(true);

    // 3. 写入组件文件并验证内容
    componentGenerator.writeComponentFile(componentInfo);

    // 验证写入的组件代码包含 inline={true}
    const writtenContent = mockFs.writeFileSync.mock.calls[0][1];
    expect(writtenContent).toContain('inline={true}');
  });

  it('应该处理多个组件的生成', () => {
    // 扩展 fs mock 以支持多个文件
    mockFs.existsSync.mockImplementation((filePath) => {
      return (
        filePath.includes('demo1.tsx') ||
        filePath.includes('demo2.tsx') ||
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
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    // 1. 处理第一个演示文件
    const demoInfo1 = fileHandler.processDemo('./demo1.tsx', '/test/file.mdx');
    const srcPath1 = '@@/Button/demos/demo1';
    const componentInfo1 = componentGenerator.generateComponent(
      demoInfo1,
      {
        inline: false,
        componentId: 'Demo1_basic',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath1,
    );

    // 2. 处理第二个演示文件
    const demoInfo2 = fileHandler.processDemo('./demo2.tsx', '/test/file.mdx');
    const srcPath2 = '@@/Button/demos/demo2';
    const componentInfo2 = componentGenerator.generateComponent(
      demoInfo2,
      {
        inline: true,
        componentId: 'Demo2_inline',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath2,
    );

    // 3. 写入两个组件文件
    componentGenerator.writeComponentFile(componentInfo1);
    componentGenerator.writeComponentFile(componentInfo2);

    // 验证第一个组件
    expect(componentInfo1.inline).toBe(false);
    expect(componentInfo1.componentName).toMatch(/^PreviewerDemo1_basic_/);

    // 验证第二个组件
    expect(componentInfo2.inline).toBe(true);
    expect(componentInfo2.componentName).toMatch(/^PreviewerDemo2_inline_/);

    // 验证两个组件文件都被写入
    expect(mockFs.writeFileSync).toHaveBeenCalledTimes(2);

    // 4. 生成缓存文件
    const allDemos = {
      [componentInfo1.filePath]: demoInfo1,
      [componentInfo2.filePath]: demoInfo2,
    };
    cacheManager.generateCacheFiles(allDemos);

    // 验证缓存文件生成
    expect(mockFs.writeFileSync).toHaveBeenCalledTimes(4); // 2个组件文件 + result.json + demos.ts
  });

  it('应该处理别名路径', () => {
    // 模拟别名路径文件存在
    mockFs.existsSync.mockImplementation((filePath) => {
      return (
        filePath.includes('/src/components/Button/demos/basic.tsx') ||
        filePath.includes('.test-cache')
      );
    });

    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('/src/components/Button/demos/basic.tsx')) {
        return 'export default function BasicDemo() { return <Button>Basic</Button>; }';
      }
      if (filePath.includes('index.json')) {
        return '{}';
      }
      return '';
    });

    // 使用 PathResolver 测试别名解析
    const pathResolver = new PathResolver();
    const alias = { '@@': '/src/components' };
    const resolvedPath = pathResolver.resolveAlias(
      '@@/Button/demos/basic.tsx',
      alias,
    );

    expect(resolvedPath).toBe('/src/components/Button/demos/basic.tsx');

    // 处理别名路径的演示文件
    const demoInfo = fileHandler.processDemo(resolvedPath, '/test/file.mdx');
    expect(demoInfo.sourceCode).toContain('BasicDemo');

    // 生成组件
    const srcPath = '@@/Button/demos/basic';
    const componentInfo = componentGenerator.generateComponent(
      demoInfo,
      {
        inline: false,
        componentId: 'Button_basic',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath,
    );

    expect(componentInfo.componentName).toMatch(/^PreviewerButton_basic_/);
  });

  it('应该优雅处理文件不存在的情况', () => {
    // 模拟文件不存在
    mockFs.existsSync.mockReturnValue(false);
    mockFs.readFileSync.mockImplementation(() => {
      throw new Error('ENOENT: no such file or directory');
    });

    // 验证 PathResolver 的错误处理
    const pathResolver = new PathResolver();
    expect(() => {
      pathResolver.resolvePath('./nonexistent.tsx');
    }).toThrow('路径不存在');

    // 验证 FileHandler 会因为文件读取失败而抛出错误
    expect(() => {
      fileHandler.processDemo('./nonexistent.tsx', '/test/file.mdx');
    }).toThrow('ENOENT');
  });

  it('应该正确处理 srcPath 参数并生成正确的导入路径', () => {
    // 模拟文件系统
    mockFs.existsSync.mockImplementation((filePath) => {
      return filePath.includes('demo.tsx') || filePath.includes('.test-cache');
    });

    mockFs.readFileSync.mockImplementation((filePath) => {
      if (filePath.includes('demo.tsx')) {
        return 'export default function Demo() { return <div>Test</div>; }';
      }
      return '';
    });

    // 1. 处理演示文件
    const demoInfo = fileHandler.processDemo('./demo.tsx', '/test/file.mdx');

    // 2. 使用不同的 srcPath 生成组件
    const srcPath = '@@/components/Button/demos/basic';
    const componentInfo = componentGenerator.generateComponent(
      demoInfo,
      {
        inline: false,
        componentId: 'Demo_srcPath',
        mdxFilePath: '/test/file.mdx',
      },
      srcPath,
    );

    // 3. 写入组件文件
    componentGenerator.writeComponentFile(componentInfo);

    // 4. 验证生成的组件代码中包含正确解析的导入路径
    const writtenContent = mockFs.writeFileSync.mock.calls[0][1];

    // 验证导入语句使用了 srcPath 而不是 dependencies 中的 source
    expect(writtenContent).toContain('import DemoComponent from');
    expect(writtenContent).toContain(
      '/src/components/components/Button/demos/basic',
    );

    // 验证组件信息中包含 srcPath
    expect(componentInfo.srcPath).toBe(srcPath);
  });
});
