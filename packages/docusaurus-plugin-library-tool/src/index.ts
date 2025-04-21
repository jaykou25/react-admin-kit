export default async function pluginLibraryTool(context, opts) {
  return {
    name: 'docusaurus-plugin-library-tool',
    configureWebpack(config, isServer, utils, content) {
      return {
        watchOptions: {
          // 针对 docusaurus-rehype-plugin-previewer 生成的缓存目录忽略监控
          ignored: /\.docusaurus-previewer-cache/,
        },
      };
    },
  };
}
