import React, { type ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import AntdGlobalWrapper from './AntdGlobalWrapper';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const {
    // @ts-ignore
    children,
    ...rest
  } = props;

  return (
    <>
      <Layout {...rest}>
        <AntdGlobalWrapper>{children}</AntdGlobalWrapper>
      </Layout>
    </>
  );
}
