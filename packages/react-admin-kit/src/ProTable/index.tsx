import AntProTable from '@ant-design/pro-table';
import ModalForm from '../ModalForm';
import { useContext, useImperativeHandle, useRef, useState } from 'react';
import { ProTableContext } from '../SettingProvider/context';
import type { InnerRefType, MyProTableType } from './types';
import Omit from 'omit.js';
import { mergeOptions } from '../utils';
import type { ProTableSettingProps } from '../SettingProvider/types';
import { FormType } from '../ModalForm/types';
import zh_CN from '../locale/zh_CN';

export const FORM_TYPE_LOCALE = {
  new: 'formTypeNew',
  edit: 'formTypeEdit',
  read: 'formTypeRead',
};

const ProTable = (props: MyProTableType) => {
  // ------- state ---------
  const [formType, setFormType] = useState<FormType>('new');

  // 全局默认设置
  const setting = useContext(ProTableContext) || {};
  const safeProps: ProTableSettingProps = Omit(props, [
    'request',
    'columns',
    'formColumns',
    'onFinish',
    'innerRef',
  ]);

  const mergedProps: ProTableSettingProps = mergeOptions(
    setting,
    safeProps || {},
    {},
  );

  const { innerRef: propsInnerRef, columns, formColumns, request } = props;

  const { onOpen, modalFormProps = {}, ...rest } = mergedProps;

  const getModalTitle = () => {
    const { name = '', locale = zh_CN } = mergedProps;
    const localeKey = FORM_TYPE_LOCALE[formType];
    const formTypeStr = locale[localeKey];

    return `${formTypeStr}${name}` || '';
  };

  const { title = getModalTitle(), ...modalFormRestProps } = modalFormProps;

  // 这是传给 ModalForm 组件的, 所以类型是 ModalForm 的 innerRef 类型
  const innerRef = useRef<InnerRefType>();

  useImperativeHandle(
    propsInnerRef,
    () => {
      return innerRef.current;
    },
    [],
  );

  const patchRequest = (): any => {
    if (request) {
      return (params, sort, filter) => {
        return new Promise((resolve, reject) => {
          request(params, sort, filter)
            .then((res) => {
              if (innerRef.current) {
                innerRef.current.total = res.total;
                innerRef.current.dataSource = res.data;
                innerRef.current.params = params;
              }

              resolve(res);
            })
            .catch((err) => reject(err));
        });
      };
    }
  };

  const selfOnOpen = async (formType, formRef, formData) => {
    setFormType(formType);

    if (onOpen) {
      await onOpen(formType, formRef, formData);
    }
  };

  return (
    <>
      <AntProTable columns={columns} request={patchRequest()} {...rest} />
      <ModalForm
        title
        innerRef={innerRef}
        //@ts-ignore render 方法在 table 和 form 上的使用方法稍有不同，使用时需注意，最好两端分开用 render
        columns={(formColumns || columns).filter((col) => {
          if (col.type === 'form') return true;

          if (!col.type) return true;

          return false;
        })}
        onOpen={selfOnOpen}
        {...modalFormRestProps}
      />
    </>
  );
};

export default ProTable;
