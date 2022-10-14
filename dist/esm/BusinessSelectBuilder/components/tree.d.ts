import type { ReactNode } from 'react';
interface TreeSelectOptions {
    titleKey?: string;
    valueKey?: string;
    icon?: ReactNode | ((props: any) => ReactNode);
}
/**
 * 规范化tree的数据, 可以指定title和key的取值字段.
 * 同时给每个节点增加nodeId字段, 方便取父节点id
 * 增加isTop字段, 判断是不是第一级
 */
export declare function normalizeTree(treeData: any, options?: TreeSelectOptions): any;
/**
 * 规范化treeSelect的数据, 可以指定title和value的取值字段.
 * treeSelect和上文的tree的数据结构不一样, 一个是key, 一个是value
 */
export declare function normalizeTreeSelect(treeData: any, options?: TreeSelectOptions): any;
interface SelectOptions {
    labelKey?: string;
    valueKey?: string;
    renderLabel?: (node: any) => any;
}
/**
 * 规范化select的数据, 可以指定label和value的取值字段, 也可以传入renderLabel函数自定显示文本
 *
 */
export declare function normalizeSelect(data?: never[], options?: SelectOptions): {
    label: any;
    value: never;
}[];
/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加disabled属性
 * 这样通过传入一个函数就可以控制节点是否为disabled
 * 函数的参数是node(节点)
 */
export declare function withDisabled(treeData: any, func?: (node: any) => boolean): any;
/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加checkable属性
 * 这样通过传入一个函数就可以控制节点是否为可勾选
 * 函数的参数是node(节点)
 */
export declare function withCheckable(treeData: any, func?: (node: any) => boolean): any;
/**
 * 遍历tree, 找到目标节点, 找不到返回undefined
 */
export declare function findTreeItem(data: never[] | undefined, key: any, valueKey?: string): any;
export {};
