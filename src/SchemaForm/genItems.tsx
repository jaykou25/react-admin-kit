import { renderValueType } from '@ant-design/pro-form/lib/components/SchemaForm/valueType/index';
import {
  LabelIconTip,
  omitUndefined,
  runFunction,
} from '@ant-design/pro-utils';
import { Col } from 'antd';

/**
 * 生成 formItems
 * 代码摘自 @ant-design/pro-form
 *
 */
export const genItems = (
  items,
  type = 'form',
  formInstance,
  options: any = {},
) => {
  const {
    labelCol = {},
    valueBaseName,
    grid,
    colProps = {},
    readonly = false,
  } = options;
  return items
    .filter((originItem) => {
      return !(originItem.hideInForm && type === 'form');
    })
    .sort((a, b) => {
      if (b.order || a.order) {
        return (b.order || 0) - (a.order || 0);
      }
      return (b.index || 0) - (a.index || 0);
    })
    .map((originItem, index) => {
      const title = runFunction(
        originItem.title,
        originItem,
        'form',
        <LabelIconTip
          label={originItem.title as string}
          tooltip={originItem.tooltip || originItem.tip}
        />,
      );

      const genDataIndex = (key, base) => {
        if (base) {
          if (typeof key === 'string') {
            return [base, key];
          }

          if (Array.isArray(key)) {
            return [base].concat(key);
          }
        }

        return key;
      };

      const item = omitUndefined({
        ...originItem,
        title,
        label: title,
        valueType: runFunction(originItem.valueType, {}),
        dataIndex: genDataIndex(
          originItem.key || originItem.dataIndex,
          valueBaseName,
        ),
        readonly: originItem.readonly || readonly,
        tooltip: originItem.tooltip || originItem.tip,
        getFieldProps: originItem.fieldProps
          ? () => runFunction(originItem.fieldProps, formInstance, originItem)
          : undefined,
        getFormItemProps: originItem.formItemProps
          ? () =>
              runFunction(
                { labelCol, ...originItem.formItemProps },
                formInstance,
                originItem,
              )
          : () => ({ labelCol }),
      });

      const key = item.key || item.dataIndex?.toString() || index;
      item.key = key;

      item.name = item.name || item.dataIndex;

      // @ts-ignore
      const dom = renderValueType(item, {
        action: undefined,
        type: 'form',
        originItem,
        formRef: { current: formInstance },
        genItems: (items) =>
          genItems(items, type, formInstance, {
            labelCol,
            valueBaseName,
            grid,
            colProps,
            readonly,
          }),
      });

      if (grid && dom && item.valueType !== 'dependency') {
        return (
          <Col key={key} {...colProps} {...item.colProps}>
            {dom}
          </Col>
        );
      }

      return dom;
    })
    .filter((field) => {
      return Boolean(field);
    });
};
