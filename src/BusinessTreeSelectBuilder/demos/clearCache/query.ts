export const queryCompany = () => {
  return new Promise((resolve) => {
    console.log('queryOrg only once');
    setTimeout(() => {
      resolve([
        {
          name: '集团公司',
          id: 1,
          children: [
            {
              name: '业务公司1',
              id: 2,
            },
            {
              name: '业务公司2',
              id: 3,
            },
          ],
        },
        { name: '其它公司', id: -1 },
      ]);
    }, 1000);
  });
};

export const queryDept = (params) => {
  return new Promise((resolve) => {
    console.log('queryDept', params);
    setTimeout(() => {
      if (params.id === 1) {
        console.log('in');
        resolve([
          { name: '总经理室', id: 1 },
          {
            name: '销售部',
            id: 2,
            children: [
              { name: '销售部1', id: 3 },
              { name: '销售部2', id: 4 },
            ],
          },
        ]);
      } else {
        resolve([
          {
            name: '部门1',
            id: 1,
            children: [
              {
                name: '子部门1',
                id: 2,
              },
              {
                name: '子部门2',
                id: 3,
              },
            ],
          },
          { name: '部门2', id: -1 },
        ]);
      }
    }, 1000);
  });
};
