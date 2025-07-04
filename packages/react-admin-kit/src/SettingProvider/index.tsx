import {
  FormUploadContext,
  ModalFormContext,
  ProTableContext,
  SchemaFormContext,
} from './context';
import {
  ModalSettingProps,
  SchemaFormSettingProps,
  SettingProviderProps,
} from './types';

const SettingProvider = (props: SettingProviderProps) => {
  const {
    proTableSetting,
    modalFormSetting,
    schemaFormSetting,
    formUploadSetting,
    children,
  } = props;

  return (
    <ProTableContext.Provider value={proTableSetting}>
      <ModalFormContext.Provider value={modalFormSetting}>
        <SchemaFormContext.Provider value={schemaFormSetting}>
          <FormUploadContext.Provider value={formUploadSetting}>
            {children}
          </FormUploadContext.Provider>
        </SchemaFormContext.Provider>
      </ModalFormContext.Provider>
    </ProTableContext.Provider>
  );
};

export default SettingProvider;

// 用于生成api文档
/* istanbul ignore next */
export const SchemaFormSettingPropsType: React.FC<
  SchemaFormSettingProps
> = () => {
  return null;
};

// 用于生成api文档
/* istanbul ignore next */
export const ModalSettingPropsType: React.FC<ModalSettingProps> = () => {
  return null;
};
