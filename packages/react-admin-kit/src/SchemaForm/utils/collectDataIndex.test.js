import { collectDataIndex } from './index';

describe('collectDataIndex', () => {
  it('收集普通列的 dataIndex', () => {
    const columns = [
      {
        dataIndex: 'name',
      },
      {
        dataIndex: 'age',
      },
      {
        dataIndex: 'user,userName',
      },
      {
        dataIndex: ['a', 'b'],
      },
    ];

    expect(collectDataIndex(columns)).toEqual([
      'name',
      'age',
      'user,userName',
      ['a', 'b'],
    ]);
  });

  it('收集依赖列的 dataIndex - columns 为函数', () => {
    const columns = [
      {
        dataIndex: 'type',
      },
      {
        valueType: 'dependency',
        columns: (values) => {
          if (values.type === '1') {
            return [
              {
                dataIndex: 'name',
              },
            ];
          }
          return [
            {
              dataIndex: 'age',
            },
          ];
        },
      },
    ];

    // 测试不同的值会返回不同的 dataIndex
    expect(collectDataIndex(columns, { type: '1' })).toEqual(['type', 'name']);
    expect(collectDataIndex(columns, { type: '2' })).toEqual(['type', 'age']);
  });

  it('嵌套依赖列的情况', () => {
    const columns = [
      {
        dataIndex: 'type',
      },
      {
        valueType: 'dependency',
        columns: (values) => {
          // 第一层依赖列
          if (values.type === '1') {
            return [
              {
                dataIndex: 'subType',
              },
              {
                valueType: 'dependency',
                // 第二层依赖列
                columns: (values) => {
                  if (values.subType === 'a') {
                    return [
                      {
                        dataIndex: 'name',
                      },
                    ];
                  }
                  return [
                    {
                      dataIndex: 'age',
                    },
                  ];
                },
              },
            ];
          }
          return [];
        },
      },
    ];

    // 测试第一层条件不满足时
    expect(collectDataIndex(columns, { type: '2' })).toEqual(['type']);

    // 测试第一层条件满足，第二层条件为 a 时
    expect(collectDataIndex(columns, { type: '1', subType: 'a' })).toEqual([
      'type',
      'subType',
      'name',
    ]);

    // 测试第一层条件满足，第二层条件不为 a 时
    expect(collectDataIndex(columns, { type: '1', subType: 'b' })).toEqual([
      'type',
      'subType',
      'age',
    ]);
  });

  it('嵌套依赖列 - 约定式dataIndex的情况', () => {
    const columns = [
      {
        // 第一层约定式字段
        dataIndex: 'userId,userName',
      },
      {
        valueType: 'dependency',
        name: ['userId,userName'],
        columns: (values) => {
          // 根据第一层的值判断
          const userValue = values['userId,userName'];
          if (userValue?.value === '1') {
            return [
              {
                // 第二层约定式字段
                dataIndex: 'deptId,deptName',
              },
              {
                valueType: 'dependency',
                name: ['deptId,deptName'],
                columns: (values) => {
                  // 根据第二层的值判断
                  const deptValue = values['deptId,deptName'];
                  if (deptValue?.value === 'dept1') {
                    return [
                      {
                        // 第三层约定式字段
                        dataIndex: 'roleId,roleName',
                      },
                    ];
                  }
                  return [];
                },
              },
            ];
          }
          return [];
        },
      },
    ];

    // 测试第一层条件不满足时
    expect(
      collectDataIndex(columns, {
        userId: '2',
        userName: '用户B',
      }),
    ).toEqual(['userId,userName']);

    // 测试第一层满足但第二层条件不满足时
    expect(
      collectDataIndex(columns, {
        userId: '1',
        userName: '用户A',
        deptId: 'dept2',
        deptName: '部门B',
      }),
    ).toEqual(['userId,userName', 'deptId,deptName']);

    // 测试所有条件都满足时
    expect(
      collectDataIndex(columns, {
        userId: '1',
        userName: '用户A',
        deptId: 'dept1',
        deptName: '部门A',
      }),
    ).toEqual(['userId,userName', 'deptId,deptName', 'roleId,roleName']);
  });

  it('处理空列的情况', () => {
    expect(collectDataIndex([])).toEqual([]);
  });

  it('处理没有 dataIndex 的列', () => {
    const columns = [
      {
        title: '名称',
      },
      {
        title: '年龄',
      },
    ];

    expect(collectDataIndex(columns)).toEqual([]);
  });
});

describe('带 baseName 参数的情况', () => {
  it('普通列带 baseName', () => {
    const columns = [
      {
        dataIndex: 'name',
      },
      {
        dataIndex: ['age'],
      },
      {
        dataIndex: 'user,userName',
      },
    ];

    expect(collectDataIndex(columns, {}, 'baseInfo')).toEqual([
      ['baseInfo', 'name'],
      ['baseInfo', 'age'],
      ['baseInfo', 'user,userName'],
    ]);
  });

  it('依赖列带 baseName', () => {
    const columns = [
      {
        dataIndex: 'type',
      },
      {
        valueType: 'dependency',
        name: [['baseInfo', 'type']],
        columns: (values) => {
          if (values.baseInfo.type === '1') {
            return [
              {
                dataIndex: 'name',
              },
            ];
          }
          return [];
        },
      },
    ];

    expect(
      collectDataIndex(columns, { baseInfo: { type: '1' } }, 'baseInfo'),
    ).toEqual([
      ['baseInfo', 'type'],
      ['baseInfo', 'name'],
    ]);
  });

  it('嵌套依赖列带 baseName', () => {
    const columns = [
      {
        dataIndex: 'userId,userName',
      },
      {
        valueType: 'dependency',
        name: [['userInfo', 'userId,userName']],
        columns: (values) => {
          const userValue = values.userInfo['userId,userName'];
          if (userValue?.value === '1') {
            return [
              {
                dataIndex: 'deptId,deptName',
              },
              {
                valueType: 'dependency',
                name: [['userInfo', 'deptId,deptName']],
                columns: (values) => {
                  const deptValue = values.userInfo['deptId,deptName'];
                  if (deptValue?.value === 'dept1') {
                    return [
                      {
                        dataIndex: 'roleId,roleName',
                      },
                    ];
                  }
                  return [];
                },
              },
            ];
          }
          return [];
        },
      },
    ];

    // 测试多层依赖时的 baseName 效果
    expect(
      collectDataIndex(
        columns,
        {
          userInfo: {
            userId: '1',
            deptId: 'dept1',
          },
        },
        'userInfo',
      ),
    ).toEqual([
      ['userInfo', 'userId,userName'],
      ['userInfo', 'deptId,deptName'],
      ['userInfo', 'roleId,roleName'],
    ]);
  });

  it('数字类型的 baseName', () => {
    const columns = [
      {
        dataIndex: 'name',
      },
    ];

    expect(collectDataIndex(columns, {}, 0)).toEqual([[0, 'name']]);
  });

  it('空值或无效的 baseName', () => {
    const columns = [
      {
        dataIndex: 'name',
      },
    ];

    // baseName 为 undefined
    expect(collectDataIndex(columns, {}, undefined)).toEqual(['name']);

    // baseName 为 null
    expect(collectDataIndex(columns, {}, null)).toEqual(['name']);

    // baseName 为空字符串
    expect(collectDataIndex(columns, {}, '')).toEqual(['name']);
  });
});
