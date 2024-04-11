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
import type { BaseInnerRef, SchemaFormInnerRefType } from '../SchemaForm/types';
import { BaseInnerClass } from '../context';

type ProFormType = ProFormProps & {
  children?: React.ReactNode | React.ReactNode[];
  innerRef?: BaseInnerRef;
};

export const InnerRefContext = createContext<BaseInnerRef | undefined>(
  undefined,
);

const ProForm = (props: ProFormType) => {
  const {
    onFinish,
    formRef: propsFormRef,
    initialValues,
    children,
    innerRef,
    ...rest
  } = props;

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  const selfInnerRef = useRef<SchemaFormInnerRefType>();
  const baseInnerObjRef = useRef<SchemaFormInnerRefType>(new BaseInnerClass());

  const getInnerRef = (): BaseInnerRef => {
    return innerRef || selfInnerRef;
  };

  /**
   * 给 innerRef 增加方法
   */
  useImperativeHandle(getInnerRef(), () => {
    return {
      data: baseInnerObjRef.current.data,
      setData: baseInnerObjRef.current.setData,
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
    <InnerRefContext.Provider value={getInnerRef()}>
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
