import type { TreeSelectProps } from 'antd';

export type ApiType = {
  /**
   * @description       获取下拉数据的接口
   * @default           '-'
   */
  api: () => Promise<any>;
  /**
   * @description       下拉选择的名字
   * @default           '-'
   */
  type: string;
  /**
   * @description        label的默认读取字段
   * @default           'name'
   */
  labelKey?: string;
  /**
   * @description        value的默认读取字段
   * @default           'id'
   */
  valueKey?: string;
  /**
   * @description       不缓存数据
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
   * @default
   */
  defaultProps?: TreeSelectProps;
};

export interface BusinessTreeSelectSelfProps<Type> {
  /**
   * @description       类型;
   */
  type: Type;
  /**
   * @description       禁用某节点;
   */
  nodeDisabled?: (node: any) => boolean;
  /**
   * @description        label的默认读取字段
   * @default           'name'
   */
  labelKey?: string;
  /**
   * @description        value的默认读取字段
   * @default           'id'
   */
  valueKey?: string;
  /**
   * @description       查询接口的参数. 用法见示例
   */
  queryParams?: Record<string, any>;
  /**
   * @description       不缓存数据
   * @default           false
   */
  noCache?: boolean;
}

export type BusinessTreeSelectProps<Type> = BusinessTreeSelectSelfProps<Type> & TreeSelectProps;
