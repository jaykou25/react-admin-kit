import { LocaleType } from '.';

const locale: LocaleType = {
  // ProTable
  tableTitleAfter: ' List',
  formTypeNew: 'Create ',
  formTypeEdit: 'Edit ',
  formTypeRead: 'View ',
  exportFilename: 'Export List',
  delBtnText: 'Delete',

  // ProTable Delete Function
  delPopconfirmTitle: 'Confirm Delete?',

  delModalConfirmTitle: 'Confirm Action',
  delModalConfirmContent: `Are you sure you want to delete?`,

  delSuccessContent: 'Delete successful',

  alertDelBtnText: 'Batch Delete',
  alertDelPopconfirmTitle: (rowKeys) =>
    `Are you sure you want to delete ${rowKeys.length} items?`,

  alertDelModalConfirmTitle: 'Confirm Action',
  alertDelModalConfirmContent: (rowKeys) =>
    `Are you sure you want to delete ${rowKeys.length} items?`,

  // ModalForm
  confirmOnCloseTitle: 'Confirm Close',
  confirmOnCloseContent:
    'Form content has not been saved. Are you sure you want to close?',
};

export default locale;
