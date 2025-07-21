import * as fs from 'fs';
import * as path from 'path';
import * as upath from 'upath';
import { FileSystemCache } from 'file-system-cache';
import type { CacheEntry, DemoInfo } from '../types';

export class CacheManager {
  private cache: FileSystemCache;

  constructor(private cacheDir: string) {
    this.cache = new FileSystemCache({
      basePath: path.join(cacheDir, 'entries'),
    });
  }

  /**
   * 生成缓存键
   */
  private generateCacheKey(filePath: string): string {
    return upath.normalize(filePath);
  }

  /**
   * 检查缓存是否有效
   */
  isCacheValid(filePath: string, contentHash: string): boolean {
    try {
      const cacheKey = this.generateCacheKey(filePath);
      const entry = this.cache.getSync(cacheKey) as CacheEntry | undefined;

      if (!entry) {
        return false;
      }

      // 检查主文件哈希
      if (entry.contentHash !== contentHash) {
        return false;
      }

      // 检查依赖文件哈希
      return this.validateDependencyHashes(entry);
    } catch (error) {
      console.warn('检查缓存有效性失败:', error);
      return false;
    }
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
    try {
      const cacheKey = this.generateCacheKey(filePath);
      const entry = this.cache.getSync(cacheKey) as CacheEntry | undefined;

      if (!entry) {
        return null;
      }

      return entry.demoInfo;
    } catch (error) {
      console.warn('获取缓存组件信息失败:', error);
      return null;
    }
  }

  /**
   * 保存组件信息到缓存
   */
  setCachedDemo(
    filePath: string,
    demoInfo: DemoInfo,
    contentHash: string,
  ): void {
    try {
      const cacheKey = this.generateCacheKey(filePath);

      // 计算依赖文件哈希
      const dependencyHashes = this.calculateDependencyHashes(
        demoInfo,
        filePath,
      );

      const entry: CacheEntry = {
        contentHash,
        dependencyHashes,
        demoInfo,
        timestamp: Date.now(),
      };

      this.cache.setSync(cacheKey, entry);
    } catch (error) {
      console.error('保存缓存组件信息失败:', error);
    }
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
   * 清理过期的缓存条目
   */
  cleanupExpiredCache(maxAge: number = 7 * 24 * 60 * 60 * 1000): void {
    try {
      const now = Date.now();
      let expiredCount = 0;

      // 由于当前版本的 file-system-cache 没有 keys() 方法，
      // 我们需要通过文件系统直接扫描缓存目录
      if (fs.existsSync(this.cacheDir)) {
        const files = fs.readdirSync(this.cacheDir);

        for (const file of files) {
          if (file.endsWith('.json')) {
            const filePath = path.join(this.cacheDir, file);
            try {
              const content = fs.readFileSync(filePath, 'utf-8');
              const entry = JSON.parse(content) as CacheEntry;

              if (now - entry.timestamp > maxAge) {
                // 删除过期文件
                fs.unlinkSync(filePath);
                expiredCount++;
              }
            } catch (error) {
              console.warn(`处理缓存文件 ${file} 失败:`, error);
              // 如果文件损坏，也删除它
              try {
                fs.unlinkSync(filePath);
                expiredCount++;
              } catch (deleteError) {
                console.warn(`删除损坏的缓存文件 ${file} 失败:`, deleteError);
              }
            }
          }
        }
      }

      if (expiredCount > 0) {
        console.log(`清理了 ${expiredCount} 个过期缓存条目`);
      }
    } catch (error) {
      console.error('清理过期缓存失败:', error);
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
    try {
      let totalEntries = 0;
      const timestamps: number[] = [];

      // 由于当前版本的 file-system-cache 没有 keys() 方法，
      // 我们需要通过文件系统直接扫描缓存目录
      if (fs.existsSync(this.cacheDir)) {
        const files = fs.readdirSync(this.cacheDir);

        for (const file of files) {
          if (file.endsWith('.json')) {
            totalEntries++;
            const filePath = path.join(this.cacheDir, file);
            try {
              const content = fs.readFileSync(filePath, 'utf-8');
              const entry = JSON.parse(content) as CacheEntry;
              timestamps.push(entry.timestamp);
            } catch (error) {
              console.warn(`读取缓存文件 ${file} 失败:`, error);
            }
          }
        }
      }

      if (totalEntries === 0) {
        return {
          totalEntries: 0,
          totalSize: 0,
          oldestEntry: 0,
          newestEntry: 0,
        };
      }

      const oldestEntry = timestamps.length > 0 ? Math.min(...timestamps) : 0;
      const newestEntry = timestamps.length > 0 ? Math.max(...timestamps) : 0;

      // 计算缓存目录大小
      const totalSize = this.calculateCacheSize();

      return {
        totalEntries,
        totalSize,
        oldestEntry,
        newestEntry,
      };
    } catch (error) {
      console.warn('获取缓存统计信息失败:', error);
      return {
        totalEntries: 0,
        totalSize: 0,
        oldestEntry: 0,
        newestEntry: 0,
      };
    }
  }

  /**
   * 计算缓存大小
   */
  private calculateCacheSize(): number {
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
    return totalSize;
  }

  /**
   * 清空所有缓存
   */
  clearAllCache(): void {
    try {
      this.cache.clear();
      console.log('已清空所有缓存');
    } catch (error) {
      console.error('清空缓存失败:', error);
    }
  }
}
