export const queryCompany = () => {
  return new Promise((resolve) => {
    console.log('queryOrg only once');
    setTimeout(() => {
      resolve([
        {
          name: 'Group Company',
          id: 1,
          children: [
            {
              name: 'Sub Company A',
              id: 2,
            },
            {
              name: 'Sub Company B',
              id: 3,
            },
          ],
        },
        { name: 'Other Company', id: -1 },
      ]);
    }, 1200);
  });
};

export const queryDept = (params): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryDept', params);
    setTimeout(() => {
      if (params.id === 1) {
        resolve([
          { name: 'Group - CEO', id: 1 },
          {
            name: 'Group - Sales',
            id: 2,
            children: [
              { name: 'Group - Sale 1', id: 3 },
              { name: 'Group - Sale 2', id: 4 },
            ],
          },
        ]);
      } else if (params.id === 2) {
        resolve([
          {
            name: 'Sub Company A - dept',
            id: 1,
            children: [
              {
                name: 'Sub Company A - dept 1',
                id: 2,
              },
              {
                name: 'Sub Company A - dept 2',
                id: 3,
              },
            ],
          },
        ]);
      } else if (params.id === 3) {
        resolve([
          {
            name: 'Sub Company B - dept',
            id: 1,
            children: [
              {
                name: 'Sub Company B - dept 1',
                id: 2,
              },
              {
                name: 'Sub Company B - dept 2',
                id: 3,
              },
            ],
          },
        ]);
      } else {
        resolve([
          {
            name: 'Other Company - dept',
            id: 1,
            children: [
              {
                name: 'Other Company - dept 1',
                id: 2,
              },
              {
                name: 'Other Company - dept 2',
                id: 3,
              },
            ],
          },
        ]);
      }
    }, 1000);
  });
};
