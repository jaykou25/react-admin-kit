import { useEffect } from 'react';

/**
 * 模拟表单中的一个简单控件
 */
const SimpleComponent = (props: {
  value?: string | number;
  onChange?: (val: any) => void;
  testid?: string;
}) => {
  const { value = '' as any, onChange, testid } = props;

  // 确保组件挂载时触发 onChange
  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <div>
      <span data-testid={testid || 'display-value'}>{value}</span>
    </div>
  );
};

export default SimpleComponent;
