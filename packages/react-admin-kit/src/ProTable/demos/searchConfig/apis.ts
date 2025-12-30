export const mockRequest = (): any => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: 1, name: 'Jack', phone: 133 },
            { id: 2, name: 'Tom', phone: 155 },
          ],
          success: true,
          total: 2,
        }),
      1000,
    );
  });
};
