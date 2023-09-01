export const queryColor = (): Promise<any> => {
  return new Promise((resolve) => {
    console.log('queryColor only once');
    setTimeout(() => {
      resolve({
        data: [
          { name: '红', id: 1 },
          { name: '绿', id: 2 },
        ],
      });
    }, 1000);
  });
};

export const queryBrand = (params): Promise<any> => {
  console.log('qeryBrand', { params });
  const data: any = [];
  const brands = ['苹果', '谷歌', '华为', '小米', '蚂蚁'];

  if (params.searchValue) {
    data.push({ name: params.searchValue, id: -Math.random() });
  } else {
    for (let i = 0; i < 10; i++) {
      const index = i % 5;
      data.push({ name: brands[index], id: Math.random() });
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        total: 30,
      });
    }, 500);
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
