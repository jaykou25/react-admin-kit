import { delGlobal, getGlobal, setGlobal } from './';

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
