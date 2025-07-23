import AntProTable from '@ant-design/pro-table';
import ModalForm from '../ModalForm';
import { useContext, useImperativeHandle, useRef } from 'react';
import type { ModalFormInnerRefType } from '../ModalForm/types';
import { ProTableContext } from '../SettingProvider/context';
import { InnerRefType, MyProTableType } from './types';
import Omit from 'omit.js';
import { mergeOptions } from '../utils';
import type { ProTableSettingProps } from '../SettingProvider/types';

const ProTable = (props: MyProTableType) => {
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

  const { modalFormProps, ...rest } = mergedProps;

  // 这是传给 ModalForm 组件的, 所以类型是 ModalForm 的 innerRef 类型
  const innerRef = useRef<InnerRefType>();

  useImperativeHandle(
    propsInnerRef,
    () => {
      console.log('useImpera: protable', innerRef.current);
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

  return (
    <>
      <AntProTable columns={columns} request={patchRequest()} {...rest} />
      <ModalForm
        {...modalFormProps}
        innerRef={innerRef}
        //@ts-ignore render 方法在 table 和 form 上的使用方法稍有不同，使用时需注意，最好两端分开用 render
        columns={(formColumns || columns).filter((col) => {
          if (col.type === 'form') return true;

          if (!col.type) return true;

          return false;
        })}
      />
    </>
  );
};

export default ProTable;
