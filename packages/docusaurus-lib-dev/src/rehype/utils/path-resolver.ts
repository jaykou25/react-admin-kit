import path from 'path';
import fs from 'fs';
import upath from 'upath';
import type { FileOptions } from '../types';

export class PathResolver {
  private readonly extensions: string[];
  private readonly indexFiles: string[];

  constructor(options: FileOptions = {}) {
    this.extensions = options.extensions || ['.tsx', '.jsx', '.ts', '.js'];
    this.indexFiles = options.indexFiles || [
      'index.tsx',
      'index.jsx',
      'index.ts',
      'index.js',
    ];
  }

  /**
   * 解析路径，支持文件和目录
   */
  resolvePath(targetPath: string): string {
    // 检查路径是否存在，如果不存在且没有后缀，尝试添加后缀
    if (!fs.existsSync(targetPath)) {
      const ext = path.extname(targetPath);
      if (!ext) {
        // 尝试所有可能的后缀
        const targetWithExt = this.extensions
          .map((ext) => targetPath + ext)
          .find((fullPath) => fs.existsSync(fullPath));

        if (targetWithExt) {
          targetPath = targetWithExt;
        } else {
          throw new Error(
            `路径不存在: ${targetPath}\n` +
              `尝试过的后缀: ${this.extensions.join(', ')}`,
          );
        }
      } else {
        throw new Error(`路径不存在: ${targetPath}`);
      }
    }

    // 如果是文件直接返回
    if (fs.statSync(targetPath).isFile()) {
      return targetPath;
    }

    // 如果是目录，尝试查找索引文件
    if (fs.statSync(targetPath).isDirectory()) {
      const indexFile = this.indexFiles.find((file) =>
        fs.existsSync(path.join(targetPath, file)),
      );

      if (indexFile) {
        return path.join(targetPath, indexFile);
      }

      throw new Error(
        `在目录 ${targetPath} 中未找到有效的入口文件\n` +
          `支持的索引文件: ${this.indexFiles.join(', ')}\n` +
          `支持的文件扩展名: ${this.extensions.join(', ')}`,
      );
    }

    throw new Error(`无效的路径类型: ${targetPath}`);
  }

  /**
   * 处理别名路径
   */
  resolveAlias(src: string, alias: Record<string, string>): string {
    const keys = Object.keys(alias);
    for (const key of keys) {
      if (src.startsWith(key)) {
        return src.replace(key, alias[key]);
      }
    }
    return src;
  }

  /**
   * 解析相对路径为绝对路径
   */
  resolveRelativePath(
    src: string,
    basePath: string,
    alias: Record<string, string>,
  ): string {
    // 处理别名
    const aliasedPath = this.resolveAlias(src, alias);

    // 统一成一个绝对路径
    const absSrc = src.startsWith('.')
      ? path.resolve(path.dirname(basePath), src)
      : aliasedPath;

    return this.resolvePath(absSrc);
  }

  /**
   * 获取带后缀的相对文件名
   * 比如: /home/user/dir/Hello.tsx, ./Hello => ./Hello.tsx
   */
  getFullRelPath(absPath: string, relPath: string): string {
    // 去除 relPath 的 ./ 前缀
    const relPathSafe = relPath.replace(/^\.[\.\/]*\//, '');

    const arr = absPath.split(relPathSafe);
    const end = arr[arr.length - 1];

    return relPath + end;
  }

  /**
   * 转换为 Unix 风格路径
   */
  toUnixPath(filePath: string): string {
    return upath.normalize(filePath);
  }
}
