import { ProForm as AntProForm } from '@ant-design/pro-form';
import {
  createContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { splitValues } from '../SchemaForm/utils';

import type { ProFormInstance, ProFormProps } from '@ant-design/pro-form';
import { setConvertedFieldsValue } from '../SchemaForm';
import type { InnerRef } from '../SchemaForm/types';

type ProFormType = ProFormProps & {
  children?: React.ReactNode | React.ReactNode[];
  innerRef?: InnerRef;
};

export const InnerRefContext = createContext<InnerRef | undefined>(undefined);

const ProForm = (props: ProFormType) => {
  const {
    onFinish,
    formRef: propsFormRef,
    initialValues,
    children,
    innerRef,
    ...rest
  } = props;

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

  const setData = (newValue: Record<string, any>) => {
    if (innerRef?.current) {
      const values = innerRef.current.data;
      innerRef.current.data = { ...values, ...newValue };
    }
  };

  /**
   * 给 innerRef 增加方法
   */
  useImperativeHandle(innerRef, () => {
    return {
      data: {},
      setData,
    };
  });

  const handleOnFinish = async (values: any) => {
    if (onFinish) {
      await onFinish(splitValues(values));
      return;
    }

    return new Promise<boolean>((resolve) => {
      resolve(true);
    });
  };

  /**
   * 截获了initialValues
   * 对initialValues进行约定式转化后再赋值
   */
  const [initialValuesInner, setInitialValuesInner] = useState(undefined);
  useEffect(() => {
    if (initialValues && formRef.current) {
      const { getFieldsValue, setFieldsValue } = formRef.current;
      setConvertedFieldsValue(initialValues, {
        getFieldsValue,
        setFieldsValue,
        isInit: true,
        setInitialValuesInner,
      });
    }
  }, []);

  useEffect(() => {
    if (initialValuesInner) {
      formRef.current?.resetFields();
    }
  }, [initialValuesInner]);

  return (
    <InnerRefContext.Provider value={innerRef}>
      <AntProForm
        key={initialValuesInner ? 2 : 1} // initialValues 只在 form 初始化时生效
        onFinish={handleOnFinish}
        formRef={formRef}
        initialValues={initialValuesInner}
        {...rest}
      >
        {children}
      </AntProForm>
    </InnerRefContext.Provider>
  );
};

export default ProForm;
