import produce from 'immer';
import { Component, createRef, MutableRefObject } from 'react';
import type { FormColumnType } from '../SchemaForm/types';
import type { InnerRefType, MyProTableType, TableColumnType } from './types';
import type { ProTableProps } from '@ant-design/pro-table';

import AntProTable from '@ant-design/pro-table';
import { message, Popconfirm, Space } from 'antd';
import LinkButton from '../LinkButton';
import ModalForm from '../ModalForm';
import { filterExportCols } from './filterCols';
import { handleRequestParams } from './utils';

import cs from 'classnames';
import { ActionRefType } from '..';
import { ProTableContext } from '../SettingProvider/context';
import { exportAntTableToExcel } from '../utils/exceljs';
import ModalConfirm from './components/ModalConfirm';

import { CreateBaseInner } from '../context';
import { mergeOptions, myMergeBoolean, myMergeOptions } from '../utils/index';
import { normalizeTree } from '../utils/treeUtil';

// todo: 改成支持 ssr
// import './styles.css';

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
  private selfInnerRef;
  private selfActionRef;
  private baseInnerObj;

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

    this.selfInnerRef = createRef<InnerRefType>();
    this.selfActionRef = createRef<ActionRefType>();

    this.baseInnerObj = CreateBaseInner();

    // @ts-ignore
    this.getInnerRef().current = {};
    this.getInnerRef().current.data = this.baseInnerObj.data;
    this.getInnerRef().current.setData = this.baseInnerObj.setData;
  }

  componentDidMount() {
    /** 注册一个事件用于 reload 表格; 这对于一些已缓存的页面比较有用, 在其它页面可以控制刷新表格 */
    document.addEventListener('reload', this.tableReload);
  }

  componentWillUnmount() {
    document.removeEventListener('reload', this.tableReload);
  }

  tableReload = () => {
    const currentActionRef = this.props.actionRef || this.selfActionRef;

    currentActionRef.current?.reload();
  };

  getInnerRef = (): MutableRefObject<InnerRefType> => {
    return this.props.innerRef || this.selfInnerRef;
  };

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

  /**
   * 增强列功能
   * 1. 给 option 列增加 innerRef
   * 2. option 列的 renderDom 包裹 Space 组件
   * @param cols
   * @returns cols
   */
  patchColumn = ($cols): any => {
    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { optionColumnSpaceProps: globalSpaceProps } = setting;

    const { optionColumnSpaceProps = {} } = this.props;

    const innerRef = this.getInnerRef();

    const mergedSpaceProps = mergeOptions(
      { size: 'small' },
      globalSpaceProps,
      optionColumnSpaceProps,
    );

    return produce($cols, (cols) => {
      cols.forEach(
        (col: Omit<FormColumnType, 'render'> & TableColumnType['render']) => {
          const { render } = col;

          // 给valueType为option列的render增加ref参数
          if (col.valueType === 'option' && render) {
            col.render = (text, record, index, action) => {
              const renderDom = render(text, record, index, action, innerRef);

              //数组的话外面包一个 Space 组件
              return Array.isArray(renderDom) ? (
                <Space {...mergedSpaceProps}>{renderDom}</Space>
              ) : (
                renderDom
              );
            };
          }
        },
      );
    });
  };

  enableDelete = ($cols): any => {
    /**
     * 全局默认设置
     */
    const setting = this.context || {};
    const { confirmModalType: globalType, confirmModalProps: globalProps } =
      setting;

    // props
    const {
      rowKey = 'id',
      delPermission,
      delFunction,
      confirmModelType = globalType || 'popconfirm',
      confirmModalProps = {},
    } = this.props;

    const mergedProps = mergeOptions(globalProps, confirmModalProps);

    const hasDelPermission = delPermission ? delPermission() : true;

    // state
    const { delLoading } = this.state;

    // 使用produce是为了改变columns的引用, 从而可以重渲染
    return produce($cols, (cols) => {
      cols.forEach((col: FormColumnType) => {
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
            // 增强 rowKey 为函数
            // @ts-ignore
            const key: string =
              typeof rowKey === 'function' ? rowKey(record) : rowKey;

            // 增强 enableDelete 为函数
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
              const { title = '确定删除吗?', ...rest } = mergedProps;

              if (confirmModelType === 'modal') {
                deleteDom = (
                  <ModalConfirm
                    key={renderDom.length + 1}
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
  getRowSelection = (): ProTableProps<any, any>['rowSelection'] => {
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
    const {
      rowKey = 'id',
      delFunction,
      rowSelection = {},
      actionRef = this.selfActionRef,
    } = this.props;

    //@ts-ignore
    const key: string = typeof rowKey === 'function' ? rowKey(record) : rowKey;

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
          if (record[key] && rowSelection) {
            const ids = (selectedIds || []).filter(
              (_key) => _key !== record[key],
            );

            if (rowSelection.selectedRowKeys) {
              // @ts-ignore onChange 应有三个参数
              if (rowSelection.onChange) rowSelection.onChange(ids);
            } else {
              this.setState({ selectedRowKeys: ids });
            }
          }

          const action = actionRef.current;
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
    const { tableAlertOption: globalOption } = setting;

    // props
    const {
      tableAlertOption = {},
      columns,
      name,
      delFunction,
      delPermission,
      confirmModelType,
    } = this.props;

    // 合并全局设置和组件传入的属性, 后者传入的优先级高
    const mergedOption = mergeOptions(globalOption, tableAlertOption);

    // tableAlertOption
    const {
      hideDelete = false,
      enableExport = false,
      actions: alertActions = [],
      exportName,
      deleteProps,
    } = mergedOption;

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

  selfOnOpen = (formType, formRef, formData) => {
    this.setState({ formType });

    if (this.props.onOpen) {
      this.props.onOpen(formType, formRef, formData);
    }
  };

  render() {
    const {
      rowKey = 'id',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      name,
      columns,
      options,
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
      defaultHideInSearch,
      // 仅仅是移除掉它们, 不让它们传给 AntProTable
      confirmModalProps,
      confirmModelType,
      optionColumnSpaceProps,
      actionRef,
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
      options: globalOptions,
      defaultHideInSearch: globalDefaultHideInSearch,
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

    /**
     * 处理 options 属性的合并
     * 1. 组件属性为 false, 优先级高
     * 2. 组件属性为 undefined, 走全局
     *
     */
    const mergedOptions = myMergeOptions(globalOptions, options, false);

    const mergedDefaultHideInSearch = myMergeBoolean(
      globalDefaultHideInSearch,
      defaultHideInSearch,
      false,
    );

    return (
      <>
        {/* @ts-ignore */}
        <AntProTable
          className={cs(
            className,
            optionColSpaceSize === 'small' && 'myTableSmallOptionCol',
            noPadding && 'rak-protable-no-padding',
          )}
          rowKey={rowKey}
          headerTitle={this.getTitle()}
          // @ts-ignore
          columns={this.patchColumn(
            this.enableDelete(
              normalizeTree(columns, (_item) => {
                const item = { ..._item };
                if (item.hideInSearch === undefined) {
                  item.hideInSearch = mergedDefaultHideInSearch;
                }

                if (item.type === 'search' || item.valueType === 'dependency') {
                  item.search = true;
                  item.hideInSearch = false;
                  item.hideInTable = true;
                  item.hideInForm = true;
                }

                return item;
              }),
            ),
          ).filter((col) => {
            if (col.type === 'form') return false;

            return true;
          })}
          options={mergedOptions}
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
                        const innerRef = this.getInnerRef();
                        if (innerRef) {
                          innerRef.current.total = res.total;
                          innerRef.current.dataSource = res.data;
                          innerRef.current.params = handleRequestParams(
                            params,
                            sort,
                          );
                        }

                        resolve(res);
                      })
                      .catch((err) => reject(err));
                  });
                }
              : undefined
          }
          actionRef={actionRef || this.selfActionRef}
          {...tableRest}
        />
        <ModalForm
          innerRef={this.getInnerRef()}
          title={this.getModalTitle()}
          // @ts-ignore
          columns={(formColumns || columns).filter((col) => {
            if (col.type === 'form') return true;

            if (!col.type) return true;

            return false;
          })}
          onFinish={onFinish}
          onOpen={this.selfOnOpen}
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
