import { SettingProvider } from 'react-admin-kit';
import TableDemo from '../../../ProTable/demos/basic';

const Demo = () => {
  return (
    <SettingProvider
      proTableSetting={{
        size: 'small',
      }}
    >
      <TableDemo />
    </SettingProvider>
  );
};

export default Demo;
