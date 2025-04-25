import path from 'path';

function enhance(config) {
  const rules = config?.module?.rules;
  const mdxRules = rules?.filter((rule) =>
    rule.test?.toString().includes('mdx'),
  );

  console.log('MDX specific rules:');
  mdxRules?.forEach((rule, index) => {
    const use = rule.use;
    use.forEach((item, index) => {
      // 找到 options 的 rehypePlugins 有值的那个 item
      if (item.options?.rehypePlugins?.length > 0) {
        // 为什么清不掉这个呢???
        item.options.rehypePlugins = [];
        // item.options.dependencies = [
        //   path.resolve(
        //     __dirname,
        //     '../../packages/react-admin-kit/src/Button/demos/basic/index.tsx',
        //   ),
        // ];
        // console.log(`MDX Rule ${index}:`, 'options', item.options);
      }
    });
  });

  mdxRules.forEach((rule, index) => {
    rule.use.forEach((item, index) => {
      console.log('rule', item.options);
    });
  });
}

export default function patchLoader() {
  return {
    name: 'patch-loader',
    configureWebpack(config, isServer, utils, content) {
      enhance(config);
    },
  };
}
