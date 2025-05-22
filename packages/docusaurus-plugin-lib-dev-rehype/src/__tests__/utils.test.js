import path from 'path';
import { analyzeDependencies } from '../utils';

describe('analyzeDependencies', () => {
  it('应该正确分析默认导入', () => {
    const code = `import React from 'react';`;
    const deps = analyzeDependencies(code);

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
    const deps = analyzeDependencies(code);

    expect(deps).toEqual([
      {
        type: 'NPM',
        source: 'antd',
        importType: 'named',
        imported: ['Button', 'Input'],
      },
    ]);
  });

  it('应该正确分析命名空间导入', () => {
    const code = `import * as styles from './styles.module.css';`;
    const deps = analyzeDependencies(code, {
      noRealPath: true,
    });

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
    const deps = analyzeDependencies(code, {
      noRealPath: true,
    });

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

  it('应该正确分析复杂的混合导入', () => {
    const code = `
      import React, { useState } from 'react';
      import * as styles from './styles.module.css';
      import type { ButtonProps } from 'antd/lib/button';
      import './styles.less';
      const Modal = React.lazy(() => import('./components/Modal'));
    `;

    const deps = analyzeDependencies(code, { noRealPath: true });

    expect(deps).toEqual([
      {
        type: 'NPM',
        source: 'react',
        importType: 'named',
        imported: ['default', 'useState'],
      },
      {
        type: 'FILE',
        source: './styles.module.css',
        ext: 'css',
        importType: 'namespace',
        imported: ['*'],
      },
      {
        type: 'NPM',
        source: 'antd/lib/button',
        importType: 'named',
        imported: ['ButtonProps'],
      },
      {
        type: 'FILE',
        source: './styles.less',
        importType: 'side-effect',
        imported: [],
        ext: 'less',
      },
      {
        type: 'FILE',
        source: './components/Modal',
        ext: 'tsx',
        importType: 'side-effect',
        imported: ['dynamic-import'],
      },
    ]);
  });

  it('应该在解析错误时返回空数组', () => {
    const code = `import { 错误的语法`;
    const deps = analyzeDependencies(code);

    expect(deps).toEqual([]);
  });

  //递归依赖分析
  it('应该正确分析递归依赖', () => {
    const code = `
      import Bar from './b';
    `;
    const rootDir = __dirname;
    const deps = analyzeDependencies(code, { rootDir });

    expect(deps).toEqual([
      {
        type: 'FILE',
        source: './b',
        realPath: path.resolve(rootDir, './b.js'),
        ext: 'js',
        importType: 'default',
        imported: ['default'],
      },
      {
        type: 'FILE',
        source: './c',
        realPath: path.resolve(rootDir, './c.js'),
        ext: 'js',
        importType: 'default',
        imported: ['default'],
      },
    ]);
  });

  it('应该正确分析递归依赖, 去重', () => {
    const code = `
      import Bar from './b';
      import Foo from './c';
    `;
    const rootDir = __dirname;
    const deps = analyzeDependencies(code, { rootDir });

    expect(deps).toEqual([
      {
        type: 'FILE',
        source: './b',
        realPath: path.resolve(rootDir, './b.js'),
        ext: 'js',
        importType: 'default',
        imported: ['default'],
      },
      {
        type: 'FILE',
        source: './c',
        realPath: path.resolve(rootDir, './c.js'),
        ext: 'js',
        importType: 'default',
        imported: ['default'],
      },
    ]);
  });
});
