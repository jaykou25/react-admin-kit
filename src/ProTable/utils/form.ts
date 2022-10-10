import merge from 'lodash/merge';
import moment from 'moment';

/**
 * 将表单的值传换成columns里transform字段对应的值
 */
export const transformValues = (values = {}, cols) => {
  let finalResult = {};
  Object.keys(values).forEach((key) => {
    if (values[key] === undefined || values[key] === null) {
      finalResult[key] = values[key];
      return;
    }

    const targetCol = cols.find((col) => col.dataIndex === key);
    if (!targetCol) {
      finalResult[key] = values[key];
      return;
    }

    if (targetCol.transform) {
      const val = targetCol.transform(values[key]);
      finalResult = { ...finalResult, ...val };
    } else if (targetCol.valueType === 'date') {
      const val = values[key];
      if (typeof val === 'string') {
        finalResult[key] = val;
      } else if (typeof val === 'number') {
        finalResult[key] = moment(val).format('YYYY-MM-DD');
      } else {
        finalResult[key] = values[key].format('YYYY-MM-DD');
      }
    } else {
      finalResult[key] = values[key];
    }
  });

  return finalResult;
};

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

export const convertObjValues = (values, options?: any) => {
  const { reg = /Obj/, extraName = 'Name' } = options || {};

  const result = {};
  Object.keys(values).forEach((key) => {
    const value = values[key];

    if (value === undefined || value === null) {
      result[key] = value;
      return;
    }

    if (reg.test(key)) {
      const [beforeKey, joinKey] = key.split('_');
      const baseKey = beforeKey.replace(reg, '');

      if (joinKey) {
        result[`${baseKey}${joinKey}`] = value.value;
      } else {
        result[`${baseKey}`] = value?.value;
      }
      result[`${baseKey}${extraName}`] = value?.label;
    } else {
      result[key] = value;
    }
  });
  return result;
};

/**
 * 将数据处理成一个嵌套数据
 * 比如: 表单数据是 {info.name: 'jack', info.remark: '备注'}
 * 转成: {info: {name: 'jack', remark: '备注'}}
 
 * 详见form.test.js测试用例
 */
export const splitValues = (values = {}) => {
  const result = {};
  Object.keys(values).forEach((key) => {
    const value = values[key];
    const [baseKey, afterKey] = key.split('.');

    if (afterKey) {
      if (result[baseKey]) {
        result[baseKey][afterKey] = value;
      } else {
        result[baseKey] = {};
        result[baseKey][afterKey] = value;
      }
    } else {
      // 原值不处理
      result[key] = value;
    }
  });

  return result;
};

export const handleValuesForSubmit = (values, patchRecord?: (record: any) => any) => {
  const $values = splitValues(convertObjValues(values));

  if (patchRecord) {
    return merge($values, patchRecord(values));
  }

  return $values;
};

/**
 * 根据cols中的dataIndex值, 将传入的数据转成符合规范的数据
 * 比如: dataIndex是'info.name' , 传入的数据是{info: {name: 'jack'}}
 * 转成: {'info.name': 'jack'}
 */
export const flattenValues = (values, cols = [], options) => {
  const result = { ...values };

  cols.forEach((col: any) => {
    const { dataIndex } = col;

    if (!dataIndex) return;

    const [baseKey, afterKey] = dataIndex.split('.');

    if (afterKey) {
      result[dataIndex] = initValueForObjDataIndex(afterKey, values[baseKey], options);
    } else {
      result[dataIndex] = initValueForObjDataIndex(dataIndex, values, options);
    }
  });

  return result;
};

/**
 * 1. dataIndex: 'userObj'; record: {user: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 2. dataIndex: 'userObj_code'; value: {userCode: '1', userName: 'jack'}; => {value: '1', label: 'jack'}
 * 3. dataIndex: 'user'; => value: {user: '1'}; => '1'
 */
export function initValueForObjDataIndex(dataIndex, record = {}, options?: any) {
  const { reg = /Obj/, extraName = 'Name' } = options || {};

  if (reg.test(dataIndex)) {
    const [beforeKey, joinKey] = dataIndex.split('_');
    const baseKey = beforeKey.replace(reg, '');

    if (joinKey) {
      return record[baseKey + joinKey]
        ? { value: record[baseKey + joinKey], label: record[`${baseKey}${extraName}`] }
        : undefined;
    }

    return record[baseKey]
      ? { value: record[baseKey], label: record[`${baseKey}${extraName}`] }
      : undefined;
  }

  // 原值不处理
  return record[dataIndex];
}

type HandleValueOptionsProps = {
  reg?: RegExp;
  extraName?: string;
  patchRecord?: (record: any) => Record<string, any>;
};

export const handleValuesForEdit = (values, cols: any, options?: HandleValueOptionsProps) => {
  const { patchRecord, ...rest } = options || {};

  if (patchRecord) {
    return { ...flattenValues(values, cols, rest), ...patchRecord(values) };
  }

  return flattenValues(values, cols, rest);
};

export function renderDateRange(startDate, endDate, format?: string) {
  const $format = format || 'YYYY.MM.DD';
  const start = startDate ? moment(startDate).format($format) : '-';
  const end = endDate ? moment(endDate).format($format) : '-';
  return `${start} - ${end}`;
}

export function renderDate(date, format?: string) {
  const $format = format || 'YYYY-MM-DD';
  return date && moment(date).format($format);
}

/**
 * 根据columns中的colSize来得到每一行的项
 */
export const getPrintCols = (cols, span = 3) => {
  const final: any = [];
  let row: any = [];
  let spanSum: number = 0;

  function addRow(item) {
    row.push(item);
    spanSum += item.colSize || 1;
  }

  function rowFull(item) {
    row.push(item);
    final.push(row);
    row = [];
    spanSum = 0;
  }

  function rowOver(item) {
    // 分两种情况: 1. row里已经有值了 2.row里没有值
    if (row.length < 1) {
      final.push([item]);
    } else {
      final.push(row);
      final.push([item]);
      row = [];
      spanSum = 0;
    }
  }

  cols.forEach((col) => {
    const sum = spanSum + (col.colSize || 1);

    if (sum < span) {
      addRow(col);
      return;
    }

    if (sum === span) {
      rowFull(col);
      return;
    }

    if (sum > span) {
      rowOver(col);
      return;
    }
  });

  if (row.length > 0) {
    final.push(row);
  }

  return final;
};
