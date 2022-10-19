import { SettingProvider } from 'react-admin-kit';

import Example from '../../coreComponents/ProTable/basic';

const Basic = () => {
  return (
    <SettingProvider
      proTableSetting={{
        size: 'middle',
        searchConfig: { defaultCollapsed: false },
        modalProps: { width: 680 },
        formProps: {
          grid: true,
          rowProps: { gutter: [24, 0] },
          colProps: { span: 12 },
        },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default Basic;
