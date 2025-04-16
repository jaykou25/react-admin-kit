import MDXComponents from '@theme-original/MDXComponents';
import Demo from '@site/src/components/Demo';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Demo,
};
