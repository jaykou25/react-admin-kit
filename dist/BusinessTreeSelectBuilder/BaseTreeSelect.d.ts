import type { TreeSelectProps } from 'antd';
import { Component } from 'react';
import { BusinessTreeSelectProps } from './types';
export type BaseTreeSelectProps = BusinessTreeSelectProps<any> & TreeSelectProps<any> & {
    loadFunction: (params?: any) => Promise<any>;
};
declare class BaseTreeSelect extends Component<BaseTreeSelectProps, any> {
    constructor(props: any);
    reRender: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    isNoCache: () => boolean | undefined;
    handleLoadData: () => void;
    loadDataForCache: () => void;
    loadDataWithoutCache: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default BaseTreeSelect;
