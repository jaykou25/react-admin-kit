/// <reference types="react" />
import type { ModalProps, FormInstance } from 'antd';
import type { MyProColumnType } from '../ProTable/types';
import { SettingFormProps } from '../SettingProvider/types';
declare type InnerRefType = {
    openModal: (initialValues?: any) => void;
};
export declare type ModalFormSelfProps = {
    /**
     * @description open如果传入则为受控模式; 如果open没传可以通过innerRef来打开弹窗
     */
    open?: MyProColumnType[];
    /**
     * @description 非受控模式(推荐); 在open没传的情况下可以通过innerRef来打开弹窗; ref.current.openModal(initialValues)
     */
    innerRef?: React.MutableRefObject<InnerRefType | undefined> | React.RefObject<InnerRefType | undefined>;
    /**
     * @description 表单项的配置描述;
     */
    columns: MyProColumnType[];
    onFinish: (values: any) => void;
    /**
     * @description 打开弹框后的回调, 可以在这里请求数据;
     */
    onOpen?: (formRef: {
        current: FormInstance | undefined | null;
    }) => void;
    /**
     * @description 传递给表单的参数, 请参考SchemaForm组件的api
     */
    formProps?: SettingFormProps;
};
export declare type ModalFormProps = ModalProps & ModalFormSelfProps;
export {};
