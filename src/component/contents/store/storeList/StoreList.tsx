import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchStoreData } from "@/services/api";
import StoreItem from "../storeItem/StoreItem";

const StoreList = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchStoreData);
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loading />}
    >
      {dataSource.map((item, idx) => (
        <StoreItem key={idx} singer={item.singer} />
      ))}
    </InfiniteScroll>
  );
};

export default StoreList;
