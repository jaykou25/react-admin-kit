export const mockRequest = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, name: 'Jack', phone: 133 },
            { id: 2, name: 'Tom', phone: 155 },
          ],
        }),
      1000,
    );
  });
};

export const delelteRecord = (ids) => {
  return new Promise((resolve) => {
    console.log('delete record', ids);
    setTimeout(() => resolve(true), 500);
  });
};

export const mockRequestForExport = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              name: 'Jack',
              birthday: 1667375314278,
              sex: 'man',
              type: '1',
              range: [1667375314278, 1667375314278],
              status: '1',
              createTime: 1667375314278,
            },
          ],
        }),
      1000,
    );
  });
};
