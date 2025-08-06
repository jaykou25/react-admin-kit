import AntProTable from '@ant-design/pro-table';
import produce from 'immer';
import type { ActionType, ProTableProps } from '@ant-design/pro-table';
import styled, { css } from 'styled-components';
import ModalForm from '../ModalForm';
import {
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { ProTableContext } from '../SettingProvider/context';
import type {
  EnableDeleteType,
  InnerRefType,
  MyProTableOriginType,
  MyProTableSelfType,
  MyProTableType,
  TableAlertOptionType,
  TableColumnOriginType,
  TableColumnSelfType,
  TableColumnType,
  TableColumnTypeBase,
} from './types';
import Omit from 'omit.js';
import { myMergeOptions } from '../utils';
import type { ProTableSettingProps } from '../SettingProvider/types';
import { FormType } from '../ModalForm/types';
import zh_CN from '../locale/zh_CN';
import { patchHideInSearch } from './utils/patch-hide-in-search';
import { message, Modal, Popconfirm, Space } from 'antd';
import LinkButton from '../LinkButton';
import { FormColumnType } from '../SchemaForm/types';
import { exportTable, filteExportCols, filteFormCols } from './utils';

export const FORM_TYPE_LOCALE = {
  new: 'formTypeNew',
  edit: 'formTypeEdit',
  read: 'formTypeRead',
};

const TableWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['noPadding'].includes(prop),
})<{ noPadding: boolean }>`
  & .ant-pro-table-alert-container {
    font-size: 14px;
  }

  ${(props) =>
    props.noPadding &&
    css`
      & .ant-pro-card-body {
        padding-inline: unset;
      }
    `}
`;

