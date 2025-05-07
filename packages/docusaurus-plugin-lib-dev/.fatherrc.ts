import { defineConfig } from 'father';

export default defineConfig({
  // ESM 格式插件产物
  esm: {
    input: 'components',
    output: 'es',
  },
  // CommonJS 格式插件产物
  cjs: {
    output: 'lib',
    // 为了更好的 Node.js 支持
    platform: 'node',
  },
});
