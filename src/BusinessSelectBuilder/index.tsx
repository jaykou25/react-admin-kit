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

const BusinessSelectBuilder = ({ apis = [] }: BusinessSelectBuilderProps) => {
  /**
   * 初始化window挂载
   */
  window[SelectName] = {};
  window[SelectStatusName] = {};
  window[SelectTotalName] = {};

  return (props: BusinessSelectProps) => {
    const { type, valueKey, labelKey, ...rest } = props;

    const target = apis.find((item) => item.type === type);

    if (!target) return null;

    if (target.pagination) {
      return (
        <BasePaginationSelect
          type={type}
          loadFunction={target.api}
          noCache={target.noCache}
          valueKey={valueKey || target.valueKey || 'id'}
          labelKey={labelKey || target.labelKey || 'name'}
          {...rest}
        />
      );
    }

    return (
      <BaseSelect
        type={type}
        loadFunction={target.api}
        noCache={target.noCache}
        valueKey={valueKey || target.valueKey || 'id'}
        labelKey={labelKey || target.labelKey || 'name'}
        {...rest}
      />
    );
  };
};

export default BusinessSelectBuilder;

// 用于生成api文档
export const Api: React.FC<ApiType> = () => {
  return null;
};

// 用于生成api文档
export const Self: React.FC<BusinessSelectSelfProps> = () => {
  return null;
};
