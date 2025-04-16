/// <reference types="react" />
import { MyButtonProps, MyButtonSelfProps } from './types';
declare const Button: (props: MyButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export default Button;
export declare const ButtonSelf: React.FC<MyButtonSelfProps>;
