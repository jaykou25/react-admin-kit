import type { ModalProps } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import type { FormColumnType, SchemaFormInnerRefType } from 'react-admin-kit';
import type { SchemaFormProps } from '../SchemaForm/types';

export type FormType = 'new' | 'edit' | 'read';

export type ModalFormInnerRefType = {
  /**
   * @zh-Hans 用于打开弹窗; formType 可用于在 onFinish 的时候判断表单类型;
   *
   */
  openModal: (
    formType?: FormType,
    initialValues?: object | null,
    cb?: () => void,
  ) => void;

  /**
   * @zh-Hans 当前的表单类型
   */
  formType?: FormType;
} & SchemaFormInnerRefType;

export type ModalFormFormPropsType = Omit<
  SchemaFormProps,
  'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'form' // 将常用属性提取出来，省得通过 formProps 传
>;

export type ModalFormSelfProps = {
  /**
   * @zh-Hans 非受控模式(推荐); 在open没传的情况下可以通过innerRef来打开弹窗;
   * @en      Uncontrolled mode (recommended); when open is not passed, you can open the modal through innerRef;
   * @type React.MutableRefObject<ModalFormInnerRefType>
   */
  innerRef?: React.MutableRefObject<ModalFormInnerRefType | undefined>;

  /**
   * @zh-Hans 用于获取form实例; 请使用formRef而不要通过form属性传入一个form实例来获取实例. 因为RAK组件对form实例进行了额外的封装, 一定要通过formRef来获取.
   * @en      Used to get the form instance; please use formRef instead of passing a form instance through the form property. Because RAK components have extra encapsulation for the form instance, you must get it through formRef.
   * @type React.MutableRefObject<ProFormInstance>
   */
  formRef?:
    | React.MutableRefObject<ProFormInstance<any> | undefined>
    | React.RefObject<ProFormInstance<any> | undefined>;

  /**
   * @zh-Hans 表单项的配置描述;
   * @en      Configuration description for form items;
   */
  columns: FormColumnType[];

  /**
   * @zh-Hans 点击弹窗确定按钮后的回调;
   * @en      Callback after clicking the modal confirm button;
   * @type (values, formType, formData) => Promise | void
   */
  onFinish?: (
    values: object,
    formType: FormType,
    formData: object,
  ) => Promise<any> | void;

  /**
   * @zh-Hans 打开弹框后的回调, 可以在这里请求数据;
   * @en      Callback after opening the modal, you can request data here;
   * @type (formType, formRef, formData) => Promise | void
   */
  onOpen?: (
    formType: FormType,
    formRef: ModalFormSelfProps['formRef'],
    formData: Record<string | number, any>,
  ) => Promise<any> | void;

  /**
   * @zh-Hans 传递给表单的参数, 请参考SchemaForm组件的api
   * @en      Parameters passed to the form, please refer to the SchemaForm component API
   * @type Omit<SchemaFormProps, 'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'form'>
   */
  formProps?: ModalFormFormPropsType;

  /**
   * @zh-Hans 关闭弹窗提醒, 当表单项发生改动时会弹出确认框
   * @en      Close modal confirmation, a confirmation dialog will appear when form items are modified
   * @default { title: '确认关闭', content: '表单项内容未保存, 是否确认关闭?' }
   * @type boolean | { title?: string; content?: string }
   */
  confirmOnClose?: boolean | { title?: string; content?: string };
};

export type ModalFormProps = ModalProps & ModalFormSelfProps;
