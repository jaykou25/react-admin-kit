import produce from 'immer';

/**
 * 拆分约定数据:
 * {'user,userName': {value: '1', label: 'jack'}}  => {user: '1', userName: 'jack}
 * 自定义取值:
 * {'user,userName_id,name': {id: '1', name: 'jack'}}  => {user: '1', userName: 'jack}
 *
 * 套嵌数据也能处理:
 * {info: {'user,userName': {value: '1', label: 'jack'}}} => {info: {user: '1, userName: 'jack'}}
 */

export function splitValues(values = {}) {
  const result = {};
  Object.keys(values).forEach((key) => {
    let value = values[key];

    // 处理套嵌
    if (typeof value === 'object') {
      value = splitValues(value);
    }

    const [before, after] = key.split('_');
    const names = before.split(',');
    if (names.length > 1) {
      const [valueName, labelName] = names;

      const [toValueName = 'value', toLabelName = 'label'] = after ? after.split(',') : [];

      result[valueName] = value?.[toValueName];
      result[labelName] = value?.[toLabelName];
    } else {
      result[key] = value;
    }
  });

  return result;
}

/**
 * 转换成约定数据:
 * 参数values是需要转换的数据. originVals是通过getFieldsValue收集到的表单值.
 *
 * 1.
 * 参数values: {userId: '1', userName: 'jack}
 * 参数originVals: {'userId,userName': undefined}
 * => {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 2. 自定义取值:
 * 参数values: {userId: '1', userName: 'jack}
 * 参数originVals: {'userId,userName_id,name': undefined}
 * => {'userId,userName_id,name': {id: '1', name: 'jack'}, userId: '1', userName: 'jack'}
 *
 * 3. 套嵌数据也能处理:
 * 参数values: {info: {userId: '1', userName: 'jack'}}
 * 参数originVals: {info: {'userId,userName': undefined}}
 * => {info: {'userId,userName': {value: '1', label: 'jack'}, userId: '1', userName: 'jack'}}
 */

export function convertValues(values, originVals: string[] = []) {
  if (!values) return values;
  Object.keys(originVals).forEach((key) => {
    const val = originVals[key];
    if (typeof val === 'object') {
      convertValues(values[key], val);
    }
    values[key] = convertValue(values, key);
  });

  return values;
}

/**
 * 根据dataIndex转成约定的值
 *
 * 1. 参数: values: {userId: '1', userName: 'jack'} dataIndex: 'userId,userName',
 *    输出 {value: '1', label: 'jack'}
 * 2. 参数: values: {userId: '1', userName: 'jack'}  dataIndex: 'userId,userName_id,name'
 *    输出: {id: '1', name: 'jack'}
 * 3. dataIndex不含逗号原样输出
 *
 */
function convertValue(values = {}, dataIndex) {
  const [before, after] = dataIndex.split('_');
  const names = before.split(',');
  if (names.length > 1) {
    const [valueName, labelName] = names;

    const [toValueName = 'value', toLabelName = 'label'] = after ? after.split(',') : [];

    return { [toValueName]: values[valueName], [toLabelName]: values[labelName] };
  } else {
    return values[dataIndex];
  }
}
