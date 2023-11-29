import { BetaSchemaForm } from '@ant-design/pro-form';
import { produce } from 'immer';
import React, {
  createRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Form, Row } from 'antd';
import { SchemaFormContext } from '../SettingProvider/context';
import { genItems } from './genItems';
import type {
  FormColumnType,
  SchemaFormInnerRefType,
  SchemaFormProps,
  SchemaFormSelfProps,
} from './types';

import type { ProFormInstance } from '@ant-design/pro-form';
import { InnerRefContext } from '../ProForm';
import { convertValues, splitValues } from './utils';

// 按照约定式格式重新包装 setFieldsValue 方法
export const setConvertedFieldsValue = (
  values,
  {
    isInit = false,
    getFieldsValue,
    setFieldsValue,
    setInitialValuesInner,
  }: any,
) => {
  /**
   * 利用 getFieldsValue 来拿到表单所有的 fields
   * 需要调用两次才能拿全, 因为有的 field 是 valueType=dependency 生成的. final 为 true 时是最后一次
   * @param final 是否是最后一次
   * @returns
   */
  const setConverted = (final = false) => {
    const allVals = getFieldsValue(true, () => {
      return true;
    });
    const convertedVals = convertValues(values, allVals);

    if (isInit && final) {
      setInitialValuesInner(convertedVals);
      return;
    }

    setFieldsValue(convertedVals);
  };

  /**
   * 为什么要调两次?
   * 第一次只能拿到除dependency外其它的.
   * 第二次才能拿全, 而且第二次必须是异步的
   */
  setConverted();
  setTimeout(() => setConverted(true), 50);
};

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const {
    embed = false,
    readonly = false,
    submitter = false,
    columns = [],
    valueBaseName,
    initialValues,
    onFinish,
    formRef: propsFormRef,
    innerRef,
    ...rest
  } = props;

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  const selfInnerRef = createRef<SchemaFormInnerRefType>();
  // @ts-ignore
  selfInnerRef.current = { data: {}, setData: () => {} };

  const setData = (newValue: Record<string, any>) => {
    if (innerRef?.current) {
      const values = innerRef.current.data;
      innerRef.current.data = { ...values, ...newValue };
    }
  };

  /**
   * 给 innerRef 增加方法
   */
  useEffect(() => {
    if (innerRef) {
      if (!innerRef.current) innerRef.current = { data: {}, setData: setData };

      /**
       * 给 ModalForm 组件的 innerRef 赋值
       */
      innerRef.current.data = {};
      innerRef.current.setData = setData;
    }
  }, []);

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
        setInitialValuesInner,
        isInit: true,
      });
    }
  }, []);

  // 包装setFieldsValue方法, 用于约定式赋值
  const formRef = useRef<ProFormInstance>();
  const formRefWithInitial = useRef<ProFormInstance>();
  useImperativeHandle(
    propsFormRef,
    () => {
      // 没有初始值的情况
      if (!initialValuesInner && formRef.current) {
        const { getFieldsValue, setFieldsValue } = formRef.current;
        return {
          ...formRef.current,
          setFieldsValue: (values) =>
            setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue }),
        };
      }

      // 有初始值的情况
      if (!formRefWithInitial.current) {
        return formRefWithInitial.current;
      }

      const { getFieldsValue, setFieldsValue } = formRefWithInitial.current;

      return {
        ...formRefWithInitial.current,
        setFieldsValue: (values) =>
          setConvertedFieldsValue(values, { getFieldsValue, setFieldsValue }),
      };
    },
    [!initialValuesInner],
  );

  /**
   * 全局默认设置
   */
  const setting = useContext(SchemaFormContext) || {};

  const handleOnFinish = async (values: any) => {
    if (onFinish) {
      return onFinish(splitValues(values));
    }
  };

  /**
   * 给 fieldProps 和 renderFormItem 注入 innerRef
   * 给一些约定的字段加上属性：required: true => formItemProps
   */
  const parentInnerRef = useContext(InnerRefContext);
  const patchColumn = ($cols: FormColumnType[]): any[] => {
    const { innerRef = selfInnerRef } = props;

    /**
     * 父组件 ProForm 中传入的 innerRef 优先级最高
     */
    const $innerRef = parentInnerRef || innerRef;

    return produce($cols, (cols) => {
      cols.forEach((col) => {
        const {
          renderFormItem,
          fieldProps,
          valueType,
          columns,
          formItemProps = {},
          required,
        } = col;

        // 增加 required: true 简写
        // @ts-ignore
        if (required && !formItemProps.rules) {
          col.formItemProps = { ...formItemProps, rules: [{ required: true }] };
        }

        // 给fieldProps增加ref参数
        if (fieldProps && typeof fieldProps === 'function') {
          col.fieldProps = (form: ProFormInstance, config) =>
            fieldProps(form, $innerRef, config);
        }

        // 给renderFormItem增加ref参数
        if (renderFormItem) {
          col.renderFormItem = (a, b, c) => renderFormItem(a, b, c, $innerRef);
        }

        // 处理 columns 的套嵌, 例如 valueType 为 group
        if (columns && Array.isArray(columns)) {
          col.columns = patchColumn(columns);
        }

        // 处理 dependency 的套嵌
        if (
          valueType === 'dependency' &&
          columns &&
          typeof columns === 'function'
        ) {
          col.columns = (values): FormColumnType[] => {
            return patchColumn(columns(values));
          };
        }
      });
    });
  };

  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  const formInstance = Form.useFormInstance();
  if (embed) {
    const { grid, rowProps, colProps, labelCol } = props;

    if (grid) {
      return (
        <Row {...rowProps}>
          {genItems(patchColumn(columns), 'form', formInstance, {
            labelCol,
            valueBaseName,
            colProps,
            grid,
            readonly,
          })}
        </Row>
      );
    }

    return genItems(patchColumn(columns), 'form', formInstance, {
      labelCol,
      valueBaseName,
      readonly,
    });
  }

  /**
   * 在原来的 submitter dom 上增加一层 div, 方便在 div 上增加样式
   */
  const patchSubmitter = () => {
    if (typeof submitter === 'object') {
      const { render, style = {} } = submitter;

      if (render) {
        return submitter;
      } else {
        submitter.render = (options, dom) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                ...style,
              }}
            >
              {dom}
            </div>
          );
        };

        return submitter;
      }
    }

    return submitter;
  };

  /**
   *  用 key 来区分不同的form组件
   */
  const key = initialValuesInner ? 'hasInitial' : 'noInitial';
  return (
    <BetaSchemaForm
      key={key}
      {...setting}
      onFinish={handleOnFinish}
      //@ts-ignore 说不能传true, 但是试了下 true 是可以给的
      submitter={patchSubmitter()}
      formRef={key === 'hasInitial' ? formRefWithInitial : formRef}
      readonly={readonly}
      initialValues={initialValuesInner}
      {...rest}
      columns={patchColumn(columns)}
      layoutType={'Form'}
    />
  );
};

export default SchemaForm;

// 用于生成api文档
export const SchemaFormType: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
