import type { Node } from 'unist';

// 插件配置选项
export interface PreviewerOptions {
  include?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
  cacheDir?: string;
  elementName?: string;
  alias?: Record<string, string>;
}

// 依赖信息
export interface Dependency {
  type: 'NPM' | 'FILE';
  source: string; // 源地址 eg: ./Hello
  resolvedSource?: string; // 解析后的地址 eg: ./Hello.tsx
  ext?: string;
  importType: 'default' | 'namespace' | 'named' | 'side-effect';
  imported?: string[]; // 导入的具体内容
  value?: string; // 文件内容（仅 FILE 类型）
}

// 演示组件信息
export interface DemoInfo {
  id: string;
  sourceCode: string;
  dependencies: Dependency[];
}

// Previewer 节点
export interface PreviewerNode extends Node {
  type: 'mdxJsxFlowElement';
  name: string;
  attributes: Array<{
    name: string;
    value: string;
  }>;
  children: Node[];
}

// 组件选项
export interface ComponentOptions {
  inline?: boolean;
  componentId: string;
  mdxFilePath: string;
  demoPath: string; // MDX 文档中的 src 路径解析出来的绝对路径
  srcPath?: string; // todo: 可删， MDX 文档中的 src 路径，可选参数以保持向后兼容性
}

// 组件信息
export interface ComponentInfo {
  id: string;
  filePath: string;
  componentName: string;
  inline: boolean;
  demoInfo: DemoInfo;
  demoPath: string; // MDX 文档中的 src 路径解析出来的绝对路径
  srcPath?: string; // todo: 可删，MDX 文档中的 src 路径
}

// 导入语句
export interface ImportStatement {
  componentName: string;
  importPath: string;
}

// 处理结果
export interface ProcessResult {
  imports: ImportStatement[];
  components: ComponentInfo[];
}

// 缓存条目
export interface CacheEntry {
  contentHash: string; // 文件内容哈希
  dependencyHashes: Record<string, string>; // 依赖文件哈希映射
  demoInfo: DemoInfo; // 组件信息
  timestamp: number; // 缓存时间戳
}

// 缓存索引
export interface CacheIndex {
  [filePath: string]: CacheEntry;
}

// 文件选项
export interface FileOptions {
  extensions?: string[];
  indexFiles?: string[];
}
