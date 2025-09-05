import fs from 'fs';
import path from 'path';
import { generateShortHash } from '../utils/hash-utils';
import type {
  DemoInfo,
  ComponentInfo,
  ComponentOptions,
  ImportStatement,
} from '../types';
import { toUnixPath } from '../utils/index';

/**
 * 组件生成器类
 *
 * 负责为每个 Previewer 代码块生成独立的 React 组件文件
 */
export class ComponentGenerator {
  private componentsDir: string;

  /**
   * 创建组件生成器实例
   *
   * @param cacheDir 缓存目录路径
   */
  constructor(private cacheDir: string) {
    this.componentsDir = path.join(cacheDir, 'components');
  }

  /**
   * 生成独立的 Previewer 组件
   * @param demoInfo 演示组件信息
   * @param options 组件选项
   * @param srcPath MDX 文档中的 src 路径
   * @returns 组件信息
   */
  generateComponent(
    demoInfo: DemoInfo,
    options: ComponentOptions,
  ): ComponentInfo {
    const {
      inline = false,
      title,
      componentId,
      mdxFilePath,
      demoPath,
      fromCache,
      createType,
    } = options;

    // 生成组件名称
    const componentName = this.generateComponentName(componentId, mdxFilePath);

    // 生成组件文件路径
    const componentFileName = `${componentName}.tsx`;
    const componentFilePath = path.join(this.componentsDir, componentFileName);

    const componentInfo: ComponentInfo = {
      id: componentId,
      filePath: componentFilePath,
      componentName,
      inline,
      title,
      demoInfo,
      demoPath,
      fromCache,
      createType,
    };

    return componentInfo;
  }

  /**
   * 生成组件文件到指定目录
   *
   * @param componentInfo 组件信息对象
   * @returns 生成的组件文件路径
   * @throws 如果组件生成失败
   */
  writeComponentFile(componentInfo: ComponentInfo): string {
    try {
      // 确保组件目录存在
      fs.mkdirSync(this.componentsDir, { recursive: true });

      // 生成组件代码
      const componentCode = this.generateComponentCode(componentInfo);

      // 写入文件
      fs.writeFileSync(componentInfo.filePath, componentCode);

      return componentInfo.filePath;
    } catch (error: unknown) {
      console.error(`写入组件文件失败: ${componentInfo.filePath}`, error);
      throw new Error(
        `组件生成失败: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  /**
   * 生成导入语句
   *
   * @param componentInfo 组件信息对象
   * @param relativePath 相对路径
   * @returns 导入语句对象
   */
  generateImportStatement(
    componentInfo: ComponentInfo,
    relativePath: string,
  ): ImportStatement {
    // 计算相对路径
    const importPath = path
      .relative(path.dirname(relativePath), componentInfo.filePath)
      .replace(/\\/g, '/') // 转换为 Unix 风格路径
      .replace(/\.tsx$/, ''); // 移除扩展名

    return {
      componentName: componentInfo.componentName,
      importPath: importPath.startsWith('.') ? importPath : `./${importPath}`,
    };
  }

  /**
   * 生成组件名称
   *
   * @param componentId 组件ID
   * @param mdxFilePath MDX文件路径
   * @returns 生成的唯一组件名
   */
  private generateComponentName(
    componentId: string,
    mdxFilePath: string,
  ): string {
    // 基于组件ID和MDX文件路径生成唯一组件名
    const hash = generateShortHash(componentId + mdxFilePath, 6);

    const safeName = componentId.replace(/[^a-zA-Z0-9_]/g, '_');
    return `P_${safeName}_${hash}`;
  }

  /**
   * 生成组件代码
   *
   * @param componentInfo 组件信息对象
   * @returns 生成的组件代码字符串
   */
  private generateComponentCode(componentInfo: ComponentInfo): string {
    try {
      const { demoInfo, inline, title, componentName, demoPath, filePath } =
        componentInfo;

      // 生成导入语句
      const demoImports = this.generateDemoImports(demoPath, filePath);

      // 生成组件信息对象（简化版，避免循环引用）
      const componentInfoJson = JSON.stringify(
        {
          id: demoInfo.id,
          sourceCode: demoInfo.sourceCode,
          dependencies: demoInfo.dependencies,
        },
        null,
        2,
      );

      const titleStr = title ? `'${title}'` : 'undefined';

      // 组件模板
      const template = `import React from 'react';
import { translate } from '@docusaurus/Translate';      
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { Previewer } from 'docusaurus-lib-dev/components';
${demoImports}

const componentInfo = ${componentInfoJson};

export default function ${componentName}() {
  const { colorMode } = useColorMode();
  const isBrowser = useIsBrowser();
  return (
    <Previewer 
      component={<DemoComponent />}
      componentInfo={componentInfo}
      inline={${inline}}
      title={${titleStr}}
      tooltipRender={(showCode) =>
        translate({
          id: \`previewer.actions.code.\${showCode ? 'shrink' : 'expand'}\`,
        })
      }
      colorMode={colorMode}
      isBrowser={isBrowser}
    />
  );
}`;

      return template;
    } catch (error: unknown) {
      console.error(`生成组件代码失败: ${componentInfo.componentName}`, error);
      return this.generateErrorComponent(
        componentInfo,
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  /**
   * 生成错误组件
   *
   * @param componentInfo 组件信息对象
   * @param error 错误对象
   * @returns 错误组件代码字符串
   */
  private generateErrorComponent(
    componentInfo: ComponentInfo,
    error: Error,
  ): string {
    return `import React from 'react';

export default function ${componentInfo.componentName}() {
  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ff4d4f', 
      borderRadius: '4px',
      backgroundColor: '#fff2f0' 
    }}>
      <h4>组件生成错误</h4>
      <p>组件 ${componentInfo.componentName} 生成失败</p>
      <details>
        <summary>错误详情</summary>
        <pre>{${JSON.stringify(error.message)}}</pre>
      </details>
    </div>
  );
}`;
  }

  /**
   * 生成演示组件的导入语句
   * @param demoPath MDX 文档中的 src 路径解析后的绝对地址
   * @param componentFilePath 生成的组件文件路径
   * @returns 导入语句字符串
   */
  private generateDemoImports(
    demoPath: string,
    componentFilePath: string,
  ): string {
    // 只生成主组件的导入路径
    let importPath = path.relative(
      path.resolve(componentFilePath, '..'),
      demoPath,
    );

    return `import DemoComponent from '${toUnixPath(importPath)}';`;
  }
}
