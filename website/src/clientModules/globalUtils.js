// 将 react-admin-kit/utils 挂载到 window._ 上
import { normalizeTree } from 'react-admin-kit/utils';

if (typeof window !== 'undefined') {
  window._ = { normalizeTree };
}
