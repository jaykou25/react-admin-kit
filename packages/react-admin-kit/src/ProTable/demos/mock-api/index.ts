let dataSource = [
  { id: 1, name: 'Jack', phone: '133', isMember: '1', grade: 'A' },
  { id: 2, name: 'Tom', phone: '155', isMember: '0' },
  { id: 3, name: 'Jeff', phone: '138' },
  { id: 4, name: 'Janni', phone: '139' },
  { id: 5, name: 'Tim', phone: '152' },
  { id: 6, name: 'Steve', phone: '163' }
];

export const mockRequest = (params): any => {
  return new Promise((resolve) => {
    const { name, phone, current, pageSize } = params
    const searchData = dataSource.filter((item) => {
      const nameMatch = name !== undefined ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
      const phoneMatch = phone !== undefined ? item.phone.toLowerCase().includes(phone.toLowerCase()) : true;
      return nameMatch && phoneMatch;
    })

    const result = searchData.slice((current - 1) * pageSize, current * pageSize)
    setTimeout(
      () =>
        resolve({
          data: result,
          success: true,
          total: dataSource.length,
        }),
      300,
    );
  });
};

export const mockDelete = (ids) => {
  return new Promise((resolve) => {
    dataSource = dataSource.filter((item) => !ids.includes(item.id));
    setTimeout(() => resolve(true), 300);
  });
};

export const mockCreate = (data) => {
  return new Promise(resolve => {
    dataSource.push({ ...data, id: Date.now() })
    setTimeout(() => resolve(true), 300)
  })
}

export const mockUpdate = (data) => {
  return new Promise(resolve => {
    const targetIndex = dataSource.findIndex(item => item.id === data.id)
    if (targetIndex > -1) {
      dataSource[targetIndex] = { ...dataSource[targetIndex], ...data }
    }

    setTimeout(() => resolve(true), 300)
  })
}