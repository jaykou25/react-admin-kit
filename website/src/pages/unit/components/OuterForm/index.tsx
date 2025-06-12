import { useImperativeHandle, useRef } from 'react';

const OuterForm = (props: any) => {
  const { formRef: propsFormRef, form } = props;
  console.log('OuterForm: normal', { form });

  const formRef = useRef<any>(form);

  useImperativeHandle(
    propsFormRef,
    () => {
      console.log('OuterForm: useImperativeHandle called', formRef.current);
      return formRef.current;
    },
    [formRef.current],
  );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-500">This is the outer form component.</p>
    </div>
  );
};

export default OuterForm;
