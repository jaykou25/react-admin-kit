export default async function (this: any, content: any) {
  console.log('+++++++加载 mdx loader ');
  const { alias } = this.getOptions();
  const callback = this.async();

  const { compile } = await import('@mdx-js/mdx');
  const myRehype = // @ts-ignore
    (await import('docusaurus-plugin-lib-dev-rehype')).default;

  await compile(
    { value: content, path: this.resourcePath },
    {
      rehypePlugins: [
        [
          myRehype,
          {
            alias,
          },
        ],
      ],
    },
  );

  return callback(null, content);
}
