import useInfinityScroll from "@/hooks/useInfinityScroll";
import ChartItem from "@/component/chart/chartItem/ChartItem";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchChartData } from "@/services/api";

const ChartList = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchChartData);

  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loading />}
    >
      {dataSource.map((item, idx) => (
        <ChartItem
          key={idx}
          rank={idx + 1}
          singer={item.singer}
          title={item.title}
        />
      ))}
    </InfiniteScroll>
  );
};

export default ChartList;
