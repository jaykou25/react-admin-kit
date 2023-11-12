import _mergeOptions from 'merge-options';

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
export function getGlobal(...names: string[]) {
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
