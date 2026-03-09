import { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  name: string;
}

export default function AsyncDataComponent({ fetchData, searchData }) {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [fetchData]);

  const handleSearchData = () => {
    setLoading(true);
    fetchData({ query: 'test' }).then((result) => {
      setData(result);
      setLoading(false);
    });
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <button data-testid="setquery" onClick={handleSearchData}>
        set
      </button>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
