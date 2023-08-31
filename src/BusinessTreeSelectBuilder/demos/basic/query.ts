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
              name: '业务子公司A',
              id: 2,
            },
            {
              name: '业务子公司B',
              id: 3,
            },
          ],
        },
        { name: '其它公司', id: -1 },
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
          { name: '集团 - 总经理室', id: 1 },
          {
            name: '集团 - 销售部',
            id: 2,
            children: [
              { name: '集团 - 销售部1', id: 3 },
              { name: '集团 - 销售部2', id: 4 },
            ],
          },
        ]);
      } else if (params.id === 2 || params.id === 3) {
        resolve([
          {
            name: '子公司 - 部门1',
            id: 1,
            children: [
              {
                name: '子公司 - 子部门1',
                id: 2,
              },
              {
                name: '子公司- 子部门2',
                id: 3,
              },
            ],
          },
        ]);
      } else {
        resolve([
          {
            name: '其它公司 - 部门1',
            id: 1,
            children: [
              {
                name: '其它公司 - 子部门1',
                id: 2,
              },
              {
                name: '其它公司 - 子部门2',
                id: 3,
              },
            ],
          },
          { name: '其它公司 - 部门2', id: -1 },
        ]);
      }
    }, 1000);
  });
};
