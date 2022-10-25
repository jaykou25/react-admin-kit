import type { TreeSelectProps } from 'antd';

type ApiType = {
  /**
   * @description       获取下拉数据的接口
   * @default           '-'
   */
  api: () => Promise<{ data: any }>;
  /**
   * @description       下拉选择的名字
   * @default           '-'
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
   * @description       默认属性, 优先级更高
   * @default           '-'
   */
  defaultProps?: TreeSelectProps;
};

export type BusinessTreeSelectBuilderProps = {
  /**
   * @description       定义所有的业务下拉;
   * @default           '-'
   */
  apis: ApiType[];
  /**
   * @description       默认属性;
   * @default           '-'
   */
  defaultProps?: TreeSelectProps;
};

export interface BusinessTreeSelectProps<Type> extends TreeSelectProps {
  type: Type;
  nodeDisabled?: (node: any) => boolean;
  labelKey?: string;
  valueKey?: string;
  queryParams?: Record<string, any>;
  noCache?: boolean;
}
