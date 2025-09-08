export const mockRequest = (): Promise<any> => {
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

export const requestExtra = (id) => {
  console.log('request detail for id', id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(8888), 1000);
  });
};
