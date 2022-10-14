import { Component } from 'react';
import type { ModalFormProps, ModalFormSelfProps } from './types';
declare class ModalForm extends Component<ModalFormProps, any> {
    private formRef;
    constructor(props: any);
    componentDidUpdate: (prevProps: any) => Promise<void>;
    openModal: (initialData: any) => void;
    onOk: () => void;
    onFinish: (values: any) => Promise<void>;
    handleOnCancel: () => void;
    getOnCancel: () => void;
    render(): JSX.Element;
}
export default ModalForm;
export declare const Self: React.FC<ModalFormSelfProps>;
