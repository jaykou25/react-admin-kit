import { uniqueNestedArrays } from './index';

describe('uniqueNestedArrays', () => {
  it('应该正确去除重复的嵌套数组', () => {
    const input = [
      'name',
      'name',
      ['users', 0, 'id'],
      ['users', 0, 'id'],
      ['users', 1, 'name'],
      ['users', 1, 'name'],
      ['business', ['dept,deptName']],
      ['business', ['dept,deptName']],
    ];

    const result = uniqueNestedArrays(input);

    expect(result).toEqual([
      'name',
      ['users', 0, 'id'],
      ['users', 1, 'name'],
      ['business', ['dept,deptName']],
    ]);
  });
});
