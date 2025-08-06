import { SettingProvider, ProTable } from 'react-admin-kit';

interface PaginationTestProps {
  pagination?: any; // 用于覆盖全局 pagination 设置
}

// 共享的测试数据
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
  { id: 4, name: '赵六', age: 32, email: 'zhaoliu@example.com' },
  { id: 5, name: '孙七', age: 27, email: 'sunqi@example.com' },
  { id: 6, name: '周八', age: 29, email: 'zhouba@example.com' },
];

const mockRequest = () =>
  Promise.resolve({
    data: mockData,
    total: 6,
    success: true,
  });

const basicColumns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
];

// 全局 pagination 配置
const globalSetting = {
  defaultHideInSearch: {
    pageSize: 3,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage: false,
  },
};

const Demo = ({ pagination }: PaginationTestProps) => {
  return (
    <SettingProvider proTableSetting={globalSetting}>
      <ProTable
        request={mockRequest}
        columns={basicColumns}
        rowKey="id"
        search={false}
        pagination={pagination}
      />
    </SettingProvider>
  );
};

export default Demo;
