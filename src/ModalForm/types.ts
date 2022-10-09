import type { ModalProps, FormProps, FormInstance } from 'antd';
import type { MyProColumnType } from '../ProTable/types';
import type { SubmitterProps } from '@ant-design/pro-form/es/components/Submitter';
import { SchemaFormProps } from '../SchemaForm/types';

export type ModalFormSelfProps = {
  /**
   * @description 表单项的配置描述;
   */
  columns: MyProColumnType[];

  onFinish: (values: any) => void;

  /**
   * @description 打开弹框后的回调, 可以在这里请求数据;
   */
  onOpen?: (formRef: { current: FormInstance | undefined | null }) => void;

  /**
   * @description 传递给表单的参数, 请参考SchemaForm组件的api
   */
  formProps?: SchemaFormProps;
};

export type ModalFormProps = ModalFormSelfProps & ModalProps;
