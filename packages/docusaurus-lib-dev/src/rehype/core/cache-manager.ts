import fs from 'fs';
import path from 'path';
import upath from 'upath';
import type { CacheIndex, CacheEntry, DemoInfo } from '../types';

export class CacheManager {
  private cacheIndexPath: string;
  private cacheEntriesDir: string;
  private cacheIndex: CacheIndex = {};

  constructor(private cacheDir: string) {
    this.cacheIndexPath = path.join(cacheDir, 'index.json');
    this.cacheEntriesDir = path.join(cacheDir, 'entries');
    this.loadCacheIndex();
  }

  /**
   * 检查缓存是否有效
   */
  isCacheValid(filePath: string, contentHash: string): boolean {
    const normalizedPath = upath.normalize(filePath);
    const entry = this.cacheIndex[normalizedPath];

    if (!entry) {
      return false;
    }

    // 检查主文件哈希
    if (entry.contentHash !== contentHash) {
      return false;
    }

    // 检查依赖文件哈希
    return this.validateDependencyHashes(entry);
  }

  /**
   * 验证依赖文件哈希
   */
  private validateDependencyHashes(entry: CacheEntry): boolean {
    try {
      for (const [depPath, expectedHash] of Object.entries(
        entry.dependencyHashes,
      )) {
        if (fs.existsSync(depPath)) {
          const currentContent = fs.readFileSync(depPath, 'utf-8');
          const currentHash = this.calculateContentHash(currentContent);
          if (currentHash !== expectedHash) {
            return false;
          }
        } else {
          // 依赖文件不存在，缓存无效
          return false;
        }
      }
      return true;
    } catch (error) {
      console.warn('验证依赖哈希失败:', error);
      return false;
    }
  }

  /**
   * 计算内容哈希
   */
  private calculateContentHash(content: string): string {
    return require('crypto')
      .createHash('sha256')
      .update(content, 'utf8')
      .digest('hex');
  }

  /**
   * 获取缓存的组件信息
   */
  getCachedDemo(filePath: string): DemoInfo | null {
    const normalizedPath = upath.normalize(filePath);
    const entry = this.cacheIndex[normalizedPath];

    if (!entry) {
      return null;
    }

    return entry.demoInfo;
  }

  /**
   * 保存组件信息到缓存
   */
  setCachedDemo(
    filePath: string,
    demoInfo: DemoInfo,
    contentHash: string,
  ): void {
    const normalizedPath = upath.normalize(filePath);

    // 计算依赖文件哈希
    const dependencyHashes = this.calculateDependencyHashes(demoInfo, filePath);

    const entry: CacheEntry = {
      contentHash,
      dependencyHashes,
      demoInfo,
      timestamp: Date.now(),
    };

    this.cacheIndex[normalizedPath] = entry;
    this.saveCacheEntry(normalizedPath, entry);
    this.saveCacheIndex();
  }

  /**
   * 计算依赖文件哈希
   */
  private calculateDependencyHashes(
    demoInfo: DemoInfo,
    basePath: string,
  ): Record<string, string> {
    const dependencyHashes: Record<string, string> = {};

    try {
      // 遍历所有文件类型的依赖
      demoInfo.dependencies.forEach((dep) => {
        if (dep.type === 'FILE' && dep.value) {
          // 计算依赖文件的绝对路径
          let depFilePath: string;

          if (dep.source.startsWith('./') || dep.source.startsWith('../')) {
            // 相对路径
            depFilePath = path.resolve(path.dirname(basePath), dep.source);
          } else {
            // 绝对路径或别名路径，使用 resolvedSource 或 source
            depFilePath = dep.resolvedSource || dep.source;
          }

          // 如果文件存在，计算其哈希
          if (fs.existsSync(depFilePath)) {
            const content = fs.readFileSync(depFilePath, 'utf-8');
            const hash = this.calculateContentHash(content);
            dependencyHashes[depFilePath] = hash;
          }
        }
      });
    } catch (error) {
      console.warn('计算依赖哈希失败:', error);
    }

    return dependencyHashes;
  }

