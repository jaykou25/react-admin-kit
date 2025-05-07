module.exports = async function (c) {
  console.log('myloader.js loaded', c);

  // 使用动态 import 加载 ESM 模块
  // const { compile } = await import('@mdx-js/mdx');

  const myRehype = require('docusaurus-plugin-library-dev-tool/rehype-plugin');
  console.log('myRehype', myRehype);

  // compile(c, {
  //   rehypePlugins: [
  //     [
  //       myRehype.default,
  //       {
  //         alias: {
  //           '@@': path.resolve(__dirname, '../../packages/react-admin-kit/src'),
  //         },
  //       },
  //     ],
  //   ],
  // });
  return c;
};
