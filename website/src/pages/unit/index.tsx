// import { ProTable } from '@ant-design/pro-table';
// import { ProTable } from 'react-admin-kit';
import Demo from '../../../../packages/react-admin-kit/src/ProTable/demos/convention';
import MarkdownLink from '../../../../packages/docusaurus-lib-dev/src/components/API/components/MarkdownLink';

// 模拟数据
const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 28, email: 'wangwu@example.com' },
  { id: 4, name: '赵六', age: 32, email: 'zhaoliu@example.com' },
  { id: 5, name: '钱七', age: 27, email: 'qianqi@example.com' },
];

// 模拟请求函数
let requestCount = 0;
const mockRequest = async (params: any) => {
  requestCount++;

  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (requestCount === 1) {
    // 第一次请求返回3条数据
    return {
      data: mockData.slice(0, 3),
      success: true,
      total: 3,
    };
  } else {
    // 第二次及以后请求返回2条数据
    return {
      data: mockData.slice(3, 5),
      success: true,
      total: 2,
    };
  }
};

// 表格列配置
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    valueType: 'option',
    enableDelete: true,
    render: () => [],
  },
];

const UnitTest = () => {
  const getName = () => {
    return <MarkdownLink text="[SearchConfig] (https://www.baidu.com)" />;
  };
  return (
    <>
      <div>{getName()}</div>

      <div>
        <MarkdownLink text="[protable] (/components/protable)" />
      </div>
    </>
  );
};

export default UnitTest;
