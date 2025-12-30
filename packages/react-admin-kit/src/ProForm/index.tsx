import { ProForm as AntProForm } from '@ant-design/pro-form';
import { DescriptionsProps, Form } from 'antd';
import { createContext, useEffect, useImperativeHandle, useRef } from 'react';
import {
  collectDataIndex,
  splitValues,
  transformValuesForConvention,
} from '../SchemaForm/utils';

import type { ProFormInstance, ProFormProps } from '@ant-design/pro-form';

import {
  BaseInnerRef,
  CreateBaseInner,
  SchemaFormInnerRefType,
} from '../context';

type ProFormType = Omit<ProFormProps, 'onFinish' | 'submitter'> & {
  children?: React.ReactNode | React.ReactNode[];
  innerRef?: BaseInnerRef;
  /**
   * @description 表单提交时的回调;
   */
  onFinish?: (values: any) => Promise<boolean | void> | void;

  submitter?: boolean | ProFormProps['submitter'];

  readonlyType?: 'form' | 'descriptions';

  descriptionsProps?: Omit<DescriptionsProps, 'items'>;
};

export const InnerRefContext = createContext<BaseInnerRef | undefined>(
  undefined,
);

export const LayoutContext = createContext<ProFormProps['layout']>('vertical');
export const ReadonlyContext = createContext<boolean>(false);
export const ReadonlyTypeContext = createContext<'form' | 'descriptions'>(
  'form',
);
export const DescriptionsPropsContext = createContext<
  Omit<DescriptionsProps, 'items' | 'columns'>
>({});

export const EmbedColumnContext = createContext<any>({});

const ProForm = (props: ProFormType) => {
  const {
    onFinish,
    formRef: propsFormRef,
    initialValues,
    children,
    innerRef: propsInnerRef,
    submitter = false,
    readonlyType = 'form',
    descriptionsProps = {},
    ...rest
  } = props;

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  const innerRef = useRef<SchemaFormInnerRefType>(CreateBaseInner());

  /**
   * 给 innerRef 增加方法
   */
  useImperativeHandle(
    propsInnerRef,
    () => {
      return innerRef.current;
    },
    [],
  );

  const handleOnFinish = async (values: any) => {
    if (onFinish) {
      return await onFinish(splitValues(values));
    }
  };

  const selfFormRef = useRef<ProFormInstance>();

  const initialValuesRef = useRef<any>(initialValues);

  const embedColumnsRef = useRef<any>([]);

  const getDataIndexes = (values): any => {
    return embedColumnsRef.current.reduce(
      (prev, item) =>
        prev.concat(collectDataIndex(item.columns, values, item.baseName)),
      [],
    );
  };

  const wrapForm = (form) => {
    const { setFieldsValue } = form;
    form.from = 'proform';

    form.setFieldsValue = (values) => {
      const $values = transformValuesForConvention(
        values,
        getDataIndexes(values),
      );

      setFieldsValue($values);

      /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
      innerRef.current?.setData($values || {});
    };

    return form;
  };

  const [form] = Form.useForm();
  const formInstance = Form.useFormInstance();
  const formInstanceRef = useRef<ProFormInstance | undefined>(
    wrapForm(props.form || formInstance || form),
  );

  useEffect(() => {
    if (formInstanceRef.current) {
      // @ts-ignore
      const { setInitialValues } = formInstanceRef.current.getInternalHooks(
        'RC_FORM_INTERNAL_HOOKS',
      );
      const $values = transformValuesForConvention(
        initialValues,
        getDataIndexes(initialValues),
      );

      formInstanceRef.current?.setFieldsValue($values);
      setInitialValues($values);
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
    [selfFormRef.current],
  );

  return (
    <InnerRefContext.Provider value={innerRef}>
      <LayoutContext.Provider value={props.layout}>
        <ReadonlyContext.Provider value={props.readonly || false}>
          <ReadonlyTypeContext.Provider value={readonlyType}>
            <DescriptionsPropsContext.Provider value={descriptionsProps}>
              <EmbedColumnContext.Provider value={embedColumnsRef}>
                <AntProForm
                  onFinish={handleOnFinish}
                  initialValues={initialValuesRef.current}
                  formRef={selfFormRef}
                  submitter={submitter === true ? {} : submitter}
                  {...rest}
                  form={formInstanceRef.current}
                >
                  {children}
                </AntProForm>
              </EmbedColumnContext.Provider>
            </DescriptionsPropsContext.Provider>
          </ReadonlyTypeContext.Provider>
        </ReadonlyContext.Provider>
      </LayoutContext.Provider>
    </InnerRefContext.Provider>
  );
};

export default ProForm;
