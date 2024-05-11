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
import { BaseInnerFn } from '../context';

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

  /* 包装 form 实例的方法, 用于约定式赋值
   * setFieldsValue, getFieldsValue, validateFields, getFieldsFormatValue, validateFieldsReturnFormatValue
   */
  const formRef = useRef<ProFormInstance>();
  const formRefWithInitial = useRef<ProFormInstance>();
  useImperativeHandle(
    propsFormRef,
    () => {
      // 没有初始值的情况
      if (!initialValuesInner && formRef.current) {
        const {
          getFieldsValue,
          setFieldsValue,
          validateFields,
          getFieldsFormatValue,
          validateFieldsReturnFormatValue,
        } = formRef.current;

        return {
          ...formRef.current,
          setFieldsValue: (values) => {
            setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue });

            /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
            getInnerRef().current?.setData(values || {});
          },
          getFieldsValue: () => splitValues(getFieldsValue()),
          getFieldsFormatValue: getFieldsFormatValue
            ? () => splitValues(getFieldsFormatValue())
            : undefined,
          validateFields: () => {
            return validateFields().then((res) => {
              return splitValues(res);
            });
          },
          validateFieldsReturnFormatValue: validateFieldsReturnFormatValue
            ? () => {
                return validateFieldsReturnFormatValue().then((res) => {
                  return splitValues(res);
                });
              }
            : undefined,
        };
      }

      if (!formRefWithInitial.current) {
        return formRefWithInitial.current;
      }

      // 有初始值的情况
      const {
        getFieldsValue,
        setFieldsValue,
        validateFields,
        getFieldsFormatValue,
        validateFieldsReturnFormatValue,
      } = formRefWithInitial.current;

      return {
        ...formRefWithInitial.current,
        setFieldsValue: (values) => {
          setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue });

          /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
          getInnerRef().current?.setData(values || {});
        },
        getFieldsValue: () => splitValues(getFieldsValue()),
        getFieldsFormatValue: getFieldsFormatValue
          ? () => splitValues(getFieldsFormatValue())
          : undefined,
        validateFields: () => {
          return validateFields().then((res) => {
            return splitValues(res);
          });
        },
        validateFieldsReturnFormatValue: validateFieldsReturnFormatValue
          ? () => {
              return validateFieldsReturnFormatValue().then((res) => {
                return splitValues(res);
              });
            }
          : undefined,
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
        formRef={key === 'hasInitial' ? formRefWithInitial : formRef}
        initialValues={initialValuesInner}
        {...rest}
      >
        {children}
      </AntProForm>
    </InnerRefContext.Provider>
  );
};

export default ProForm;
