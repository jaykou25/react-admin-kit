import type { SelectProps } from 'antd';
declare type ApiType = {
    api: any;
    type: string;
    labelKey?: string;
    valueKey?: string;
    pagination?: boolean;
    noCache?: boolean;
};
export declare type BusinessSelectBuilderProps = {
    apis: ApiType[];
};
export interface BusinessSelectProps extends Omit<SelectProps, 'onChange'> {
    type: string;
    newPlaceholder?: string;
    labelKey?: string;
    valueKey?: string;
    queryParams?: Record<string, any>;
    renderLabel?: (node: any) => any;
    onChange?: (val: any, option: any) => void;
}
export {};
