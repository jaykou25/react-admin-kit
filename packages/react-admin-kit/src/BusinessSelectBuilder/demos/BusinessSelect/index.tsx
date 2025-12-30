import { BusinessSelectBuilder } from 'react-admin-kit';
import { queryBrand, queryCountry, queryStaff, queryUser } from './query';

type SelectType = 'country' | 'brand' | 'user' | 'staff'; // for better code hints

const BusinessSelect = BusinessSelectBuilder<SelectType>({
  apis: [
    {
      api: queryCountry,
      type: 'country',
      pagination: false,
    },
    {
      api: queryBrand,
      type: 'brand',
      pagination: true,
    },
    {
      api: queryUser,
      type: 'user',
    },
    {
      type: 'staff',
      api: queryStaff,
    },
  ],
  defaultProps: {
    placeholder: 'please choose',
  },
});

export default BusinessSelect;
