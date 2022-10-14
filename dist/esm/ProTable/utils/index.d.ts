/**
 * 处理ProTable request中的参数, 将sort转化成符合后端排序的格式
 */
export declare const handleRequestParams: (params: any, sort: any) => any;
/**
 * ProTable Columns中的排序属性
 */
export declare const withSorter: (dataIndex: string, defaultSorter?: 'desc' | 'asc') => any;
