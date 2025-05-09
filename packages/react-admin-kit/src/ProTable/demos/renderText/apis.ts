export const mockRequestForRenderText = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: 1,
              name: '这是一个很长的用户名',
              phone: 15881234567,
            },
          ],
        }),
      500,
    );
  });
};
