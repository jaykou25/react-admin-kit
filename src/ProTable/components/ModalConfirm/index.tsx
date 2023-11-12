import { Modal } from 'antd';
import React, { ReactNode } from 'react';

type IProps = {
  title?: string;
  content?: ReactNode;
  children: any;
  onOk?: any;
};

const { confirm } = Modal;

const ModalConfirm = (props: IProps) => {
  const { children, title, content, onOk, ...rest } = props;

  const showConfirm = () => {
    confirm({
      title,
      content,
      onOk,
      ...rest,
    });
  };

  return React.cloneElement(children, {
    onClick: showConfirm,
  });
};

export default ModalConfirm;
