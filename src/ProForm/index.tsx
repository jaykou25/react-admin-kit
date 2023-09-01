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

  // 包装setFieldsValue方法, 用于约定式赋值
  const formRef = useRef<ProFormInstance>();
  const formRef2 = useRef<ProFormInstance>();
  useImperativeHandle(
    propsFormRef,
    () => {
      // 没有初始值的情况
      if (!initialValuesInner) {
        return formRef.current;
      }

      // 有初始值的情况
      if (!formRef2.current) {
        return formRef2.current;
      }

      const { getFieldsValue, setFieldsValue } = formRef2.current;

      return {
        ...formRef2.current,
        setFieldsValue: (values) =>
          setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue }),
      };
    },
    [!initialValuesInner],
  );

  const key = initialValuesInner ? 'hasInitial' : 'noInitial';

  return (
    <InnerRefContext.Provider value={innerRef}>
      <AntProForm
        key={key} // initialValues 只在 form 初始化时生效
        onFinish={handleOnFinish}
        formRef={key === 'hasInitial' ? formRef2 : formRef}
        initialValues={initialValuesInner}
        {...rest}
      >
        {children}
      </AntProForm>
    </InnerRefContext.Provider>
  );
};

export default ProForm;
