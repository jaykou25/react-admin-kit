import { SettingProvider } from 'react-admin-kit';
import TableDemo from '../../../ProTable/demos/basic';

const Demo = () => {
  return (
    <SettingProvider
      proTableSetting={{
        search: {
          defaultCollapsed: false,
          span: 12,
        },
      }}
    >
      <TableDemo />
    </SettingProvider>
  );
};

export default Demo;
