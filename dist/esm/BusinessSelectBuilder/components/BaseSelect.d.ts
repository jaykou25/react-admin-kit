import type { SelectProps } from 'antd';
import { Component } from 'react';
export interface BaseSelectProps extends SelectProps<any> {
    dispatch?: any;
    globalUpdate?: {
        value: number;
        type: string;
    };
    type: string;
    loadFunction: (params?: any) => Promise<any>;
    valueKey?: string;
    labelKey?: string;
    renderLabel?: (node: any) => string;
    newPlaceholder?: any;
    queryParams?: Record<string, any>;
    noCache?: boolean;
}
declare class BaseSelect extends Component<BaseSelectProps, any> {
    constructor(props: any);
    reRender: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    handleLoadData: () => void;
    loadDataForCache: () => void;
    loadDataWithoutCache: () => void;
    handleOnChange: (val: any) => void;
    render(): JSX.Element;
}
export default BaseSelect;
