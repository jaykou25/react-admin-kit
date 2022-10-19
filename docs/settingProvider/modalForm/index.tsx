import { SettingProvider } from 'react-admin-kit';
import Example from '../../coreComponents/ModalForm/basic';

const ModalDemo = () => {
  return (
    <SettingProvider
      modalFormSetting={{ formProps: { layout: 'horizontal', labelCol: { span: 4 } } }}
    >
      <Example />
    </SettingProvider>
  );
};

export default ModalDemo;
