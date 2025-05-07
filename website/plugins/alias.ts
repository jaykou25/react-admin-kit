import path from 'path';

export default async function myPlugin(context, opts) {
  return {
    name: 'react-admin-kit-alias',
    configureWebpack(config, isServer, utils, content) {
      // const rules = config.module.rules;
      // const rule = rules[8];

      // rule.use[0].options.rehypePlugins = [];

      // rules.forEach((r, i) => {
      //   console.log('rule', r.test);
      //   console.log('rule index', i);
      //   console.log('rule include', r.include);
      //   console.log('rule loader', r.use);
      // });

      return {
        // cache: false,
        // watchOptions: {
        //   ignored: /\.docusaurus-previewer-cache/,
        // },
        resolve: {
          alias: {
            'react-admin-kit': path.resolve(
              __dirname,
              '../../packages/react-admin-kit/src',
            ),
          },
        },
        module: {
          rules: [
            // {
            //   test: /\.mdx?$/i,
            //   include: rule.include,
            //   use: [path.resolve(__dirname, './myloader')],
            // },
            {
              test: /\.less$/i,
              use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
              ],
            },
          ],
        },
      };
    },
  };
}
