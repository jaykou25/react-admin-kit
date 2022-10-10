import { BetaSchemaForm } from '@ant-design/pro-form';
import type { ProFormProps } from '@ant-design/pro-form';

import type { SchemaFormProps, SchemaFormSelfProps } from './types';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const { embed = false, readonly = false, submitter = false, columns = [], ...rest } = props;

  const $columns = readonly ? columns.map((col) => ({ ...col, readonly: true })) : columns;

  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  if (embed) {
    return <BetaSchemaForm {...rest} columns={$columns} layoutType={'Embed'} />;
  }

  return <BetaSchemaForm submitter={submitter} {...rest} columns={$columns} layoutType={'Form'} />;
};

export default SchemaForm;

// 用于生成api文档
export const Self: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
