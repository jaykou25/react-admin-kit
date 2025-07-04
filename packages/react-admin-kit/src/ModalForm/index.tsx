import type { ProFormInstance } from '@ant-design/pro-form';
import { Form, Modal } from 'antd';
import {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import SchemaForm from '../SchemaForm';
import { mergeOptions } from '../utils';

import type { FormType, ModalFormProps, ModalFormSelfProps } from './types';

import { ModalFormContext } from '../SettingProvider/context';
import { SchemaFormInnerRefType } from '../context';
import { normalizeTree } from '../utils/treeUtil';
import Omit from 'omit.js';
import { SchemaFormProps } from 'react-admin-kit/SchemaForm/types';

const ModalForm = (props: ModalFormProps) => {
  // 全局默认设置
  const setting = useContext(ModalFormContext) || {};
  const safeProps = Omit(props, ['formRef', 'innerRef', 'onFinish', 'columns']);
  const mergedProps: ModalFormProps = mergeOptions(
    setting,
    safeProps || {},
    {},
  );
  const {
    formRef: propsFormRef,
    innerRef: propsInnerRef,
    onFinish,
    columns,
  } = props;
  const {
    open,
    styles, // 设一个默认最大高度
    onCancel,
    onOk,
    formProps,
    confirmLoading: propsConfirmLoading,
    ...modalRest
  } = mergedProps;

  const { initialValues: propsInitialValues = {}, ...formRest } =
    formProps || {};

  // 这是传给 SchemaForm 组件的
  const innerRef = useRef<SchemaFormInnerRefType>();

  const formRef = useRef<ProFormInstance>();

  const [visible, setVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState<FormType>('new');
  const [formData, setFormData] = useState<any>(propsInitialValues);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    if (open || visible) {
      if (mergedProps.onOpen) {
        setConfirmLoading(true);
        Promise.resolve(mergedProps.onOpen(formType, getFormRef()!, formData))
          .then(() => {
            setConfirmLoading(false);
          })
          .catch(() => {
            setConfirmLoading(false);
          });
      }
    }
  }, [open, visible]);

  const getStylesProps = () => {
    return mergeOptions(
      {
        body: {
          maxHeight: 'calc(100vh - 240px)',
          overflow: 'auto',
          // 让滚动条贴边
          marginRight: '-20px',
          paddingRight: '20px',
        },
      },
      styles,
    );
  };

  const getFormRef = (): ModalFormProps['formRef'] => {
    return propsFormRef || formRef;
  };

  const getOnCancel = (e) => {
    if (open) {
      if (onCancel) onCancel(e);
    } else {
      setVisible(false);
    }
  };

  const handleOnCancel = (e) => {
    const confirmOnCloseDefault = {
      title: '确认关闭',
      content: '表单项内容未保存, 是否确认关闭?',
    };
    let confirmOnClose = mergedProps.confirmOnClose ?? confirmOnCloseDefault;
    confirmOnClose =
      confirmOnClose === true ? confirmOnCloseDefault : confirmOnClose;

    const isTouched = getFormRef()!.current?.isFieldsTouched();

    if (confirmOnClose && isTouched) {
      modal.confirm({
        title: confirmOnClose.title,
        content: confirmOnClose.content,
        centered: true,
        closable: true,
        onOk: () => {
          getOnCancel(e);
        },
        getContainer: mergedProps.getContainer,
      });
    } else {
      getOnCancel(e);
    }
  };

  const handleOnOk = () => {
    if (getFormRef()!.current) {
      getFormRef()!.current?.submit();
    }
  };

  const handleOnFinish = (values) => {
    if (onFinish) {
      setConfirmLoading(true);

      Promise.resolve(onFinish(values, formType, formData))
        .then(() => {
          setConfirmLoading(false);
          getOnCancel(null);
        })
        .catch((e) => {
          /* istanbul ignore next */
          console.log('onFinishError', e);
          setConfirmLoading(false);
        });
    }
  };

  const getColumns = (): any => {
    const $cols = normalizeTree(
      columns,
      (item) => {
        /** 去掉 width 属性, 因为在表单中不需要 width */
        const { width, initialValue, ...rest } = item;

        // columns 上和 SchemaForm 组件的 initialValues 上不能有相同的字段, 否则会有告警.
        // Form already set 'initialValues' with path 'name'. Field can not overwrite it
        if (
          typeof item.dataIndex === 'string' &&
          formData.hasOwnProperty(item.dataIndex)
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

  const openModal = (
    formType: FormType = 'new',
    initialData?: object | null,
    cb?: () => void,
  ) => {
    // 将 formType 挂在 innerRef 上
    propsInnerRef!.current!.formType = formType;

    // 合并初始值. openModal 所携带的初始值优先级更大.
    const initialValues = {
      ...(propsInitialValues || {}),
      ...(initialData || {}),
    };

    setFormType(formType);
    setFormData(initialValues);
    setVisible(true);

    if (cb) cb();
  };

  useImperativeHandle(
    propsInnerRef,
    () => {
      return { ...innerRef.current!, openModal };
    },
    [],
  );

  return (
    <>
      <Modal
        destroyOnHidden // 默认值
        open={open ?? visible}
        styles={getStylesProps()}
        onCancel={handleOnCancel}
        onOk={handleOnOk}
        confirmLoading={propsConfirmLoading ?? confirmLoading}
        {...modalRest}
      >
        <ModalContent
          scrollToFirstError // 默认值
          autoFocusFirstInput // 默认值
          isKeyPressSubmit // 默认值
          readonly={formType === 'read'}
          columns={getColumns()}
          onFinish={handleOnFinish}
          formRef={getFormRef()}
          innerRef={innerRef}
          initialValues={formData}
          {...formRest}
        />
      </Modal>
      {contextHolder}
    </>
  );
};

const ModalContent = (props: SchemaFormProps) => {
  const [form] = Form.useForm(); // 弹窗每次关闭需要重新生成实例

  return (
    <SchemaForm
      {...props}
      form={form} // 当外部没传 form 时使用自身的 form, 防止当 ModalForm 嵌在 ProForm 里时被它的 form 覆盖
    />
  );
};

export default ModalForm;

/**
 * 仅用于输出文档
 */
/* istanbul ignore next */
export const ModalFormType: React.FC<ModalFormSelfProps> = () => null;
