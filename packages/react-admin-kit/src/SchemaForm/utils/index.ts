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

import { useCallback } from 'react';

export function splitValues(values = {}) {
  const result = {};
  Object.keys(values).forEach((key) => {
    let value = values[key];

    // 处理套嵌
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      value = splitValues(value);
    }

    const [before, after] = key.split('_');
    const names = before.split(',');
    if (names.length > 1) {
      const [valueName, labelName] = names;

      const [toValueName = 'value', toLabelName = 'label'] = after
        ? after.split(',')
        : [];

      result[valueName] = value?.[toValueName];
      result[labelName] = value?.[toLabelName];
    } else {
      result[key] = value;
    }
  });

  return result;
}

/**
 * 分析 dataIndex， 根据约定的规范，输出一个约定的值
 *
 * 1. 参数: values: {userId: '1', userName: 'jack'} dataIndex: 'userId,userName',
 *    输出 {value: '1', label: 'jack'}
 * 2. 参数: values: {userId: '1', userName: 'jack'}  dataIndex: 'userId,userName_id,name'
 *    输出: {id: '1', name: 'jack'}
 * 3. dataIndex不含逗号原样输出
 *
 */
function getConventionValue(values = {}, dataIndex) {
  const [before, after] = dataIndex.split('_');
  const names = before.split(',');
  if (names.length > 1) {
    const [valueName, labelName] = names;

    const [toValueName = 'value', toLabelName = 'label'] = after
      ? after.split(',')
      : [];

    if (values[valueName] === undefined && values[labelName] === undefined) {
      return undefined;
    }

    return {
      [toValueName]: values[valueName],
      [toLabelName]: values[labelName],
    };
  } else {
    return values[dataIndex];
  }
}

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

export function convertValues(values, allVals: Record<string, any> = {}) {
  if (!values) return values;

  Object.keys(allVals).forEach((dataIndex) => {
    const val = allVals[dataIndex];

    // 如果是对象处理套嵌数据
    if (typeof val === 'object') {
      convertValues(values[dataIndex], val);
    }

    // bugfix: 如果 dataIndex 不是约定格式则不处理. 否则在 setFieldsValues 时会误赋值
    if (!matchConvention(dataIndex)) return;

    values[dataIndex] = getConventionValue(values, dataIndex);
  });

  return values;
}

/**
 * 判断 dataIndex 格式是否满足约定式
 * @param dataIndex
 */
export function matchConvention(dataIndex: string) {
  return dataIndex && typeof dataIndex === 'string' && dataIndex.includes(',');
}

/**
 * 从一个字符串中提取类似对象结构的值
 * 用法可参看测试用例
 *
 * @todo 这个方法暂时用不上, 因为 dataIndex 可能还是数组, 需要考虑套嵌的情况
 */
export function extractValuesInString(string, key: string): string[] {
  const reg1 = new RegExp(key);
  const reg2 = new RegExp(/\s*:\s*[\'\"]([^\"\']*)[\'\"]/, 'g');
  // reg 拼接成一个新的 reg, 因为如果直接用字符串拼接可能会丢失一些特殊字符
  const reg = new RegExp(reg1.source + reg2.source, 'g');

  /**
   * 直接字符串拼接会丢失
   * const reg = new RegExp(`${key}\s*:\s*[\'\"]([^\"\']*)[\'\"]`, 'g');
   * 输出: /dataIndexs*:s*['"]([^"']*)['"]/g
   * 会丢失 \s 这样的转译
   */

  const matchResult = string.matchAll(reg);

  return Array.from(matchResult).map((item: any) => item[1]);
}

export function setFieldsValueConvention(
  values,
  { getFieldsValue, setFieldsValue, callback }: any,
) {
  const fields = getFieldsValue();
  const convertedVals = convertValues(values, fields);
  // 第一次赋值
  setFieldsValue(convertedVals);

  // 第二次赋值. 因为一次赋值不够, 有些 field 是 dependency 的
  setTimeout(() => {
    const allFields = getFieldsValue();
    const finalConvertedVals = convertValues(values, allFields);
    setFieldsValue(finalConvertedVals);

    if (callback) {
      callback(finalConvertedVals);
    }
  }, 50);
}
