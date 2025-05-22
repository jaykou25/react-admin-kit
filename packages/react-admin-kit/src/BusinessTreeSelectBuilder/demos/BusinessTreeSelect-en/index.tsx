import { BusinessTreeSelectBuilder } from 'react-admin-kit';
import { queryCompany, queryDept } from './query';

// for better code hints
type TreeSelectType = 'company' | 'dept';

const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({
  apis: [
    {
      api: queryCompany,
      type: 'company',
    },
    {
      api: queryDept,
      type: 'dept',
    },
  ],
  defaultProps: {
    placeholder: 'please choose',
  },
});

export default BusinessTreeSelect;
