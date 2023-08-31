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

export const mockAdd = (data: any) => {
  console.log('创建用户参数:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockUpdate = (data: any) => {
  console.log('更新用户参数:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
