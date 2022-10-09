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

    this.state = {};

    this.formRef = createRef<FormInstance>();
  }

  componentDidUpdate = async (prevProps) => {
    if (!prevProps.open && this.props.open) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        console.log('in');
        await this.props.onOpen(this.formRef);
        console.log('out');
        this.setState({ loading: false });
      }
    }

    // 兼容模式
    if (!prevProps.visible && this.props.visible) {
      if (this.props.onOpen) {
        this.setState({ loading: true });
        await this.props.onOpen(this.formRef);
        this.setState({ loading: false });
      }
    }
  };

  onOk = () => {
    if (this.formRef.current) {
      const { submit } = this.formRef.current;

      submit();
    }
  };

  onFinish = async (values) => {
    const { onCancel, onFinish } = this.props;
    this.setState({ loading: true });
    try {
      await onFinish(values);
      this.setState({ loading: false });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('onFinishError', e);
      this.setState({ loading: false });
    }

    // @ts-ignore
    if (onCancel) onCancel();
  };

  handleOnCancel = () => {
    const { onCancel, getContainer } = this.props;

    const isTouched = this.formRef.current?.isFieldsTouched();

    if (isTouched) {
      Modal.confirm({
        title: '确认关闭弹窗吗?',
        content: '关闭弹窗后您所更改的内容将不会保存!',
        centered: true,
        closable: true,
        onOk: () => {
          // @ts-ignore
          onCancel();
        },
        getContainer,
      });
    } else {
      // @ts-ignore
      onCancel();
    }
  };

  render() {
    const { columns, onFinish, onCancel, formProps, bodyStyle = {}, ...rest } = this.props;

    const {
      isKeyPressSubmit = true,
      autoFocusFirstInput = true,
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
          {...restFormProps}
        />
      </Modal>
    );
  }
}

export default ModalForm;

export const Self: React.FC<ModalFormSelfProps> = () => null;
