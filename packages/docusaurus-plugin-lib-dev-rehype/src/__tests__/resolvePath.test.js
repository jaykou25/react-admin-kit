import fs from 'fs';
import path from 'path';
import { resolvePath } from '../utils';

// Mock fs 模块
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  statSync: jest.fn(),
  readdirSync: jest.fn(),
}));

describe('resolvePath', () => {
  // 每个测试前重置 mock
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('路径不存在时应该抛出错误', () => {
    fs.existsSync.mockReturnValue(false);

    expect(() => {
      resolvePath('/fake/path');
    }).toThrow('路径不存在');
  });

  it('无后缀路径时应该尝试所有支持的后缀', () => {
    const basePath = '/path/to/component';
    fs.existsSync.mockImplementation((p) => {
      return p === `${basePath}.tsx`;
    });
    fs.statSync.mockReturnValue({ isFile: () => true });

    expect(resolvePath(basePath)).toBe(`${basePath}.tsx`);
  });

  it('当所有后缀都不匹配时应该抛出错误', () => {
    const basePath = '/path/to/component';
    fs.existsSync.mockReturnValue(false);

    expect(() => {
      resolvePath(basePath);
    }).toThrow(/尝试过的后缀/);
  });

  it('支持自定义后缀查找', () => {
    const basePath = '/path/to/component';
    fs.existsSync.mockImplementation((p) => {
      return p === `${basePath}.vue`;
    });
    fs.statSync.mockReturnValue({ isFile: () => true });

    const result = resolvePath(basePath, {
      extensions: ['.vue'],
    });

    expect(result).toBe(`${basePath}.vue`);
  });

  it('如果是文件应该直接返回路径', () => {
    const filePath = '/path/to/file.tsx';
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({
      isFile: () => true,
      isDirectory: () => false,
    });

    expect(resolvePath(filePath)).toBe(filePath);
  });

  it('目录中有 index 文件时应该返回 index 文件路径', () => {
    const dirPath = '/path/to/dir';
    fs.existsSync.mockImplementation((p) => {
      return p === dirPath || p === path.join(dirPath, 'index.tsx');
    });
    fs.statSync.mockReturnValue({
      isFile: () => false,
      isDirectory: () => true,
    });

    expect(resolvePath(dirPath)).toBe(path.join(dirPath, 'index.tsx'));
  });

  it('目录中没有 index 文件但有其他匹配文件时应该抛出错误', () => {
    const dirPath = '/path/to/dir';

    // 更精确的路径匹配
    fs.existsSync.mockImplementation((p) => {
      // 目录存在
      if (p === dirPath) return true;

      // index 文件都不存在
      if (p === path.join(dirPath, 'index.tsx')) return false;
      if (p === path.join(dirPath, 'index.jsx')) return false;
      if (p === path.join(dirPath, 'index.ts')) return false;
      if (p === path.join(dirPath, 'index.js')) return false;

      // 其他文件存在
      if (p === path.join(dirPath, 'component.tsx')) return true;
      if (p === path.join(dirPath, 'style.css')) return true;

      return false;
    });

    fs.statSync.mockImplementation((p) => ({
      isFile: () =>
        p === path.join(dirPath, 'component.tsx') ||
        p === path.join(dirPath, 'style.css'),
      isDirectory: () => p === dirPath,
    }));

    fs.readdirSync.mockReturnValue(['component.tsx', 'style.css']);

    expect(() => {
      resolvePath(dirPath);
    }).toThrow('未找到有效的入口文件');
  });

  it('目录中没有匹配文件时应该抛出错误', () => {
    const dirPath = '/path/to/dir';

    // 更精确的路径匹配
    fs.existsSync.mockImplementation((p) => {
      // 目录存在
      if (p === dirPath) return true;

      // 检查 index 文件是否存在
      if (p === path.join(dirPath, 'index.tsx')) return false;
      if (p === path.join(dirPath, 'index.jsx')) return false;
      if (p === path.join(dirPath, 'index.ts')) return false;
      if (p === path.join(dirPath, 'index.js')) return false;

      // 只有 readme.md 和 style.css 存在
      if (p === path.join(dirPath, 'readme.md')) return true;
      if (p === path.join(dirPath, 'style.css')) return true;

      return false;
    });

    fs.statSync.mockImplementation((p) => ({
      isFile: () =>
        p === path.join(dirPath, 'readme.md') ||
        p === path.join(dirPath, 'style.css'),
      isDirectory: () => p === dirPath,
    }));

    fs.readdirSync.mockReturnValue(['readme.md', 'style.css']);

    expect(() => {
      resolvePath(dirPath);
    }).toThrow('未找到有效的入口文件');
  });

  it('应该支持自定义配置', () => {
    const dirPath = '/path/to/dir';
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({
      isFile: () => false,
      isDirectory: () => true,
    });
    fs.readdirSync.mockReturnValue(['main.vue']);

    const result = resolvePath(dirPath, {
      extensions: ['.vue'],
      indexFiles: ['main.vue'],
    });

    expect(result).toBe(path.join(dirPath, 'main.vue'));
  });
});
