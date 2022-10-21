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
};

export type BusinessTreeSelectBuilderProps = {
  apis: ApiType[];
};

export interface BusinessTreeSelectProps<Type> extends TreeSelectProps {
  type: Type;
  nodeDisabled?: (node: any) => boolean;
  labelKey?: string;
  valueKey?: string;
}
