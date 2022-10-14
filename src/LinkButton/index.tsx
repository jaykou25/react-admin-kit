import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import './styles.less';
import cs from 'classnames';

interface IProps extends ButtonProps {
  noPadding?: boolean;
}

export default function LinkButton(props: IProps) {
  const { style, noPadding = true, children, ...rest } = props;
  return (
    <div
      style={{ display: 'inline-block' }}
      // class之所以放在放层, 而没有直接放在button上是因为当button放在popconfirm中时
      // popconfirm会删掉button的有些class属性
      className={cs('admin-kit-link-button', noPadding && 'admin-kit-no-padding')}
    >
      <Button style={style} type="link" {...rest}>
        {props.children}
      </Button>
    </div>
  );
}
