import type { FormInstance, ModalProps } from 'antd';
import type { ProFormInstance } from '@ant-design/pro-form';
import type { FormColumnType, SchemaFormInnerRefType } from 'react-admin-kit';
import type { SchemaFormProps } from '../SchemaForm/types';

export type FormType = 'new' | 'edit' | 'read';

export type ModalFormInnerRefType = {
  openModal: (
    formType?: FormType,
    initialValues?: object | null,
    cb?: () => void,
  ) => void;
  formType?: FormType;
} & SchemaFormInnerRefType;

export type ModalFormFormPropsType = Omit<
  SchemaFormProps,
  'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'form' // 将常用属性提取出来，省得通过 formProps 传
>;

export type ModalFormSelfProps = {
  /**
   * @description 非受控模式(推荐); 在open没传的情况下可以通过innerRef来打开弹窗;
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
   * @description 表单项的配置描述;
   */
  columns: FormColumnType[];

  /**
   * @description 点击弹窗确定按钮后的回调;
   * @type (values, formType, formData) => Promise | void
   */
  onFinish?: (
    values: object,
    formType: FormType,
    formData: object,
  ) => Promise<any> | void;

  /**
   * @description 打开弹框后的回调, 可以在这里请求数据;
   * @type (formType, formRef, formData) => Promise | void
   */
  onOpen?: (
    formType: FormType,
    formRef: ModalFormSelfProps['formRef'],
    formData: object,
  ) => Promise<any> | void;

  /**
   * @description 传递给表单的参数, 请参考SchemaForm组件的api
   * @type Omit<SchemaFormProps, 'innerRef' | 'formRef' | 'onFinish' | 'columns' | 'form'>
   */
  formProps?: ModalFormFormPropsType;

  /**
   * @description 关闭弹窗提醒, 当表单项发生改动时会弹出确认框
   * @default { title: '确认关闭', content: '表单项内容未保存, 是否确认关闭?' }
   * @type boolean | { title?: string; content?: string }
   */
  confirmOnClose?: boolean | { title?: string; content?: string };
};

export type ModalFormProps = ModalProps & ModalFormSelfProps;
