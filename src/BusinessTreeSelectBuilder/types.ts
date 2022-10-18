import type { TreeSelectProps } from 'antd';

type ApiType = {
  api: any;
  type: string;
  labelKey?: string;
  valueKey?: string;
  noCache?: boolean;
};

export type BusinessTreeSelectBuilderProps = {
  apis: ApiType[];
};

export interface BusinessTreeSelectProps extends TreeSelectProps<T> {
  type: string;
  nodeDisabled?: (node: any) => boolean;
  labelKey?: string;
  valueKey?: string;
}
