// 添加新的导入
import path from 'path';
import fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

// 定义依赖类型
interface Dependency {
  type: 'NPM' | 'FILE';
  source: string;
  ext?: string;
  importType: 'default' | 'namespace' | 'named' | 'side-effect';
  imported?: string[]; // 导入的具体内容
}

export function analyzeDependencies(code: string): Dependency[] {
  const dependencies: Dependency[] = [];

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
          const ext = path.extname(source);
          if (ext) {
            dependency.ext = ext.slice(1);
          } else {
            // 如果没有扩展名，根据上下文推断
            dependency.ext = 'tsx'; // 默认为 tsx
          }
        }

        dependencies.push(dependency);
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
              const ext = path.extname(source);
              dependency.ext = ext ? ext.slice(1) : 'tsx';
            }

            dependencies.push(dependency);
          }
        }
      },
    });

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

    // // 2. 如果没有 index 文件，查找第一个匹配扩展名的文件
    // const files = fs.readdirSync(targetPath);
    // const matchedFile = files.find((file) =>
    //   extensions.includes(path.extname(file)),
    // );

    // if (matchedFile) {
    //   return path.join(targetPath, matchedFile);
    // }

    throw new Error(
      `在目录 ${targetPath} 中未找到有效的入口文件\n` +
        `支持的索引文件: ${indexFiles.join(', ')}\n` +
        `支持的文件扩展名: ${extensions.join(', ')}`,
    );
  }

  throw new Error(`无效的路径类型: ${targetPath}`);
}
