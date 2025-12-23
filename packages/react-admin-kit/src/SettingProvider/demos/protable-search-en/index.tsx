import { SettingProvider } from 'react-admin-kit';
import enUSRak from 'react-admin-kit/locale/en_US';
import TableDemo from '../../../ProTable/demos/basic-en';

const Demo = () => {
  return (
    <SettingProvider
      locale={enUSRak}
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
