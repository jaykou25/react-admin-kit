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
        confirmModalProps: { title: '全局定制的title' },
        tableAlertOption: {
          deleteProps: {
            btnText: '批量关闭',
            title: (n) => `确认关闭${n}条吗?`,
          },
        },
        optionColumnSpaceProps: {
          size: 'small',
        },
        options: { density: false, reload: true, fullScreen: true },
      }}
    >
      <Example />
    </SettingProvider>
  );
};

export default Basic;
