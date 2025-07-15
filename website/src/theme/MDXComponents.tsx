import MDXComponents from '@theme-original/MDXComponents';
import Previewer from '@site/src/components/Previewer';
import { API } from 'docusaurus-lib-dev/components';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Previewer,
  API,
};
