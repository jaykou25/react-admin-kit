import type { ModalProps, FormProps, FormInstance } from 'antd';
import type { MyProColumnType } from '../ProTable/types';
import { SettingFormProps } from '../SettingProvider/types';

export type FormType = 'new' | 'edit' | 'read';

export type ModalFormInnerRefType = {
  openModal: (formType: FormType, initialValues?: any) => void;
};

export type ModalFormSelfProps = {
  /**
   * @description open如果传入则为受控模式; 如果open没传可以通过innerRef来打开弹窗
   */
  open?: MyProColumnType[];

  /**
   * @description 非受控模式(推荐); 在open没传的情况下可以通过innerRef来打开弹窗; ref.current.openModal('new', initialValues)
   */
  innerRef?:
    | React.MutableRefObject<ModalFormInnerRefType | undefined>
    | React.RefObject<ModalFormInnerRefType | undefined>;

  /**
   * @description 表单项的配置描述;
   */
  columns: MyProColumnType[];

  /**
   * @description 点击弹窗确定按钮后的回调;
   */
  onFinish: (values: any, formType: FormType, formData: any) => void;

  /**
   * @description 打开弹框后的回调, 可以在这里请求数据;
   */
  onOpen?: (formType: FormType, formRef: { current: FormInstance | undefined | null }) => void;

  /**
   * @description 传递给表单的参数, 请参考SchemaForm组件的api
   */
  formProps?: SettingFormProps;
};

export type ModalFormProps = ModalProps & ModalFormSelfProps;
