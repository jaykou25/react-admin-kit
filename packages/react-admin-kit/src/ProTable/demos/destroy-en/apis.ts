export const mockRequest = (params: any): any => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        if (params.current === 1) {
          resolve({
            data: [
              { id: 1, name: 'Jack', phone: 133 },
              { id: 2, name: 'Tom', phone: 155 },
              { id: 3, name: 'Jeff', phone: 133 },
              { id: 4, name: 'Janni', phone: 155 },
              { id: 5, name: 'Tim', phone: 155 },
            ],
            success: true,
            total: 6,
          });
        } else {
          resolve({
            data: [{ id: 6, name: 'Steve', phone: 133 }],
            success: true,
            total: 6,
          });
        }
      },

      1000,
    );
  });
};

export const mockAdd = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockUpdate = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const mockDetroy = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};
