import { LabelIconTip, omitUndefined, runFunction } from '@ant-design/pro-utils';
import { renderValueType } from '@ant-design/pro-form/es/components/SchemaForm/valueType/index';
import { Col } from 'antd';

/**
 * 生成formItems
 * 代码来自pro-form
 *
 */
export const genItems = (items, type = 'form', formInstance, options: any = {}) => {
  const { returnDom = false, labelCol = {}, valueBaseName, grid, colProps = {} } = options;
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
        title,
        label: title,
        name: originItem.name,
        valueType: runFunction(originItem.valueType, {}),
        key: originItem.key,
        columns: originItem.columns,
        valueEnum: originItem.valueEnum,
        dataIndex: genDataIndex(originItem.key || originItem.dataIndex, valueBaseName),
        initialValue: originItem.initialValue,
        width: originItem.width,
        index: originItem.index,
        readonly: originItem.readonly,
        colSize: originItem.colSize,
        colProps: originItem.colProps,
        rowProps: originItem.rowProps,
        className: originItem.className,
        tooltip: originItem.tooltip || originItem.tip,
        dependencies: originItem.dependencies,
        proFieldProps: originItem.proFieldProps,
        ignoreFormItem: originItem.ignoreFormItem,
        getFieldProps: originItem.fieldProps
          ? () => runFunction(originItem.fieldProps, formInstance, originItem)
          : undefined,
        getFormItemProps: originItem.formItemProps
          ? () => runFunction({ labelCol, ...originItem.formItemProps }, formInstance, originItem)
          : () => ({ labelCol }),
        render: originItem.render,
        renderFormItem: originItem.renderFormItem,
        renderText: originItem.renderText,
        request: originItem.request,
        params: originItem.params,
        transform: originItem.transform,
        convertValue: originItem.convertValue,
      });

      const key = item.key || item.dataIndex?.toString() || index;
      item.key = key;

      const dom = renderValueType(item, {
        action: null,
        type: 'form',
        originItem,
        formRef: { current: formInstance },
        genItems: (items, type, form) =>
          genItems(items, type, form, { labelCol, valueBaseName, grid, colProps }),
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
