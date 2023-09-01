import type { SelectProps } from 'antd';
import { Component } from 'react';
export interface BaseSelectProps extends SelectProps<any> {
    type: string;
    loadFunction: (params?: any) => Promise<any>;
    valueKey?: string;
    labelKey?: string;
    renderLabel?: (node: any) => string;
    queryParams?: Record<string, any>;
    noCache?: boolean;
}
declare class BaseSelect extends Component<BaseSelectProps, any> {
    constructor(props: any);
    reRender: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    isNoCache: () => boolean | undefined;
    handleLoadData: () => void;
    loadDataForCache: () => void;
    loadDataWithoutCache: () => void;
    handleOnChange: (val: any) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default BaseSelect;
