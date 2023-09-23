import { splitValues } from './index';

test('splitValues-无约定时', () => {
  expect(splitValues({ name: 'jack' })).toStrictEqual({ name: 'jack' });
});

test('splitValues-无约定时-数组', () => {
  expect(splitValues({ ids: [1, 2] })).toStrictEqual({ ids: [1, 2] });
});

test('splitValues-有约定时', () => {
  expect(
    splitValues({ 'user,userName': { value: '1', label: 'jack' } }),
  ).toStrictEqual({
    userName: 'jack',
    user: '1',
  });
});

test('splitValues-有约定时不是对象', () => {
  expect(splitValues({ 'user,userName': 5 })).toStrictEqual({
    userName: undefined,
    user: undefined,
  });
});

test('splitValues-两者都有时', () => {
  expect(
    splitValues({
      'user,userName': { value: '1', label: 'jack' },
      name: 'wang',
    }),
  ).toStrictEqual({
    userName: 'jack',
    user: '1',
    name: 'wang',
  });
});

test('splitValues-有约定时自定义取值', () => {
  expect(
    splitValues({ 'user,userName_id,name': { id: '1', name: 'jack' } }),
  ).toStrictEqual({
    userName: 'jack',
    user: '1',
  });
});

// ***** 套嵌处理 *****
test('splitValues-有约定时-套嵌', () => {
  const before = { info: { 'user,userName': { value: '1', label: 'jack' } } };
  const after = { info: { user: '1', userName: 'jack' } };
  expect(splitValues(before)).toStrictEqual(after);
});

test('splitValues-有约定时-两层套嵌', () => {
  const before = {
    info: {
      'user,userName': { value: '1', label: 'jack' },
      innerInfo: { 'companyId,companyName': { value: '2', label: 'dji' } },
    },
  };
  const after = {
    info: {
      user: '1',
      userName: 'jack',
      innerInfo: { companyId: '2', companyName: 'dji' },
    },
  };
  expect(splitValues(before)).toStrictEqual(after);
});

test('splitValues-有约定时-两层套嵌-都有', () => {
  const before = {
    name: 3,
    'dept,deptName_id,name': { id: 2, name: 'sales' },
    info: {
      sex: 'man',
      'user,userName': { value: '1', label: 'jack' },
      innerInfo: {
        'companyId,companyName': { value: '2', label: 'dji' },
        phone: 10,
      },
    },
  };
  const after = {
    name: 3,
    dept: 2,
    deptName: 'sales',
    info: {
      sex: 'man',
      user: '1',
      userName: 'jack',
      innerInfo: { companyId: '2', companyName: 'dji', phone: 10 },
    },
  };
  expect(splitValues(before)).toStrictEqual(after);
});
