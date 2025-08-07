import { useState } from 'react';
import { Button } from 'antd';
import BusinessSelectBuilder from '../../index';

// Mock API function
const mockApi = async (params) => {
  return {
    data: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    total: 3,
  };
};

// Mock pagination API function
const mockPaginationApi = async (params) => {
  const { current = 1, searchValue = '' } = params || {};
  const allData = [
    { id: 1, name: 'Page Option 1' },
    { id: 2, name: 'Page Option 2' },
    { id: 3, name: 'Page Option 3' },
    { id: 4, name: 'Page Option 4' },
  ];

  const filteredData = searchValue
    ? allData.filter((item) => item.name.includes(searchValue))
    : allData;

  return {
    data: filteredData.slice((current - 1) * 2, current * 2),
    total: filteredData.length,
  };
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      type: 'basic',
      api: mockApi,
    },
    {
      type: 'pagination',
      api: mockPaginationApi,
      pagination: true,
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
        <BusinessSelect
          data-testid="basic-select"
          type="basic"
          value={value}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <BusinessSelect
          data-testid="pagination-select"
          type="pagination"
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: 16 }} data-testid="nonexistent-select">
        <BusinessSelect type="nonexistent" onChange={handleChange} />
      </div>

      <Button data-testid="clear" onClick={() => setValue(undefined)}>
        Clear
      </Button>
    </div>
  );
};

export default Basic;
