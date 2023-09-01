/// <reference types="react" />
import type { ProFormProps } from '@ant-design/pro-form';
import type { InnerRef } from '../SchemaForm/types';
type ProFormType = ProFormProps & {
    children?: React.ReactNode | React.ReactNode[];
    innerRef?: InnerRef;
};
export declare const InnerRefContext: import("react").Context<InnerRef | undefined>;
declare const ProForm: (props: ProFormType) => import("react/jsx-runtime").JSX.Element;
export default ProForm;
