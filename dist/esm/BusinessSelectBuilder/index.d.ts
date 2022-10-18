/// <reference types="react" />
import { BusinessSelectBuilderProps } from './types';
/**
 * select数据挂在window上作为缓存, 避免重复请求
 */
export declare const SelectName = "@@selectData";
export declare const SelectStatusName = "@@selectDataIsStart";
export declare const SelectTotalName = "@@selectDataTotal";
declare const BusinessSelectBuilder: ({ apis }: BusinessSelectBuilderProps) => (props: any) => JSX.Element | null;
export default BusinessSelectBuilder;
