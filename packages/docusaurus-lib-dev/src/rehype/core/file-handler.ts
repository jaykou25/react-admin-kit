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
  ) { }

  /**
   * 处理单个演示文件
   */
  processDemo(srcPath: string): DemoInfo {
    // 1. 读取文件源码
    const code = fs.readFileSync(srcPath, 'utf-8');

    // 2. 分析依赖
    const rawDependencies = this.dependencyAnalyzer.analyzeDependencies(code);

    // 3. 使用递归处理依赖
    const dependencies: Dependency[] = this.processDependenciesRecursive(
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
          depth: 0, // 根文件深度为 0
          parent: undefined, // 根文件没有父文件
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
   * 递归处理依赖文件
   */
  private processDependenciesRecursive(
    rawDependencies: Dependency[],
    srcPath: string,
  ): Dependency[] {
    // 初始化已访问文件集合
    const visitedFiles = new Set<string>();
    const rootPath = path.normalize(srcPath);
    visitedFiles.add(rootPath);

    // 递归处理依赖
    return this.processFileDependenciesRecursive(rawDependencies, srcPath, visitedFiles, 0);
  }

  /**
   * 递归处理文件依赖的核心方法
   */
  private processFileDependenciesRecursive(
    rawDependencies: Dependency[],
    srcPath: string,
    visitedFiles: Set<string>,
    depth: number,
  ): Dependency[] {
    const result: Dependency[] = [];

    // 分离 FILE 类型和 NPM 类型依赖
    const fileDependencies = rawDependencies.filter(dep => dep.type === 'FILE');
    const npmDependencies = rawDependencies.filter(dep => dep.type === 'NPM');

    // NPM 依赖直接返回，添加深度和父文件信息
    for (const npmDep of npmDependencies) {
      result.push({
        ...npmDep,
        depth: depth + 1,
        parent: srcPath,
      });
    }

    // 顺序处理每个 FILE 类型依赖
    for (const fileDep of fileDependencies) {
      try {
        const depFilePath = path.resolve(path.dirname(srcPath), fileDep.source);
        const depFilePathSafe = this.pathResolver.resolvePath(depFilePath);
        const normalizedPath = path.normalize(depFilePathSafe);

        // 检查循环依赖
        if (visitedFiles.has(normalizedPath)) {
          console.warn(`检测到循环依赖: ${normalizedPath}, 跳过处理`);

          continue;
        }

        // 读取文件内容
        const fileContent = fs.readFileSync(depFilePathSafe, 'utf-8');

        // 创建当前依赖对象
        const currentDependency: Dependency = {
          ...fileDep,
          resolvedSource: this.pathResolver.getFullRelPath(depFilePathSafe, fileDep.source),
          value: fileContent,
          depth: depth + 1,
          parent: srcPath,
        };

        result.push(currentDependency);

        // 将当前文件添加到已访问集合
        visitedFiles.add(normalizedPath);

        try {
          // 递归分析当前文件的依赖
          const subDependencies = this.dependencyAnalyzer.analyzeDependencies(fileContent);

          if (subDependencies.length > 0) {
            // 递归处理子依赖
            const processedSubDeps = this.processFileDependenciesRecursive(
              subDependencies,
              depFilePathSafe,
              visitedFiles,
              depth + 1
            );

            result.push(...processedSubDeps);
          }
        } catch (subError) {
          console.warn(`分析子依赖失败: ${normalizedPath}`, subError);
        }


      } catch (error) {
        console.warn(`无法读取依赖文件: ${fileDep.source}`, error);
        result.push({
          ...fileDep,
          depth: depth + 1,
          parent: srcPath,
          value: `// 读取文件失败: ${error instanceof Error ? error.message : '未知错误'}`,
        });
      }
    }

    return result;
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
