import path from 'path';
import { createFilter } from '@rollup/pluginutils';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

// 导入新的模块化组件
import { PreviewerProcessor } from './core/processor';
import { CacheManager } from './core/cache-manager';
import { FileHandler } from './core/file-handler';
import { ComponentGenerator } from './core/component-generator';
import { PathResolver } from './utils/path-resolver';
import { DependencyAnalyzer } from './utils/dependency-analyzer';
import type { PreviewerOptions } from './types';

const plugin: Plugin<[PreviewerOptions]> = (options: PreviewerOptions = {}) => {
  const {
    include = /\.mdx?$/,
    exclude,
    cacheDir = path.join(process.cwd(), '.docusaurus-previewer-cache'),
    elementName = 'Previewer',
    alias = {},
  } = options;

  console.log(
    '加载 rehype 插件 Previewer (重构版)',
    'elementName:',
    elementName,
  );

  const filter = createFilter(include, exclude);

  // 初始化各个模块
  const pathResolver = new PathResolver();
  const dependencyAnalyzer = new DependencyAnalyzer();
  const cacheManager = new CacheManager(cacheDir);
  const fileHandler = new FileHandler(pathResolver, dependencyAnalyzer);
  const componentGenerator = new ComponentGenerator(cacheDir);

  const processor = new PreviewerProcessor(
    { include, exclude, cacheDir, elementName, alias },
    cacheManager,
    fileHandler,
    componentGenerator,
    pathResolver,
  );

  return (tree: Node, file: any) => {
    console.log('rehype 插件 (重构版)', '执行');

    if (!filter(file.path)) {
      return;
    }

    try {
      const { components } = processor.process(tree, file);
      console.log(
        `处理完成，生成了 ${components.length} 个组件，${
          components.filter((c) => c.fromCache).length
        } 个来自缓存，${
          components.filter((c) => c.createType === 'new').length
        } 个新增，${
          components.filter((c) => c.createType === 'update').length
        } 个更新`,
      );
    } catch (error) {
      console.error('插件处理失败:', error);
      // 可以选择抛出错误或者继续处理
    }
  };
};

export default plugin;
