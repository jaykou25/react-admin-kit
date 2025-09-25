let data = [
  { id: 1, name: 'Jack', phone: 133, isMember: '1', grade: 'A' },
  { id: 2, name: 'Tom', phone: 155, isMember: '0' },
];

export const mockRequest = (): any => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data,
          success: true,
          total: 2,
        }),
      1000,
    );
  });
};

export const delelteRecord = (ids) => {
  return new Promise((resolve) => {
    console.log('delete record', ids);
    data = data.filter((item) => !ids.includes(item.id));
    setTimeout(() => resolve(true), 500);
  });
};
