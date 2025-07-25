import { useRef } from 'react';
import Demo from 'react-admin-kit/SettingProvider/cases/protable-size';

const overrideSearchConfig = {
  defaultCollapsed: true,
  span: 8,
};

const UnitTest = () => {
  const innerRef = useRef();
  return (
    <>
      <div>
        <Demo size="large" />
      </div>
    </>
  );
};

export default UnitTest;
