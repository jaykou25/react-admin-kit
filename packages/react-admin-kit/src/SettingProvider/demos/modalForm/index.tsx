import Example from '../../../ModalForm/demos/basic';
import { SettingProvider } from 'react-admin-kit';

const ModalDemo = () => {
  return (
    <SettingProvider
      modalFormSetting={{
        formProps: { layout: 'horizontal', labelCol: { span: 4 } },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default ModalDemo;
