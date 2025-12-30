import BusinessSelectBuilder from '../../index';

// Mock API function
const mockApi = async () => {
  return {
    data: [
      { id: 1, name: 'Default Props Option 1' },
      { id: 2, name: 'Default Props Option 2' },
    ],
    total: 2,
  };
};

const BusinessSelect = BusinessSelectBuilder({
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
        <BusinessSelect
          data-testid="default-props-select"
          type="with-default"
        />
      </div>
    </div>
  );
};

export default DefaultProps;
