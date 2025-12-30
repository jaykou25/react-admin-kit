import { SettingProvider } from 'react-admin-kit';
import enUSRak from 'react-admin-kit/locale/en_US';
import TableDemo from '../../../ProTable/demos/basic-en';

const Demo = () => {
  return (
    <SettingProvider
      locale={enUSRak}
      proTableSetting={{
        pagination: {
          hideOnSinglePage: true,
        },
      }}
    >
      <TableDemo />
    </SettingProvider>
  );
};

export default Demo;
