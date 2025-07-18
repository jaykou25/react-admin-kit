import { ComponentGenerator } from '../core/component-generator';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

describe('ComponentGenerator', () => {
  let generator;
  let tempDir;

  beforeEach(() => {
    tempDir = path.join(process.cwd(), '.test-cache');
    const alias = { '@@': '/src/components' };
    generator = new ComponentGenerator(tempDir, alias);

    // 重置 fs mock
    jest.clearAllMocks();
    mockFs.mkdirSync.mockImplementation(() => {});
    mockFs.writeFileSync.mockImplementation(() => {});
  });

  describe('generateComponent', () => {
    it('应该生成基本的组件信息', () => {
      const demoInfo = {
        id: 'test123',
        sourceCode:
          'export default function Demo() { return <div>Test</div>; }',
        dependencies: [
          {
            type: 'FILE',
            source: './Demo.tsx',
            resolvedSource: './Demo.tsx',
            ext: 'tsx',
            importType: 'default',
            imported: ['default'],
            value: 'export default function Demo() { return <div>Test</div>; }',
          },
        ],
      };

      const options = {
        inline: false,
        componentId: 'Demo_basic',
        mdxFilePath: '/test/file.mdx',
      };

      const srcPath = '@@/Button/demos/basic';
      const componentInfo = generator.generateComponent(
        demoInfo,
        options,
        srcPath,
      );

      expect(componentInfo).toMatchObject({
        id: 'Demo_basic',
        inline: false,
        demoInfo: demoInfo,
        srcPath: srcPath,
      });
      expect(componentInfo.componentName).toMatch(/^PreviewerDemo_basic_/);
      expect(componentInfo.filePath).toContain('.tsx');
    });

    it('应该处理 inline 模式', () => {
      const demoInfo = {
        id: 'test123',
        sourceCode:
          'export default function Demo() { return <div>Test</div>; }',
        dependencies: [],
      };

      const options = {
        inline: true,
        componentId: 'Demo_inline',
        mdxFilePath: '/test/file.mdx',
      };

      const srcPath = '@@/Button/demos/inline';
      const componentInfo = generator.generateComponent(
        demoInfo,
        options,
        srcPath,
      );

      expect(componentInfo.inline).toBe(true);
      expect(componentInfo.srcPath).toBe(srcPath);
    });
  });

  describe('writeComponentFile', () => {
    it('应该写入组件文件', () => {
      const componentInfo = {
        id: 'test',
        filePath: path.join(tempDir, 'components', 'TestComponent.tsx'),
        componentName: 'TestComponent',
        inline: false,
        srcPath: '@@/Button/demos/basic',
        demoInfo: {
          id: 'test123',
          sourceCode:
            'export default function Demo() { return <div>Test</div>; }',
          dependencies: [
            {
              type: 'FILE',
              source: './Demo.tsx',
              resolvedSource: './Demo.tsx',
              ext: 'tsx',
              importType: 'default',
              imported: ['default'],
            },
          ],
        },
      };

      const result = generator.writeComponentFile(componentInfo);

      expect(mockFs.mkdirSync).toHaveBeenCalledWith(
        path.join(tempDir, 'components'),
        { recursive: true },
      );
      expect(mockFs.writeFileSync).toHaveBeenCalled();
      expect(result).toBe(componentInfo.filePath);
    });
  });

  describe('generateImportStatement', () => {
    it('应该生成正确的导入语句', () => {
      const componentInfo = {
        id: 'test',
        filePath: path.join(tempDir, 'components', 'TestComponent.tsx'),
        componentName: 'TestComponent',
        inline: false,
        srcPath: '@@/Button/demos/basic',
        demoInfo: { id: 'test', sourceCode: '', dependencies: [] },
      };

      const relativePath = '/test/file.mdx';
      const importStatement = generator.generateImportStatement(
        componentInfo,
        relativePath,
      );

      expect(importStatement).toMatchObject({
        componentName: 'TestComponent',
        importPath: expect.stringMatching(/^\./),
      });
    });
  });

  describe('generateDemoImports', () => {
    it('应该生成正确的导入语句', () => {
      const srcPath = '@@/Button/demos/basic';
      const componentFilePath = path.join(
        tempDir,
        'components',
        'TestComponent.tsx',
      );

      // 使用私有方法测试，需要通过实例访问
      // 由于我们不能直接访问私有方法，我们将通过组件生成和写入来间接测试
      const componentInfo = {
        id: 'test',
        filePath: componentFilePath,
        componentName: 'TestComponent',
        inline: false,
        srcPath: srcPath,
        demoInfo: {
          id: 'test123',
          sourceCode:
            'export default function Demo() { return <div>Test</div>; }',
          dependencies: [],
        },
      };

      // 写入组件文件
      generator.writeComponentFile(componentInfo);

      // 验证 writeFileSync 被调用
      expect(mockFs.writeFileSync).toHaveBeenCalled();

      // 获取写入的内容
      const writtenContent = mockFs.writeFileSync.mock.calls[0][1];

      // 验证导入语句 - 现在只应该有一个 DemoComponent 导入
      expect(writtenContent).toContain('import DemoComponent from');

      // 不应该包含其他依赖的导入
      expect(writtenContent).not.toContain("import './styles.less'");
      expect(writtenContent).not.toContain(
        "import { useState, useEffect } from 'react'",
      );
    });
  });

  describe('错误处理', () => {
    it('应该在缺少必要字段时抛出错误', () => {
      // 缺少 srcPath 字段的组件信息
      const invalidComponentInfo = {
        id: 'test',
        filePath: path.join(tempDir, 'components', 'TestComponent.tsx'),
        componentName: 'TestComponent',
        inline: false,
        demoInfo: {
          id: 'test123',
          sourceCode:
            'export default function Demo() { return <div>Test</div>; }',
          dependencies: [],
        },
      };

      // 验证抛出错误
      expect(() => {
        generator.writeComponentFile(invalidComponentInfo);
      }).toThrow('组件信息必须包含 srcPath');
    });

    it('应该在组件生成失败时提供友好的错误组件', () => {
      // 模拟文件系统错误
      mockFs.writeFileSync.mockImplementation(() => {
        throw new Error('模拟文件写入错误');
      });

      const componentInfo = {
        id: 'test',
        filePath: path.join(tempDir, 'components', 'TestComponent.tsx'),
        componentName: 'TestComponent',
        inline: false,
        srcPath: '@@/Button/demos/basic',
        demoInfo: {
          id: 'test123',
          sourceCode:
            'export default function Demo() { return <div>Test</div>; }',
          dependencies: [],
        },
      };

      // 验证抛出错误
      expect(() => {
        generator.writeComponentFile(componentInfo);
      }).toThrow('组件生成失败');
    });
  });

  describe('别名路径解析', () => {
    it('应该正确解析别名路径', () => {
      const srcPath = '@@/Button/demos/basic';
      const componentFilePath = path.join(
        tempDir,
        'components',
        'TestComponent.tsx',
      );

      const componentInfo = {
        id: 'test',
        filePath: componentFilePath,
        componentName: 'TestComponent',
        inline: false,
        srcPath: srcPath,
        demoInfo: {
          id: 'test123',
          sourceCode:
            'export default function Demo() { return <div>Test</div>; }',
          dependencies: [],
        },
      };

      // 写入组件文件
      generator.writeComponentFile(componentInfo);

      // 获取写入的内容
      const writtenContent = mockFs.writeFileSync.mock.calls[0][1];

      // 验证别名路径被正确解析
      expect(writtenContent).toContain('/src/components/Button/demos/basic');
    });
  });
});
