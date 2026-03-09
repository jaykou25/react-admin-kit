import { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  name: string;
}

interface AsyncDataComponentProps {
  fetchData: () => Promise<DataItem[]>;
}

export default function AsyncDataComponent({ fetchData }: AsyncDataComponentProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
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
