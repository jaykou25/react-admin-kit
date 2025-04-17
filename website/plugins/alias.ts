import path from 'path';

export default async function myPlugin(context, opts) {
  return {
    name: 'react-admin-kit-alias',
    configureWebpack(config, isServer, utils, content) {
      return {
        cache: false,
        watchOptions: {
          ignored: /\.docusaurus-previewer-cache/,
        },
        resolve: {
          alias: {
            'react-admin-kit': path.resolve(
              __dirname,
              '../../packages/react-admin-kit/src',
            ),
          },
        },
      };
    },
  };
}
