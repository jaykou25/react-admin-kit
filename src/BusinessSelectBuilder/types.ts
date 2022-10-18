import type { SelectProps } from 'antd';

type ApiType = {
  api: any;
  type: string;
  labelKey?: string;
  valueKey?: string;
  pagination?: boolean;
  noCache?: boolean;
};

export type BusinessSelectBuilderProps = {
  apis: ApiType[];
};

export interface BusinessSelectProps extends Omit<SelectProps<T>, 'onChange'> {
  type: string;
  newPlaceholder?: string; // 用于覆盖原来的placehoder
  labelKey?: string;
  valueKey?: string;
  queryParams?: Record<string, any>; // 查询时的依赖
  renderLabel?: (node: any) => any; // 自定义文本显示
  onChange?: (val, option) => void;
}
