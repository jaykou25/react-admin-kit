// 这是一个 rehype 插件, 用于分析 mdx 文件中的 previewer 代码块.
// 比如 <Previewer src='./demo/basic' />
// 插件会提取出 src 的地址, 并找到对应的文件, 将文件的源码和文件地址存在一个临时目录. 供其它组件使用.
// 除此之外, 还要分析文件源码中的依赖, 这于其中的本地依赖, 也要分析出来, 并把它的源码和文件地址存储起来.

import { visit } from 'unist-util-visit';
import path from 'path';
import { createHash } from 'crypto';
import upath from 'upath';
import fs from 'fs';
import { createFilter } from '@rollup/pluginutils';
import type { Plugin } from 'unified';
import type { Node } from 'unist';
import { analyzeDependencies, resolvePath } from './utils.js';

interface PreviewerOptions {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
  cacheDir?: string;
  elementName?: string;
  alias?: Record<string, string>;
}

const plugin: Plugin<[PreviewerOptions?]> = (
  options: PreviewerOptions = {},
) => {
  const {
    include = /\.mdx?$/,
    exclude,
    cacheDir = path.join(process.cwd(), '.docusaurus-previewer-cache'),
    elementName = 'Previewer',
    alias = {},
  } = options;

  console.log(
    '日志+++++++++++',
    '加载 rehype 插件 Previewer',
    'elementName:',
    elementName,
  );

  // 写入到 .cacheDir 中
  const result: Record<string, any> = {};

  const filter = createFilter(include, exclude);

  return (tree: Node, file: any) => {
    console.log('日志', 'rehype 插件', '执行');
    if (!filter(file.path)) {
      return;
    }

    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      console.log('日志', 'rehype 插件', '执行 visit');
      if (node.name === elementName) {
        console.log('日志', 'rehype 插件', '执行 visit 遇到 previewer 节点');
        const srcAttr = node.attributes.find(
          (attr: any) => attr.name === 'src',
        );
        const src = srcAttr.value;

        if (src) {
          // 处理 src 中的别名
          // 比如 src = '@@/Button/demos/basic/index.tsx' => 替换成绝对路径
          const aliasedPath = useAlias(src, alias);

          // 统一成一个绝对路径
          const absSrc = src.startsWith('.')
            ? path.resolve(file.path, src)
            : aliasedPath;

          // absSrc 可能是一个文件夹, 如果是文件夹的话需要默认去找下面的 index.tsx 或 index.jsx 或 index.ts 或 index.js
          const demoRawPath = resolvePath(absSrc);

          // 转换成 unix 风格, 用作键值
          const demoPath = upath.normalize(demoRawPath);

          // 处理文件源码和依赖分析
          const demoInfo = processDemoFile(demoRawPath);

          result[demoPath] = demoInfo;

          console.log('日志', 'rehype 插件', '执行 visit 更改 src');
          srcAttr.value = demoPath;
        }
      }
    });

    const resultPath = path.join(cacheDir, 'result.json');
    fs.mkdirSync(path.dirname(resultPath), { recursive: true });

    // 将对象写入文件
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));

    const demosPath = path.join(cacheDir, 'demos.ts');

    const innerContent = Object.keys(result)
      .map((demoPath) => {
        const demoRelRawPath = path.relative(cacheDir, demoPath);
        const demoRelPath = upath.normalize(demoRelRawPath);
        return `"${demoPath}": React.lazy(() => import("${demoRelPath}"))`;
      })
      .join(',\n');

    const tsContent = `
    import React from 'react';
    export const demos = {
    ${innerContent}
     } 
      `;

    fs.writeFileSync(demosPath, tsContent);
  };
};

function processDemoFile(filePath: string) {
  // 1. 读取文件源码
  const code = fs.readFileSync(filePath, 'utf-8');

  // 2. 分析依赖
  const dependencies = analyzeDependencies(code);

  /**
   * 3. 存储文件到临时目录 result.json 中
   * 参考如下:
   * {
   *   id: 'XX
   *   dependencies: [
   *    {
   *      type: 'FILE' | 'NPM',
   *      source: 'xxx.less',
   *      ext: 'js' | 'ts' | 'jsx' | 'tsx',
   *      value: '文件内容'
   *    }
   *   ]
   */

  // 创建 demo 组件的信息对象
  const demoInfo = {
    id: base64ShortHash(filePath),
    sourceCode: code,
    dependencies: dependencies.map((item) => {
      if (item.type === 'FILE') {
        const depFilePath = path.resolve(filePath, '..', item.source);
        const depFilePathSafe = resolvePath(depFilePath);
        return {
          ...item,
          value: fs.readFileSync(depFilePathSafe, 'utf-8'), // 读取文件内容
        };
      } else {
        return item;
      }
    }),
  };

  return demoInfo;
}

function useAlias(src: string, alias: Record<string, string>) {
  const keys = Object.keys(alias);
  for (const key of keys) {
    if (src.startsWith(key)) {
      return src.replace(key, alias[key]);
    }
  }
  return src;
}

function base64ShortHash(str) {
  return createHash('sha256')
    .update(str)
    .digest('base64')
    .replace(/[+/=]/g, '') // 移除特殊字符
    .substring(0, 8);
}

export default plugin;
