import Demo from '../../../../packages/react-admin-kit/src/ModalForm/cases/on-finish';
import Demo2 from '../../../../packages/react-admin-kit/src/SettingProvider/cases/schema-form-validate-message';

import { ConfigProvider, theme } from 'antd';
import { Button } from '@jay.kou/rak-ssr';

const UnitTest = () => {
  return (
    <>
      <div>
        <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
          <Button>@jay.kou/rak-ssr</Button>
        </ConfigProvider>
      </div>
    </>
  );
};

export default UnitTest;
