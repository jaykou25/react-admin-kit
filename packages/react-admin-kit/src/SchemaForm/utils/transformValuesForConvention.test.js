import { transformValuesForConvention } from './index';

describe('transformValuesForConvention', () => {
  it('基础转换 - 字符串类型 dataIndex', () => {
    const dataIndexes = ['userId,userName'];
    const values = {
      userId: '1',
      userName: 'jack',
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      'userId,userName': { value: '1', label: 'jack' },
      userId: '1',
      userName: 'jack',
    });
  });

  it('基础转换 - 字符串类型 dataIndex 2', () => {
    const dataIndexes = ['id,name', 'id2,name2'];
    const values = {
      id: '1',
      name: 'Jennifer',
      id2: '3',
      name2: 'Tom',
      'id,name': { value: '1', label: 'Jennifer' },
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      'id,name': { value: '1', label: 'Jennifer' },
      'id2,name2': { value: '3', label: 'Tom' },
      id: '1',
      name: 'Jennifer',
      id2: '3',
      name2: 'Tom',
    });
  });

  it('基础转换 - 自定义字段名', () => {
    const dataIndexes = ['userId,userName_id,name'];
    const values = {
      userId: '1',
      userName: 'jack',
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      'userId,userName_id,name': { id: '1', name: 'jack' },
      userId: '1',
      userName: 'jack',
    });
  });

  it('嵌套数据转换', () => {
    const dataIndexes = [['base', 'id,name']];
    const values = {
      base: {
        id: '1',
        name: 'test',
      },
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      base: {
        'id,name': { value: '1', label: 'test' },
        id: '1',
        name: 'test',
      },
    });
  });

  it('处理空值', () => {
    const dataIndexes = ['userId,userName'];
    const values = null;

    expect(transformValuesForConvention(values, dataIndexes)).toBeNull();
  });

  it('处理字段不存在的情况', () => {
    const dataIndexes = ['userId,userName'];
    const values = {
      otherField: 'test',
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      'userId,userName': undefined,
      otherField: 'test',
    });
  });

  it('混合数据转换', () => {
    const dataIndexes = ['userId,userName', ['info', 'deptId,deptName'], 'age'];
    const values = {
      userId: '1',
      userName: 'jack',
      age: 18,
      info: {
        deptId: 'dept1',
        deptName: '技术部',
      },
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      'userId,userName': { value: '1', label: 'jack' },
      userId: '1',
      userName: 'jack',
      age: 18,
      info: {
        'deptId,deptName': { value: 'dept1', label: '技术部' },
        deptId: 'dept1',
        deptName: '技术部',
      },
    });
  });
});

describe('FormList 数据转换', () => {
  it('基础数组数据转换', () => {
    const dataIndexes = [['users', 'userId,userName']];
    const values = {
      users: [
        {
          userId: '1',
          userName: 'Alice',
        },
      ],
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      users: [
        {
          'userId,userName': { value: '1', label: 'Alice' },
          userId: '1',
          userName: 'Alice',
        },
      ],
    });
  });

  it('多条数组数据转换', () => {
    const dataIndexes = [['users', 'userId,userName']];
    const values = {
      users: [
        {
          userId: '1',
          userName: 'Alice',
        },
        {
          userId: '2',
          userName: 'Bob',
        },
      ],
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      users: [
        {
          'userId,userName': { value: '1', label: 'Alice' },
          userId: '1',
          userName: 'Alice',
        },
        {
          'userId,userName': { value: '2', label: 'Bob' },
          userId: '2',
          userName: 'Bob',
        },
      ],
    });
  });

  it('处理空数组的情况', () => {
    const dataIndexes = [['users', 'userId,userName']];
    const values = {
      users: [],
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      users: [],
    });
  });

  it('处理数组中不存在的索引', () => {
    const dataIndexes = [['users', 'userId,userName']];
    const values = {
      users: [
        {
          userId: '1',
          userName: 'Alice',
        },
        {},
      ],
    };

    expect(transformValuesForConvention(values, dataIndexes)).toEqual({
      users: [
        {
          'userId,userName': { value: '1', label: 'Alice' },
          userId: '1',
          userName: 'Alice',
        },
        {},
      ],
    });
  });
});
