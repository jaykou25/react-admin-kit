import { LocaleType } from '.';

const locale: LocaleType = {
  // ProTable
  tableTitleAfter: '列表',
  formTypeNew: '新增',
  formTypeEdit: '编辑',
  formTypeRead: '查看',
  exportFilename: '导出列表',
  delBtnText: '删除',

  // ProTable 删除功能
  delPopconfirmTitle: '确认删除吗？',

  delModalConfirmTitle: '操作确认',
  delModalConfirmContent: `确认删除吗？`,

  alertDelBtnText: '批量删除',
  alertDelPopconfirmTitle: (rowKeys) => `确认删除${rowKeys.length}条数据吗？`,

  alertDelModalConfirmTitle: '操作确认',
  alertDelModalConfirmContent: (rowKeys) =>
    `确认删除${rowKeys.length}条数据吗？`,

  // ModalForm
  confirmOnCloseTitle: '确认关闭',
  confirmOnCloseContent: '表单项内容未保存, 是否确认关闭?',
};

export default locale;
