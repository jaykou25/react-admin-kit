import Button from '../Button';
import styled from 'styled-components';

import { MyLinkButtonProps } from './types';

// 为了支持 ssr 服务端渲染
const ScButton = styled(Button)`
  height: unset;
  padding: 0;

  &:before {
    background-color: unset;
  }
`;

const LinkButton = (props: MyLinkButtonProps) => {
  return <ScButton {...props} type="link" />;
};

export default LinkButton;
