import { Component } from 'react';
import type { ModalFormProps, ModalFormSelfProps } from './types';
import { ModalFormContext } from '../SettingProvider/context';
declare class ModalForm extends Component<ModalFormProps, any> {
    private formRef;
    static contextType: import("react").Context<import("../SettingProvider/types").ModalFormSetting>;
    context: React.ContextType<typeof ModalFormContext>;
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
