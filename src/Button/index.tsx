import { Button as AntButton } from 'antd';
import { MyButtonSelfProps } from './types';

const Button = (props) => {
  const { visible = true, ...restProps } = props;

  if (typeof visible === 'function') {
    if (!visible()) return null;
  }

  if (!visible) {
    return null;
  }

  return <AntButton {...restProps} />;
};

export default Button;

// 用于生成api文档
export const Self: React.FC<MyButtonSelfProps> = () => {
  return null;
};