const ProTable = (props: MyProTableType) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [modal, modalContextHolder] = Modal.useModal();

  // ------- state ---------
  const [formType, setFormType] = useState<FormType>('new');
  const [delLoading, setDelLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);

  // ------- ref -----------
  const actionRef = useRef<ActionType>();
  const targetId = useRef();

  // 全局默认设置
  const setting = useContext(ProTableContext) || {};
  const safeProps: ProTableSettingProps = Omit(props, [
    'request',
    'columns',
    'formColumns',
    'onFinish',
    'innerRef',
    'actionRef',
  ]);

  const mergedProps: ProTableSettingProps = myMergeOptions(
    setting,
    safeProps || {},
    // 默认值放在这里，能合并对象类属性
    {
      toolbar: {},
      locale: zh_CN,
      delSuccessProps: {
        content: '删除成功',
        type: 'success',
      },
      delPopconfirmProps: {},
      delModalConfirmProps: {},
      optionColumnSpaceProps: { size: 'small' },
      tableAlertOption: {
        enableDelete: true,
        spaceProps: { size: 'middle' },
        delPopconfirmProps: {
          okButtonProps: { loading: delLoading },
        },
        delModalConfirmProps: {
          okButtonProps: { loading: delLoading },
        },
      },
    },
  );

  const {
    actionRef: propsActionRef,
    innerRef: propsInnerRef,
    columns,
    formColumns,
    request,
    onFinish,
  } = props;

  const {
    rowKey = 'id',
    name,
    onOpen,
    defaultHideInSearch = false,
    locale,
    noPadding = false,
    options = false,
    rowSelection,
    delFunction,
    delPermission,
    delConfirmType = 'popconfirm',
    delPopconfirmProps,
    delModalConfirmProps,
    delSuccessProps,
    optionColumnSpaceProps,
    tableAlertOptionRender,
    tableAlertOption,
    modalFormProps = {},
    ...restTableProps
  } = mergedProps;

  const hasDelPermission = delPermission ? delPermission() : true;

  const getHeaderTitle = () => {
    const { toolbar } = mergedProps;
    const { title } = toolbar!;

    if (title) return title;

    if (name) return `${name}${locale!.tableTitleAfter}`;

    return false;
  };

  const getModalTitle = () => {
    const { name = '' } = mergedProps;
    const localeKey = FORM_TYPE_LOCALE[formType];
    const formTypeStr = locale![localeKey];
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

  const getActionRef = (): RefObject<ActionType | undefined> => {
    // @ts-ignore
    return propsActionRef || actionRef;
  };

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

  const getRowKey = (record: any) => {
    return typeof rowKey === 'function' ? rowKey(record) : rowKey;
  };

  const getRecordKey = (record: any) => {
    const key = getRowKey(record);
    // @ts-ignore
    return record[key];
  };

  // 分受控和非受控
  const getRowSelection = (): ProTableProps<any, any>['rowSelection'] => {
    // 如果属性上没有提供 selectedRowKeys 就转成内部受控
    if (rowSelection && !rowSelection.selectedRowKeys) {
      return {
        ...rowSelection,
        selectedRowKeys,
        onChange: (keys, selectedRows) => {
          setSelectedRowKeys(keys);
          setSelectedRows(selectedRows);
        },
      };
    }

    return rowSelection;
  };

  const handleDelete = (
    selectedIds: (string | number)[],
    record: Record<string, any>,
    callback?: () => void,
  ) => {
    setDelLoading(true);

    targetId.current = getRecordKey(record);

    Promise.resolve(delFunction!(selectedIds, record))
      .then(() => {
        if (delSuccessProps) {
          messageApi.open({
            ...delSuccessProps,
            content: delSuccessProps.content, // 这么做仅仅是为了消除 ts 告警提示
          });
        }

        if (callback) callback();

        // bugfix: 如果在多选选中后, 点的行上的删除, 而不是点的批量删除, 删除后要去除掉selectedKeys
        if (getRecordKey(record) && rowSelection) {
          const ids = (selectedIds || []).filter(
            (id) => id !== getRecordKey(record),
          );

          if (rowSelection.selectedRowKeys) {
            // @ts-ignore onChange 应有三个参数
            if (rowSelection.onChange) rowSelection.onChange(ids);
          } else {
            setSelectedRowKeys(ids);
          }
        }

        getActionRef().current?.reload();
      })
      .finally(() => {
        setDelLoading(false);
      });
  };

  const getDelDom = ({
    popconfirmProps,
    modalFuncProps,
    disabled,
    danger,
    loading,
    btnText,
  }) => {
    if (delConfirmType === 'popconfirm') {
      return (
        <Popconfirm {...popconfirmProps} key="del-dom">
          <LinkButton
            disabled={disabled}
            onClick={(e) => e.stopPropagation()}
            loading={loading}
            danger={danger}
          >
            {btnText}
          </LinkButton>
        </Popconfirm>
      );
    } else {
      return (
        <LinkButton
          key="del-dom"
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            modal.confirm(modalFuncProps);
          }}
          loading={loading}
          danger={danger}
        >
          {btnText}
        </LinkButton>
      );
    }
  };

  const getTableAlertOptionRender = (option) => {
    let delDom: ReactNode = null;

    const {
      enableDelete,
      delPopconfirmProps,
      delModalConfirmProps,
      spaceProps,
    } = tableAlertOption!;

    const alertEnableDelete =
      typeof enableDelete === 'function'
        ? enableDelete(option.selectedRowKeys, option.selectedRows)
        : enableDelete;
    const {
      disabled = false,
      danger = false,
      btnText = '批量删除',
    } = typeof alertEnableDelete === 'object' ? alertEnableDelete : {};

    // 处理 popconfirm title 默认值
    const popconfirmTitle =
      typeof delPopconfirmProps!.title === 'function'
        ? delPopconfirmProps!.title(option.selectedRowKeys, option.selectedRows)
        : delPopconfirmProps!.title ||
          `确认删除${option.selectedRowKeys.length}条数据吗？`;

    // 处理 popconfirm description 默认值
    const popconfirmDescription =
      typeof delPopconfirmProps!.description === 'function'
        ? delPopconfirmProps!.description(
            option.selectedRowKeys,
            option.selectedRows,
          )
        : delPopconfirmProps!.description;

    // 处理 modal title 默认值
    const modalConfirmTitle =
      typeof delModalConfirmProps!.title === 'function'
        ? delModalConfirmProps!.title(
            option.selectedRowKeys,
            option.selectedRows,
          )
        : delModalConfirmProps!.title || '操作确认';

    // 处理 modal content 默认值
    const modalConfirmContent =
      typeof delModalConfirmProps!.content === 'function'
        ? delModalConfirmProps!.content(
            option.selectedRowKeys,
            option.selectedRows,
          )
        : delModalConfirmProps!.content ||
          `确认删除${option.selectedRowKeys.length}条数据吗？`;

    if (delFunction && hasDelPermission && alertEnableDelete) {
      delDom = getDelDom({
        disabled,
        danger,
        btnText,
        loading: delLoading,
        popconfirmProps: {
          ...delPopconfirmProps,
          onConfirm: () => {
            handleDelete(option.selectedRowKeys, {}, option.onCleanSelected);
            delPopconfirmProps?.onConfirm?.();
          },
          title: popconfirmTitle,
          description: popconfirmDescription,
        },
        modalFuncProps: {
          ...delModalConfirmProps,
          title: modalConfirmTitle,
          content: modalConfirmContent,
          onOk: () => {
            handleDelete(option.selectedRowKeys, {}, option.onCleanSelected);
            delModalConfirmProps?.onOk?.();
          },
        },
      });
    }

    const cancelDom = (
      <LinkButton onClick={option.onCleanSelected}>取消选择</LinkButton>
    );

    const defaultDom = (
      <Space {...spaceProps}>
        {delDom}
        {cancelDom}
      </Space>
    );

    return tableAlertOptionRender
      ? tableAlertOptionRender(option, { delDom, cancelDom })
      : defaultDom;
  };

  /**
   * 增加 render 函数
   *  1. 给 option 列增加 innerRef
   *  2. option 列的 renderDom 包裹 Space 组件
   *  3. 加入删除节点
   */
  const patchRender = (columns, { innerRef, spaceProps }): any => {
    return produce(columns, (cols) => {
      cols.forEach(
        (col: Omit<FormColumnType, 'render'> & TableColumnType['render']) => {
          const { render, enableDelete = false } = col;

          // 给 valueType 为 option 列的 render 增加 ref 参数
          if (col.valueType === 'option' && render) {
            col.render = (text, record, index, action) => {
              const renderDom = render(text, record, index, action, innerRef);

              // 增加删除节点
              const enableDeleteResult =
                typeof enableDelete === 'function'
                  ? enableDelete(record, index)
                  : enableDelete;

              if (
                delFunction &&
                hasDelPermission &&
                enableDeleteResult &&
                Array.isArray(renderDom)
              ) {
                const {
                  disabled = false,
                  danger = false,
                  btnText = '删除',
                  btnIndex = renderDom.length,
                } = typeof enableDeleteResult === 'object'
                  ? enableDeleteResult
                  : {};

                // 处理 popconfirm title 默认值
                const popconfirmTitle =
                  typeof delPopconfirmProps!.title === 'function'
                    ? delPopconfirmProps!.title(record, index)
                    : delPopconfirmProps!.title || `确认删除吗？`;

                // 处理 popconfirm description 默认值
                const popconfirmDescription =
                  typeof delPopconfirmProps!.description === 'function'
                    ? delPopconfirmProps!.description(record, index)
                    : delPopconfirmProps!.description;

                // 处理 modal title 默认值
                const modalConfirmTitle =
                  typeof delModalConfirmProps!.title === 'function'
                    ? delModalConfirmProps!.title(record, index)
                    : delModalConfirmProps!.title || '操作确认';

                // 处理 modal content 默认值
                const modalConfirmContent =
                  typeof delModalConfirmProps!.content === 'function'
                    ? delModalConfirmProps!.content(record, index)
                    : delModalConfirmProps!.content || `确认删除吗？`;

                const delDom = getDelDom({
                  disabled,
                  danger,
                  btnText,
                  loading:
                    delLoading && getRecordKey(record) === targetId.current,
                  popconfirmProps: {
                    ...delPopconfirmProps,
                    onConfirm: () => {
                      handleDelete([getRecordKey(record)], record);
                      delPopconfirmProps?.onConfirm?.();
                    },
                    title: popconfirmTitle,
                    description: popconfirmDescription,
                  },
                  modalFuncProps: {
                    ...delModalConfirmProps,
                    title: modalConfirmTitle,
                    content: modalConfirmContent,
                    onOk: () => {
                      handleDelete([getRecordKey(record)], record);
                      delModalConfirmProps?.onOk?.();
                    },
                  },
                });
                renderDom.splice(btnIndex, 0, delDom);
              }

              //数组的话外面包一个 Space 组件
              return Array.isArray(renderDom) ? (
                <Space {...spaceProps}>{renderDom}</Space>
              ) : (
                renderDom
              );
            };
          }
        },
      );
    });
  };

  useEffect(() => {
    if (innerRef.current) {
      const exportColumns = filteExportCols(
        patchHideInSearch(columns, defaultHideInSearch).filter(
          (col) => col.type !== 'form',
        ),
      );

      // 多语言
      const defaultFilename =
        `${name}${locale?.tableTitleAfter}` || locale?.exportFilename;

      innerRef.current.export = (rows, ExcelJS, options = {}) =>
        exportTable(exportColumns, rows, ExcelJS, {
          ...options,
          filename: options.filename || defaultFilename,
        });
    }
  }, [columns, name]);

  useEffect(() => {
    const tableReload = () => {
      getActionRef().current?.reload();
    };

    /** 注册一个事件用于 reload 表格; 这对于一些已缓存的页面比较有用, 在其它页面可以控制刷新表格 */
    document.addEventListener('@proTableReload', tableReload);

    return () => {
      document.removeEventListener('@proTableReload', tableReload);
    };
  }, []);

  return (
    <TableWrapper noPadding={noPadding}>
      <AntProTable
        rowKey={rowKey}
        headerTitle={getHeaderTitle()}
        actionRef={getActionRef()}
        columns={patchRender(patchHideInSearch(columns, defaultHideInSearch), {
          innerRef,
          spaceProps: optionColumnSpaceProps,
        }).filter((col) => col.type !== 'form')}
        request={patchRequest()}
        rowSelection={getRowSelection()}
        tableAlertOptionRender={
          tableAlertOptionRender === false ? false : getTableAlertOptionRender
        }
        options={options}
        {...restTableProps}
      />
      <ModalForm
        title={title}
        innerRef={innerRef}
        //@ts-ignore render 方法在 table 和 form 上的使用方法稍有不同，使用时需注意，最好两端分开用 render
        columns={filteFormCols(formColumns || columns)}
        onOpen={selfOnOpen}
        onFinish={onFinish}
        {...modalFormRestProps}
      />
      {contextHolder}
      {modalContextHolder}
    </TableWrapper>
  );
};

export default ProTable;

// 用于生成api文档
/* istanbul ignore next */
export const MyProTableSelfTypeComponent: React.FC<MyProTableSelfType> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const MyProTableOriginTypeComponent: React.FC<
  MyProTableOriginType
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const InnerRefTypeComponent: React.FC<InnerRefType> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const TableAlertOptionTypeComponent: React.FC<
  TableAlertOptionType
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const TableColumnTypeBaseComponent: React.FC<
  TableColumnTypeBase<any, 'text'>
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const TableColumnSelfTypeComponent: React.FC<
  TableColumnSelfType<any, 'text'>
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const TableColumnOriginTypeComponent: React.FC<
  TableColumnOriginType<any, 'text'>
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const EnableDeleteTypeComponent: React.FC<EnableDeleteType> = () => {
  return null;
};
