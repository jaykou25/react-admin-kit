import { Space } from 'antd';
import { useState } from 'react';
import { Button } from 'react-admin-kit';

const Basic = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>切换</Button>

      <div style={{ marginTop: '20px' }}>
        <Space>
          <Button visible={visible} type="primary">
            权限按钮
          </Button>
          <Button visible={() => visible} danger type="primary">
            权限按钮2
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Basic;
