import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';

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
  outputPath: 'docs-dist',
  favicons: [isProd ? '/react-admin-kit/rak-r15.png' : '/rak-r15.png'],
  themeConfig: {
    logo: isProd ? '/react-admin-kit/rak-r15.png' : '/rak-r15.png',
    name: 'React Admin Kit',
    prefersColor: {
      switch: false,
    },
    socialLinks: {
      github: 'https://github.com/jaykou25/react-admin-kit',
    },
    apiDoc: doc,
  },
  publicPath: isProd ? '/react-admin-kit/' : '/',
  base: isProd ? '/react-admin-kit/' : '/',
  ssr: isProd ? {} : false,
  exportStatic: isProd
    ? {
        ignorePreRenderError: false,
      }
    : false,
});
