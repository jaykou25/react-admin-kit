import { Component } from 'react';
import type { FormType, ModalFormProps, ModalFormSelfProps } from './types';
import { ModalFormContext } from '../SettingProvider/context';
declare class ModalForm extends Component<ModalFormProps, {
    formType: FormType;
    visible: boolean;
    formData: any;
    loading: boolean;
}> {
    private formRef;
    static contextType: import("react").Context<import("../SettingProvider/types").ModalFormSetting>;
    context: React.ContextType<typeof ModalFormContext>;
    constructor(props: any);
    componentDidUpdate: (prevProps: any, prevState: any) => Promise<void>;
    openModal: (formType: FormType | undefined, initialData: object) => void;
    onOk: () => void;
    onFinish: (values: any) => Promise<void>;
    handleOnCancel: () => void;
    getOnCancel: () => void;
    getColumns: () => any;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default ModalForm;
/**
 * 仅用于输出文档
 */
export declare const ModalFormType: React.FC<ModalFormSelfProps>;
