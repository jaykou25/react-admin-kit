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
export {};
