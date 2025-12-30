import { delGlobal, myMergeOptions } from '../utils';
import BaseTreeSelect from './BaseTreeSelect';
import {
  ApiType,
  BusinessTreeSelectBuilderProps,
  BusinessTreeSelectProps,
  BusinessTreeSelectSelfProps,
} from './types';

/**
 * 数据挂在window上作为缓存, 避免重复请求
 */
export const CacheName = '@@treeSelectData';
export const CacheStatusName = '@@treeSelectDataIsStart';

function BusinessTreeSelectBuilder<Type extends string>({
  apis = [],
  defaultProps = {},
}: BusinessTreeSelectBuilderProps) {
  return (props: BusinessTreeSelectProps<Type>) => {
    const { type, ...rest } = props;

    const target = apis.find((item) => item.type === type);

    if (!target) return null;

    const mergedProps = myMergeOptions(
      defaultProps,
      target.defaultProps || {},
      {
        fieldNames: {
          value: 'id',
          label: 'name',
        },
      },
    );

    return (
      <BaseTreeSelect
        type={type}
        {...mergedProps}
        loadFunction={target.api}
        {...rest}
      />
    );
  };
}

export default BusinessTreeSelectBuilder;

export const clearTreeSelectCache = (type?: string) => {
  if (type) {
    delGlobal(CacheName, type);
    delGlobal(CacheStatusName, type);
  } else {
    delGlobal(CacheName);
    delGlobal(CacheStatusName);
  }
};

// 用于生成api文档
/* istanbul ignore next */
export const BizTreeApi: React.FC<ApiType> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const BusinessTreeSelectSelf: React.FC<
  BusinessTreeSelectSelfProps<string>
> = () => {
  return null;
};
