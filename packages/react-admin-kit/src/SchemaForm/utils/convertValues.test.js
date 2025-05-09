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

test('convertValues - 正常情况 - 空对象时输出对象应为 undefined', () => {
  const before = {};
  const originVals = { 'userId,userName': undefined };
  const after = {
    'userId,userName': undefined,
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 正常情况 - 无值时输出对象应为 undefined', () => {
  const before = { userId: undefined, userName: undefined };
  const originVals = { 'userId,userName': undefined };
  const after = {
    userId: undefined,
    userName: undefined,
    'userId,userName': undefined,
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName': undefined } };
  const after = {
    info: {
      userId: 1,
      userName: 'jack',
      'userId,userName': { value: 1, label: 'jack' },
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌 - 空对象', () => {
  const before = { info: {} };
  const originVals = { info: { 'userId,userName': undefined } };
  const after = {
    info: {
      'userId,userName': undefined,
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌 - 对象里是 undefined', () => {
  const before = { info: { userId: undefined, userName: undefined } };
  const originVals = { info: { 'userId,userName': undefined } };
  const after = {
    info: {
      userId: undefined,
      userName: undefined,
      'userId,userName': undefined,
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌 - originVals有值', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = {
    info: { 'userId,userName': { value: '2', label: '3' } },
  };
  const after = {
    info: {
      userId: 1,
      userName: 'jack',
      'userId,userName': { value: 1, label: 'jack' },
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - 1层套嵌自定义', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName_id,name': undefined } };
  const after = {
    info: {
      userId: 1,
      userName: 'jack',
      'userId,userName_id,name': { id: 1, name: 'jack' },
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - bugfix - 赋值其它值为空 1', () => {
  const before = { user: 1 };
  const allVals = { user: undefined, title: undefined };
  const after = {
    user: 1,
  };

  expect(convertValues(before, allVals)).toStrictEqual(after);
});

test('convertValues - bugfix - 赋值其它值为空 2', () => {
  const before = { userId: 1, userName: 'jack' };
  const allVals = { 'userId,userName': undefined, title: undefined };
  const after = {
    userId: 1,
    userName: 'jack',
    'userId,userName': { value: 1, label: 'jack' },
  };

  expect(convertValues(before, allVals)).toStrictEqual(after);
});

test('convertValues - bugfix - 赋值其它值为空 3', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = {
    info: { 'userId,userName': { value: '2', label: '3' }, title: undefined },
  };
  const after = {
    info: {
      userId: 1,
      userName: 'jack',
      'userId,userName': { value: 1, label: 'jack' },
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});

test('convertValues - bugfix - 赋值其它值为空 4', () => {
  const before = { info: { userId: 1, userName: 'jack' } };
  const originVals = { info: { 'userId,userName_id,name': undefined, title: undefined } };
  const after = {
    info: {
      userId: 1,
      userName: 'jack',
      'userId,userName_id,name': { id: 1, name: 'jack' },
    },
  };

  expect(convertValues(before, originVals)).toStrictEqual(after);
});
