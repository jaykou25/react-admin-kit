/// <reference types="react" />
import { ApiType, BusinessTreeSelectBuilderProps, BusinessTreeSelectProps, BusinessTreeSelectSelfProps } from './types';
/**
 * 数据挂在window上作为缓存, 避免重复请求
 */
export declare const CacheName = "@@treeSelectData";
export declare const CacheStatusName = "@@treeSelectDataIsStart";
declare function BusinessTreeSelectBuilder<Type extends string>({ apis, defaultProps, }: BusinessTreeSelectBuilderProps): (props: BusinessTreeSelectProps<Type>) => import("react/jsx-runtime").JSX.Element | null;
export default BusinessTreeSelectBuilder;
export declare const clearTreeSelectCache: (type?: string) => void;
export declare const Api: React.FC<ApiType>;
export declare const Self: React.FC<BusinessTreeSelectSelfProps<string>>;
