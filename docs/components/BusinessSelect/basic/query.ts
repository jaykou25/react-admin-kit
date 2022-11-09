export const queryColor = () => {
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

export const queryBrand = (params) => {
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

export const queryUser = (params) => {
  return new Promise((resolve) => {
    console.log('queryUser', params);
    if (params.type == 1) {
      return setTimeout(() => {
        resolve({
          data: [{ name: 'A', id: 1 }],
        });
      }, 500);
    }

    if (params.type == 2) {
      return setTimeout(() => {
        resolve({
          data: [{ name: 'B', id: 2 }],
        });
      }, 600);
    }

    return setTimeout(() => {
      resolve({
        data: [
          { name: 'A', id: 1 },
          { name: 'B', id: 2 },
          { name: 'C', id: 3 },
        ],
      });
    }, 800);
  });
};
