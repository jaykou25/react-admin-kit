import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'React Admin Kit',
  favicon: 'https://jaykou25.github.io/react-admin-kit/logo.png',
  logo: 'https://jaykou25.github.io/react-admin-kit/logo.png',
  mode: 'doc',
  outputPath: 'docs-dist',
  alias: {
    '@': '/src',
  },
  navs: [
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  publicPath: '/react-admin-kit/',
  base: '/react-admin-kit/',
});
