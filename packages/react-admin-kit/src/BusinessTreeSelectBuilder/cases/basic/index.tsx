import { useState } from 'react';
import { Button } from 'antd';
import BusinessTreeSelectBuilder from '../../index';

// Mock API function
const mockApi = async (params) => {
  return [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];
};

const BusinessTreeSelect = BusinessTreeSelectBuilder({
  apis: [
    {
      type: 'basic',
      api: mockApi,
    },
  ],
  defaultProps: {
    placeholder: 'Please select',
  },
});

const Basic = ({ onChange }) => {
  const [value, setValue] = useState();

  const handleChange = (val, option) => {
    setValue(val);
    if (onChange) {
      onChange(val, option);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <BusinessTreeSelect
          data-testid="basic-select"
          type="basic"
          value={value}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: 16 }} data-testid="nonexistent-select">
        <BusinessTreeSelect type="nonexistent" onChange={handleChange} />
      </div>

      <Button data-testid="clear" onClick={() => setValue(undefined)}>
        Clear
      </Button>
    </div>
  );
};

export default Basic;
