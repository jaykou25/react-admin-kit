import { SettingProvider, ProTable } from 'react-admin-kit';

interface SizeTestProps {
  size?: 'small' | 'middle' | 'large'; // 用于覆盖全局 size 设置
}

// 共享的测试数据
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
];

const mockRequest = () =>
  Promise.resolve({
    data: mockData,
    total: 3,
    success: true,
  });

const basicColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
];

// 全局 size 配置
const globalSizeSetting = {
  size: 'small',
};

const Demo = ({ size }: SizeTestProps) => {
  return (
    // @ts-ignore todo
    <SettingProvider proTableSetting={globalSizeSetting}>
      <ProTable
        request={mockRequest}
        columns={basicColumns}
        rowKey="id"
        search={false}
        pagination={false}
        size={size}
      />
    </SettingProvider>
  );
};

export default Demo;
