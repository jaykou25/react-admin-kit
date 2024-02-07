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

/**
 * 测试mergeOption 方法
 */
test('mergeOption - undefined 会忽略', () => {
  expect(mergeOptions(undefined, { full: true })).toEqual({ full: true });
});

test('mergeOption - undefined 和 undefined', () => {
  expect(mergeOptions(undefined, undefined)).toEqual({});
});

/**
 * 测试 myMergeOption 方法
 * 用于合并全局属性和组件属性
 */
test('myMergeOption - 内部是 false, 外部是对象', () => {
  expect(myMergeOptions({ full: true }, false)).toBe(false);
});

test('myMergeOption - 内部是 undefined, 外部是对象', () => {
  expect(myMergeOptions({ full: true }, undefined)).toEqual({ full: true });
});

test('myMergeOption - 内部是对象, 外部是false', () => {
  expect(myMergeOptions(false, { full: true })).toEqual({ full: true });
});

test('myMergeOption - 内部是对象, 外部是undefined', () => {
  expect(myMergeOptions(undefined, { full: true })).toEqual({ full: true });
});

test('myMergeOption - 内部是对象, 外部是对象', () => {
  expect(
    myMergeOptions({ full: 1, name: 2 }, { full: true, title: 3 }),
  ).toEqual({ full: true, name: 2, title: 3 });
});

test('myMergeOption - 内外部都没给，走默认', () => {
  expect(myMergeOptions(undefined, undefined, false)).toBe(false);
});

test('myMergeOption - 内外部都没给，走默认2', () => {
  expect(myMergeOptions(undefined, undefined, { full: true })).toEqual({
    full: true,
  });
});

/**
 * 测试 myMergeBoolean
 */
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
