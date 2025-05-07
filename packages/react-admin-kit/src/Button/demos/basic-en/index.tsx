import { Space } from 'antd';
import { useState } from 'react';
import { Button } from 'react-admin-kit';
import './index.less';

const Basic = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>toggle</Button>

      <div style={{ marginTop: '20px' }}>
        <Space>
          <Button visible={visible} type="primary">
            Primary Button
          </Button>
          <Button visible={() => visible} danger type="primary">
            Danger Button
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Basic;
