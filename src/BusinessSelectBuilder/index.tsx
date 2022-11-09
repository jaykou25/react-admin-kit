import BasePaginationSelect from './components/BasePaginationSelect';
import BaseSelect from './components/BaseSelect';
import {
  ApiType,
  BusinessSelectBuilderProps,
  BusinessSelectProps,
  BusinessSelectSelfProps,
} from './types';

/**
 * select数据挂在window上作为缓存, 避免重复请求
 */
export const SelectName = '@@selectData';
export const SelectStatusName = '@@selectDataIsStart';
export const SelectTotalName = '@@selectDataTotal';

function BusinessSelectBuilder<Type extends string>({
  apis = [],
  defaultProps = {},
}: BusinessSelectBuilderProps) {
  /**
   * 初始化window挂载
   */
  window[SelectName] = {};
  window[SelectStatusName] = {};
  window[SelectTotalName] = {};

  return (props: BusinessSelectProps<Type>) => {
    const { type, ...rest } = props;

    const target = apis.find((item) => item.type === type);

    if (!target) return null;

    if (target.pagination) {
      return (
        <BasePaginationSelect
          type={type}
          {...defaultProps}
          {...(target.defaultProps || {})}
          loadFunction={target.api}
          {...rest}
        />
      );
    }

    return (
      <BaseSelect
        type={type}
        {...defaultProps}
        {...(target.defaultProps || {})}
        loadFunction={target.api}
        {...rest}
      />
    );
  };
}

export default BusinessSelectBuilder;

export const clearSelectCache = (type?: string) => {
  if (type) {
    delete window[SelectName][type];
    delete window[SelectStatusName][type];
    delete window[SelectTotalName][type];
  } else {
    window[SelectName] = {};
    window[SelectStatusName] = {};
    window[SelectTotalName] = {};
  }
};

// 用于生成api文档
export const Api: React.FC<ApiType> = () => {
  return null;
};

// 用于生成api文档
export const Self: React.FC<BusinessSelectSelfProps<string>> = () => {
  return null;
};
