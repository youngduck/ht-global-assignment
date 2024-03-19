import { useState, useEffect } from "react";

const useInfinityScroll = (fetchFunction: any, initialPage = 1) => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetchFunction(page);
    setDataSource(result);
  };

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const nextPage = page + 1;
      const result = await fetchFunction(nextPage);

      if (result.length === 0) {
        setHasMore(false);
      }
      setPage(nextPage);
      setDataSource((prevData) => prevData.concat(result));
    }, 1000);
  };

  return { dataSource, fetchMoreData, hasMore };
};

export default useInfinityScroll;
