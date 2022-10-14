import type { ProFormProps } from '@ant-design/pro-form';
export declare type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;
export declare type SchemaFormSelfProps = {
    /**
     * @description       是否为内嵌模式
     * @default           false
     */
    embed?: Boolean;
    /**
     * @description       是否为只读模式
     * @default           false
     */
    readonly?: Boolean;
    /**
     * @description 表单项的配置描述;
     */
    columns: any;
    onFinish: any;
};
export declare type OtherFormProps = Omit<ProFormProps, 'action' | 'onFinish' | 'form' | 'layoutType'>;
