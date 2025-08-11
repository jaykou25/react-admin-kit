import { Button } from 'antd';
import BusinessSelectBuilder, { clearTreeSelectCache } from '../../index';

// Mock API function
const mockApi = async () => {
  return [
    { id: 1, name: 'Cached Option 1' },
    { id: 2, name: 'Cached Option 2' },
  ];
};

const BusinessSelect = BusinessSelectBuilder({
  apis: [
    {
      type: 'cached',
      api: mockApi,
    },
  ],
});

const ClearCache = () => {
  const handleClearAll = () => {
    clearTreeSelectCache();
  };

  const handleClearSpecific = () => {
    clearTreeSelectCache('cached');
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <BusinessSelect data-testid="cached-select" type="cached" />
      </div>

      <Button data-testid="clear-all" onClick={handleClearAll}>
        Clear All Cache
      </Button>

      <Button data-testid="clear-specific" onClick={handleClearSpecific}>
        Clear Specific Cache
      </Button>
    </div>
  );
};

export default ClearCache;
