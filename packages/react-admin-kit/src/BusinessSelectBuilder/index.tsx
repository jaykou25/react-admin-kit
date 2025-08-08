import { delGlobal, myMergeOptions } from '../utils';
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
export const SelectCurrentName = '@@selectDataCurrent';

function BusinessSelectBuilder<Type extends string>({
  apis = [],
  defaultProps = {},
}: BusinessSelectBuilderProps) {
  return (props: BusinessSelectProps<Type>) => {
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

    if (target.pagination) {
      return (
        <BasePaginationSelect
          type={type}
          {...mergedProps}
          loadFunction={target.api}
          {...rest}
        />
      );
    }

    return (
      <BaseSelect
        type={type}
        {...mergedProps}
        loadFunction={target.api}
        {...rest}
      />
    );
  };
}

export default BusinessSelectBuilder;

export const clearSelectCache = (type?: string) => {
  if (type) {
    delGlobal(SelectName, type);
    delGlobal(SelectStatusName, type);
    delGlobal(SelectTotalName, type);
    delGlobal(SelectCurrentName, type);
  } else {
    delGlobal(SelectName);
    delGlobal(SelectStatusName);
    delGlobal(SelectTotalName);
    delGlobal(SelectCurrentName);
  }
};

// 用于生成api文档
/* istanbul ignore next */
export const BizApi: React.FC<ApiType> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const BusinessSelectSelf: React.FC<
  BusinessSelectSelfProps<string>
> = () => {
  return null;
};
