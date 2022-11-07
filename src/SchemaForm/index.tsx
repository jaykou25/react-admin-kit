import React, { useContext } from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';

import type { SchemaFormProps, SchemaFormSelfProps } from './types';
import { Col, Row, Form } from 'antd';
import { genItems } from './genItems';
import { handleValuesForEdit, handleValuesForSubmit } from '../ProTable/utils/form';
import { SchemaFormContext } from '../SettingProvider/context';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const {
    embed = false,
    readonly = false,
    submitter = false,
    columns = [],
    valueBaseName,
    initialValues,
    onFinish,
    ...rest
  } = props;

  /**
   * 全局默认设置
   */
  const setting = useContext(SchemaFormContext) || {};

  const $columns = readonly ? columns.map((col) => ({ ...col, readonly: true })) : columns;

  const handleOnFinish = (values) => {
    if (onFinish) {
      return onFinish(handleValuesForSubmit(values));
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
          {genItems($columns, 'form', formInstance, { labelCol, valueBaseName, colProps, grid })}
        </Row>
      );
    }

    return genItems($columns, 'form', formInstance, { labelCol, valueBaseName });
  }

  return (
    <BetaSchemaForm
      {...setting}
      initialValues={handleValuesForEdit(initialValues, $columns)}
      onFinish={handleOnFinish}
      submitter={submitter}
      {...rest}
      columns={$columns}
      layoutType={'Form'}
    />
  );
};

export default SchemaForm;

// 用于生成api文档
export const Self: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
