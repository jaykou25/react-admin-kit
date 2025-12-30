import { _transformValueForConvention } from './index';

describe('_transformValueForConvention', () => {
  it('基础转换 - 默认value/label', () => {
    const values = {
      userId: '1',
      userName: 'jack',
    };
    const dataIndex = 'userId,userName';

    expect(_transformValueForConvention(values, dataIndex)).toEqual({
      value: '1',
      label: 'jack',
    });
  });

  it('自定义取值名称', () => {
    const values = {
      userId: '1',
      userName: 'jack',
    };
    const dataIndex = 'userId,userName_id,name';

    expect(_transformValueForConvention(values, dataIndex)).toEqual({
      id: '1',
      name: 'jack',
    });
  });

  it('值不存在时返回undefined', () => {
    const values = {
      otherField: 'test',
    };
    const dataIndex = 'userId,userName';

    expect(_transformValueForConvention(values, dataIndex)).toBeUndefined();
  });

  it('值部分存在时仍然转换', () => {
    const values = {
      userId: '1',
    };
    const dataIndex = 'userId,userName';

    expect(_transformValueForConvention(values, dataIndex)).toEqual({
      value: '1',
      label: undefined,
    });
  });

  it('支持特殊字符的字段名', () => {
    const values = {
      'user-id': '1',
      'user.name': 'jack',
    };
    const dataIndex = 'user-id,user.name';

    expect(_transformValueForConvention(values, dataIndex)).toEqual({
      value: '1',
      label: 'jack',
    });
  });
});
