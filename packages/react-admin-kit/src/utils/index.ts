// const _mergeOptions = require('merge-options');
import _mergeOptions from 'merge-options';
import isBoolean from 'lodash/isBoolean';

/**
 * 在全局设置变量
 * @param name
 * @param data
 */
export function setGlobal(name: string, data: object) {
  // 浏览器环境
  if (typeof window !== 'undefined') {
    if (!window[name]) {
      window[name] = {};
    }
    window[name] = { ...window[name], ...data };
  } else {
    // node 环境, 用于预渲染
    if (!global[name]) {
      global[name] = {};
    }

    global[name] = { ...global[name], ...data };
  }
}

/**
 * 获取全局数据
 * 可传多个参数, 获取不到返回 undefined
 * @param names
 * @returns
 */
export function getGlobal(...names: string[]): any {
  let obj = typeof window !== 'undefined' ? window : global;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (!obj[name]) {
      return;
    }

    obj = obj[name];
  }

  return obj;
}

/**
 * 删除全局变量中的字体
 * 参数可以传多个, 只删除最后一个字段
 * @param names
 * @returns
 */
export function delGlobal(...names: string[]) {
  let obj = typeof window !== 'undefined' ? window : global;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (!obj[name]) {
      return;
    }

    // 最后一个字段是要删除的
    if (i === names.length - 1) {
      delete obj[name];
    }

    obj = obj[name];
  }
}

export const mergeOptions = _mergeOptions.bind({ ignoreUndefined: true });

function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in value) &&
    !(Symbol.iterator in value)
  );
}

/**
 * 合并全局属性和组件属性
 * 组件属性的优先级更高
 * 1. 组件属性为 false 时即为 false
 * 2. 组件属性为 undefined 时走全局属性
 * 3. 组件属性为对象时，全局属性不是对象时， 不用管全局属性
 * 4. 组件属性为对象时，与全局属性合并
 */
export const myMergeOptions = (globalOption, option, defaultValue) => {
  const _globalOption = globalOption || defaultValue;

  if (option === false) {
    return false;
  }

  if (option === undefined) {
    return globalOption || defaultValue;
  }

  // 全局属性是非对象的时候不管全局属性
  if (isPlainObject(option) && !isPlainObject(_globalOption)) {
    return option;
  }

  // 全局属性是对象的时候合并全局属性
  if (isPlainObject(option) && isPlainObject(_globalOption)) {
    return mergeOptions(_globalOption, option);
  }
};

/**
 * 合并 boolean 类型的全局属性和组件属性
 * 组件属性的优先级更高
 */
export const myMergeBoolean = (
  global: boolean | undefined,
  local: boolean | undefined,
  defaultValue?: boolean,
) => {
  if (isBoolean(local)) {
    return local;
  } else if (isBoolean(global)) {
    return global;
  } else {
    return defaultValue;
  }
};
