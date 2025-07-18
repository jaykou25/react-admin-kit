import fs from 'fs';
import path from 'path';
import { PathResolver } from '../utils/path-resolver';
import { DependencyAnalyzer } from '../utils/dependency-analyzer';
import { calculateContentHash, generateFileHash } from '../utils/hash-utils';
import type { DemoInfo, Dependency } from '../types';

export class FileHandler {
  constructor(
    private pathResolver: PathResolver,
    private dependencyAnalyzer: DependencyAnalyzer,
  ) {}

  /**
   * 处理单个演示文件
   */
  processDemo(srcPath: string): DemoInfo {
    // 1. 读取文件源码
    const code = fs.readFileSync(srcPath, 'utf-8');

    // 2. 分析依赖
    const rawDependencies = this.dependencyAnalyzer.analyzeDependencies(code);

    // 3. 并行处理文件类型的依赖
    const dependencies: Dependency[] = this.processDependenciesParallel(
      rawDependencies,
      srcPath,
    );

    // 4. 创建 demo 组件的信息对象
    const demoInfo: DemoInfo = {
      id: generateFileHash(srcPath),
      sourceCode: code,
      dependencies: [
        {
          type: 'FILE',
          source: path.basename(srcPath),
          resolvedSource: path.basename(srcPath),
          ext: path.extname(srcPath).slice(1) || 'tsx',
          importType: 'default',
          imported: ['default'],
          value: code, // 读取文件内容
        },
        ...dependencies,
      ],
    };

    return demoInfo;
  }

  /**
   * 计算文件内容哈希
   */
  calculateFileHash(filePath: string): string {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return calculateContentHash(content);
    } catch (error) {
      console.warn(`无法计算文件哈希: ${filePath}`, error);
      return '';
    }
  }

  /**
   * 检查文件是否存在
   */
  fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  /**
   * 并行处理依赖文件
   */
  private processDependenciesParallel(
    rawDependencies: Dependency[],
    srcPath: string,
  ): Dependency[] {
    const fileDependencies = rawDependencies.filter(
      (dep) => dep.type === 'FILE',
    );
    const nonFileDependencies = rawDependencies.filter(
      (dep) => dep.type !== 'FILE',
    );

    // 并行处理文件依赖
    const processedFileDeps = fileDependencies.map((item) => {
      try {
        const depFilePath = path.resolve(path.dirname(srcPath), item.source);
        const depFilePathSafe = this.pathResolver.resolvePath(depFilePath);

        return {
          ...item,
          // 给 source 带上后缀, eg: ./Foo => ./Foo.tsx
          resolvedSource: this.pathResolver.getFullRelPath(
            depFilePathSafe,
            item.source,
          ),
          value: fs.readFileSync(depFilePathSafe, 'utf-8'), // 读取文件内容
        };
      } catch (error) {
        console.warn(`无法读取依赖文件: ${item.source}`, error);
        return item;
      }
    });

    return [...processedFileDeps, ...nonFileDependencies];
  }

  /**
   * 批量处理多个演示文件
   */
  async processDemosParallel(filePaths: string[]): Promise<DemoInfo[]> {
    const promises = filePaths.map(async (filePath) => {
      try {
        return this.processDemo(filePath);
      } catch (error) {
        console.error(`处理文件失败: ${filePath}`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);
    return results.filter((result): result is DemoInfo => result !== null);
  }

  /**
   * 批量计算文件哈希
   */
  async calculateFileHashesParallel(
    filePaths: string[],
  ): Promise<Record<string, string>> {
    const promises = filePaths.map(async (filePath) => {
      try {
        const hash = this.calculateFileHash(filePath);
        return { filePath, hash };
      } catch (error) {
        console.warn(`计算文件哈希失败: ${filePath}`, error);
        return { filePath, hash: '' };
      }
    });

    const results = await Promise.all(promises);
    const hashMap: Record<string, string> = {};

    results.forEach(({ filePath, hash }) => {
      if (hash) {
        hashMap[filePath] = hash;
      }
    });

    return hashMap;
  }
}
