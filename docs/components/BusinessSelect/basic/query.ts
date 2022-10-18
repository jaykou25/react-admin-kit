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
  const brands = ['apple', 'google', 'ant', 'mi'];

  if (params.searchValue) {
    data.push({ name: params.searchValue, id: -1 });
  } else {
    for (let i = 0; i < 10; i++) {
      const index = i % 4;
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
