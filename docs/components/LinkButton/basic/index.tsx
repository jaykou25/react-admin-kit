import { LinkButton } from 'react-admin-kit';
import { Space } from 'antd';

const Basic = () => {
  return (
    <div style={{ backgroundColor: '#e6f4ff', padding: '10px' }}>
      <Space size={'middle'}>
        <LinkButton>编辑</LinkButton>
        <LinkButton loading>编辑</LinkButton>
        <LinkButton disabled>编辑</LinkButton>
        <LinkButton danger>删除</LinkButton>
      </Space>
    </div>
  );
};

export default Basic;
