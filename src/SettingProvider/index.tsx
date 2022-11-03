import { FormUploadContext, ModalFormContext, ProTableContext, SchemaFormContext } from './context';
import { SettingProviderProps } from './types';

const SettingProvider = (props: SettingProviderProps) => {
  const { proTableSetting, modalFormSetting, schemaFormSetting, formUploadSetting, children } =
    props;

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
