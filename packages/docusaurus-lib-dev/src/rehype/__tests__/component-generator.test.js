import { ComponentGenerator } from '../core/component-generator';
import fs from 'fs';
import path from 'path';

// 模拟文件系统操作
jest.mock('fs');
const mockFs = fs;

describe('ComponentGenerator', () => {
  let generator;
  let tempDir;
  let pkgDir;

  beforeEach(() => {
    tempDir = path.join(process.cwd(), '.test-cache');
    pkgDir = path.join(process.cwd(), 'react-admin-kit/src');

    generator = new ComponentGenerator(tempDir);

    // 重置 fs mock
    jest.clearAllMocks();
    mockFs.mkdirSync.mockImplementation(() => {});
    mockFs.writeFileSync.mockImplementation(() => {});
  });

  describe('writeComponentFile', () => {
    it('应该写入组件文件', () => {
      const componentInfo = {
        id: 'test',
        filePath: path.join(tempDir, 'components', 'TestComponent.tsx'),
        componentName: 'TestComponent',
        inline: false,
        demoPath: path.join(pkgDir, 'Button/demos/basic'),
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
        demoPath: path.join(pkgDir, 'Button/demos/basic'),
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
      const demoPath = path.join(pkgDir, 'Button/demos/basic');
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
        demoPath,
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
    });
  });

  describe('错误处理', () => {
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
        demoPath: path.join(pkgDir, 'Button/demos/basic'),
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
      const demoPath = path.join(pkgDir, 'Button/demos/basic');

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
        demoPath,
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
      expect(writtenContent).toContain(
        'react-admin-kit/src/Button/demos/basic',
      );
    });
  });
});
