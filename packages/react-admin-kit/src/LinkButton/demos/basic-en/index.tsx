import { Space } from 'antd';
import { LinkButton } from 'react-admin-kit';

const Basic = () => {
  return (
    <div style={{ backgroundColor: '#e6f4ff', padding: '10px' }}>
      <Space size={'middle'}>
        <LinkButton>edit</LinkButton>
        <LinkButton loading>edit</LinkButton>
        <LinkButton disabled>edit</LinkButton>
        <LinkButton danger>delete</LinkButton>
      </Space>
    </div>
  );
};

export default Basic;
