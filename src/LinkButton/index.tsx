import Button from '../Button';

import './styles.css';
import { MyLinkButtonProps } from './types';

const LinkButton = (props: MyLinkButtonProps) => {
  const { className, ...rest } = props;

  return (
    <Button
      className={'rak-link-btn ' + (className || '')}
      {...rest}
      type="link"
    />
  );
};

export default LinkButton;
