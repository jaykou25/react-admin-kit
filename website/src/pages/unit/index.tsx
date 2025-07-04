import Demo from '../../../../packages/react-admin-kit/src/ModalForm/cases/on-finish';
import Demo2 from '../../../../packages/react-admin-kit/src/SettingProvider/cases/schema-form-validate-message';

const UnitTest = () => {
  return (
    <>
      <Demo
        onFinish={() =>
          new Promise((r, reject) =>
            setTimeout(() => reject(new Error('on')), 20000),
          )
        }
        onClick={(innerRef) => innerRef.current.openModal()}
      />
      <Demo2 />
    </>
  );
};

export default UnitTest;
