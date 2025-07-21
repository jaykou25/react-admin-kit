// 提示词
/**
 * 这是一个 docusaurus 插件.
 * 通过项目中传入的项目地址, 利用 react-docgen-typescript 库, 扫描项目中的所有组件文件, 将解析到的 docs 数据存到缓存目录中.
 * 数据存在 .docusaurus-previewer-cache 中, 文件名叫 docgen.  存成什么格式呢? 需要建议
 * 请在合适的生命周期上执行上面的操作.
 */

import path from 'path';
import upath from 'upath';
import fs from 'fs-extra';
import { glob } from 'glob';
import { withCustomConfig } from 'react-docgen-typescript';
import FileSystemCache from 'file-system-cache';

interface PluginOptions {
  // 组件库的源码目录
  libPath: string;
  // 要扫描的文件匹配模式
  pattern?: string;
  alias?: Record<string, string>;
}

async function pluginLibraryDevTool(
  context: any,
  opts: PluginOptions,
): Promise<any> {
  const { libPath, pattern = '**/index.tsx' } = opts;

  const cacheBaseDir = '.docusaurus-lib-dev-cache';
  const cacheDir = path.join(context.siteDir, cacheBaseDir, 'docgen-files');
  const cacheFilePath = path.join(context.siteDir, cacheBaseDir, 'docgen.json');

  const docgenParser = withCustomConfig(
    path.resolve(libPath, 'tsconfig.json'),
    {
      savePropValueAsString: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop, component) => {
        // 需要较完整的类型定义
        if (component.name === 'SchemaFormSettingPropsType') {
          if (prop.parent) {
            const fileName = prop.parent.fileName;
            // 只忽略 @types/react
            if (
              fileName.includes('node_modules') &&
              fileName.includes('@types/react')
            ) {
              return false;
            }
          }
          return true;
        }

        if (component.name === 'ModalSettingPropsType') {
          return true;
        }

        // 过滤掉 node_modules 中的属性
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  );

  const cache = FileSystemCache({
    basePath: cacheDir,
  });

  console.log('插件启动docusaurus-plugin-lib-dev');

  return {
    name: 'docusaurus-plugin-library-dev-tool',

    // 在构建开始前执行文档解析
    async loadContent() {
      console.log('插件日志', '解析 tsx 文件...');

      // 扫描所有组件文件
      const files = await glob(pattern, {
        cwd: libPath,
        ignore: ['node_modules/*', 'dist/*', '**/demos/**/*', '**/cases/**/*'], // 忽略文件
      });

      console.log('插件日志', 'tsx 文件数', files.length);

      const docsData: any = [];

      for (const file of files) {
        try {
          const filePath = path.join(libPath, file);
          const cacheKey = upath.normalize(filePath);

          // 获取文件最后修改时间
          const stat = await fs.stat(filePath);
          const mtime = stat.mtimeMs;

          // 读取缓存
          const cacheItem = await cache.get(cacheKey);
          if (cacheItem && cacheItem.mtime === mtime && cacheItem.data) {
            // 缓存有效
            docsData.push(...cacheItem.data);
            continue;
          }

          const tsInfo = docgenParser.parse(filePath);
          await cache.set(cacheKey, { mtime, data: tsInfo });

          console.log('解析 ts 文件成功', filePath);
          if (tsInfo.length > 0) {
            docsData.push(...tsInfo);
          }
        } catch (error) {
          console.warn(`Failed to parse ${file}:`, error);
        }
      }

      // 确保缓存目录存在
      await fs.ensureDir(path.dirname(cacheFilePath));

      console.log('插件日志', '类型定义写入文件', cacheFilePath);
      // 写入缓存文件
      await fs.writeJSON(cacheFilePath, docsData, { spaces: 2 });

      return docsData;
    },

    // 暴露数据给其他插件和主题使用
    async contentLoaded({ content, actions }: any) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}

export default pluginLibraryDevTool;
