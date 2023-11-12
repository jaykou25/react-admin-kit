import produce from 'immer';
import { Component, createRef } from 'react';
import type { InnerRefType, MyProColumnType, MyProTableType } from './types';

import AntProTable from '@ant-design/pro-table';
import { message, Popconfirm, Space } from 'antd';
import LinkButton from '../LinkButton';
import ModalForm from '../ModalForm';
import { filterExportCols } from './filterCols';
import { handleRequestParams } from './utils';

import cs from 'classnames';
import { ModalFormInnerRefType } from '..';
import { FormType } from '../ModalForm/types';
import { ProTableContext } from '../SettingProvider/context';
import { exportAntTableToExcel } from '../utils/exceljs';
import ModalConfirm from './components/ModalConfirm';
import './styles.css';

/**
 * 表单类型的映射
 */
export const FORM_TYPE_MAP = {
  new: '新增',
  edit: '编辑',
  read: '查看',
};

class ProTable extends Component<MyProTableType, any> {
  private targetId;
  private modalFormRef;
  private selfInnerRef;

  static contextType: any = ProTableContext;
  context!: React.ContextType<typeof ProTableContext>;

  constructor(props) {
    super(props);

    this.state = {
      formType: '',

      delLoading: false,
      selectedRowKeys: [],
      selectedRows: [],
    };

    this.targetId = '';
    this.modalFormRef = createRef<ModalFormInnerRefType>();

    this.selfInnerRef = createRef<InnerRefType>();

    if (props.innerRef) {
      props.innerRef.current = {};
      props.innerRef.current.data = {};
      props.innerRef.current.openModal = this.openModal;
      props.innerRef.current.setData = this.setData;
    }
  }

  componentDidMount() {}

  getTitle = () => {
    const { name, toolbar = {} } = this.props;
    const { title } = toolbar;

    if (title) return title;

    if (name) return `${name}列表`;

    return false;
  };

  getModalTitle = () => {
    const { name = '' } = this.props;
    const { formType } = this.state;

    return `${FORM_TYPE_MAP[formType]}${name}` || '';
  };

  // 给ref上赋值
  setData = (newValue) => {
    if (this.props.innerRef?.current) {
      const values = this.props.innerRef.current.data;
      this.props.innerRef.current.data = { ...values, ...newValue };
    }
  };

  openModal = (type: FormType = 'new', initialData?: any) => {
    this.setState({ formType: type });
    this.modalFormRef.current?.openModal(type, initialData);
  };

  patchColumn = ($cols) => {
    const { innerRef = this.selfInnerRef } = this.props;

    return produce($cols, (cols) => {
      cols.forEach((col: MyProColumnType) => {
        const { renderFormItem, render, fieldProps } = col;

        // 给fieldProps增加ref参数
        if (fieldProps && typeof fieldProps === 'function') {
          col.fieldProps = (form) => fieldProps(form, innerRef);
        }

        // 给renderFormItem增加ref参数
        if (renderFormItem) {
          col.renderFormItem = (a, b, c) => renderFormItem(a, b, c, innerRef);
        }

        // 给valueType为option列的render增加ref参数
        if (col.valueType === 'option' && render) {
          col.render = (text, record, index, actionRef) =>
            render(text, record, index, actionRef, innerRef);
        }
      });
    });
  };

