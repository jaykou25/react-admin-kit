import dayjs from 'dayjs';

let dataSource = [
  {
    id: 1,
    name: 'Jack',
    nickname: 'Jacky',
    phone: '133',
    isMember: '1',
    grade: 'A',
    gender: 'male',
    createdAt: '2025-11-01T10:15:00.000Z',
  },
  {
    id: 2,
    name: 'Tom',
    nickname: 'Tommy',
    phone: '155',
    isMember: '0',
    gender: 'male',
    createdAt: '2025-10-20T09:30:00.000Z',
  },
  {
    id: 3,
    name: 'Jeff',
    nickname: 'Jeffy',
    phone: '138',
    gender: 'male',
    createdAt: '2025-09-15T14:45:00.000Z',
  },
  {
    id: 4,
    name: 'Janni',
    nickname: 'Jan',
    phone: '139',
    gender: 'female',
    createdAt: '2025-08-05T08:00:00.000Z',
  },
  {
    id: 5,
    name: 'Tim',
    nickname: 'Timmy',
    phone: '152',
    gender: 'male',
    createdAt: '2025-07-12T18:20:00.000Z',
  },
  {
    id: 6,
    name: 'Steve',
    nickname: 'Stevie',
    phone: '163',
    gender: 'male',
    createdAt: '2025-06-30T12:00:00.000Z',
  },
];

export const mockRequest = (params): any => {
  return new Promise((resolve) => {
    const { name, phone, gender, startTime, endTime, current, pageSize } =
      params;
    console.log('params', { current, pageSize, gender, startTime, endTime });
    const searchData = dataSource.filter((item) => {
      const nameMatch =
        name !== undefined
          ? item.name.toLowerCase().includes(name.toLowerCase())
          : true;
      const phoneMatch =
        phone !== undefined
          ? item.phone.toLowerCase().includes(phone.toLowerCase())
          : true;
      const genderMatch =
        gender !== undefined
          ? item.gender.toLowerCase() === gender.toLowerCase()
          : true;
      let createdAtMatch = true;

      if (startTime && endTime) {
        const createdAt = dayjs(item.createdAt).valueOf();
        const start = dayjs(startTime).valueOf();
        const end = dayjs(endTime).valueOf();

        createdAtMatch = createdAt >= start && createdAt <= end;
      }

      return nameMatch && phoneMatch && genderMatch && createdAtMatch;
    });

    const result = searchData.slice(
      (current - 1) * pageSize,
      current * pageSize,
    );
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
  return new Promise((resolve) => {
    dataSource.push({ ...data, id: Date.now() });
    setTimeout(() => resolve(true), 300);
  });
};

export const mockUpdate = (data) => {
  return new Promise((resolve) => {
    const targetIndex = dataSource.findIndex((item) => item.id === data.id);
    if (targetIndex > -1) {
      dataSource[targetIndex] = { ...dataSource[targetIndex], ...data };
    }

    setTimeout(() => resolve(true), 300);
  });
};
