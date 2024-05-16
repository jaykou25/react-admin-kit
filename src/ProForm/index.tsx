import { ProForm as AntProForm } from '@ant-design/pro-form';
import { Form } from 'antd';
import {
  createContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { setFieldsValueConvention, splitValues } from '../SchemaForm/utils';

import type { ProFormInstance, ProFormProps } from '@ant-design/pro-form';
import type { BaseInnerRef, SchemaFormInnerRefType } from '../SchemaForm/types';
import { BaseInnerFn } from '../context';

type ProFormType = ProFormProps & {
  children?: React.ReactNode | React.ReactNode[];
  innerRef?: BaseInnerRef;
};

export const InnerRefContext = createContext<BaseInnerRef | undefined>(
  undefined,
);

export const ReadonlyContext = createContext<boolean>(false);

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
  const baseInnerObjRef = useRef<SchemaFormInnerRefType>(BaseInnerFn());

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

  const [form] = Form.useForm();
  const formInstance = Form.useFormInstance();
  const formInstanceRef = useRef<ProFormInstance | undefined>(
    props.form || formInstance || form,
  );

  const selfFormRef = useRef<ProFormInstance>();

  const initialValuesRef = useRef<any>(undefined);

  const [updateKey, setUpdateKey] = useState(1);

  /* 包装 form 实例的方法, 用于约定式赋值
   * setFieldsValue
   */
  useEffect(() => {
    if (formInstanceRef.current) {
      const { getFieldsValue, setFieldsValue } = formInstanceRef.current;

      formInstanceRef.current = {
        ...formInstanceRef.current,
        setFieldsValue: (values) => {
          setFieldsValueConvention(values, {
            getFieldsValue,
            setFieldsValue,
          });

          /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
          getInnerRef().current?.setData(values || {});
        },
      };

      // 对initialValues进行约定式转化
      if (initialValues) {
        setFieldsValueConvention(initialValues, {
          getFieldsValue,
          setFieldsValue,
          callback: (finalVals) => {
            initialValuesRef.current = finalVals;
            setUpdateKey((val) => val + 1);
          },
        });
      } else {
        setUpdateKey((val) => val + 1);
      }
    }
  }, []);

  /* 包装 form 实例的取值相关的方法, 需要约定式转化
   * getFieldsValue, validateFields, getFieldsFormatValue, validateFieldsReturnFormatValue
   */
  useImperativeHandle(
    propsFormRef,
    () => {
      if (selfFormRef.current) {
        const {
          getFieldsValue,
          validateFields,
          getFieldsFormatValue,
          validateFieldsReturnFormatValue,
        } = selfFormRef.current;

        return {
          ...selfFormRef.current,
          getFieldsValue: (...rest) => {
            // @ts-ignore
            return splitValues(getFieldsValue(...rest));
          },
          getFieldsFormatValue: getFieldsFormatValue
            ? (namePath: any, filter: any) =>
                splitValues(getFieldsFormatValue(namePath, filter))
            : undefined,
          validateFields: (...rest) => {
            return validateFields(...rest).then((res) => {
              return splitValues(res);
            });
          },
          validateFieldsReturnFormatValue: validateFieldsReturnFormatValue
            ? (namePath) => {
                return validateFieldsReturnFormatValue(namePath).then((res) => {
                  return splitValues(res);
                });
              }
            : undefined,
        };
      }
    },
    [],
  );

  return (
    <InnerRefContext.Provider value={getInnerRef()}>
      <ReadonlyContext.Provider value={props.readonly || false}>
        <AntProForm
          key={updateKey}
          onFinish={handleOnFinish}
          initialValues={initialValuesRef.current}
          formRef={selfFormRef}
          {...rest}
          form={formInstanceRef.current}
        >
          {children}
        </AntProForm>
      </ReadonlyContext.Provider>
    </InnerRefContext.Provider>
  );
};

export default ProForm;
