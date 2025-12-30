import type { TreeSelectProps } from 'antd';

export type ApiType = {
  /**
   * @en                api request for options data
   * @zh-Hans           获取下拉数据的接口
   * @default           '-'
   */
  api: (params: { [key: string]: any }) => Promise<any>;
  /**
   * @en                business tree select type
   * @zh-Hans       树形业务下拉的类型
   * @default           '-'
   */
  type: string;

  /**
   * @en                default props (higher priority than Builder-level settings)
   * @zh-Hans       默认属性, 比 Builder 上的优先级更高
   * @default           '-'
   * @type            [TreeSelectProps](https://ant-design.antgroup.com/components/tree-select-cn#tree-props)
   */
  defaultProps?: Omit<BusinessTreeSelectProps<string>, 'type'>;
};

export type BusinessTreeSelectBuilderProps = {
  /**
   * @en                define the business tree select
   * @zh-Hans       定义所有的业务下拉;
   * @default           '-'
   * @type [ApiType](/components/business-tree-select#apitype)[]
   */
  apis: ApiType[];
  /**
   * @en                default props
   * @zh-Hans       默认属性;
   * @default
   * @type            [TreeSelectProps](https://ant-design.antgroup.com/components/tree-select-cn#tree-props)
   */
  defaultProps?: Omit<BusinessTreeSelectProps<string>, 'type'>;
};

export interface BusinessTreeSelectSelfProps<Type> {
  /**
   * @en                business tree select type
   * @zh-Hans       业务树下拉类型;
   */
  type: Type;
  /**
   * @en                disable option.
   * @zh-Hans       禁用某节点;
   */
  nodeDisabled?: (node: any) => boolean;

  /**
   * @en                pass params to api request. see demo.
   * @zh-Hans       查询接口的参数. 用法见示例
   */
  queryParams?: Record<string, any>;

  /**
   * @en                disable cache (higher priority)
   * @zh-Hans       不缓存数据
   * @default           false
   */
  noCache?: boolean;

  /**
   * @en               callback after options data finish request
   * @zh-Hans      下拉数据加载完成后的回调;
   * @default -
   */
  onLoad?: (options) => void;
}

export type BusinessTreeSelectProps<Type> = BusinessTreeSelectSelfProps<Type> &
  TreeSelectProps;
