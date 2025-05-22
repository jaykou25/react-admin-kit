// 添加新的导入
import path from 'path';
import fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

// 定义依赖类型
interface Dependency {
  type: 'NPM' | 'FILE';
  source: string; // 源地址 eg: ./Hello
  realPath?: string; // 完整的绝对地址
  ext?: string;
  importType: 'default' | 'namespace' | 'named' | 'side-effect';
  imported?: string[]; // 导入的具体内容
}

// 添加缓存参数
interface AnalyzeOptions {
  visited?: Set<string>;
  rootDir?: string;
  noRealPath?: boolean;
}

export function analyzeDependencies(
  code: string,
  options: AnalyzeOptions = {},
): Dependency[] {
  const {
    visited = new Set(),
    rootDir = process.cwd(),
    noRealPath = false,
  } = options;
  const dependencies: Dependency[] = [];

  const getRealPath = (source: string) => {
    const absPath = path.resolve(rootDir, source);
    return resolvePath(absPath);
  };

  // 写入后缀和真实路径
  const writeToExtAndPath = (source: string, dep: any) => {
    // 测试场景
    if (noRealPath) {
      const ext = path.extname(source);
      dep.ext = ext.slice(1) || 'tsx';
    } else {
      // 后缀应该根据真实路径来获取
      const realPath = getRealPath(source);
      dep.realPath = realPath;
      const ext = path.extname(realPath);
      dep.ext = ext.slice(1) || 'tsx';
    }
  };

  // 去重
  const pushToDeps = (deps: any) => {
    const exist = (p: string) => {
      return dependencies.some((d) => d.realPath === p);
    };

    const singlePush = (depObj: any) => {
      // 根据 realpath 去重
      if (depObj.realPath) {
        if (!exist(depObj.realPath)) dependencies.push(depObj);
      } else {
        dependencies.push(depObj);
      }
    };

    if (Array.isArray(deps)) {
      deps.forEach((dep) => {
        singlePush(dep);
      });
    } else {
      singlePush(deps);
    }
  };

  try {
    // 解析代码生成 AST
    const ast = parse(code, {
      sourceType: 'module',
      plugins: [
        'jsx',
        'typescript',
        'decorators-legacy',
        'classProperties',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'dynamicImport',
      ],
    });

    // 遍历 AST
    traverse(ast, {
      ImportDeclaration(astPath) {
        const source = astPath.node.source.value;
        const specifiers = astPath.node.specifiers;

        // 判断是否为相对路径
        const isRelativePath = source.startsWith('.') || source.startsWith('/');

        // 分析导入类型
        let importType: Dependency['importType'] = 'side-effect';
        const imported: string[] = [];

        if (specifiers.length > 0) {
          specifiers.forEach((specifier) => {
            if (t.isImportDefaultSpecifier(specifier)) {
              importType = 'default';
              imported.push('default');
            } else if (t.isImportNamespaceSpecifier(specifier)) {
              importType = 'namespace';
              imported.push('*');
            } else if (t.isImportSpecifier(specifier)) {
              importType = 'named';
              const importedName = t.isIdentifier(specifier.imported)
                ? specifier.imported.name
                : specifier.imported.value;
              imported.push(importedName);
            }
          });
        }

        // 创建依赖对象
        const dependency: Dependency = {
          type: isRelativePath ? 'FILE' : 'NPM',
          source,
          importType,
          imported,
        };

        // 为文件类型添加扩展名
        if (isRelativePath) {
          writeToExtAndPath(source, dependency);
        }

        pushToDeps(dependency);
      },

      // 处理动态导入
      CallExpression(astPath) {
        if (t.isImport(astPath.node.callee)) {
          const argument = astPath.node.arguments[0];
          if (t.isStringLiteral(argument)) {
            const source = argument.value;
            const isRelativePath =
              source.startsWith('.') || source.startsWith('/');

            const dependency: Dependency = {
              type: isRelativePath ? 'FILE' : 'NPM',
              source,
              importType: 'side-effect',
              imported: ['dynamic-import'],
            };

            if (isRelativePath) {
              writeToExtAndPath(source, dependency);
            }

            pushToDeps(dependency);
          }
        }
      },
    });

    // 添加递归分析逻辑
    const validExtensions = ['js', 'jsx', 'ts', 'tsx'];
    for (const dep of dependencies.filter(
      (d) => d.type === 'FILE' && validExtensions.includes(d.ext!),
    )) {
      const realPath = dep.realPath;
      if (realPath && !visited.has(realPath)) {
        visited.add(realPath);
        const fileContent = fs.readFileSync(realPath, 'utf-8');
        const subDeps = analyzeDependencies(fileContent, {
          visited,
          rootDir: path.dirname(realPath),
        });
        pushToDeps(subDeps);
      }
    }

    return dependencies;
  } catch (error) {
    console.error('依赖分析失败:', error);
    return [];
  }
}

interface FileOptions {
  extensions?: string[];
  indexFiles?: string[];
}

export function resolvePath(targetPath: string, options: FileOptions = {}) {
  const {
    extensions = ['.tsx', '.jsx', '.ts', '.js'],
    indexFiles = ['index.tsx', 'index.jsx', 'index.ts', 'index.js'],
  } = options;

  // 检查路径是否存在，如果不存在且没有后缀，尝试添加后缀
  if (!fs.existsSync(targetPath)) {
    // 获取无后缀的路径和当前后缀
    const ext = path.extname(targetPath);
    if (!ext) {
      // 尝试所有可能的后缀
      const targetWithExt = extensions
        .map((ext) => targetPath + ext)
        .find((fullPath) => fs.existsSync(fullPath));

      if (targetWithExt) {
        targetPath = targetWithExt;
      } else {
        throw new Error(
          `路径不存在: ${targetPath}\n` +
            `尝试过的后缀: ${extensions.join(', ')}`,
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
    // 1. 先尝试查找 index 文件
    const indexFile = indexFiles.find((file) =>
      fs.existsSync(path.join(targetPath, file)),
    );

    if (indexFile) {
      return path.join(targetPath, indexFile);
    }

    throw new Error(
      `在目录 ${targetPath} 中未找到有效的入口文件\n` +
        `支持的索引文件: ${indexFiles.join(', ')}\n` +
        `支持的文件扩展名: ${extensions.join(', ')}`,
    );
  }

  throw new Error(`无效的路径类型: ${targetPath}`);
}

// 提示词
/**
 * 实现一个函数, 该函数接收一个绝对路径, 一个相对文件名, 返回一个带后缀的文件名.
 * 比如: /home/user/dir/Hello.tsx, ./Hello => ./Hello.tsx
 * 比如: /home/user/dir/index.js, ./dir => ./dir/index.js
 * 比如: /home/user/dir/index.js,  ../../dir => ../../dir/index.js
 */

export function getFullRelPath(absPath: string, relPath: string) {
  // 去除 relPath 的 ./ 前缀
  const relPathSafe = relPath.replace(/^\.[\.\/]*\//, '');

  const arr = absPath.split(relPathSafe);
  const end = arr[arr.length - 1];

  return relPath + end;
}
