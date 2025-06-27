import React, { type ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import AntdGlobalWrapper from './AntdGlobalWrapper';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const {
    // @ts-ignore
    children,
    ...rest
  } = props;

  const { pathname } = useLocation();
  const isBlogPage = pathname.includes('/components/');

  return (
    <>
      <Layout {...rest} noFooter={isBlogPage}>
        <AntdGlobalWrapper>{children}</AntdGlobalWrapper>
      </Layout>
    </>
  );
}