  enableDelete = ($cols) => {
    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { confirmModalType: defaultType, confirmModalProps: defaultProps } =
      setting;

    // props
    const {
      rowKey = 'id',
      delPermission,
      delFunction,
      confirmModelType = defaultType || 'popconfirm',
      confirmModalProps = {},
    } = this.props;

    const mergeProps = { ...defaultProps, ...confirmModalProps };

    const hasDelPermission = delPermission ? delPermission() : true;

    // state
    const { delLoading } = this.state;

    // 使用produce是为了改变columns的引用, 从而可以重渲染
    return produce($cols, (cols) => {
      cols.forEach((col: MyProColumnType) => {
        const { render, enableDelete = false } = col;

        // 如果列上开启了删除enableDelete, 复写render
        if (
          col.valueType === 'option' &&
          delFunction &&
          hasDelPermission &&
          enableDelete &&
          render
        ) {
          col.render = (text, record, index, actionRef, innerRef) => {
            const key = typeof rowKey === 'function' ? rowKey(record) : rowKey;
            const $enableDelete =
              typeof enableDelete === 'function'
                ? enableDelete(record, index)
                : {};
            // enabledDelete为true时的默认值
            const {
              disabled = false,
              visible = true,
              danger,
              btnText = '删除',
            } = $enableDelete;

            const renderDom = render(text, record, index, actionRef, innerRef);

            if (Array.isArray(renderDom) && visible) {
              let deleteDom;

              // 弹框的默认属性
              const { title = '确定删除吗?', ...rest } = mergeProps;

              if (confirmModelType === 'modal') {
                deleteDom = (
                  <ModalConfirm
                    title={title}
                    {...rest}
                    onOk={() => {
                      this.handleDelete([record[key]], record);
                    }}
                  >
                    <LinkButton
                      disabled={disabled}
                      onClick={(e) => e.stopPropagation()}
                      loading={delLoading && record[key] === this.targetId}
                      danger={danger}
                    >
                      {btnText}
                    </LinkButton>
                  </ModalConfirm>
                );
              } else {
                deleteDom = (
                  <Popconfirm
                    key={renderDom.length + 1}
                    title={title}
                    {...rest}
                    onConfirm={(e) => {
                      e?.stopPropagation();
                      this.handleDelete([record[key]], record);
                    }}
                    onCancel={(e) => e?.stopPropagation()}
                  >
                    <LinkButton
                      disabled={disabled}
                      onClick={(e) => e.stopPropagation()}
                      loading={delLoading && record[key] === this.targetId}
                      danger={danger}
                    >
                      {btnText}
                    </LinkButton>
                  </Popconfirm>
                );
              }
              renderDom.push(deleteDom);
            }
            return renderDom;
          };
        }
      });
    });
  };

  // 分受控和非受控
  getRowSelection = () => {
    // props
    const { rowSelection } = this.props;

    //state
    const { selectedRowKeys } = this.state;

    if (rowSelection && !rowSelection.selectedRowKeys) {
      return {
        ...rowSelection,
        selectedRowKeys,
        onChange: (keys, selectedRows) =>
          this.setState({ selectedRowKeys: keys, selectedRows }),
      };
    }

    return rowSelection;
  };

  handleDelete = (
    selectedIds: (string | number)[],
    record: Record<string, any>,
    callback?: any,
  ) => {
    const { rowKey = 'id', delFunction, rowSelection = {} } = this.props;
    const key = typeof rowKey === 'function' ? rowKey(record) : rowKey;

    this.setState({ delLoading: true });
    if (record[key]) {
      this.targetId = record[key];
    }

    if (delFunction) {
      delFunction(selectedIds, record)
        .then(() => {
          message.success('删除成功!');

          if (callback) callback();

          // bugfix: 如果在多选选中后, 点的行上的删除, 不是点的批量删除, 删除后要去除掉selectedKeys
          if (record[key]) {
            const ids = (selectedIds || []).filter(
              (_key) => _key !== record[key],
            );
            if (rowSelection.selectedRowKeys) {
              if (rowSelection.onChange) rowSelection.onChange(ids);
            } else {
              this.setState({ selectedRowKeys: ids });
            }
          }

          const action = this.props.actionRef?.current;
          if (action) {
            // bugfix: 假如数据一共有两页, 并且第二页只有一条数据, 删除该数据后应该自动切到上一页
            const { current, total, pageSize } = action.pageInfo;
            // 判断当前是否为空
            const deleteRecordLength = record.id
              ? 1
              : (selectedIds || []).length;
            const isCurrentEmpty =
              total - deleteRecordLength === (current - 1) * pageSize;
            if (current > 1 && isCurrentEmpty) {
              action.setPageInfo({ current: current - 1 });
              return;
            }

            action.reload();
          }
        })
        .finally(() => {
          this.setState({ delLoading: false });
        });
    }
  };

