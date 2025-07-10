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

import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import { FormColumnType } from '../types';
import React from 'react';

export function splitValues(values = {}) {
  const result = {};

  Object.keys(values).forEach((key) => {
    let value = values[key];

    // 处理数组
    if (Array.isArray(value)) {
      value = value.map((item) =>
        typeof item === 'object' && item !== null ? splitValues(item) : item,
      );
      // 把对象的形式全都循环处理一遍
    } else if (typeof value === 'object' && value !== null) {
      value = splitValues(value);
    }

    if (_stringMatchConvention(key)) {
      const [before, after] = key.split('_');
      const [valueName, labelName] = before.split(',');
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
 * 数组套嵌数组去重
 * @param arrays 要去重的数组
 * @returns 去重后的数组
 */
export const uniqueNestedArrays = (arrays: any[]): any[] => {
  const seen = new Set<string>();

  return arrays.filter((item) => {
    const key = JSON.stringify(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
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
  } else if (column.valueType === 'formList') {
    // todo: 对于 formList 暂不考虑额外 baseName 前缀, formList 本身就是一个前缀
    const dataIndex = column.dataIndex;
    if (!!dataIndex || dataIndex === 0) {
      // result.push(_genDataIndex(dataIndex));

      if (Array.isArray(column.columns)) {
        const arrValue = value[dataIndex.toString()] || [];

        // 使用数组存储结果，最后再去重
        const listResult: DataIndexType[] = [];

        arrValue.forEach((itemValue) => {
          collectDataIndex(
            // @ts-ignore
            column.columns,
            itemValue,
            dataIndex, // baseName
          ).forEach((key: DataIndexType) => {
            listResult.push(key);
          });
        });
        result = result.concat(uniqueNestedArrays(listResult));
      }
    }
  } else if (!!column.dataIndex || column.dataIndex === 0) {
    // @ts-ignore
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

        // formList 的情况
        if (Array.isArray($values)) {
          $values.forEach((itemValue, index) => {
            $values[index][$dataIndex.toString()] =
              _transformValueForConvention(itemValue, $dataIndex);
          });
        } else {
          $values[$dataIndex] = _transformValueForConvention(
            $values,
            $dataIndex,
          );
        }
      }
    }
  });

  return values;
};
