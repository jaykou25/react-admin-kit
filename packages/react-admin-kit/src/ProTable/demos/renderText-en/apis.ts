export const mockRequestForRenderText = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              name: 'This is a very long user name',
              phone: 15881234567,
            },
          ],
        }),
      500,
    );
  });
};
