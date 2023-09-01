/// <reference types="react" />
import type { FormInstance, ModalProps } from 'antd';
import type { FormColumnType, SchemaFormInnerRefType } from "..";
import { SettingFormProps } from '../SettingProvider/types';
export type FormType = 'new' | 'edit' | 'read';
export type ModalFormInnerRefType = {
    openModal: (formType?: FormType, initialValues?: any) => void;
} & SchemaFormInnerRefType;
export type ModalFormSelfProps = {
    /**
     * @description open如果传入则为受控模式; 如果open没传可以通过innerRef来打开弹窗
     */
    open?: boolean;
    /**
     * @description 非受控模式(推荐); 在open没传的情况下可以通过innerRef来打开弹窗; ref.current.openModal('new', initialValues)
     */
    innerRef?: React.MutableRefObject<ModalFormInnerRefType | null>;
    /**
     * @description 表单项的配置描述;
     */
    columns: FormColumnType[];
    /**
     * @description 点击弹窗确定按钮后的回调;
     */
    onFinish?: (values: any, formType: FormType, formData: any) => Promise<any> | void;
    /**
     * @description 打开弹框后的回调, 可以在这里请求数据;
     */
    onOpen?: (formType: FormType, formRef: {
        current: FormInstance | undefined | null;
    }, formData: any) => Promise<any> | void;
    /**
     * @description 传递给表单的参数, 请参考SchemaForm组件的api
     */
    formProps?: SettingFormProps;
    /**
     * @description 关闭弹窗时, 如果表单项发生了改动会弹出确认框
     * @default true
     */
    confirmOnClose?: boolean;
};
export type ModalFormProps = ModalProps & ModalFormSelfProps;
