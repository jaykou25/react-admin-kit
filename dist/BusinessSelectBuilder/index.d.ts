/// <reference types="react" />
import { ApiType, BusinessSelectBuilderProps, BusinessSelectProps, BusinessSelectSelfProps } from './types';
/**
 * select数据挂在window上作为缓存, 避免重复请求
 */
export declare const SelectName = "@@selectData";
export declare const SelectStatusName = "@@selectDataIsStart";
export declare const SelectTotalName = "@@selectDataTotal";
declare function BusinessSelectBuilder<Type extends string>({ apis, defaultProps, }: BusinessSelectBuilderProps): (props: BusinessSelectProps<Type>) => import("react/jsx-runtime").JSX.Element | null;
export default BusinessSelectBuilder;
export declare const clearSelectCache: (type?: string) => void;
export declare const Api: React.FC<ApiType>;
export declare const Self: React.FC<BusinessSelectSelfProps<string>>;
