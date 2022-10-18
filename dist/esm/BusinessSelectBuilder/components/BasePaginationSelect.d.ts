import { Component } from 'react';
import type { BaseSelectProps } from './BaseSelect';
/**
 * 分页选择组件
 *
 */
declare class BasePaginationSelect extends Component<BaseSelectProps, any> {
    constructor(props: any);
    reRender: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    isNoCache: () => boolean | undefined;
    handleLoadData: () => void;
    loadDataForCache: () => void;
    loadDataWithoutCache: () => void;
    getTotal: () => any;
    reset: () => void;
    handleOnChange: (val: any) => void;
    handleUpdateData: () => void;
    handleSearchData: () => void;
    handlePopupScroll: (e: any) => void;
    toBottomNeedLoad: (target: any) => boolean;
    toBottom: (target: any) => boolean;
    handleSearch: (value: any) => void;
    render(): JSX.Element;
}
export default BasePaginationSelect;