  /**
   * 生成最终的缓存文件（兼容现有格式）
   */
  generateCacheFiles(allDemos: Record<string, DemoInfo>): void {
    // 确保缓存目录存在
    fs.mkdirSync(this.cacheDir, { recursive: true });

    // 生成 result.json（兼容现有格式）
    const resultPath = path.join(this.cacheDir, 'result.json');
    fs.writeFileSync(resultPath, JSON.stringify(allDemos, null, 2));

    // 生成 demos.ts（兼容现有格式）
    const demosPath = path.join(this.cacheDir, 'demos.ts');
    const innerContent = Object.keys(allDemos)
      .map((demoPath) => {
        const demoRelRawPath = path.relative(this.cacheDir, demoPath);
        const demoRelPath = upath.normalize(demoRelRawPath);
        return `"${demoPath}": React.lazy(() => import("${demoRelPath}"))`;
      })
      .join(',\n');

    const tsContent = `
import React from 'react';
export const demos = {
${innerContent}
};
`;

    fs.writeFileSync(demosPath, tsContent);
  }

  /**
   * 清理过期的缓存条目
   */
  cleanupExpiredCache(maxAge: number = 7 * 24 * 60 * 60 * 1000): void {
    const now = Date.now();
    const expiredEntries: string[] = [];

    for (const [filePath, entry] of Object.entries(this.cacheIndex)) {
      if (now - entry.timestamp > maxAge) {
        expiredEntries.push(filePath);
      }
    }

    // 删除过期条目
    expiredEntries.forEach((filePath) => {
      const entry = this.cacheIndex[filePath];
      if (entry) {
        // 删除缓存文件
        const entryPath = path.join(
          this.cacheEntriesDir,
          `${entry.demoInfo.id}.json`,
        );
        if (fs.existsSync(entryPath)) {
          fs.unlinkSync(entryPath);
        }

        // 从索引中删除
        delete this.cacheIndex[filePath];
      }
    });

    if (expiredEntries.length > 0) {
      console.log(`清理了 ${expiredEntries.length} 个过期缓存条目`);
      this.saveCacheIndex();
    }
  }

  /**
   * 获取缓存统计信息
   */
  getCacheStats(): {
    totalEntries: number;
    totalSize: number;
    oldestEntry: number;
    newestEntry: number;
  } {
    const entries = Object.values(this.cacheIndex);
    const totalEntries = entries.length;

    if (totalEntries === 0) {
      return {
        totalEntries: 0,
        totalSize: 0,
        oldestEntry: 0,
        newestEntry: 0,
      };
    }

    const timestamps = entries.map((entry) => entry.timestamp);
    const oldestEntry = Math.min(...timestamps);
    const newestEntry = Math.max(...timestamps);

    // 计算缓存目录大小
    let totalSize = 0;
    try {
      if (fs.existsSync(this.cacheDir)) {
        const calculateDirSize = (dirPath: string): number => {
          let size = 0;
          const files = fs.readdirSync(dirPath);
          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
              size += calculateDirSize(filePath);
            } else {
              size += stats.size;
            }
          }
          return size;
        };
        totalSize = calculateDirSize(this.cacheDir);
      }
    } catch (error) {
      console.warn('计算缓存大小失败:', error);
    }

    return {
      totalEntries,
      totalSize,
      oldestEntry,
      newestEntry,
    };
  }

  /**
   * 清空所有缓存
   */
  clearAllCache(): void {
    try {
      // 删除缓存目录
      if (fs.existsSync(this.cacheDir)) {
        fs.rmSync(this.cacheDir, { recursive: true, force: true });
      }

      // 重置缓存索引
      this.cacheIndex = {};

      console.log('已清空所有缓存');
    } catch (error) {
      console.error('清空缓存失败:', error);
    }
  }

  /**
   * 加载缓存索引
   */
  private loadCacheIndex(): void {
    try {
      if (fs.existsSync(this.cacheIndexPath)) {
        const content = fs.readFileSync(this.cacheIndexPath, 'utf-8');
        this.cacheIndex = JSON.parse(content);
      }
    } catch (error) {
      console.warn('加载缓存索引失败，将创建新的缓存:', error);
      this.cacheIndex = {};
    }
  }

  /**
   * 保存缓存索引
   */
  private saveCacheIndex(): void {
    try {
      fs.mkdirSync(path.dirname(this.cacheIndexPath), { recursive: true });
      fs.writeFileSync(
        this.cacheIndexPath,
        JSON.stringify(this.cacheIndex, null, 2),
      );
    } catch (error) {
      console.error('保存缓存索引失败:', error);
    }
  }

  /**
   * 保存单个缓存条目
   */
  private saveCacheEntry(filePath: string, entry: CacheEntry): void {
    try {
      fs.mkdirSync(this.cacheEntriesDir, { recursive: true });
      const entryPath = path.join(
        this.cacheEntriesDir,
        `${entry.demoInfo.id}.json`,
      );
      fs.writeFileSync(entryPath, JSON.stringify(entry, null, 2));
    } catch (error) {
      console.error('保存缓存条目失败:', error);
    }
  }
}
