export const queryOrg = () => {
  return new Promise((resolve) => {
    console.log('queryOrg only once');
    setTimeout(() => {
      resolve({
        data: [
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
        ],
      });
    }, 1000);
  });
};
