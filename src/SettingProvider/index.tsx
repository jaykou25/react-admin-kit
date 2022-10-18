import { ModalFormContext, ProTableContext } from './context';
import { SettingProviderProps } from './types';

const SettingProvider = (props: SettingProviderProps) => {
  const { proTableSetting, modalFormSetting, children } = props;

  return (
    <ProTableContext.Provider value={proTableSetting}>
      <ModalFormContext.Provider value={modalFormSetting}>{children}</ModalFormContext.Provider>
    </ProTableContext.Provider>
  );
};

export default SettingProvider;
