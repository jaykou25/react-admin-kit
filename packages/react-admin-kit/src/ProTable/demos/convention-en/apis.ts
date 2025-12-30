export const mockRequest = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: [
            {
              id: '1',
              name: 'tom',
              deptId: '3',
              deptName: 'Sales Dept',
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
