import path from 'path';
import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { VFile } from 'vfile';
import { CacheManager } from './cache-manager';
import { FileHandler } from './file-handler';
import { ComponentGenerator } from './component-generator';
import { PathResolver } from '../utils/path-resolver';
import type {
  PreviewerOptions,
  PreviewerNode,
  ProcessResult,
  ComponentInfo,
  ImportStatement,
  DemoInfo,
} from '../types';

export class PreviewerProcessor {
  constructor(
    private options: PreviewerOptions,
    private cacheManager: CacheManager,
    private fileHandler: FileHandler,
    private componentGenerator: ComponentGenerator,
    private pathResolver: PathResolver,
  ) {}

  /**
   * 处理 MDX 文件中的 Previewer 节点
   */
  process(tree: Node, file: VFile): ProcessResult {
    const imports: ImportStatement[] = [];
    const components: ComponentInfo[] = [];

    let nodeIndex = 0;

    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      if (node.name === this.options.elementName) {
        try {
          const componentInfo = this.processPreviewerNode(
            node,
            nodeIndex++,
            file,
          );
          if (componentInfo) {
            components.push(componentInfo);

            // 生成导入语句
            const importStatement =
              this.componentGenerator.generateImportStatement(
                componentInfo,
                file.path || '',
              );

            imports.push(importStatement);

            // 替换节点
            this.replacePreviewerWithComponent(node, componentInfo);
          }
        } catch (error) {
          console.error('处理 Previewer 节点失败:', error);
          // 可以选择跳过这个节点或者提供默认处理
        }
      }
    });

    // 注入导入语句到文件顶部
    if (imports.length > 0) {
      this.injectImports(tree, imports);
    }

    return { imports, components };
  }

  /**
   * 处理单个 Previewer 节点
   */
  private processPreviewerNode(
    node: PreviewerNode,
    index: number,
    file: VFile,
  ): ComponentInfo | null {
    // 获取 src 属性
    const srcAttr = node.attributes.find((attr) => attr.name === 'src');
    if (!srcAttr || !srcAttr.value) {
      console.warn('Previewer 节点缺少 src 属性');
      return null;
    }

    // 获取 inline 属性
    const inlineAttr = node.attributes.find((attr) => attr.name === 'inline');
    const inline = inlineAttr !== undefined;

    const src = srcAttr.value;
    const basePath = file.path || '';

    try {
      // 解析文件路径
      const resolvedPath = this.pathResolver.resolveRelativePath(
        src,
        basePath,
        this.options.alias || {},
      );

      // 检查缓存
      const contentHash = this.fileHandler.calculateFileHash(resolvedPath);
      let demoInfo = this.cacheManager.getCachedDemo(resolvedPath);
      let fromCache = true;
      let createType: 'new' | 'update' | undefined;

      if (
        !demoInfo ||
        !this.cacheManager.isCacheValid(resolvedPath, contentHash)
      ) {
        fromCache = false;
        if (!demoInfo) {
          createType = 'new';
        } else {
          createType = 'update';
        }

        // 处理文件并更新缓存
        demoInfo = this.fileHandler.processDemo(resolvedPath);
        this.cacheManager.setCachedDemo(resolvedPath, demoInfo, contentHash);
      }

      // 生成组件
      // 使用 MDX 文件路径（相对于 cwd）和索引生成组件 ID
      const relativeMdxPath = path.relative(process.cwd(), basePath);
      const mdxPathWithoutExt = relativeMdxPath.replace(
        path.extname(relativeMdxPath),
        '',
      );
      const componentId = `${mdxPathWithoutExt}_${index}`;
      const componentInfo = this.componentGenerator.generateComponent(
        demoInfo,
        {
          inline,
          componentId,
          mdxFilePath: basePath,
          demoPath: resolvedPath,
          fromCache,
          createType,
        },
      );

      // 写入组件文件
      this.componentGenerator.writeComponentFile(componentInfo);

      return componentInfo;
    } catch (error) {
      console.error(`处理 Previewer 节点失败 (src: ${src}):`, error);
      return null;
    }
  }

  /**
   * 将 Previewer 节点替换为组件使用
   */
  private replacePreviewerWithComponent(
    node: PreviewerNode,
    componentInfo: ComponentInfo,
  ): void {
    // 替换节点类型和属性
    node.name = componentInfo.componentName;
    node.attributes = []; // 清空原有属性
    node.children = []; // 清空子节点
  }

  /**
   * 在文件顶部注入导入语句
   */
  private injectImports(tree: Node, imports: ImportStatement[]): void {
    const importNodes = imports.map(this.createImportNode);

    // 在文件开头插入导入语句
    if ('children' in tree && Array.isArray(tree.children)) {
      tree.children.unshift(...importNodes);
    }
  }

  /**
   * 创建导入节点
   */
  private createImportNode(importStatement: ImportStatement): Node {
    return {
      type: 'mdxjsEsm',
      value: `import ${importStatement.componentName} from '${importStatement.importPath}';`,
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ImportDeclaration',
              specifiers: [
                {
                  type: 'ImportDefaultSpecifier',
                  local: {
                    type: 'Identifier',
                    name: importStatement.componentName,
                  },
                },
              ],
              source: { type: 'Literal', value: importStatement.importPath },
            },
          ],
          sourceType: 'module',
        },
      },
    } as Node;
  }
}
