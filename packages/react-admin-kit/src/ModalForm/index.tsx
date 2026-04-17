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
import { myMergeOptions } from '../utils';

import type {
  FormType,
  ModalFormInnerRefType,
  ModalFormProps,
  ModalFormSelfProps,
} from './types';

import { LocaleContext, ModalFormContext } from '../SettingProvider/context';
import { CreateBaseInner, SchemaFormInnerRefType } from '../context';
import Omit from 'omit.js';
import type { ModalFormSettingProps } from '../SettingProvider/types';
import { InnerRefContext } from '../ProForm';
import {
  collectDataIndex,
  transformValuesForConvention,
} from '../SchemaForm/utils';

const ModalForm = (props: ModalFormProps) => {
  // 全局默认设置
  const globalLocale = useContext(LocaleContext);
  const setting = useContext(ModalFormContext) || {};
  const safeProps: ModalFormSettingProps = Omit(props, [
    'formRef',
    'innerRef',
    'onFinish',
    'columns',
  ]);
  const mergedProps: ModalFormProps = myMergeOptions(
    setting,
    safeProps || {},
    // 默认值给到这里，特别是对象类的值
    {
      styles: {
        body: {
          maxHeight: 'calc(100vh - 240px)',
          overflow: 'auto',
          // 让滚动条贴边
          marginRight: '-20px',
          paddingRight: '20px',
        },
      },
    },
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
  const innerRef = useRef<SchemaFormInnerRefType>(CreateBaseInner());

  const formRef = useRef<ProFormInstance>();

  const [visible, setVisible] = useState<boolean>(false);
  const [formType, setFormType] = useState<FormType>('new');
  const [formData, setFormData] = useState<any>(propsInitialValues);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const [modal, contextHolder] = Modal.useModal();

  const [form] = Form.useForm();

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

  useEffect(() => {
    if (open) {
      // 优先级: formProps.initialValues > columns 上的 initialValue
      setFormData({
        ...getColumnsInitialValues(columns, propsInitialValues),
        ...(propsInitialValues || {}),
      });
    }
  }, [open]);

  useEffect(() => {
    // @ts-ignore
    const { setInitialValues } = form.getInternalHooks(
      'RC_FORM_INTERNAL_HOOKS',
    );

    const $values = transformValuesForConvention(
      formData,
      collectDataIndex(columns, formData),
    );

    setInitialValues($values);
    form.resetFields();
  }, [formData]);

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
      title: globalLocale?.confirmOnCloseTitle,
      content: globalLocale?.confirmOnCloseContent,
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

      console.log('onFinishValues', values, formType, formData);

      Promise.resolve(onFinish(values, formType, formData))
        .then(() => {
          setConfirmLoading(false);
          getOnCancel(null);
          console.log('onFinishSuccess');
        })
        .catch((e) => {
          /* istanbul ignore next */
          console.log('onFinishError', e);
          setConfirmLoading(false);
        });
    }
  };

  /**
   * 从 columns 中收集 initialValue，统一放到 initialValues 里传给 SchemaForm。
   * 这样可以避免 columns 上的 initialValue 和 SchemaForm 的 initialValues 同名时，
   * antd 报 "Field can not overwrite it" 的警告。
   *
   * 优先级顺序（由低到高）:
   * 1. columns 上的 initialValue
   * 2. formProps 上的 initialValues
   * 3. openModal 传入的 initialData
   */
  const getColumnsInitialValues = (
    cols: any[] = [],
    values?: Record<string, any>,
  ): Record<string, any> => {
    const result: Record<string, any> = {};
    cols.forEach((col) => {
      if (typeof col.dataIndex === 'string' && 'initialValue' in col) {
        result[col.dataIndex] = col.initialValue;
      }

      // 处理 dependency 类型的函数 columns，传入当前 values 使其能动态展开
      if (
        typeof col.columns === 'function' &&
        col.valueType === 'dependency'
      ) {
        try {
          const dependencyColumns = col.columns(values || {});
          Object.assign(
            result,
            getColumnsInitialValues(dependencyColumns, values),
          );
        } catch (e) {
          // values 不满足 dependency 函数要求时静默跳过
        }
      } else if (col.columns && Array.isArray(col.columns)) {
        Object.assign(result, getColumnsInitialValues(col.columns, values));
      }

      if (col.children && Array.isArray(col.children)) {
        Object.assign(result, getColumnsInitialValues(col.children, values));
      }
    });
    return result;
  };

  /**
   * 递归遍历 columns，去掉所有列上的 initialValue 和 width。
   * 对 dependency 的函数 columns 也进行包装，确保其返回的列中不带 initialValue。
   */
  const stripColumnsInitialValue = (cols: any[] = []): any[] => {
    return cols.map((col) => {
      const { width, initialValue, ...rest } = col;

      // 处理 dependency 的函数 columns
      if (
        typeof rest.columns === 'function' &&
        rest.valueType === 'dependency'
      ) {
        const originalFn = rest.columns;
        rest.columns = (values: any) => {
          return stripColumnsInitialValue(originalFn(values));
        };
      } else if (rest.columns && Array.isArray(rest.columns)) {
        rest.columns = stripColumnsInitialValue(rest.columns);
      }

      if (rest.children && Array.isArray(rest.children)) {
        rest.children = stripColumnsInitialValue(rest.children);
      }

      return rest;
    });
  };

  const getColumns = (): any => {
    return stripColumnsInitialValue(columns);
  };

  const openModal = (
    formType: FormType = 'new',
    initialData?: object | null,
    cb?: () => void,
  ) => {
    // 将 formType 挂在 innerRef 上
    propsInnerRef!.current!.formType = formType;

    // 合并初始值. 优先级: openModal(initialData) > formProps.initialValues > columns 上的 initialValue
    const baseValues = {
      ...(propsInitialValues || {}),
      ...(initialData || {}),
    };
    const initialValues = {
      ...getColumnsInitialValues(columns, baseValues),
      ...baseValues,
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
      <InnerRefContext.Provider value={innerRef}>
        <Modal
          open={open ?? visible}
          styles={styles}
          onCancel={handleOnCancel}
          onOk={handleOnOk}
          confirmLoading={propsConfirmLoading ?? confirmLoading}
          {...modalRest}
        >
          <SchemaForm
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
            //@ts-ignore
            form={form} // 当外部没传 form 时使用自身的 form, 防止当 ModalForm 嵌在 ProForm 里时被它的 form 覆盖
          />
        </Modal>
      </InnerRefContext.Provider>
      {contextHolder}
    </>
  );
};

export default ModalForm;

/**
 * 仅用于输出文档
 */
/* istanbul ignore next */
export const ModalFormType: React.FC<ModalFormSelfProps> = () => null;

/**
 * 仅用于输出文档
 */
/* istanbul ignore next */
export const ModalFormInnerRefTypeComponent: React.FC<
  ModalFormInnerRefType
> = () => null;
