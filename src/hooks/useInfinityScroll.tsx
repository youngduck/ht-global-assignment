import { useState, useEffect } from "react";
import type { IChart } from "@/types/types";

const useChartData = (fetchFunction: any, initialPage = 1) => {
  const [dataSource, setDataSource] = useState<IChart[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetchFunction(page);
    const { data } = result;
    setDataSource(data);
  };

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const nextPage = page + 1;
      const result = await fetchFunction(nextPage);
      const { data, next } = result;

      if (next === null) {
        setHasMore(false);
      }
      setPage(nextPage);
      setDataSource((prevData) => prevData.concat(data));
    }, 2000);
  };

  return { dataSource, fetchMoreData, hasMore };
};

export default useChartData;
