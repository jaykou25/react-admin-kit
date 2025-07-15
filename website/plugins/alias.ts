import path from 'path';

export default async function myPlugin(context, opts) {
  console.log('加载 alias 插件');
  return {
    name: 'react-admin-kit-alias',
    configureWebpack(config, isServer, utils, content) {
      return {
        resolve: {
          alias: {
            // '@rak': path.resolve(
            //   __dirname,
            //   '../../packages/react-admin-kit/src',
            // ),
            'react-admin-kit': path.resolve(
              __dirname,
              '../../packages/react-admin-kit/src',
            ),
          },
        },
        // cache: false,
        module: {
          rules: [
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
