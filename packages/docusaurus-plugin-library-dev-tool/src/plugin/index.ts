// 提示词
/**
 * 这是一个 docusaurus 插件.
 * 通过项目中传入的项目地址, 利用 react-docgen-typescript 库, 扫描项目中的所有组件文件, 将解析到的 docs 数据存到缓存目录中.
 * 数据存在 .docusaurus-previewer-cache 中, 文件名叫 docgen.  存成什么格式呢? 需要建议
 * 请在合适的生命周期上执行上面的操作.
 */

import path from 'path';
import fs from 'fs-extra';
import { glob } from 'glob';
import { withCustomConfig } from 'react-docgen-typescript';

interface PluginOptions {
  // 组件库的源码目录
  libPath: string;
  // 要扫描的文件匹配模式
  pattern?: string;
}

export default async function pluginLibraryDevTool(
  context: any,
  opts: PluginOptions,
) {
  const { libPath, pattern = '**/*.tsx' } = opts;

  const cacheDir = '.docusaurus-previewer-cache';

  const docgenParser = withCustomConfig(
    path.resolve(libPath, 'tsconfig.json'),
    {
      savePropValueAsString: true,
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        // 过滤掉 node_modules 中的属性
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  );

  console.log('插件启动docusaurus-plugin-library-tool');

  return {
    name: 'docusaurus-plugin-library-dev-tool',

    // 在构建开始前执行文档解析
    async loadContent() {
      console.log('插件日志', '解析 tsx 文件...');
      const cacheFilePath = path.join(context.siteDir, cacheDir, 'docgen.json');

      // 扫描所有组件文件
      const files = await glob(pattern, {
        cwd: libPath,
        ignore: ['node_modules/**'], // 忽略文件
      });

      const docsData: any = [];

      for (const file of files) {
        try {
          const filePath = path.join(libPath, file);
          const tsInfo = docgenParser.parse(filePath);
          if (tsInfo.length > 0) {
            tsInfo.forEach((info) => {
              docsData.push(info);
            });
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

    // 配置 webpack，忽略缓存目录
    configureWebpack() {
      return {
        watchOptions: {
          ignored: /\.docusaurus-previewer-cache/,
        },
      };
    },

    // 暴露数据给其他插件和主题使用
    async contentLoaded({ content, actions }: any) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}
