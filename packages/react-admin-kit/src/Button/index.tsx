import React from 'react';
import { Button as AntButton } from 'antd';
import { MyButtonProps, MyButtonSelfProps } from './types';

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement | null,
  MyButtonProps
>((props, ref) => {
  const { visible = true, ...restProps } = props;

  const ret = typeof visible === 'function' ? visible() : visible;

  if (!ret) {
    return null;
  }

  return <AntButton {...restProps} ref={ref} />;
});

Button.displayName = 'Button';

export default Button;

// 用于生成api文档
/* istanbul ignore next */
export const ButtonSelf: React.FC<MyButtonSelfProps> = () => {
  return null;
};
