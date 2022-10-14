/**
 * 将表单的值传换成columns里transform字段对应的值
 */
export declare const transformValues: (values: {} | undefined, cols: any) => {};
/**
 * 处理表单提交时的数据, 将带有obj的对象转成值和名字
 * 比如: 传进来的values是{userObj: {value: 1, label: '张三'}}
 * 转化成: {user: 1, userName: '张三'}*
 *
 * 将Obj下划线后的值拼接上去
 * 比如: 传进来的values是{userObj_Code: {value: 1, label: '张三'}}
 * 转化成: {userCode: 1, userName: '张三'}
 *
 * 详见form.test.js测试用例
 */
export declare const convertObjValues: (values: any, options?: any) => {};
/**
 * 将数据处理成一个嵌套数据
 * 比如: 表单数据是 {info.name: 'jack', info.remark: '备注'}
 * 转成: {info: {name: 'jack', remark: '备注'}}
 
 * 详见form.test.js测试用例
 */
export declare const splitValues: (values?: {}) => {};
export declare const handleValuesForSubmit: (values: any, patchRecord?: ((record: any) => any) | undefined) => any;
/**
 * 根据cols中的dataIndex值, 将传入的数据转成符合规范的数据
 * 比如: dataIndex是'info.name' , 传入的数据是{info: {name: 'jack'}}
 * 转成: {'info.name': 'jack'}
 */
export declare const flattenValues: (values: any, cols: never[] | undefined, options: any) => any;
/**
 * 1. dataIndex: 'userObj'; record: {user: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 2. dataIndex: 'userObj_code'; value: {userCode: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 3. dataIndex: 'user'; => value: {user: '1'}; => '1'
 */
export declare function initValueForObjDataIndex(dataIndex: any, record?: {}, options?: any): any;
declare type HandleValueOptionsProps = {
    reg?: RegExp;
    extraName?: string;
    patchRecord?: (record: any) => Record<string, any>;
};
export declare const handleValuesForEdit: (values: any, cols: any, options?: HandleValueOptionsProps) => any;
export declare function renderDateRange(startDate: any, endDate: any, format?: string): string;
export declare function renderDate(date: any, format?: string): any;
/**
 * 根据columns中的colSize来得到每一行的项
 */
export declare const getPrintCols: (cols: any, span?: number) => any;
export {};
