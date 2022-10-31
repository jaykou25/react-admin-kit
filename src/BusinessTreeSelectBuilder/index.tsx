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
  /**
   * 初始化window挂载
   */
  window[CacheName] = {};
  window[CacheStatusName] = {};

  return (props: BusinessTreeSelectProps<Type>) => {
    const { type, valueKey, labelKey, ...rest } = props;

    const target = apis.find((item) => item.type === type);

    if (!target) return null;

    return (
      <BaseTreeSelect
        type={type}
        {...defaultProps}
        {...(target.defaultProps || {})}
        loadFunction={target.api}
        noCache={target.noCache}
        valueKey={valueKey || target.valueKey || 'id'}
        labelKey={labelKey || target.labelKey || 'name'}
        {...rest}
      />
    );
  };
}

export default BusinessTreeSelectBuilder;

export const clearTreeSelectCache = (type?: string) => {
  if (type) {
    delete window[CacheName][type];
    delete window[CacheStatusName][type];
  } else {
    window[CacheName] = {};
    window[CacheStatusName] = {};
  }
};

// 用于生成api文档
export const Api: React.FC<ApiType> = () => {
  return null;
};

// 用于生成api文档
export const Self: React.FC<BusinessTreeSelectSelfProps<string>> = () => {
  return null;
};
