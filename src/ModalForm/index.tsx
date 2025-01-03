/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ProFormInstance } from '@ant-design/pro-form';
import type { ModalProps } from 'antd';
import { Form, Modal } from 'antd';
import { Component, MutableRefObject, createRef } from 'react';
import SchemaForm from '../SchemaForm';
import { mergeOptions } from '../utils';

import type {
  FormType,
  ModalFormInnerRefType,
  ModalFormProps,
  ModalFormSelfProps,
} from './types';

import { ModalFormContext } from '../SettingProvider/context';
import { BaseInnerFn } from '../context';
import { normalizeTree } from '../utils/treeUtil';

class ModalForm extends Component<
  ModalFormProps,
  { formType: FormType; visible: boolean; formData: any; loading: boolean }
> {
  private selfFormRef;
  private selfInnerRef;
  private baseInnerObj;

  static contextType = ModalFormContext;
  context!: React.ContextType<typeof ModalFormContext>;

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      formData: props.formProps?.initialValues || {},
      formType: 'new',
      loading: false,
    };

    this.selfInnerRef = createRef<ModalFormInnerRefType>();
    this.selfFormRef = createRef<ProFormInstance>();
    this.baseInnerObj = BaseInnerFn();

    const innerRef = this.getInnerRef();

    if (!innerRef.current) {
      // @ts-ignore
      innerRef.current = {};
    }
    innerRef.current.openModal = this.openModal;
    if (!innerRef.current.data) innerRef.current.data = this.baseInnerObj.data;
    if (!innerRef.current.setData)
      innerRef.current.setData = this.baseInnerObj.setData;
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (!prevProps.open && this.props.open) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        await this.props.onOpen(
          this.state.formType,
          this.getFormRef(),
          this.state.formData,
        );
        this.setState({ loading: false });
      }
    }

    if (!prevState.visible && this.state.visible) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        await this.props.onOpen(
          this.state.formType,
          this.getFormRef(),
          this.state.formData,
        );
        this.setState({ loading: false });
      }
    }
  };

  getFormRef = (): MutableRefObject<ProFormInstance> => {
    return this.props.formProps?.formRef || this.selfFormRef;
  };

  getInnerRef = (): MutableRefObject<ModalFormInnerRefType> => {
    return this.props.innerRef || this.selfInnerRef;
  };

  openModal = (formType: FormType = 'new', initialData: object) => {
    /**
     * 将 formType 挂在 innerRef 上
     */
    const innerRef = this.getInnerRef();
    innerRef.current.formType = formType;

    // 合并初始值. openModal 所携带的初始值优先级更大.
    const propsInitialValues = this.props.formProps?.initialValues || {};
    const initialValues = { ...propsInitialValues, ...initialData };

    this.setState({
      visible: true,
      formType,
      formData: initialValues,
    });
  };

  onOk = () => {
    if (this.getFormRef().current) {
      const { submit } = this.getFormRef().current;

      submit();
    }
  };

  onFinish = async (values) => {
    const { onFinish } = this.props;
    const { formType, formData } = this.state;
    this.setState({ loading: true });
    if (onFinish) {
      try {
        await onFinish(values, formType, formData);
        this.setState({ loading: false });
        this.getOnCancel();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('onFinishError', e);
        this.setState({ loading: false });
      }
    }
  };

  handleOnCancel = () => {
    const { getContainer, confirmOnClose = true } = this.props;

    const isTouched = this.getFormRef().current?.isFieldsTouched();

    if (confirmOnClose && isTouched) {
      Modal.confirm({
        title: '确认关闭弹窗吗?',
        content: '关闭弹窗后您所更改的内容将不会保存!',
        centered: true,
        closable: true,
        onOk: () => {
          this.getOnCancel();
        },
        getContainer,
      });
    } else {
      this.getOnCancel();
    }
  };

  getOnCancel = () => {
    const { onCancel, open } = this.props;
    if (open) {
      // @ts-ignore
      if (onCancel) onCancel();
    } else {
      this.setState({ visible: false });
    }
  };

  /** 获取 modal props, 需要合并全局的属性 */
  getModalProps = (): ModalProps => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      columns,
      onFinish,
      onCancel,
      formProps,
      innerRef,
      open,
      ...rest
    } = this.props;

    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { modalProps: globalModalProps = {} } = setting;

    return mergeOptions(globalModalProps, rest);
  };

  /** 获取 styles 属性, 需要合并全局属性, 默认设置了一个高度 */
  getStylesProps = () => {
    const { styles } = this.getModalProps();

    return mergeOptions(
      {
        body: {
          maxHeight: 'calc(100vh - 108px - 100px - 25px)',
          overflow: 'auto',
          // 让滚动条贴边
          marginRight: '-20px',
          paddingRight: '20px',
        },
      },
      styles,
    );
  };

  getColumns = (): any => {
    const { formData } = this.state;
    const { open } = this.props;

    // 合并初始值. openModal 所携带的初始值优先级更大.
    const propsInitialValues = this.props.formProps?.initialValues || {};
    const initialValues = { ...propsInitialValues, ...formData };

    const $cols = normalizeTree(
      this.props.columns,
      (item) => {
        /** 去掉 width 属性, 因为在表单中不需要 width */
        const { width, initialValue, ...rest } = item;

        // columns 上和 SchemaForm 组件的 initialValues 上不能有相同的字段, 否则会有告警.
        // Form already set 'initialValues' with path 'name'. Field can not overwrite it
        if (
          typeof item.dataIndex === 'string' &&
          initialValues.hasOwnProperty(item.dataIndex)
        ) {
          return rest;
        } else {
          return { initialValue, ...rest };
        }
      },
      { replace: true },
    );

    return $cols;
  };

  render() {
    const { formType } = this.state;

    const { formProps, open } = this.props;

    const {
      isKeyPressSubmit = true,
      autoFocusFirstInput = true,
      initialValues,
      form,
      formRef,
      ...restFormProps
    } = formProps || {};

    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { formProps: globalFormProps = {} } = setting;

    const formRest = mergeOptions(globalFormProps, restFormProps);

    const { styles, ...modalRest } = this.getModalProps();

    return (
      <Modal
        destroyOnClose
        open={open ? open : this.state.visible}
        styles={this.getStylesProps()}
        {...modalRest}
        onCancel={this.handleOnCancel}
        onOk={this.onOk}
        okButtonProps={{ loading: this.state.loading }}
      >
        <ModalContent
          columns={this.getColumns()}
          onFinish={this.onFinish}
          formRest={{
            autoFocusFirstInput,
            isKeyPressSubmit,
            initialValues: open ? initialValues : { ...this.state.formData },
            readonly: formType === 'read',
            ...formRest,
            formRef: this.getFormRef(),
            innerRef: this.getInnerRef(),
          }}
        />
      </Modal>
    );
  }
}

/**
 * 想在这个组件里使用 useForm hook, 并且利用 Modal 的 destroyOnClose 属性来销毁组件
 */
const ModalContent = (props: ModalFormProps & { formRest: any }) => {
  const [form] = Form.useForm();
  const { formProps, columns, onFinish, formRest } = props;

  return (
    <SchemaForm
      scrollToFirstError={true}
      columns={columns}
      onFinish={onFinish}
      {...formRest}
      form={formProps?.form || form} // 当外部没传 form 时使用自身的 form, 防止当 ModalForm 嵌在 ProForm 里时被它的 form 覆盖
    />
  );
};

export default ModalForm;

/**
 * 仅用于输出文档
 */
export const ModalFormType: React.FC<ModalFormSelfProps> = () => null;
