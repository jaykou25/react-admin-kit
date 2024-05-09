import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

const isVercel = process.env.VERCEL === '1';
const outputPath = isVercel ? 'vercel-dist' : 'docs-dist';

// 布署在 github pages 上需要二级目录
const isBase = process.env.GITHUB === '1';

const parser = require('react-docgen-typescript');
const doc = parser
  .withCompilerOptions(
    { esModuleInterop: true, jsx: 'preserve' },
    { propFilter: { skipPropsWithoutDoc: true } },
  )
  .parse([
    './src/Button/index.tsx',
    './src/LinkButton/index.tsx',
    './src/SettingProvider/index.tsx',
    './src/FormUpload/index.tsx',
    './src/SchemaForm/index.tsx',
    './src/ModalForm/index.tsx',
    './src/BusinessSelectBuilder/index.tsx',
    './src/BusinessTreeSelectBuilder/index.tsx',
  ]);

export default defineConfig({
  outputPath,
  favicons: [isBase ? '/react-admin-kit/rak-r15.png' : '/rak-r15.png'],
  themeConfig: {
    logo: isBase ? '/react-admin-kit/rak-r15.png' : '/rak-r15.png',
    name: 'React Admin Kit',
    prefersColor: {
      switch: false,
    },
    socialLinks: {
      github: 'https://github.com/jaykou25/react-admin-kit',
    },
    apiDoc: doc,
  },
  publicPath: isBase ? '/react-admin-kit/' : '/',
  base: isBase ? '/react-admin-kit/' : '/',
  ssr: isProd ? {} : false,
  exportStatic: isProd
    ? {
        ignorePreRenderError: false,
      }
    : false,
});
