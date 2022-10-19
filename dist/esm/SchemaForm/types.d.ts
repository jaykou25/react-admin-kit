import type { ProFormProps } from '@ant-design/pro-form';
export declare type SchemaFormProps = SchemaFormSelfProps & OtherFormProps;
export declare type SchemaFormSelfProps = {
    /**
     * @description       是否为内嵌模式
     * @default           false
     */
    embed?: Boolean;
    /**
     * @description      处理套嵌数据结构; 在onFinish收集数据时, 会挂在该字段下. 适用于embed模式
     * @default           false
     */
    valueName?: String;
    /**
     * @description       是否为只读模式
     * @default           false
     */
    readonly?: Boolean;
    /**
     * @description 表单项的配置描述;
     */
    columns: any;
    onFinish?: any;
};
export declare type OtherFormProps = Omit<ProFormProps, 'action' | 'onFinish' | 'form' | 'layoutType'>;
