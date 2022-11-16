import { ProForm as AntProForm } from '@ant-design/pro-form';
import { useEffect, useImperativeHandle, useRef } from 'react';
import { splitValues } from '../SchemaForm/utils';

import type { ProFormInstance, ProFormProps } from '@ant-design/pro-form';
import { setConvertedFieldsValue } from '../SchemaForm';

const ProForm = (props: ProFormProps) => {
  const { onFinish, formRef: propsFormRef, initialValues, ...rest } = props;

  // 包装setFieldsValue方法, 用于约定式赋值
  const formRef = useRef<ProFormInstance>();
  useImperativeHandle(
    propsFormRef,
    () => {
      if (!formRef.current) {
        return formRef.current;
      }

      const { getFieldsValue, setFieldsValue } = formRef.current;

      return {
        ...formRef.current,
        setFieldsValue: (values) =>
          setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue }),
      };
    },
    [!initialValues],
  );

  const handleOnFinish = (values) => {
    if (onFinish) {
      return onFinish(splitValues(values));
    }

    return new Promise<boolean>((resolve) => {
      return resolve(true);
    });
  };

  /**
   * 截获了initialValues
   * 对initialValues进行约定式转化后再赋值
   */
  useEffect(() => {
    if (initialValues && formRef.current) {
      const { getFieldsValue, setFieldsValue, resetFields, getInternalHooks } = formRef.current;
      const { setInitialValues } = getInternalHooks('RC_FORM_INTERNAL_HOOKS');
      setConvertedFieldsValue(initialValues, {
        getFieldsValue,
        setFieldsValue,
        resetFields,
        isInit: true,
        setInitialValues,
      });
    }
  }, []);

  return <AntProForm onFinish={handleOnFinish} formRef={formRef} {...rest} />;
};

export default ProForm;