  tableAlertOptionRender = ({
    selectedRowKeys: _selectedRowKeys,
    onCleanSelected,
  }) => {
    // state
    const { delLoading, selectedRows } = this.state;

    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { tableAlertOption: defaultOption } = setting;

    // props
    const {
      tableAlertOption = {},
      columns,
      name,
      delFunction,
      delPermission,
      confirmModelType,
    } = this.props;

    // tableAlertOption
    const {
      hideDelete = false,
      enableExport = false,
      actions: alertActions = [],
      exportName,
      deleteProps,
    } = tableAlertOption;

    const { btnText = '批量删除', title, ...rest } = deleteProps || {};

    const hasDelPermission = delPermission ? delPermission() : true;

    /* 多选删除 */
    const getDelDom = () => {
      if (!hideDelete && delFunction && hasDelPermission) {
        const defaultTitle = title
          ? title(_selectedRowKeys.length)
          : `确定删除${_selectedRowKeys.length}条数据吗?`;

        if (confirmModelType === 'modal') {
          return (
            <ModalConfirm
              title={defaultTitle}
              {...rest}
              onOk={() => {
                this.handleDelete(_selectedRowKeys, {}, onCleanSelected);
              }}
              okButtonProps={{ loading: delLoading }}
            >
              <LinkButton loading={delLoading}>{btnText}</LinkButton>
            </ModalConfirm>
          );
        } else {
          return (
            <Popconfirm
              overlayStyle={{ width: '180px' }}
              title={defaultTitle}
              {...rest}
              onConfirm={() => {
                this.handleDelete(_selectedRowKeys, {}, onCleanSelected);
              }}
              okButtonProps={{ loading: delLoading }}
            >
              <LinkButton loading={delLoading}>{btnText}</LinkButton>
            </Popconfirm>
          );
        }
      }
    };

    return (
      <Space size={'middle'}>
        {/* 前端导出 */}
        {enableExport && (
          <LinkButton
            onClick={() => {
              exportAntTableToExcel(
                filterExportCols(columns),
                selectedRows,
                exportName || `${name ? name + '列表' : ''}导出`,
              );
              onCleanSelected();
              console.log('exportclick', selectedRows);
            }}
          >
            导出所选
          </LinkButton>
        )}

        {/* 多选删除 */}
        {getDelDom()}

        {alertActions}

        <a onClick={onCleanSelected}>取消选择</a>
      </Space>
    );
  };

  render() {
    const {
      rowKey = 'id',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      name,
      columns,
      options = false,
      pagination = {},
      formColumns,
      scroll = { x: '100%' },
      onFinish,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      tableAlertOption,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      rowSelection,
      sticky = true,
      className,
      optionColSpaceSize,
      noPadding = false,
      search,
      request,
      onOpen,
      modalProps = {},
      formProps = {},
      // 仅仅是移除掉它们, 不让它们传给 AntProTable
      confirmModalProps,
      confirmModelType,
      ...rest
    } = this.props;

    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const {
      modalProps: settingModalProps = {},
      formProps: settingFormProps = {},
      searchConfig = {},
      // 仅仅是移除掉它们, 不让它们传给 AntProTable
      confirmModalType: a,
      confirmModalProps: b,
      tableAlertOption: c,
      ...restSetting
    } = setting;

    const tableRest = { ...restSetting, ...rest };
    const modalRest = { ...settingModalProps, ...modalProps };

    const defaultSearchConfig: any = {
      ...searchConfig,
      className: 'searchFormStyleFix',
    };

    return (
      <>
        <AntProTable
          className={cs(
            className,
            optionColSpaceSize === 'small' && 'myTableSmallOptionCol',
            noPadding && 'rak-protable-no-padding',
          )}
          rowKey={rowKey}
          headerTitle={this.getTitle()}
          // @ts-ignore
          columns={this.enableDelete(this.patchColumn(columns)).filter(
            (col) => {
              return col.type !== 'form';
            },
          )}
          options={options}
          pagination={pagination}
          scroll={scroll}
          tableAlertOptionRender={this.tableAlertOptionRender}
          rowSelection={this.getRowSelection()}
          sticky={sticky}
          search={
            search === false ? false : { ...defaultSearchConfig, ...search }
          }
          request={
            request
              ? (params, sort, filter) => {
                  return new Promise((resolve, reject) => {
                    request(handleRequestParams(params, sort), sort, filter)
                      .then((res) => {
                        if (this.props.innerRef?.current) {
                          this.props.innerRef.current.total = res.total;
                          this.props.innerRef.current.dataSource = res.data;
                          this.props.innerRef.current.params =
                            handleRequestParams(params, sort);
                        }

                        resolve(res);
                      })
                      .catch((err) => reject(err));
                  });
                }
              : undefined
          }
          {...tableRest}
        />
        <ModalForm
          innerRef={this.modalFormRef}
          title={this.getModalTitle()}
          // @ts-ignore
          columns={this.patchColumn(formColumns || columns).filter((col) => {
            return col.type !== 'table';
          })}
          onFinish={onFinish}
          onOpen={onOpen}
          formProps={{
            ...settingFormProps,
            ...formProps,
          }}
          {...modalRest}
        />
      </>
    );
  }
}

export default ProTable;
