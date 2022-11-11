import { convertValues } from '.';

test('convertValues - 正常情况', () => {
  const before = { userId: 1, userName: 'jack' };
  const originVals = { 'userId,userName': undefined };
  const after = {
    userId: 1,
    userName: 'jack',
    'userId,userName': { value: 1, label: 'jack' },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 正常情况 - originVal有值', () => {
  const before = { userId: 1, userName: 'jack' };
  const originVals = { 'userId,userName': { value: '2', label: '3' } };
  const after = {
    userId: 1,
    userName: 'jack',
    'userId,userName': { value: 1, label: 'jack' },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 正常情况自定义', () => {
  const before = { userId: 1, userName: 'jack' };
  const originVals = { 'userId,userName_id,name': undefined };
  const after = {
    userId: 1,
    userName: 'jack',
    'userId,userName_id,name': { id: 1, name: 'jack' },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName': undefined } };
  const after = {
    info: { userId: 1, userName: 'jack', 'userId,userName': { value: 1, label: 'jack' } },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌 - originVals有值', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName': { value: '2', label: '3' } } };
  const after = {
    info: { userId: 1, userName: 'jack', 'userId,userName': { value: 1, label: 'jack' } },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌自定义', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName_id,name': undefined } };
  const after = {
    info: { userId: 1, userName: 'jack', 'userId,userName_id,name': { id: 1, name: 'jack' } },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});
