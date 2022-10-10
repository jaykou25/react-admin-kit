import { Component } from 'react';
import produce from 'immer';
import type { MyProColumnType, MyProTableType } from './types';

import ModalForm from '../ModalForm';
import AntProTable from '@ant-design/pro-table';
import { message, Popconfirm, Space } from 'antd';
import LinkButton from '../LinkButton';
import { exportAntTableDataToExcel } from './utils/excel';
import { filterExportCols } from './filterCols';
import { handleRequestParams } from './utils';

import styles from './styles.less';
import cs from 'classnames';
import { handleValuesForEdit, handleValuesForSubmit } from './utils/form';

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

  constructor(props) {
    super(props);

    this.state = {
      formVisible: false,
      formType: '',
      formData: {},

      delLoading: false,
      selectedRowKeys: [],
    };

    this.targetId = '';

    if (props.innerRef) {
      props.innerRef.current = {};
      props.innerRef.current.openModal = this.openModal;
      props.innerRef.current.setInnerRef = this.setInnerRef;
    }
  }

  componentDidMount() {}

  getTitle = () => {
    const { name, toolbar = {} } = this.props;
    const { title } = toolbar;

    return title || `${name}列表` || '';
  };

  getModalTitle = () => {
    const { name = '' } = this.props;
    const { formType } = this.state;

    return `${FORM_TYPE_MAP[formType]}${name}` || '';
  };

  setInnerRef = (newValue) => {
    if (this.props.innerRef) {
      const values = this.props.innerRef.current;
      this.props.innerRef.current = { ...values, ...newValue };
    }
  };

  openModal = (type = 'new', _initialData?: any) => {
    const initialData = handleValuesForEdit(_initialData || {}, this.props.columns);
    this.setInnerRef({ formType: type, formData: initialData || {} });
    this.setState({ formVisible: true, formType: type, formData: initialData || {} });
  };

  patchColumn = ($cols) => {
    const { innerRef } = this.props;
    return produce($cols, (cols) => {
      cols.forEach((col: MyProColumnType) => {
        const { renderFormItem, render } = col;

        // 给renderFormItem增加ref参数
        if (renderFormItem) {
          col.renderFormItem = (a, b, c) => renderFormItem(a, b, c, innerRef);
        }

        // 给valueType为optione列的render增加ref参数
        if (col.valueType === 'option' && render) {
          col.render = (text, record, index, actionRef) =>
            render(text, record, index, actionRef, innerRef);
        }
      });
    });
  };

  enableDelete = ($cols) => {
    // props
    const { rowKey = 'id', delPermission, delFunction } = this.props;

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
              typeof enableDelete === 'function' ? enableDelete(record, index) : {};
            // enabledDelete为true时的默认值
            const { disabled = false, visible = true, danger } = $enableDelete;

            const renderDom = render(text, record, index, actionRef, innerRef);

            if (Array.isArray(renderDom) && visible) {
              const deleteDom = (
                <Popconfirm
                  key={renderDom.length + 1}
                  title="确定删除吗?"
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
                    删除
                  </LinkButton>
                </Popconfirm>
              );

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
        onChange: (keys) => this.setState({ selectedRowKeys: keys }),
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
            const ids = (selectedIds || []).filter((_key) => _key !== record[key]);
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
            const deleteRecordLength = record.id ? 1 : (selectedIds || []).length;
            const isCurrentEmpty = total - deleteRecordLength === (current - 1) * pageSize;
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
    selectedRows,
  }) => {
    // state
    const { delLoading } = this.state;

    // props
    const { tableAlertOption = {}, columns, name, delFunction, delPermission } = this.props;
    // tableAlertOption
    const {
      hideDelete = false,
      hideExport = true,
      actions: alertActions = [],
      exportName,
    } = tableAlertOption;

    const hasDelPermission = delPermission ? delPermission() : true;

    return (
      <Space size={'middle'}>
        {/* 前端导出 */}
        {!hideExport && (
          <LinkButton
            onClick={() => {
              exportAntTableDataToExcel(
                selectedRows,
                filterExportCols(columns),
                exportName || `${name || '导出'}列表`,
              );
              onCleanSelected();
            }}
          >
            导出所选
          </LinkButton>
        )}

        {/* 多选删除 */}
        {!hideDelete && delFunction && hasDelPermission && (
          <Popconfirm
            overlayStyle={{ width: '180px' }}
            title={`确定删除${_selectedRowKeys.length}条数据吗?`}
            onConfirm={() => {
              this.handleDelete(_selectedRowKeys, {}, onCleanSelected);
            }}
            okButtonProps={{ loading: delLoading }}
          >
            <LinkButton loading={delLoading}>批量删除</LinkButton>
          </Popconfirm>
        )}

        {alertActions}

        <a onClick={onCleanSelected}>取消选择</a>
      </Space>
    );
  };

  render() {
    const {
      rowKey = 'id',
      name,
      columns,
      options = false,
      pagination = {},
      formColumns,
      scroll = { x: '100%' },
      onFinish,
      tableAlertOption,
      rowSelection,
      sticky = true,
      className,
      optionColSpaceSize,
      request,
      modalProps = {},
      ...rest
    } = this.props;

    // state
    const { formVisible, formType, formData } = this.state;

    return (
      <>
        <AntProTable
          className={cs(className, optionColSpaceSize === 'small' && styles.myTableSmallOptionCol)}
          rowKey={rowKey}
          headerTitle={this.getTitle()}
          // @ts-ignore
          columns={this.enableDelete(this.patchColumn(columns))}
          options={options}
          pagination={pagination}
          scroll={scroll}
          tableAlertOptionRender={this.tableAlertOptionRender}
          rowSelection={this.getRowSelection()}
          sticky={sticky}
          request={
            request
              ? (params, sort, filter) => {
                  return new Promise((resolve, reject) => {
                    request(handleRequestParams(params, sort), sort, filter)
                      .then((res) => {
                        this.setInnerRef({
                          total: res.total,
                          data: res.data,
                          params: handleRequestParams(params, sort),
                        });
                        resolve(res);
                      })
                      .catch((err) => reject(err));
                  });
                }
              : undefined
          }
          {...rest}
        />
        <ModalForm
          open={formVisible}
          onCancel={() => this.setState({ formVisible: false })}
          title={this.getModalTitle()}
          // @ts-ignore
          columns={this.patchColumn(formColumns || columns)}
          onFinish={(values) =>
            onFinish && onFinish(handleValuesForSubmit(values), formType, formData)
          }
          formProps={{
            initialValues: formData,
          }}
          {...modalProps}
        />
      </>
    );
  }
}

export default ProTable;
