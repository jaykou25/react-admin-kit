import Button from '../Button';
import type { MyButtonProps } from '../Button/types';

import './styles.css';

const LinkButton = (props: MyButtonProps) => {
  const { className, ...rest } = props;

  return <Button className={'rak-link-btn' + (className || '')} {...rest} type="link" />;
};

export default LinkButton;
