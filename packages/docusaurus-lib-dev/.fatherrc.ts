import { defineConfig } from 'father';

const buildType = process.env.BUILD_TYPE;

let config: any;

if (buildType === 'rehype') {
  config = defineConfig({
    cjs: {
      input: 'src/rehype',
      output: 'lib-rehype',
    },
  });
} else if (buildType === 'components') {
  config = defineConfig({
    cjs: {
      input: 'src/components',
      output: 'lib-components',
    },
    esm: {
      input: 'src/components',
      output: 'es-components',
    },
  });
} else {
  config = defineConfig({
    cjs: {
      input: 'src',
      output: 'lib',
      ignores: ['src/rehype/*', 'src/components/**'],
    },
  });
}

export default config;
