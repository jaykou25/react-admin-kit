export const mockRequest = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [{ id: 1, name: 'Jack' }],
        }),
      1000,
    );
  });
};
