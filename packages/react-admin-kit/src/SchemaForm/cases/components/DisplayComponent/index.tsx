import { useEffect } from 'react';

/**
 * 自定义展示组件，用于显示约定式数据的值和标签
 */
const DisplayComponent = (props: {
  value?: { value: string; label: string };
  onChange?: (val: any) => void;
  num?: number;
}) => {
  const { value = {} as any, onChange, num } = props;

  // 确保组件挂载时触发 onChange
  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <div>
      <span data-testid={num ? `display-value${num}` : 'display-value'}>
        {value.value}
      </span>
      <span data-testid={num ? `display-label${num}` : 'display-label'}>
        {value.label}
      </span>
    </div>
  );
};

export default DisplayComponent;
