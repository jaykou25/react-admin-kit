import type { SelectProps } from 'antd';

type ApiParamsType = {
  current?: number;
  searchValue?: string;
  [key: string]: any;
};

export type ApiType = {
  /**
   * @en                api request for options data
   * @zh-Hans           获取下拉数据的接口
   * @default           -
   */
  api: (apiParamsType: ApiParamsType) => Promise<{ data: any; total?: number }>;
  /**
   * @en              business select type
   * @zh-Hans         业务下拉的类型
   * @default           -
   */
  type: string;
  /**
   * @en               enable pagination
   * @zh-Hans          是否分页
   * @default           false
   */
  pagination?: boolean;
  /**
   * @en               default props (higher priority than Builder-level settings)
   * @zh-Hans          默认属性, 比 Builder 上的优先级更高
   * @default           '-'
   */
  defaultProps?: Omit<BusinessSelectProps<string>, 'type'>;
};

export type BusinessSelectBuilderProps = {
  /**
   * @en            define the business select
   * @zh-Hans       定义所有的业务下拉;
   * @default           '-'
   */
  apis: ApiType[];

  /**
   * @en            default props
   * @zh-Hans       默认属性;
   * @default           '-'
   */
  defaultProps?: Omit<BusinessSelectProps<string>, 'type'>;
};

export interface BusinessSelectSelfProps<Type> {
  /**
   * @en               business select type
   * @zh-Hans          业务下拉的类型
   * @default           -
   */
  type: Type;
  /**
   * @en               customize fields as display text (higher priority)
   * @zh-Hans          label的读取字段. 优先级高于builder中的labelKey
   * @default           name
   */
  labelKey?: string;
  /**
   * @en               customize fields as value (higher priority)
   * @zh-Hans          value的读取字段. 优先级高于builder中的valueKey
   * @default           id
   */
  valueKey?: string;
  /**
   * @en             pass params to api request. see demo.
   * @zh-Hans        给查询接口传递参数. 用法见示例
   */
  queryParams?: Record<string, any>;
  /**
   * @en                customize option display text
   * @description       自定义选项的文本显示
   * @default           -
   */
  renderLabel?: (node: any) => any;
  onChange?: (val, option) => void;
  /**
   * @en              disable cache (higher priority)
   * @zh-Hans         不缓存数据(优先级更高)
   * @default           false
   */
  noCache?: boolean;

  /**
   * @en            callback after options data first request
   * @zh-Hans       下拉数据首次加载完成后的回调; 对于分页的下拉组件只在初次加载完成后触发
   * @default -
   */
  onLoad?: (options, total?: number) => void;

  /**
   * @en            debounce value for search when pagination enabled
   * @zh-Hans       分页下拉组件搜索的 debounce 值.
   * @default       300
   */
  searchDebounceValue?: number;
}

export type BusinessSelectProps<Type> = BusinessSelectSelfProps<Type> &
  Omit<SelectProps, 'onChange'>;
