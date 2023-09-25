/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FormInstance } from 'antd';
import { Modal } from 'antd';
import { Component, createRef } from 'react';
import SchemaForm from '../SchemaForm';
import type { InnerRef } from '../SchemaForm/types';

import omit from 'omit.js';

import type { FormType, ModalFormProps, ModalFormSelfProps } from './types';

import { ModalFormContext } from '../SettingProvider/context';

class ModalForm extends Component<
  ModalFormProps,
  { formType: FormType; visible: boolean; formData: any; loading: boolean }
> {
  private formRef;

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

    if (props.innerRef) {
      if (!props.innerRef.current) {
        props.innerRef.current = {};
      }
      props.innerRef.current.openModal = this.openModal;
    }

    this.formRef = createRef<FormInstance>();
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (!prevProps.open && this.props.open) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        await this.props.onOpen(
          this.state.formType,
          this.formRef,
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
          this.formRef,
          this.state.formData,
        );
        this.setState({ loading: false });
      }
    }
  };

  openModal = (formType: FormType = 'new', initialData: object) => {
    /**
     * 将 formType 挂在 innerRef 上
     */
    if (this.props.innerRef && this.props.innerRef.current) {
      this.props.innerRef.current.formType = formType;
    }

    if (initialData) {
      this.setState({ visible: true, formType, formData: initialData });
      return;
    }

    this.setState({
      visible: true,
      formType,
      formData: this.props.formProps?.initialValues || {},
    });
  };

  onOk = () => {
    if (this.formRef.current) {
      const { submit } = this.formRef.current;

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

    const isTouched = this.formRef.current?.isFieldsTouched();

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

  getColumns = (): any => {
    const { formType } = this.state;
    const $cols = this.props.columns.map((col) => omit(col, ['width']));

    if (formType === 'read') {
      $cols.forEach((col) => (col.readonly = true));
    }

    return $cols;
  };

  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      columns,
      onFinish,
      onCancel,
      formProps,
      bodyStyle = {},
      innerRef,
      open,
      ...rest
    } = this.props;

    const {
      isKeyPressSubmit = true,
      autoFocusFirstInput = true,
      initialValues,
      ...restFormProps
    } = formProps || {};

    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const {
      modalProps: settingModalProps = {},
      formProps: settingFormProps = {},
    } = setting;

    const $innerRef: InnerRef | undefined = innerRef; // 只是为了类型定义, 传入SchemaForm的innerRef与ModalForm的innerRef定义不同
    const formRest = {
      ...settingFormProps,
      innerRef: $innerRef,
      ...restFormProps,
    };
    const modalRest = { ...settingModalProps, ...rest };

    return (
      <Modal
        destroyOnClose
        bodyStyle={{
          ...bodyStyle,
          maxHeight: 'calc(100vh - 108px - 100px - 25px)',
          overflow: 'auto',
        }}
        open={open ? open : this.state.visible}
        {...modalRest}
        onCancel={this.handleOnCancel}
        onOk={this.onOk}
        okButtonProps={{ loading: this.state.loading }}
      >
        <SchemaForm
          scrollToFirstError={true}
          formRef={this.formRef}
          columns={this.getColumns()}
          onFinish={this.onFinish}
          autoFocusFirstInput={autoFocusFirstInput}
          isKeyPressSubmit={isKeyPressSubmit}
          initialValues={open ? initialValues : { ...this.state.formData }}
          {...formRest}
        />
      </Modal>
    );
  }
}

export default ModalForm;

/**
 * 仅用于输出文档
 */
export const ModalFormType: React.FC<ModalFormSelfProps> = () => null;
