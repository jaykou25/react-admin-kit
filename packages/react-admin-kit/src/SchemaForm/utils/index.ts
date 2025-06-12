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

import { get, cloneDeep } from 'lodash-es';
import { FormColumnType } from '../types';
import React from 'react';

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
 * 内部调用
 * dataIndex 必有值
 */
const _stringMatchConvention = (dataIndex: React.Key): boolean => {
  return dataIndex.toString().includes(',');
};

/**
 * 内部调用
 * dataIndex 是数组
 * 若符合返回所在的 index
 */
const _arrMatchConventionIndex = (dataIndexArr: React.Key[]): number => {
  return dataIndexArr.findIndex((dataIndex) =>
    _stringMatchConvention(dataIndex),
  );
};

export const _genDataIndex = (key: DataIndexType, baseName?: React.Key) => {
  if (baseName || baseName === 0) {
    if (Array.isArray(key)) {
      return [baseName].concat(key);
    } else {
      return [baseName, key];
    }
  }

  return key;
};

/**
 * 收集单列的 dataIndex
 * 用于循环
 */
const collectDataIndexByColumn = (
  column: FormColumnType,
  value = {},
  baseName?: React.Key,
): DataIndexType[] => {
  let result: DataIndexType[] = [];
  if (column.valueType === 'dependency') {
    if (typeof column.columns === 'function') {
      // 如果是函数, 需要执行函数获取 dataIndex
      const columns = column.columns(
        transformValuesForConvention(value, column.name),
      );
      result = result.concat(collectDataIndex(columns, value, baseName));
    }
  } else if (column.valueType === 'group') {
    if (Array.isArray(column.columns)) {
      result = result.concat(collectDataIndex(column.columns, value, baseName));
    }
  } else if (!!column.dataIndex || column.dataIndex === 0) {
    result.push(_genDataIndex(column.dataIndex, baseName));
  }

  return result;
};

/**
 * 收集所有的 dataIndex, 包括套嵌的(dependency)
 */
type DataIndexType = React.Key | React.Key[];

export const collectDataIndex = (
  columns: FormColumnType[],
  value = {},
  baseName?: React.Key,
): DataIndexType[] => {
  let result: DataIndexType[] = [];

  columns.forEach((column) => {
    result = result.concat(collectDataIndexByColumn(column, value, baseName));
  });

  return result;
};

// 处理单个 dataIndex
// 内部调用
export const _transformValueForConvention = (values, dataIndex) => {
  const [before, after] = dataIndex.split('_');

  const [valueName, labelName] = before.split(',');

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
};

export const transformValuesForConvention = (
  _values,
  dataIndexes: DataIndexType[] = [],
) => {
  const values = cloneDeep(_values);
  if (!values) return values;

  dataIndexes.forEach((dataIndex) => {
    if (typeof dataIndex === 'string' || typeof dataIndex === 'number') {
      if (_stringMatchConvention(dataIndex)) {
        values[dataIndex] = _transformValueForConvention(values, dataIndex);
      }
    }

    if (Array.isArray(dataIndex)) {
      const matchIndex = _arrMatchConventionIndex(dataIndex);
      if (matchIndex > 0) {
        const path = dataIndex.slice(0, matchIndex).join('.');
        const $values = get(values, path);
        const $dataIndex = dataIndex[matchIndex];
        $values[$dataIndex] = _transformValueForConvention($values, $dataIndex);
      }
    }
  });

  return values;
};
