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
            {
              id: 2,
              name: 'Rose',
              birthday: 1667461714278,
              sex: 'woman',
              type: '2',
              range: [1667461714278, 1667548114278],
              status: '2',
              createTime: 1667461714278,
            },
            {
              id: 3,
              name: 'Tom',
              birthday: 1667548114278,
              sex: 'man',
              type: '1',
              range: [1667548114278, 1667634514278],
              status: '1',
              createTime: 1667548114278,
            },
          ],
        }),
      1000,
    );
  });
};
