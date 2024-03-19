import useInfinityScroll from "@/hooks/useInfinityScroll";
import Loading from "@/component/loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchChargeData } from "@/services/api";
import ChargeItem from "../chargeItem/ChargeItem";

const ChargeList = () => {
  const { dataSource, fetchMoreData, hasMore } =
    useInfinityScroll(fetchChargeData);
  return (
    <InfiniteScroll
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loading />}
    >
      {dataSource.map((item, idx) => (
        <ChargeItem key={idx} point={item.point} price={item.price} />
      ))}
    </InfiniteScroll>
  );
};

export default ChargeList;
