/// <reference types="react" />
import type { ButtonProps } from 'antd';
import './styles.less';
interface IProps extends ButtonProps {
    noPadding?: boolean;
}
export default function LinkButton(props: IProps): JSX.Element;
export {};
