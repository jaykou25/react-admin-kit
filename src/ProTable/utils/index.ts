/**
 * 处理ProTable request中的参数, 将sort转化成符合后端排序的格式
 */
export const handleRequestParams = (params, sort) => {
  // sort对象是{createdTime: 'ascend'}, 要转成{sort: 'createdTime,asc'}

  if (Object.keys(sort).length < 1) {
    return params;
  }

  const sortMap = { ascend: 'asc', descend: 'desc' };

  const sortKey = Object.keys(sort)[0];
  const sortParams = { sort: `${sortKey},${sortMap[sort[sortKey]]}` };

  return { ...params, ...sortParams };
};

/**
 * ProTable Columns中的排序属性
 */
export const withSorter = (dataIndex: string, defaultSorter: 'desc' | 'asc' = 'asc'): any => {
  const orderMap = { asc: 'ascend', desc: 'descend' };

  const directions =
    defaultSorter === 'asc' ? ['ascend', 'descend', 'ascend'] : ['descend', 'ascend', 'descend'];

  return {
    defaultSortOrder: orderMap[defaultSorter],
    sortDirections: directions,
    sorter: true,
  };
};
