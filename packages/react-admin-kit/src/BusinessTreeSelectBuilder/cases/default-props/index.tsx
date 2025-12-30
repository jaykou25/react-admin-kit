import BusinessTreeSelectBuilder from '../../index';

// Mock API function
const mockApi = async () => {
  return [
    { id: 1, name: 'Default Props Option 1' },
    { id: 2, name: 'Default Props Option 2' },
  ];
};

const BusinessTreeSelect = BusinessTreeSelectBuilder({
  apis: [
    {
      type: 'with-default',
      api: mockApi,
      defaultProps: {
        placeholder: 'API Default Placeholder',
        disabled: true,
      },
    },
  ],
  defaultProps: {
    placeholder: 'Builder Default Placeholder',
    size: 'large',
  },
});

const DefaultProps = () => {
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <BusinessTreeSelect
          data-testid="default-props-select"
          type="with-default"
        />
      </div>
    </div>
  );
};

export default DefaultProps;
