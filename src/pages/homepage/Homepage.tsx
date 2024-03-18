import useChartData from "@/hooks/useInfinityScroll";
import ChartItem from "@/component/chartItem/ChartItem";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchChartData } from "@/services/api";
import "./homepage.scss";

const Homepage = () => {
  const { dataSource, fetchMoreData, hasMore } = useChartData(fetchChartData);

  return (
    <>
      <h1 className="home-header">Top 50</h1>
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
    </>
  );
};

export default Homepage;
