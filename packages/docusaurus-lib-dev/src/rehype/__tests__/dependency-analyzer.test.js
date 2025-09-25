import { DependencyAnalyzer } from '../utils/dependency-analyzer';

describe('DependencyAnalyzer', () => {
  let analyzer;

  beforeEach(() => {
    analyzer = new DependencyAnalyzer();
  });

  it('应该正确分析默认导入', () => {
    const code = `import React from 'react';`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'NPM',
        source: 'react',
        importType: 'default',
        imported: ['default'],
      },
    ]);
  });

  it('应该正确分析命名导入', () => {
    const code = `import { Button, Input } from 'antd';`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'NPM',
        source: 'antd',
        importType: 'named',
        imported: ['Button', 'Input'],
      },
    ]);
  });

  it('应该正确分析文件导入', () => {
    const code = `import * as styles from './styles.module.css';`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'FILE',
        source: './styles.module.css',
        ext: 'css',
        importType: 'namespace',
        imported: ['*'],
      },
    ]);
  });

  it('应该正确分析动态导入', () => {
    const code = `const OtherComponent = React.lazy(() => import('./OtherComponent'));`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'FILE',
        source: './OtherComponent',
        ext: 'tsx',
        importType: 'side-effect',
        imported: ['dynamic-import'],
      },
    ]);
  });

  it('应该正确分析多个导入语句', () => {
    const code = `import { useContext } from 'react'; 
import App from './app';`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'NPM',
        source: 'react',
        importType: 'named',
        imported: ['useContext'],
      },
      {
        type: 'FILE',
        source: './app',
        ext: 'tsx',
        importType: 'default',
        imported: ['default'],
      },
    ]);
  });

  it('应该在解析错误时返回空数组', () => {
    const code = `import { 错误的语法`;
    const deps = analyzer.analyzeDependencies(code);

    expect(deps).toEqual([]);
  });
});
