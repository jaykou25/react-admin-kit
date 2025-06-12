import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import OuterForm from '../OuterForm';

const MyForm = (props: any) => {
  const { form, formRef: propsFormRef } = props;

  const formInstanceRef = useRef<any>(form);
  const formRef = useRef<any>(() => {
    console.log('MyForm: formRef called');
  });

  const [forceRender, setForceRender] = useState(0);

  // useImperativeHandle(
  //   propsFormRef,
  //   () => {
  //     console.log('MyForm: useImperativeHandle called');
  //     return formInstanceRef.current;
  //   },
  //   [formInstanceRef.current],
  // );

  useEffect(() => {
    if (formInstanceRef.current) {
      const { setFieldsValue, ...rest } = formInstanceRef.current;

      console.log('MyForm: 已包装');

      formInstanceRef.current.setFieldsValue = (values: any) => {
        console.log('setFieldsValue 包装过哦:', values);
        setFieldsValue(values);
      };

      formInstanceRef.current.hi = 'jay';

      // setForceRender((prev) => prev + 1);
    }
  }, []);

  return (
    <div>
      <OuterForm formRef={propsFormRef} form={formInstanceRef.current} />
    </div>
  );
};

export default MyForm;
