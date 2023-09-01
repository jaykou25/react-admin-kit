/**
 * 表单 onFinish 时，将符合约定规范的 dataIndex 转成需要的数据, 看下面的例子
 *
 * {'user,userName': {value: '1', label: 'jack'}}  => {user: '1', userName: 'jack}
 *
 * 自定义取值:
 * {'user,userName_id,name': {id: '1', name: 'jack'}}  => {user: '1', userName: 'jack}
 *
 * 套嵌数据也能处理:
 * {info: {'user,userName': {value: '1', label: 'jack'}}} => {info: {user: '1, userName: 'jack'}}
 */
export declare function splitValues(values?: {}): {};
/**
 * 根据约定的规范, 分析 dataIndex, 将 values 转换成约定的数据
 * @参数 values 是需要转换的数据.
 * @参数 allVals 是通过 getFieldsValue 收集到的所有的表单值，通过它可以拿到所有的 dataIndex
 *
 * 1.
 * 参数values: {userId: '1', userName: 'jack}
 * 参数allVals: {'userId,userName': undefined}
 * => {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 2. 自定义取值:
 * 参数values: {userId: '1', userName: 'jack}
 * 参数allVals: {'userId,userName_id,name': undefined}
 * => {'userId,userName_id,name': {id: '1', name: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 3. 套嵌数据也能处理:
 * 参数values: {info: {userId: '1', userName: 'jack'}}
 * 参数allVals: {info: {'userId,userName': undefined}}
 * => {info: {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}}
 */
export declare function convertValues(values: any, allVals?: Record<string, any>): any;
