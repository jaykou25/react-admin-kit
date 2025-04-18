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

export function checkAndReturnPath(absSrc: string) {
  // abssrc 地址可能是一个文件夹, 如果是文件夹的话需要默认去找下面的 index.tsx 或 index.jsx 或 index.ts 或 index.js
  if (fs.existsSync(absSrc)) {
    // 是文件夹
    if (fs.statSync(absSrc).isDirectory()) {
      const indexFiles = ['index.tsx', 'index.jsx', 'index.ts', 'index.js'];

      const foundIndex = indexFiles.find((file) =>
        fs.existsSync(path.join(absSrc, file)),
      );

      if (foundIndex) {
        absSrc = path.join(absSrc, foundIndex);
        return absSrc;
      } else {
        throw new Error(`在目录 ${absSrc} 中找不到 index 文件`);
      }
    } else {
      // 是文件
      return absSrc;
    }
  } else {
    throw new Error(`${absSrc} 不存在`);
  }
}
