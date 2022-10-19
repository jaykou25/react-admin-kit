import type { ButtonProps } from 'antd';

export type MyButtonSelfProps = {
  /**
   * @description       控制按钮显示隐藏
   * @default           true
   */
  visible?: Boolean | (() => Boolean);
};

export type MyButtonProps = MyButtonSelfProps & ButtonProps;
