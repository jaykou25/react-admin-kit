import React, { useContext, useEffect, useImperativeHandle, useRef } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';

import type { SchemaFormProps, SchemaFormSelfProps } from './types';
import { Row, Form } from 'antd';
import { genItems } from './genItems';
import { SchemaFormContext } from '../SettingProvider/context';

import type { ProFormInstance } from '@ant-design/pro-form';
import { convertValues, splitValues } from './utils';

// 转换成约定式格式后重新赋值
export const setConvertedFieldsValue = (
  values,
  { isInit = false, getFieldsValue, setFieldsValue, setInitialValues }: any,
) => {
  const setConverted = (final = false) => {
    // 利用getFieldsValue来拿到所有的fields
    const originVals = getFieldsValue(true, () => {
      return true;
    });
    const convertedVals = convertValues(values, originVals);

    // 存起来在resetFileds里用
    if (isInit && final && setInitialValues) {
      setInitialValues(convertedVals);
    }
    setFieldsValue(convertedVals);
  };

  /**
   * 为什么要调两次?
   * 第一次只能拿到除dependency外其它的.
   * 第二次才能拿全, 而且第二次必须是异步的
   */
  setConverted();
  setTimeout(() => setConverted(true), 0);
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

  /**
   * 截获了initialValues
   * 对initialValues进行约定式转化后再赋值
   */
  useEffect(() => {
    if (initialValues && formRef.current) {
      const { getFieldsValue, setFieldsValue, getInternalHooks } = formRef.current;
      const { setInitialValues } = getInternalHooks('RC_FORM_INTERNAL_HOOKS');
      setConvertedFieldsValue(initialValues, {
        getFieldsValue,
        setFieldsValue,
        setInitialValues,
        isInit: true,
      });
    }
  }, []);

  /**
   * 全局默认设置
   */
  const setting = useContext(SchemaFormContext) || {};

  const handleOnFinish = (values) => {
    if (onFinish) {
      return onFinish(splitValues(values));
    }
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
          {genItems(columns, 'form', formInstance, {
            labelCol,
            valueBaseName,
            colProps,
            grid,
            readonly,
          })}
        </Row>
      );
    }

    return genItems(columns, 'form', formInstance, { labelCol, valueBaseName, readonly });
  }

  return (
    <BetaSchemaForm
      {...setting}
      onFinish={handleOnFinish}
      submitter={submitter}
      formRef={formRef}
      readonly={readonly}
      {...rest}
      columns={columns}
      layoutType={'Form'}
    />
  );
};

export default SchemaForm;

// 用于生成api文档
export const Self: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
