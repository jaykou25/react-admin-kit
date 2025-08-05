import { useRef, useState } from 'react';
import { Button } from 'antd';
import ModalForm from '../../../ModalForm';

const mockData = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' },
];

const OnOpenAsyncDemo = ({ onOpen, title = 'Test Modal' }) => {
  const innerRef = useRef();
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      valueType: 'text',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      valueType: 'digit',
    },
  ];

  const handleOpenNew = () => {
    setVisible(true);
    innerRef.current?.openModal('new');
  };

  const handleOpenEdit = () => {
    setVisible(true);
    innerRef.current?.openModal('edit', mockData[0]);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button data-testid="open-new-btn" onClick={handleOpenNew}>
        新建
      </Button>
      <Button data-testid="open-edit-btn" onClick={handleOpenEdit}>
        编辑
      </Button>
      <ModalForm
        innerRef={innerRef}
        open={visible}
        title={title}
        columns={columns}
        onOpen={onOpen}
        onCancel={handleClose}
        forceRender={true}
        okButtonProps={{ 'data-testid': 'ok' }}
        cancelButtonProps={{ 'data-testid': 'cancel' }}
      />
    </div>
  );
};

export default OnOpenAsyncDemo;
