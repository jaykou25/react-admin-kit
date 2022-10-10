import SchemaForm from '../SchemaForm';
import { Modal } from 'antd';
import { Component, createRef } from 'react';
import type { FormInstance } from 'antd';

import omit from 'omit.js';

import type { ModalFormProps, ModalFormSelfProps } from './types';

class ModalForm extends Component<ModalFormProps, any> {
  private formRef;

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      formData: {},
    };

    if (props.innerRef) {
      props.innerRef.current = {};
      props.innerRef.current.openModal = this.openModal;
    }

    this.formRef = createRef<FormInstance>();
  }

  componentDidUpdate = async (prevProps) => {
    if (!prevProps.open && this.props.open) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        await this.props.onOpen(this.formRef);
        this.setState({ loading: false });
      }
    }
  };

  openModal = (initialData) => {
    this.setState({ visible: true, formData: initialData || {} });
  };

  onOk = () => {
    if (this.formRef.current) {
      const { submit } = this.formRef.current;

      submit();
    }
  };

  onFinish = async (values) => {
    const { onFinish } = this.props;
    this.setState({ loading: true });
    try {
      await onFinish(values);
      this.setState({ loading: false });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('onFinishError', e);
      this.setState({ loading: false });
    }

    this.getOnCancel();
  };

  handleOnCancel = () => {
    const { getContainer } = this.props;

    const isTouched = this.formRef.current?.isFieldsTouched();

    if (isTouched) {
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

  render() {
    const { columns, onFinish, onCancel, formProps, bodyStyle = {}, open, ...rest } = this.props;

    const {
      isKeyPressSubmit = true,
      autoFocusFirstInput = true,
      initialValues,
      ...restFormProps
    } = formProps || {};

    return (
      <Modal
        destroyOnClose
        bodyStyle={{
          ...bodyStyle,
          maxHeight: 'calc(100vh - 108px - 100px - 25px)',
          overflow: 'auto',
        }}
        open={open ? open : this.state.visible}
        {...rest}
        onCancel={this.handleOnCancel}
        onOk={this.onOk}
        okButtonProps={{ loading: this.state.loading }}
      >
        <SchemaForm
          scrollToFirstError={true}
          formRef={this.formRef}
          columns={columns.map((col) => omit(col, ['width']))}
          onFinish={this.onFinish}
          autoFocusFirstInput={autoFocusFirstInput}
          isKeyPressSubmit={isKeyPressSubmit}
          initialValues={open ? initialValues : this.state.formData}
          {...restFormProps}
        />
      </Modal>
    );
  }
}

export default ModalForm;

export const Self: React.FC<ModalFormSelfProps> = () => null;
