export const queryCountry = (): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryCountry only once');
    setTimeout(() => {
      resolve({
        data: [
          { name: 'China', id: 1 },
          { name: 'USA', id: 2 },
          { name: 'Japan', id: 3 },
          { name: 'Korean', id: 4 },
        ],
      });
    }, 1000);
  });
};

export const queryBrand = (params): Promise<any> => {
  console.log('qeryBrand', { params });
  const data: any = [];
  const brands = ['Apple', 'Google', 'Huawei', 'Xiaomi', 'Ant Group', 'DJI'];

  if (params.searchValue) {
    data.push({ name: params.searchValue, id: -Math.random() });
  } else {
    for (let i = 0; i < 10; i++) {
      const index = i % 6;
      data.push({ name: brands[index], id: Math.random() });
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        total: 300,
      });
    }, 800);
  });
};

export const queryUser = (params): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryUser', params);
    if (params.type === 1) {
      setTimeout(() => {
        resolve({
          data: [{ name: 'A', id: 1 }],
        });
      }, 500);
    }

    if (params.type === 2) {
      setTimeout(() => {
        resolve({
          data: [{ name: 'B', id: 2 }],
        });
      }, 600);
    }

    setTimeout(() => {
      resolve({
        data: [
          { name: 'A', id: 1, userName: '人员A', userId: 1 },
          { name: 'B', id: 2, userName: '人员B', userId: 2 },
          { name: 'C', id: 3, userName: '人员C', userId: 3 },
        ],
      });
    }, 1200);
  });
};

export const queryStaff = (): Promise<any> => {
  return new Promise((resolve) => {
    console.log('query group data');
    setTimeout(() => {
      resolve({
        data: [
          {
            name: <span>Manager</span>,
            title: 'manager title',
            className: 'group-demo',
            options: [
              {
                name: <span>Jack</span>,
                id: 'Jack',
                className: 'group-sub-demo',
              },
              {
                name: <span>Lucy</span>,
                id: 'Lucy',
                title: 'lucy title',
                disabled: true,
              },
            ],
          },
        ],
      });
    }, 1000);
  });
};
