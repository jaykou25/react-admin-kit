import type { SelectProps } from 'antd';

export type ApiType = {
  /**
   * @description       获取下拉数据的接口
   * @default           -
   */
  api: () => Promise<{ data: any }>;
  /**
   * @description       下拉选择的名字
   * @default           -
   */
  type: string;
  /**
   * @description       select label的默认读取字段
   * @default           'name'
   */
  labelKey?: string;
  /**
   * @description       select value的默认读取字段
   * @default           'id'
   */
  valueKey?: string;
  /**
   * @description       设置数据不缓存
   * @default           false
   */
  noCache?: boolean;
  /**
   * @description       是否分页; 如果分页api接口会抛出查询参数
   * @default           false
   */
  pagination?: boolean;
};

export type BusinessSelectBuilderProps = {
  /**
   * @description       定义所有的业务下拉;
   * @default           '-'
   */
  apis: ApiType[];
};

export interface BusinessSelectSelfProps {
  /**
   * @description       Builder中定义的下拉选择的名字
   * @default           -
   */
  type: string;
  newPlaceholder?: string; // 用于覆盖原来的placehoder
  /**
   * @description       label的读取字段. 优先级高于builder中的labelKey
   * @default           -
   */
  labelKey?: string;
  /**
   * @description       value的读取字段. 优先级高于builder中的valueKey
   * @default           -
   */
  valueKey?: string;
  /**
   * @description       查询接口的参数. 用法见示例
   */
  queryParams?: Record<string, any>;
  /**
   * @description       自定义文本显示
   * @default           -
   */
  renderLabel?: (node: any) => any;
  onChange?: (val, option) => void;
}

export type BusinessSelectProps = BusinessSelectSelfProps & Omit<SelectProps, 'onChange'>;
