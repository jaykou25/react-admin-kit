import React, { useEffect, useState } from 'react';

export function Demo({ fetchData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result: any) => {
      setData(result);
      setLoading(false);
    });
  }, [fetchData]);

  if (loading) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
