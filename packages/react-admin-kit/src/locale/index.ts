export type LocaleType = {
  tableTitleAfter?: string;
  formTypeNew?: string;
  formTypeEdit?: string;
  formTypeRead?: string;
  exportFilename?: string;
  delBtnText?: string;
  delPopconfirmTitle?: string;

  delModalConfirmTitle?: string;
  delModalConfirmContent?: string;

  alertDelBtnText?: string;
  alertDelPopconfirmTitle?: (rowKeys: any[]) => string;
  alertDelModalConfirmTitle?: string;
  alertDelModalConfirmContent?: (rowKeys: any[]) => string;
  confirmOnCloseTitle?: string;
  confirmOnCloseContent?: string;
};
