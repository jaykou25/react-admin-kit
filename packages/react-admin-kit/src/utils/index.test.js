import { describe } from 'node:test';
import {
  delGlobal,
  getGlobal,
  mergeOptions,
  myMergeBoolean,
  myMergeOptions,
  setGlobal,
} from './';

test('setGlobal', () => {
  setGlobal('my', { num: 1 });
  expect(global.my.num).toBe(1);
  delete global.my;
});

test('setGlobal - 合并', () => {
  setGlobal('my', { num: 1 });
  setGlobal('my', { num2: 2 });
  expect(global.my.num2).toBe(2);
  delete global.my;
});

test('getGlobal', () => {
  setGlobal('my', { num: 1 });
  expect(getGlobal('my')).toEqual({ num: 1 });
  delete global.my;
});

test('getGlobal - 多字段', () => {
  setGlobal('my', { num: 1 });
  expect(getGlobal('my', 'num')).toBe(1);
  delete global.my;
});

test('getGlobal - 多字段为空', () => {
  setGlobal('my', { num: 1 });
  expect(getGlobal('my', 'num', 'other')).toBe(undefined);
  delete global.my;
});

test('delGlobal', () => {
  setGlobal('my', { num: 1 });
  delGlobal('my');
  expect(getGlobal('my')).toBe(undefined);
});

test('delGlobal - 多字段', () => {
  setGlobal('my', { num: 1 });
  delGlobal('my', 'num');
  expect(getGlobal('my')).toEqual({});
  expect(getGlobal('my', 'num')).toBe(undefined);
});

test('delGlobal - 多字段2', () => {
  setGlobal('selectData', { type1: [] });
  setGlobal('selectDataIsStart', { type1: false });
  delGlobal('selectData', 'type1');
  delGlobal('selectDataIsStart', 'type1');
  expect(getGlobal('selectData', 'type1')).toBe(undefined);
  expect(getGlobal('selectDataIsStart', 'type1')).toBe(undefined);
});

/**
 * 测试mergeOption 方法
 */
describe('mergeOption', () => {
  test('mergeOption - undefined 会忽略', () => {
    expect(mergeOptions(undefined, { full: true })).toEqual({ full: true });
  });

  test('mergeOption - undefined 和 undefined', () => {
    expect(mergeOptions(undefined, undefined)).toEqual({});
  });

  test('mergeOption - 两个对象', () => {
    expect(mergeOptions({ hide: true }, { hide: false })).toEqual({
      hide: false,
    });
  });

  test('mergeOption - 套嵌', () => {
    expect(
      mergeOptions(
        {
          header: { height: '20px' },
          body: { fontSize: '10px', color: 'green' },
        },
        { body: { color: 'red' } },
      ),
    ).toEqual({
      header: { height: '20px' },
      body: { fontSize: '10px', color: 'red' },
    });
  });
});

/**
 * 测试 myMergeOption 方法
 * 用于合并全局属性和组件属性
 */
describe('myMergeOptions', () => {
  test('myMergeOption - 组件级是 false, 全局是对象', () => {
    expect(myMergeOptions({ full: true }, false)).toBe(false);
  });

  test('myMergeOption - 组件级是 undefined, 全局是对象', () => {
    expect(myMergeOptions({ full: true }, undefined)).toEqual({ full: true });
  });

  test('myMergeOption - 组件级是对象, 全局是 false', () => {
    expect(myMergeOptions(false, { full: true })).toEqual({ full: true });
  });

  test('myMergeOption - 组件级是对象, 全局是 undefined', () => {
    expect(myMergeOptions(undefined, { full: true })).toEqual({ full: true });
  });

  test('myMergeOption - 组件级是对象, 全局是对象', () => {
    expect(
      myMergeOptions({ full: 1, name: 2 }, { full: true, title: 3 }),
    ).toEqual({ full: true, name: 2, title: 3 });
  });

  test('myMergeOption - 组件级是 undefined，全局也是 undefined，走默认', () => {
    expect(myMergeOptions(undefined, undefined, false)).toBe(false);

    expect(myMergeOptions(undefined, undefined, { full: true })).toEqual({
      full: true,
    });
  });

  test('一层套嵌对象', () => {
    expect(
      myMergeOptions(
        {
          pagination: {
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50],
            hideOnSinglePage: true,
          },
        },
        {
          pagination: {
            pageSizeOptions: [60, 70, 80],
            hideOnSinglePage: false,
          },
          body: { fontSize: '10px' },
        },
      ),
    ).toEqual({
      pagination: {
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: [60, 70, 80],
        hideOnSinglePage: false,
      },
      body: { fontSize: '10px' },
    });
  });
});

describe('myMergeOptions 默认值的合并处理', () => {
  test('myMergeOption - 组件级是 false, 全局是对象', () => {
    expect(myMergeOptions({ full: true }, false, { color: 'red' })).toBe(false);
    expect(myMergeOptions(false, undefined, { color: 'red' })).toBe(false);
  });

  test('myMergeOption - 组件级是 undefined, 全局是对象', () => {
    expect(
      myMergeOptions({ full: true }, undefined, { full: false, color: 'red' }),
    ).toEqual({ full: true, color: 'red' });
  });

  test('myMergeOption - 组件级是对象, 全局是 false', () => {
    expect(
      myMergeOptions(false, { full: true }, { full: true, color: 'red' }),
    ).toEqual({ full: true, color: 'red' });
  });

  test('myMergeOption - 组件级是对象, 全局是 undefined', () => {
    expect(
      myMergeOptions(undefined, { full: true }, { full: false, color: 'red' }),
    ).toEqual({ full: true, color: 'red' });
  });

  test('myMergeOption - 组件级是对象, 全局是对象', () => {
    expect(
      myMergeOptions(
        { full: 1, name: 2, hide: false },
        { full: true, title: 3, hide: false },
        { name: 1, color: 'red', hide: true },
      ),
    ).toEqual({ full: true, name: 2, title: 3, color: 'red', hide: false });
  });

  test('一层套嵌对象', () => {
    expect(
      myMergeOptions(
        {
          pagination: {
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50],
            hideOnSinglePage: true,
          },
        },
        {
          pagination: {
            pageSizeOptions: [60, 70, 80],
            hideOnSinglePage: false,
          },
          body: { fontSize: '10px' },
        },
        {
          pagination: {
            defaultPageSize: 20,
            showSizeChanger: false,
          },
          color: 'red',
        },
      ),
    ).toEqual({
      pagination: {
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: [60, 70, 80],
        hideOnSinglePage: false,
      },
      body: { fontSize: '10px' },
      color: 'red',
    });
  });
});

/**
 * 测试 myMergeBoolean
 */
describe('myMergeBoolean', () => {
  test('myMergeBoolean - 内false, 外true => false', () => {
    expect(myMergeBoolean(true, false)).toBe(false);
  });

  test('myMergeBoolean - 内true, 外false => true', () => {
    expect(myMergeBoolean(false, true)).toBe(true);
  });

  test('myMergeBoolean - 内无, 外false => false', () => {
    expect(myMergeBoolean(false, undefined)).toBe(false);
  });

  test('myMergeBoolean - 内无, 外true => true', () => {
    expect(myMergeBoolean(true, undefined)).toBe(true);
  });

  test('myMergeBoolean - 内无, 外无, 默认false => false ', () => {
    expect(myMergeBoolean(undefined, undefined, false)).toBe(false);
  });

  test('myMergeBoolean - 内无, 外无, 默认true => true ', () => {
    expect(myMergeBoolean(undefined, undefined, true)).toBe(true);
  });
});
