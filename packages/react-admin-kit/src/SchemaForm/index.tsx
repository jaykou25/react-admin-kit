import { BetaSchemaForm, GridContext } from '@ant-design/pro-form';
import { produce } from 'immer';
import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { Form, Row, type FormInstance } from 'antd';
import { SchemaFormContext } from '../SettingProvider/context';
import { genItems } from './genItems';
import type {
  FormColumnType,
  OtherFormProps,
  SchemaFormProps,
  SchemaFormSelfProps,
} from './types';

import type { ProFormInstance } from '@ant-design/pro-form';
import {
  EmbedColumnContext,
  InnerRefContext,
  ReadonlyContext,
  ReadonlyTypeContext,
  DescriptionsPropsContext,
} from '../ProForm';
import {
  BaseInnerRef,
  CreateBaseInner,
  SchemaFormInnerRefType,
} from '../context';
import {
  collectDataIndex,
  splitValues,
  transformValuesForConvention,
} from './utils';
import { myMergeOptions } from '../utils';
import omit from 'omit.js';
import DescriptionsTable from './DescriptionsTable';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  // 全局默认设置
  const setting = useContext(SchemaFormContext) || {};
  const safeProps = omit(props, [
    'form',
    'formRef',
    'innerRef',
    'onFinish',
    'columns',
  ]);
  const mergedProps = myMergeOptions(setting, safeProps || {}, {});

  const {
    embed = false,
    readonly,
    readonlyType = 'form',
    submitter = false,
    valueBaseName,
    initialValues,
    descriptionsProps,
    ...rest
  } = mergedProps;

  const {
    form: propsForm,
    formRef: propsFormRef,
    innerRef: propsInnerRef,
    onFinish,
    columns,
  } = props;

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  const innerRef = useRef<SchemaFormInnerRefType>(CreateBaseInner());

  const parentInnerRef = useContext(InnerRefContext);

  const getInnerRef = (): BaseInnerRef => {
    // 以最近的 InnerRefContext 为优先
    // ProForm -> SchemaForm
    //         -> ModalForm  -> SchemaForm
    return parentInnerRef || innerRef;
  };

  const embedColumnsRef = useContext(EmbedColumnContext);

  const formContainerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    propsInnerRef,
    () => {
      return getInnerRef().current;
    },
    [],
  );

  // 包装 form 实例方法, 用于约定式赋值
  const wrapForm = (form: FormInstance) => {
    const { setFieldsValue } = form;

    form.setFieldsValue = (values) => {
      const $values = transformValuesForConvention(
        values,
        collectDataIndex(columns, values, valueBaseName),
      );

      setFieldsValue($values);

      /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
      getInnerRef().current?.setData($values || {});
    };

    return form;
  };

  const [form] = Form.useForm();
  const formInstance = Form.useFormInstance();
  const formInstanceRef = useRef<ProFormInstance | undefined>(
    embed ? null : wrapForm(propsForm || formInstance || form),
  );

  const formRef = useRef<ProFormInstance>();

  const initialValuesRef = useRef<any>(
    transformValuesForConvention(
      initialValues,
      collectDataIndex(columns, initialValues, valueBaseName),
    ),
  );

  useEffect(() => {
    if (embed) {
      embedColumnsRef.current.push({ columns, baseName: valueBaseName });
    }
  }, [embed]);

  useImperativeHandle(
    propsFormRef,
    () => {
      if (formRef.current) {
        const {
          getFieldsValue,
          validateFields,
          getFieldsFormatValue,
          validateFieldsReturnFormatValue,
        } = formRef.current;
        return {
          ...formRef.current,

          getFieldsValue: (...args) => {
            // @ts-ignore
            return splitValues(getFieldsValue(...args));
          },
          getFieldsFormatValue: (...args) => {
            // @ts-ignore
            return splitValues(getFieldsFormatValue(...args));
          },
          validateFields: (...args) => {
            return validateFields(...args).then((res) => {
              return splitValues(res);
            });
          },
          validateFieldsReturnFormatValue: (...args) => {
            // @ts-ignore
            return validateFieldsReturnFormatValue(...args).then((res) => {
              return splitValues(res);
            });
          },
        };
      }
    },
    [formRef.current],
  );

  const handleOnFinish = async (values: any) => {
    if (onFinish) {
      return onFinish(splitValues(values));
    }
  };

  /**
   * 给 fieldProps 和 renderFormItem 注入 innerRef
   * 给一些约定的字段加上属性：required: true => formItemProps
   */
  const patchColumn = ($cols: FormColumnType[]): any[] => {
    const $innerRef = getInnerRef();

    return produce($cols, (cols) => {
      cols.forEach((col) => {
        const {
          renderFormItem,
          fieldProps,
          valueType,
          columns,
          formItemProps = {},
          required,
          render,
        } = col;

        // 增加 required: true 简写
        if (required) {
          if (typeof formItemProps === 'function') {
            col.formItemProps = (_form, _config): any => {
              const _formItemProps = formItemProps(_form, _config);

              if (!_formItemProps.rules) {
                _formItemProps.rules = [];
              }

              _formItemProps.rules.push({ required: true });

              return _formItemProps;
            };
          } else {
            const _formItemProps = formItemProps || {};
            if (!_formItemProps.rules) {
              _formItemProps.rules = [];
            }
            _formItemProps.rules.push({ required: true });

            col.formItemProps = _formItemProps;
          }
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

        // 针对只读模式, 扩展 entity
        if (render) {
          col.render = (dom, entity, ...rest) => {
            const values = formRef.current?.getFieldsFormatValue?.() || {};
            const innerRefData = getInnerRef().current?.data || {};

            /** entity 中原有的 id, value 等属性会有被 values 中同名的值覆盖的可能 */
            return render(
              dom,
              {
                ...entity,
                ...(initialValues || {}),
                ...innerRefData,
                ...values,
              },
              ...rest,
            );
          };
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
   * 在原来的 submitter dom 上增加一层 div, 方便在 div 上增加样式
   */
  const patchSubmitter = () => {
    if (typeof submitter === 'object') {
      const { render, style = {}, className } = submitter;

      if (render) {
        return submitter;
      } else {
        submitter.render = (options, dom) => {
          return (
            <div
              className={className}
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
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  if (embed) {
    const { grid, rowProps, colProps, labelCol } = mergedProps;
    const parentReadonly = useContext(ReadonlyContext);
    const activeReadonly = readonly === undefined ? parentReadonly : readonly;
    const activeReadonlyType =
      props.readonlyType === undefined
        ? useContext(ReadonlyTypeContext)
        : readonlyType;
    const activeDescriptionsProps =
      descriptionsProps === undefined
        ? useContext(DescriptionsPropsContext)
        : descriptionsProps;

    return (
      <>
        <div
          className="form-item-wrapper"
          ref={formContainerRef}
          style={{
            display:
              activeReadonly && activeReadonlyType === 'descriptions'
                ? 'none'
                : 'block',
          }}
        >
          {grid ? (
            <GridContext.Provider value={{ grid: true, colProps }}>
              <Row {...rowProps}>
                {genItems(patchColumn(columns), 'form', formInstance, {
                  labelCol,
                  valueBaseName,
                  colProps,
                  readonly: activeReadonly,
                })}
              </Row>
            </GridContext.Provider>
          ) : (
            genItems(patchColumn(columns), 'form', formInstance, {
              labelCol,
              valueBaseName,
              readonly: activeReadonly,
            })
          )}
        </div>
        {activeReadonly && activeReadonlyType === 'descriptions' && (
          <DescriptionsTable
            formContainerRef={formContainerRef}
            grid={grid}
            embed
            descriptionsProps={activeDescriptionsProps}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div
        ref={formContainerRef}
        style={{
          display:
            readonly && readonlyType === 'descriptions' ? 'none' : 'block',
        }}
      >
        <BetaSchemaForm
          onFinish={handleOnFinish}
          //@ts-ignore 说不能传true, 但是试了下 true 是可以给的
          submitter={patchSubmitter()}
          readonly={readonly}
          initialValues={initialValuesRef.current}
          formRef={formRef}
          {...rest}
          // @ts-ignore
          form={formInstanceRef.current}
          columns={patchColumn(columns)}
          layoutType={'Form'}
        />
      </div>

      {readonly && readonlyType === 'descriptions' && (
        <DescriptionsTable
          formContainerRef={formContainerRef}
          grid={mergedProps.grid}
          descriptionsProps={descriptionsProps}
        />
      )}
    </>
  );
};

export default SchemaForm;

// 用于生成api文档
/* istanbul ignore next */
export const SchemaFormSelfType: React.FC<SchemaFormSelfProps> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const SchemaFormOriginType: React.FC<OtherFormProps> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const FormColumnTypeComponent: React.FC<FormColumnType> = () => {
  return null;
};
