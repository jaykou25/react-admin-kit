import { BetaSchemaForm } from '@ant-design/pro-form';
import type { ProFormProps } from '@ant-design/pro-form';

import type { SchemaFormProps, SchemaFormSelfProps } from './types';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const { embed = false, submitter = false, ...rest } = props;

  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  if (embed) {
    return <BetaSchemaForm {...rest} layoutType={'Embed'} />;
  }

  return <BetaSchemaForm submitter={submitter} {...rest} layoutType={'Form'} />;
};

export default SchemaForm;

// 用于生成api文档
export const Self: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
