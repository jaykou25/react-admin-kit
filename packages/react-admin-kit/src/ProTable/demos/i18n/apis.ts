let dataSource = [
  { id: 1, name: 'Jack', phone: '133', isMember: '1', grade: 'A' },
  { id: 2, name: 'Tom', phone: '155', isMember: '0' },
];

export const mockRequest = (params): any => {
  return new Promise((resolve) => {
    const { name, phone } = params
    setTimeout(
      () =>
        resolve({
          data: dataSource.filter((item) => {
            const nameMatch = name !== undefined ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
            const phoneMatch = phone !== undefined ? item.phone.toLowerCase().includes(phone.toLowerCase()) : true;
            return nameMatch && phoneMatch;
          }),
          success: true,
          total: 2,
        }),
      500,
    );
  });
};

export const delelteRecord = (ids) => {
  return new Promise((resolve) => {
    dataSource = dataSource.filter((item) => !ids.includes(item.id));
    setTimeout(() => resolve(true), 500);
  });
};

export const mockCreate = (data) => {
  return new Promise(resolve => {
    dataSource.push({ ...data, id: Date.now() })
    setTimeout(() => resolve(true), 500)
  })
}

export const mockUpdate = (data) => {
  return new Promise(resolve => {
    const targetIndex = dataSource.findIndex(item => item.id === data.id)
    if (targetIndex > -1) {
      dataSource[targetIndex] = { ...dataSource[targetIndex], ...data }
    }

    setTimeout(() => resolve(true), 500)
  })
}
