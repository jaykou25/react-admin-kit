/**
 * 在全局设置变量
 * @param name
 * @param data
 */
export declare function setGlobal(name: string, data: object): void;
/**
 * 获取全局数据
 * 可传多个参数, 获取不到返回 undefined
 * @param names
 * @returns
 */
export declare function getGlobal(...names: string[]): typeof globalThis | undefined;
/**
 * 删除全局变量中的字体
 * 参数可以传多个, 只删除最后一个字段
 * @param names
 * @returns
 */
export declare function delGlobal(...names: string[]): void;
