import InternalTabs, { type TabsProps as InternalTabsProps } from 'rc-tabs';
import { type FC } from 'react';

export type ITabsProps = Omit<InternalTabsProps, 'prefixCls'>;

const Tabs: FC<ITabsProps> = (props) => (
  <InternalTabs prefixCls="dumi-default-tabs" {...props} />
);

export default Tabs;
