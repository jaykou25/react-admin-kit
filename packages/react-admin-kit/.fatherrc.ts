import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'src', // 默认编译目录
    output: 'es',
    extraBabelPlugins: [[require.resolve('./scripts/replaceLib'), {}]],
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },

  cjs: {
    extraBabelPlugins: [
      ['babel-plugin-styled-components', {}, 'jj'],
      [require.resolve('./scripts/replaceEs'), {}, 'cjs'],
    ],
    input: 'src', // 默认编译目录
    output: 'lib',
    platform: 'browser', // 默认构建为 Node.js 环境的产物
    transformer: 'babel', // 默认使用 esbuild 以获得更快的构建速度
  },
});
