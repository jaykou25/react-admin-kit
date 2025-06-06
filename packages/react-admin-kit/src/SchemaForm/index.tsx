import { BetaSchemaForm, GridContext } from '@ant-design/pro-form';
import { produce } from 'immer';
import React, {
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
  BaseInnerRef,
  FormColumnType,
  SchemaFormInnerRefType,
  SchemaFormProps,
  SchemaFormSelfProps,
} from './types';

import type { ProFormInstance } from '@ant-design/pro-form';
import { InnerRefContext, ReadonlyContext } from '../ProForm';
import { BaseInnerFn } from '../context';
import { setFieldsValueConvention, splitValues } from './utils';

const SchemaForm: React.FC<SchemaFormProps> = (props: SchemaFormProps) => {
  const {
    embed = false,
    readonly,
    submitter = false,
    columns = [],
    valueBaseName,
    initialValues,
    formRef: propsFormRef,
    onFinish,
    innerRef,
    ...rest
  } = props;

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  const selfInnerRef = useRef<SchemaFormInnerRefType>();
  const baseInnerObjRef = useRef<SchemaFormInnerRefType>(BaseInnerFn());

  const parentInnerRef = useContext(InnerRefContext);

  const getInnerRef = (): BaseInnerRef => {
    return parentInnerRef || innerRef || selfInnerRef;
  };

  /**
   * 给 innerRef 增加方法
   */
  useEffect(() => {
    const $innerRef = getInnerRef();
    if (!$innerRef.current) {
      $innerRef.current = baseInnerObjRef.current;
    }

    if (!$innerRef.current.data)
      $innerRef.current.data = baseInnerObjRef.current.data;
    if (!$innerRef.current.setData)
      $innerRef.current.setData = baseInnerObjRef.current.setData;
  }, []);

  const [form] = Form.useForm();
  const formInstance = Form.useFormInstance();
  const formInstanceRef = useRef<ProFormInstance | undefined>(
    props.form || formInstance || form,
  );

  const selfFormRef = useRef<ProFormInstance>();

  const initialValuesRef = useRef<any>(undefined);

  const [updateKey, setUpdateKey] = useState(1);

  /* 包装 form 实例的方法, 用于约定式赋值
   * setFieldsValue
   */
  useEffect(() => {
    if (embed) return;

    if (formInstanceRef.current) {
      const { getFieldsValue, setFieldsValue } = formInstanceRef.current;

      formInstanceRef.current = {
        ...formInstanceRef.current,
        setFieldsValue: (values) => {
          console.log('日志++++', values);
          setFieldsValueConvention(values, { getFieldsValue, setFieldsValue });

          /** 将赋值的值额外存在 innerRef 里, 在 render 函数(只读模式), 表单提交等场景里可用 */
          getInnerRef().current?.setData(values || {});
        },
      };

      // 对initialValues进行约定式转化
      if (initialValues) {
        setFieldsValueConvention(initialValues, {
          getFieldsValue,
          setFieldsValue,
          callback: (finalVals) => {
            initialValuesRef.current = finalVals;
            setUpdateKey((val) => val + 1);
          },
        });
      } else {
        setUpdateKey((val) => val + 1);
      }
    }
  }, [embed]);

  /* 包装 form 实例的取值相关的方法, 需要约定式转化
   * getFieldsValue, validateFields, getFieldsFormatValue, validateFieldsReturnFormatValue
   */
  useImperativeHandle(
    propsFormRef,
    () => {
      if (selfFormRef.current) {
        const {
          getFieldsValue,
          validateFields,
          getFieldsFormatValue,
          validateFieldsReturnFormatValue,
        } = selfFormRef.current;

        return {
          ...selfFormRef.current,
          getFieldsValue: (...rest) => {
            // @ts-ignore
            return splitValues(getFieldsValue(...rest));
          },
          getFieldsFormatValue: getFieldsFormatValue
            ? (namePath: any) => splitValues(getFieldsFormatValue(namePath))
            : undefined,
          validateFields: (...rest) => {
            return validateFields(...rest).then((res) => {
              return splitValues(res);
            });
          },
          validateFieldsReturnFormatValue: validateFieldsReturnFormatValue
            ? (namePath) => {
                return validateFieldsReturnFormatValue(namePath).then((res) => {
                  return splitValues(res);
                });
              }
            : undefined,
        };
      }
    },
    [updateKey],
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
            const values = selfFormRef.current?.getFieldsFormatValue?.() || {};
            const innerRefData = getInnerRef().current?.data || {};

            /** entity 中原有的 id, value 等属性会有被 values 中同名的值覆盖的可能 */
            return render(
              dom,
              {
                ...entity,
                ...(initialValues || {}),
                ...innerRefData,
                ...splitValues(values),
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
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  if (embed) {
    const { grid, rowProps, colProps, labelCol } = props;
    const parentReadonly = useContext(ReadonlyContext);
    const activeReadonly = readonly === undefined ? parentReadonly : readonly;

    if (grid) {
      return (
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
      );
    }

    return genItems(patchColumn(columns), 'form', formInstance, {
      labelCol,
      valueBaseName,
      readonly: activeReadonly,
    });
  }

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

  return (
    <BetaSchemaForm
      key={updateKey}
      {...setting}
      onFinish={handleOnFinish}
      //@ts-ignore 说不能传true, 但是试了下 true 是可以给的
      submitter={patchSubmitter()}
      readonly={readonly}
      initialValues={initialValuesRef.current}
      formRef={selfFormRef}
      {...rest}
      form={formInstanceRef.current}
      columns={patchColumn(columns)}
      layoutType={'Form'}
    />
  );
};

export default SchemaForm;

// 用于生成api文档
/* istanbul ignore next */
export const SchemaFormType: React.FC<SchemaFormSelfProps> = () => {
  return null;
};
