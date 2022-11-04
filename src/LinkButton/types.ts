import type { ButtonProps } from 'antd';
import { MyButtonSelfProps } from '../Button/types';

export type MyLinkButtonProps = MyButtonSelfProps & Omit<ButtonProps, 'type'>;
