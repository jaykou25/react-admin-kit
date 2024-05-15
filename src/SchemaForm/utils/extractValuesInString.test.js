import { extractValuesInString } from '.';

test('对象值提取 - 正常情况', () => {
  const input = '{}{dataIndex: "hi"}{dataIndex: "hello"}{name: "jack"}';
  const output = ['hi', 'hello'];

  expect(extractValuesInString(input, 'dataIndex')).toEqual(output);
});

test('对象值提取 - 匹配不到', () => {
  const input = '';

  expect(extractValuesInString(input, 'dataIndex')).toEqual([]);
});

test('对象值提取 - 函数', () => {
  const input = '{}{dataIndex: "hi", () => {dataIndex: "hello"}}{name: "jack"}';
  const output = ['hi', 'hello'];

  expect(extractValuesInString(input, 'dataIndex')).toEqual(output);
});
