import React from 'react';
import { BetaSchemaForm } from '@ant-design/pro-form';

import type { SchemaFormProps, SchemaFormSelfProps } from './types';
import { Col, Row, Form } from 'antd';
import { genItems } from './genItems';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const {
    embed = false,
    readonly = false,
    submitter = false,
    columns = [],
    valueName,
    ...rest
  } = props;

  const $columns = readonly ? columns.map((col) => ({ ...col, readonly: true })) : columns;

  // 处理套嵌数据结构
  if (valueName) {
    $columns.forEach((col) => {
      const { dataIndex } = col;
      if (typeof dataIndex === 'string') {
        col.dataIndex = [valueName, dataIndex];
      }
    });
  }

  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  const formInstance = Form.useFormInstance();
  if (embed) {
    const { grid, rowProps, colProps, labelCol } = props;

    if (grid) {
      return (
        <Row {...rowProps}>
          {genItems($columns, 'form', formInstance, labelCol).map((itemObj) => {
            const { dom, item } = itemObj;
            return (
              <Col key={item.dataIndex} {...colProps} {...item.colProps}>
                {dom}
              </Col>
            );
          })}
        </Row>
      );
    }

    return genItems($columns, 'form', formInstance, labelCol).map((itemObj) => itemObj.dom);
  }

  return <BetaSchemaForm submitter={submitter} {...rest} columns={$columns} layoutType={'Form'} />;
};

export default SchemaForm;

// 用于生成api文档
export const Self: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
