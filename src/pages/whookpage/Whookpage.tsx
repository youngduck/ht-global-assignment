import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchWhookData } from "@/services/api";
import WhookItem from "@/component/whookItem/WhookItem";
import "./whookPage.scss";

const Whookpage = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchWhookData);

  return (
    <>
      <h1 className="whookPage-header">Whosfan + K-pop</h1>
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
