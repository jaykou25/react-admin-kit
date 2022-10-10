import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'React Admin Kit',
  favicon: '/logo.png',
  logo: '/logo.png',
  outputPath: 'docs-dist',
  alias: {
    '@': '/src',
  },
  mfsu: {},
  publicPath: '/react-admin-kit/',
  base: '/react-admin-kit/',
});
