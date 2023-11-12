import { SettingProvider } from 'react-admin-kit';

import Example from '@/ProTable/demos/basic';

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
        confirmModalType: 'modal',
        confirmModalProps: { title: '定制的title' },
        tableAlertOption: {
          deleteProps: {
            title: (n) => `选择了${n}`,
          },
        },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default Basic;
