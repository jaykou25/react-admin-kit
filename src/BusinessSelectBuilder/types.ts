import type { SelectProps } from 'antd';

type ApiParamsType = {
  current?: number;
  searchValue?: string;
  [key: string]: any;
};

export type ApiType = {
  /**
   * @description       获取下拉数据的接口
   * @default           -
   */
  api: (apiParamsType: ApiParamsType) => Promise<{ data: any }>;
  /**
   * @description       下拉选择的名字
   * @default           -
   */
  type: string;
  /**
   * @description      是否分页
   * @default           false
   */
  pagination?: boolean;
  /**
   * @description       默认属性, 优先级更高
   * @default           '-'
   */
  defaultProps?: Omit<BusinessSelectProps<string>, 'type'>;
};

export type BusinessSelectBuilderProps = {
  /**
   * @description       定义所有的业务下拉;
   * @default           '-'
   */
  apis: ApiType[];

  /**
   * @description       默认属性;
   * @default           '-'
   */
  defaultProps?: Omit<BusinessSelectProps<string>, 'type'>;
};

export interface BusinessSelectSelfProps<Type> {
  /**
   * @description       Builder中定义的下拉选择的名字
   * @default           -
   */
  type: Type;
  /**
   * @description       label的读取字段. 优先级高于builder中的labelKey
   * @default           name
   */
  labelKey?: string;
  /**
   * @description       value的读取字段. 优先级高于builder中的valueKey
   * @default           id
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
  /**
   * @description       不缓存数据(优先级更高)
   * @default           false
   */
  noCache?: boolean;

  /**
   * @description 下拉数据加载完成后的回调; 对于分页的下拉组件只在初次加载完成后触发
   * @default -
   */
  onLoad?: (options, total?: number) => void;
}

export type BusinessSelectProps<Type> = BusinessSelectSelfProps<Type> &
  Omit<SelectProps, 'onChange'>;
