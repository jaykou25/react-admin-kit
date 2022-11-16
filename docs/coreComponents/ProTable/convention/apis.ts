export const mockRequest = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: '1',
              name: 'tom',
              deptId: '3',
              deptName: '销售部',
              isMember: 1,
              gradeId: '2',
              gradeName: 'B',
            },
          ],
        }),
      1000,
    );
  });
};

export const requestExtra = (id) => {
  console.log('request detail for id', id);
  return new Promise((resolve) => {
    setTimeout(() => resolve(8888), 500);
  });
};
