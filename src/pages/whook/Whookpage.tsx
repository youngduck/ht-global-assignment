import useChartData from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchWhookData } from "@/services/api";
import WhookItem from "@/component/whookItem/WhookItem";

const Whookpage = () => {
  const { dataSource, fetchMoreData, hasMore } = useChartData(fetchWhookData);

  return (
    <>
      <h1 className="home-header">Whosfan + K-pop</h1>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
      >
        {dataSource.map((item, idx) => (
          <WhookItem key={idx} idx={idx} singer={item.singer} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Whookpage;
