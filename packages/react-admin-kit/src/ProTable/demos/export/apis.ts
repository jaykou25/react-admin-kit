export const mockRequestForExport = (): Promise<any> => {
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
