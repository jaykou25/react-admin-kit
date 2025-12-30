import type { ButtonProps } from 'antd';

export type MyButtonSelfProps = {
  /**
   * @zh-Hans    控制按钮显示隐藏
   * @en         Control the button display and hide
   * @default           true
   */
  visible?: boolean | (() => boolean);
};

export type MyButtonProps = MyButtonSelfProps & ButtonProps;
