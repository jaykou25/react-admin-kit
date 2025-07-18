import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import type { Dependency } from '../types';

export class DependencyAnalyzer {
  /**
   * 分析代码中的依赖关系
   */
  analyzeDependencies(code: string): Dependency[] {
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
        ImportDeclaration: (astPath) => {
          const source = astPath.node.source.value;
          const specifiers = astPath.node.specifiers;

          // 判断是否为相对路径
          const isRelativePath =
            source.startsWith('.') || source.startsWith('/');

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
            const ext = this.extractExtension(source);
            if (ext) {
              dependency.ext = ext;
            } else {
              // 如果没有扩展名，根据上下文推断
              dependency.ext = 'tsx'; // 默认为 tsx
            }
          }

          dependencies.push(dependency);
        },

        // 处理动态导入
        CallExpression: (astPath) => {
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
                const ext = this.extractExtension(source);
                dependency.ext = ext || 'tsx';
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

  /**
   * 提取文件扩展名
   */
  private extractExtension(source: string): string | undefined {
    const match = source.match(/\.([^./\\]+)$/);
    return match ? match[1] : undefined;
  }
}
