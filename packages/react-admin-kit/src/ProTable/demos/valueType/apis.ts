export const mockRequest = (params: any): any => {
  console.log('请求数据参数:', params);
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve({
          data: [
            {
              id: 1,
              date: 1692861082010,
              dateTime: 1692861082010,
              dateRange: [1690819200000, 1692861082010],
              money: 1234,
              userId: 1,
            },
          ],
          success: true,
          total: 1,
        });
      },

      500,
    );
  });
};
